var restify = require('restify');  //package for API routes
var pg = require('pg');  //package for SQL db
/*
    ToDo:
        passportJS, //user auth
*/

// get db string from environmental var in this format: "postgres://username:password@localhost/database"
var connectionString = process.env.DATABASE_URL;

//run the server
var port = process.env.PORT || 80; //it's required to have this environmental variable set in on deploy on heroku

var server = restify.createServer({
  name: 'lestands',
  version: '1.0.0'
});

server.pre(restify.CORS());
server.use(restify.fullResponse());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


// send the database the given query and send the response to the handler
var queryDB = function (query, params, res, outputHandler) {

  if (typeof outputHandler === 'undefined') {
    outputHandler = function (rows) { return rows; };
  }

  // get a pg client from the connection pool
  pg.connect(connectionString, function (err, client, done) {

    var handleError = function (err) {
      // no error occurred, continue with the request
      if (!err) { return false; }

      // An error occurred, remove the client from the connection pool.
      // A truthy value passed to done will remove the connection from the pool
      // instead of simply returning it to be reused.
      // In this case, if we have successfully received a client (truthy)
      // then it will be removed from the pool.
      done(client);

      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('An error occurred, ' + err);
      return true;
    };

    // record the visit
    client.query(query, params, function (err, result) {

      // handle an error from the query
      if (handleError(err)) { return; }

      // return the client to the connection pool for other requests to reuse
      done();

      outputHandler(result.rows);

    });
  });
};


// connects to database
// run select query on database
// send result
// before rows are sent, they're run through an optional preProcess function which by default
// does nothing. See `sendSelectionFirstRow` for example of how this could be used.
var sendSelection = function (query, params, res, preProcess) {

  if (typeof preProcess === 'undefined') {
    preProcess = function (rows) { return rows; };
  }

  var outputHandler = function (rows) {
    res.send(preProcess(rows));
  };

  queryDB(query, params, res, outputHandler);
};


// instead of sending an array of results, return just the first one.
// useful when you know there should only be one result.
var sendSelectionFirstRow = function (query, params, res) {
  var preProcess = function (rows) {
    return rows[0];
    // TODO: what to return if there is no rows[0]? (if rows.length < 1)
  };
  sendSelection(query, params, res, preProcess);
};



//Static routes:
// /stands - show all stands
// /stands/:id - show a specific stand
// /stands/:id/updates - show all updates for a specific stand
// /stands/:id/updates/:updateID - show a specific update for a specific stand


// /stands
server.get('/stands', function (req, res, next) {

  var query = 'WITH \
    stats AS (SELECT  \
      "standID" AS id,\
      MAX(date) AS "lastUpdateDate",  \
      SUM("amountAdded") AS "totalDistributed",  \
      COUNT(id) AS "totalUpdates"  \
      FROM updates GROUP BY "standID"  \
    )\
  SELECT stands.id, stands.name, stands.description, stands."geoLat", stands."geoLong", \
         stands.address1, stands.address2, stands.city, stands.state, stands.zip, \
         stats."lastUpdateDate", stats."totalDistributed", stats."totalUpdates" \
  FROM stands LEFT OUTER JOIN stats ON stats.id = stands.id \
  ORDER BY id;';

  sendSelection(query, [], res);

  return next();
});


// /stands/:id
server.get('/stands/:standID', function (req, res, next) {

  // get updates for the given stand
  // get the given stand
  // add the updates to the stand
  // send

  var sendStand = function (updates) {

    var selectStandQuery = '\
      SELECT stands.id, stands.name, stands.description, stands."geoLat", stands."geoLong", \
             stands.address1, stands.address2, stands.city, stands.state, stands.zip \
      FROM stands WHERE id = ($1) LIMIT 1'; // note LIMIT 1 sanity check (we only expect 1 anyway)

    var preProcess = function (rows) {
      var stand = rows[0];
      stand.updates = updates;
      return stand;
    };

    sendSelection(selectStandQuery, [req.params.standID], res, preProcess);
  };

  var selectUpdatesQuery = 'SELECT * FROM updates WHERE "standID" = ($1)';
  queryDB(selectUpdatesQuery, [req.params.standID], res, sendStand);


  // sendSelection(query, req.params.standID, res, preProcess);

  // var stand = {
  //   "id": 1,
  //   "name": "16th & Mission",
  //   "description": "Amber's stand outside Herbivore",
  //   "updates" : [
  //   {
  //     "id": 1,
  //     "date": "March 15, 2014",
  //     "amountWhenChecked": 15,
  //     "amountAdded": 80,
  //     "comments": "the sticker is coming off"
  //   },
  //   {
  //     "id": 115,
  //     "date": "June 11, 2014",
  //     "amountWhenChecked": 45,
  //     "amountAdded": 30,
  //     "comments": ""
  //   },
  //   {
  //     "id": 135,
  //     "date": "April 1, 2008",
  //     "amountWhenChecked": 0,
  //     "amountAdded": 50,
  //     "comments": "Just started"
  //   },
  //   {
  //     "id": 1235,
  //     "date": "November 22, 2014",
  //     "amountWhenChecked": 0,
  //     "amountAdded": 500,
  //     "comments": "nooooooo"
  //   }
  //   ]
  // };

  // res.send(stand);
  return next();
});


// /stands/:id/updates
// Returns an array of updates associated with a specified stand.
// If there have been no updates, the array will be empty.
server.get('/stands/:standID/updates', function (req, res, next) {

  sendSelection('SELECT * FROM updates WHERE "standID" = ($1)', [req.params.standID], res);

  return next();
});


// /stands/:id/updates/:updateID
server.get('/stands/:standID/updates/:updateID', function (req, res, next) {

  sendSelectionFirstRow('SELECT * FROM updates WHERE "standID" = ($1) AND id = ($2)', [req.params.standID, req.params.updateID], res);

  return next();
});



// this is just a route for the index of the API
server.get('/', function (req, res, next) {
  var bs = {
    "this": "",
    "API": "",
    "is": "",
    "just": "",
    "a": "",
    "test": ""
  };

  res.send(bs);
  return next();
});




server.listen(port, function () {
  console.log('%s listening at url %s', server.name, server.url);
});

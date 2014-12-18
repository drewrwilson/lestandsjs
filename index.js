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

//Static routes:
// /stands - show all stands
// /stands/:id - show a specific stand
// /stands/:id/updates - show all updates for a specific stand
// /stands/:id/updates/:updateID - show a specific update for a specific stand
// /geo - show geojson of all stands


// /stands
server.get('/stands', function (req, res, next) {
  var stands = [{
    "id": 1,
    "name": "16th & Mission",
    "pic": "stand1.jpg",
    "description": "Amber's stand outside Herbivore",
    "dateDeployed": "Aug 20, 2013",
    "dateRetired": "",
    "totalDistributed": 555,
    "totalUpdates": 5,
    "lastUpdateDate": "2014-10-01"
  }, {
    "id": 2,
    "name": "9th & Howard",
    "pic": "stand2.jpg",
    "description": "Outside Code for America",
    "dateDeployed": "Aug 30, 2013",
    "dateRetired": "",
    "totalDistributed": 222,
    "totalUpdates": 2,
    "lastUpdateDate": "2014-06-01"
  }, {
    "id": 3,
    "name": "2nd & Market",
    "pic": "stand3.jpg",
    "description": "Its right there",
    "dateDeployed": "Aug 13, 2011",
    "dateRetired": "",
    "totalDistributed": 432,
    "totalUpdates": 20,
    "lastUpdateDate": "2014-09-20"
  }];

  res.send(stands);
  return next();
});

// /stands/:id
server.get('/stands/:id', function (req, res, next) {
  var stand = {
    "id": 1,
    "name": "16th & Mission",
    "pic": "stand1.jpg",
    "description": "Amber's stand outside Herbivore",
    "dateDeployed": "10/20/2013",
    "dateRetired": "",
    "updates" : [
    {
      "id": 1,
      "date": "March 15, 2014",
      "amountWhenChecked": 15,
      "amountAdded": 80,
      "comments": "the sticker is coming off"
    },
    {
      "id": 115,
      "date": "June 11, 2014",
      "amountWhenChecked": 45,
      "amountAdded": 30,
      "comments": ""
    },
    {
      "id": 135,
      "date": "April 1, 2008",
      "amountWhenChecked": 0,
      "amountAdded": 50,
      "comments": "Just started"
    },
    {
      "id": 1235,
      "date": "November 22, 2014",
      "amountWhenChecked": 0,
      "amountAdded": 500,
      "comments": "nooooooo"
    }
    ]
  };

  res.send(stand);
  return next();
});



// /stands/:id/updates
// Returns an array of updates associated with a specified stand.
// If there have been no updates, the array will be empty.
// connects to database
// SELECT * FROM updates WHERE stand_id = id
// send
server.get('/stands/:id/updates', function (req, res, next) {

  // get a pg client from the connection pool
  pg.connect(connectionString, function(err, client, done) {

    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      // An error occurred, remove the client from the connection pool.
      // A truthy value passed to done will remove the connection from the pool
      // instead of simply returning it to be reused.
      // In this case, if we have successfully received a client (truthy)
      // then it will be removed from the pool.
      done(client);
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('An error occurred');
      return true;
    };

    // record the visit
    client.query('SELECT * FROM updates WHERE stand_id = ($1)', [req.params.id], function(err, result) {

      // handle an error from the query
      if(handleError(err)) return;

      // return the client to the connection pool for other requests to reuse
      done();

      res.send(result.rows);

    });
  });

  return next();
});


// /stands/:id/updates/:updateID
// this is hard-coded to be update #1 on stand #1
server.get('/stands/:id/updates/:updateID', function (req, res, next) {
  var update = {
    "id": 1,
    "date": "March 15, 2014",
    "amountWhenChecked": 15,
    "amountAdded": 80,
    "comments": "the sticker is coming off"
  };

  res.send(update);
  return next();
});

// /geo
// this is just a route for the index of the API
server.get('/geo', function (req, res, next) {
  var geojsonOfStands = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84643602371216,
        35.22478017491058,
        0
        ]
      },
      "properties": {
        "name": "S Tryon & MLK #1",
        "styleUrl": "#icon-503-3F5BA9",
        "styleHash": "4d8cfcbd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84629654884338,
        35.22478893924818,
        0
        ]
      },
      "properties": {
        "name": "S Tryon & MLK #2",
        "styleUrl": "#icon-503-3F5BA9",
        "styleHash": "4d8cfcbd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84186553955078,
        35.228114937026774,
        0
        ]
      },
      "properties": {
        "name": "Outside Capital Grille",
        "styleUrl": "#icon-503-3F5BA9",
        "styleHash": "4d8cfcbd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.8421927690506,
        35.22787830927846,
        0
        ]
      },
      "properties": {
        "name": "Outside Qdoba",
        "styleUrl": "#icon-503-3F5BA9",
        "styleHash": "4d8cfcbd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84293305873871,
        35.227242916539964,
        0
        ]
      },
      "properties": {
        "name": "Outside Bank of America",
        "styleUrl": "#icon-503-3F5BA9",
        "styleHash": "4d8cfcbd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.8412379026413,
        35.22391250080143,
        0
        ]
      },
      "properties": {
        "name": "Uptown bus terminal",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.8432012796402,
        35.225538286613535,
        0
        ]
      },
      "properties": {
        "name": "Outside BB&T",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84520220756531,
        35.22719690514846,
        0
        ]
      },
      "properties": {
        "name": "Outside parking garage #1",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84841549396515,
        35.225218390631575,
        0
        ]
      },
      "properties": {
        "name": "Outside American Roadside Burgers",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84839403629303,
        35.22499928306689,
        0
        ]
      },
      "properties": {
        "name": "Uptown Starbucks #1",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.8486944437027,
        35.22507377970525,
        0
        ]
      },
      "properties": {
        "name": "Uptown Starbucks #2",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84418296813966,
        35.22491163987534,
        0
        ]
      },
      "properties": {
        "name": "Outside parking garage #2",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84527730941772,
        35.22385114975566,
        0
        ]
      },
      "properties": {
        "name": "Near Convention Center",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.84019184112549,
        35.227374377514785,
        0
        ]
      },
      "properties": {
        "name": "Outside of Merts",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.83978414535522,
        35.2279440392778,
        0
        ]
      },
      "properties": {
        "name": "Near library",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.83113133907318,
        35.21742217953794,
        0
        ]
      },
      "properties": {
        "name": "CPCC #2",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd",
        "description": "At bus stop"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.83139419555664,
        35.217505448256034,
        0
        ]
      },
      "properties": {
        "name": "CPCC #1",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd",
        "description": "At bus stop"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.82972049713136,
        35.216146842709286,
        0
        ]
      },
      "properties": {
        "name": "CPCC #3",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd",
        "description": "Outside of parking garage"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.81195086240768,
        35.21877857248747,
        0
        ]
      },
      "properties": {
        "name": "Common Market",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd",
        "description": "On left side of patio near parking lot"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.81246316432953,
        35.22031023938521,
        0
        ]
      },
      "properties": {
        "name": "Plaza Bus Stop",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.80504417419434,
        35.247371492628815,
        0
        ]
      },
      "properties": {
        "name": "NoDa utility pole",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.80422341823578,
        35.247437206832856,
        0
        ]
      },
      "properties": {
        "name": "Outside of Sanctuary",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.85864007472992,
        35.21237768892281,
        0
        ]
      },
      "properties": {
        "name": "Lynx East/West Stop",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.87942719459534,
        35.1760533659996,
        0
        ]
      },
      "properties": {
        "name": "Lynx Woodlawn Station",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.88330030441284,
        35.107226769734005,
        0
        ]
      },
      "properties": {
        "name": "Lynx I-485 Station",
        "styleUrl": "#icon-503-62AF44",
        "styleHash": "5eafc2dd",
        "description": "Outside of parking structure"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.812858,
        35.220528,
        0
        ]
      },
      "properties": {
        "name": "SADU Body Piercing & Modifications",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.81278700000001,
        35.218525,
        0
        ]
      },
      "properties": {
        "name": "Okra",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.86154222488403,
        35.208564529704404,
        0
        ]
      },
      "properties": {
        "name": "Luna's Living Kitchen",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.81265360116959,
        35.218566021293256,
        0
        ]
      },
      "properties": {
        "name": "Eco-Licious",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.7925397157669,
        35.204439980020425,
        0
        ]
      },
      "properties": {
        "name": "Bean Vegan Cuisine",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
        -80.81028655171394,
        35.22066630944841,
        0
        ]
      },
      "properties": {
        "name": "The Greener Apple",
        "styleUrl": "#icon-503-000000",
        "styleHash": "-1258f3c3"
      }
    }
    ]
  };

  res.send(geojsonOfStands);
  return next();
});


// /
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

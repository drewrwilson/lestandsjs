var restify = require('restify');  //package for API routes
/*
    ToDo:
        passportJS, //user auth
        pg; //database
*/

var server = restify.createServer({
  name: 'lestands',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//Static routes:
// /stands
// /stands/:id
// /stands/:id/updates
// /stands/:id/updates/:updateID

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
// this is hard-coded to updates from stand with id=1
server.get('/stands/:id/updates', function (req, res, next) {
  var updates = [
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
  ];

  res.send(updates);
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

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

/*
*************************
Handlebars functions
*************************
*/

var fullMonthNames = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December");

var shortMonthNames = new Array("Jan", "Feb", "Mar",
"Apr", "May", "Jun", "Jul", "Aug", "Sep",
"Oct", "Nov", "Dec");

// take a date string and make it look like a short, human-readable date
// eg 1/1/2015
Handlebars.registerHelper("shortDate", function(d) {
  var date = new Date(d);
  return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
});

// eg Jan 1, 2015
Handlebars.registerHelper("mediumDate", function(d) {
  var date = new Date(d);
  return shortMonthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
});

//eg January 1, 2015
Handlebars.registerHelper("longDate", function(d) {
  var date = new Date(d);
  return fullMonthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
});

var daysSince = function(date) {
  var givenDate = new Date(date),
      today = new Date();
  return Math.floor( (today - givenDate) / (1000 * 60 * 60 * 24));
}

Handlebars.registerHelper("iconFor", function(date) {
  var numDaysSince = daysSince(date);

  switch (true) {
    case numDaysSince <= 7:
      return 'fa-heart';
    case numDaysSince <= 21:
      return 'fa-check';
    case numDaysSince > 21:
      return 'fa-warning';
  }
});

Handlebars.registerHelper("labelFor", function(date) {
  var numDaysSince = daysSince(date);

  switch (true) {
    case numDaysSince <= 7:
      return 'label-success';
    case numDaysSince <= 21:
      return 'label-info';
    case numDaysSince <= 30:
      return 'label-warning';
    case numDaysSince > 30:
      return 'label-danger';
  }
});


/*
* Globals
*/
var app = app || {};

app.sumAttribute = function(collection, attribute) {
    return collection.reduce(function(memo, model) {
          return memo + model.get(attribute);
        }, 0);
  };

app.lib = {
  daysSinceInline: function(date) {
  if (date == -Infinity || date === null) { return "never"; }
  return daysSince(date) + " days";
  },

  daysSinceHeader: function(date) {
    if (date == -Infinity || date === null) { return "n/a"; }
    return daysSince(date);
  }
}

//this assumes we get a valid date string, returns days since a given date
Handlebars.registerHelper("daysSince", daysSince);
Handlebars.registerHelper("daysSinceInline", app.lib.daysSinceInline);
Handlebars.registerHelper("daysSinceHeader", app.lib.daysSinceHeader);


// The base of the API
var API_BASE = "https://lestands-api.herokuapp.com"

$(document).ready(function(){
  var dispatcher = _.clone(Backbone.Events)
  Backbone.history.start();
})

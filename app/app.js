/*
*************************
Handlebars functions
*************************
*/

var daysSince = function(date) {
  var givenDate = new Date(date),
      today = new Date();
  return Math.floor( (today - givenDate) / (1000 * 60 * 60 * 24));
}

//this assumes we get a valid date string, returns days since a given date
Handlebars.registerHelper("daysSince", daysSince);

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

$(document).ready(function(){
  var dispatcher = _.clone(Backbone.Events)
  Backbone.history.start();  
})

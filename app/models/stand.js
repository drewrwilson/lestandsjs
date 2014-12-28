/*global Backbone */
var app = app || {};

(function () {
  app.Stand = Backbone.Model.extend({
    // this function returns the number of days since the last update on this model
    urlRoot: 'https://lestands-api.herokuapp.com/stands',
    daysSinceUpdated: function () {
      var today = new Date(),
          lastUpdated = new Date ( this.get('lastUpdateDate') );
      return Math.floor( (today - lastUpdated) / (1000 * 60 * 60 * 24) );
    },
    initialize: function () {
    }
  });


})();

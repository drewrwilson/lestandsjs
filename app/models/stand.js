/*global Backbone */
var app = app || {};

(function () {
  app.Stand = Backbone.Model.extend({
    // this function returns the number of days since the last update on this model
    // urlRoot: 'https://lestands-api.herokuapp.com/stands',
    updates: null,
    initialize: function () {
    	// Here is where we manage to build the nested url
	    var updates = new app.Updates({
	      standPath: this.url();
	    });
	    this.updates = updates;
    }
  });


})();

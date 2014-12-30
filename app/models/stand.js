/*global Backbone */
var app = app || {};

(function () {
  app.Stand = Backbone.Model.extend({
    urlRoot: 'https://lestands-api.herokuapp.com/stands',
    initialize: function () {
    	// Here is where we manage to build the nested url
	    var updates = new app.Updates({
	      standPath: this.url()
	    });
	    this.updates = updates;
    }
  });


})();

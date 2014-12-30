/*global Backbone */
var app = app || {};

(function () {
  app.Stand = Backbone.Model.extend({
  	urlRoot: API_BASE + '/stands',
    initialize: function () {
    	// Here is where we manage to build the nested url
	    var updates = new app.Updates({
	      standPath: this.url()
	    });
	    this.updates = updates;
    }
  });


})();

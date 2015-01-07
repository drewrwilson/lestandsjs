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

      // when updates are updated, update the stats!
      this.listenTo(this.updates, 'add remove', this.tally);
    },

    // Tally up the updates and reset the summary values
    // when we change the updates, this can be used instead of
    // sync()ing over the 'net.
    tally: function() {
      this.set({
        totalDistributed: this.updates.getTotalDistributed(),
        totalUpdates: this.updates.getTotalUpdates(),
        lastUpdateDate: this.updates.getLastUpdated(),
      });
    }
  });


})();

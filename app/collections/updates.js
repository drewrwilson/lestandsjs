/*global Backbone */
var app = app || {};

(function () {

  app.Updates = Backbone.Collection.extend({
      model: app.Update,
      url: function() {
        return this.baseUrl;
      }, // 'https://lestands-api.herokuapp.com/stands/:id/updates',

      initialize: function(options) {
        this.baseUrl = options.standPath + '/updates';
        this.stand = options.stand;
        this.fetch();
        this.listenTo(Backbone, "update:created", this.maybeAddUpdate);
      },
      comparator: function(m) {
          // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
          return (new Date(m.get('date'))).getTime();
      },
      getTotalDistributed: function() { return app.sumAttribute(this, 'amountAdded'); },
      getTotalUpdates: function () { return this.length; },
      getLastUpdated: function() {
          var updateDates = this.map(function(model) { return new Date(model.get('date')); });
          return _.max(updateDates);
      },
      maybeAddUpdate: function(update, standId) {
        // compare and add if it belongs to this same stand
        if (standId === this.stand.id) {
          this.add(update);
        }
      },
  });
})();
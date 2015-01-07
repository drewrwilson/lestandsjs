/*global Backbone */
var app = app || {};

(function () {

  var Stands = Backbone.Collection.extend({
      url: API_BASE + '/stands',
      model: app.Stand,
      initialize: function() {
          this.fetch({reset: true, success: function() { this.fetched = true; /* flag for future checking */ }});
      },
      comparator: function(m) {
          // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
          return (new Date(m.get('lastUpdateDate'))).getTime();
      },
      getTotalDistributed: function() { return app.sumAttribute(this, 'totalDistributed'); },
      getTotalUpdates: function () { return app.sumAttribute(this, 'totalUpdates'); },
      getTotalStands: function () { return this.models.length; },
      getLastUpdated: function() {
          var updateDates = _.map(this.models, function(model) { return new Date(model.attributes.lastUpdateDate); });
          return _.max(updateDates);
      }
  });

  app.stands = new Stands();
})();

/*global Backbone */
var app = app || {};

(function () {

  var sumAttribute = function(collection, attribute) {
    return _.reduce(collection.models, function(memo, model) {
          return memo + model.attributes[attribute];
        }, 0);
  };

  var Stands = Backbone.Collection.extend({
      url: 'https://lestands-api.herokuapp.com/stands',
      model: app.Stand,
      initialize: function() {
          this.fetch({reset: true});
      },
      comparator: function(m) {
          // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
          return (new Date(m.get('lastUpdateDate'))).getTime();
      },
      getTotalDistributed: function() { return sumAttribute(this, 'totalDistributed'); },
      getTotalUpdates: function () { return sumAttribute(this, 'totalUpdates'); },
      getTotalStands: function () { return this.models.length; },
      getLastUpdated: function() {
          var updateDates = _.map(this.models, function(model) { return new Date(model.attributes.lastUpdateDate); });
          return _.max(updateDates);
      }
  });

  app.stands = new Stands();
})();

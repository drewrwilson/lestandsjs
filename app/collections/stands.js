/*global Backbone */
var app = app || {};

(function () {

  var Stands = Backbone.Collection.extend({
      url: 'http://private-159b-lestands.apiary-mock.com/stands',
      model: app.Stand,
      initialize: function() {
          this.fetch({reset: true});
      },
      comparator: function(m) {
          // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
          return (new Date(m.get('lastUpdateDate'))).getTime();
      }
  });

  app.stands = new Stands();
})();

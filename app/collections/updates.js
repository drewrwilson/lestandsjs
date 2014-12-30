/*global Backbone */
var app = app || {};

(function () {

  var Updates = Backbone.Collection.extend({
      model: app.Update,
      url: function() {
        return this.baseUrl;
      }, // 'https://lestands-api.herokuapp.com/stands/:id/updates',

      initialize: function(options) {
        this.baseUrl = options.standPath + '/updates';
        this.fetch({reset: true});
      },
      comparator: function(m) {
          // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
          return (new Date(m.get('date'))).getTime();
      }
  });

  // app.updates = new Updates();
})();
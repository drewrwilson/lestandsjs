/*global Backbone */
var app = app || {};

(function () {

  var Workspace = Backbone.Router.extend({
    routes: {
      "":   "index",  // #stands
      "stands":   "index",  // #stands
      "stands/:id":   "show",  // #stands/1
    },
    index: function() {
      // TodoApp.trigger('fetchTodos', 'completed');
      console.log("index view");
      app.standsView = new app.StandsView({
        el: $("#big-numbers-container"),
        collection: app.stands,
      });
    },
    show: function(id) {
      console.log('hello whirled');
    },
  });

  app.router = new Workspace;
  Backbone.history.start({pushState:true});

})();

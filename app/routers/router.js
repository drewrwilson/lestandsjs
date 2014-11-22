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
      //right now id is hard-coded as 1 for testing. Change it to id when your ready for real data.
      var singleStand = new app.Stand ({"id": 1});

      //this is fetches the data from the url with the ID as param, and on success creates a new view
      singleStand.fetch({
        success: function (singleStand) {
            app.singleStandView = new app.StandView({
              el: $("#big-numbers-container"),
              model: singleStand,
            });
        }
      })
    },
  });

  app.router = new Workspace;
  Backbone.history.start();

})();

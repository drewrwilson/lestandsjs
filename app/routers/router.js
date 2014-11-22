/*global Backbone */
var app = app || {};

(function () {

  var Workspace = Backbone.Router.extend({
    routes: {
      "":   "index",  // #stands
      "stands":   "index",  // #stands
      "stands/:id":   "show",  // #stands/1
      "update/add":   "addUpdate",  // #stands/1
    },
    index: function() {
      // TodoApp.trigger('fetchTodos', 'completed');
      console.log("index view");
      app.standsView = new app.StandsView({
        el: $("#main-container"),
        collection: app.stands,
      });
    },
    show: function(id) {
      //right now id is hard-coded as 1 for testing. Change it to id when you're ready for real data.
      var singleStand = new app.Stand ({"id": id});

      //this fetches the data from the url with the ID as param, and on success creates a new view
      singleStand.fetch({
        success: function (singleStand) {
            app.singleStandView = new app.StandView({
              el: $("#main-container"),
              model: singleStand,
            });
        }
      })
    },
    addUpdate: function() {
      //this fetches the data from the url with the ID as param, and on success creates a new view
      app.addUpdateView = new app.AddUpdateView({
        el: $("#main-container")
      });
    },
  });

  app.router = new Workspace;
  Backbone.history.start();

})();

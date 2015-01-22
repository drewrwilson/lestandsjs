/*global Backbone */
var app = app || {};

(function () {

  var Workspace = Backbone.Router.extend({
    routes: {
      "":   "index",  // #stands
      "stands":   "index",  // #stands
      "stands/create":   "createStand",  // #stands/create
      "stands/:id/edit":   "editStand",  // #stands/1/edit
      "stands/:id":   "show",  // #stands/1
      "stands/:id/update":   "addUpdate",  // #stands/1/update
      "updates/add":   "addUpdate",  // #/updates/add
      "update":   "addUpdate",  // #/addupdate
    },
    index: function() {
      console.log("index view");

      //load dashboard
      app.standsView = new app.StandsView({
        el: $("#main-container"),
        collection: app.stands,
      });
    },
    show: function(id) {
      var singleStand = new app.Stand ({"id": id});
      //this fetches the data from the url with the ID as param, and on success creates a new view
      singleStand.fetch({
        success: function (singleStand) {
            app.singleStandView = new app.StandView({
              el: $("#main-container"),
              model: singleStand,
            });
        }
      });
    },
    addUpdate: function(id) {
      app.addUpdateView = new app.AddUpdateView({
        standID: parseInt(id),
        el: $("#main-container")
      });
    },
    createStand: function() {
      app.addStandView = new app.AddStandView({
        el: $("#main-container")
      });
    },
    editStand: function(id) {
      var singleStand = new app.Stand ({"id": id});

      //this fetches the data from the url with the ID as param, and on success creates a new view
      singleStand.fetch({
        success: function (singleStand) {
          app.addStandView = new app.AddStandView({
            el: $("#main-container"),
            model: singleStand,
          });
        }
      })
    },
  });

  app.router = new Workspace;

})();

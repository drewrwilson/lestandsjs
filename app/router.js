/*global Backbone */
var app = app || {};

(function () {

  var Workspace = Backbone.Router.extend({

    initialize: function($el) {
      this.$el = $el;
    },

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

    currentView: null,

    switchView: function(view) {
      if (this.currentView && this.currentView === view) {
        return; // Nothing to do; view already loaded.
      }

      if (this.currentView) {
        // Detach the old view
        this.currentView.remove();
      }

      // Move the view element into the DOM (replacing the old content)
      this.$el.html(view.el);

      // Render view after it is in the DOM (styles are applied)
      view.render();

      this.currentView = view;
    },

    index: function() {
      //load dashboard
      console.log("index view");
      if (typeof app.standsView === typeof void 0 || !app.standsView) {
        // create view for first time
        app.standsView = new app.StandsView({
          id: "show-stands",
          collection: app.stands,
        });
      }

      this.switchView(app.standsView);
    },

    show: function(id) {
      if (app.singleStandView) {
        this.switchView(app.singleStandView);
      } else {
        var singleStand = new app.Stand ({"id": id});
        //this fetches the data from the url with the ID as param, and on success creates a new view
        singleStand.fetch({
          success: function (singleStand) {
              app.singleStandView = new app.StandView({
                id: 'show-stand',
                model: singleStand,
              });

              // options:
              // 1) one global updates list that we filter
              // 2) *set this on the fly on each stand view generation* <- for now do this
              app.router.switchView(app.singleStandView);
          }
        });
      }
    },
    addUpdate: function(id) {
      app.addUpdateView = new app.AddUpdateView({
        standID: parseInt(id),
        id: "add-update"
      });
      this.switchView(app.addUpdateView);
    },
    createStand: function() {
      if (typeof app.addStandView === typeof void 0 || !app.addStandView) {
        // create view for first time
        app.addStandView = new app.AddStandView({
          id: "create-stand"
        });
      }
      this.switchView(app.addStandView);
    },
    editStand: function(id) {
      var singleStand = new app.Stand ({"id": id});

      //this fetches the data from the url with the ID as param, and on success creates a new view
      singleStand.fetch({
        success: function (singleStand) {
          app.addStandView = new app.AddStandView({
            id: "edit-stand",
            model: singleStand,
          });

          app.router.switchView(app.addStandView);
        }
      })
    },
  });

  app.router = new Workspace($('#main-container'));

})();

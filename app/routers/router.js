
var Workspace = Backbone.Router.extend({
  routes: {
    "stands":   "index",  // #stands
    "stands/:id":   "show",  // #stands/1
  },
  index: function() {
    // TodoApp.trigger('fetchTodos', 'completed');
    console.log("index view");
    var standsView = new StandsView({
      el: $("#big-numbers-container"),
      collection: stands,
    });
  },
  show: function(id) {
    console.log('hello whirled');
  },
});

var appRouter = new Workspace;
Backbone.history.start();

/*global Backbone */
var app = app || {};

(function ($) {

  //view for all updates list
  app.UpdatesView = Backbone.View.extend({
      template: Handlebars.compile( $("#all-updates-template").html() ),
      initialize: function () {
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'remove', this.render);
        this.render();
      },
      events: {
        "click a.delete": "deleteUpdate",
      },
      deleteUpdate: function (event) {
        event.preventDefault();
        var clicked = $(event.target);
        var updateID = clicked.data('update-id');

        console.log("Deleting update with id #" + updateID);

        // note that we must access the same object as was fetched by /stands/:id->show(),
        var updates = this.collection;
        var update = updates.findWhere({id: updateID});
        updates.remove(update);
        update.destroy();
      },
      render: function () {
        // Compile the template using underscore
        view = {
          updates: _.pluck(this.collection.models, "attributes")
        };

        html = this.template(view); //generate HTML from the template
        this.$el.html(html) //add html to the DOM
      }
  });

})(jQuery);

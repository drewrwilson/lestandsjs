
/*global Backbone */
var app = app || {};

(function ($) {

  // view for single stand
  app.StandView = Backbone.View.extend({
      template: Handlebars.compile( $("#single-stand-template").html() ),
      initialize: function(){
          // this.on('updates:changed', this.render);
          this.render();
      },
      render: function(){
          console.log('called render');
          html = this.template(this.model.attributes);
          this.$el.html(html)
      },
      events: {
        "click a.delete": "deleteUpdate",
      },
      deleteUpdate: function(event) {
        event.preventDefault();
        var clicked = $(event.target);
        var updateID = clicked.data('update-id');
        var standID = clicked.data('stand-id');

        //this console.log is a placeholder for where we need to trigger a json request that deletes an update with a given id
        console.log("deleteUpdate action triggered. Deleting update with id #" + updateID + ', on stand with id #' + standID);

        var updates = app.stands.findWhere({id: standID}).updates;
        var update = updates.findWhere({id: updateID});
        console.log("remove + destroy update");
        updates.remove(update);
        update.destroy();
        // this.trigger('updates:changed');
      }
  });

})(jQuery);

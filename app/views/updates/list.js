/*global Backbone */
var app = app || {};

(function ($) {

  //view for all updates list
  app.UpdatesView = Backbone.View.extend({
      template: Handlebars.compile( $("#all-updates-template").html() ),
      initialize: function(){
              this.listenTo(this.collection, 'add', this.render);
              this.listenTo(this.collection, 'remove', this.render);
              this.render();
          },
      render: function(){
            // Compile the template using underscore
            view = {
              updates: _.pluck(this.collection.models, "attributes")
            };

            html = this.template(view); //generate HTML from the template
            this.$el.html(html) //add html to the DOM
        }
  });

})(jQuery);

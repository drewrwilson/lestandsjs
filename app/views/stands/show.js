
/*global Backbone */
var app = app || {};

(function ($) {

  // view for single stand
  app.StandView = Backbone.View.extend({
      template: Handlebars.compile( $("#single-stand-template").html() ),
      initialize: function(){
          this.listenTo(this.model, 'change', this.render);

          // set up the subview
          this.updatesView = new app.UpdatesView({
              el: $("#updates-list"),
              collection: this.model.updates,
            });

          this.render();
      },
      render: function(){
          html = this.template(this.model.attributes);
          this.$el.html(html);

          this.updatesView.setElement(this.$('#updates-list')).render();

          return this;
      }
  });

})(jQuery);

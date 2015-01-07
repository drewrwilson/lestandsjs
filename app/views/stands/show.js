
/*global Backbone */
var app = app || {};

(function ($) {

  // view for single stand
  app.StandView = Backbone.View.extend({
      template: Handlebars.compile( $("#single-stand-template").html() ),
      initialize: function(){
          this.listenTo(this.model, 'change', this.render);
          this.render();
      },
      render: function(){
          html = this.template(this.model.attributes);
          this.$el.html(html)
      }
  });

})(jQuery);

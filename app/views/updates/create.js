/*global Backbone */
var app = app || {};

(function ($) {

  //view for adding an update
  app.AddUpdateView = Backbone.View.extend({
      template: Handlebars.compile( $("#add-update-template").html() ),
      initialize: function(){
              //this.listenTo(this.model, 'reset', this.render);
              this.render();
          },
      render: function(){
            html = this.template();
            this.$el.html(html)
            $('.default-date-picker').datepicker();
        }
  });

})(jQuery);

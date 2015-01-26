/*global Backbone */
var app = app || {};

(function ($) {

  app.AddStandView = Backbone.View.extend({
      template: Handlebars.compile( $("#add-stand-template").html() ),
      initialize: function(){
              //this.listenTo(this.model, 'reset', this.render);
          },
      render: function(){
        var attributes;

        if (this.model) {
          attributes = this.model.attributes;
          attributes.pageTitle = "Edit a Stand";
        } else {
          attributes = {};
          attributes.pageTitle = "Create a new Stand";
        }

        // var attributes = this.model ? this.model.attributes : {}; //if we have a model, send it to the view, If not, send an empty json.

        html = this.template(attributes);
        this.$el.html(html)
        $('.default-date-picker').datepicker();
      }
  });

})(jQuery);

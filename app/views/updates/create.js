/*global Backbone */
var app = app || {};

(function ($) {

  //view for adding an update
  app.AddUpdateView = Backbone.View.extend({
      template: Handlebars.compile( $("#add-update-template").html() ),
      initialize: function(options){
              this.standID = options.standID || null;
              //this.listenTo(this.model, 'reset', this.render);
              this.render();
          },
      render: function () {
            updateView = this;
            app.stands.fetch({success: function () {
              var stand = app.stands.findWhere({id: updateView.standID});

              view = {
                standID: stand.id,
                name: stand.get('name')
              };

              html = updateView.template(view);
              updateView.$el.html(html);
              $('.default-date-picker').datepicker();
            }});
        },


  });

})(jQuery);

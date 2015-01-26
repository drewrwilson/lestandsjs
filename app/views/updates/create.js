/*global Backbone */
var app = app || {};

(function ($) {

  // documentation on forms and saving new models:
  // http://dailyjs.com/2013/01/31/backbone-tutorial-10/ see "Editing Tasks"

  // helper function so we can get the form data as an object
  // from http://stackoverflow.com/a/1186309/1024811
  // alternatives: https://github.com/hongymagic/jQuery.serializeObject,
  // https://github.com/powmedia/backbone-forms, https://github.com/marionettejs/backbone.syphon
  $.fn.serializeObject = function()
  {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };

  //view for adding an update
  app.AddUpdateView = Backbone.View.extend({
      template: Handlebars.compile( $("#add-update-template").html() ),
      events: {
        'submit': 'submit'
      },
      initialize: function(options){
              this.standID = options.standID || null;
              //this.listenTo(this.model, 'reset', this.render);
              this.render();
          },
      render: function () {
            updateView = this;
            app.stands.fetch({success: function () {
              var stand = app.stands.findWhere({id: updateView.standID});

              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; //January is 0!
              var yyyy = today.getFullYear();

              view = {
                standID: stand.id,
                name: stand.get('name'),
                date: "" + mm + "/" + dd + "/" + yyyy,
              };

              html = updateView.template(view);
              updateView.$el.html(html);
              $('.default-date-picker').datepicker("setDate", today);
            }});
        },
      submit: function(e) {
            e.preventDefault();
            var attributes = $('form').serializeObject();
            var model = new app.Update(attributes);

            model.save();
            return false;
      },
  });

})(jQuery);

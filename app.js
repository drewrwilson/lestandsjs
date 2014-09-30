var Stand = Backbone.Model.extend();

var Stands = Backbone.Collection.extend({
    url: 'http://private-159b-lestands.apiary-mock.com/stands',
    model: Stand,
    initialize: function(init) {
        this.fetch({success:init});
    }
});

ExampleView = Backbone.View.extend({
    initialize: function(){
            this.render();
        },
    render: function(){
          // Compile the template using underscore
          var template = _.template( $("#big-numbers-template").html(),  {});
          // Load the compiled HTML into the Backbone "el"
          this.$el.html( template );
      }
});

var exampleView = new ExampleView({ el: $("#big-numbers-container") });


function init () {
  // var bigNumbersTemplate = _.template( $('#big-numbers').html() );
  // bigNumbersTemplate(myStands.toJSON());




  console.log(myStands.toJSON());
}

var myStands = new Stands(init);

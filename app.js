var Stand = Backbone.Model.extend();

var Stands = Backbone.Collection.extend({
    url: 'http://private-159b-lestands.apiary-mock.com/stands',
    model: Stand,
    initialize: function(init) {
        this.fetch({success:init});
    }
});

ExampleView = Backbone.View.extend({
    template: Handlebars.compile( $("#big-numbers-template").html() ),
    initialize: function(){
            this.render();
        },
    render: function(){
          // Compile the template using underscore
          // var template = _.template( );
          // todo: mustache, data from collection as opposed to hard coding it

          var html = this.template({length: "5"});
          console.log( html );
          // Load the compiled HTML into the Backbone "el"
          this.$el.html( html );
      }
});

var exampleView = new ExampleView({ el: $("#big-numbers-container") });


function init () {
  // var bigNumbersTemplate = _.template( $('#big-numbers').html() );
  // bigNumbersTemplate(myStands.toJSON());




  console.log(myStands.toJSON());
}

var myStands = new Stands(init);

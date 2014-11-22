/*global Backbone */
var app = app || {};

(function ($) {

  app.StandsView = Backbone.View.extend({
      template: Handlebars.compile( $("#all-stands-template").html() ),
      initialize: function(){
              this.listenTo(this.collection, 'reset', this.render);
          },
      render: function(){
            // Compile the template using underscore
            // todo this should be recalculated when the model changes, not when it is re-rendered.
            var view = {
              totalDistributed: 0,
              totalUpdates: 0,
              totalStands: 0,
              daysSinceChecked: null,
              stands:[]
            }

            var mostRecentUpdate = null;


            this.collection.each(function(stand){
              stand = stand.attributes;
              view.totalDistributed += stand.totalDistributed;
              view.totalUpdates += stand.totalUpdates;
              view.totalStands++;
              thisLastUpdated = stand.lastUpdateDate ? new Date(stand.lastUpdateDate): null;
              if (mostRecentUpdate == null) {
                mostRecentUpdate = new Date(stand.lastUpdateDate);
              } else if ( thisLastUpdated < mostRecentUpdate) {
                mostRecentUpdate = thisLastUpdated;
              }
              console.log(stand);

              view.stands.push(stand);

            }, this);

            today = new Date();
            view.daysSinceChecked = Math.floor((today - mostRecentUpdate) / (1000*60*60*24));

            html = this.template(view);
            this.$el.html(html)
        }
  });






app.StandView = Backbone.View.extend({
    template: Handlebars.compile( $("#single-stand-template").html() ),
    initialize: function(){
            this.listenTo(this.model, 'reset', this.render);
            console.log('getting routed here');
            this.render();
        },
    render: function(){
          html = this.template(this.model.attributes);
          console.log(this.model.attributes);
          this.$el.html(html)
      }
});








})(jQuery);

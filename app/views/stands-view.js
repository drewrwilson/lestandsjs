/*global Backbone */
var app = app || {};

(function ($) {

  app.StandsView = Backbone.View.extend({
      template: Handlebars.compile( $("#big-numbers-template").html() ),
      initialize: function(){
              this.listenTo(this.collection, 'reset', this.render);
          },
      render: function(){
            // Compile the template using underscore
            console.log('hello dude ');
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
            // console.log(html)
        }
  });
})(jQuery);

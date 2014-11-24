/*global Backbone */
var app = app || {};

(function ($) {

//view for all stands
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





// view for single stand
app.StandView = Backbone.View.extend({
    template: Handlebars.compile( $("#single-stand-template").html() ),
    initialize: function(){
            this.listenTo(this.model, 'reset', this.render);
            this.render();
        },
    render: function(){
          var view = {
            totalDistributed: 0,
            totalUpdates: 0,
            daysSinceChecked: null,
            stand:this.model.attributes
          }
          view.totalUpdates = _.size(view.stand.updates);
          
          // initial value
          var mostRecentUpdate = null,
              currentUpdateDate = null;;

          window.updates = view.stand.updates;
          // determine most recent update

          view.stand.updates.forEach(function(update){
            view.totalDistributed += update.amountAdded; //add up the number of leaflets added
            currentUpdateDate = new Date(update.date);

            //determine which date is the latest update date
            if (mostRecentUpdate == null) {
              mostRecentUpdate = new Date(update.date);
            } else if ( currentUpdateDate > mostRecentUpdate) {
              mostRecentUpdate = currentUpdateDate;
            }

          //view.stand.updates.push(update);
        }); //end forEach

          //determine how many days since last update
          today = new Date();
          view.daysSinceChecked = Math.floor((today - mostRecentUpdate) / (1000*60*60*24));

          html = this.template(view);
          this.$el.html(html)
      }
});


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
      }
});




})(jQuery);


/*global Backbone */
var app = app || {};

(function ($) {

  // view for single stand
  app.StandView = Backbone.View.extend({
      template: Handlebars.compile( $("#single-stand-template").html() ),
      initialize: function(){
              this.listenTo(this.model, 'reset', this.render);
              this.render();
          },
      render: function(){
          var view = {
            id: this.model.attributes.id,
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
        },
        events: {
          "click a.delete": "deleteUpdate",
        },
        deleteUpdate: function(event) {
          event.preventDefault();
          var clicked = $(event.target);
          var updateID = clicked.data('update-id');
          var standID = clicked.data('stand-id');

          //this console.log is a placeholder for where we need to trigger a json request that deletes an update with a given id
          console.log("deleteUpdate action triggered. Deleting update with id #" + updateID + ', on stand with id #' + standID);
        }
  });

})(jQuery);
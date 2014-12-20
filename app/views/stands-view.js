/*global Backbone */
var app = app || {};

(function ($) {

//view for all stands
  app.StandsView = Backbone.View.extend({
      template: Handlebars.compile( $("#all-stands-template").html() ),
      events: {
        // "click .dashboard-link": "homeDude",
        // "click .create-stand-link": "createStand",
        // "click .add-update-link": "addUpdateLink",
      },
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

              view.stands.push(stand);

            }, this);

            //convert the stands data to geojson
            var geodata = GeoJSON.parse(view.stands, {Point: ['geoLat', 'geoLong']});

            //calculate days since checked
            today = new Date();
            view.daysSinceChecked = Math.floor((today - mostRecentUpdate) / (1000*60*60*24));

            html = this.template(view);
            this.$el.html(html)

            //generate the map
            // this is after adding the html to the DOM because it uses jquery. Kinda hacky, but works.
            L.mapbox.accessToken = 'pk.eyJ1IjoiZHJld3J3aWxzb24iLCJhIjoiUkplQ29iUSJ9.6cM-yTJjzxwfCWUNDOgi8w';
            var map = L.mapbox.map(this.$('#map')[0], 'drewrwilson.kh2igidk')
            .setView([35.1900268,-80.812835], 11);
            var myLayer = L.geoJson(geodata,{}).addTo(map);
            myLayer.addData(geodata);
            map.scrollWheelZoom.disable();
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
          $('.default-date-picker').datepicker();
      }
});

app.AddStandView = Backbone.View.extend({
    template: Handlebars.compile( $("#add-stand-template").html() ),
    initialize: function(){
            //this.listenTo(this.model, 'reset', this.render);
            this.render();
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

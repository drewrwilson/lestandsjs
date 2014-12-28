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

            //this calculates the totalDistributed, totalUpdates and totalStands
            this.collection.each(function(stand){
              stand = stand.attributes;
              view.totalDistributed += stand.totalDistributed; //sum up total from each stand
              view.totalUpdates += stand.totalUpdates; //sum up total from each stand
              view.totalStands++; //count of number of stands
              thisLastUpdated = stand.lastUpdateDate ? new Date(stand.lastUpdateDate): null;
              //this block finds the most recent update
              if (mostRecentUpdate == null) {
                mostRecentUpdate = new Date(stand.lastUpdateDate);
              } else if ( thisLastUpdated < mostRecentUpdate) {
                mostRecentUpdate = thisLastUpdated;
              }

              view.stands.push(stand); //push another stand into the array

            }, this);

            //calculate days since checked
            today = new Date();
            view.daysSinceChecked = Math.floor((today - mostRecentUpdate) / (1000*60*60*24));

            html = this.template(view); //generate HTML from the template
            this.$el.html(html) //add html to the DOM

            /*
            * Map stuff
            */

            //this creates all the marker popup text and binds it to a layer
            function onEachFeature(feature, layer) {
              var popupString = '<strong>' + feature.properties['name'] + '</strong>';
              layer.bindPopup(popupString);
            };

            //convert the stands data to geojson
            var geodata = GeoJSON.parse(view.stands, {Point: ['geoLat', 'geoLong']});

            //generate the map
            // this is after adding the html to the DOM because it uses jquery. Kinda hacky, but works.
            L.mapbox.accessToken = 'pk.eyJ1IjoiZHJld3J3aWxzb24iLCJhIjoiUkplQ29iUSJ9.6cM-yTJjzxwfCWUNDOgi8w';
            var map = L.mapbox.map(this.$('#map')[0], 'drewrwilson.kh2igidk')
            .setView([35.1900268,-80.812835], 11);//set the view as in Charlotte, NC
            var myLayer = L.geoJson(geodata,{
              onEachFeature: onEachFeature
            }).addTo(map);
            map.scrollWheelZoom.disable(); //disables zooming by mousewheel
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

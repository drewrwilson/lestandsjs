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

})(jQuery);

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

            //for calculating days since checked
            var today = new Date();
            var all = this.collection;

            var view = {
              totalDistributed: all.getTotalDistributed(),
              totalUpdates: all.getTotalUpdates(),
              totalStands: all.getTotalStands(),
              daysSinceChecked:  Math.floor((today - all.getLastUpdated()) / (1000*60*60*24)),
              stands: _.pluck(all.models, 'attributes')
            };

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

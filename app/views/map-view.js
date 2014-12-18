/*global Backbone */
var app = app || {};

(function ($) {

//view for map of all stands
app.MapView = Backbone.View.extend({
  template: Handlebars.compile( $("#map-template").html() ),
  initialize: function(){
    // this.listenTo(this.model, 'reset', this.render);
    // this.listenTo(this.collection, 'reset', this.render);
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    console.log('got here')
    console.log('collection')
    console.log(this.collection);
    console.log('model')
    console.log(this.model);

    var data = {
      type: "FeatureCollection",
      features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84643602371216,
          35.22478017491058,
          0
          ]
        },
        properties: {
          name: "S Tryon & MLK #1",
          styleUrl: "#icon-503-3F5BA9",
          styleHash: "4d8cfcbd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84629654884338,
          35.22478893924818,
          0
          ]
        },
        properties: {
          name: "S Tryon & MLK #2",
          styleUrl: "#icon-503-3F5BA9",
          styleHash: "4d8cfcbd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84186553955078,
          35.228114937026774,
          0
          ]
        },
        properties: {
          name: "Outside Capital Grille",
          styleUrl: "#icon-503-3F5BA9",
          styleHash: "4d8cfcbd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.8421927690506,
          35.22787830927846,
          0
          ]
        },
        properties: {
          name: "Outside Qdoba",
          styleUrl: "#icon-503-3F5BA9",
          styleHash: "4d8cfcbd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84293305873871,
          35.227242916539964,
          0
          ]
        },
        properties: {
          name: "Outside Bank of America",
          styleUrl: "#icon-503-3F5BA9",
          styleHash: "4d8cfcbd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.8412379026413,
          35.22391250080143,
          0
          ]
        },
        properties: {
          name: "Uptown bus terminal",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.8432012796402,
          35.225538286613535,
          0
          ]
        },
        properties: {
          name: "Outside BB&T",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84520220756531,
          35.22719690514846,
          0
          ]
        },
        properties: {
          name: "Outside parking garage #1",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84841549396515,
          35.225218390631575,
          0
          ]
        },
        properties: {
          name: "Outside American Roadside Burgers",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84839403629303,
          35.22499928306689,
          0
          ]
        },
        properties: {
          name: "Uptown Starbucks #1",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.8486944437027,
          35.22507377970525,
          0
          ]
        },
        properties: {
          name: "Uptown Starbucks #2",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84418296813966,
          35.22491163987534,
          0
          ]
        },
        properties: {
          name: "Outside parking garage #2",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84527730941772,
          35.22385114975566,
          0
          ]
        },
        properties: {
          name: "Near Convention Center",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.84019184112549,
          35.227374377514785,
          0
          ]
        },
        properties: {
          name: "Outside of Merts",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.83978414535522,
          35.2279440392778,
          0
          ]
        },
        properties: {
          name: "Near library",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.83113133907318,
          35.21742217953794,
          0
          ]
        },
        properties: {
          name: "CPCC #2",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd",
          description: "At bus stop"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.83139419555664,
          35.217505448256034,
          0
          ]
        },
        properties: {
          name: "CPCC #1",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd",
          description: "At bus stop"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.82972049713136,
          35.216146842709286,
          0
          ]
        },
        properties: {
          name: "CPCC #3",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd",
          description: "Outside of parking garage"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.81195086240768,
          35.21877857248747,
          0
          ]
        },
        properties: {
          name: "Common Market",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd",
          description: "On left side of patio near parking lot"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.81246316432953,
          35.22031023938521,
          0
          ]
        },
        properties: {
          name: "Plaza Bus Stop",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.80504417419434,
          35.247371492628815,
          0
          ]
        },
        properties: {
          name: "NoDa utility pole",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.80422341823578,
          35.247437206832856,
          0
          ]
        },
        properties: {
          name: "Outside of Sanctuary",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.85864007472992,
          35.21237768892281,
          0
          ]
        },
        properties: {
          name: "Lynx East/West Stop",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.87942719459534,
          35.1760533659996,
          0
          ]
        },
        properties: {
          name: "Lynx Woodlawn Station",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.88330030441284,
          35.107226769734005,
          0
          ]
        },
        properties: {
          name: "Lynx I-485 Station",
          styleUrl: "#icon-503-62AF44",
          styleHash: "5eafc2dd",
          description: "Outside of parking structure"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.812858,
          35.220528,
          0
          ]
        },
        properties: {
          name: "SADU Body Piercing & Modifications",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.81278700000001,
          35.218525,
          0
          ]
        },
        properties: {
          name: "Okra",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.86154222488403,
          35.208564529704404,
          0
          ]
        },
        properties: {
          name: "Luna's Living Kitchen",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.81265360116959,
          35.218566021293256,
          0
          ]
        },
        properties: {
          name: "Eco-Licious",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.7925397157669,
          35.204439980020425,
          0
          ]
        },
        properties: {
          name: "Bean Vegan Cuisine",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
          -80.81028655171394,
          35.22066630944841,
          0
          ]
        },
        properties: {
          name: "The Greener Apple",
          styleUrl: "#icon-503-000000",
          styleHash: "-1258f3c3"
        }
      }
      ]
    }; // this is hardcoded, need to figure out how to provide the geojson from model here.

    L.mapbox.accessToken = 'pk.eyJ1IjoiZHJld3J3aWxzb24iLCJhIjoiUkplQ29iUSJ9.6cM-yTJjzxwfCWUNDOgi8w';
    var map = L.mapbox.map(this.$('#map')[0], 'drewrwilson.kh2igidk')
    .setView([35.1900268,-80.812835], 11);
    var myLayer = L.geoJson(data,{}).addTo(map);
    myLayer.addData(data);
    return this;
  }
});


})(jQuery);

/*global Backbone */
var app = app || {};

(function () {
  app.Update = Backbone.Model.extend({
    url: function () {
      return API_BASE + "/stands/" + this.standID + "/updates/" + this.id;
    },
  });

}());

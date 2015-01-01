/*global Backbone */
var app = app || {};

(function () {
  app.Update = Backbone.Model.extend({
    url: function () {
      // URL w/o ID for POSTing a new Update that has no ID yet
      var url = API_BASE + "/stands/" + this.attributes.standID + "/updates";
      if (typeof this.id !== typeof void 0) { // an existing Update
        url = url + "/" + this.id;
      }
      return url;
    },
  });

}());

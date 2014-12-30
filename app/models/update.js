/*global Backbone */
var app = app || {};

(function () {
  app.Update = Backbone.Model.extend({
    // url: function () {
    //   // /stands/:stand_id/updates/1
    //   return this.urlRoot;
    // },
    urlRoot: 'http://lestands-api.herokuapp.com/stands/1/updates/',
    // url: function () {
    //   // /stands/:stand_id/updates/1
    //   return 'http://lestands-api.herokuapp.com/stands/1/updates/1';
    // },

    // initialize: function (options) {
    //   this.urlRoot = options.standPath + '/updates';
    // }
  });

}());

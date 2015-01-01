/*global Backbone */
var app = app || {};

(function () {
  app.Update = Backbone.Model.extend({
    urlRoot: 'http://lestands-api.herokuapp.com/stands/1/updates/',
  });

}());

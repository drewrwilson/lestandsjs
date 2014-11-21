var Stand = Backbone.Model.extend({
  // this function returns the number of days since the last update on this model
  daysSinceUpdated: function () {
    var today = new Date(),
        lastUpdated = new Date ( this.get('lastUpdateDate') );
    return Math.floor( (today - lastUpdated) / (1000 * 60 * 60 * 24) );
  },
  initialize: function () {
    this.set('')
  }
});

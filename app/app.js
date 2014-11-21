/*
*************************
Handlebars functions
*************************
*/

var daysSince = function(date) {
  var givenDate = new Date(date),
      today = new Date();
  return Math.floor( (today - givenDate) / (1000 * 60 * 60 * 24));
}

//this assumes we get a valid date string, returns days since a given date
Handlebars.registerHelper("daysSince", daysSince);

Handlebars.registerHelper("iconFor", function(date) {
  var numDaysSince = daysSince(date);

  switch (true) {
    case numDaysSince <= 7:
      return 'fa-heart';
    case numDaysSince <= 21:
      return 'fa-check';
    case numDaysSince > 21:
      return 'fa-warning';
  }
});

Handlebars.registerHelper("labelFor", function(date) {
  var numDaysSince = daysSince(date);

  switch (true) {
    case numDaysSince <= 7:
      return 'label-success';
    case numDaysSince <= 21:
      return 'label-info';
    case numDaysSince <= 30:
      return 'label-warning';
    case numDaysSince > 30:
      return 'label-danger';
  }
});



/*
*************************
Backbone functions
*************************
*/

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

var Stands = Backbone.Collection.extend({
    url: 'http://private-159b-lestands.apiary-mock.com/stands',
    model: Stand,
    initialize: function() {
        this.fetch({reset: true});
    },
    comparator: function(m) {
        // http://stackoverflow.com/questions/9540770/using-underscore-to-sort-a-collection-based-on-date
        return (new Date(m.get('lastUpdateDate'))).getTime();
    }
});

var stands = new Stands();

var StandsView = Backbone.View.extend({
    template: Handlebars.compile( $("#big-numbers-template").html() ),
    initialize: function(){
            this.listenTo(this.collection, 'reset', this.render);
        },
    render: function(){
          // Compile the template using underscore
          console.log('hello dude ');
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
            console.log(stand);

            view.stands.push(stand);

          }, this);

          today = new Date();
          view.daysSinceChecked = Math.floor((today - mostRecentUpdate) / (1000*60*60*24));

          html = this.template(view);
          this.$el.html(html)
          // console.log(html)
      }
});


var Workspace = Backbone.Router.extend({
  routes: {
    "stands":   "index",  // #stands
    "stands/:id":   "show",  // #stands/1
  },
  index: function() {
    // TodoApp.trigger('fetchTodos', 'completed');
    console.log("index view");
    var standsView = new StandsView({
      el: $("#big-numbers-container"),
      collection: stands,
    });
  },
  show: function(id) {
    console.log('hello whirled');
  },
});
    var appRouter = new Workspace;
    Backbone.history.start({pushState: true});

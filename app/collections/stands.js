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

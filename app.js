var Stand = Backbone.Model.extend({});

var stands = Backbone.Collection.extend({
    model: Stand,
    url: 'http://private-159b-lestands.apiary-mock.com/stands',
    initialize: function() {
        this.fetch();
    }
});

console.log(stands);

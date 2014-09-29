var Stand = Backbone.Model.extend({url:'stands/'});

var stands = Backbone.Collection.extend({
    model: Stand,
    url: '',
    initialize: function() {
        this.fetch();
    }
});

console.log(stands);

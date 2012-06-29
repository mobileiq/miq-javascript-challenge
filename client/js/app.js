//Define Namespace (TFS shorthand for Table Football Scores)
var TFS = TFS || {};

/* App Router */
var AppRouter = Backbone.Router.extend({

    routes: {
        "results": "listResults",
        "players": "listPlayers",
        "addresult": "addResult",
        "addplayer": "addPlayer",
        "": "listPlayers"
    },

    listPlayers: function () {
        this.players = new TFS.PlayerCollection();
        this.playersView = new TFS.PlayerListView({model: this.players});
        this.players.fetch();
        $('#content').html(this.playersView.render().el);
    },

    listResults: function () {
        this.results = new TFS.ResultCollecton();
        this.resultsView = new TFS.ResultsListView({model: this.results});
        this.results.fetch();
        $('#content').html(this.resultsView.render().el);
    },

    addResult: function () {
        $('#content').html('<h1>Hey I\'m not done yet</h1>');
    },

    addPlayer: function () {
        $('#content').html('<h1>Hey I\'m not done yet</h1>');
    }

});


/* Models */

//A Player
TFS.Player = Backbone.Model.extend({

});

//A Match result
TFS.Result = Backbone.Model.extend({

});

/* Collections */
TFS.PlayerCollection = Backbone.Collection.extend({
    model: TFS.Player,
    url: "data/players.json"
});

TFS.ResultCollecton = Backbone.Collection.extend({
    model: TFS.Player,
    url: "data/results.json"
});

/* Views */
TFS.PlayerListView = Backbone.View.extend({
    tagName: "table",
    className: "table table-bordered table-striped",
    initialize: function () {
        this.model.bind("reset", this.render, this);
    },

    render: function (eventName) {
        _.each(this.model.models, function (player) {
            $(this.el).append(new TFS.SinglePlayerView({model: player}).render().el);
        }, this);
        return this;
    }
});

TFS.SinglePlayerView = Backbone.View.extend({
    tagName: "tr",
    template: _.template($('#tpl-player-list-item').html()),
    render: function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

TFS.SingleResultView = Backbone.View.extend({
    tagName: "tr",
    template: _.template($('#tpl-result-list-item').html()),
    render: function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

TFS.ResultsListView = Backbone.View.extend({
    tagName: "table",
    className: "table table-bordered table-striped",
    initialize: function () {
        this.model.bind("reset", this.render, this);
    },

    render: function (eventName) {
        _.each(this.model.models, function (wine) {
            $(this.el).append(new TFS.SingleResultView({model: wine}).render().el);
        }, this);
        return this;
    }
});


TFS.app = new AppRouter();
Backbone.history.start();
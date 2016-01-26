//Model for default player
var Player = Backbone.Model.extend({
	defaults: {
		photo: "img/placeholder.png"
	}
});

//Firebase database
var fbData = Backbone.Firebase.Collection.extend({
	model: Player,
	url: "https://smithywick.firebaseio.com/folder/games"
});

//Define individual player view
var PlayerView = Backbone.View.extend({
	tagName: "article",
	className: "player-container",
	template: $("#playerTemplate").html(),

	render: function () {
		var tmpl = _.template(this.template);
		$(this.el).html(tmpl(this.model));
		return this;
	}
});

//Overall view
var DirectoryView = Backbone.View.extend({
	el: $("#players"),
	
	initialize: function () {		
		var firebaseData = new fbData;
		var self = this;
		firebaseData.on('sync', function(collection) {
			var col = collection.toJSON();
			_(col).each(function (item) {
				var playerView = new PlayerView({
					model: item
				});
				self.$el.append(playerView.render().el);
			}, self);	
		});
	}
});

//Instance of the overall view
function init() {
	var directory = new DirectoryView();
}

$(function() {
  init();
});
	

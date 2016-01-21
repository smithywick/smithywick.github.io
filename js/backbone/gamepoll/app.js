(function ($) {

	var fbPlayers = new Firebase("https://smithywick.firebaseio.com/");
	fbPlayers.child("folder/games").on("value", function(snapshot) {
			
		var fbData = snapshot.val();
		
		//Model for default player
		var Player = Backbone.Model.extend({
			defaults: {
				photo: "img/placeholder.png"
			}
		});
		
		//Define directory collection
		var Directory = Backbone.Collection.extend({
			model: Player
		});

		//Define individual player view
		var PlayerView = Backbone.View.extend({
			tagName: "article",
			className: "player-container",
			template: $("#playerTemplate").html(),

			render: function () {
				var tmpl = _.template(this.template);
				$(this.el).html(tmpl(this.model.toJSON()));
				return this;
			}
		});

		//Overall view
		var DirectoryView = Backbone.View.extend({
			el: $("#players"),
			
			initialize: function () {
				this.collection = new Directory(fbData);
				this.render();
			},

			render: function () {
				var self = this;
				_(this.collection.models).each(function (item) {
					self.renderPlayer(item);
				}, this);
			},

			renderPlayer: function (item) {
				var playerView = new PlayerView({
					model: item
				});
				this.$el.append(playerView.render().el);
			}
		});
		
		//Instance of the overall view
		var directory = new DirectoryView();
	});
	
} (jQuery));
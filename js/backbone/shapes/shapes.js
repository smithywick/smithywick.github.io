(function () {

	var Rectangle = Backbone.Model.extend({
		defaults: {dragging:false}		
	});
	var RectangleView = Backbone.View.extend({

		tagName: 'div',

		className: 'rectangle',

		events: {
			'mousedown': 'draggingShape',
			'mousemove': 'mousemove',
			'mouseup': 'mouseup'
		},

		render: function () {
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		},

		setDimensions: function () {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function () {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function () {
			this.$el.css('background-color', this.model.get('color'));
		},

		draggingShape: function (e) {
			//console.log("in dragging shape");
			//console.log('x:' + e.clientX + ' y:' + e.clientY);
			this.model.set({dragging: true});
			//this.initialX = e.clientX;
			//this.initialY = e.clientY;
			return false; // prevents text selection
		},
		mouseup: function (e) {
			//console.log('in mouseup');
			//console.log('x:' + e.clientX + ' y:' + e.clientY);
			if (!e) return;
			var self = e.data;
			this.model.set({dragging: false});
		},
		mousemove: function(e) {
			
			//console.log(e);
			if (!e) return;
			var self = e.data;
			//console.log(this.model.get('dragging'));
			if (this.model.get('dragging')){
				console.log('x:' + e.clientX + ' y:' + e.clientY);
			//console.log('in mousemove');
				this.$el.css('left', e.pageX-this.$el.parent().offset().left);
				console.log("pagex: " + e.pageX + " offsetleft: "+ this.$el.parent().offset().left);
				this.$el.css('top', e.pageY-this.$el.parent().offset().top);
				console.log("pagey: " + e.pageY + " offsettop: "+ this.$el.parent().offset().top);
			} 
		}

	});

	var models = [
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 300,
				y: 150
			},
			color: '#ff0000'
		}),
		new Rectangle({
			width: 26,
			height: 300,
			position: {
				x: 500,
				y: 75
			},
			color: '#00ff00'
		}),
		new Rectangle({
			width: 300,
			height: 70,
			position: {
				x: 310,
				y: 200
			},
			color: '#0000ff'
		})
	];

	_(models).each(function (model) {
		$('div#canvas').append(new RectangleView({model: model}).render().el);	
	});

})();
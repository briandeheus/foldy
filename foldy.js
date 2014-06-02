(function (window) {

	var height;
	var offset;
	var animationTime;
	var state;
	var home;
	var items;

	function expand(index) {

		var delta   = index + 1;
		var noffset = delta * (height + offset);

		items[items.length - 1 - index].style['-webkit-transform'] = 'translatey(-' + noffset + 'px)';
		items[items.length - 1 - index].style['transform'] = 'translatey(-' + noffset + 'px)';

	}

	function collapse(index) {

		items[index].style['-webkit-transform'] = '';
		items[index].style['transform']         = '';

	}

	function fold() {

		for (var i = 0, l = items.length; i < l; i++) {

				if (state === 0) {
					expand(i);
				} else {
					collapse(i);
				}

			}

		state = (state) ? 0 : 1;
	}

	function Foldy(homeButton, options) {

		options       = options || {};
		height        = options.height || 40;
		offset        = options.offset || 10;
		animationTime = options.animationTime || 200;

		state = 0;
		home  = homeButton;
		
	}

	Foldy.prototype.init = function () {

		items        = document.querySelectorAll('.foldy-item');
		home.onclick = fold;
		
	};

	window.Foldy = Foldy;

}(window));
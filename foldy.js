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
		var aindex  = items.length - 1 - index;

		//To prevent ugly borders when collapsed
		items[aindex].style.border               = '1px solid gray';
		items[aindex].style['-webkit-transform'] = 'translatey(-' + noffset + 'px)';
		items[aindex].style['transform']         = 'translatey(-' + noffset + 'px)';

	}

	function collapse(index) {

		
		items[index].style['-webkit-transform'] = '';
		items[index].style['transform']         = '';

		//To prevent ugly borders when collapsed
		items[index].style.border = 'none';

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

	function Foldy(options) {

		options       = options || {};
		height        = options.height || 40;
		offset        = options.offset || 10;
		animationTime = options.animationTime || 200;

		state = 0;
		
	}

	Foldy.prototype.init = function () {

		items        = document.querySelectorAll('.foldy-item');
		home         = document.getElementById('foldy-home');
		home.onclick = fold
		
	};

	window.Foldy = Foldy;

}(window));
(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.util) {
		gtris.util = window.gtris.util = {};
	}

	var makeLoader = function(type, size, bgColor, opacity) {

		var gtrisLoader = document.createElement('div');
		gtrisLoader.setAttribute('class', 'gtrisLoader');

		if(type === undefined) {
			type = 'scaleout';
		}

		switch(type) {
			case 'scaleout':
				var scaleout = document.createElement('div');
				scaleout.setAttribute('class', 'gt-scaleout');
				scaleout.style.width = size + 'px';
				scaleout.style.height = size + 'px';
				scaleout.style.backgroundColor = bgColor;
				scaleout.style.opacity = opacity;
				gtrisLoader.appendChild(scaleout);
			break;

			case 'rotateplane':
				var rotateplane = document.createElement('div');
				rotateplane.setAttribute('class', 'gt-rotateplane');
				rotateplane.style.width = size + 'px';
				rotateplane.style.height = size + 'px';
				rotateplane.style.backgroundColor = bgColor;
				rotateplane.style.opacity = opacity;
				gtrisLoader.appendChild(rotateplane);
			break;

			case 'bouncedelay':
				var bouncedelay = document.createElement('div');
				bouncedelay.setAttribute('class', 'gt-bouncedelay');
				gtrisLoader.appendChild(bouncedelay);

				var bounce1 = document.createElement('div');
				var bounce2 = document.createElement('div');
				var bounce3 = document.createElement('div');
				bounce1.setAttribute('class', 'gt-bounce1');
				bounce2.setAttribute('class', 'gt-bounce2');
				bounce3.setAttribute('class', 'gt-bounce3');
				bouncedelay.appendChild(bounce1);
				bouncedelay.appendChild(bounce2);
				bouncedelay.appendChild(bounce3);

				bounce1.style.width = size + 'px';
				bounce1.style.height = size + 'px';
				bounce2.style.width = size + 'px';
				bounce2.style.height = size + 'px';
				bounce3.style.width = size + 'px';
				bounce3.style.height = size + 'px';

				bounce1.style.backgroundColor = bgColor;
				bounce2.style.backgroundColor = bgColor;
				bounce3.style.backgroundColor = bgColor;

				bounce1.style.opacity = opacity;
				bounce2.style.opacity = opacity;
				bounce3.style.opacity = opacity;
			break;

			case 'doublebounce':
				var doublebounce = document.createElement('div');
				doublebounce.setAttribute('class', 'gt-double-bounce');
				gtrisLoader.appendChild(doublebounce);

				var doublebounce1 = document.createElement('div');
				var doublebounce2 = document.createElement('div');
				doublebounce1.setAttribute('class', 'gt-double-bounce1');
				doublebounce2.setAttribute('class', 'gt-double-bounce2');
				doublebounce.appendChild(doublebounce1);
				doublebounce.appendChild(doublebounce2);

				doublebounce1.style.width = size + 'px';
				doublebounce1.style.height = size + 'px';
				doublebounce2.style.width = size + 'px';
				doublebounce2.style.height = size + 'px';
				doublebounce1.style.backgroundColor = bgColor;
				doublebounce2.style.backgroundColor = bgColor;
				doublebounce1.style.opacity = opacity;
				doublebounce2.style.opacity = opacity;
			break;

			/*case 'foldingcube':
				var foldingcube = document.createElement('div');
				foldingcube.setAttribute('class', 'gt-folding-cube');
				gtrisLoader.appendChild(foldingcube);

				var foldingcube1 = document.createElement('div');
				var foldingcube2 = document.createElement('div');
				var foldingcube3 = document.createElement('div');
				var foldingcube4 = document.createElement('div');

				foldingcube1.setAttribute('class', 'gt-cube1 gt-cube');
				foldingcube2.setAttribute('class', 'gt-cube2 gt-cube');
				foldingcube3.setAttribute('class', 'gt-cube3 gt-cube');
				foldingcube4.setAttribute('class', 'gt-cube4 gt-cube');
				foldingcube.appendChild(foldingcube1);
				foldingcube.appendChild(foldingcube2);
				foldingcube.appendChild(foldingcube3);
				foldingcube.appendChild(foldingcube4);
			break;*/

			case 'rectanglebounce':
				var rectanglebounce = document.createElement('div');
				rectanglebounce.setAttribute('class', 'gt-rectangle-bounce');
				gtrisLoader.appendChild(rectanglebounce);

				var rectanglebounce1 = document.createElement('div');
				var rectanglebounce2 = document.createElement('div');
				var rectanglebounce3 = document.createElement('div');
				var rectanglebounce4 = document.createElement('div');
				var rectanglebounce5 = document.createElement('div');

				rectanglebounce1.setAttribute('class', 'gt-rect1');
				rectanglebounce2.setAttribute('class', 'gt-rect2');
				rectanglebounce3.setAttribute('class', 'gt-rect3');
				rectanglebounce4.setAttribute('class', 'gt-rect4');
				rectanglebounce5.setAttribute('class', 'gt-rect5');

				rectanglebounce.appendChild(rectanglebounce1);
				rectanglebounce.appendChild(rectanglebounce2);
				rectanglebounce.appendChild(rectanglebounce3);
				rectanglebounce.appendChild(rectanglebounce4);
				rectanglebounce.appendChild(rectanglebounce5);

				rectanglebounce1.style.width = size + 'px';
				rectanglebounce1.style.height = (size * 8) + 'px';
				rectanglebounce1.style.backgroundColor = bgColor;
				rectanglebounce1.style.opacity = opacity;

				rectanglebounce2.style.width = size + 'px';
				rectanglebounce2.style.height = (size * 8) + 'px';
				rectanglebounce2.style.backgroundColor = bgColor;
				rectanglebounce2.style.opacity = opacity;

				rectanglebounce3.style.width = size + 'px';
				rectanglebounce3.style.height = (size * 8) + 'px';
				rectanglebounce3.style.backgroundColor = bgColor;
				rectanglebounce3.style.opacity = opacity;

				rectanglebounce4.style.width = size + 'px';
				rectanglebounce4.style.height = (size * 8) + 'px';
				rectanglebounce4.style.backgroundColor = bgColor;
				rectanglebounce4.style.opacity = opacity;

				rectanglebounce5.style.width = size + 'px';
				rectanglebounce5.style.height = (size * 8) + 'px';
				rectanglebounce5.style.backgroundColor = bgColor;
				rectanglebounce5.style.opacity = opacity;
			break;

			case 'circlefading':
				var circlefading = document.createElement('div');
				circlefading.setAttribute('class', 'gt-circle-fading');
				gtrisLoader.appendChild(circlefading);

				var circlefading1 = document.createElement('div');
				var circlefading2 = document.createElement('div');
				var circlefading3 = document.createElement('div');
				var circlefading4 = document.createElement('div');
				var circlefading5 = document.createElement('div');
				var circlefading6 = document.createElement('div');
				var circlefading7 = document.createElement('div');
				var circlefading8 = document.createElement('div');
				var circlefading9 = document.createElement('div');
				var circlefading10 = document.createElement('div');
				var circlefading11 = document.createElement('div');
				var circlefading12 = document.createElement('div');

				circlefading.appendChild(circlefading1);
				circlefading.appendChild(circlefading2);
				circlefading.appendChild(circlefading3);
				circlefading.appendChild(circlefading4);
				circlefading.appendChild(circlefading5);
				circlefading.appendChild(circlefading6);
				circlefading.appendChild(circlefading7);
				circlefading.appendChild(circlefading8);
				circlefading.appendChild(circlefading9);
				circlefading.appendChild(circlefading10);
				circlefading.appendChild(circlefading11);
				circlefading.appendChild(circlefading12);

				circlefading1.setAttribute('class', 'gt-circle1 gt-circle');
				circlefading2.setAttribute('class', 'gt-circle2 gt-circle');
				circlefading3.setAttribute('class', 'gt-circle3 gt-circle');
				circlefading4.setAttribute('class', 'gt-circle4 gt-circle');
				circlefading5.setAttribute('class', 'gt-circle5 gt-circle');
				circlefading6.setAttribute('class', 'gt-circle6 gt-circle');
				circlefading7.setAttribute('class', 'gt-circle7 gt-circle');
				circlefading8.setAttribute('class', 'gt-circle8 gt-circle');
				circlefading9.setAttribute('class', 'gt-circle9 gt-circle');
				circlefading10.setAttribute('class', 'gt-circle10 gt-circle');
				circlefading11.setAttribute('class', 'gt-circle11 gt-circle');
				circlefading12.setAttribute('class', 'gt-circle12 gt-circle');

				circlefading.style.width = size + 'px';
				circlefading.style.height = size + 'px';
			break;
		}

		return gtrisLoader;
	};

	gtris.util.makeLoader = makeLoader;

})(window.gtris);

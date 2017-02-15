(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.ui) {
		gtris.ui = window.gtris.ui = {};
	}

	var dropdown = {

		init: function(obj) {
			var $dd = $(obj.target);
			this.addEvent($dd);
		},

		toggleDD: function(event) {
			var dd_button = $(event.target);
			dd_button.parents('.gt-dropdown').toggleClass('gt-active');
		},

		documentClick: function(event) {
			var dd_button = $(event.target);
			if( dd_button.is('.gt-dd-button') === false ) {
				var dropdowns = $('.gt-dd-menu');
				dropdowns.parents('.gt-dropdown').removeClass('gt-active');
			}
		},

		addEvent: function($dd) {
			$dd.find('.gt-dd-button').on('click', this.toggleDD);
			$(document).on('click', this.documentClick);
		}

	};

	gtris.ui.dropdown = dropdown;

})(window.gtris);

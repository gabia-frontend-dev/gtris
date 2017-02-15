(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.ui) {
		gtris.ui = window.gtris.ui = {};
	}

	var tooltip = {
		
		init: function(obj) {
			var $tt = obj.target;
			var event_trigger = obj.event;

			switch(event_trigger) {
				case 'click':
				event_trigger = 'click';
				break;

				case 'mouseover':
				event_trigger = 'mouseover';
				$tt.find('[data-tooltip="button"]').on('mouseleave', this.toggleTT);
				break;

				default:
				event_trigger = 'click';
			}
			
			this.addEvent($tt, event_trigger);
		},

		toggleTT: function(event) {
			var $tt_btn = $(event.target);
			var $tt_cnt = $tt_btn.siblings('[data-tooltip="content"]');
			var placement = $tt_btn.parents('.gt-tooltip').attr('data-placement');

			$tt_cnt.toggleClass('gt-active');
			if($tt_cnt.hasClass('gt-active')) {
				TweenMax.fromTo($tt_cnt, 0.3, {opacity:0}, {opacity:1, display:'block'});
			}else{
				TweenMax.fromTo($tt_cnt, 0.3, {opacity:1}, {opacity:0, display:'none'});
			}
			
			var root = tooltip;
			root.setPosition(placement, $tt_btn, $tt_cnt);
		},

		setPosition: function(placement, $tt_btn, $tt_cnt) {
			var btn_width = $tt_btn.outerWidth();
			var btn_height = $tt_btn.outerHeight();
			var cnt_width = $tt_cnt.outerWidth();
			var cnt_height = $tt_cnt.outerHeight();
			var triangle_width = $tt_btn.parents('.gt-tooltip').find('.gt-triangle').outerWidth();
			var triangle_height = $tt_btn.parents('.gt-tooltip').find('.gt-triangle').outerHeight();

			switch(placement) {
				case 'right':
				$tt_cnt.css({
					left: btn_width + triangle_width,
					top: ( btn_height - cnt_height ) / 2
				});
				$tt_cnt.find('.gt-triangle').css({
					left: - triangle_width,
					top: ( cnt_height - triangle_height ) / 2
				});
				break;

				case 'left':
				$tt_cnt.css({
					right: btn_width + triangle_width,
					top: ( btn_height - cnt_height ) / 2
				});
				$tt_cnt.find('.gt-triangle').css({
					right: - triangle_width,
					top: ( cnt_height - triangle_height ) / 2
				});
				break;

				case 'bottom':
				$tt_cnt.css({
					left: ( btn_width - cnt_width ) / 2,
					top: ( btn_height + triangle_height )
				});
				$tt_cnt.find('.gt-triangle').css({
					top: -triangle_height,
					left: ( cnt_width / 2 ) - ( triangle_width / 2 )
				});
				break;

				case 'top':
				$tt_cnt.css({
					left: ( btn_width - cnt_width ) / 2,
					top: - (cnt_height + triangle_height)
				});
				$tt_cnt.find('.gt-triangle').css({
					left: ( cnt_width / 2 ) - ( triangle_width / 2 ),
					top: cnt_height
				});
				break;
			}
		},

		addEvent: function($tt, event_trigger) {
			$tt.find('[data-tooltip="button"]').on(event_trigger, this.toggleTT);
			$tt.find('[data-tooltip="hide"]').on('click', this.hideTT);
		} 
	};

	gtris.ui.tooltip = tooltip;

})(window.gtris);

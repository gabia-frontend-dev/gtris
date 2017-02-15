(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.ui) {
		gtris.ui = window.gtris.ui = {};
	}

	var collapse = {

		init: function(obj) {
			var _obj = obj;
			if(!_obj.expandable) _obj.expandable = false;
			if(!_obj.slideTime) _obj.slideTime = 250;
			this.addEvent(_obj);
		},

		collapseContent: function(event) {
			event.preventDefault();
			var obj = event.data.obj;
			var $target = $(obj.target);
			var $collapseHeader = $(event.target);
			var $thisContent = $collapseHeader.closest('.gt-collapse-item').find('[data-collapse="content"]');
			var $collapseContent = $target.find('[data-collapse="content"]');
			
			//expandable
			if(!obj.expandable) {
				$collapseContent.parent().removeClass('gt-active');
				$collapseContent.slideUp(obj.slideTime);
			}
			//show & hide
			if($thisContent.is(':hidden')) {
				$thisContent.slideDown(obj.slideTime);
				$collapseHeader.closest('.gt-collapse-item').addClass('gt-active');
			}else{
				$thisContent.slideUp(obj.slideTime);
				$collapseHeader.parent().removeClass('gt-active');
			}
		},

		addEvent: function(obj) {
			var $acd_head = $(obj.target).find('[data-collapse="header"]');
			$acd_head.on('click', { obj: obj }, this.collapseContent);
		}
	};

	gtris.ui.collapse = collapse;

})(window.gtris);

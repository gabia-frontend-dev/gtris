(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.ui) {
		gtris.ui = window.gtris.ui = {};
	}
	var tab = {
		init: function(obj) {
			var _obj = obj;
			this.attachTabEvent(_obj);		
		},
		getParam: function(paramName) {
			var val = gtris.util.getParameterByName(paramName);
			return val;
		},
		attachTabEvent: function(_obj) {			
			var $target = $(_obj.target);
			var idx = Number(this.getParam('idx'));
			if(idx < 0 || idx > _obj.target.length-1 || window.isNaN(idx)) {
				idx = 0;
			}
			
			if(!_obj.event) {
				_obj.event = 'click';
			}
			
			$target.each(function() {
				var $tab_head = $(this);
				$tab_head.target_id = [];

				$tab_head.find('[data-id]').each(function() {
					var $tab_nav = $(this);
					var this_id = "#" + $(this).attr('data-id');
					$tab_head.target_id.push(this_id);
					$tab_nav.on(_obj.event, function() {
						tab.executeTabEvent.call(this, $tab_head, $(this).parent('li').index());
					});
				});
				$tab_head.find('li').eq(idx).find('[data-id]').trigger(_obj.event);
			});
		},
		ajaxCall: function(this_id) {
			$.ajax({
				url: $(this).attr('data-url'),
				beforeSend : function() {
					$(this_id).empty().append('<div style="text-align:center;padding:10px 0;"><img src="https://static.gabia.com/gtris/assets/images/gt-loader.gif"></div>');
				}
			}).done(function(response) {
				$(this_id).empty().append(response);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				window.alert('load failed.');
				$(this_id).empty().append('jqXHR: ' + jqXHR + ', textStatus: ' + textStatus + ', errorThrown: ' + errorThrown);
			});
		},
		executeTabEvent: function($tab_head, idx) {			
			var this_id = "#" + $(this).attr('data-id');			
			if((/(http(s)?:\/)?(\/\w+)+(\.[\w.]+)?/g).test($(this).attr('data-url'))) {
				tab.ajaxCall.call(this, this_id);
			}			
			
			$tab_head.find("li.gt-active").removeClass("gt-active");
			$tab_head.find("li").eq(idx).addClass("gt-active");
			$($tab_head.target_id.join(", ")).hide();			
			$(this_id).show();
		}
	};
	gtris.ui.tab = tab;

})(window.gtris);
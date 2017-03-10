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
			var $target = $(_obj.target);
			var idx = this.getParam('idx');
			_obj.event = this.attachTabEvent(_obj.event);
			
			$target.each(function() {
				var $tab_head = $(this);
				$tab_head.target_id = [];

				$tab_head.find('[data-id]').each(function() {
					var $tab_nav = $(this);
					var this_id = "#" + $(this).attr('data-id');
					$tab_head.target_id.push(this_id);
					$tab_nav.on(_obj.event, function() {
						tab.excuteTabEvent.call(this, $tab_head, $(this).parent('li').index());
					});
				});
				$tab_head.find('li').eq(idx).find('[data-id]').trigger(_obj.event);
			});
			
		},
		getParam: function(paramName) {
			var idx = gtris.util.getParameterByName(paramName);
			idx = idx ? idx : 0;
			return idx;
		},
		ajaxCall: function(this_id) {
			$.ajax({
				url: $(this).attr('data-url'),
				beforeSend : function() {
					$(this_id).empty().append('<img src="https://static.gabia.com/gtris/assets/images/gt-loader.gif">');
				}
			}).done(function(response) {
				$(this_id).empty().append(response);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				window.alert('데이터를 가져오는 데 실패했습니다.');
				$(this_id).empty().append('jqXHR: ' + jqXHR + ', textStatus: ' + textStatus + ', errorThrown: ' + errorThrown);
			});
		},
		attachTabEvent: function(e) {
			if(!e) {
				e = 'click';
			}
			else if(e == 'mouseover') {
				e += ' focus';
			}		
			return e;
		},
		excuteTabEvent: function($tab_head, idx) {			
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
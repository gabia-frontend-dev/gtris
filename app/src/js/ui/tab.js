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
            if(!_obj.event) _obj.event = 'click';
            
            $target.each(function() {

                var $tab_head = $(this); //<ul class="gt-tab-nav">
                var target_id = [];

                $tab_head.find('[data-id]').each(function() {

                    var $tab_nav = $(this); //<a href="javascript:void(0);">Tab1</a>
                    var this_id = "#" + $(this).attr('data-id');

                    //event handler
                    function eventHandler(event) {
                        event.preventDefault();
                        $tab_head.find("li.gt-active").removeClass("gt-active");
                        $(event.target).parents("li").addClass("gt-active");
                        $(target_id.join(", ")).hide();
                        $(this_id).show();
                    }
                    target_id.push(this_id);

                    //add event
                    $tab_nav.on(_obj.event, eventHandler);
                });
            });
        }

    };

    gtris.ui.tab = tab;

})(window.gtris);

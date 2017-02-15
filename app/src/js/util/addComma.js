(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var addComma = function(num) {
        var _num = String(num).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		return _num;
    };
    
    gtris.util.addComma = addComma;

})(window.gtris);

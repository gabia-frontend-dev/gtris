(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var removeComma = function(num) {
        var str = Number(num.replace(/\,/g, ''));
        return str;
    };

    gtris.util.removeComma = removeComma;

})(window.gtris);

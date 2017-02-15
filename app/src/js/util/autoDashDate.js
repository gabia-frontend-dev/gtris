(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var autoDashDate = function(str) {
        var _str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if(_str.length < 5) {
           return str;
        }else if(_str.length < 7) {
            tmp += _str.substr(0, 4);
            tmp += '-';
            tmp += _str.substr(4, 5);
            return tmp;
        }else{
            tmp += _str.substr(0, 4);
            tmp += '-';
            tmp += _str.substr(4, 2);
            tmp += '-';
            tmp += _str.substr(6, 2);
            return tmp;
        }
    };

    gtris.util.autoDashDate = autoDashDate;

})(window.gtris);

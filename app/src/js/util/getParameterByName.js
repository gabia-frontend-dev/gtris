(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var getParameterByName = function(name) {
        if (name === undefined || name === '') return;
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i=0; i<vars.length; i++) {
            var pair = vars[i].split('=');
            if(pair[0] == name) {
                return pair[1];
            }
        }
    };

    gtris.util.getParameterByName = getParameterByName;

})(window.gtris);

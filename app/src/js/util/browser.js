(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var browser = function() {
        
		var browserPool = [
			{detectStr: "MSIE", name: "ie"},
			{detectStr: "Trident", name: "ie"},
			{detectStr: "Edge", name: "edge"},
			{detectStr: "Firefox", name: "firefox"},
			{detectStr: "OPR", name: "opera"},
			{detectStr: "Opera mini", name: "opera mini"},
			{detectStr: "Chrome", name: "chrome"},
			{detectStr: "CriOS", name: "chrome"},
			{detectStr: "Safari", name: "safari"}
		];

        var ua = navigator.userAgent;
        var n, v, vOffset;
		for(var i=0; i<browserPool.length; i++) {
			if((vOffset = ua.indexOf(browserPool[i].detectStr)) > -1) {
				n = browserPool[i].name;
				if(browserPool[i].detectStr == 'Trident') { //ie11
					v = ua.substr(ua.indexOf('rv:') + 3);
					v = parseFloat(v.split(')')[0]);
				}
				else if(browserPool[i].detectStr == 'Safari') {
					v = ua.substr(ua.indexOf('Version/') + 8);
					v = parseFloat(v.split('/')[0]);
				}
				else {
					v = ua.substr(vOffset + browserPool[i].detectStr.length + 1);
					v = parseFloat(v.split(' ')[0]);
				}
				break;
			}else{
				n = "unknown";
				v = -1;
			}
		}
        return {name: n, version: v};
    };

    gtris.util.browser = browser();

})(window.gtris);

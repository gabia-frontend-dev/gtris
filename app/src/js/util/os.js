(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.util) {
		gtris.util = window.gtris.util = {};
	}

	var os = function() {
		var ua = navigator.userAgent;
		var aver = navigator.appVersion;
		var osPool = [
			{name:"Windows 10", detectStr:/(Windows 10.0|Windows NT 10.0)/},
			{name:"Windows 8.1", detectStr:/(Windows 8.1|Windows NT 6.3)/},
			{name:"Windows 8", detectStr:/(Windows 8|Windows NT 6.2)/},
			{name:"Windows 7", detectStr:/(Windows 7|Windows NT 6.1)/},
			{name:"Windows Vista", detectStr:/Windows NT 6.0/},
			{name:"Windows Server 2003", detectStr:/Windows NT 5.2/},
			{name:"Windows XP", detectStr:/(Windows NT 5.1|Windows XP)/},
			{name:"Windows 2000", detectStr:/(Windows NT 5.0|Windows 2000)/},
			{name:"Windows ME", detectStr:/(Win 9x 4.90|Windows ME)/},
			{name:"Windows 98", detectStr:/(Windows 98|Win98)/},
			{name:"Windows 95", detectStr:/(Windows 95|Win95|Windows_95)/},
			{name:"Windows NT 4.0", detectStr:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
			{name:"Windows CE", detectStr:/Windows CE/},
			{name:"Windows 3.11", detectStr:/Win16/},
			{name:"Android", detectStr:/Android/},
			{name:"Open BSD", detectStr:/OpenBSD/},
			{name:"Sun OS", detectStr:/SunOS/},
			{name:"Linux", detectStr:/(Linux|X11)/},
			{name:"iOS", detectStr:/iP(hone|od|ad)/},
			{name:"Mac OS X", detectStr:/Mac OS X/},
			{name:"Mac OS", detectStr:/Mac(PPC|Intel|_PowerPC|intosh)/},
			{name:"QNX", detectStr:/QNX/},
			{name:"UNIX", detectStr:/UNIX/},
			{name:"BeOS", detectStr:/BeOS/},
			{name:"OS/2", detectStr:/OS\/2/},
			{name:"Search Bot", detectStr:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
		];
		var n, v;

		for(var i=0; i<osPool.length; i++) {
			if(osPool[i].detectStr.test(ua)) {
				n = osPool[i].name;
				break;
			}else {
				n = "unknown";
			}
		}
		switch (n) {
			case 'Mac OS X':
				v = /Mac OS X (10[\.\_\d]+)/.exec(ua)[1];
				break;
			case 'Android':
				v = /Android ([\.\_\d]+)/.exec(ua)[1];
				break;
			case 'iOS':
				v = /OS (\d+)_(\d+)_?(\d+)?/.exec(aver);
				v = v[1] + '.' + v[2] + '.' + (v[3] | 0);
				break;
			default:
				v = -1;
		}
		if(/Windows/.test(n)) {
			v = /Windows (.*)/.exec(n)[1];
			n = 'Windows';
		}
		return {name: n, version: v};
	};

	gtris.util.os = os;

})(window.gtris);

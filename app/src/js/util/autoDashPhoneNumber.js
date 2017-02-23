(function(gtris) {
	'use strict';
	if (!gtris) {
		gtris = window.gtris = {};
	}
	if (!gtris.util) {
		gtris.util = window.gtris.util = {};
	}

	var autoDashPhoneNumber = function(str) {
		var _str = str.replace(/[^0-9]/g, '');
		var tmp = '';
		if(_str.length < 4) {
			return _str;
		}else if(_str.length < 7) {
			tmp += _str.substr(0, 3);
			tmp += '-';
			tmp += _str.substr(3);
			return tmp;
		}else if(_str.length < 11) {
			tmp += _str.substr(0, 3);
			tmp += '-';
			tmp += _str.substr(3, 3);
			tmp += '-';
			tmp += _str.substr(6);
			return tmp;
		}else{
			tmp += _str.substr(0, 3);
			tmp += '-';
			tmp += _str.substr(3, 4);
			tmp += '-';
			tmp += _str.substr(7);
			return tmp;
		}
		return str;
	};

	gtris.util.autoDashPhoneNumber = autoDashPhoneNumber;

})(window.gtris);

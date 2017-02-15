(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var copyToClipboard = function(text) {
        if(text === undefined || text === '') return;
        var _txt = text;
        if(window.clipboardData) {
            window.clipboardData.setData("text", _txt);
        }else{
            var textarea = document.createElement("textarea");
            textarea.textContent = _txt;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");
            } catch (ex) {
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    };

    gtris.util.copyToClipboard = copyToClipboard;

})(window.gtris);

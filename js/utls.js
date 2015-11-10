"use strict";
var SonyNils = SonyNils || {};
    
SonyNils.Utils = SonyNils.Utils || {
    getJson : function (url, callbackName) {
        url = this.addCallbackToUrl(url, callbackName);
        this.insertJsonScript(url);
    },

    addQueryToUrl : function (base, query) {
        return base + "?q=" + query;
    },

    addCallbackToUrl : function (url, callbackName) {
        return url + "&callback=" + callbackName;
    },

    insertJsonScript : function (url) {
        var jsonPScript = document.createElement('script');
        jsonPScript.src = url;
        document.getElementsByTagName('head')[0].appendChild(jsonPScript);
    }
};

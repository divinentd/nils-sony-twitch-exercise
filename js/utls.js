"use strict";
var SonyNils = SonyNils || {};
    
SonyNils.Utils = SonyNils.Utils || {
    LOADING_ID : "loading",

    getJson : function (url, callbackName) {
        url = this.addCallbackToUrl(url, callbackName);
        this.insertJsonScript(url);
    },

    addQueryToUrl : function (base, query) {
        return base + "&q=" + query;
    },

    addCallbackToUrl : function (url, callbackName) {
        return url + "&callback=" + callbackName;
    },

    insertJsonScript : function (url) {
        var jsonPScript = document.createElement('script');
        jsonPScript.src = url;
        document.getElementsByTagName('head')[0].appendChild(jsonPScript);
    },

    hideLoading : function () {
        var loadingDiv = this.loadingDiv || document.getElementById(this.LOADING_ID);
        loadingDiv.style.display = "none";
    },

    showLoading : function () {
        var loadingDiv = this.loadingDiv || document.getElementById(this.LOADING_ID);
        loadingDiv.style.display = "";
    },


    addEvent : function (element, event, action) {
        if (window.addEventListener) {
            element.addEventListener(event, action, true);
            return;
        }
        if (window.attachEvent) {
            window.attachEvent("on" + event, action);
        }
    }
};

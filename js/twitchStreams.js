var SonyNils = SonyNils || {};
    
SonyNils.TwitchStream = (function (Util) {
    "use strict";

    var BASE_URL = "https://api.twitch.tv/kraken/search/streams",
        CALLBACK_NAME = "SonyNils.TwitchStream.recieveData";

    function recieveData(json) {
        console.log("recieveData", json);
    }

    function getData(query) {
        var url = Util.addQueryToUrl(BASE_URL, query);
        Util.getJson(url, CALLBACK_NAME);
    }
    
    return {
        'getData' : getData,
        'recieveData' : recieveData
    };
}(SonyNils.Utils));

SonyNils.TwitchStream.getData('starcraft');

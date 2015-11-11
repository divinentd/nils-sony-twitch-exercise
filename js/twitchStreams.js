var SonyNils = SonyNils || {};
    
SonyNils.TwitchStream = (function (Util) {
    "use strict";

    var BASE_URL = "https://api.twitch.tv/kraken/search/streams?limit=5",
        CALLBACK_NAME = "SonyNils.TwitchStream.receiveData",
        FORM_ID = "game-search-form",
        SEARCH_FIELD_ID = "game-title",
        RESULTS_ID = "twitchResults",
        formElement,
        searchInput;

    function init() {
        attachEvents();
        Util.hideLoading();
    }

    function attachEvents() {
        formElement = document.getElementById(FORM_ID);
        searchInput = document.getElementById(SEARCH_FIELD_ID);

        Util.addEvent(formElement, "submit", readForm);
        //TODO: add pagination event
    }

    function readForm(e) {
        e.preventDefault();
        getData(searchInput.value);
    }

    function getData(query) {
        Util.showLoading();

        var url = Util.addQueryToUrl(BASE_URL, query);
        Util.getJson(url, CALLBACK_NAME);
    }

    function receiveData(results) {
        console.log("receiveData", results);

        var resultsTarget = document.getElementById(RESULTS_ID),
            resultElements = document.createDocumentFragment();

        if (results._total > 0) {
            resultElements.appendChild(
                buildPagination(results._total, results._links)
            );
            resultElements.appendChild(
                buildResults(results.streams)
            );
        }
        else {
            //TODO: build no results element
            alert("nothing!");
        }

        resultsTarget.innerHTML = "";
        resultsTarget.appendChild(resultElements);

        Util.hideLoading();
    }

    function buildPagination(count, links) {
        var pagination = document.createElement("div");
        pagination.innerHTML = "Total results: " + count;

        return pagination;
    }

    function buildResults (streams) {
        var list = document.createElement("ol"),
            item,
            i,
            l;

        for (i = 0, l = streams.length; i < l; i++) {
            item = document.createElement("li");
            item.innerHTML = streams[i].game;
            list.appendChild(item);
        }

        return list;
    }
    
    /**
     * exposing public methods
     */
    return {
        'init' : init,
        'receiveData' : receiveData
    };
}(SonyNils.Utils));

SonyNils.TwitchStream.init();

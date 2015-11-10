var NilsSony = NilsSony || {};
    
NilsSony.TwitchStream = (function (Util) {
    "use strict";
    function hello() {
        console.log(Util.getJson());
    }
    
    return {
        'hello' : hello
    };
}(NilsSony.Utils));

NilsSony.TwitchStream.hello();
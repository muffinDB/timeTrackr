﻿var functions = {
    getPropsByName: function () {
        var caller = this;
        for (var k in caller) {
            if (!caller.hasOwnProperty(k)) continue;

            caller[k] = $("#" + k.toLowerCase()).val();
        }
    },
    toPostData: function() {
        var self = this;
        return JSON.parse(JSON.stringify(self));
    },
    dateFromDateTimeString: function (s) {
        if (!s) return void 0;
        var m = s.match(/(\S+)T.+/);
        if (!m) return void 0;
        var d = m[1];
        return d.replace(/-/g, "/");
    }
}
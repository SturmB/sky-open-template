"use strict";
/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
var SimpleSayer;
(function (SimpleSayer) {
    var Talker = /** @class */ (function () {
        function Talker() {
        }
        Talker.prototype.sayHello = function () {
            return "Talker external!";
        };
        return Talker;
    }());
    SimpleSayer.Talker = Talker;
})(SimpleSayer || (SimpleSayer = {}));

"use strict";
/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
function openDocument() {
    $.writeln("in the openDocument() function.");
    var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
    $.writeln(fileRef.fullName);
    var docRef = app.open(fileRef);
}
function sayHi() {
    var text = "Hi there.";
    var talker = new Talker();
    var newText = talker.sayHello();
    $.writeln(newText);
    alert(newText);
    return newText;
}
var Talker = /** @class */ (function () {
    function Talker() {
    }
    Talker.prototype.sayHello = function () {
        return "Talker says 'Hi!'";
    };
    return Talker;
}());

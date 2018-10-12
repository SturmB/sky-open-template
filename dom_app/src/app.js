"use strict";
/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="./TheTalker.js" />
exports.__esModule = true;
var TheTalker_1 = require("./TheTalker");
var path = $.includePath;
// now build a path to another js file
var libfile = File($.includePath + "/TheTalker.js");
$.writeln(libfile.toString());
if (libfile.exists) {
    $.writeln("Found file!");
    $.evalFile(libfile);
}
function openDocument() {
    $.writeln("in the openDocument() function.");
    var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
    $.writeln(fileRef.fullName);
    var docRef = app.open(fileRef);
}
function sayHi() {
    var text = "libfile 5 - TheTalker";
    $.writeln(text);
    $.writeln(TheTalker_1.Talker.sayHello());
    // $.writeln(say());
    alert(text);
    return text;
}

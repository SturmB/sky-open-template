"use strict";
/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
var path = $.includePath;
// now build a path to another js file
var libfile = File($.includePath + "/TheTalker.js");
$.writeln(libfile.toString());
if (libfile.exists) {
    $.writeln("Found file!");
    $.evalFile(libfile);
}
var Talker = SimpleSayer.Talker;
function openDocument() {
    $.writeln("in the openDocument() function.");
    var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
    $.writeln(fileRef.fullName);
    var docRef = app.open(fileRef);
}
function sayHi() {
    var text = "Facade or Alias 2";
    $.writeln(text);
    var talker = new Talker();
    $.writeln(talker.sayHello());
    // $.writeln(say());
    alert(text);
    return text;
}

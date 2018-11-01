"use strict";
/*global JSON*/
/// <reference types="../../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="./lib/json2.d.ts"/>
/// <reference path="./lib/TheTalker.ts"/>
/// <reference path="./lib/Sayer.ts"/>
/// <reference path="./lib/Template.ts"/>
/**
 * Load libraries.
 */
var libFolder = new Folder($.includePath + "/lib/");
if (libFolder.exists) {
    var jsxFiles = libFolder.getFiles("*.js");
    for (var _i = 0, jsxFiles_1 = jsxFiles; _i < jsxFiles_1.length; _i++) {
        var jsxFile = jsxFiles_1[_i];
        try {
            $.evalFile(jsxFile);
        }
        catch (e) {
            alert("Exception: " + e);
        }
    }
}
var Talker = SimpleSayer.Talker;
// noinspection JSUnusedGlobalSymbols
var openDocument = function (template) {
    var fileRef = new File(template.fullPath);
    app.open(fileRef);
};
function sayHi() {
    var text = "loadJSX 17.";
    $.writeln(text);
    var talker = new Talker();
    $.writeln(talker.sayHello());
    // $.writeln(SimpleSayer.say());
    alert(text);
    return text;
}

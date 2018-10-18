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
var TemplateFile = OpenTemplate.TemplateFile;
function openDocument() {
    $.writeln("in the openDocument() function.");
    var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
    $.writeln(fileRef.fullName);
    var docRef = app.open(fileRef);
}
function sayHi() {
    var text = "loadJSX 17.";
    $.writeln(text);
    var talker = new Talker();
    $.writeln(talker.sayHello());
    // $.writeln(SimpleSayer.say());
    alert(text);
    return text;
}
function getFilesRecursively(folder, finalArray, extension) {
    if (finalArray === void 0) { finalArray = []; }
    var fileList = folder.getFiles("*");
    var addTemplate = function (file) {
        var f = new TemplateFile(file);
        // $.writeln(`f:
        //   ${f}`);
        finalArray.push(f);
    };
    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
        var file = fileList_1[_i];
        // $.writeln(file);
        if (file instanceof Folder) {
            finalArray = getFilesRecursively(file, finalArray, "ai");
        }
        else {
            if (!extension) {
                addTemplate(file);
            }
            else if (file.name.split(".").pop() === extension) {
                addTemplate(file);
            }
        }
    }
    return finalArray;
}
/**
 * Gets a string to a local directory and returns
 * all of the files recursively within it as a JSON string.
 *
 * @param path
 */
// noinspection JSUnusedGlobalSymbols
function getFiles(path) {
    // $.writeln(`Folder: ${path}`);
    var folder = new Folder(path);
    // $.writeln(`Folder exists: ${folder.exists}`);
    var productArray = getFilesRecursively(folder, [], "ai");
    // $.writeln("");
    // $.writeln("---");
    // $.writeln("");
    // $.writeln(productArray);
    // $.writeln(`First: ${productArray[0]}`);
    var j = JSON.stringify(productArray);
    // $.writeln(j);
    return j;
}

"use strict";
/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
/**
 * Loads the libraries for this ExtendScript script.
 *
 */
var libFolder = new Folder($.includePath + "/libs/");
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
// noinspection JSUnusedGlobalSymbols
/**
 * Opens the given document in the host application (Illustrator).
 *
 * @param {OpenTemplate.TemplateFile} template - The file to open.
 */
var openDocument = function (template) {
    var fileRef = new File(template.fullPath);
    app.open(fileRef);
};

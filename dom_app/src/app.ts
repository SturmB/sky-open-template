/*global JSON*/
/// <reference types="../../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="./lib/json2.d.ts"/>
/// <reference path="./lib/TheTalker.ts"/>
/// <reference path="./lib/Sayer.ts"/>
/// <reference path="./lib/Template.ts"/>

/**
 * Load libraries.
 */
const libFolder = new Folder($.includePath + "/lib/");
if (libFolder.exists) {
  const jsxFiles = libFolder.getFiles("*.js");
  for (const jsxFile of jsxFiles) {
    try {
      $.evalFile(jsxFile as File);
    } catch (e) {
      alert(`Exception: ${e}`);
    }
  }
}

const Talker = SimpleSayer.Talker;

// noinspection JSUnusedGlobalSymbols
const openDocument = (template: OpenTemplate.TemplateFile) => {
  const fileRef = new File(template.fullPath);
  app.open(fileRef);
};

function sayHi() {
  const text = "loadJSX 17.";
  $.writeln(text);
  const talker = new Talker();
  $.writeln(talker.sayHello());
  // $.writeln(SimpleSayer.say());
  alert(text);
  return text;
}

/// <reference types="../../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="../lib/TheTalker.ts"/>
/// <reference path="../lib/Sayer.ts"/>

/**
 * Load libraries.
 */
const libFolder = new Folder($.includePath + "/../lib/");
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

function openDocument() {
  $.writeln("in the openDocument() function.");
  const fileRef = new File(
    "~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd",
  );
  $.writeln(fileRef.fullName);

  const docRef = app.open(fileRef);
}

function sayHi() {
  const text = "loadJSX 16.";
  $.writeln(text);
  const talker = new Talker();
  $.writeln(talker.sayHello());
  $.writeln(SimpleSayer.say());
  alert(text);
  return text;
}

/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="Sayer.ts" />

const path = $.includePath;
// now build a path to another js file
const libfile = File($.includePath + "/Sayer.js");
$.writeln(libfile.toString());
if (libfile.exists) {
  $.writeln("Found file!");
  $.evalFile(libfile);
}

function openDocument() {
  $.writeln("in the openDocument() function.");
  const fileRef = new File(
    "~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd",
  );
  $.writeln(fileRef.fullName);

  const docRef = app.open(fileRef);
}

function sayHi() {
  const text = "SimpleSayer";
  $.writeln(text);
  $.writeln(SimpleSayer.say());
  // $.writeln(say());
  alert(text);
  return text;
}

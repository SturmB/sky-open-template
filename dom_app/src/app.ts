/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>

const path = $.includePath;
// now build a path to another js file
const libfile = File($.includePath + "/Sayer.jsxinc");
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
  const text = "libfile 2 - say";
  $.writeln(text);
  $.writeln(say());
  alert(text);
  return text;
}

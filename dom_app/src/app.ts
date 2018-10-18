/*global JSON*/
/// <reference types="../../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="./lib/TheTalker.ts"/>
/// <reference path="./lib/Sayer.ts"/>
/// <reference path="./lib/json2.d.ts"/>

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

function openDocument() {
  $.writeln("in the openDocument() function.");
  const fileRef = new File(
    "~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd",
  );
  $.writeln(fileRef.fullName);

  const docRef = app.open(fileRef);
}

function sayHi() {
  const text = "loadJSX 17.";
  $.writeln(text);
  const talker = new Talker();
  $.writeln(talker.sayHello());
  $.writeln(SimpleSayer.say());
  alert(text);
  return text;
}

function getFilesRecursively(folder: Folder, extension?: string, finalArray: string[] = []): string[] {

  const fileList: Array<File | Folder> = folder.getFiles("*");

  for (const file of fileList) {
    // $.writeln(file);
    if (file instanceof Folder) {
      finalArray = getFilesRecursively(file, "ai", finalArray);
    } else {
      if (!extension) {
        finalArray.push(file.name);
      } else if (file.name.split(".").pop() === extension) {
        finalArray.push(file.name);
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
function getFiles(path: string): string {
  // $.writeln(`Folder: ${path}`);
  const folder = new Folder(path);
  // $.writeln(`Folder exists: ${folder.exists}`);
  const productArray = getFilesRecursively(folder, "ai");

  // $.writeln("");
  // $.writeln("---");
  // $.writeln("");

  // $.writeln(productArray);
  // $.writeln(`First: ${productArray[0]}`);
  const j = JSON.stringify(productArray);
  // $.writeln(j);
  return j;
}

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
const TemplateFile = OpenTemplate.TemplateFile;

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
  // $.writeln(SimpleSayer.say());
  alert(text);
  return text;
}

function getFilesRecursively(
  folder: Folder,
  finalArray: OpenTemplate.TemplateFile[] = [],
  extension?: string,
): OpenTemplate.TemplateFile[] {
  const fileList: Array<File | Folder> = folder.getFiles("*");

  const addTemplate = (file: File) => {
    const f = new TemplateFile(file);
    // $.writeln(`f:
    //   ${f}`);
    finalArray.push(f);
  };

  for (const file of fileList) {
    // $.writeln(file);
    if (file instanceof Folder) {
      finalArray = getFilesRecursively(file, finalArray, "ai");
    } else {
      if (!extension) {
        addTemplate(file);
      } else if (file.name.split(".").pop() === extension) {
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
function getFiles(path: string): string {
  // $.writeln(`Folder: ${path}`);
  const folder = new Folder(path);
  // $.writeln(`Folder exists: ${folder.exists}`);
  const productArray = getFilesRecursively(folder, [], "ai");

  // $.writeln("");
  // $.writeln("---");
  // $.writeln("");

  // $.writeln(productArray);
  // $.writeln(`First: ${productArray[0]}`);
  const j = JSON.stringify(productArray);
  // $.writeln(j);
  return j;
}

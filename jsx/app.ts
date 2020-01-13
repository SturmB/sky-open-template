/// <reference types="../node_modules/types-for-adobe/Illustrator/2015.3"/>

/**
 * Loads the libraries for this ExtendScript script.
 *
 */
const libFolder = new Folder(`${$.includePath}/libs/`);
if (libFolder.exists) {
  const jsxFiles = libFolder.getFiles(`*.js`);
  for (const jsxFile of jsxFiles) {
    try {
      $.evalFile(jsxFile as File);
    } catch (e) {
      alert(`Exception: ${e}`);
    }
  }
}

// noinspection JSUnusedGlobalSymbols
/**
 * Opens the given document in the host application (Illustrator).
 *
 * @param {OpenTemplate.TemplateFile} template - The file to open.
 */
const openDocument = (template: OpenTemplate.TemplateFile): void => {
  const fileRef = new File(template.fullPath);
  app.open(fileRef);
};

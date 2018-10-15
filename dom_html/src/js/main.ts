/*global $, window, location, CSInterface, SystemPath, themeManager*/

(() => {
  "use strict";

  const csInterface = new CSInterface();

  /**
   * Load JSX file into the scripting context of the product. All the jsx files in
   * folder [ExtensionRoot]/jsx will be loaded.
   */
/*
  function loadJSX() {
    console.log("Loading JSX files.");
    const extensionRoot =
      csInterface.getSystemPath(SystemPath.EXTENSION) + "/dom_app/src/";
    csInterface.evalScript('ext.evalFiles("' + extensionRoot + '")', null);
  }
*/

  function init() {
    themeManager.init();

    /**
     * Event handler for the Open button.
     */
    const openButton = $("#open-button");
    if (openButton) {
      openButton.on("click", () => {
        console.log("button clicked.");
        // loadJSX();
        csInterface.evalScript("sayHi();", (res: any) => {
          console.log(res);
          // alert(res);
        });
      });
    }
  }

  init();
})();

/*
let openButton = document.querySelector("#open-button");
if (openButton) {
  console.log("Found the open-button");
  openButton.addEventListener("click", saySomething);
}

/!* 3) Write a helper function to pass instructions to the ExtendScript side. *!/
function openDoc() {
  console.log("button clicked.");
  // @ts-ignore
  csInterface.evalScript("openDocument()");
  console.log("after evalScript.");
}

function saySomething() {
  csInterface.evalScript("sayHi()", (res: any) => {
    // let returnedText = res;
    console.log(res);
    alert(res);
  });
}

/!**
 * Load JSX file into the scripting context of the product. All the jsx files in
 * folder [ExtensionRoot]/jsx will be loaded.
 *!/
function loadJSX() {
  const extensionRoot =
    csInterface.getSystemPath(SystemPath.EXTENSION) + "/dom_app/";
  csInterface.evalScript(
    '$._ext.evalFiles("' + extensionRoot + '")',
    (res: any) => {
      console.log(res);
      alert(res);
    }
  );
}
*/

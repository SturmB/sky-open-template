"use strict";
/*global $, window, location, CSInterface, SystemPath, themeManager*/
(function () {
    "use strict";
    var csInterface = new CSInterface();
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
        var openButton = $("#open-button");
        if (openButton) {
            openButton.on("click", function () {
                console.log("button clicked.");
                // loadJSX();
                csInterface.evalScript("sayHi();", function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFFQUFxRTtBQUVyRSxDQUFDO0lBQ0MsWUFBWSxDQUFDO0lBRWIsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUV0Qzs7O09BR0c7SUFDTDs7Ozs7OztNQU9FO0lBRUEsU0FBUyxJQUFJO1FBQ1gsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCOztXQUVHO1FBQ0gsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsYUFBYTtnQkFDYixXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVE7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLGNBQWM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQ0UifQ==
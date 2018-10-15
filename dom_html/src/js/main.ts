/*global $, window, location, CSInterface, SystemPath, themeManager*/

(() => {
  "use strict";

  const csInterface = new CSInterface();

  function init() {

    themeManager.init();

    /**
     * Event handler for the Open button.
     */
    const openButton = $("#open-button");
    if (openButton) {
      openButton.on("click", () => {
        console.log("button clicked.");
        csInterface.evalScript("sayHi();", (res: any) => {
          console.log(res);
          // alert(res);
        });
      });
    }

  }

  init();
})();

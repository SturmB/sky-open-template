/*global $, window, location, CSInterface, SystemPath, themeManager*/

import * as talker from "./lib/CEPTalker";
// import { TemplateList } from "./TemplateList";

(() => {
  "use strict";

  const csInterface = new CSInterface();
  // const TemplateScript = OpenTemplate.TemplateList;
  // const templateList = new TemplateList("./");

  function init() {

    // alert("main init.");

    themeManager.init();

    // alert("after themeManager's init.");

    /**
     * Event handler for the Open button.
     */
    const openButton = $("#open-button");
    if (openButton) {
      openButton.on("click", () => {
        // alert(`Button clicked.`);
        // console.log(templateList);
        const t = new talker.Talker();
        console.log(t.sayHello());
        // const arr = templateList.allFiles;
        // console.log(arr.toString());
        csInterface.evalScript("sayHi();", (res: any) => {
          console.log(res);
          // alert(res);
        });
      });
    }

    /**
     * Event handler for the template folder selection button.
     */
    const templateButton = $("#file-control");
    const templateList = $("#template-list");
    if (templateButton) {
      templateButton.on("change", () => {
        console.log("File changed.");
        // @ts-ignore
        const files = templateButton[0].files;
        if (files.length) {
          const filepath = files[0].path;
          const path = filepath.substr(0, filepath.lastIndexOf("/") - 1);
          console.log(`Its path is: ${path}`);
          csInterface.evalScript(`getFiles("${path}");`, (res: any) => {
            console.log(res);
            const resArray: string[] = res.split(",");
            templateList.empty();
            for (const item of resArray) {
              console.log(`Item: ${item}`);
              templateList.append($("<option />").val(item).text(item));
            }
          });
        }
      });
    }

  }

  init();
})();

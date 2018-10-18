/*global $, window, location, CSInterface, SystemPath, themeManager*/

import * as talker from "./lib/CEPTalker";
import "./lib/Template";
// import { TemplateList } from "./TemplateList";

(() => {
  "use strict";

  const csInterface = new CSInterface();
  // const TemplateScript = OpenTemplate.TemplateList;
  // const templateList = new TemplateList("./");

  function init(): void {

    // alert("main init.");

    themeManager.init();

    // alert("after themeManager's init.");

    /**
     * Event handler for the Open button.
     */
    const openButton: JQuery<HTMLElement> = $("#open-button");
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
    const templateButton: JQuery<HTMLElement> = $("#file-control");
    const templateList: JQuery<HTMLElement> = $("#template-list");
    if (templateButton) {
      templateButton.on("change", () => {
        // console.log("File changed.");
        // @ts-ignore
        const files: FileList = templateButton[0].files;
        if (files.length) {
          // @ts-ignore
          const filePath: string = files[0].path;
          const path: string = filePath.substr(0, filePath.lastIndexOf("/"));
          // console.log(`Its path is: ${path}`);
          csInterface.evalScript(`getFiles("${path}");`, (res: string) => {
            // console.log(res);
            const fileList: OpenTemplate.TemplateFile[] = JSON.parse(res);
            // console.log(fileList);
            // console.log(fileList[0].fullName);
            templateList.empty();
            for (const file of fileList) {
              // console.log(`Item: ${file}`);
              templateList.append($("<option />").val(file.fullPath).text(file.fileName));
            }
          });
        }
      });
    }

  }

  init();
})();

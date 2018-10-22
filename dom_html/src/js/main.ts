/*global $, window, location, CSInterface, SystemPath, themeManager*/

import * as fs from "fs";
import * as talker from "./lib/CEPTalker";
import { CookieManager } from "./lib/CookieManager";
import "./lib/Template";

(() => {
  "use strict";
  const resultFs: boolean = fs.existsSync("./");
  console.log(`Current dir exists: ${resultFs}`);

  const csInterface: CSInterface = new CSInterface();
  const cookieManager: CookieManager = new CookieManager();

  function init(): void {
    /**
     * Event handler for the Open button.
     */
    const openButton: JQuery<HTMLElement> = $("#open-button");
    if (openButton) {
      openButton.on("click", () => {
        const t = new talker.Talker();
        console.log(t.sayHello());
        csInterface.evalScript("sayHi();", (res: any) => {
          console.log(res);
        });
      });
    }

    const setTemplateList = (json: string | undefined) => {
      if (json) {
        const fileList: OpenTemplate.TemplateFile[] = JSON.parse(json);
        templateList.empty();
        for (const file of fileList) {
          templateList.append(
            $("<option />")
              .val(file.fullPath)
              .text(file.fileName),
          );
        }
      }
    };

    const getFiles = (path: string) => {
      csInterface.evalScript(
        `getFiles("${path}");`,
        (json: string | undefined) => {
          setTemplateList(json);
        },
      );
    };

    /**
     * Event handler for the template folder selection button.
     */
    const templateButton: JQuery<HTMLElement> = $("#file-control");
    const templateList: JQuery<HTMLElement> = $("#template-list");
    if (templateButton) {
      templateButton.on("change", () => {
        // @ts-ignore
        const files: FileList = templateButton[0].files;
        if (files.length) {
          // @ts-ignore
          const filePath: string = files[0].path;
          const path: string = filePath.substr(0, filePath.lastIndexOf("/"));
          cookieManager.set(path);
          getFiles(path);
        }
      });
    }

    themeManager.init();

    const templatePath: string | null = cookieManager.get();
    if (templatePath) {
      getFiles(templatePath);
    }
  }

  init();
})();

/*global $, window, location, CSInterface, SystemPath, themeManager*/

// import * as fs from "fs";
import * as dir from "node-dir";
import * as talker from "./lib/CEPTalker";
import { CookieManager } from "./lib/CookieManager";
import { TemplateFile } from "./lib/Template";

(() => {
  "use strict";

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

    /**
     * Set the list of templates in the Panel.
     *
     * @param fileList
     */
    const setTemplateList = (fileList: TemplateFile[]) => {
      if (fileList.length) {
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

    /**
     * Get the list of template files recursively from a given path,
     * then populate the HTML panel with that list.
     *
     * @param path
     */
    const getFiles = (path: string) => {
      dir.files(path, (err: Error, files: string[]) => {
        if (err) {
          throw err;
        }
        const ext: string = "ai";
        const testFilename: string = "myTestFileName.ai";
        const templatePaths: string[] = files.filter((file) => {
          return file.split(".").pop() === ext;
        });
        const templates: TemplateFile[] = [];
        for (const template of templatePaths) {
          templates.push(new TemplateFile(template));
        }
        // console.log(templates);
        setTemplateList(templates);
      });
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

/*global $, window, location, CSInterface, SystemPath, themeManager*/

import "jquery";
import * as dir from "node-dir";
import { Spinner } from "spin.js";
import { CookieManager } from "./lib/CookieManager";
import { TemplateFile } from "./lib/Template";
import { TypeAhead } from "./TypeAhead";

(() => {
  "use strict";

  const csInterface: CSInterface = new CSInterface();
  const cookieManager: CookieManager = new CookieManager();

  // Set up a spinner.
  const spinner: Spinner = new Spinner({ color: "#fff", lines: 12 });
  const elBody: JQuery<HTMLElement> = $("body");
  const elSelectWrapper: JQuery<HTMLElement> = $("#template-list-wrapper");
  const elSelect: JQuery<HTMLElement> = $("#template-list");
  const elInput: JQuery<HTMLInputElement> = $("#search-box");
  const typeAhead = new TypeAhead(elSelect, elInput);

  // Set the defaults for BlockUI.
  // @ts-ignore
  $.blockUI.defaults = {
    message: null,
    onBlock: () => spinner.spin(elBody.get(0)),
    onUnblock: () => spinner.stop(),
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.3,
    },
    showOverlay: true,
  };

  const openTemplates = (selected: string[]) => {
    for (const item of selected) {
      const template: TemplateFile = new TemplateFile(item);
      const jsonTemplate: string = JSON.stringify(template);
      csInterface.evalScript(`openDocument(${jsonTemplate})`, (result: any) => {
        console.log(result);
      });
    }
    $.unblockUI();
  };

  function init(): void {
    // noinspection JSMismatchedCollectionQueryUpdate
    /**
     * Event handler for the Open button.
     */
    const openButton: JQuery<HTMLElement> = $("#open-button");
    if (openButton) {
      openButton.on("click", () => {
        const selected: string[] = templateList.val() as string[];
        if (selected.length) {
          $.blockUI();
          setTimeout(() => openTemplates(selected), 1000);
        }
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
      // @ts-ignore
      elSelectWrapper.block({
        onBlock: () => spinner.spin(elSelectWrapper.get(0)),
      });
      setTimeout(() => {
        dir.files(path, (err: Error, files: string[]) => {
          if (err) {
            throw err;
          }
          const ext: string = "ai";
          const templatePaths: string[] = files.filter((file) => {
            return file.split(".").pop() === ext;
          });
          templatePaths.sort();
          const templates: TemplateFile[] = [];
          for (const template of templatePaths) {
            templates.push(new TemplateFile(template));
          }
          setTemplateList(templates);
          // @ts-ignore
          elSelectWrapper.unblock();
          elInput.off();
          typeAhead.setOptionsOriginal();
          elInput.on("keyup change reset search", () => {
            typeAhead.filterOptionsIn(elSelect);
          });
        });
      }, 1000);
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

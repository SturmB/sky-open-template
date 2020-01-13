/**
 * This file contains the main panel functions and calls to all of its modules.
 */

import { CSInterface } from "csinterface-ts";
import * as dir from "node-dir";
import { Spinner } from "spin.js";
import { CookieManager } from "./libs/CookieManager";
import { TemplateFile } from "./libs/Template";
import { TypeAhead } from "./libs/TypeAhead";

/**
 * The main function that will run in the Adobe CEP panel.
 */
(() => {
  "use strict";

  // Set up constants.
  const csInterface: CSInterface = new CSInterface();
  const cookieManager: CookieManager = new CookieManager();
  const spinner: Spinner = new Spinner({ color: "#fff", lines: 12 });
  const elBody: JQuery<HTMLElement> = $("body");
  const elSelectWrapper: JQuery<HTMLElement> = $("#template-list-wrapper");
  const elSelect: JQuery<HTMLElement> = $("#template-list");
  const elInput: JQuery<HTMLInputElement> = $("#search-box");
  const typeAhead = new TypeAhead(elSelect, elInput);
  const nonSelectHeight = 180;
  const selectLineHeight = 20;

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

  /**
   * Calls the host application to open all of the files in the given list of full pathnames.
   *
   * @param {string[]} selected - The list of full pathnames as an array of strings.
   */
  const openTemplates = (selected: string[]): void => {
    for (const item of selected) {
      const template: TemplateFile = new TemplateFile(item);
      const jsonTemplate: string = JSON.stringify(template);
      csInterface.evalScript(`openDocument(${jsonTemplate})`, (): void => {
        // console.log(result);
      });
    }
    $.unblockUI();
  };

  /**
   * Initialize the extension panel.
   */
  function init(): void {
    /**
     * Event handler for the Select element.
     * Mostly just for double-clicking an Option in the Select Element.
     *
     */
    if (elSelect) {
      elSelect.dblclick(function(this: any): void {
        const selected: string[] = templateList.val() as string[];
        if (selected.length) {
          $.blockUI();
          setTimeout(() => openTemplates(selected), 1000);
        }
      });
    }

    /**
     * Event handler for the Open button.
     *
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
     * Set the list of templates in the Panel as Option elements.
     *
     * @param {TemplateFile[]} fileList - The list of templates.
     */
    const setTemplateList = (fileList: TemplateFile[]): void => {
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
     * @param {string} path - The path from which to obtain the list of files.
     */
    const getFiles = (path: string): void => {
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
     *
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
          // console.log("filePath: " + filePath);
          const osFixedPath: string = filePath.replace(/\\/g, "/");
          // console.log("osFixedPath: " + osFixedPath);
          const path: string = osFixedPath.substr(
            0,
            osFixedPath.lastIndexOf("/"),
          );
          // console.log("Fixed path: " + path);
          cookieManager.set(path);
          getFiles(path);
        }
      });
    }

    /**
     * Initialize the theme (colors, GUI, look & feel, etc.)
     *
     */
    themeManager.init();

    /**
     * Upon starting the extension, obtain an existing list of files
     * if the path to them has already been set.
     *
     */
    const templatePath: string | null = cookieManager.get();
    if (templatePath) {
      getFiles(templatePath as string);
    }

    /**
     * Event handler for when the extension panel is re-sized.
     * Re-sizes the Select[multiple] element to fill the space.
     *
     */
    const resizeSelect = (): void => {
      const numLines = Math.floor(
        (window.innerHeight - nonSelectHeight) / selectLineHeight,
      );
      elSelect.attr("size", numLines);
    };

    /**
     * Resize the Select[multiple] element upon startup of the extension panel
     * and assign the handler to the event when the panel is re-sized.
     */
    $(resizeSelect);
    $(window).on("resize", resizeSelect);
  }

  init();
})();

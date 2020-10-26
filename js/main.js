/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/libs/CookieManager.ts":
/*!**********************************!*\
  !*** ./js/libs/CookieManager.ts ***!
  \**********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
var CookieManager = /** @class */ (function () {
    function CookieManager(templateDir) {
        if (templateDir === void 0) { templateDir = ""; }
        this.cookieName = "skyOpenTemplate";
        this.cookieValue = templateDir;
        var expires = new Date();
        expires.setFullYear(expires.getFullYear() + 2);
        this.expiryDate = expires.toUTCString();
    }
    CookieManager.prototype.set = function (value) {
        if (value) {
            this.cookieValue = value;
        }
        if (!this.cookieValue) {
            alert("Valid directory not chosen.");
            return;
        }
        document.cookie = this.cookieName + "=" + this.cookieValue + ";expires=" + this.expiryDate + ";";
    };
    CookieManager.prototype.get = function () {
        if (document.cookie) {
            var splitCookie = document.cookie.split(";");
            if (splitCookie.length) {
                for (var _i = 0, splitCookie_1 = splitCookie; _i < splitCookie_1.length; _i++) {
                    var cookie = splitCookie_1[_i];
                    var key = cookie.split("=")[0].trim();
                    var value = cookie.split("=")[1].trim();
                    if (key === this.cookieName) {
                        return value;
                    }
                }
            }
        }
        return null;
    };
    return CookieManager;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29va2llTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvb2tpZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFLRSx1QkFBWSxXQUF3QjtRQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtRQUo1QixlQUFVLEdBQVcsaUJBQWlCLENBQUM7UUFLN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBTSxPQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDUjtRQUNELFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsV0FBVyxpQkFBWSxJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7SUFDekYsQ0FBQztJQUVNLDJCQUFHLEdBQVY7UUFDRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBTSxXQUFXLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN0QixLQUFxQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtvQkFBN0IsSUFBTSxNQUFNLG9CQUFBO29CQUNmLElBQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hELElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2xELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQzNCLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQyJ9

/***/ }),

/***/ "./js/libs/Template.ts":
/*!*****************************!*\
  !*** ./js/libs/Template.ts ***!
  \*****************************/
/*! exports provided: TemplateFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFile", function() { return TemplateFile; });
var TemplateFile = /** @class */ (function () {
    function TemplateFile(fullPath) {
        this.fullPath = "";
        this.fileName = "";
        this.fullPath = fullPath;
        var osFixedPath = fullPath.replace(/\\/g, "/");
        var fn = osFixedPath.split("/").pop();
        this.fileName = fn === undefined ? "File name malformed" : fn;
    }
    TemplateFile.prototype.toString = function () {
        return "fileName: " + this.fileName + "\n      fullPath: " + this.fullPath;
    };
    return TemplateFile;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUtFLHNCQUFZLFFBQWdCO1FBSHJCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFNLFdBQVcsR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFNLEVBQUUsR0FBdUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDRSxPQUFPLGVBQWEsSUFBSSxDQUFDLFFBQVEsMEJBQ25CLElBQUksQ0FBQyxRQUFVLENBQUM7SUFDaEMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQyJ9

/***/ }),

/***/ "./js/libs/TypeAhead.ts":
/*!******************************!*\
  !*** ./js/libs/TypeAhead.ts ***!
  \******************************/
/*! exports provided: TypeAhead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAhead", function() { return TypeAhead; });
var TypeAhead = /** @class */ (function () {
    /**
     * The TypeAhead constructor.
     *
     * @param {JQuery<HTMLElement>} select - The Select element.
     * @param {JQuery<HTMLInputElement>} input - The Input element which contains
     * the search string.
     */
    function TypeAhead(select, input) {
        this.select = select;
        this.input = input;
        this.optionsOriginal = null;
    }
    /**
     * Store the original options for the select element.
     *
     */
    TypeAhead.prototype.setOptionsOriginal = function () {
        this.optionsOriginal = this.select.children("option");
    };
    /**
     * Given a Select element, filter all of its Option elements to only show those
     * who pass a given test, in `findMatches`.
     *
     * @param {JQuery<HTMLElement>} selectElement - The Select element to be filtered.
     */
    TypeAhead.prototype.filterOptionsIn = function (selectElement) {
        this.select = selectElement;
        // noinspection JSMismatchedCollectionQueryUpdate
        var optionsCurrent = this.select.children("option");
        var matches = this.findMatches(this.input.val());
        if (matches !== null) {
            optionsCurrent.remove();
            this.select.append(matches);
        }
        else {
            this.select.append(this.optionsOriginal);
        }
    };
    /**
     * Filters the list of Option elements by a given search string.
     *
     * @param {string} search - The string of text to use for filtering the Option list.
     * @returns {JQuery<HTMLOptionElement> | null} The filtered list of Option elements,
     * or null if there are none to begin with or if the search string is blank.
     */
    TypeAhead.prototype.findMatches = function (search) {
        var regex = new RegExp(search, "gi");
        if (this.optionsOriginal !== null && search) {
            return this.optionsOriginal.filter(function (index, option) {
                return option.text.match(regex) !== null;
            });
        }
        return null;
    };
    return TypeAhead;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZUFoZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZUFoZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBS0U7Ozs7OztPQU1HO0lBQ0gsbUJBQVksTUFBMkIsRUFBRSxLQUErQjtRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0NBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBRW5ELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxtQ0FBZSxHQUF0QixVQUF1QixhQUFrQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUM1QixpREFBaUQ7UUFDakQsSUFBTSxjQUFjLEdBQThCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNwRSxRQUFRLENBQ29CLENBQUM7UUFDL0IsSUFBTSxPQUFPLEdBQXFDLElBQUksQ0FBQyxXQUFXLENBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFZLENBQzNCLENBQUM7UUFDRixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBNEMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLCtCQUFXLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBTSxLQUFLLEdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ2hDLFVBQUMsS0FBYSxFQUFFLE1BQXlCO2dCQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQztZQUMzQyxDQUFDLENBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDIn0=

/***/ }),

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csinterface_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csinterface-ts */ "./node_modules/csinterface-ts/dist/csinterface-ts.js");
/* harmony import */ var csinterface_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csinterface_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_dir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-dir */ "./node_modules/node-dir/index.js");
/* harmony import */ var node_dir__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_dir__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");
/* harmony import */ var _libs_CookieManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/CookieManager */ "./js/libs/CookieManager.ts");
/* harmony import */ var _libs_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/Template */ "./js/libs/Template.ts");
/* harmony import */ var _libs_TypeAhead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/TypeAhead */ "./js/libs/TypeAhead.ts");
/**
 * This file contains the main panel functions and calls to all of its modules.
 */






/**
 * The main function that will run in the Adobe CEP panel.
 */
(function () {
    "use strict";
    // Set up constants.
    var csInterface = new csinterface_ts__WEBPACK_IMPORTED_MODULE_0__["CSInterface"]();
    var cookieManager = new _libs_CookieManager__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]();
    var spinner = new spin_js__WEBPACK_IMPORTED_MODULE_2__["Spinner"]({ color: "#fff", lines: 12 });
    var elBody = $("body");
    var elSelectWrapper = $("#template-list-wrapper");
    var elSelect = $("#template-list");
    var elInput = $("#search-box");
    var typeAhead = new _libs_TypeAhead__WEBPACK_IMPORTED_MODULE_5__["TypeAhead"](elSelect, elInput);
    var nonSelectHeight = 180;
    var selectLineHeight = 20;
    // Set the defaults for BlockUI.
    // @ts-ignore
    $.blockUI.defaults = {
        message: null,
        onBlock: function () { return spinner.spin(elBody.get(0)); },
        onUnblock: function () { return spinner.stop(); },
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
    var openTemplates = function (selected) {
        for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
            var item = selected_1[_i];
            var template = new _libs_Template__WEBPACK_IMPORTED_MODULE_4__["TemplateFile"](item);
            var jsonTemplate = JSON.stringify(template);
            csInterface.evalScript("openDocument(" + jsonTemplate + ")", function () {
                // console.log(result);
            });
        }
        $.unblockUI();
    };
    /**
     * Initialize the extension panel.
     */
    function init() {
        // console.log("init.");
        /**
         * Event handler for the Select element.
         * Mostly just for double-clicking an Option in the Select Element.
         *
         */
        if (elSelect) {
            elSelect.dblclick(function () {
                var selected = templateList.val();
                if (selected.length) {
                    $.blockUI();
                    setTimeout(function () { return openTemplates(selected); }, 1000);
                }
            });
        }
        /**
         * Event handler for the Open button.
         *
         */
        var openButton = $("#open-button");
        if (openButton) {
            openButton.on("click", function () {
                var selected = templateList.val();
                if (selected.length) {
                    $.blockUI();
                    setTimeout(function () { return openTemplates(selected); }, 1000);
                }
            });
        }
        /**
         * Set the list of templates in the Panel as Option elements.
         *
         * @param {TemplateFile[]} fileList - The list of templates.
         */
        var setTemplateList = function (fileList) {
            if (fileList.length) {
                templateList.empty();
                for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                    var file = fileList_1[_i];
                    templateList.append($("<option />")
                        .val(file.fullPath)
                        .text(file.fileName));
                }
            }
        };
        /**
         * Get the list of template files recursively from a given path,
         * then populate the HTML panel with that list.
         *
         * @param {string} path - The path from which to obtain the list of files.
         */
        var getFiles = function (path) {
            // @ts-ignore
            elSelectWrapper.block({
                onBlock: function () { return spinner.spin(elSelectWrapper.get(0)); },
            });
            setTimeout(function () {
                node_dir__WEBPACK_IMPORTED_MODULE_1__["files"](path, function (err, files) {
                    if (err) {
                        throw err;
                    }
                    var ext = "ai";
                    var templatePaths = files.filter(function (file) {
                        return file.split(".").pop() === ext;
                    });
                    templatePaths.sort();
                    var templates = [];
                    for (var _i = 0, templatePaths_1 = templatePaths; _i < templatePaths_1.length; _i++) {
                        var template = templatePaths_1[_i];
                        templates.push(new _libs_Template__WEBPACK_IMPORTED_MODULE_4__["TemplateFile"](template));
                    }
                    setTemplateList(templates);
                    // @ts-ignore
                    elSelectWrapper.unblock();
                    elInput.off();
                    typeAhead.setOptionsOriginal();
                    elInput.on("keyup change reset search", function () {
                        typeAhead.filterOptionsIn(elSelect);
                    });
                });
            }, 1000);
        };
        /**
         * Event handler for the template folder selection button.
         *
         */
        var templateButton = $("#file-control");
        var templateList = $("#template-list");
        if (templateButton) {
            templateButton.on("change", function () {
                console.log("button pressed");
                // @ts-ignore
                var files = templateButton[0].files;
                console.log("files: " + files);
                if (files.length) {
                    // @ts-ignore
                    var filePath = files[0].path;
                    console.log("filePath: " + filePath);
                    var osFixedPath = filePath.replace(/\\/g, "/");
                    console.log("osFixedPath: " + osFixedPath);
                    var path = osFixedPath.substr(0, osFixedPath.lastIndexOf("/"));
                    console.log("Fixed path: " + path);
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
        var templatePath = cookieManager.get();
        if (templatePath) {
            getFiles(templatePath);
        }
        /**
         * Event handler for when the extension panel is re-sized.
         * Re-sizes the Select[multiple] element to fill the space.
         *
         */
        var resizeSelect = function () {
            var numLines = Math.floor((window.innerHeight - nonSelectHeight) / selectLineHeight);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxLQUFLLEdBQUcsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3Qzs7R0FFRztBQUNILENBQUM7SUFDQyxZQUFZLENBQUM7SUFFYixvQkFBb0I7SUFDcEIsSUFBTSxXQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUFDbkQsSUFBTSxhQUFhLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7SUFDekQsSUFBTSxPQUFPLEdBQVksSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLElBQU0sTUFBTSxHQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsSUFBTSxlQUFlLEdBQXdCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sUUFBUSxHQUF3QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxJQUFNLE9BQU8sR0FBNkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxJQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFFNUIsZ0NB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

/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/csinterface-ts/dist/csinterface-ts.js":
/*!************************************************************!*\
  !*** ./node_modules/csinterface-ts/dist/csinterface-ts.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  Typescript implementation of CSInterface - v7.0.0
 *
 *  Custom CSInterface.js implementation in Typescript.
 *  The implementation covers version 7.x from original repository, with all functionalities.
 *  All documentation comments were also based on original.
 *
 *
 *  For more information about Creative Cloud extensions development
 *  please refer to original Github page: https://github.com/Adobe-CEP/CEP-Resources
 */

/**
 * @class CSInterface
 * This is the entry point to the CEP extensibility infrastructure.
 * Instantiate this object and use it to:
 * <ul>
 * <li>Access information about the host application in which an extension is running</li>
 * <li>Launch an extension</li>
 * <li>Register interest in event notifications, and dispatch events</li>
 * </ul>
 *
 */
var CSInterface = (function () {
    function CSInterface() {
        /**
         * User can add this event listener to handle native application theme color changes.
         * Callback function gives extensions ability to fine-tune their theme color after the
         * global theme color has been changed.
         * The callback function should be like below:
         *
         * @example
         * // event is a CSEvent object, but user can ignore it.
         * function OnAppThemeColorChanged(event)
         * {
         *    // Should get a latest HostEnvironment object from application.
         *    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
         *    // Gets the style information such as color info from the skinInfo,
         *    // and redraw all UI controls of your extension according to the style info.
         * }
         */
        this.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged";
        /** The host environment data object. */
        this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment());
    }
    /** Retrieves information about the host environment in which the
     *  extension is currently running.
     *
     *   @return A \c #HostEnvironment object.
     */
    CSInterface.prototype.getHostEnvironment = function () {
        this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment());
        return this.hostEnvironment;
    };
    ;
    /** Closes this extension. */
    CSInterface.prototype.closeExtension = function () {
        window.__adobe_cep__.closeExtension();
    };
    ;
    /**
     * Retrieves a path for which a constant is defined in the system.
     *
     * @param pathType The path-type constant defined in \c #SystemPath ,
     *
     * @return The platform-specific system path string.
     */
    CSInterface.prototype.getSystemPath = function (pathType) {
        var path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));
        var OSVersion = this.getOSInformation();
        if (OSVersion.indexOf("Windows") >= 0) {
            path = path.replace("file:///", "");
        }
        else if (OSVersion.indexOf("Mac") >= 0) {
            path = path.replace("file://", "");
        }
        return path;
    };
    ;
    /**
     * Evaluates a JavaScript script, which can use the JavaScript DOM
     * of the host application.
     *
     * @param script    The JavaScript script.
     * @param callback  Optional. A callback function that receives the result of execution.
     *          If execution fails, the callback function receives the error message \c EvalScript_ErrMessage.
     */
    CSInterface.prototype.evalScript = function (script, callback) {
        if (callback === null || callback === undefined) {
            callback = function (result) { };
        }
        window.__adobe_cep__.evalScript(script, callback);
    };
    ;
    /**
     * Retrieves the unique identifier of the application.
     * in which the extension is currently running.
     *
     * @return The unique ID string.
     */
    CSInterface.prototype.getApplicationID = function () {
        var appId = this.hostEnvironment.appId;
        return appId;
    };
    ;
    /**
     * Retrieves host capability information for the application
     * in which the extension is currently running.
     *
     * @return A \c #HostCapabilities object.
     */
    CSInterface.prototype.getHostCapabilities = function () {
        var hostCapabilities = JSON.parse(window.__adobe_cep__.getHostCapabilities());
        return hostCapabilities;
    };
    ;
    /**
     * Triggers a CEP event programmatically. Yoy can use it to dispatch
     * an event of a predefined type, or of a type you have defined.
     *
     * @param event A \c CSEvent object.
     */
    CSInterface.prototype.dispatchEvent = function (event) {
        if (typeof event.data == "object") {
            event.data = JSON.stringify(event.data);
        }
        window.__adobe_cep__.dispatchEvent(event);
    };
    ;
    /**
     * Registers an interest in a CEP event of a particular type, and
     * assigns an event handler.
     * The event infrastructure notifies your extension when events of this type occur,
     * passing the event object to the registered handler function.
     *
     * @param type     The name of the event type of interest.
     * @param listener The JavaScript handler function or method.
     * @param obj      Optional, the object containing the handler method, if any.
     *         Default is null.
     */
    CSInterface.prototype.addEventListener = function (type, listener, obj) {
        window.__adobe_cep__.addEventListener(type, listener, obj);
    };
    ;
    /**
     * Removes a registered event listener.
     *
     * @param type      The name of the event type of interest.
     * @param listener  The JavaScript handler function or method that was registered.
     * @param obj       Optional, the object containing the handler method, if any.
     *          Default is null.
     */
    CSInterface.prototype.removeEventListener = function (type, listener, obj) {
        window.__adobe_cep__.removeEventListener(type, listener, obj);
    };
    ;
    /**
     * Loads and launches another extension, or activates the extension if it is already loaded.
     *
     * @param extensionId       The extension's unique identifier.
     * @param startupParams     Not currently used, pass "".
     *
     * @example
     * To launch the extension "help" with ID "HLP" from this extension, call:
     * <code>requestOpenExtension("HLP", ""); </code>
     *
     */
    CSInterface.prototype.requestOpenExtension = function (extensionId, params) {
        window.__adobe_cep__.requestOpenExtension(extensionId, params);
    };
    ;
    /**
     * Retrieves the list of extensions currently loaded in the current host application.
     * The extension list is initialized once, and remains the same during the lifetime
     * of the CEP session.
     *
     * @param extensionIds  Optional, an array of unique identifiers for extensions of interest.
     *          If omitted, retrieves data for all extensions.
     *
     * @return Zero or more \c #Extension objects.
     */
    CSInterface.prototype.getExtensions = function (extensionIds) {
        var extensionIdsStr = JSON.stringify(extensionIds);
        var extensionsStr = window.__adobe_cep__.getExtensions(extensionIdsStr);
        var extensions = JSON.parse(extensionsStr);
        return extensions;
    };
    ;
    /**
     * Retrieves network-related preferences.
     *
     * @return A JavaScript object containing network preferences.
     */
    CSInterface.prototype.getNetworkPreferences = function () {
        var result = window.__adobe_cep__.getNetworkPreferences();
        var networkPre = JSON.parse(result);
        return networkPre;
    };
    ;
    /**
     * Initializes the resource bundle for this extension with property values
     * for the current application and locale.
     * To support multiple locales, you must define a property file for each locale,
     * containing keyed display-string values for that locale.
     * See localization documentation for Extension Builder and related products.
     *
     * Keys can be in the
     * form <code>key.value="localized string"</code>, for use in HTML text elements.
     * For example, in this input element, the localized \c key.value string is displayed
     * instead of the empty \c value string:
     *
     * <code><input type="submit" value="" data-locale="key"/></code>
     *
     * @return An object containing the resource bundle information.
     */
    CSInterface.prototype.initResourceBundle = function () {
        var resourceBundle = JSON.parse(window.__adobe_cep__.initResourceBundle());
        var resElms = document.querySelectorAll('[data-locale]');
        for (var n = 0; n < resElms.length; n++) {
            var resEl = resElms[n];
            // Get the resource key from the element.
            var resKey = resEl.getAttribute('data-locale');
            if (resKey) {
                // Get all the resources that start with the key.
                for (var key in resourceBundle) {
                    if (key.indexOf(resKey) === 0) {
                        var resValue = resourceBundle[key];
                        if (key.length == resKey.length) {
                            resEl.innerHTML = resValue;
                        }
                        else if ('.' == key.charAt(resKey.length)) {
                            var attrKey = key.substring(resKey.length + 1);
                            resEl[attrKey] = resValue;
                        }
                    }
                }
            }
        }
        return resourceBundle;
    };
    ;
    /**
     * Writes installation information to a file.
     *
     * @return The file path.
     */
    CSInterface.prototype.dumpInstallationInfo = function () {
        return window.__adobe_cep__.dumpInstallationInfo();
    };
    ;
    /**
     * Retrieves version information for the current Operating System,
     * See http://www.useragentstring.com/pages/Chrome/ for Chrome \c navigator.userAgent values.
     *
     * @return A string containing the OS version, or "unknown Operation System".
     * If user customizes the User Agent by setting CEF command parameter "--user-agent", only
     * "Mac OS X" or "Windows" will be returned.
     */
    CSInterface.prototype.getOSInformation = function () {
        var userAgent = navigator.userAgent;
        if ((navigator.platform == "Win32") || (navigator.platform == "Windows")) {
            var winVersion = "Windows";
            var winBit = "";
            if (userAgent.indexOf("Windows") > -1) {
                if (userAgent.indexOf("Windows NT 5.0") > -1) {
                    winVersion = "Windows 2000";
                }
                else if (userAgent.indexOf("Windows NT 5.1") > -1) {
                    winVersion = "Windows XP";
                }
                else if (userAgent.indexOf("Windows NT 5.2") > -1) {
                    winVersion = "Windows Server 2003";
                }
                else if (userAgent.indexOf("Windows NT 6.0") > -1) {
                    winVersion = "Windows Vista";
                }
                else if (userAgent.indexOf("Windows NT 6.1") > -1) {
                    winVersion = "Windows 7";
                }
                else if (userAgent.indexOf("Windows NT 6.2") > -1) {
                    winVersion = "Windows 8";
                }
                else if (userAgent.indexOf("Windows NT 6.3") > -1) {
                    winVersion = "Windows 8.1";
                }
                else if (userAgent.indexOf("Windows NT 10") > -1) {
                    winVersion = "Windows 10";
                }
                if (userAgent.indexOf("WOW64") > -1 || userAgent.indexOf("Win64") > -1) {
                    winBit = " 64-bit";
                }
                else {
                    winBit = " 32-bit";
                }
            }
            return winVersion + winBit;
        }
        else if ((navigator.platform == "MacIntel") || (navigator.platform == "Macintosh")) {
            var result = "Mac OS X";
            if (userAgent.indexOf("Mac OS X") > -1) {
                result = userAgent.substring(userAgent.indexOf("Mac OS X"), userAgent.indexOf(")"));
                result = result.replace(/_/g, ".");
            }
            return result;
        }
        return "Unknown Operation System";
    };
    ;
    /**
     * Opens a page in the default system browser.
     *
     * Since 4.2.0
     *
     * @param url  The URL of the page/file to open, or the email address.
     * Must use HTTP/HTTPS/file/mailto protocol. For example:
     *   "http://www.adobe.com"
     *   "https://github.com"
     *   "file:///C:/log.txt"
     *   "mailto:test@adobe.com"
     *
     * @return One of these error codes:\n
     *      <ul>\n
     *          <li>NO_ERROR - 0</li>\n
     *          <li>ERR_UNKNOWN - 1</li>\n
     *          <li>ERR_INVALID_PARAMS - 2</li>\n
     *          <li>ERR_INVALID_URL - 201</li>\n
     *      </ul>\n
     */
    CSInterface.prototype.openURLInDefaultBrowser = function (url) {
        return cep.util.openURLInDefaultBrowser(url);
    };
    ;
    /**
     * Retrieves extension ID.
     *
     * Since 4.2.0
     *
     * @return extension ID.
     */
    CSInterface.prototype.getExtensionID = function () {
        return window.__adobe_cep__.getExtensionId();
    };
    ;
    /**
     * Retrieves the scale factor of screen.
     * On Windows platform, the value of scale factor might be different from operating system's scale factor,
     * since host application may use its self-defined scale factor.
     *
     * Since 4.2.0
     *
     * @return One of the following float number.
     *      <ul>\n
     *          <li> -1.0 when error occurs </li>\n
     *          <li> 1.0 means normal screen </li>\n
     *          <li> >1.0 means HiDPI screen </li>\n
     *      </ul>\n
     */
    CSInterface.prototype.getScaleFactor = function () {
        return window.__adobe_cep__.getScaleFactor();
    };
    ;
    /**
     * Set a handler to detect any changes of scale factor. This only works on Mac.
     *
     * Since 4.2.0
     *
     * @param handler   The function to be called when scale factor is changed.
     *
     */
    CSInterface.prototype.setScaleFactorChangedHandler = function (handler) {
        window.__adobe_cep__.setScaleFactorChangedHandler(handler);
    };
    ;
    /**
     * Retrieves current API version.
     *
     * Since 4.2.0
     *
     * @return ApiVersion object.
     *
     */
    CSInterface.prototype.getCurrentApiVersion = function () {
        var apiVersion = JSON.parse(window.__adobe_cep__.getCurrentApiVersion());
        return apiVersion;
    };
    ;
    /**
     * Set panel flyout menu by an XML.
     *
     * Since 5.2.0
     *
     * Register a callback function for "com.adobe.csxs.events.flyoutMenuClicked" to get notified when a
     * menu item is clicked.
     * The "data" attribute of event is an object which contains "menuId" and "menuName" attributes.
     *
     * Register callback functions for "com.adobe.csxs.events.flyoutMenuOpened" and "com.adobe.csxs.events.flyoutMenuClosed"
     * respectively to get notified when flyout menu is opened or closed.
     *
     * @param menu     A XML string which describes menu structure.
     * An example menu XML:
     * <Menu>
     *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false"/>
     *   <MenuItem Label="TestExample2">
     *     <MenuItem Label="TestExample2-1" >
     *       <MenuItem Label="TestExample2-1-1" Enabled="false" Checked="true"/>
     *     </MenuItem>
     *     <MenuItem Label="TestExample2-2" Enabled="true" Checked="true"/>
     *   </MenuItem>
     *   <MenuItem Label="---" />
     *   <MenuItem Label="TestExample3" Enabled="false" Checked="false"/>
     * </Menu>
     *
     */
    CSInterface.prototype.setPanelFlyoutMenu = function (menu) {
        if ("string" != typeof menu) {
            return;
        }
        window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", menu);
    };
    ;
    /**
     * Updates a menu item in the extension window's flyout menu, by setting the enabled
     * and selection status.
     *
     * Since 5.2.0
     *
     * @param menuItemLabel    The menu item label.
     * @param enabled        True to enable the item, false to disable it (gray it out).
     * @param checked        True to select the item, false to deselect it.
     *
     * @return false when the host application does not support this functionality (HostCapabilities.EXTENDED_PANEL_MENU is false).
     *         Fails silently if menu label is invalid.
     *
     * @see HostCapabilities.EXTENDED_PANEL_MENU
     */
    CSInterface.prototype.updatePanelMenuItem = function (menuItemLabel, enabled, checked) {
        var ret = false;
        if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
            var itemStatus = new MenuItemStatus(menuItemLabel, enabled, checked);
            ret = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(itemStatus));
        }
        return ret;
    };
    ;
    /**
     * Set context menu by XML string.
     *
     * Since 5.2.0
     *
     * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
     * - an item without menu ID or menu name is disabled and is not shown.
     * - if the item name is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
     * - Checkable attribute takes precedence over Checked attribute.
     * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.
     The Chrome extension contextMenus API was taken as a reference.
     https://developer.chrome.com/extensions/contextMenus
     * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.
     *
     * @param menu      A XML string which describes menu structure.
     * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
     *
     * @description An example menu XML:
     * <Menu>
     *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checkable="true" Checked="false" Icon="./image/small_16X16.png"/>
     *   <MenuItem Id="menuItemId2" Label="TestExample2">
     *     <MenuItem Id="menuItemId2-1" Label="TestExample2-1" >
     *       <MenuItem Id="menuItemId2-1-1" Label="TestExample2-1-1" Enabled="false" Checkable="true" Checked="true"/>
     *     </MenuItem>
     *     <MenuItem Id="menuItemId2-2" Label="TestExample2-2" Enabled="true" Checkable="true" Checked="true"/>
     *   </MenuItem>
     *   <MenuItem Label="---" />
     *   <MenuItem Id="menuItemId3" Label="TestExample3" Enabled="false" Checkable="true" Checked="false"/>
     * </Menu>
     */
    CSInterface.prototype.setContextMenu = function (menu, callback) {
        if ("string" != typeof menu) {
            return;
        }
        window.__adobe_cep__.invokeAsync("setContextMenu", menu, callback);
    };
    ;
    /**
     * Set context menu by JSON string.
     *
     * Since 6.0.0
     *
     * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
     * - an item without menu ID or menu name is disabled and is not shown.
     * - if the item label is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
     * - Checkable attribute takes precedence over Checked attribute.
     * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.
     The Chrome extension contextMenus API was taken as a reference.
     * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.
     https://developer.chrome.com/extensions/contextMenus
     *
     * @param menu      A JSON string which describes menu structure.
     * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
     *
     * @description An example menu JSON:
     *
     * {
     *      "menu": [
     *          {
     *              "id": "menuItemId1",
     *              "label": "testExample1",
     *              "enabled": true,
     *              "checkable": true,
     *              "checked": false,
     *              "icon": "./image/small_16X16.png"
     *          },
     *          {
     *              "id": "menuItemId2",
     *              "label": "testExample2",
     *              "menu": [
     *                  {
     *                      "id": "menuItemId2-1",
     *                      "label": "testExample2-1",
     *                      "menu": [
     *                          {
     *                              "id": "menuItemId2-1-1",
     *                              "label": "testExample2-1-1",
     *                              "enabled": false,
     *                              "checkable": true,
     *                              "checked": true
     *                          }
     *                      ]
     *                  },
     *                  {
     *                      "id": "menuItemId2-2",
     *                      "label": "testExample2-2",
     *                      "enabled": true,
     *                      "checkable": true,
     *                      "checked": true
     *                  }
     *              ]
     *          },
     *          {
     *              "label": "---"
     *          },
     *          {
     *              "id": "menuItemId3",
     *              "label": "testExample3",
     *              "enabled": false,
     *              "checkable": true,
     *              "checked": false
     *          }
     *      ]
     *  }
     *
     */
    CSInterface.prototype.setContextMenuByJSON = function (menu, callback) {
        if ("string" != typeof menu) {
            return;
        }
        window.__adobe_cep__.invokeAsync("setContextMenuByJSON", menu, callback);
    };
    ;
    /**
     * Updates a context menu item by setting the enabled and selection status.
     *
     * Since 5.2.0
     *
     * @param menuItemID    The menu item ID.
     * @param enabled        True to enable the item, false to disable it (gray it out).
     * @param checked        True to select the item, false to deselect it.
     */
    CSInterface.prototype.updateContextMenuItem = function (menuItemID, enabled, checked) {
        var itemStatus = new ContextMenuItemStatus(menuItemID, enabled, checked);
        ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(itemStatus));
    };
    ;
    /**
     * Get the visibility status of an extension window.
     *
     * Since 6.0.0
     *
     * @return true if the extension window is visible; false if the extension window is hidden.
     */
    CSInterface.prototype.isWindowVisible = function () {
        return window.__adobe_cep__.invokeSync("isWindowVisible", "");
    };
    ;
    /**
     * Resize extension's content to the specified dimensions.
     * 1. Works with modal and modeless extensions in all Adobe products.
     * 2. Extension's manifest min/max size constraints apply and take precedence.
     * 3. For panel extensions
     *    3.1 This works in all Adobe products except:
     *        * Premiere Pro
     *        * Prelude
     *        * After Effects
     *    3.2 When the panel is in certain states (especially when being docked),
     *        it will not change to the desired dimensions even when the
     *        specified size satisfies min/max constraints.
     *
     * Since 6.0.0
     *
     * @param width  The new width
     * @param height The new height
     */
    CSInterface.prototype.resizeContent = function (width, height) {
        window.__adobe_cep__.resizeContent(width, height);
    };
    ;
    /**
     * Register the invalid certificate callback for an extension.
     * This callback will be triggered when the extension tries to access the web site that contains the invalid certificate on the main frame.
     * But if the extension does not call this function and tries to access the web site containing the invalid certificate, a default error page will be shown.
     *
     * Since 6.1.0
     *
     * @param callback the callback function
     */
    CSInterface.prototype.registerInvalidCertificateCallback = function (callback) {
        return window.__adobe_cep__.registerInvalidCertificateCallback(callback);
    };
    ;
    /**
     * Register an interest in some key events to prevent them from being sent to the host application.
     *
     * This function works with modeless extensions and panel extensions.
     * Generally all the key events will be sent to the host application for these two extensions if the current focused element
     * is not text input or dropdown,
     * If you want to intercept some key events and want them to be handled in the extension, please call this function
     * in advance to prevent them being sent to the host application.
     *
     * Since 6.1.0
     *
     * @param keyEventsInterest      A JSON string describing those key events you are interested in. A null object or
     an empty string will lead to removing the interest
     *
     * This JSON string should be an array, each object has following keys:
     *
     * keyCode:  [Required] represents an OS system dependent virtual key code identifying
     *           the unmodified value of the pressed key.
     * ctrlKey:  [optional] a Boolean that indicates if the control key was pressed (true) or not (false) when the event occurred.
     * altKey:   [optional] a Boolean that indicates if the alt key was pressed (true) or not (false) when the event occurred.
     * shiftKey: [optional] a Boolean that indicates if the shift key was pressed (true) or not (false) when the event occurred.
     * metaKey:  [optional] (Mac Only) a Boolean that indicates if the Meta key was pressed (true) or not (false) when the event occurred.
     *                      On Macintosh keyboards, this is the command key. To detect Windows key on Windows, please use keyCode instead.
     * An example JSON string:
     *
     * [
     *     {
     *         "keyCode": 48
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true,
     *         "metaKey": true
     *     }
     * ]
     *
     */
    CSInterface.prototype.registerKeyEventsInterest = function (keyEventsInterest) {
        return window.__adobe_cep__.registerKeyEventsInterest(keyEventsInterest);
    };
    ;
    /**
     * Set the title of the extension window.
     * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
     *
     * Since 6.1.0
     *
     * @param title The window title.
     */
    CSInterface.prototype.setWindowTitle = function (title) {
        window.__adobe_cep__.invokeSync("setWindowTitle", title);
    };
    ;
    /**
     * Get the title of the extension window.
     * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
     *
     * Since 6.1.0
     *
     * @return The window title.
     */
    CSInterface.prototype.getWindowTitle = function () {
        return window.__adobe_cep__.invokeSync("getWindowTitle", "");
    };
    ;
    return CSInterface;
}());
exports.CSInterface = CSInterface;
/**
 * Class CSEvent.
 * You can use it to dispatch a standard CEP event.
 *
 * @return CSEvent object
 */
var CSEvent = (function () {
    /**
     * Initializes new instance of CSEvent object.
     * You can use it to dispatch a standard CEP event.
     *
     * @param type        Event type.
     * @param scope       The scope of event, can be "GLOBAL" or "APPLICATION".
     * @param appId       The unique identifier of the application that generated the event. Optional.
     * @param extensionId The unique identifier of the extension that generated the event. Optional.
     */
    function CSEvent(type, scope, appId, extensionId) {
        this.type = type;
        this.scope = scope;
        this.appId = appId;
        this.extensionId = extensionId;
        /**
         * Event-specific data.
         */
        this.data = "";
    }
    return CSEvent;
}());
exports.CSEvent = CSEvent;
/**
 * @class SystemPath
 * Stores operating-system-specific location constants for use in the
 * \c #CSInterface.getSystemPath() method.
 */
var SystemPath = (function () {
    function SystemPath() {
    }
    return SystemPath;
}());
/** The path to user data.  */
SystemPath.USER_DATA = "userData";
/** The path to common files for Adobe applications.  */
SystemPath.COMMON_FILES = "commonFiles";
/** The path to the user's default document folder.  */
SystemPath.MY_DOCUMENTS = "myDocuments";
/** @deprecated. Use \c #SystemPath.Extension.  */
SystemPath.APPLICATION = "application";
/** The path to current extension.  */
SystemPath.EXTENSION = "extension";
/** The path to hosting application's executable.  */
SystemPath.HOST_APPLICATION = "hostApplication";
exports.SystemPath = SystemPath;
/**
 * @class ColorType
 * Stores color-type constants.
 */
var ColorType = (function () {
    function ColorType() {
    }
    return ColorType;
}());
/** RGB color type. */
ColorType.RGB = "rgb";
/** Gradient color type. */
ColorType.GRADIENT = "gradient";
/** Null color type. */
ColorType.NONE = "none";
exports.ColorType = ColorType;
/**
 * @class RGBColor
 * Stores an RGB color with red, green, blue, and alpha values.
 * All values are in the range [0.0 to 255.0]. Invalid numeric values are
 * converted to numbers within this range.
 *
 */
var RGBColor = (function () {
    /**
     * Stores an RGB color with red, green, blue, and alpha values.
     * All values are in the range [0.0 to 255.0]. Invalid numeric values are
     * converted to numbers within this range.
     *
     * @param red   The red value, in the range [0.0 to 255.0].
     * @param green The green value, in the range [0.0 to 255.0].
     * @param blue  The blue value, in the range [0.0 to 255.0].
     * @param alpha The alpha (transparency) value, in the range [0.0 to 255.0].
     *      The default, 255.0, means that the color is fully opaque.
     */
    function RGBColor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    return RGBColor;
}());
exports.RGBColor = RGBColor;
/**
 * @class Direction
 * A point value  in which the y component is 0 and the x component
 * is positive or negative for a right or left direction,
 * or the x component is 0 and the y component is positive or negative for
 * an up or down direction.
 */
var Direction = (function () {
    /**
     * A point value  in which the y component is 0 and the x component
     * is positive or negative for a right or left direction,
     * or the x component is 0 and the y component is positive or negative for
     * an up or down direction.
     *
     * @param x     The horizontal component of the point.
     * @param y     The vertical component of the point.
     */
    function Direction(x, y) {
        this.x = x;
        this.y = y;
    }
    return Direction;
}());
exports.Direction = Direction;
/**
 * @class GradientStop
 * Stores gradient stop information.
 */
var GradientStop = (function () {
    /**
     * Stores gradient stop information.
     *
     * @param offset   The offset of the gradient stop, in the range [0.0 to 1.0].
     * @param rgbColor The color of the gradient at this point, an \c #RGBColor object.
     */
    function GradientStop(offset, rgbColor) {
        this.offset = offset;
        this.rgbColor = rgbColor;
    }
    return GradientStop;
}());
exports.GradientStop = GradientStop;
/**
 * @class GradientColor
 * Stores gradient color information.
 */
var GradientColor = (function () {
    /**
     * Initializes new \c #GradientColor instance.
     *
     * @param type          The gradient type, must be "linear".
     * @param direction     A \c #Direction object for the direction of the gradient
     (up, down, right, or left).
     * @param numStops          The number of stops in the gradient.
     * @param gradientStopList  An array of \c #GradientStop objects.
     */
    function GradientColor(type, direction, numStops, arrGradientStop) {
        this.type = type;
        this.direction = direction;
        this.numStops = numStops;
        this.arrGradientStop = arrGradientStop;
    }
    return GradientColor;
}());
exports.GradientColor = GradientColor;
/**
 * @class UIColor
 * Stores color information, including the type, anti-alias level, and specific color
 * values in a color object of an appropriate type.
 */
var UIColor = (function () {
    /**
     * Stores color information, including the type, anti-alias level, and specific color
     * values in a color object of an appropriate type.
     *
     * @param type          The color type, 1 for "rgb" and 2 for "gradient".
     The supplied color object must correspond to this type.
     * @param antialiasLevel    The anti-alias level constant.
     * @param color         A \c #RGBColor or \c #GradientColor object containing specific color information.
     */
    function UIColor(type, antialiasLevel, color) {
        this.type = type;
        this.antialiasLevel = antialiasLevel;
        this.color = color;
    }
    return UIColor;
}());
exports.UIColor = UIColor;
/**
 * @class AppSkinInfo
 * Stores window-skin properties, such as color and font. All color parameter values are \c #UIColor objects except that systemHighlightColor is \c #RGBColor object.
 */
var AppSkinInfo = (function () {
    /**
     * Stores window-skin properties, such as color and font. All color parameter values are \c #UIColor objects except that systemHighlightColor is \c #RGBColor object.
     *
     * @param baseFontFamily        The base font family of the application.
     * @param baseFontSize          The base font size of the application.
     * @param appBarBackgroundColor     The application bar background color.
     * @param panelBackgroundColor      The background color of the extension panel.
     * @param appBarBackgroundColorSRGB     The application bar background color, as sRGB.
     * @param panelBackgroundColorSRGB      The background color of the extension panel, as sRGB.
     * @param systemHighlightColor          The operating-system highlight color, as sRGB.
     */
    function AppSkinInfo(baseFontFamily, baseFontSize, appBarBackgroundColor, panelBackgroundColor, appBarBackgroundColorSRGB, panelBackgroundColorSRGB, systemHighlightColor) {
        this.baseFontFamily = baseFontFamily;
        this.baseFontSize = baseFontSize;
        this.appBarBackgroundColor = appBarBackgroundColor;
        this.panelBackgroundColor = panelBackgroundColor;
        this.appBarBackgroundColorSRGB = appBarBackgroundColorSRGB;
        this.panelBackgroundColorSRGB = panelBackgroundColorSRGB;
        this.systemHighlightColor = systemHighlightColor;
    }
    return AppSkinInfo;
}());
exports.AppSkinInfo = AppSkinInfo;
/**
 * @class HostEnvironment
 * Stores information about the environment in which the extension is loaded.
 */
var HostEnvironment = (function () {
    /**
     * Stores information about the environment in which the extension is loaded.
     *
     * @param appName   The application's name.
     * @param appVersion    The application's version.
     * @param appLocale The application's current license locale.
     * @param appUILocale   The application's current UI locale.
     * @param appId     The application's unique identifier.
     * @param isAppOnline  True if the application is currently online.
     * @param appSkinInfo   An \c #AppSkinInfo object containing the application's default color and font styles.
     */
    function HostEnvironment(appName, appVersion, appLocale, appUILocale, appId, isAppOnline, appSkinInfo) {
        this.appName = appName;
        this.appVersion = appVersion;
        this.appLocale = appLocale;
        this.appUILocale = appUILocale;
        this.appId = appId;
        this.isAppOnline = isAppOnline;
        this.appSkinInfo = appSkinInfo;
    }
    return HostEnvironment;
}());
exports.HostEnvironment = HostEnvironment;
/**
 * @class HostCapabilities
 * Stores information about the host capabilities.
 */
var HostCapabilities = (function () {
    /**
     * Stores information about the host capabilities.
     *
     * @param EXTENDED_PANEL_MENU True if the application supports panel menu.
     * @param EXTENDED_PANEL_ICONS True if the application supports panel icon.
     * @param DELEGATE_APE_ENGINE True if the application supports delegated APE engine.
     * @param SUPPORT_HTML_EXTENSIONS True if the application supports HTML extensions.
     * @param DISABLE_FLASH_EXTENSIONS True if the application disables FLASH extensions.
     */
    function HostCapabilities(EXTENDED_PANEL_MENU, EXTENDED_PANEL_ICONS, DELEGATE_APE_ENGINE, SUPPORT_HTML_EXTENSIONS, DISABLE_FLASH_EXTENSIONS) {
        this.EXTENDED_PANEL_MENU = EXTENDED_PANEL_MENU;
        this.EXTENDED_PANEL_ICONS = EXTENDED_PANEL_ICONS;
        this.DELEGATE_APE_ENGINE = DELEGATE_APE_ENGINE;
        this.SUPPORT_HTML_EXTENSIONS = SUPPORT_HTML_EXTENSIONS;
        this.DISABLE_FLASH_EXTENSIONS = DISABLE_FLASH_EXTENSIONS;
    }
    return HostCapabilities;
}());
exports.HostCapabilities = HostCapabilities;
/**
 * @class ApiVersion
 * Stores current api version.
 *
 * Since 4.2.0
 */
var ApiVersion = (function () {
    /**
     * Stores current api version.
     *
     * Since 4.2.0
     *
     * @param major  The major version.
     * @param minor  The minor version.
     * @param micro  The micro version.
     */
    function ApiVersion(major, minor, micro) {
        this.major = major;
        this.minor = minor;
        this.micro = micro;
    }
    return ApiVersion;
}());
exports.ApiVersion = ApiVersion;
/**
 * @class MenuItemStatus
 * Stores flyout menu item status
 *
 * Since 5.2.0
 */
var MenuItemStatus = (function () {
    /**
     * Stores flyout menu item status
     *
     * Since 5.2.0
     *
     * @param menuItemLabel  The menu item label.
     * @param enabled  		 True if user wants to enable the menu item.
     * @param checked  		 True if user wants to check the menu item.
     */
    function MenuItemStatus(menuItemLabel, enabled, checked) {
        this.menuItemLabel = menuItemLabel;
        this.enabled = enabled;
        this.checked = checked;
    }
    return MenuItemStatus;
}());
exports.MenuItemStatus = MenuItemStatus;
/**
 * @class ContextMenuItemStatus
 * Stores the status of the context menu item.
 *
 * Since 5.2.0
 */
var ContextMenuItemStatus = (function () {
    /**
     * Stores the status of the context menu item.
     *
     * Since 5.2.0
     *
     * @param menuItemID     The menu item id.
     * @param enabled  		 True if user wants to enable the menu item.
     * @param checked  		 True if user wants to check the menu item.
     */
    function ContextMenuItemStatus(menuItemID, enabled, checked) {
        this.menuItemID = menuItemID;
        this.enabled = enabled;
        this.checked = checked;
    }
    return ContextMenuItemStatus;
}());
exports.ContextMenuItemStatus = ContextMenuItemStatus;


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/node-dir/index.js":
/*!****************************************!*\
  !*** ./node_modules/node-dir/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dirpaths = __webpack_require__(/*! ./lib/paths */ "./node_modules/node-dir/lib/paths.js");

Object.assign(exports, dirpaths)
exports.readFiles = __webpack_require__(/*! ./lib/readfiles */ "./node_modules/node-dir/lib/readfiles.js");
exports.readFilesStream = __webpack_require__(/*! ./lib/readfilesstream */ "./node_modules/node-dir/lib/readfilesstream.js");


/***/ }),

/***/ "./node_modules/node-dir/lib/paths.js":
/*!********************************************!*\
  !*** ./node_modules/node-dir/lib/paths.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

﻿var fs = __webpack_require__(/*! fs */ "fs"),
    path = __webpack_require__(/*! path */ "path");

exports.promiseFiles = function promiseFiles(dir, type, options){
  type = type || 'file'

  var processor = function(res,rej){
    var cb = function(err,data){
      if(err)return rej(err)
      res(data)
    }
    exports.files(dir,type,cb,options)
  }
  return new Promise(processor)
}

/**
 * find all files or subdirs (recursive) and pass to callback fn
 *
 * @param {string} dir directory in which to recurse files or subdirs
 * @param {string} type type of dir entry to recurse ('file', 'dir', or 'all', defaults to 'file')
 * @param {function(error, <Array.<string>)} callback fn to call when done
 * @example
 * dir.files(__dirname, function(err, files) {
 *      if (err) throw err;
 *      console.log('files:', files);
 *  });
 */
exports.files = function files(dir, type, callback, options) {
  var ofType = typeof type
  if(ofType == 'object'){
    options = options || type
    type = 'file'
    callback = function(){}
  }else if (ofType !== 'string') {
    //ignoreType = callback;
    callback = type;
    type = 'file';
  }
  
  options = options || {}

  var pending,
      results = {
          files: [],
          dirs: []
      };

  var done = function() {
    if(type==='combine'){
      results = results.files.concat(results.dirs)
    } else if (!type || options.ignoreType || ['all','combine'].indexOf(type)>=0) {
        results = results
    } else {
      results = results[type + 's']
    }

    if(options.sync)return;


    callback(null, results);
  };

  var getStatHandler = function(statPath, name, lstatCalled) {
    return function(err, stat) {
      if (err) {
        if (!lstatCalled) {
          return fs.lstat(statPath, getStatHandler(statPath, name, true));
        }
        return callback(err);
      }

      var pushVal = options.shortName ? name : statPath

      if (stat && stat.isDirectory() && stat.mode !== 17115) {
        if (type !== 'file') {
          results.dirs.push(pushVal);
        }

        if (options.recursive==null || options.recursive) {
          var subloop = function(err, res) {
            if (err){
                return callback(err)
            }
            
            if(type === 'combine'){
              results.files = results.files.concat(res);
            }else if (type === 'all') {
              results.files = results.files.concat(res.files);
              results.dirs = results.dirs.concat(res.dirs);
            } else if (type === 'file') {
                results.files = results.files.concat(res.files);
            } else {
                results.dirs = results.dirs.concat(res.dirs);
            }

            if (!--pending){
              done();
            }
          }

          var newOptions = Object.assign({}, options)
          newOptions.ignoreType = true
          var moreResults = files(statPath, type, subloop, newOptions);

          if(options.sync){
            subloop(null, moreResults)
          }
        }else if (!--pending){
          done()
        }
      } else {
        if (type !== 'dir') {
          results.files.push(pushVal);
        }
        // should be the last statement in statHandler
        if (!--pending){
          done()
        }
      }
    }
  }

  var bufdir = Buffer.from(dir);

  const onDirRead = function(err, list) {
    if (err) return callback(err);
    
    pending = list.length;
    if (!pending) return done();
    
    for (var file, i = 0, l = list.length; i < l; i++) {
      var fname = list[i].toString();
      file = path.join(dir, fname);
      var buffile = Buffer.concat([bufdir, Buffer.from(path.sep), list[i]]);

      if(options.sync){
        var res = fs.statSync(buffile);
        getStatHandler(file,fname)(null, res)
      }else{
        fs.stat(buffile, getStatHandler(file,fname));
      }
    }

    return results
  }

  const onStat = function(err, stat) {
    if (err) return callback(err);
    if (stat && stat.mode === 17115) return done();

    if(options.sync){
      const list = fs.readdirSync(bufdir, {encoding: 'buffer'})
      return onDirRead(null, list)
    }else{
      fs.readdir(bufdir, {encoding: 'buffer'}, onDirRead)
    }
  }

  if(options.sync){
    const stat = fs.statSync(bufdir);
    return onStat(null, stat)
  }else{
    fs.stat(bufdir, onStat);
  }
};


/**
 * find all files and subdirs in  a directory (recursive) and pass them to callback fn
 *
 * @param {string} dir directory in which to recurse files or subdirs
 * @param {boolean} combine whether to combine both subdirs and filepaths into one array (default false)
 * @param {function(error, Object.<<Array.<string>, Array.<string>>)} callback fn to call when done
 * @example
 * dir.paths(__dirname, function (err, paths) {
 *     if (err) throw err;
 *     console.log('files:', paths.files);
 *     console.log('subdirs:', paths.dirs);
 * });
 * dir.paths(__dirname, true, function (err, paths) {
 *      if (err) throw err;
 *      console.log('paths:', paths);
 * });
 */
exports.paths = function paths(dir, combine, callback) {

    var type;

    if (typeof combine === 'function') {
        callback = combine;
        combine = false;
    }

    exports.files(dir, 'all', function(err, results) {
        if (err) return callback(err);
        if (combine) {

            callback(null, results.files.concat(results.dirs));
        } else {
            callback(null, results);
        }
    });
};


/**
 * find all subdirs (recursive) of a directory and pass them to callback fn
 *
 * @param {string} dir directory in which to find subdirs
 * @param {string} type type of dir entry to recurse ('file' or 'dir', defaults to 'file')
 * @param {function(error, <Array.<string>)} callback fn to call when done
 * @example
 * dir.subdirs(__dirname, function (err, paths) {
 *      if (err) throw err;
 *      console.log('files:', paths.files);
 *      console.log('subdirs:', paths.dirs);
 * });
 */
exports.subdirs = function subdirs(dir, callback, type, options) {
  options = options || {}

  const iCallback = function(err, subdirs) {
    if (err) return callback(err);

    if(type=='combine'){
      subdirs = subdirs.files.concat(subdirs.dirs)
    }
    
    if(options.sync)return subdirs

    callback(null, subdirs);
  }

  const res = exports.files(dir, 'dir', iCallback, options)

  if(options && options.sync){
    return iCallback(null,res)
  }
};


/***/ }),

/***/ "./node_modules/node-dir/lib/readfiles.js":
/*!************************************************!*\
  !*** ./node_modules/node-dir/lib/readfiles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs"),
    path = __webpack_require__(/*! path */ "path");

/**
 * merge two objects by extending target object with source object
 * @param target object to merge
 * @param source object to merge
 * @param {Boolean} [modify] whether to modify the target
 * @returns {Object} extended object
 */
function extend(target, source, modify) {
    var result = target ? modify ? target : extend({}, target, true) : {};
    if (!source) return result;
    for (var key in source) {
        if (source.hasOwnProperty(key) && source[key] !== undefined) {
            result[key] = source[key];
        }
    }
    return result;
}

/**
 * determine if a string is contained within an array or matches a regular expression
 * @param   {String} str string to match
 * @param   {Array|Regex} match array or regular expression to match against
 * @returns {Boolean} whether there is a match
 */
function matches(str, match) {
    if (Array.isArray(match)) return match.indexOf(str) > -1;
    return match.test(str);
}

/**
 * read files and call a function with the contents of each file
 * @param  {String} dir path of dir containing the files to be read
 * @param  {String} encoding file encoding (default is 'utf8')
 * @param  {Object} options options hash for encoding, recursive, and match/exclude
 * @param  {Function(error, string)} callback  callback for each files content
 * @param  {Function(error)}   complete  fn to call when finished
 */
function readFiles(dir, options, callback, complete) {
    if (typeof options === 'function') {
        complete = callback;
        callback = options;
        options = {};
    }
    if (typeof options === 'string') options = {
        encoding: options
    };
    options = extend({
        recursive: true,
        encoding: 'utf8',
        doneOnErr: true
    }, options);
    var files = [];

    var done = function(err) {
        if (typeof complete === 'function') {
            if (err) return complete(err);
            complete(null, files);
        }
    };

    fs.readdir(dir, function(err, list) {
        if (err)  {
            if (options.doneOnErr === true) {
              if (err.code === 'EACCES') return done();
              return done(err);
            }
        }
        var i = 0;

        if (options.reverse === true ||
            (typeof options.sort == 'string' &&
                (/reverse|desc/i).test(options.sort))) {
            list = list.reverse();
        } else if (options.sort !== false) list = list.sort();

        (function next() {
            var filename = list[i++];
            if (!filename) return done(null, files);
            var file = path.join(dir, filename);
            fs.stat(file, function(err, stat) {
                if (err && options.doneOnErr === true) return done(err);
                if (stat && stat.isDirectory()) {
                    if (options.recursive) {
                        if (options.matchDir && !matches(filename, options.matchDir)) return next();
                        if (options.excludeDir && matches(filename, options.excludeDir)) return next();
                        readFiles(file, options, callback, function(err, sfiles) {
                            if (err && options.doneOnErr === true) return done(err);
                            files = files.concat(sfiles);
                            next();
                        });
                    } else next();
                } else if (stat && stat.isFile()) {
                    if (options.match && !matches(filename, options.match)) return next();
                    if (options.exclude && matches(filename, options.exclude)) return next();
                    if (options.filter && !options.filter(filename)) return next();
                    if (options.shortName) files.push(filename);
                    else files.push(file);
                    fs.readFile(file, options.encoding, function(err, data) {
                        if (err) {
                            if (err.code === 'EACCES') return next();
                            if (options.doneOnErr === true) {
                                return done(err);
                            }
                        }
                        if (callback.length > 3)
                            if (options.shortName) callback(null, data, filename, next);
                            else callback(null, data, file, next);
                            else callback(null, data, next);
                    });
                }
                else {
                    next();
                }
            });
        })();

    });
}
module.exports = readFiles;


/***/ }),

/***/ "./node_modules/node-dir/lib/readfilesstream.js":
/*!******************************************************!*\
  !*** ./node_modules/node-dir/lib/readfilesstream.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs"),
    mm = __webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js"),
    path = __webpack_require__(/*! path */ "path");

/**
 * merge two objects by extending target object with source object
 * @param target object to merge
 * @param source object to merge
 * @param {Boolean} [modify] whether to modify the target
 * @returns {Object} extended object
 */
function extend(target, source, modify) {
    var result = target ? modify ? target : extend({}, target, true) : {};
    if (!source) return result;
    for (var key in source) {
        if (source.hasOwnProperty(key) && source[key] !== undefined) {
            result[key] = source[key];
        }
    }
    return result;
}

/**
 * determine if a string is contained within an array or matches a regular expression
 * @param   {String} str string to match
 * @param   {Array|Regex} match array or regular expression to match against
 * @returns {Boolean} whether there is a match
 */
function matches(str, match) {
    if (Array.isArray(match)) {
        var l = match.length;
        for( var s=0; s < l; s++) {
            if ( mm(str,match[s])) {
                return true;
            }
        }
        return false;
    }
    return match.test(str);
}

/**
 * read files and call a function with the contents of each file
 * @param  {String} dir path of dir containing the files to be read
 * @param  {String} encoding file encoding (default is 'utf8')
 * @param  {Object} options options hash for encoding, recursive, and match/exclude
 * @param  {Function(error, string)} callback  callback for each files content
 * @param  {Function(error)}   complete  fn to call when finished
 */
function readFilesStream(dir, options, callback, complete) {
    if (typeof options === 'function') {
        complete = callback;
        callback = options;
        options = {};
    }
    if (typeof options === 'string') options = {
        encoding: options
    };
    options = extend({
        recursive: true,
        encoding: 'utf8',
        doneOnErr: true
    }, options);
    var files = [];

    var done = function(err) {
        if (typeof complete === 'function') {
            if (err) return complete(err);
            complete(null, files);
        }
    };

    fs.readdir(dir, function(err, list) {
        if (err)  {
            if (options.doneOnErr === true) {
              if (err.code === 'EACCES') return done();
              return done(err);
            }
        }
        var i = 0;

        if (options.reverse === true ||
            (typeof options.sort == 'string' &&
                (/reverse|desc/i).test(options.sort))) {
            list = list.reverse();
        } else if (options.sort !== false) list = list.sort();

        (function next() {
            var filename = list[i++];
            if (!filename) return done(null, files);
            var file = path.join(dir, filename);
            fs.stat(file, function(err, stat) {
                if (err && options.doneOnErr === true) return done(err);
                if (stat && stat.isDirectory()) {
                    if (options.recursive) {
                        if (options.matchDir && !matches(filename, options.matchDir)) return next();
                        if (options.excludeDir && matches(filename, options.excludeDir)) return next();
                        readFilesStream(file, options, callback, function(err, sfiles) {
                            if (err && options.doneOnErr === true) return done(err);
                            files = files.concat(sfiles);
                            next();
                        });
                    } else next();
                } else if (stat && stat.isFile()) {
                    if (options.match && !matches(filename, options.match)) return next();
                    if (options.exclude && matches(filename, options.exclude)) return next();
                    if (options.filter && !options.filter(filename)) return next();
                    if (options.shortName) files.push(filename);
                    else files.push(file);
                    var stream = fs.createReadStream(file);
                    if (options.encoding !== null) {
                        stream.setEncoding(options.encoding);
                    }
                    stream.on('error',function(err) {
                      if (options.doneOnErr === true) return done(err);
                      next();
                    });
                    if (callback.length > 3)
                        if (options.shortName) callback(null, stream, filename, next);
                        else callback(null, stream, file, next);
                        else callback(null, stream, next);
                }
                else {
                  next();
                }
            });
        })();

    });
}
module.exports = readFilesStream;


/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9Db29raWVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2pzL2xpYnMvVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9UeXBlQWhlYWQudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uY2F0LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NpbnRlcmZhY2UtdHMvZGlzdC9jc2ludGVyZmFjZS10cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaW1hdGNoL21pbmltYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtZGlyL2xpYi9wYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlc3N0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3Bpbi5qcy9zcGluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFD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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdMQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwidmFyIENvb2tpZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb29raWVNYW5hZ2VyKHRlbXBsYXRlRGlyKSB7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlRGlyID09PSB2b2lkIDApIHsgdGVtcGxhdGVEaXIgPSBcIlwiOyB9XHJcbiAgICAgICAgdGhpcy5jb29raWVOYW1lID0gXCJza3lPcGVuVGVtcGxhdGVcIjtcclxuICAgICAgICB0aGlzLmNvb2tpZVZhbHVlID0gdGVtcGxhdGVEaXI7XHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cGlyZXMuc2V0RnVsbFllYXIoZXhwaXJlcy5nZXRGdWxsWWVhcigpICsgMik7XHJcbiAgICAgICAgdGhpcy5leHBpcnlEYXRlID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgQ29va2llTWFuYWdlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29va2llVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvb2tpZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVmFsaWQgZGlyZWN0b3J5IG5vdCBjaG9zZW4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuY29va2llTmFtZSArIFwiPVwiICsgdGhpcy5jb29raWVWYWx1ZSArIFwiO2V4cGlyZXM9XCIgKyB0aGlzLmV4cGlyeURhdGUgKyBcIjtcIjtcclxuICAgIH07XHJcbiAgICBDb29raWVNYW5hZ2VyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZSkge1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXRDb29raWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNwbGl0Q29va2llXzEgPSBzcGxpdENvb2tpZTsgX2kgPCBzcGxpdENvb2tpZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBzcGxpdENvb2tpZV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gY29va2llLnNwbGl0KFwiPVwiKVswXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY29va2llLnNwbGl0KFwiPVwiKVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5jb29raWVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvb2tpZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENvb2tpZU1hbmFnZXIgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dmEybGxUV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtOdmIydHBaVTFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1NVRkxSU3gxUWtGQldTeFhRVUYzUWp0UlFVRjRRaXcwUWtGQlFTeEZRVUZCTEdkQ1FVRjNRanRSUVVvMVFpeGxRVUZWTEVkQlFWY3NhVUpCUVdsQ0xFTkJRVU03VVVGTE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGREwwSXNTVUZCVFN4UFFVRlBMRWRCUVZNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5xUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlUwc01rSkJRVWNzUjBGQlZpeFZRVUZYTEV0QlFXTTdVVUZEZGtJc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFZDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRM0pDTEV0QlFVc3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzFsQlEzSkRMRTlCUVU4N1UwRkRVanRSUVVORUxGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVMHNTVUZCU1N4RFFVRkRMRlZCUVZVc1UwRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eHBRa0ZCV1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hOUVVGSExFTkJRVU03U1VGRGVrWXNRMEZCUXp0SlFVVk5MREpDUVVGSExFZEJRVlk3VVVGRFJTeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRia0lzU1VGQlRTeFhRVUZYTEVkQlFXRXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZWtRc1NVRkJTU3hYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTjBRaXhMUVVGeFFpeFZRVUZYTEVWQlFWZ3NNa0pCUVZjc1JVRkJXQ3g1UWtGQlZ5eEZRVUZZTEVsQlFWY3NSVUZCUlR0dlFrRkJOMElzU1VGQlRTeE5RVUZOTEc5Q1FVRkJPMjlDUVVObUxFbEJRVTBzUjBGQlJ5eEhRVUZYTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2IwSkJRMmhFTEVsQlFVMHNTMEZCU3l4SFFVRlhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEyeEVMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdkMEpCUXpOQ0xFOUJRVThzUzBGQlN5eERRVUZETzNGQ1FVTmtPMmxDUVVOR08yRkJRMFk3VTBGRFJqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVOSUxHOUNRVUZETzBGQlFVUXNRMEZCUXl4QlFYUkRSQ3hKUVhORFF5SjkiLCJ2YXIgVGVtcGxhdGVGaWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGVtcGxhdGVGaWxlKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgdGhpcy5mdWxsUGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5mdWxsUGF0aCA9IGZ1bGxQYXRoO1xyXG4gICAgICAgIHZhciBvc0ZpeGVkUGF0aCA9IGZ1bGxQYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xyXG4gICAgICAgIHZhciBmbiA9IG9zRml4ZWRQYXRoLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZm4gPT09IHVuZGVmaW5lZCA/IFwiRmlsZSBuYW1lIG1hbGZvcm1lZFwiIDogZm47XHJcbiAgICB9XHJcbiAgICBUZW1wbGF0ZUZpbGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImZpbGVOYW1lOiBcIiArIHRoaXMuZmlsZU5hbWUgKyBcIlxcbiAgICAgIGZ1bGxQYXRoOiBcIiArIHRoaXMuZnVsbFBhdGg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRlbXBsYXRlRmlsZTtcclxufSgpKTtcclxuZXhwb3J0IHsgVGVtcGxhdGVGaWxlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnRjR3hoZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpVWlcxd2JHRjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEpRVXRGTEhOQ1FVRlpMRkZCUVdkQ08xRkJTSEpDTEdGQlFWRXNSMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRkRUlzWVVGQlVTeEhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVY3pRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTjZRaXhKUVVGTkxGZEJRVmNzUjBGQlZ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UkN4SlFVRk5MRVZCUVVVc1IwRkJkVUlzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0xUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRhRVVzUTBGQlF6dEpRVVZOTEN0Q1FVRlJMRWRCUVdZN1VVRkRSU3hQUVVGUExHVkJRV0VzU1VGQlNTeERRVUZETEZGQlFWRXNNRUpCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZWTEVOQlFVTTdTVUZEYUVNc1EwRkJRenRKUVVOSUxHMUNRVUZETzBGQlFVUXNRMEZCUXl4QlFXaENSQ3hKUVdkQ1F5SjkiLCJ2YXIgVHlwZUFoZWFkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgVHlwZUFoZWFkIGNvbnN0cnVjdG9yLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gc2VsZWN0IC0gVGhlIFNlbGVjdCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtKUXVlcnk8SFRNTElucHV0RWxlbWVudD59IGlucHV0IC0gVGhlIElucHV0IGVsZW1lbnQgd2hpY2ggY29udGFpbnNcclxuICAgICAqIHRoZSBzZWFyY2ggc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBUeXBlQWhlYWQoc2VsZWN0LCBpbnB1dCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gc2VsZWN0O1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICB0aGlzLm9wdGlvbnNPcmlnaW5hbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlIHRoZSBvcmlnaW5hbCBvcHRpb25zIGZvciB0aGUgc2VsZWN0IGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBUeXBlQWhlYWQucHJvdG90eXBlLnNldE9wdGlvbnNPcmlnaW5hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNPcmlnaW5hbCA9IHRoaXMuc2VsZWN0LmNoaWxkcmVuKFwib3B0aW9uXCIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBTZWxlY3QgZWxlbWVudCwgZmlsdGVyIGFsbCBvZiBpdHMgT3B0aW9uIGVsZW1lbnRzIHRvIG9ubHkgc2hvdyB0aG9zZVxyXG4gICAgICogd2hvIHBhc3MgYSBnaXZlbiB0ZXN0LCBpbiBgZmluZE1hdGNoZXNgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gc2VsZWN0RWxlbWVudCAtIFRoZSBTZWxlY3QgZWxlbWVudCB0byBiZSBmaWx0ZXJlZC5cclxuICAgICAqL1xyXG4gICAgVHlwZUFoZWFkLnByb3RvdHlwZS5maWx0ZXJPcHRpb25zSW4gPSBmdW5jdGlvbiAoc2VsZWN0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gc2VsZWN0RWxlbWVudDtcclxuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNNaXNtYXRjaGVkQ29sbGVjdGlvblF1ZXJ5VXBkYXRlXHJcbiAgICAgICAgdmFyIG9wdGlvbnNDdXJyZW50ID0gdGhpcy5zZWxlY3QuY2hpbGRyZW4oXCJvcHRpb25cIik7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLmZpbmRNYXRjaGVzKHRoaXMuaW5wdXQudmFsKCkpO1xyXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnNDdXJyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmQobWF0Y2hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmQodGhpcy5vcHRpb25zT3JpZ2luYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzIGJ5IGEgZ2l2ZW4gc2VhcmNoIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoIC0gVGhlIHN0cmluZyBvZiB0ZXh0IHRvIHVzZSBmb3IgZmlsdGVyaW5nIHRoZSBPcHRpb24gbGlzdC5cclxuICAgICAqIEByZXR1cm5zIHtKUXVlcnk8SFRNTE9wdGlvbkVsZW1lbnQ+IHwgbnVsbH0gVGhlIGZpbHRlcmVkIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzLFxyXG4gICAgICogb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm9uZSB0byBiZWdpbiB3aXRoIG9yIGlmIHRoZSBzZWFyY2ggc3RyaW5nIGlzIGJsYW5rLlxyXG4gICAgICovXHJcbiAgICBUeXBlQWhlYWQucHJvdG90eXBlLmZpbmRNYXRjaGVzID0gZnVuY3Rpb24gKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNPcmlnaW5hbCAhPT0gbnVsbCAmJiBzZWFyY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc09yaWdpbmFsLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgsIG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi50ZXh0Lm1hdGNoKHJlZ2V4KSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUeXBlQWhlYWQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFR5cGVBaGVhZCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWSGx3WlVGb1pXRmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVZIbHdaVUZvWldGa0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBsQlMwVTdPenM3T3p0UFFVMUhPMGxCUTBnc2JVSkJRVmtzVFVGQk1rSXNSVUZCUlN4TFFVRXJRanRSUVVOMFJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzYzBOQlFXdENMRWRCUVhwQ08xRkJRMFVzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlJXNUVMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeHRRMEZCWlN4SFFVRjBRaXhWUVVGMVFpeGhRVUZyUXp0UlFVTjJSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTTFRaXhwUkVGQmFVUTdVVUZEYWtRc1NVRkJUU3hqUVVGakxFZEJRVGhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVOd1JTeFJRVUZSTEVOQlEyOUNMRU5CUVVNN1VVRkRMMElzU1VGQlRTeFBRVUZQTEVkQlFYRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRMmhGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGWkxFTkJRek5DTEVOQlFVTTdVVUZEUml4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGNFSXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJRM2hDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6ZENPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJORU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMGxCUTBnc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5MTEN0Q1FVRlhMRWRCUVc1Q0xGVkJRVzlDTEUxQlFXTTdVVUZEYUVNc1NVRkJUU3hMUVVGTExFZEJRVmNzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhKUVVGSkxFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlF6TkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlEyaERMRlZCUVVNc1MwRkJZU3hGUVVGRkxFMUJRWGxDTzJkQ1FVTjJReXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF6dFpRVU16UXl4RFFVRkRMRU5CUTBZc1EwRkJRenRUUVVOSU8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUTBnc1owSkJRVU03UVVGQlJDeERRVUZETEVGQmNrVkVMRWxCY1VWREluMD0iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBtYWluIHBhbmVsIGZ1bmN0aW9ucyBhbmQgY2FsbHMgdG8gYWxsIG9mIGl0cyBtb2R1bGVzLlxyXG4gKi9cclxuaW1wb3J0IHsgQ1NJbnRlcmZhY2UgfSBmcm9tIFwiY3NpbnRlcmZhY2UtdHNcIjtcclxuaW1wb3J0ICogYXMgZGlyIGZyb20gXCJub2RlLWRpclwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInNwaW4uanNcIjtcclxuaW1wb3J0IHsgQ29va2llTWFuYWdlciB9IGZyb20gXCIuL2xpYnMvQ29va2llTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUZpbGUgfSBmcm9tIFwiLi9saWJzL1RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IFR5cGVBaGVhZCB9IGZyb20gXCIuL2xpYnMvVHlwZUFoZWFkXCI7XHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBmdW5jdGlvbiB0aGF0IHdpbGwgcnVuIGluIHRoZSBBZG9iZSBDRVAgcGFuZWwuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBTZXQgdXAgY29uc3RhbnRzLlxyXG4gICAgdmFyIGNzSW50ZXJmYWNlID0gbmV3IENTSW50ZXJmYWNlKCk7XHJcbiAgICB2YXIgY29va2llTWFuYWdlciA9IG5ldyBDb29raWVNYW5hZ2VyKCk7XHJcbiAgICB2YXIgc3Bpbm5lciA9IG5ldyBTcGlubmVyKHsgY29sb3I6IFwiI2ZmZlwiLCBsaW5lczogMTIgfSk7XHJcbiAgICB2YXIgZWxCb2R5ID0gJChcImJvZHlcIik7XHJcbiAgICB2YXIgZWxTZWxlY3RXcmFwcGVyID0gJChcIiN0ZW1wbGF0ZS1saXN0LXdyYXBwZXJcIik7XHJcbiAgICB2YXIgZWxTZWxlY3QgPSAkKFwiI3RlbXBsYXRlLWxpc3RcIik7XHJcbiAgICB2YXIgZWxJbnB1dCA9ICQoXCIjc2VhcmNoLWJveFwiKTtcclxuICAgIHZhciB0eXBlQWhlYWQgPSBuZXcgVHlwZUFoZWFkKGVsU2VsZWN0LCBlbElucHV0KTtcclxuICAgIHZhciBub25TZWxlY3RIZWlnaHQgPSAxODA7XHJcbiAgICB2YXIgc2VsZWN0TGluZUhlaWdodCA9IDIwO1xyXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3IgQmxvY2tVSS5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICQuYmxvY2tVSS5kZWZhdWx0cyA9IHtcclxuICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgIG9uQmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3BpbihlbEJvZHkuZ2V0KDApKTsgfSxcclxuICAgICAgICBvblVuYmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3RvcCgpOyB9LFxyXG4gICAgICAgIG92ZXJsYXlDU1M6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyB0aGUgaG9zdCBhcHBsaWNhdGlvbiB0byBvcGVuIGFsbCBvZiB0aGUgZmlsZXMgaW4gdGhlIGdpdmVuIGxpc3Qgb2YgZnVsbCBwYXRobmFtZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VsZWN0ZWQgLSBUaGUgbGlzdCBvZiBmdWxsIHBhdGhuYW1lcyBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxyXG4gICAgICovXHJcbiAgICB2YXIgb3BlblRlbXBsYXRlcyA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgc2VsZWN0ZWRfMSA9IHNlbGVjdGVkOyBfaSA8IHNlbGVjdGVkXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZUZpbGUoaXRlbSk7XHJcbiAgICAgICAgICAgIHZhciBqc29uVGVtcGxhdGUgPSBKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIGNzSW50ZXJmYWNlLmV2YWxTY3JpcHQoXCJvcGVuRG9jdW1lbnQoXCIgKyBqc29uVGVtcGxhdGUgKyBcIilcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQudW5ibG9ja1VJKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBleHRlbnNpb24gcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0LlwiKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgU2VsZWN0IGVsZW1lbnQuXHJcbiAgICAgICAgICogTW9zdGx5IGp1c3QgZm9yIGRvdWJsZS1jbGlja2luZyBhbiBPcHRpb24gaW4gdGhlIFNlbGVjdCBFbGVtZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGVsU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGVsU2VsZWN0LmRibGNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRlbXBsYXRlTGlzdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmJsb2NrVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9wZW5UZW1wbGF0ZXMoc2VsZWN0ZWQpOyB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBPcGVuIGJ1dHRvbi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBvcGVuQnV0dG9uID0gJChcIiNvcGVuLWJ1dHRvblwiKTtcclxuICAgICAgICBpZiAob3BlbkJ1dHRvbikge1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdGVtcGxhdGVMaXN0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYmxvY2tVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb3BlblRlbXBsYXRlcyhzZWxlY3RlZCk7IH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0IHRoZSBsaXN0IG9mIHRlbXBsYXRlcyBpbiB0aGUgUGFuZWwgYXMgT3B0aW9uIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtUZW1wbGF0ZUZpbGVbXX0gZmlsZUxpc3QgLSBUaGUgbGlzdCBvZiB0ZW1wbGF0ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHNldFRlbXBsYXRlTGlzdCA9IGZ1bmN0aW9uIChmaWxlTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUxpc3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZmlsZUxpc3RfMSA9IGZpbGVMaXN0OyBfaSA8IGZpbGVMaXN0XzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlTGlzdF8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUxpc3QuYXBwZW5kKCQoXCI8b3B0aW9uIC8+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWwoZmlsZS5mdWxsUGF0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoZmlsZS5maWxlTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIGxpc3Qgb2YgdGVtcGxhdGUgZmlsZXMgcmVjdXJzaXZlbHkgZnJvbSBhIGdpdmVuIHBhdGgsXHJcbiAgICAgICAgICogdGhlbiBwb3B1bGF0ZSB0aGUgSFRNTCBwYW5lbCB3aXRoIHRoYXQgbGlzdC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggZnJvbSB3aGljaCB0byBvYnRhaW4gdGhlIGxpc3Qgb2YgZmlsZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIGdldEZpbGVzID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBlbFNlbGVjdFdyYXBwZXIuYmxvY2soe1xyXG4gICAgICAgICAgICAgICAgb25CbG9jazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Bpbm5lci5zcGluKGVsU2VsZWN0V3JhcHBlci5nZXQoMCkpOyB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkaXIuZmlsZXMocGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCA9IFwiYWlcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVQYXRocyA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5zcGxpdChcIi5cIikucG9wKCkgPT09IGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhdGhzLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0ZW1wbGF0ZVBhdGhzXzEgPSB0ZW1wbGF0ZVBhdGhzOyBfaSA8IHRlbXBsYXRlUGF0aHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGVQYXRoc18xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVzLnB1c2gobmV3IFRlbXBsYXRlRmlsZSh0ZW1wbGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRUZW1wbGF0ZUxpc3QodGVtcGxhdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxTZWxlY3RXcmFwcGVyLnVuYmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBlbElucHV0Lm9mZigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVBaGVhZC5zZXRPcHRpb25zT3JpZ2luYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbElucHV0Lm9uKFwia2V5dXAgY2hhbmdlIHJlc2V0IHNlYXJjaFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBaGVhZC5maWx0ZXJPcHRpb25zSW4oZWxTZWxlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIHRlbXBsYXRlIGZvbGRlciBzZWxlY3Rpb24gYnV0dG9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHRlbXBsYXRlQnV0dG9uID0gJChcIiNmaWxlLWNvbnRyb2xcIik7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlTGlzdCA9ICQoXCIjdGVtcGxhdGUtbGlzdFwiKTtcclxuICAgICAgICBpZiAodGVtcGxhdGVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVCdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidXR0b24gcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IHRlbXBsYXRlQnV0dG9uWzBdLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlczogXCIgKyBmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlUGF0aCA9IGZpbGVzWzBdLnBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlUGF0aDogXCIgKyBmaWxlUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9zRml4ZWRQYXRoID0gZmlsZVBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvc0ZpeGVkUGF0aDogXCIgKyBvc0ZpeGVkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBvc0ZpeGVkUGF0aC5zdWJzdHIoMCwgb3NGaXhlZFBhdGgubGFzdEluZGV4T2YoXCIvXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpeGVkIHBhdGg6IFwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llTWFuYWdlci5zZXQocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsZXMocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsaXplIHRoZSB0aGVtZSAoY29sb3JzLCBHVUksIGxvb2sgJiBmZWVsLCBldGMuKVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhlbWVNYW5hZ2VyLmluaXQoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcG9uIHN0YXJ0aW5nIHRoZSBleHRlbnNpb24sIG9idGFpbiBhbiBleGlzdGluZyBsaXN0IG9mIGZpbGVzXHJcbiAgICAgICAgICogaWYgdGhlIHBhdGggdG8gdGhlbSBoYXMgYWxyZWFkeSBiZWVuIHNldC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZVBhdGggPSBjb29raWVNYW5hZ2VyLmdldCgpO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcclxuICAgICAgICAgICAgZ2V0RmlsZXModGVtcGxhdGVQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgZXh0ZW5zaW9uIHBhbmVsIGlzIHJlLXNpemVkLlxyXG4gICAgICAgICAqIFJlLXNpemVzIHRoZSBTZWxlY3RbbXVsdGlwbGVdIGVsZW1lbnQgdG8gZmlsbCB0aGUgc3BhY2UuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgcmVzaXplU2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtTGluZXMgPSBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBub25TZWxlY3RIZWlnaHQpIC8gc2VsZWN0TGluZUhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsU2VsZWN0LmF0dHIoXCJzaXplXCIsIG51bUxpbmVzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlc2l6ZSB0aGUgU2VsZWN0W211bHRpcGxlXSBlbGVtZW50IHVwb24gc3RhcnR1cCBvZiB0aGUgZXh0ZW5zaW9uIHBhbmVsXHJcbiAgICAgICAgICogYW5kIGFzc2lnbiB0aGUgaGFuZGxlciB0byB0aGUgZXZlbnQgd2hlbiB0aGUgcGFuZWwgaXMgcmUtc2l6ZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgJChyZXNpemVTZWxlY3QpO1xyXG4gICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCByZXNpemVTZWxlY3QpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpO1xyXG59KSgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBkQlJVYzdRVUZGU0N4UFFVRlBMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzWjBKQlFXZENMRU5CUVVNN1FVRkROME1zVDBGQlR5eExRVUZMTEVkQlFVY3NUVUZCVFN4VlFVRlZMRU5CUVVNN1FVRkRhRU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRk5CUVZNc1EwRkJRenRCUVVOc1F5eFBRVUZQTEVWQlFVVXNZVUZCWVN4RlFVRkZMRTFCUVUwc2MwSkJRWE5DTEVOQlFVTTdRVUZEY2tRc1QwRkJUeXhGUVVGRkxGbEJRVmtzUlVGQlJTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJReTlETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hyUWtGQmEwSXNRMEZCUXp0QlFVVTNRenM3UjBGRlJ6dEJRVU5JTEVOQlFVTTdTVUZEUXl4WlFVRlpMRU5CUVVNN1NVRkZZaXh2UWtGQmIwSTdTVUZEY0VJc1NVRkJUU3hYUVVGWExFZEJRV2RDTEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRia1FzU1VGQlRTeGhRVUZoTEVkQlFXdENMRWxCUVVrc1lVRkJZU3hGUVVGRkxFTkJRVU03U1VGRGVrUXNTVUZCVFN4UFFVRlBMRWRCUVZrc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyNUZMRWxCUVUwc1RVRkJUU3hIUVVGM1FpeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRPVU1zU1VGQlRTeGxRVUZsTEVkQlFYZENMRU5CUVVNc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMGxCUTNwRkxFbEJRVTBzVVVGQlVTeEhRVUYzUWl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hKUVVGTkxFOUJRVThzUjBGQk5rSXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTnVSQ3hKUVVGTkxHVkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZETlVJc1NVRkJUU3huUWtGQlowSXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkZOVUlzWjBOQlFXZERPMGxCUTJoRExHRkJRV0U3U1VGRFlpeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSenRSUVVOdVFpeFBRVUZQTEVWQlFVVXNTVUZCU1R0UlFVTmlMRTlCUVU4c1JVRkJSU3hqUVVGTkxFOUJRVUVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFUTkNMRU5CUVRKQ08xRkJRekZETEZOQlFWTXNSVUZCUlN4alFVRk5MRTlCUVVFc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZrTEVOQlFXTTdVVUZETDBJc1ZVRkJWU3hGUVVGRk8xbEJRMVlzWlVGQlpTeEZRVUZGTEUxQlFVMDdXVUZEZGtJc1QwRkJUeXhGUVVGRkxFZEJRVWM3VTBGRFlqdFJRVU5FTEZkQlFWY3NSVUZCUlN4SlFVRkpPMHRCUTJ4Q0xFTkJRVU03U1VGRlJqczdPenRQUVVsSE8wbEJRMGdzU1VGQlRTeGhRVUZoTEVkQlFVY3NWVUZCUXl4UlFVRnJRanRSUVVOMlF5eExRVUZ0UWl4VlFVRlJMRVZCUVZJc2NVSkJRVkVzUlVGQlVpeHpRa0ZCVVN4RlFVRlNMRWxCUVZFc1JVRkJSVHRaUVVGNFFpeEpRVUZOTEVsQlFVa3NhVUpCUVVFN1dVRkRZaXhKUVVGTkxGRkJRVkVzUjBGQmFVSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGRFUXNTVUZCVFN4WlFVRlpMRWRCUVZjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTjBSQ3hYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEd0Q1FVRm5RaXhaUVVGWkxFMUJRVWNzUlVGQlJUdG5Ra0ZEZEVRc2RVSkJRWFZDTzFsQlEzcENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMG83VVVGRFJDeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRhRUlzUTBGQlF5eERRVUZETzBsQlJVWTdPMDlCUlVjN1NVRkRTQ3hUUVVGVExFbEJRVWs3VVVGRFdDeDNRa0ZCZDBJN1VVRkRlRUk3T3pzN1YwRkpSenRSUVVOSUxFbEJRVWtzVVVGQlVTeEZRVUZGTzFsQlExb3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRuUWtGRGFFSXNTVUZCVFN4UlFVRlJMRWRCUVdFc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQll5eERRVUZETzJkQ1FVTXhSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTI1Q0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRXaXhWUVVGVkxFTkJRVU1zWTBGQlRTeFBRVUZCTEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJka0lzUTBGQmRVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRGFrUTdXVUZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOS08xRkJSVVE3T3p0WFFVZEhPMUZCUTBnc1NVRkJUU3hWUVVGVkxFZEJRWGRDTEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZWQlFWVXNSVUZCUlR0WlFVTmtMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQllTeFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRmpMRU5CUVVNN1owSkJRekZFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGJrSXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU5hTEZWQlFWVXNRMEZCUXl4alFVRk5MRTlCUVVFc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUYyUWl4RFFVRjFRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnFSRHRaUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEwbzdVVUZGUkRzN096dFhRVWxITzFGQlEwZ3NTVUZCVFN4bFFVRmxMRWRCUVVjc1ZVRkJReXhSUVVGM1FqdFpRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEyNUNMRmxCUVZrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEY2tJc1MwRkJiVUlzVlVGQlVTeEZRVUZTTEhGQ1FVRlJMRVZCUVZJc2MwSkJRVkVzUlVGQlVpeEpRVUZSTEVWQlFVVTdiMEpCUVhoQ0xFbEJRVTBzU1VGQlNTeHBRa0ZCUVR0dlFrRkRZaXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVU5xUWl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8zbENRVU5hTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8zbENRVU5zUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVU4yUWl4RFFVRkRPMmxDUVVOSU8yRkJRMFk3VVVGRFNDeERRVUZETEVOQlFVTTdVVUZGUmpzN096czdWMEZMUnp0UlFVTklMRWxCUVUwc1VVRkJVU3hIUVVGSExGVkJRVU1zU1VGQldUdFpRVU0xUWl4aFFVRmhPMWxCUTJJc1pVRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF6dG5Ra0ZEY0VJc1QwRkJUeXhGUVVGRkxHTkJRVTBzVDBGQlFTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCY0VNc1EwRkJiME03WVVGRGNFUXNRMEZCUXl4RFFVRkRPMWxCUTBnc1ZVRkJWU3hEUVVGRE8yZENRVU5VTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVU1zUjBGQlZTeEZRVUZGTEV0QlFXVTdiMEpCUXpGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzNkQ1FVTlFMRTFCUVUwc1IwRkJSeXhEUVVGRE8zRkNRVU5ZTzI5Q1FVTkVMRWxCUVUwc1IwRkJSeXhIUVVGWExFbEJRVWtzUTBGQlF6dHZRa0ZEZWtJc1NVRkJUU3hoUVVGaExFZEJRV0VzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRkRMRWxCUVVrN2QwSkJRMmhFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4SFFVRkhMRU5CUVVNN2IwSkJRM1pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzU1VGQlRTeFRRVUZUTEVkQlFXMUNMRVZCUVVVc1EwRkJRenR2UWtGRGNrTXNTMEZCZFVJc1ZVRkJZU3hGUVVGaUxDdENRVUZoTEVWQlFXSXNNa0pCUVdFc1JVRkJZaXhKUVVGaExFVkJRVVU3ZDBKQlFXcERMRWxCUVUwc1VVRkJVU3h6UWtGQlFUdDNRa0ZEYWtJc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8zRkNRVU0xUXp0dlFrRkRSQ3hsUVVGbExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xHRkJRV0U3YjBKQlEySXNaVUZCWlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU14UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEyUXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTTdiMEpCUXk5Q0xFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNNa0pCUVRKQ0xFVkJRVVU3ZDBKQlEzUkRMRk5CUVZNc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdiMEpCUTNSRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMHdzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFnc1EwRkJReXhEUVVGRE8xRkJSVVk3T3p0WFFVZEhPMUZCUTBnc1NVRkJUU3hqUVVGakxFZEJRWGRDTEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNdlJDeEpRVUZOTEZsQlFWa3NSMEZCZDBJc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZEYkVJc1kwRkJZeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdaMEpCUXpGQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZET1VJc1lVRkJZVHRuUWtGRFlpeEpRVUZOTEV0QlFVc3NSMEZCWVN4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzJkQ1FVTm9SQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRuUWtGREwwSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU5vUWl4aFFVRmhPMjlDUVVOaUxFbEJRVTBzVVVGQlVTeEhRVUZYTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03YjBKQlEzWkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eEpRVUZOTEZkQlFWY3NSMEZCVnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRla1FzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4bFFVRmxMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU03YjBKQlF6TkRMRWxCUVUwc1NVRkJTU3hIUVVGWExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlEzSkRMRU5CUVVNc1JVRkRSQ3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVTTNRaXhEUVVGRE8yOUNRVU5HTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTnVReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVONFFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMmhDTzFsQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRTanRSUVVWRU96czdWMEZIUnp0UlFVTklMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVVZ3UWpzN096dFhRVWxITzFGQlEwZ3NTVUZCVFN4WlFVRlpMRWRCUVd0Q0xHRkJRV0VzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTjRSQ3hKUVVGSkxGbEJRVmtzUlVGQlJUdFpRVU5vUWl4UlFVRlJMRU5CUVVNc1dVRkJjMElzUTBGQlF5eERRVUZETzFOQlEyeERPMUZCUlVRN096czdWMEZKUnp0UlFVTklMRWxCUVUwc1dVRkJXU3hIUVVGSE8xbEJRMjVDTEVsQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRM3BDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eG5Ra0ZCWjBJc1EwRkRNVVFzUTBGQlF6dFpRVU5HTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyeERMRU5CUVVNc1EwRkJRenRSUVVWR096czdWMEZIUnp0UlFVTklMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU5vUWl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUXNTVUZCU1N4RlFVRkZMRU5CUVVNN1FVRkRWQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZESW4wPSIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gYmFsYW5jZWQ7XG5mdW5jdGlvbiBiYWxhbmNlZChhLCBiLCBzdHIpIHtcbiAgaWYgKGEgaW5zdGFuY2VvZiBSZWdFeHApIGEgPSBtYXliZU1hdGNoKGEsIHN0cik7XG4gIGlmIChiIGluc3RhbmNlb2YgUmVnRXhwKSBiID0gbWF5YmVNYXRjaChiLCBzdHIpO1xuXG4gIHZhciByID0gcmFuZ2UoYSwgYiwgc3RyKTtcblxuICByZXR1cm4gciAmJiB7XG4gICAgc3RhcnQ6IHJbMF0sXG4gICAgZW5kOiByWzFdLFxuICAgIHByZTogc3RyLnNsaWNlKDAsIHJbMF0pLFxuICAgIGJvZHk6IHN0ci5zbGljZShyWzBdICsgYS5sZW5ndGgsIHJbMV0pLFxuICAgIHBvc3Q6IHN0ci5zbGljZShyWzFdICsgYi5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1heWJlTWF0Y2gocmVnLCBzdHIpIHtcbiAgdmFyIG0gPSBzdHIubWF0Y2gocmVnKTtcbiAgcmV0dXJuIG0gPyBtWzBdIDogbnVsbDtcbn1cblxuYmFsYW5jZWQucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIHJhbmdlKGEsIGIsIHN0cikge1xuICB2YXIgYmVncywgYmVnLCBsZWZ0LCByaWdodCwgcmVzdWx0O1xuICB2YXIgYWkgPSBzdHIuaW5kZXhPZihhKTtcbiAgdmFyIGJpID0gc3RyLmluZGV4T2YoYiwgYWkgKyAxKTtcbiAgdmFyIGkgPSBhaTtcblxuICBpZiAoYWkgPj0gMCAmJiBiaSA+IDApIHtcbiAgICBiZWdzID0gW107XG4gICAgbGVmdCA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA+PSAwICYmICFyZXN1bHQpIHtcbiAgICAgIGlmIChpID09IGFpKSB7XG4gICAgICAgIGJlZ3MucHVzaChpKTtcbiAgICAgICAgYWkgPSBzdHIuaW5kZXhPZihhLCBpICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKGJlZ3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcmVzdWx0ID0gWyBiZWdzLnBvcCgpLCBiaSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVnID0gYmVncy5wb3AoKTtcbiAgICAgICAgaWYgKGJlZyA8IGxlZnQpIHtcbiAgICAgICAgICBsZWZ0ID0gYmVnO1xuICAgICAgICAgIHJpZ2h0ID0gYmk7XG4gICAgICAgIH1cblxuICAgICAgICBiaSA9IHN0ci5pbmRleE9mKGIsIGkgKyAxKTtcbiAgICAgIH1cblxuICAgICAgaSA9IGFpIDwgYmkgJiYgYWkgPj0gMCA/IGFpIDogYmk7XG4gICAgfVxuXG4gICAgaWYgKGJlZ3MubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbIGxlZnQsIHJpZ2h0IF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsInZhciBjb25jYXRNYXAgPSByZXF1aXJlKCdjb25jYXQtbWFwJyk7XG52YXIgYmFsYW5jZWQgPSByZXF1aXJlKCdiYWxhbmNlZC1tYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGFuZFRvcDtcblxudmFyIGVzY1NsYXNoID0gJ1xcMFNMQVNIJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY09wZW4gPSAnXFwwT1BFTicrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDbG9zZSA9ICdcXDBDTE9TRScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NDb21tYSA9ICdcXDBDT01NQScrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NQZXJpb2QgPSAnXFwwUEVSSU9EJytNYXRoLnJhbmRvbSgpKydcXDAnO1xuXG5mdW5jdGlvbiBudW1lcmljKHN0cikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCkgPT0gc3RyXG4gICAgPyBwYXJzZUludChzdHIsIDEwKVxuICAgIDogc3RyLmNoYXJDb2RlQXQoMCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxcXFxcXFwnKS5qb2luKGVzY1NsYXNoKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxceycpLmpvaW4oZXNjT3BlbilcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXH0nKS5qb2luKGVzY0Nsb3NlKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLCcpLmpvaW4oZXNjQ29tbWEpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwuJykuam9pbihlc2NQZXJpb2QpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZUJyYWNlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChlc2NTbGFzaCkuam9pbignXFxcXCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjT3Blbikuam9pbigneycpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ2xvc2UpLmpvaW4oJ30nKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0NvbW1hKS5qb2luKCcsJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NQZXJpb2QpLmpvaW4oJy4nKTtcbn1cblxuXG4vLyBCYXNpY2FsbHkganVzdCBzdHIuc3BsaXQoXCIsXCIpLCBidXQgaGFuZGxpbmcgY2FzZXNcbi8vIHdoZXJlIHdlIGhhdmUgbmVzdGVkIGJyYWNlZCBzZWN0aW9ucywgd2hpY2ggc2hvdWxkIGJlXG4vLyB0cmVhdGVkIGFzIGluZGl2aWR1YWwgbWVtYmVycywgbGlrZSB7YSx7YixjfSxkfVxuZnVuY3Rpb24gcGFyc2VDb21tYVBhcnRzKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gWycnXTtcblxuICB2YXIgcGFydHMgPSBbXTtcbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcblxuICBpZiAoIW0pXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnLCcpO1xuXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIGJvZHkgPSBtLmJvZHk7XG4gIHZhciBwb3N0ID0gbS5wb3N0O1xuICB2YXIgcCA9IHByZS5zcGxpdCgnLCcpO1xuXG4gIHBbcC5sZW5ndGgtMV0gKz0gJ3snICsgYm9keSArICd9JztcbiAgdmFyIHBvc3RQYXJ0cyA9IHBhcnNlQ29tbWFQYXJ0cyhwb3N0KTtcbiAgaWYgKHBvc3QubGVuZ3RoKSB7XG4gICAgcFtwLmxlbmd0aC0xXSArPSBwb3N0UGFydHMuc2hpZnQoKTtcbiAgICBwLnB1c2guYXBwbHkocCwgcG9zdFBhcnRzKTtcbiAgfVxuXG4gIHBhcnRzLnB1c2guYXBwbHkocGFydHMsIHApO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9wKHN0cikge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gW107XG5cbiAgLy8gSSBkb24ndCBrbm93IHdoeSBCYXNoIDQuMyBkb2VzIHRoaXMsIGJ1dCBpdCBkb2VzLlxuICAvLyBBbnl0aGluZyBzdGFydGluZyB3aXRoIHt9IHdpbGwgaGF2ZSB0aGUgZmlyc3QgdHdvIGJ5dGVzIHByZXNlcnZlZFxuICAvLyBidXQgKm9ubHkqIGF0IHRoZSB0b3AgbGV2ZWwsIHNvIHt9LGF9YiB3aWxsIG5vdCBleHBhbmQgdG8gYW55dGhpbmcsXG4gIC8vIGJ1dCBhe30sYn1jIHdpbGwgYmUgZXhwYW5kZWQgdG8gW2F9YyxhYmNdLlxuICAvLyBPbmUgY291bGQgYXJndWUgdGhhdCB0aGlzIGlzIGEgYnVnIGluIEJhc2gsIGJ1dCBzaW5jZSB0aGUgZ29hbCBvZlxuICAvLyB0aGlzIG1vZHVsZSBpcyB0byBtYXRjaCBCYXNoJ3MgcnVsZXMsIHdlIGVzY2FwZSBhIGxlYWRpbmcge31cbiAgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICd7fScpIHtcbiAgICBzdHIgPSAnXFxcXHtcXFxcfScgKyBzdHIuc3Vic3RyKDIpO1xuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChlc2NhcGVCcmFjZXMoc3RyKSwgdHJ1ZSkubWFwKHVuZXNjYXBlQnJhY2VzKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkoZSkge1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gZW1icmFjZShzdHIpIHtcbiAgcmV0dXJuICd7JyArIHN0ciArICd9Jztcbn1cbmZ1bmN0aW9uIGlzUGFkZGVkKGVsKSB7XG4gIHJldHVybiAvXi0/MFxcZC8udGVzdChlbCk7XG59XG5cbmZ1bmN0aW9uIGx0ZShpLCB5KSB7XG4gIHJldHVybiBpIDw9IHk7XG59XG5mdW5jdGlvbiBndGUoaSwgeSkge1xuICByZXR1cm4gaSA+PSB5O1xufVxuXG5mdW5jdGlvbiBleHBhbmQoc3RyLCBpc1RvcCkge1xuICB2YXIgZXhwYW5zaW9ucyA9IFtdO1xuXG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG4gIGlmICghbSB8fCAvXFwkJC8udGVzdChtLnByZSkpIHJldHVybiBbc3RyXTtcblxuICB2YXIgaXNOdW1lcmljU2VxdWVuY2UgPSAvXi0/XFxkK1xcLlxcLi0/XFxkKyg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNBbHBoYVNlcXVlbmNlID0gL15bYS16QS1aXVxcLlxcLlthLXpBLVpdKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc1NlcXVlbmNlID0gaXNOdW1lcmljU2VxdWVuY2UgfHwgaXNBbHBoYVNlcXVlbmNlO1xuICB2YXIgaXNPcHRpb25zID0gbS5ib2R5LmluZGV4T2YoJywnKSA+PSAwO1xuICBpZiAoIWlzU2VxdWVuY2UgJiYgIWlzT3B0aW9ucykge1xuICAgIC8vIHthfSxifVxuICAgIGlmIChtLnBvc3QubWF0Y2goLywuKlxcfS8pKSB7XG4gICAgICBzdHIgPSBtLnByZSArICd7JyArIG0uYm9keSArIGVzY0Nsb3NlICsgbS5wb3N0O1xuICAgICAgcmV0dXJuIGV4cGFuZChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gW3N0cl07XG4gIH1cblxuICB2YXIgbjtcbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICBuID0gbS5ib2R5LnNwbGl0KC9cXC5cXC4vKTtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VDb21tYVBhcnRzKG0uYm9keSk7XG4gICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyB4e3thLGJ9fXkgPT0+IHh7YX15IHh7Yn15XG4gICAgICBuID0gZXhwYW5kKG5bMF0sIGZhbHNlKS5tYXAoZW1icmFjZSk7XG4gICAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgICAgICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICAgICAgICA6IFsnJ107XG4gICAgICAgIHJldHVybiBwb3N0Lm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgcmV0dXJuIG0ucHJlICsgblswXSArIHA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIG4gaXMgdGhlIHBhcnRzLCBhbmQgd2Uga25vdyBpdCdzIG5vdCBhIGNvbW1hIHNldFxuICAvLyB3aXRoIGEgc2luZ2xlIGVudHJ5LlxuXG4gIC8vIG5vIG5lZWQgdG8gZXhwYW5kIHByZSwgc2luY2UgaXQgaXMgZ3VhcmFudGVlZCB0byBiZSBmcmVlIG9mIGJyYWNlLXNldHNcbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgIDogWycnXTtcblxuICB2YXIgTjtcblxuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIHZhciB4ID0gbnVtZXJpYyhuWzBdKTtcbiAgICB2YXIgeSA9IG51bWVyaWMoblsxXSk7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5tYXgoblswXS5sZW5ndGgsIG5bMV0ubGVuZ3RoKVxuICAgIHZhciBpbmNyID0gbi5sZW5ndGggPT0gM1xuICAgICAgPyBNYXRoLmFicyhudW1lcmljKG5bMl0pKVxuICAgICAgOiAxO1xuICAgIHZhciB0ZXN0ID0gbHRlO1xuICAgIHZhciByZXZlcnNlID0geSA8IHg7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGluY3IgKj0gLTE7XG4gICAgICB0ZXN0ID0gZ3RlO1xuICAgIH1cbiAgICB2YXIgcGFkID0gbi5zb21lKGlzUGFkZGVkKTtcblxuICAgIE4gPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSB4OyB0ZXN0KGksIHkpOyBpICs9IGluY3IpIHtcbiAgICAgIHZhciBjO1xuICAgICAgaWYgKGlzQWxwaGFTZXF1ZW5jZSkge1xuICAgICAgICBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcbiAgICAgICAgaWYgKGMgPT09ICdcXFxcJylcbiAgICAgICAgICBjID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjID0gU3RyaW5nKGkpO1xuICAgICAgICBpZiAocGFkKSB7XG4gICAgICAgICAgdmFyIG5lZWQgPSB3aWR0aCAtIGMubGVuZ3RoO1xuICAgICAgICAgIGlmIChuZWVkID4gMCkge1xuICAgICAgICAgICAgdmFyIHogPSBuZXcgQXJyYXkobmVlZCArIDEpLmpvaW4oJzAnKTtcbiAgICAgICAgICAgIGlmIChpIDwgMClcbiAgICAgICAgICAgICAgYyA9ICctJyArIHogKyBjLnNsaWNlKDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjID0geiArIGM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBOLnB1c2goYyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIE4gPSBjb25jYXRNYXAobiwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGV4cGFuZChlbCwgZmFsc2UpIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBOLmxlbmd0aDsgaisrKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb3N0Lmxlbmd0aDsgaysrKSB7XG4gICAgICB2YXIgZXhwYW5zaW9uID0gcHJlICsgTltqXSArIHBvc3Rba107XG4gICAgICBpZiAoIWlzVG9wIHx8IGlzU2VxdWVuY2UgfHwgZXhwYW5zaW9uKVxuICAgICAgICBleHBhbnNpb25zLnB1c2goZXhwYW5zaW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwYW5zaW9ucztcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeHMsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHggPSBmbih4c1tpXSwgaSk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSByZXMucHVzaC5hcHBseShyZXMsIHgpO1xuICAgICAgICBlbHNlIHJlcy5wdXNoKHgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxyXG4gKiAgVHlwZXNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiBDU0ludGVyZmFjZSAtIHY3LjAuMFxyXG4gKlxyXG4gKiAgQ3VzdG9tIENTSW50ZXJmYWNlLmpzIGltcGxlbWVudGF0aW9uIGluIFR5cGVzY3JpcHQuXHJcbiAqICBUaGUgaW1wbGVtZW50YXRpb24gY292ZXJzIHZlcnNpb24gNy54IGZyb20gb3JpZ2luYWwgcmVwb3NpdG9yeSwgd2l0aCBhbGwgZnVuY3Rpb25hbGl0aWVzLlxyXG4gKiAgQWxsIGRvY3VtZW50YXRpb24gY29tbWVudHMgd2VyZSBhbHNvIGJhc2VkIG9uIG9yaWdpbmFsLlxyXG4gKlxyXG4gKlxyXG4gKiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgQ3JlYXRpdmUgQ2xvdWQgZXh0ZW5zaW9ucyBkZXZlbG9wbWVudFxyXG4gKiAgcGxlYXNlIHJlZmVyIHRvIG9yaWdpbmFsIEdpdGh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vQWRvYmUtQ0VQL0NFUC1SZXNvdXJjZXNcclxuICovXHJcblwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGNsYXNzIENTSW50ZXJmYWNlXHJcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHRoZSBDRVAgZXh0ZW5zaWJpbGl0eSBpbmZyYXN0cnVjdHVyZS5cclxuICogSW5zdGFudGlhdGUgdGhpcyBvYmplY3QgYW5kIHVzZSBpdCB0bzpcclxuICogPHVsPlxyXG4gKiA8bGk+QWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBob3N0IGFwcGxpY2F0aW9uIGluIHdoaWNoIGFuIGV4dGVuc2lvbiBpcyBydW5uaW5nPC9saT5cclxuICogPGxpPkxhdW5jaCBhbiBleHRlbnNpb248L2xpPlxyXG4gKiA8bGk+UmVnaXN0ZXIgaW50ZXJlc3QgaW4gZXZlbnQgbm90aWZpY2F0aW9ucywgYW5kIGRpc3BhdGNoIGV2ZW50czwvbGk+XHJcbiAqIDwvdWw+XHJcbiAqXHJcbiAqL1xyXG52YXIgQ1NJbnRlcmZhY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ1NJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXNlciBjYW4gYWRkIHRoaXMgZXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIG5hdGl2ZSBhcHBsaWNhdGlvbiB0aGVtZSBjb2xvciBjaGFuZ2VzLlxyXG4gICAgICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGdpdmVzIGV4dGVuc2lvbnMgYWJpbGl0eSB0byBmaW5lLXR1bmUgdGhlaXIgdGhlbWUgY29sb3IgYWZ0ZXIgdGhlXHJcbiAgICAgICAgICogZ2xvYmFsIHRoZW1lIGNvbG9yIGhhcyBiZWVuIGNoYW5nZWQuXHJcbiAgICAgICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHNob3VsZCBiZSBsaWtlIGJlbG93OlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAvLyBldmVudCBpcyBhIENTRXZlbnQgb2JqZWN0LCBidXQgdXNlciBjYW4gaWdub3JlIGl0LlxyXG4gICAgICAgICAqIGZ1bmN0aW9uIE9uQXBwVGhlbWVDb2xvckNoYW5nZWQoZXZlbnQpXHJcbiAgICAgICAgICoge1xyXG4gICAgICAgICAqICAgIC8vIFNob3VsZCBnZXQgYSBsYXRlc3QgSG9zdEVudmlyb25tZW50IG9iamVjdCBmcm9tIGFwcGxpY2F0aW9uLlxyXG4gICAgICAgICAqICAgIHZhciBza2luSW5mbyA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0SG9zdEVudmlyb25tZW50KCkpLmFwcFNraW5JbmZvO1xyXG4gICAgICAgICAqICAgIC8vIEdldHMgdGhlIHN0eWxlIGluZm9ybWF0aW9uIHN1Y2ggYXMgY29sb3IgaW5mbyBmcm9tIHRoZSBza2luSW5mbyxcclxuICAgICAgICAgKiAgICAvLyBhbmQgcmVkcmF3IGFsbCBVSSBjb250cm9scyBvZiB5b3VyIGV4dGVuc2lvbiBhY2NvcmRpbmcgdG8gdGhlIHN0eWxlIGluZm8uXHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuVEhFTUVfQ09MT1JfQ0hBTkdFRF9FVkVOVCA9IFwiY29tLmFkb2JlLmNzeHMuZXZlbnRzLlRoZW1lQ29sb3JDaGFuZ2VkXCI7XHJcbiAgICAgICAgLyoqIFRoZSBob3N0IGVudmlyb25tZW50IGRhdGEgb2JqZWN0LiAqL1xyXG4gICAgICAgIHRoaXMuaG9zdEVudmlyb25tZW50ID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRIb3N0RW52aXJvbm1lbnQoKSk7XHJcbiAgICB9XHJcbiAgICAvKiogUmV0cmlldmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBob3N0IGVudmlyb25tZW50IGluIHdoaWNoIHRoZVxyXG4gICAgICogIGV4dGVuc2lvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cclxuICAgICAqXHJcbiAgICAgKiAgIEByZXR1cm4gQSBcXGMgI0hvc3RFbnZpcm9ubWVudCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRIb3N0RW52aXJvbm1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0RW52aXJvbm1lbnQgPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEhvc3RFbnZpcm9ubWVudCgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ob3N0RW52aXJvbm1lbnQ7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqIENsb3NlcyB0aGlzIGV4dGVuc2lvbi4gKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5jbG9zZUV4dGVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5jbG9zZUV4dGVuc2lvbigpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgcGF0aCBmb3Igd2hpY2ggYSBjb25zdGFudCBpcyBkZWZpbmVkIGluIHRoZSBzeXN0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGhUeXBlIFRoZSBwYXRoLXR5cGUgY29uc3RhbnQgZGVmaW5lZCBpbiBcXGMgI1N5c3RlbVBhdGggLFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gVGhlIHBsYXRmb3JtLXNwZWNpZmljIHN5c3RlbSBwYXRoIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldFN5c3RlbVBhdGggPSBmdW5jdGlvbiAocGF0aFR5cGUpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IGRlY29kZVVSSSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRTeXN0ZW1QYXRoKHBhdGhUeXBlKSk7XHJcbiAgICAgICAgdmFyIE9TVmVyc2lvbiA9IHRoaXMuZ2V0T1NJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgIGlmIChPU1ZlcnNpb24uaW5kZXhPZihcIldpbmRvd3NcIikgPj0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKFwiZmlsZTovLy9cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKE9TVmVyc2lvbi5pbmRleE9mKFwiTWFjXCIpID49IDApIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZShcImZpbGU6Ly9cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogRXZhbHVhdGVzIGEgSmF2YVNjcmlwdCBzY3JpcHQsIHdoaWNoIGNhbiB1c2UgdGhlIEphdmFTY3JpcHQgRE9NXHJcbiAgICAgKiBvZiB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2NyaXB0ICAgIFRoZSBKYXZhU2NyaXB0IHNjcmlwdC5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAgT3B0aW9uYWwuIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgcmVzdWx0IG9mIGV4ZWN1dGlvbi5cclxuICAgICAqICAgICAgICAgIElmIGV4ZWN1dGlvbiBmYWlscywgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBlcnJvciBtZXNzYWdlIFxcYyBFdmFsU2NyaXB0X0Vyck1lc3NhZ2UuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5ldmFsU2NyaXB0ID0gZnVuY3Rpb24gKHNjcmlwdCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIChyZXN1bHQpIHsgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uZXZhbFNjcmlwdChzY3JpcHQsIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICogaW4gd2hpY2ggdGhlIGV4dGVuc2lvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFRoZSB1bmlxdWUgSUQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0QXBwbGljYXRpb25JRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXBwSWQgPSB0aGlzLmhvc3RFbnZpcm9ubWVudC5hcHBJZDtcclxuICAgICAgICByZXR1cm4gYXBwSWQ7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgaG9zdCBjYXBhYmlsaXR5IGluZm9ybWF0aW9uIGZvciB0aGUgYXBwbGljYXRpb25cclxuICAgICAqIGluIHdoaWNoIHRoZSBleHRlbnNpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBIFxcYyAjSG9zdENhcGFiaWxpdGllcyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRIb3N0Q2FwYWJpbGl0aWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob3N0Q2FwYWJpbGl0aWVzID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRIb3N0Q2FwYWJpbGl0aWVzKCkpO1xyXG4gICAgICAgIHJldHVybiBob3N0Q2FwYWJpbGl0aWVzO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlcnMgYSBDRVAgZXZlbnQgcHJvZ3JhbW1hdGljYWxseS4gWW95IGNhbiB1c2UgaXQgdG8gZGlzcGF0Y2hcclxuICAgICAqIGFuIGV2ZW50IG9mIGEgcHJlZGVmaW5lZCB0eXBlLCBvciBvZiBhIHR5cGUgeW91IGhhdmUgZGVmaW5lZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgQSBcXGMgQ1NFdmVudCBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5kYXRhID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhbiBpbnRlcmVzdCBpbiBhIENFUCBldmVudCBvZiBhIHBhcnRpY3VsYXIgdHlwZSwgYW5kXHJcbiAgICAgKiBhc3NpZ25zIGFuIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBUaGUgZXZlbnQgaW5mcmFzdHJ1Y3R1cmUgbm90aWZpZXMgeW91ciBleHRlbnNpb24gd2hlbiBldmVudHMgb2YgdGhpcyB0eXBlIG9jY3VyLFxyXG4gICAgICogcGFzc2luZyB0aGUgZXZlbnQgb2JqZWN0IHRvIHRoZSByZWdpc3RlcmVkIGhhbmRsZXIgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGUgICAgIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0eXBlIG9mIGludGVyZXN0LlxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBKYXZhU2NyaXB0IGhhbmRsZXIgZnVuY3Rpb24gb3IgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIG9iaiAgICAgIE9wdGlvbmFsLCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGhhbmRsZXIgbWV0aG9kLCBpZiBhbnkuXHJcbiAgICAgKiAgICAgICAgIERlZmF1bHQgaXMgbnVsbC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9iaikge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9iaik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0eXBlIG9mIGludGVyZXN0LlxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyICBUaGUgSmF2YVNjcmlwdCBoYW5kbGVyIGZ1bmN0aW9uIG9yIG1ldGhvZCB0aGF0IHdhcyByZWdpc3RlcmVkLlxyXG4gICAgICogQHBhcmFtIG9iaiAgICAgICBPcHRpb25hbCwgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBoYW5kbGVyIG1ldGhvZCwgaWYgYW55LlxyXG4gICAgICogICAgICAgICAgRGVmYXVsdCBpcyBudWxsLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb2JqKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb2JqKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGFuZCBsYXVuY2hlcyBhbm90aGVyIGV4dGVuc2lvbiwgb3IgYWN0aXZhdGVzIHRoZSBleHRlbnNpb24gaWYgaXQgaXMgYWxyZWFkeSBsb2FkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbklkICAgICAgIFRoZSBleHRlbnNpb24ncyB1bmlxdWUgaWRlbnRpZmllci5cclxuICAgICAqIEBwYXJhbSBzdGFydHVwUGFyYW1zICAgICBOb3QgY3VycmVudGx5IHVzZWQsIHBhc3MgXCJcIi5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogVG8gbGF1bmNoIHRoZSBleHRlbnNpb24gXCJoZWxwXCIgd2l0aCBJRCBcIkhMUFwiIGZyb20gdGhpcyBleHRlbnNpb24sIGNhbGw6XHJcbiAgICAgKiA8Y29kZT5yZXF1ZXN0T3BlbkV4dGVuc2lvbihcIkhMUFwiLCBcIlwiKTsgPC9jb2RlPlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnJlcXVlc3RPcGVuRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGV4dGVuc2lvbklkLCBwYXJhbXMpIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5yZXF1ZXN0T3BlbkV4dGVuc2lvbihleHRlbnNpb25JZCwgcGFyYW1zKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgbGlzdCBvZiBleHRlbnNpb25zIGN1cnJlbnRseSBsb2FkZWQgaW4gdGhlIGN1cnJlbnQgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAqIFRoZSBleHRlbnNpb24gbGlzdCBpcyBpbml0aWFsaXplZCBvbmNlLCBhbmQgcmVtYWlucyB0aGUgc2FtZSBkdXJpbmcgdGhlIGxpZmV0aW1lXHJcbiAgICAgKiBvZiB0aGUgQ0VQIHNlc3Npb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbklkcyAgT3B0aW9uYWwsIGFuIGFycmF5IG9mIHVuaXF1ZSBpZGVudGlmaWVycyBmb3IgZXh0ZW5zaW9ucyBvZiBpbnRlcmVzdC5cclxuICAgICAqICAgICAgICAgIElmIG9taXR0ZWQsIHJldHJpZXZlcyBkYXRhIGZvciBhbGwgZXh0ZW5zaW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFplcm8gb3IgbW9yZSBcXGMgI0V4dGVuc2lvbiBvYmplY3RzLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uIChleHRlbnNpb25JZHMpIHtcclxuICAgICAgICB2YXIgZXh0ZW5zaW9uSWRzU3RyID0gSlNPTi5zdHJpbmdpZnkoZXh0ZW5zaW9uSWRzKTtcclxuICAgICAgICB2YXIgZXh0ZW5zaW9uc1N0ciA9IHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEV4dGVuc2lvbnMoZXh0ZW5zaW9uSWRzU3RyKTtcclxuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IEpTT04ucGFyc2UoZXh0ZW5zaW9uc1N0cik7XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvbnM7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgbmV0d29yay1yZWxhdGVkIHByZWZlcmVuY2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQSBKYXZhU2NyaXB0IG9iamVjdCBjb250YWluaW5nIG5ldHdvcmsgcHJlZmVyZW5jZXMuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXROZXR3b3JrUHJlZmVyZW5jZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldE5ldHdvcmtQcmVmZXJlbmNlcygpO1xyXG4gICAgICAgIHZhciBuZXR3b3JrUHJlID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiBuZXR3b3JrUHJlO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHJlc291cmNlIGJ1bmRsZSBmb3IgdGhpcyBleHRlbnNpb24gd2l0aCBwcm9wZXJ0eSB2YWx1ZXNcclxuICAgICAqIGZvciB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBhbmQgbG9jYWxlLlxyXG4gICAgICogVG8gc3VwcG9ydCBtdWx0aXBsZSBsb2NhbGVzLCB5b3UgbXVzdCBkZWZpbmUgYSBwcm9wZXJ0eSBmaWxlIGZvciBlYWNoIGxvY2FsZSxcclxuICAgICAqIGNvbnRhaW5pbmcga2V5ZWQgZGlzcGxheS1zdHJpbmcgdmFsdWVzIGZvciB0aGF0IGxvY2FsZS5cclxuICAgICAqIFNlZSBsb2NhbGl6YXRpb24gZG9jdW1lbnRhdGlvbiBmb3IgRXh0ZW5zaW9uIEJ1aWxkZXIgYW5kIHJlbGF0ZWQgcHJvZHVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogS2V5cyBjYW4gYmUgaW4gdGhlXHJcbiAgICAgKiBmb3JtIDxjb2RlPmtleS52YWx1ZT1cImxvY2FsaXplZCBzdHJpbmdcIjwvY29kZT4sIGZvciB1c2UgaW4gSFRNTCB0ZXh0IGVsZW1lbnRzLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIGluIHRoaXMgaW5wdXQgZWxlbWVudCwgdGhlIGxvY2FsaXplZCBcXGMga2V5LnZhbHVlIHN0cmluZyBpcyBkaXNwbGF5ZWRcclxuICAgICAqIGluc3RlYWQgb2YgdGhlIGVtcHR5IFxcYyB2YWx1ZSBzdHJpbmc6XHJcbiAgICAgKlxyXG4gICAgICogPGNvZGU+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlwiIGRhdGEtbG9jYWxlPVwia2V5XCIvPjwvY29kZT5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvdXJjZSBidW5kbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5pbml0UmVzb3VyY2VCdW5kbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc291cmNlQnVuZGxlID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5pbml0UmVzb3VyY2VCdW5kbGUoKSk7XHJcbiAgICAgICAgdmFyIHJlc0VsbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2NhbGVdJyk7XHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCByZXNFbG1zLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNFbCA9IHJlc0VsbXNbbl07XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVzb3VyY2Uga2V5IGZyb20gdGhlIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIHZhciByZXNLZXkgPSByZXNFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYWxlJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNLZXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBhbGwgdGhlIHJlc291cmNlcyB0aGF0IHN0YXJ0IHdpdGggdGhlIGtleS5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiByZXNvdXJjZUJ1bmRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihyZXNLZXkpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNWYWx1ZSA9IHJlc291cmNlQnVuZGxlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID09IHJlc0tleS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0VsLmlubmVySFRNTCA9IHJlc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCcuJyA9PSBrZXkuY2hhckF0KHJlc0tleS5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cktleSA9IGtleS5zdWJzdHJpbmcocmVzS2V5Lmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzRWxbYXR0cktleV0gPSByZXNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzb3VyY2VCdW5kbGU7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZXMgaW5zdGFsbGF0aW9uIGluZm9ybWF0aW9uIHRvIGEgZmlsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBmaWxlIHBhdGguXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5kdW1wSW5zdGFsbGF0aW9uSW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18uZHVtcEluc3RhbGxhdGlvbkluZm8oKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB2ZXJzaW9uIGluZm9ybWF0aW9uIGZvciB0aGUgY3VycmVudCBPcGVyYXRpbmcgU3lzdGVtLFxyXG4gICAgICogU2VlIGh0dHA6Ly93d3cudXNlcmFnZW50c3RyaW5nLmNvbS9wYWdlcy9DaHJvbWUvIGZvciBDaHJvbWUgXFxjIG5hdmlnYXRvci51c2VyQWdlbnQgdmFsdWVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQSBzdHJpbmcgY29udGFpbmluZyB0aGUgT1MgdmVyc2lvbiwgb3IgXCJ1bmtub3duIE9wZXJhdGlvbiBTeXN0ZW1cIi5cclxuICAgICAqIElmIHVzZXIgY3VzdG9taXplcyB0aGUgVXNlciBBZ2VudCBieSBzZXR0aW5nIENFRiBjb21tYW5kIHBhcmFtZXRlciBcIi0tdXNlci1hZ2VudFwiLCBvbmx5XHJcbiAgICAgKiBcIk1hYyBPUyBYXCIgb3IgXCJXaW5kb3dzXCIgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldE9TSW5mb3JtYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgaWYgKChuYXZpZ2F0b3IucGxhdGZvcm0gPT0gXCJXaW4zMlwiKSB8fCAobmF2aWdhdG9yLnBsYXRmb3JtID09IFwiV2luZG93c1wiKSkge1xyXG4gICAgICAgICAgICB2YXIgd2luVmVyc2lvbiA9IFwiV2luZG93c1wiO1xyXG4gICAgICAgICAgICB2YXIgd2luQml0ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93c1wiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDUuMFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyAyMDAwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNS4xXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIFhQXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNS4yXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIFNlcnZlciAyMDAzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNi4wXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIFZpc3RhXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNi4xXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIDdcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA2LjJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgOFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDYuM1wiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyA4LjFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCAxMFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyAxMFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV09XNjRcIikgPiAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZihcIldpbjY0XCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5CaXQgPSBcIiA2NC1iaXRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbkJpdCA9IFwiIDMyLWJpdFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5WZXJzaW9uICsgd2luQml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgobmF2aWdhdG9yLnBsYXRmb3JtID09IFwiTWFjSW50ZWxcIikgfHwgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PSBcIk1hY2ludG9zaFwiKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJNYWMgT1MgWFwiO1xyXG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoXCJNYWMgT1MgWFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB1c2VyQWdlbnQuc3Vic3RyaW5nKHVzZXJBZ2VudC5pbmRleE9mKFwiTWFjIE9TIFhcIiksIHVzZXJBZ2VudC5pbmRleE9mKFwiKVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvXy9nLCBcIi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiVW5rbm93biBPcGVyYXRpb24gU3lzdGVtXCI7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVucyBhIHBhZ2UgaW4gdGhlIGRlZmF1bHQgc3lzdGVtIGJyb3dzZXIuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsICBUaGUgVVJMIG9mIHRoZSBwYWdlL2ZpbGUgdG8gb3Blbiwgb3IgdGhlIGVtYWlsIGFkZHJlc3MuXHJcbiAgICAgKiBNdXN0IHVzZSBIVFRQL0hUVFBTL2ZpbGUvbWFpbHRvIHByb3RvY29sLiBGb3IgZXhhbXBsZTpcclxuICAgICAqICAgXCJodHRwOi8vd3d3LmFkb2JlLmNvbVwiXHJcbiAgICAgKiAgIFwiaHR0cHM6Ly9naXRodWIuY29tXCJcclxuICAgICAqICAgXCJmaWxlOi8vL0M6L2xvZy50eHRcIlxyXG4gICAgICogICBcIm1haWx0bzp0ZXN0QGFkb2JlLmNvbVwiXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBPbmUgb2YgdGhlc2UgZXJyb3IgY29kZXM6XFxuXHJcbiAgICAgKiAgICAgIDx1bD5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT5OT19FUlJPUiAtIDA8L2xpPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPkVSUl9VTktOT1dOIC0gMTwvbGk+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+RVJSX0lOVkFMSURfUEFSQU1TIC0gMjwvbGk+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+RVJSX0lOVkFMSURfVVJMIC0gMjAxPC9saT5cXG5cclxuICAgICAqICAgICAgPC91bD5cXG5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLm9wZW5VUkxJbkRlZmF1bHRCcm93c2VyID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHJldHVybiBjZXAudXRpbC5vcGVuVVJMSW5EZWZhdWx0QnJvd3Nlcih1cmwpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGV4dGVuc2lvbiBJRC5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gZXh0ZW5zaW9uIElELlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uSUQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEV4dGVuc2lvbklkKCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHNjYWxlIGZhY3RvciBvZiBzY3JlZW4uXHJcbiAgICAgKiBPbiBXaW5kb3dzIHBsYXRmb3JtLCB0aGUgdmFsdWUgb2Ygc2NhbGUgZmFjdG9yIG1pZ2h0IGJlIGRpZmZlcmVudCBmcm9tIG9wZXJhdGluZyBzeXN0ZW0ncyBzY2FsZSBmYWN0b3IsXHJcbiAgICAgKiBzaW5jZSBob3N0IGFwcGxpY2F0aW9uIG1heSB1c2UgaXRzIHNlbGYtZGVmaW5lZCBzY2FsZSBmYWN0b3IuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIE9uZSBvZiB0aGUgZm9sbG93aW5nIGZsb2F0IG51bWJlci5cclxuICAgICAqICAgICAgPHVsPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPiAtMS4wIHdoZW4gZXJyb3Igb2NjdXJzIDwvbGk+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+IDEuMCBtZWFucyBub3JtYWwgc2NyZWVuIDwvbGk+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+ID4xLjAgbWVhbnMgSGlEUEkgc2NyZWVuIDwvbGk+XFxuXHJcbiAgICAgKiAgICAgIDwvdWw+XFxuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRTY2FsZUZhY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0U2NhbGVGYWN0b3IoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIGhhbmRsZXIgdG8gZGV0ZWN0IGFueSBjaGFuZ2VzIG9mIHNjYWxlIGZhY3Rvci4gVGhpcyBvbmx5IHdvcmtzIG9uIE1hYy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyICAgVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHNjYWxlIGZhY3RvciBpcyBjaGFuZ2VkLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnNldFNjYWxlRmFjdG9yQ2hhbmdlZEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnNldFNjYWxlRmFjdG9yQ2hhbmdlZEhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgY3VycmVudCBBUEkgdmVyc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQXBpVmVyc2lvbiBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0Q3VycmVudEFwaVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFwaVZlcnNpb24gPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEN1cnJlbnRBcGlWZXJzaW9uKCkpO1xyXG4gICAgICAgIHJldHVybiBhcGlWZXJzaW9uO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHBhbmVsIGZseW91dCBtZW51IGJ5IGFuIFhNTC5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIFwiY29tLmFkb2JlLmNzeHMuZXZlbnRzLmZseW91dE1lbnVDbGlja2VkXCIgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gYVxyXG4gICAgICogbWVudSBpdGVtIGlzIGNsaWNrZWQuXHJcbiAgICAgKiBUaGUgXCJkYXRhXCIgYXR0cmlidXRlIG9mIGV2ZW50IGlzIGFuIG9iamVjdCB3aGljaCBjb250YWlucyBcIm1lbnVJZFwiIGFuZCBcIm1lbnVOYW1lXCIgYXR0cmlidXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBSZWdpc3RlciBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIFwiY29tLmFkb2JlLmNzeHMuZXZlbnRzLmZseW91dE1lbnVPcGVuZWRcIiBhbmQgXCJjb20uYWRvYmUuY3N4cy5ldmVudHMuZmx5b3V0TWVudUNsb3NlZFwiXHJcbiAgICAgKiByZXNwZWN0aXZlbHkgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gZmx5b3V0IG1lbnUgaXMgb3BlbmVkIG9yIGNsb3NlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudSAgICAgQSBYTUwgc3RyaW5nIHdoaWNoIGRlc2NyaWJlcyBtZW51IHN0cnVjdHVyZS5cclxuICAgICAqIEFuIGV4YW1wbGUgbWVudSBYTUw6XHJcbiAgICAgKiA8TWVudT5cclxuICAgICAqICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDFcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMVwiIEVuYWJsZWQ9XCJ0cnVlXCIgQ2hlY2tlZD1cImZhbHNlXCIvPlxyXG4gICAgICogICA8TWVudUl0ZW0gTGFiZWw9XCJUZXN0RXhhbXBsZTJcIj5cclxuICAgICAqICAgICA8TWVudUl0ZW0gTGFiZWw9XCJUZXN0RXhhbXBsZTItMVwiID5cclxuICAgICAqICAgICAgIDxNZW51SXRlbSBMYWJlbD1cIlRlc3RFeGFtcGxlMi0xLTFcIiBFbmFibGVkPVwiZmFsc2VcIiBDaGVja2VkPVwidHJ1ZVwiLz5cclxuICAgICAqICAgICA8L01lbnVJdGVtPlxyXG4gICAgICogICAgIDxNZW51SXRlbSBMYWJlbD1cIlRlc3RFeGFtcGxlMi0yXCIgRW5hYmxlZD1cInRydWVcIiBDaGVja2VkPVwidHJ1ZVwiLz5cclxuICAgICAqICAgPC9NZW51SXRlbT5cclxuICAgICAqICAgPE1lbnVJdGVtIExhYmVsPVwiLS0tXCIgLz5cclxuICAgICAqICAgPE1lbnVJdGVtIExhYmVsPVwiVGVzdEV4YW1wbGUzXCIgRW5hYmxlZD1cImZhbHNlXCIgQ2hlY2tlZD1cImZhbHNlXCIvPlxyXG4gICAgICogPC9NZW51PlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnNldFBhbmVsRmx5b3V0TWVudSA9IGZ1bmN0aW9uIChtZW51KSB7XHJcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIG1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwic2V0UGFuZWxGbHlvdXRNZW51XCIsIG1lbnUpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIG1lbnUgaXRlbSBpbiB0aGUgZXh0ZW5zaW9uIHdpbmRvdydzIGZseW91dCBtZW51LCBieSBzZXR0aW5nIHRoZSBlbmFibGVkXHJcbiAgICAgKiBhbmQgc2VsZWN0aW9uIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51SXRlbUxhYmVsICAgIFRoZSBtZW51IGl0ZW0gbGFiZWwuXHJcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAgICAgICAgVHJ1ZSB0byBlbmFibGUgdGhlIGl0ZW0sIGZhbHNlIHRvIGRpc2FibGUgaXQgKGdyYXkgaXQgb3V0KS5cclxuICAgICAqIEBwYXJhbSBjaGVja2VkICAgICAgICBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSwgZmFsc2UgdG8gZGVzZWxlY3QgaXQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBmYWxzZSB3aGVuIHRoZSBob3N0IGFwcGxpY2F0aW9uIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBmdW5jdGlvbmFsaXR5IChIb3N0Q2FwYWJpbGl0aWVzLkVYVEVOREVEX1BBTkVMX01FTlUgaXMgZmFsc2UpLlxyXG4gICAgICogICAgICAgICBGYWlscyBzaWxlbnRseSBpZiBtZW51IGxhYmVsIGlzIGludmFsaWQuXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBIb3N0Q2FwYWJpbGl0aWVzLkVYVEVOREVEX1BBTkVMX01FTlVcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnVwZGF0ZVBhbmVsTWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW1MYWJlbCwgZW5hYmxlZCwgY2hlY2tlZCkge1xyXG4gICAgICAgIHZhciByZXQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5nZXRIb3N0Q2FwYWJpbGl0aWVzKCkuRVhURU5ERURfUEFORUxfTUVOVSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbVN0YXR1cyA9IG5ldyBNZW51SXRlbVN0YXR1cyhtZW51SXRlbUxhYmVsLCBlbmFibGVkLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgcmV0ID0gd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcInVwZGF0ZVBhbmVsTWVudUl0ZW1cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbVN0YXR1cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNvbnRleHQgbWVudSBieSBYTUwgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogVGhlcmUgYXJlIGEgbnVtYmVyIG9mIGNvbnZlbnRpb25zIHVzZWQgdG8gY29tbXVuaWNhdGUgd2hhdCB0eXBlIG9mIG1lbnUgaXRlbSB0byBjcmVhdGUgYW5kIGhvdyBpdCBzaG91bGQgYmUgaGFuZGxlZC5cclxuICAgICAqIC0gYW4gaXRlbSB3aXRob3V0IG1lbnUgSUQgb3IgbWVudSBuYW1lIGlzIGRpc2FibGVkIGFuZCBpcyBub3Qgc2hvd24uXHJcbiAgICAgKiAtIGlmIHRoZSBpdGVtIG5hbWUgaXMgXCItLS1cIiAodGhyZWUgaHlwaGVucykgdGhlbiBpdCBpcyB0cmVhdGVkIGFzIGEgc2VwYXJhdG9yLiBUaGUgbWVudSBJRCBpbiB0aGlzIGNhc2Ugd2lsbCBhbHdheXMgYmUgTlVMTC5cclxuICAgICAqIC0gQ2hlY2thYmxlIGF0dHJpYnV0ZSB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgQ2hlY2tlZCBhdHRyaWJ1dGUuXHJcbiAgICAgKiAtIGEgUE5HIGljb24uIEZvciBvcHRpbWFsIGRpc3BsYXkgcmVzdWx0cyBwbGVhc2Ugc3VwcGx5IGEgMTYgeCAxNnB4IGljb24gYXMgbGFyZ2VyIGRpbWVuc2lvbnMgd2lsbCBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgbWVudSBpdGVtLlxyXG4gICAgIFRoZSBDaHJvbWUgZXh0ZW5zaW9uIGNvbnRleHRNZW51cyBBUEkgd2FzIHRha2VuIGFzIGEgcmVmZXJlbmNlLlxyXG4gICAgIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZXh0ZW5zaW9ucy9jb250ZXh0TWVudXNcclxuICAgICAqIC0gdGhlIGl0ZW1zIHdpdGggaWNvbnMgYW5kIGNoZWNrYWJsZSBpdGVtcyBjYW5ub3QgY29leGlzdCBvbiB0aGUgc2FtZSBtZW51IGxldmVsLiBUaGUgZm9ybWVyIHRha2UgcHJlY2VkZW5jZXMgb3ZlciB0aGUgbGF0dGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51ICAgICAgQSBYTUwgc3RyaW5nIHdoaWNoIGRlc2NyaWJlcyBtZW51IHN0cnVjdHVyZS5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGEgbWVudSBpdGVtIGlzIGNsaWNrZWQuIFRoZSBvbmx5IHBhcmFtZXRlciBpcyB0aGUgcmV0dXJuZWQgSUQgb2YgY2xpY2tlZCBtZW51IGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFuIGV4YW1wbGUgbWVudSBYTUw6XHJcbiAgICAgKiA8TWVudT5cclxuICAgICAqICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDFcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMVwiIEVuYWJsZWQ9XCJ0cnVlXCIgQ2hlY2thYmxlPVwidHJ1ZVwiIENoZWNrZWQ9XCJmYWxzZVwiIEljb249XCIuL2ltYWdlL3NtYWxsXzE2WDE2LnBuZ1wiLz5cclxuICAgICAqICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDJcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMlwiPlxyXG4gICAgICogICAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQyLTFcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMi0xXCIgPlxyXG4gICAgICogICAgICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDItMS0xXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTItMS0xXCIgRW5hYmxlZD1cImZhbHNlXCIgQ2hlY2thYmxlPVwidHJ1ZVwiIENoZWNrZWQ9XCJ0cnVlXCIvPlxyXG4gICAgICogICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgKiAgICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDItMlwiIExhYmVsPVwiVGVzdEV4YW1wbGUyLTJcIiBFbmFibGVkPVwidHJ1ZVwiIENoZWNrYWJsZT1cInRydWVcIiBDaGVja2VkPVwidHJ1ZVwiLz5cclxuICAgICAqICAgPC9NZW51SXRlbT5cclxuICAgICAqICAgPE1lbnVJdGVtIExhYmVsPVwiLS0tXCIgLz5cclxuICAgICAqICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDNcIiBMYWJlbD1cIlRlc3RFeGFtcGxlM1wiIEVuYWJsZWQ9XCJmYWxzZVwiIENoZWNrYWJsZT1cInRydWVcIiBDaGVja2VkPVwiZmFsc2VcIi8+XHJcbiAgICAgKiA8L01lbnU+XHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChtZW51LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBtZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlQXN5bmMoXCJzZXRDb250ZXh0TWVudVwiLCBtZW51LCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY29udGV4dCBtZW51IGJ5IEpTT04gc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMC4wXHJcbiAgICAgKlxyXG4gICAgICogVGhlcmUgYXJlIGEgbnVtYmVyIG9mIGNvbnZlbnRpb25zIHVzZWQgdG8gY29tbXVuaWNhdGUgd2hhdCB0eXBlIG9mIG1lbnUgaXRlbSB0byBjcmVhdGUgYW5kIGhvdyBpdCBzaG91bGQgYmUgaGFuZGxlZC5cclxuICAgICAqIC0gYW4gaXRlbSB3aXRob3V0IG1lbnUgSUQgb3IgbWVudSBuYW1lIGlzIGRpc2FibGVkIGFuZCBpcyBub3Qgc2hvd24uXHJcbiAgICAgKiAtIGlmIHRoZSBpdGVtIGxhYmVsIGlzIFwiLS0tXCIgKHRocmVlIGh5cGhlbnMpIHRoZW4gaXQgaXMgdHJlYXRlZCBhcyBhIHNlcGFyYXRvci4gVGhlIG1lbnUgSUQgaW4gdGhpcyBjYXNlIHdpbGwgYWx3YXlzIGJlIE5VTEwuXHJcbiAgICAgKiAtIENoZWNrYWJsZSBhdHRyaWJ1dGUgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIENoZWNrZWQgYXR0cmlidXRlLlxyXG4gICAgICogLSBhIFBORyBpY29uLiBGb3Igb3B0aW1hbCBkaXNwbGF5IHJlc3VsdHMgcGxlYXNlIHN1cHBseSBhIDE2IHggMTZweCBpY29uIGFzIGxhcmdlciBkaW1lbnNpb25zIHdpbGwgaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIG1lbnUgaXRlbS5cclxuICAgICBUaGUgQ2hyb21lIGV4dGVuc2lvbiBjb250ZXh0TWVudXMgQVBJIHdhcyB0YWtlbiBhcyBhIHJlZmVyZW5jZS5cclxuICAgICAqIC0gdGhlIGl0ZW1zIHdpdGggaWNvbnMgYW5kIGNoZWNrYWJsZSBpdGVtcyBjYW5ub3QgY29leGlzdCBvbiB0aGUgc2FtZSBtZW51IGxldmVsLiBUaGUgZm9ybWVyIHRha2UgcHJlY2VkZW5jZXMgb3ZlciB0aGUgbGF0dGVyLlxyXG4gICAgIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZXh0ZW5zaW9ucy9jb250ZXh0TWVudXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudSAgICAgIEEgSlNPTiBzdHJpbmcgd2hpY2ggZGVzY3JpYmVzIG1lbnUgc3RydWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZC4gVGhlIG9ubHkgcGFyYW1ldGVyIGlzIHRoZSByZXR1cm5lZCBJRCBvZiBjbGlja2VkIG1lbnUgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQW4gZXhhbXBsZSBtZW51IEpTT046XHJcbiAgICAgKlxyXG4gICAgICoge1xyXG4gICAgICogICAgICBcIm1lbnVcIjogW1xyXG4gICAgICogICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkMVwiLFxyXG4gICAgICogICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTFcIixcclxuICAgICAqICAgICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICBcImNoZWNrYWJsZVwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBmYWxzZSxcclxuICAgICAqICAgICAgICAgICAgICBcImljb25cIjogXCIuL2ltYWdlL3NtYWxsXzE2WDE2LnBuZ1wiXHJcbiAgICAgKiAgICAgICAgICB9LFxyXG4gICAgICogICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkMlwiLFxyXG4gICAgICogICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTJcIixcclxuICAgICAqICAgICAgICAgICAgICBcIm1lbnVcIjogW1xyXG4gICAgICogICAgICAgICAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDItMVwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlMi0xXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcIm1lbnVcIjogW1xyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQyLTEtMVwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUyLTEtMVwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjogZmFsc2UsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2thYmxlXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiB0cnVlXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICogICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICogICAgICAgICAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDItMlwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlMi0yXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2thYmxlXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogdHJ1ZVxyXG4gICAgICogICAgICAgICAgICAgICAgICB9XHJcbiAgICAgKiAgICAgICAgICAgICAgXVxyXG4gICAgICogICAgICAgICAgfSxcclxuICAgICAqICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiLS0tXCJcclxuICAgICAqICAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQzXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlM1wiLFxyXG4gICAgICogICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiBmYWxzZSxcclxuICAgICAqICAgICAgICAgICAgICBcImNoZWNrYWJsZVwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBmYWxzZVxyXG4gICAgICogICAgICAgICAgfVxyXG4gICAgICogICAgICBdXHJcbiAgICAgKiAgfVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnNldENvbnRleHRNZW51QnlKU09OID0gZnVuY3Rpb24gKG1lbnUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIG1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VBc3luYyhcInNldENvbnRleHRNZW51QnlKU09OXCIsIG1lbnUsIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBjb250ZXh0IG1lbnUgaXRlbSBieSBzZXR0aW5nIHRoZSBlbmFibGVkIGFuZCBzZWxlY3Rpb24gc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnVJdGVtSUQgICAgVGhlIG1lbnUgaXRlbSBJRC5cclxuICAgICAqIEBwYXJhbSBlbmFibGVkICAgICAgICBUcnVlIHRvIGVuYWJsZSB0aGUgaXRlbSwgZmFsc2UgdG8gZGlzYWJsZSBpdCAoZ3JheSBpdCBvdXQpLlxyXG4gICAgICogQHBhcmFtIGNoZWNrZWQgICAgICAgIFRydWUgdG8gc2VsZWN0IHRoZSBpdGVtLCBmYWxzZSB0byBkZXNlbGVjdCBpdC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnVwZGF0ZUNvbnRleHRNZW51SXRlbSA9IGZ1bmN0aW9uIChtZW51SXRlbUlELCBlbmFibGVkLCBjaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1TdGF0dXMgPSBuZXcgQ29udGV4dE1lbnVJdGVtU3RhdHVzKG1lbnVJdGVtSUQsIGVuYWJsZWQsIGNoZWNrZWQpO1xyXG4gICAgICAgIHJldCA9IHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJ1cGRhdGVDb250ZXh0TWVudUl0ZW1cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbVN0YXR1cykpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2aXNpYmlsaXR5IHN0YXR1cyBvZiBhbiBleHRlbnNpb24gd2luZG93LlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMC4wXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB0cnVlIGlmIHRoZSBleHRlbnNpb24gd2luZG93IGlzIHZpc2libGU7IGZhbHNlIGlmIHRoZSBleHRlbnNpb24gd2luZG93IGlzIGhpZGRlbi5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmlzV2luZG93VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcImlzV2luZG93VmlzaWJsZVwiLCBcIlwiKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBleHRlbnNpb24ncyBjb250ZW50IHRvIHRoZSBzcGVjaWZpZWQgZGltZW5zaW9ucy5cclxuICAgICAqIDEuIFdvcmtzIHdpdGggbW9kYWwgYW5kIG1vZGVsZXNzIGV4dGVuc2lvbnMgaW4gYWxsIEFkb2JlIHByb2R1Y3RzLlxyXG4gICAgICogMi4gRXh0ZW5zaW9uJ3MgbWFuaWZlc3QgbWluL21heCBzaXplIGNvbnN0cmFpbnRzIGFwcGx5IGFuZCB0YWtlIHByZWNlZGVuY2UuXHJcbiAgICAgKiAzLiBGb3IgcGFuZWwgZXh0ZW5zaW9uc1xyXG4gICAgICogICAgMy4xIFRoaXMgd29ya3MgaW4gYWxsIEFkb2JlIHByb2R1Y3RzIGV4Y2VwdDpcclxuICAgICAqICAgICAgICAqIFByZW1pZXJlIFByb1xyXG4gICAgICogICAgICAgICogUHJlbHVkZVxyXG4gICAgICogICAgICAgICogQWZ0ZXIgRWZmZWN0c1xyXG4gICAgICogICAgMy4yIFdoZW4gdGhlIHBhbmVsIGlzIGluIGNlcnRhaW4gc3RhdGVzIChlc3BlY2lhbGx5IHdoZW4gYmVpbmcgZG9ja2VkKSxcclxuICAgICAqICAgICAgICBpdCB3aWxsIG5vdCBjaGFuZ2UgdG8gdGhlIGRlc2lyZWQgZGltZW5zaW9ucyBldmVuIHdoZW4gdGhlXHJcbiAgICAgKiAgICAgICAgc3BlY2lmaWVkIHNpemUgc2F0aXNmaWVzIG1pbi9tYXggY29uc3RyYWludHMuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4wLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggIFRoZSBuZXcgd2lkdGhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIG5ldyBoZWlnaHRcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnJlc2l6ZUNvbnRlbnQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnJlc2l6ZUNvbnRlbnQod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciB0aGUgaW52YWxpZCBjZXJ0aWZpY2F0ZSBjYWxsYmFjayBmb3IgYW4gZXh0ZW5zaW9uLlxyXG4gICAgICogVGhpcyBjYWxsYmFjayB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBleHRlbnNpb24gdHJpZXMgdG8gYWNjZXNzIHRoZSB3ZWIgc2l0ZSB0aGF0IGNvbnRhaW5zIHRoZSBpbnZhbGlkIGNlcnRpZmljYXRlIG9uIHRoZSBtYWluIGZyYW1lLlxyXG4gICAgICogQnV0IGlmIHRoZSBleHRlbnNpb24gZG9lcyBub3QgY2FsbCB0aGlzIGZ1bmN0aW9uIGFuZCB0cmllcyB0byBhY2Nlc3MgdGhlIHdlYiBzaXRlIGNvbnRhaW5pbmcgdGhlIGludmFsaWQgY2VydGlmaWNhdGUsIGEgZGVmYXVsdCBlcnJvciBwYWdlIHdpbGwgYmUgc2hvd24uXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4xLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5yZWdpc3RlckludmFsaWRDZXJ0aWZpY2F0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnJlZ2lzdGVySW52YWxpZENlcnRpZmljYXRlQ2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYW4gaW50ZXJlc3QgaW4gc29tZSBrZXkgZXZlbnRzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlaW5nIHNlbnQgdG8gdGhlIGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3b3JrcyB3aXRoIG1vZGVsZXNzIGV4dGVuc2lvbnMgYW5kIHBhbmVsIGV4dGVuc2lvbnMuXHJcbiAgICAgKiBHZW5lcmFsbHkgYWxsIHRoZSBrZXkgZXZlbnRzIHdpbGwgYmUgc2VudCB0byB0aGUgaG9zdCBhcHBsaWNhdGlvbiBmb3IgdGhlc2UgdHdvIGV4dGVuc2lvbnMgaWYgdGhlIGN1cnJlbnQgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgKiBpcyBub3QgdGV4dCBpbnB1dCBvciBkcm9wZG93bixcclxuICAgICAqIElmIHlvdSB3YW50IHRvIGludGVyY2VwdCBzb21lIGtleSBldmVudHMgYW5kIHdhbnQgdGhlbSB0byBiZSBoYW5kbGVkIGluIHRoZSBleHRlbnNpb24sIHBsZWFzZSBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgICAqIGluIGFkdmFuY2UgdG8gcHJldmVudCB0aGVtIGJlaW5nIHNlbnQgdG8gdGhlIGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4xLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5RXZlbnRzSW50ZXJlc3QgICAgICBBIEpTT04gc3RyaW5nIGRlc2NyaWJpbmcgdGhvc2Uga2V5IGV2ZW50cyB5b3UgYXJlIGludGVyZXN0ZWQgaW4uIEEgbnVsbCBvYmplY3Qgb3JcclxuICAgICBhbiBlbXB0eSBzdHJpbmcgd2lsbCBsZWFkIHRvIHJlbW92aW5nIHRoZSBpbnRlcmVzdFxyXG4gICAgICpcclxuICAgICAqIFRoaXMgSlNPTiBzdHJpbmcgc2hvdWxkIGJlIGFuIGFycmF5LCBlYWNoIG9iamVjdCBoYXMgZm9sbG93aW5nIGtleXM6XHJcbiAgICAgKlxyXG4gICAgICoga2V5Q29kZTogIFtSZXF1aXJlZF0gcmVwcmVzZW50cyBhbiBPUyBzeXN0ZW0gZGVwZW5kZW50IHZpcnR1YWwga2V5IGNvZGUgaWRlbnRpZnlpbmdcclxuICAgICAqICAgICAgICAgICB0aGUgdW5tb2RpZmllZCB2YWx1ZSBvZiB0aGUgcHJlc3NlZCBrZXkuXHJcbiAgICAgKiBjdHJsS2V5OiAgW29wdGlvbmFsXSBhIEJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGNvbnRyb2wga2V5IHdhcyBwcmVzc2VkICh0cnVlKSBvciBub3QgKGZhbHNlKSB3aGVuIHRoZSBldmVudCBvY2N1cnJlZC5cclxuICAgICAqIGFsdEtleTogICBbb3B0aW9uYWxdIGEgQm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgYWx0IGtleSB3YXMgcHJlc3NlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSkgd2hlbiB0aGUgZXZlbnQgb2NjdXJyZWQuXHJcbiAgICAgKiBzaGlmdEtleTogW29wdGlvbmFsXSBhIEJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHNoaWZ0IGtleSB3YXMgcHJlc3NlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSkgd2hlbiB0aGUgZXZlbnQgb2NjdXJyZWQuXHJcbiAgICAgKiBtZXRhS2V5OiAgW29wdGlvbmFsXSAoTWFjIE9ubHkpIGEgQm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgTWV0YSBrZXkgd2FzIHByZXNzZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpIHdoZW4gdGhlIGV2ZW50IG9jY3VycmVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgT24gTWFjaW50b3NoIGtleWJvYXJkcywgdGhpcyBpcyB0aGUgY29tbWFuZCBrZXkuIFRvIGRldGVjdCBXaW5kb3dzIGtleSBvbiBXaW5kb3dzLCBwbGVhc2UgdXNlIGtleUNvZGUgaW5zdGVhZC5cclxuICAgICAqIEFuIGV4YW1wbGUgSlNPTiBzdHJpbmc6XHJcbiAgICAgKlxyXG4gICAgICogW1xyXG4gICAgICogICAgIHtcclxuICAgICAqICAgICAgICAgXCJrZXlDb2RlXCI6IDQ4XHJcbiAgICAgKiAgICAgfSxcclxuICAgICAqICAgICB7XHJcbiAgICAgKiAgICAgICAgIFwia2V5Q29kZVwiOiAxMjMsXHJcbiAgICAgKiAgICAgICAgIFwiY3RybEtleVwiOiB0cnVlXHJcbiAgICAgKiAgICAgfSxcclxuICAgICAqICAgICB7XHJcbiAgICAgKiAgICAgICAgIFwia2V5Q29kZVwiOiAxMjMsXHJcbiAgICAgKiAgICAgICAgIFwiY3RybEtleVwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICBcIm1ldGFLZXlcIjogdHJ1ZVxyXG4gICAgICogICAgIH1cclxuICAgICAqIF1cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5yZWdpc3RlcktleUV2ZW50c0ludGVyZXN0ID0gZnVuY3Rpb24gKGtleUV2ZW50c0ludGVyZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnJlZ2lzdGVyS2V5RXZlbnRzSW50ZXJlc3Qoa2V5RXZlbnRzSW50ZXJlc3QpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB0aXRsZSBvZiB0aGUgZXh0ZW5zaW9uIHdpbmRvdy5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd29ya3Mgd2l0aCBtb2RhbCBhbmQgbW9kZWxlc3MgZXh0ZW5zaW9ucyBpbiBhbGwgQWRvYmUgcHJvZHVjdHMsIGFuZCBwYW5lbCBleHRlbnNpb25zIGluIFBob3Rvc2hvcCwgSW5EZXNpZ24sIEluQ29weSwgSWxsdXN0cmF0b3IsIEZsYXNoIFBybyBhbmQgRHJlYW13ZWF2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4xLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGl0bGUgVGhlIHdpbmRvdyB0aXRsZS5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnNldFdpbmRvd1RpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcInNldFdpbmRvd1RpdGxlXCIsIHRpdGxlKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdGl0bGUgb2YgdGhlIGV4dGVuc2lvbiB3aW5kb3cuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdvcmtzIHdpdGggbW9kYWwgYW5kIG1vZGVsZXNzIGV4dGVuc2lvbnMgaW4gYWxsIEFkb2JlIHByb2R1Y3RzLCBhbmQgcGFuZWwgZXh0ZW5zaW9ucyBpbiBQaG90b3Nob3AsIEluRGVzaWduLCBJbkNvcHksIElsbHVzdHJhdG9yLCBGbGFzaCBQcm8gYW5kIERyZWFtd2VhdmVyLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMS4wXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBUaGUgd2luZG93IHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0V2luZG93VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJnZXRXaW5kb3dUaXRsZVwiLCBcIlwiKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gQ1NJbnRlcmZhY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ1NJbnRlcmZhY2UgPSBDU0ludGVyZmFjZTtcclxuLyoqXHJcbiAqIENsYXNzIENTRXZlbnQuXHJcbiAqIFlvdSBjYW4gdXNlIGl0IHRvIGRpc3BhdGNoIGEgc3RhbmRhcmQgQ0VQIGV2ZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJuIENTRXZlbnQgb2JqZWN0XHJcbiAqL1xyXG52YXIgQ1NFdmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIG5ldyBpbnN0YW5jZSBvZiBDU0V2ZW50IG9iamVjdC5cclxuICAgICAqIFlvdSBjYW4gdXNlIGl0IHRvIGRpc3BhdGNoIGEgc3RhbmRhcmQgQ0VQIGV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlICAgICAgICBFdmVudCB0eXBlLlxyXG4gICAgICogQHBhcmFtIHNjb3BlICAgICAgIFRoZSBzY29wZSBvZiBldmVudCwgY2FuIGJlIFwiR0xPQkFMXCIgb3IgXCJBUFBMSUNBVElPTlwiLlxyXG4gICAgICogQHBhcmFtIGFwcElkICAgICAgIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYXBwbGljYXRpb24gdGhhdCBnZW5lcmF0ZWQgdGhlIGV2ZW50LiBPcHRpb25hbC5cclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25JZCBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGV4dGVuc2lvbiB0aGF0IGdlbmVyYXRlZCB0aGUgZXZlbnQuIE9wdGlvbmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDU0V2ZW50KHR5cGUsIHNjb3BlLCBhcHBJZCwgZXh0ZW5zaW9uSWQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLmFwcElkID0gYXBwSWQ7XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25JZCA9IGV4dGVuc2lvbklkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEV2ZW50LXNwZWNpZmljIGRhdGEuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kYXRhID0gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBDU0V2ZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNTRXZlbnQgPSBDU0V2ZW50O1xyXG4vKipcclxuICogQGNsYXNzIFN5c3RlbVBhdGhcclxuICogU3RvcmVzIG9wZXJhdGluZy1zeXN0ZW0tc3BlY2lmaWMgbG9jYXRpb24gY29uc3RhbnRzIGZvciB1c2UgaW4gdGhlXHJcbiAqIFxcYyAjQ1NJbnRlcmZhY2UuZ2V0U3lzdGVtUGF0aCgpIG1ldGhvZC5cclxuICovXHJcbnZhciBTeXN0ZW1QYXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN5c3RlbVBhdGgoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3lzdGVtUGF0aDtcclxufSgpKTtcclxuLyoqIFRoZSBwYXRoIHRvIHVzZXIgZGF0YS4gICovXHJcblN5c3RlbVBhdGguVVNFUl9EQVRBID0gXCJ1c2VyRGF0YVwiO1xyXG4vKiogVGhlIHBhdGggdG8gY29tbW9uIGZpbGVzIGZvciBBZG9iZSBhcHBsaWNhdGlvbnMuICAqL1xyXG5TeXN0ZW1QYXRoLkNPTU1PTl9GSUxFUyA9IFwiY29tbW9uRmlsZXNcIjtcclxuLyoqIFRoZSBwYXRoIHRvIHRoZSB1c2VyJ3MgZGVmYXVsdCBkb2N1bWVudCBmb2xkZXIuICAqL1xyXG5TeXN0ZW1QYXRoLk1ZX0RPQ1VNRU5UUyA9IFwibXlEb2N1bWVudHNcIjtcclxuLyoqIEBkZXByZWNhdGVkLiBVc2UgXFxjICNTeXN0ZW1QYXRoLkV4dGVuc2lvbi4gICovXHJcblN5c3RlbVBhdGguQVBQTElDQVRJT04gPSBcImFwcGxpY2F0aW9uXCI7XHJcbi8qKiBUaGUgcGF0aCB0byBjdXJyZW50IGV4dGVuc2lvbi4gICovXHJcblN5c3RlbVBhdGguRVhURU5TSU9OID0gXCJleHRlbnNpb25cIjtcclxuLyoqIFRoZSBwYXRoIHRvIGhvc3RpbmcgYXBwbGljYXRpb24ncyBleGVjdXRhYmxlLiAgKi9cclxuU3lzdGVtUGF0aC5IT1NUX0FQUExJQ0FUSU9OID0gXCJob3N0QXBwbGljYXRpb25cIjtcclxuZXhwb3J0cy5TeXN0ZW1QYXRoID0gU3lzdGVtUGF0aDtcclxuLyoqXHJcbiAqIEBjbGFzcyBDb2xvclR5cGVcclxuICogU3RvcmVzIGNvbG9yLXR5cGUgY29uc3RhbnRzLlxyXG4gKi9cclxudmFyIENvbG9yVHlwZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xvclR5cGUoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29sb3JUeXBlO1xyXG59KCkpO1xyXG4vKiogUkdCIGNvbG9yIHR5cGUuICovXHJcbkNvbG9yVHlwZS5SR0IgPSBcInJnYlwiO1xyXG4vKiogR3JhZGllbnQgY29sb3IgdHlwZS4gKi9cclxuQ29sb3JUeXBlLkdSQURJRU5UID0gXCJncmFkaWVudFwiO1xyXG4vKiogTnVsbCBjb2xvciB0eXBlLiAqL1xyXG5Db2xvclR5cGUuTk9ORSA9IFwibm9uZVwiO1xyXG5leHBvcnRzLkNvbG9yVHlwZSA9IENvbG9yVHlwZTtcclxuLyoqXHJcbiAqIEBjbGFzcyBSR0JDb2xvclxyXG4gKiBTdG9yZXMgYW4gUkdCIGNvbG9yIHdpdGggcmVkLCBncmVlbiwgYmx1ZSwgYW5kIGFscGhhIHZhbHVlcy5cclxuICogQWxsIHZhbHVlcyBhcmUgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLiBJbnZhbGlkIG51bWVyaWMgdmFsdWVzIGFyZVxyXG4gKiBjb252ZXJ0ZWQgdG8gbnVtYmVycyB3aXRoaW4gdGhpcyByYW5nZS5cclxuICpcclxuICovXHJcbnZhciBSR0JDb2xvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBhbiBSR0IgY29sb3Igd2l0aCByZWQsIGdyZWVuLCBibHVlLCBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQWxsIHZhbHVlcyBhcmUgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLiBJbnZhbGlkIG51bWVyaWMgdmFsdWVzIGFyZVxyXG4gICAgICogY29udmVydGVkIHRvIG51bWJlcnMgd2l0aGluIHRoaXMgcmFuZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlZCAgIFRoZSByZWQgdmFsdWUsIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS5cclxuICAgICAqIEBwYXJhbSBncmVlbiBUaGUgZ3JlZW4gdmFsdWUsIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS5cclxuICAgICAqIEBwYXJhbSBibHVlICBUaGUgYmx1ZSB2YWx1ZSwgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLlxyXG4gICAgICogQHBhcmFtIGFscGhhIFRoZSBhbHBoYSAodHJhbnNwYXJlbmN5KSB2YWx1ZSwgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLlxyXG4gICAgICogICAgICBUaGUgZGVmYXVsdCwgMjU1LjAsIG1lYW5zIHRoYXQgdGhlIGNvbG9yIGlzIGZ1bGx5IG9wYXF1ZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUkdCQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpIHtcclxuICAgICAgICB0aGlzLnJlZCA9IHJlZDtcclxuICAgICAgICB0aGlzLmdyZWVuID0gZ3JlZW47XHJcbiAgICAgICAgdGhpcy5ibHVlID0gYmx1ZTtcclxuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUkdCQ29sb3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUkdCQ29sb3IgPSBSR0JDb2xvcjtcclxuLyoqXHJcbiAqIEBjbGFzcyBEaXJlY3Rpb25cclxuICogQSBwb2ludCB2YWx1ZSAgaW4gd2hpY2ggdGhlIHkgY29tcG9uZW50IGlzIDAgYW5kIHRoZSB4IGNvbXBvbmVudFxyXG4gKiBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBmb3IgYSByaWdodCBvciBsZWZ0IGRpcmVjdGlvbixcclxuICogb3IgdGhlIHggY29tcG9uZW50IGlzIDAgYW5kIHRoZSB5IGNvbXBvbmVudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBmb3JcclxuICogYW4gdXAgb3IgZG93biBkaXJlY3Rpb24uXHJcbiAqL1xyXG52YXIgRGlyZWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBwb2ludCB2YWx1ZSAgaW4gd2hpY2ggdGhlIHkgY29tcG9uZW50IGlzIDAgYW5kIHRoZSB4IGNvbXBvbmVudFxyXG4gICAgICogaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgZm9yIGEgcmlnaHQgb3IgbGVmdCBkaXJlY3Rpb24sXHJcbiAgICAgKiBvciB0aGUgeCBjb21wb25lbnQgaXMgMCBhbmQgdGhlIHkgY29tcG9uZW50IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGZvclxyXG4gICAgICogYW4gdXAgb3IgZG93biBkaXJlY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHggICAgIFRoZSBob3Jpem9udGFsIGNvbXBvbmVudCBvZiB0aGUgcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0geSAgICAgVGhlIHZlcnRpY2FsIGNvbXBvbmVudCBvZiB0aGUgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIERpcmVjdGlvbih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERpcmVjdGlvbjtcclxufSgpKTtcclxuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XHJcbi8qKlxyXG4gKiBAY2xhc3MgR3JhZGllbnRTdG9wXHJcbiAqIFN0b3JlcyBncmFkaWVudCBzdG9wIGluZm9ybWF0aW9uLlxyXG4gKi9cclxudmFyIEdyYWRpZW50U3RvcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBncmFkaWVudCBzdG9wIGluZm9ybWF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvZmZzZXQgICBUaGUgb2Zmc2V0IG9mIHRoZSBncmFkaWVudCBzdG9wLCBpbiB0aGUgcmFuZ2UgWzAuMCB0byAxLjBdLlxyXG4gICAgICogQHBhcmFtIHJnYkNvbG9yIFRoZSBjb2xvciBvZiB0aGUgZ3JhZGllbnQgYXQgdGhpcyBwb2ludCwgYW4gXFxjICNSR0JDb2xvciBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEdyYWRpZW50U3RvcChvZmZzZXQsIHJnYkNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5yZ2JDb2xvciA9IHJnYkNvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdyYWRpZW50U3RvcDtcclxufSgpKTtcclxuZXhwb3J0cy5HcmFkaWVudFN0b3AgPSBHcmFkaWVudFN0b3A7XHJcbi8qKlxyXG4gKiBAY2xhc3MgR3JhZGllbnRDb2xvclxyXG4gKiBTdG9yZXMgZ3JhZGllbnQgY29sb3IgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG52YXIgR3JhZGllbnRDb2xvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIG5ldyBcXGMgI0dyYWRpZW50Q29sb3IgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGUgICAgICAgICAgVGhlIGdyYWRpZW50IHR5cGUsIG11c3QgYmUgXCJsaW5lYXJcIi5cclxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gICAgIEEgXFxjICNEaXJlY3Rpb24gb2JqZWN0IGZvciB0aGUgZGlyZWN0aW9uIG9mIHRoZSBncmFkaWVudFxyXG4gICAgICh1cCwgZG93biwgcmlnaHQsIG9yIGxlZnQpLlxyXG4gICAgICogQHBhcmFtIG51bVN0b3BzICAgICAgICAgIFRoZSBudW1iZXIgb2Ygc3RvcHMgaW4gdGhlIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIGdyYWRpZW50U3RvcExpc3QgIEFuIGFycmF5IG9mIFxcYyAjR3JhZGllbnRTdG9wIG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEdyYWRpZW50Q29sb3IodHlwZSwgZGlyZWN0aW9uLCBudW1TdG9wcywgYXJyR3JhZGllbnRTdG9wKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLm51bVN0b3BzID0gbnVtU3RvcHM7XHJcbiAgICAgICAgdGhpcy5hcnJHcmFkaWVudFN0b3AgPSBhcnJHcmFkaWVudFN0b3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR3JhZGllbnRDb2xvcjtcclxufSgpKTtcclxuZXhwb3J0cy5HcmFkaWVudENvbG9yID0gR3JhZGllbnRDb2xvcjtcclxuLyoqXHJcbiAqIEBjbGFzcyBVSUNvbG9yXHJcbiAqIFN0b3JlcyBjb2xvciBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIHRoZSB0eXBlLCBhbnRpLWFsaWFzIGxldmVsLCBhbmQgc3BlY2lmaWMgY29sb3JcclxuICogdmFsdWVzIGluIGEgY29sb3Igb2JqZWN0IG9mIGFuIGFwcHJvcHJpYXRlIHR5cGUuXHJcbiAqL1xyXG52YXIgVUlDb2xvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBjb2xvciBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIHRoZSB0eXBlLCBhbnRpLWFsaWFzIGxldmVsLCBhbmQgc3BlY2lmaWMgY29sb3JcclxuICAgICAqIHZhbHVlcyBpbiBhIGNvbG9yIG9iamVjdCBvZiBhbiBhcHByb3ByaWF0ZSB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlICAgICAgICAgIFRoZSBjb2xvciB0eXBlLCAxIGZvciBcInJnYlwiIGFuZCAyIGZvciBcImdyYWRpZW50XCIuXHJcbiAgICAgVGhlIHN1cHBsaWVkIGNvbG9yIG9iamVjdCBtdXN0IGNvcnJlc3BvbmQgdG8gdGhpcyB0eXBlLlxyXG4gICAgICogQHBhcmFtIGFudGlhbGlhc0xldmVsICAgIFRoZSBhbnRpLWFsaWFzIGxldmVsIGNvbnN0YW50LlxyXG4gICAgICogQHBhcmFtIGNvbG9yICAgICAgICAgQSBcXGMgI1JHQkNvbG9yIG9yIFxcYyAjR3JhZGllbnRDb2xvciBvYmplY3QgY29udGFpbmluZyBzcGVjaWZpYyBjb2xvciBpbmZvcm1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVUlDb2xvcih0eXBlLCBhbnRpYWxpYXNMZXZlbCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW50aWFsaWFzTGV2ZWwgPSBhbnRpYWxpYXNMZXZlbDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVUlDb2xvcjtcclxufSgpKTtcclxuZXhwb3J0cy5VSUNvbG9yID0gVUlDb2xvcjtcclxuLyoqXHJcbiAqIEBjbGFzcyBBcHBTa2luSW5mb1xyXG4gKiBTdG9yZXMgd2luZG93LXNraW4gcHJvcGVydGllcywgc3VjaCBhcyBjb2xvciBhbmQgZm9udC4gQWxsIGNvbG9yIHBhcmFtZXRlciB2YWx1ZXMgYXJlIFxcYyAjVUlDb2xvciBvYmplY3RzIGV4Y2VwdCB0aGF0IHN5c3RlbUhpZ2hsaWdodENvbG9yIGlzIFxcYyAjUkdCQ29sb3Igb2JqZWN0LlxyXG4gKi9cclxudmFyIEFwcFNraW5JbmZvID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHdpbmRvdy1za2luIHByb3BlcnRpZXMsIHN1Y2ggYXMgY29sb3IgYW5kIGZvbnQuIEFsbCBjb2xvciBwYXJhbWV0ZXIgdmFsdWVzIGFyZSBcXGMgI1VJQ29sb3Igb2JqZWN0cyBleGNlcHQgdGhhdCBzeXN0ZW1IaWdobGlnaHRDb2xvciBpcyBcXGMgI1JHQkNvbG9yIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYmFzZUZvbnRGYW1pbHkgICAgICAgIFRoZSBiYXNlIGZvbnQgZmFtaWx5IG9mIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBiYXNlRm9udFNpemUgICAgICAgICAgVGhlIGJhc2UgZm9udCBzaXplIG9mIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBhcHBCYXJCYWNrZ3JvdW5kQ29sb3IgICAgIFRoZSBhcHBsaWNhdGlvbiBiYXIgYmFja2dyb3VuZCBjb2xvci5cclxuICAgICAqIEBwYXJhbSBwYW5lbEJhY2tncm91bmRDb2xvciAgICAgIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBleHRlbnNpb24gcGFuZWwuXHJcbiAgICAgKiBAcGFyYW0gYXBwQmFyQmFja2dyb3VuZENvbG9yU1JHQiAgICAgVGhlIGFwcGxpY2F0aW9uIGJhciBiYWNrZ3JvdW5kIGNvbG9yLCBhcyBzUkdCLlxyXG4gICAgICogQHBhcmFtIHBhbmVsQmFja2dyb3VuZENvbG9yU1JHQiAgICAgIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBleHRlbnNpb24gcGFuZWwsIGFzIHNSR0IuXHJcbiAgICAgKiBAcGFyYW0gc3lzdGVtSGlnaGxpZ2h0Q29sb3IgICAgICAgICAgVGhlIG9wZXJhdGluZy1zeXN0ZW0gaGlnaGxpZ2h0IGNvbG9yLCBhcyBzUkdCLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBBcHBTa2luSW5mbyhiYXNlRm9udEZhbWlseSwgYmFzZUZvbnRTaXplLCBhcHBCYXJCYWNrZ3JvdW5kQ29sb3IsIHBhbmVsQmFja2dyb3VuZENvbG9yLCBhcHBCYXJCYWNrZ3JvdW5kQ29sb3JTUkdCLCBwYW5lbEJhY2tncm91bmRDb2xvclNSR0IsIHN5c3RlbUhpZ2hsaWdodENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlRm9udEZhbWlseSA9IGJhc2VGb250RmFtaWx5O1xyXG4gICAgICAgIHRoaXMuYmFzZUZvbnRTaXplID0gYmFzZUZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuYXBwQmFyQmFja2dyb3VuZENvbG9yID0gYXBwQmFyQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMucGFuZWxCYWNrZ3JvdW5kQ29sb3IgPSBwYW5lbEJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmFwcEJhckJhY2tncm91bmRDb2xvclNSR0IgPSBhcHBCYXJCYWNrZ3JvdW5kQ29sb3JTUkdCO1xyXG4gICAgICAgIHRoaXMucGFuZWxCYWNrZ3JvdW5kQ29sb3JTUkdCID0gcGFuZWxCYWNrZ3JvdW5kQ29sb3JTUkdCO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtSGlnaGxpZ2h0Q29sb3IgPSBzeXN0ZW1IaWdobGlnaHRDb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBTa2luSW5mbztcclxufSgpKTtcclxuZXhwb3J0cy5BcHBTa2luSW5mbyA9IEFwcFNraW5JbmZvO1xyXG4vKipcclxuICogQGNsYXNzIEhvc3RFbnZpcm9ubWVudFxyXG4gKiBTdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVudmlyb25tZW50IGluIHdoaWNoIHRoZSBleHRlbnNpb24gaXMgbG9hZGVkLlxyXG4gKi9cclxudmFyIEhvc3RFbnZpcm9ubWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW52aXJvbm1lbnQgaW4gd2hpY2ggdGhlIGV4dGVuc2lvbiBpcyBsb2FkZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFwcE5hbWUgICBUaGUgYXBwbGljYXRpb24ncyBuYW1lLlxyXG4gICAgICogQHBhcmFtIGFwcFZlcnNpb24gICAgVGhlIGFwcGxpY2F0aW9uJ3MgdmVyc2lvbi5cclxuICAgICAqIEBwYXJhbSBhcHBMb2NhbGUgVGhlIGFwcGxpY2F0aW9uJ3MgY3VycmVudCBsaWNlbnNlIGxvY2FsZS5cclxuICAgICAqIEBwYXJhbSBhcHBVSUxvY2FsZSAgIFRoZSBhcHBsaWNhdGlvbidzIGN1cnJlbnQgVUkgbG9jYWxlLlxyXG4gICAgICogQHBhcmFtIGFwcElkICAgICBUaGUgYXBwbGljYXRpb24ncyB1bmlxdWUgaWRlbnRpZmllci5cclxuICAgICAqIEBwYXJhbSBpc0FwcE9ubGluZSAgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gaXMgY3VycmVudGx5IG9ubGluZS5cclxuICAgICAqIEBwYXJhbSBhcHBTa2luSW5mbyAgIEFuIFxcYyAjQXBwU2tpbkluZm8gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFwcGxpY2F0aW9uJ3MgZGVmYXVsdCBjb2xvciBhbmQgZm9udCBzdHlsZXMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEhvc3RFbnZpcm9ubWVudChhcHBOYW1lLCBhcHBWZXJzaW9uLCBhcHBMb2NhbGUsIGFwcFVJTG9jYWxlLCBhcHBJZCwgaXNBcHBPbmxpbmUsIGFwcFNraW5JbmZvKSB7XHJcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gYXBwTmFtZTtcclxuICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYXBwTG9jYWxlID0gYXBwTG9jYWxlO1xyXG4gICAgICAgIHRoaXMuYXBwVUlMb2NhbGUgPSBhcHBVSUxvY2FsZTtcclxuICAgICAgICB0aGlzLmFwcElkID0gYXBwSWQ7XHJcbiAgICAgICAgdGhpcy5pc0FwcE9ubGluZSA9IGlzQXBwT25saW5lO1xyXG4gICAgICAgIHRoaXMuYXBwU2tpbkluZm8gPSBhcHBTa2luSW5mbztcclxuICAgIH1cclxuICAgIHJldHVybiBIb3N0RW52aXJvbm1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSG9zdEVudmlyb25tZW50ID0gSG9zdEVudmlyb25tZW50O1xyXG4vKipcclxuICogQGNsYXNzIEhvc3RDYXBhYmlsaXRpZXNcclxuICogU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBob3N0IGNhcGFiaWxpdGllcy5cclxuICovXHJcbnZhciBIb3N0Q2FwYWJpbGl0aWVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBob3N0IGNhcGFiaWxpdGllcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gRVhURU5ERURfUEFORUxfTUVOVSBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBzdXBwb3J0cyBwYW5lbCBtZW51LlxyXG4gICAgICogQHBhcmFtIEVYVEVOREVEX1BBTkVMX0lDT05TIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIHN1cHBvcnRzIHBhbmVsIGljb24uXHJcbiAgICAgKiBAcGFyYW0gREVMRUdBVEVfQVBFX0VOR0lORSBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBzdXBwb3J0cyBkZWxlZ2F0ZWQgQVBFIGVuZ2luZS5cclxuICAgICAqIEBwYXJhbSBTVVBQT1JUX0hUTUxfRVhURU5TSU9OUyBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBzdXBwb3J0cyBIVE1MIGV4dGVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0gRElTQUJMRV9GTEFTSF9FWFRFTlNJT05TIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIGRpc2FibGVzIEZMQVNIIGV4dGVuc2lvbnMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEhvc3RDYXBhYmlsaXRpZXMoRVhURU5ERURfUEFORUxfTUVOVSwgRVhURU5ERURfUEFORUxfSUNPTlMsIERFTEVHQVRFX0FQRV9FTkdJTkUsIFNVUFBPUlRfSFRNTF9FWFRFTlNJT05TLCBESVNBQkxFX0ZMQVNIX0VYVEVOU0lPTlMpIHtcclxuICAgICAgICB0aGlzLkVYVEVOREVEX1BBTkVMX01FTlUgPSBFWFRFTkRFRF9QQU5FTF9NRU5VO1xyXG4gICAgICAgIHRoaXMuRVhURU5ERURfUEFORUxfSUNPTlMgPSBFWFRFTkRFRF9QQU5FTF9JQ09OUztcclxuICAgICAgICB0aGlzLkRFTEVHQVRFX0FQRV9FTkdJTkUgPSBERUxFR0FURV9BUEVfRU5HSU5FO1xyXG4gICAgICAgIHRoaXMuU1VQUE9SVF9IVE1MX0VYVEVOU0lPTlMgPSBTVVBQT1JUX0hUTUxfRVhURU5TSU9OUztcclxuICAgICAgICB0aGlzLkRJU0FCTEVfRkxBU0hfRVhURU5TSU9OUyA9IERJU0FCTEVfRkxBU0hfRVhURU5TSU9OUztcclxuICAgIH1cclxuICAgIHJldHVybiBIb3N0Q2FwYWJpbGl0aWVzO1xyXG59KCkpO1xyXG5leHBvcnRzLkhvc3RDYXBhYmlsaXRpZXMgPSBIb3N0Q2FwYWJpbGl0aWVzO1xyXG4vKipcclxuICogQGNsYXNzIEFwaVZlcnNpb25cclxuICogU3RvcmVzIGN1cnJlbnQgYXBpIHZlcnNpb24uXHJcbiAqXHJcbiAqIFNpbmNlIDQuMi4wXHJcbiAqL1xyXG52YXIgQXBpVmVyc2lvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBjdXJyZW50IGFwaSB2ZXJzaW9uLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1ham9yICBUaGUgbWFqb3IgdmVyc2lvbi5cclxuICAgICAqIEBwYXJhbSBtaW5vciAgVGhlIG1pbm9yIHZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbWljcm8gIFRoZSBtaWNybyB2ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBBcGlWZXJzaW9uKG1ham9yLCBtaW5vciwgbWljcm8pIHtcclxuICAgICAgICB0aGlzLm1ham9yID0gbWFqb3I7XHJcbiAgICAgICAgdGhpcy5taW5vciA9IG1pbm9yO1xyXG4gICAgICAgIHRoaXMubWljcm8gPSBtaWNybztcclxuICAgIH1cclxuICAgIHJldHVybiBBcGlWZXJzaW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwaVZlcnNpb24gPSBBcGlWZXJzaW9uO1xyXG4vKipcclxuICogQGNsYXNzIE1lbnVJdGVtU3RhdHVzXHJcbiAqIFN0b3JlcyBmbHlvdXQgbWVudSBpdGVtIHN0YXR1c1xyXG4gKlxyXG4gKiBTaW5jZSA1LjIuMFxyXG4gKi9cclxudmFyIE1lbnVJdGVtU3RhdHVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGZseW91dCBtZW51IGl0ZW0gc3RhdHVzXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudUl0ZW1MYWJlbCAgVGhlIG1lbnUgaXRlbSBsYWJlbC5cclxuICAgICAqIEBwYXJhbSBlbmFibGVkICBcdFx0IFRydWUgaWYgdXNlciB3YW50cyB0byBlbmFibGUgdGhlIG1lbnUgaXRlbS5cclxuICAgICAqIEBwYXJhbSBjaGVja2VkICBcdFx0IFRydWUgaWYgdXNlciB3YW50cyB0byBjaGVjayB0aGUgbWVudSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBNZW51SXRlbVN0YXR1cyhtZW51SXRlbUxhYmVsLCBlbmFibGVkLCBjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbUxhYmVsID0gbWVudUl0ZW1MYWJlbDtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWVudUl0ZW1TdGF0dXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWVudUl0ZW1TdGF0dXMgPSBNZW51SXRlbVN0YXR1cztcclxuLyoqXHJcbiAqIEBjbGFzcyBDb250ZXh0TWVudUl0ZW1TdGF0dXNcclxuICogU3RvcmVzIHRoZSBzdGF0dXMgb2YgdGhlIGNvbnRleHQgbWVudSBpdGVtLlxyXG4gKlxyXG4gKiBTaW5jZSA1LjIuMFxyXG4gKi9cclxudmFyIENvbnRleHRNZW51SXRlbVN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB0aGUgc3RhdHVzIG9mIHRoZSBjb250ZXh0IG1lbnUgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51SXRlbUlEICAgICBUaGUgbWVudSBpdGVtIGlkLlxyXG4gICAgICogQHBhcmFtIGVuYWJsZWQgIFx0XHQgVHJ1ZSBpZiB1c2VyIHdhbnRzIHRvIGVuYWJsZSB0aGUgbWVudSBpdGVtLlxyXG4gICAgICogQHBhcmFtIGNoZWNrZWQgIFx0XHQgVHJ1ZSBpZiB1c2VyIHdhbnRzIHRvIGNoZWNrIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENvbnRleHRNZW51SXRlbVN0YXR1cyhtZW51SXRlbUlELCBlbmFibGVkLCBjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbUlEID0gbWVudUl0ZW1JRDtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29udGV4dE1lbnVJdGVtU3RhdHVzO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbnRleHRNZW51SXRlbVN0YXR1cyA9IENvbnRleHRNZW51SXRlbVN0YXR1cztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBtaW5pbWF0Y2hcbm1pbmltYXRjaC5NaW5pbWF0Y2ggPSBNaW5pbWF0Y2hcblxudmFyIHBhdGggPSB7IHNlcDogJy8nIH1cbnRyeSB7XG4gIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbn0gY2F0Y2ggKGVyKSB7fVxuXG52YXIgR0xPQlNUQVIgPSBtaW5pbWF0Y2guR0xPQlNUQVIgPSBNaW5pbWF0Y2guR0xPQlNUQVIgPSB7fVxudmFyIGV4cGFuZCA9IHJlcXVpcmUoJ2JyYWNlLWV4cGFuc2lvbicpXG5cbnZhciBwbFR5cGVzID0ge1xuICAnISc6IHsgb3BlbjogJyg/Oig/ISg/OicsIGNsb3NlOiAnKSlbXi9dKj8pJ30sXG4gICc/JzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpPycgfSxcbiAgJysnOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJykrJyB9LFxuICAnKic6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKSonIH0sXG4gICdAJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpJyB9XG59XG5cbi8vIGFueSBzaW5nbGUgdGhpbmcgb3RoZXIgdGhhbiAvXG4vLyBkb24ndCBuZWVkIHRvIGVzY2FwZSAvIHdoZW4gdXNpbmcgbmV3IFJlZ0V4cCgpXG52YXIgcW1hcmsgPSAnW14vXSdcblxuLy8gKiA9PiBhbnkgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbnZhciBzdGFyID0gcW1hcmsgKyAnKj8nXG5cbi8vICoqIHdoZW4gZG90cyBhcmUgYWxsb3dlZC4gIEFueXRoaW5nIGdvZXMsIGV4Y2VwdCAuLiBhbmQgLlxuLy8gbm90ICheIG9yIC8gZm9sbG93ZWQgYnkgb25lIG9yIHR3byBkb3RzIGZvbGxvd2VkIGJ5ICQgb3IgLyksXG4vLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbnZhciB0d29TdGFyRG90ID0gJyg/Oig/ISg/OlxcXFxcXC98XikoPzpcXFxcLnsxLDJ9KSgkfFxcXFxcXC8pKS4pKj8nXG5cbi8vIG5vdCBhIF4gb3IgLyBmb2xsb3dlZCBieSBhIGRvdCxcbi8vIGZvbGxvd2VkIGJ5IGFueXRoaW5nLCBhbnkgbnVtYmVyIG9mIHRpbWVzLlxudmFyIHR3b1N0YXJOb0RvdCA9ICcoPzooPyEoPzpcXFxcXFwvfF4pXFxcXC4pLikqPydcblxuLy8gY2hhcmFjdGVycyB0aGF0IG5lZWQgdG8gYmUgZXNjYXBlZCBpbiBSZWdFeHAuXG52YXIgcmVTcGVjaWFscyA9IGNoYXJTZXQoJygpLip7fSs/W11eJFxcXFwhJylcblxuLy8gXCJhYmNcIiAtPiB7IGE6dHJ1ZSwgYjp0cnVlLCBjOnRydWUgfVxuZnVuY3Rpb24gY2hhclNldCAocykge1xuICByZXR1cm4gcy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChzZXQsIGMpIHtcbiAgICBzZXRbY10gPSB0cnVlXG4gICAgcmV0dXJuIHNldFxuICB9LCB7fSlcbn1cblxuLy8gbm9ybWFsaXplcyBzbGFzaGVzLlxudmFyIHNsYXNoU3BsaXQgPSAvXFwvKy9cblxubWluaW1hdGNoLmZpbHRlciA9IGZpbHRlclxuZnVuY3Rpb24gZmlsdGVyIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHJldHVybiBmdW5jdGlvbiAocCwgaSwgbGlzdCkge1xuICAgIHJldHVybiBtaW5pbWF0Y2gocCwgcGF0dGVybiwgb3B0aW9ucylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHQgKGEsIGIpIHtcbiAgYSA9IGEgfHwge31cbiAgYiA9IGIgfHwge31cbiAgdmFyIHQgPSB7fVxuICBPYmplY3Qua2V5cyhiKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgdFtrXSA9IGJba11cbiAgfSlcbiAgT2JqZWN0LmtleXMoYSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHRba10gPSBhW2tdXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbm1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gbWluaW1hdGNoXG5cbiAgdmFyIG9yaWcgPSBtaW5pbWF0Y2hcblxuICB2YXIgbSA9IGZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcmlnLm1pbmltYXRjaChwLCBwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIG0uTWluaW1hdGNoID0gZnVuY3Rpb24gTWluaW1hdGNoIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBvcmlnLk1pbmltYXRjaChwYXR0ZXJuLCBleHQoZGVmLCBvcHRpb25zKSlcbiAgfVxuXG4gIHJldHVybiBtXG59XG5cbk1pbmltYXRjaC5kZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYgfHwgIU9iamVjdC5rZXlzKGRlZikubGVuZ3RoKSByZXR1cm4gTWluaW1hdGNoXG4gIHJldHVybiBtaW5pbWF0Y2guZGVmYXVsdHMoZGVmKS5NaW5pbWF0Y2hcbn1cblxuZnVuY3Rpb24gbWluaW1hdGNoIChwLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnbG9iIHBhdHRlcm4gc3RyaW5nIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG5cbiAgLy8gc2hvcnRjdXQ6IGNvbW1lbnRzIG1hdGNoIG5vdGhpbmcuXG4gIGlmICghb3B0aW9ucy5ub2NvbW1lbnQgJiYgcGF0dGVybi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gXCJcIiBvbmx5IG1hdGNoZXMgXCJcIlxuICBpZiAocGF0dGVybi50cmltKCkgPT09ICcnKSByZXR1cm4gcCA9PT0gJydcblxuICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKS5tYXRjaChwKVxufVxuXG5mdW5jdGlvbiBNaW5pbWF0Y2ggKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkpIHtcbiAgICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dsb2IgcGF0dGVybiBzdHJpbmcgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgcGF0dGVybiA9IHBhdHRlcm4udHJpbSgpXG5cbiAgLy8gd2luZG93cyBzdXBwb3J0OiBuZWVkIHRvIHVzZSAvLCBub3QgXFxcbiAgaWYgKHBhdGguc2VwICE9PSAnLycpIHtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5zcGxpdChwYXRoLnNlcCkuam9pbignLycpXG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuc2V0ID0gW11cbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuICB0aGlzLnJlZ2V4cCA9IG51bGxcbiAgdGhpcy5uZWdhdGUgPSBmYWxzZVxuICB0aGlzLmNvbW1lbnQgPSBmYWxzZVxuICB0aGlzLmVtcHR5ID0gZmFsc2VcblxuICAvLyBtYWtlIHRoZSBzZXQgb2YgcmVnZXhwcyBldGMuXG4gIHRoaXMubWFrZSgpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7fVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1ha2UgPSBtYWtlXG5mdW5jdGlvbiBtYWtlICgpIHtcbiAgLy8gZG9uJ3QgZG8gaXQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmICh0aGlzLl9tYWRlKSByZXR1cm5cblxuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIGVtcHR5IHBhdHRlcm5zIGFuZCBjb21tZW50cyBtYXRjaCBub3RoaW5nLlxuICBpZiAoIW9wdGlvbnMubm9jb21tZW50ICYmIHBhdHRlcm4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICB0aGlzLmNvbW1lbnQgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgdGhpcy5lbXB0eSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHN0ZXAgMTogZmlndXJlIG91dCBuZWdhdGlvbiwgZXRjLlxuICB0aGlzLnBhcnNlTmVnYXRlKClcblxuICAvLyBzdGVwIDI6IGV4cGFuZCBicmFjZXNcbiAgdmFyIHNldCA9IHRoaXMuZ2xvYlNldCA9IHRoaXMuYnJhY2VFeHBhbmQoKVxuXG4gIGlmIChvcHRpb25zLmRlYnVnKSB0aGlzLmRlYnVnID0gY29uc29sZS5lcnJvclxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gc3RlcCAzOiBub3cgd2UgaGF2ZSBhIHNldCwgc28gdHVybiBlYWNoIG9uZSBpbnRvIGEgc2VyaWVzIG9mIHBhdGgtcG9ydGlvblxuICAvLyBtYXRjaGluZyBwYXR0ZXJucy5cbiAgLy8gVGhlc2Ugd2lsbCBiZSByZWdleHBzLCBleGNlcHQgaW4gdGhlIGNhc2Ugb2YgXCIqKlwiLCB3aGljaCBpc1xuICAvLyBzZXQgdG8gdGhlIEdMT0JTVEFSIG9iamVjdCBmb3IgZ2xvYnN0YXIgYmVoYXZpb3IsXG4gIC8vIGFuZCB3aWxsIG5vdCBjb250YWluIGFueSAvIGNoYXJhY3RlcnNcbiAgc2V0ID0gdGhpcy5nbG9iUGFydHMgPSBzZXQubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoc2xhc2hTcGxpdClcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGdsb2IgLS0+IHJlZ2V4cHNcbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAocywgc2ksIHNldCkge1xuICAgIHJldHVybiBzLm1hcCh0aGlzLnBhcnNlLCB0aGlzKVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gZmlsdGVyIG91dCBldmVyeXRoaW5nIHRoYXQgZGlkbid0IGNvbXBpbGUgcHJvcGVybHkuXG4gIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5pbmRleE9mKGZhbHNlKSA9PT0gLTFcbiAgfSlcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIHRoaXMuc2V0ID0gc2V0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2VOZWdhdGUgPSBwYXJzZU5lZ2F0ZVxuZnVuY3Rpb24gcGFyc2VOZWdhdGUgKCkge1xuICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVyblxuICB2YXIgbmVnYXRlID0gZmFsc2VcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgdmFyIG5lZ2F0ZU9mZnNldCA9IDBcblxuICBpZiAob3B0aW9ucy5ub25lZ2F0ZSkgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXR0ZXJuLmxlbmd0aFxuICAgIDsgaSA8IGwgJiYgcGF0dGVybi5jaGFyQXQoaSkgPT09ICchJ1xuICAgIDsgaSsrKSB7XG4gICAgbmVnYXRlID0gIW5lZ2F0ZVxuICAgIG5lZ2F0ZU9mZnNldCsrXG4gIH1cblxuICBpZiAobmVnYXRlT2Zmc2V0KSB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cihuZWdhdGVPZmZzZXQpXG4gIHRoaXMubmVnYXRlID0gbmVnYXRlXG59XG5cbi8vIEJyYWNlIGV4cGFuc2lvbjpcbi8vIGF7YixjfWQgLT4gYWJkIGFjZFxuLy8gYXtiLH1jIC0+IGFiYyBhY1xuLy8gYXswLi4zfWQgLT4gYTBkIGExZCBhMmQgYTNkXG4vLyBhe2IsY3tkLGV9Zn1nIC0+IGFiZyBhY2RmZyBhY2VmZ1xuLy8gYXtiLGN9ZHtlLGZ9ZyAtPiBhYmRlZyBhY2RlZyBhYmRlZyBhYmRmZ1xuLy9cbi8vIEludmFsaWQgc2V0cyBhcmUgbm90IGV4cGFuZGVkLlxuLy8gYXsyLi59YiAtPiBhezIuLn1iXG4vLyBhe2J9YyAtPiBhe2J9Y1xubWluaW1hdGNoLmJyYWNlRXhwYW5kID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyYWNlRXhwYW5kKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUuYnJhY2VFeHBhbmQgPSBicmFjZUV4cGFuZFxuXG5mdW5jdGlvbiBicmFjZUV4cGFuZCAocGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE1pbmltYXRjaCkge1xuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG4gIH1cblxuICBwYXR0ZXJuID0gdHlwZW9mIHBhdHRlcm4gPT09ICd1bmRlZmluZWQnXG4gICAgPyB0aGlzLnBhdHRlcm4gOiBwYXR0ZXJuXG5cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZGVmaW5lZCBwYXR0ZXJuJylcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5vYnJhY2UgfHxcbiAgICAhcGF0dGVybi5tYXRjaCgvXFx7LipcXH0vKSkge1xuICAgIC8vIHNob3J0Y3V0LiBubyBuZWVkIHRvIGV4cGFuZC5cbiAgICByZXR1cm4gW3BhdHRlcm5dXG4gIH1cblxuICByZXR1cm4gZXhwYW5kKHBhdHRlcm4pXG59XG5cbi8vIHBhcnNlIGEgY29tcG9uZW50IG9mIHRoZSBleHBhbmRlZCBzZXQuXG4vLyBBdCB0aGlzIHBvaW50LCBubyBwYXR0ZXJuIG1heSBjb250YWluIFwiL1wiIGluIGl0XG4vLyBzbyB3ZSdyZSBnb2luZyB0byByZXR1cm4gYSAyZCBhcnJheSwgd2hlcmUgZWFjaCBlbnRyeSBpcyB0aGUgZnVsbFxuLy8gcGF0dGVybiwgc3BsaXQgb24gJy8nLCBhbmQgdGhlbiB0dXJuZWQgaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbi8vIEEgcmVnZXhwIGlzIG1hZGUgYXQgdGhlIGVuZCB3aGljaCBqb2lucyBlYWNoIGFycmF5IHdpdGggYW5cbi8vIGVzY2FwZWQgLywgYW5kIGFub3RoZXIgZnVsbCBvbmUgd2hpY2ggam9pbnMgZWFjaCByZWdleHAgd2l0aCB8LlxuLy9cbi8vIEZvbGxvd2luZyB0aGUgbGVhZCBvZiBCYXNoIDQuMSwgbm90ZSB0aGF0IFwiKipcIiBvbmx5IGhhcyBzcGVjaWFsIG1lYW5pbmdcbi8vIHdoZW4gaXQgaXMgdGhlICpvbmx5KiB0aGluZyBpbiBhIHBhdGggcG9ydGlvbi4gIE90aGVyd2lzZSwgYW55IHNlcmllc1xuLy8gb2YgKiBpcyBlcXVpdmFsZW50IHRvIGEgc2luZ2xlICouICBHbG9ic3RhciBiZWhhdmlvciBpcyBlbmFibGVkIGJ5XG4vLyBkZWZhdWx0LCBhbmQgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgb3B0aW9ucy5ub2dsb2JzdGFyLlxuTWluaW1hdGNoLnByb3RvdHlwZS5wYXJzZSA9IHBhcnNlXG52YXIgU1VCUEFSU0UgPSB7fVxuZnVuY3Rpb24gcGFyc2UgKHBhdHRlcm4sIGlzU3ViKSB7XG4gIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDEwMjQgKiA2NCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhdHRlcm4gaXMgdG9vIGxvbmcnKVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBzaG9ydGN1dHNcbiAgaWYgKCFvcHRpb25zLm5vZ2xvYnN0YXIgJiYgcGF0dGVybiA9PT0gJyoqJykgcmV0dXJuIEdMT0JTVEFSXG4gIGlmIChwYXR0ZXJuID09PSAnJykgcmV0dXJuICcnXG5cbiAgdmFyIHJlID0gJydcbiAgdmFyIGhhc01hZ2ljID0gISFvcHRpb25zLm5vY2FzZVxuICB2YXIgZXNjYXBpbmcgPSBmYWxzZVxuICAvLyA/ID0+IG9uZSBzaW5nbGUgY2hhcmFjdGVyXG4gIHZhciBwYXR0ZXJuTGlzdFN0YWNrID0gW11cbiAgdmFyIG5lZ2F0aXZlTGlzdHMgPSBbXVxuICB2YXIgc3RhdGVDaGFyXG4gIHZhciBpbkNsYXNzID0gZmFsc2VcbiAgdmFyIHJlQ2xhc3NTdGFydCA9IC0xXG4gIHZhciBjbGFzc1N0YXJ0ID0gLTFcbiAgLy8gLiBhbmQgLi4gbmV2ZXIgbWF0Y2ggYW55dGhpbmcgdGhhdCBkb2Vzbid0IHN0YXJ0IHdpdGggLixcbiAgLy8gZXZlbiB3aGVuIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgdmFyIHBhdHRlcm5TdGFydCA9IHBhdHRlcm4uY2hhckF0KDApID09PSAnLicgPyAnJyAvLyBhbnl0aGluZ1xuICAvLyBub3QgKHN0YXJ0IG9yIC8gZm9sbG93ZWQgYnkgLiBvciAuLiBmb2xsb3dlZCBieSAvIG9yIGVuZClcbiAgOiBvcHRpb25zLmRvdCA/ICcoPyEoPzpefFxcXFxcXC8pXFxcXC57MSwyfSg/OiR8XFxcXFxcLykpJ1xuICA6ICcoPyFcXFxcLiknXG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGZ1bmN0aW9uIGNsZWFyU3RhdGVDaGFyICgpIHtcbiAgICBpZiAoc3RhdGVDaGFyKSB7XG4gICAgICAvLyB3ZSBoYWQgc29tZSBzdGF0ZS10cmFja2luZyBjaGFyYWN0ZXJcbiAgICAgIC8vIHRoYXQgd2Fzbid0IGNvbnN1bWVkIGJ5IHRoaXMgcGFzcy5cbiAgICAgIHN3aXRjaCAoc3RhdGVDaGFyKSB7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIHJlICs9IHN0YXJcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgcmUgKz0gcW1hcmtcbiAgICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBzdGF0ZUNoYXJcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHNlbGYuZGVidWcoJ2NsZWFyU3RhdGVDaGFyICVqICVqJywgc3RhdGVDaGFyLCByZSlcbiAgICAgIHN0YXRlQ2hhciA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCBjXG4gICAgOyAoaSA8IGxlbikgJiYgKGMgPSBwYXR0ZXJuLmNoYXJBdChpKSlcbiAgICA7IGkrKykge1xuICAgIHRoaXMuZGVidWcoJyVzXFx0JXMgJXMgJWonLCBwYXR0ZXJuLCBpLCByZSwgYylcblxuICAgIC8vIHNraXAgb3ZlciBhbnkgdGhhdCBhcmUgZXNjYXBlZC5cbiAgICBpZiAoZXNjYXBpbmcgJiYgcmVTcGVjaWFsc1tjXSkge1xuICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICAvLyBjb21wbGV0ZWx5IG5vdCBhbGxvd2VkLCBldmVuIGVzY2FwZWQuXG4gICAgICAgIC8vIFNob3VsZCBhbHJlYWR5IGJlIHBhdGgtc3BsaXQgYnkgbm93LlxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgZXNjYXBpbmcgPSB0cnVlXG4gICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGUgdmFyaW91cyBzdGF0ZUNoYXIgdmFsdWVzXG4gICAgICAvLyBmb3IgdGhlIFwiZXh0Z2xvYlwiIHN0dWZmLlxuICAgICAgY2FzZSAnPyc6XG4gICAgICBjYXNlICcqJzpcbiAgICAgIGNhc2UgJysnOlxuICAgICAgY2FzZSAnQCc6XG4gICAgICBjYXNlICchJzpcbiAgICAgICAgdGhpcy5kZWJ1ZygnJXNcXHQlcyAlcyAlaiA8LS0gc3RhdGVDaGFyJywgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAgICAgLy8gYWxsIG9mIHRob3NlIGFyZSBsaXRlcmFscyBpbnNpZGUgYSBjbGFzcywgZXhjZXB0IHRoYXRcbiAgICAgICAgLy8gdGhlIGdsb2IgWyFhXSBtZWFucyBbXmFdIGluIHJlZ2V4cFxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHRoaXMuZGVidWcoJyAgaW4gY2xhc3MnKVxuICAgICAgICAgIGlmIChjID09PSAnIScgJiYgaSA9PT0gY2xhc3NTdGFydCArIDEpIGMgPSAnXidcbiAgICAgICAgICByZSArPSBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHN0YXRlQ2hhciwgdGhlbiBpdCBtZWFuc1xuICAgICAgICAvLyB0aGF0IHRoZXJlIHdhcyBzb21ldGhpbmcgbGlrZSAqKiBvciArPyBpbiB0aGVyZS5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSBzdGF0ZUNoYXIsIHRoZW4gcHJvY2VlZCB3aXRoIHRoaXMgb25lLlxuICAgICAgICBzZWxmLmRlYnVnKCdjYWxsIGNsZWFyU3RhdGVDaGFyICVqJywgc3RhdGVDaGFyKVxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIHN0YXRlQ2hhciA9IGNcbiAgICAgICAgLy8gaWYgZXh0Z2xvYiBpcyBkaXNhYmxlZCwgdGhlbiArKGFzZGZ8Zm9vKSBpc24ndCBhIHRoaW5nLlxuICAgICAgICAvLyBqdXN0IGNsZWFyIHRoZSBzdGF0ZWNoYXIgKm5vdyosIHJhdGhlciB0aGFuIGV2ZW4gZGl2aW5nIGludG9cbiAgICAgICAgLy8gdGhlIHBhdHRlcm5MaXN0IHN0dWZmLlxuICAgICAgICBpZiAob3B0aW9ucy5ub2V4dCkgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJygnXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGVDaGFyKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwoJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBwYXR0ZXJuTGlzdFN0YWNrLnB1c2goe1xuICAgICAgICAgIHR5cGU6IHN0YXRlQ2hhcixcbiAgICAgICAgICBzdGFydDogaSAtIDEsXG4gICAgICAgICAgcmVTdGFydDogcmUubGVuZ3RoLFxuICAgICAgICAgIG9wZW46IHBsVHlwZXNbc3RhdGVDaGFyXS5vcGVuLFxuICAgICAgICAgIGNsb3NlOiBwbFR5cGVzW3N0YXRlQ2hhcl0uY2xvc2VcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIHJlICs9IHN0YXRlQ2hhciA9PT0gJyEnID8gJyg/Oig/ISg/OicgOiAnKD86J1xuICAgICAgICB0aGlzLmRlYnVnKCdwbFR5cGUgJWogJWonLCBzdGF0ZUNoYXIsIHJlKVxuICAgICAgICBzdGF0ZUNoYXIgPSBmYWxzZVxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnKSc6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJlICs9ICdcXFxcKSdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgdmFyIHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKVxuICAgICAgICAvLyBuZWdhdGlvbiBpcyAoPzooPyFqcylbXi9dKilcbiAgICAgICAgLy8gVGhlIG90aGVycyBhcmUgKD86PHBhdHRlcm4+KTx0eXBlPlxuICAgICAgICByZSArPSBwbC5jbG9zZVxuICAgICAgICBpZiAocGwudHlwZSA9PT0gJyEnKSB7XG4gICAgICAgICAgbmVnYXRpdmVMaXN0cy5wdXNoKHBsKVxuICAgICAgICB9XG4gICAgICAgIHBsLnJlRW5kID0gcmUubGVuZ3RoXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICd8JzpcbiAgICAgICAgaWYgKGluQ2xhc3MgfHwgIXBhdHRlcm5MaXN0U3RhY2subGVuZ3RoIHx8IGVzY2FwaW5nKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFx8J1xuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICByZSArPSAnfCdcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIC8vIHRoZXNlIGFyZSBtb3N0bHkgdGhlIHNhbWUgaW4gcmVnZXhwIGFuZCBnbG9iXG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgLy8gc3dhbGxvdyBhbnkgc3RhdGUtdHJhY2tpbmcgY2hhciBiZWZvcmUgdGhlIFtcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpbkNsYXNzID0gdHJ1ZVxuICAgICAgICBjbGFzc1N0YXJ0ID0gaVxuICAgICAgICByZUNsYXNzU3RhcnQgPSByZS5sZW5ndGhcbiAgICAgICAgcmUgKz0gY1xuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnXSc6XG4gICAgICAgIC8vICBhIHJpZ2h0IGJyYWNrZXQgc2hhbGwgbG9zZSBpdHMgc3BlY2lhbFxuICAgICAgICAvLyAgbWVhbmluZyBhbmQgcmVwcmVzZW50IGl0c2VsZiBpblxuICAgICAgICAvLyAgYSBicmFja2V0IGV4cHJlc3Npb24gaWYgaXQgb2NjdXJzXG4gICAgICAgIC8vICBmaXJzdCBpbiB0aGUgbGlzdC4gIC0tIFBPU0lYLjIgMi44LjMuMlxuICAgICAgICBpZiAoaSA9PT0gY2xhc3NTdGFydCArIDEgfHwgIWluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBjXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gICAgICAgIC8vIFwiW3otYV1cIiBpcyB2YWxpZCwgZXF1aXZhbGVudCB0byBcIlxcW3otYVxcXVwiXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgLy8gc3BsaXQgd2hlcmUgdGhlIGxhc3QgWyB3YXMsIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlXG4gICAgICAgICAgLy8gYW4gaW52YWxpZCByZS4gaWYgc28sIHJlLXdhbGsgdGhlIGNvbnRlbnRzIG9mIHRoZVxuICAgICAgICAgIC8vIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZSBhbnkgY2hhcmFjdGVycyB0aGF0XG4gICAgICAgICAgLy8gd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgICAgICAgIC8vIFRPRE86IEl0IHdvdWxkIHByb2JhYmx5IGJlIGZhc3RlciB0byBkZXRlcm1pbmUgdGhpc1xuICAgICAgICAgIC8vIHdpdGhvdXQgYSB0cnkvY2F0Y2ggYW5kIGEgbmV3IFJlZ0V4cCwgYnV0IGl0J3MgdHJpY2t5XG4gICAgICAgICAgLy8gdG8gZG8gc2FmZWx5LiAgRm9yIG5vdywgdGhpcyBpcyBzYWZlIGFuZCB3b3Jrcy5cbiAgICAgICAgICB2YXIgY3MgPSBwYXR0ZXJuLnN1YnN0cmluZyhjbGFzc1N0YXJ0ICsgMSwgaSlcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgUmVnRXhwKCdbJyArIGNzICsgJ10nKVxuICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAvLyBub3QgYSB2YWxpZCBjbGFzcyFcbiAgICAgICAgICAgIHZhciBzcCA9IHRoaXMucGFyc2UoY3MsIFNVQlBBUlNFKVxuICAgICAgICAgICAgcmUgPSByZS5zdWJzdHIoMCwgcmVDbGFzc1N0YXJ0KSArICdcXFxcWycgKyBzcFswXSArICdcXFxcXSdcbiAgICAgICAgICAgIGhhc01hZ2ljID0gaGFzTWFnaWMgfHwgc3BbMV1cbiAgICAgICAgICAgIGluQ2xhc3MgPSBmYWxzZVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5pc2ggdXAgdGhlIGNsYXNzLlxuICAgICAgICBoYXNNYWdpYyA9IHRydWVcbiAgICAgICAgaW5DbGFzcyA9IGZhbHNlXG4gICAgICAgIHJlICs9IGNcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHN3YWxsb3cgYW55IHN0YXRlIGNoYXIgdGhhdCB3YXNuJ3QgY29uc3VtZWRcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuXG4gICAgICAgIGlmIChlc2NhcGluZykge1xuICAgICAgICAgIC8vIG5vIG5lZWRcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAocmVTcGVjaWFsc1tjXVxuICAgICAgICAgICYmICEoYyA9PT0gJ14nICYmIGluQ2xhc3MpKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnXG4gICAgICAgIH1cblxuICAgICAgICByZSArPSBjXG5cbiAgICB9IC8vIHN3aXRjaFxuICB9IC8vIGZvclxuXG4gIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBsZWZ0IGEgY2xhc3Mgb3Blbi5cbiAgLy8gXCJbYWJjXCIgaXMgdmFsaWQsIGVxdWl2YWxlbnQgdG8gXCJcXFthYmNcIlxuICBpZiAoaW5DbGFzcykge1xuICAgIC8vIHNwbGl0IHdoZXJlIHRoZSBsYXN0IFsgd2FzLCBhbmQgZXNjYXBlIGl0XG4gICAgLy8gdGhpcyBpcyBhIGh1Z2UgcGl0YS4gIFdlIG5vdyBoYXZlIHRvIHJlLXdhbGtcbiAgICAvLyB0aGUgY29udGVudHMgb2YgdGhlIHdvdWxkLWJlIGNsYXNzIHRvIHJlLXRyYW5zbGF0ZVxuICAgIC8vIGFueSBjaGFyYWN0ZXJzIHRoYXQgd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pc1xuICAgIGNzID0gcGF0dGVybi5zdWJzdHIoY2xhc3NTdGFydCArIDEpXG4gICAgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICByZSA9IHJlLnN1YnN0cigwLCByZUNsYXNzU3RhcnQpICsgJ1xcXFxbJyArIHNwWzBdXG4gICAgaGFzTWFnaWMgPSBoYXNNYWdpYyB8fCBzcFsxXVxuICB9XG5cbiAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGhhZCBhICsoIHRoaW5nIGF0IHRoZSAqZW5kKlxuICAvLyBvZiB0aGUgcGF0dGVybi5cbiAgLy8gZWFjaCBwYXR0ZXJuIGxpc3Qgc3RhY2sgYWRkcyAzIGNoYXJzLCBhbmQgd2UgbmVlZCB0byBnbyB0aHJvdWdoXG4gIC8vIGFuZCBlc2NhcGUgYW55IHwgY2hhcnMgdGhhdCB3ZXJlIHBhc3NlZCB0aHJvdWdoIGFzLWlzIGZvciB0aGUgcmVnZXhwLlxuICAvLyBHbyB0aHJvdWdoIGFuZCBlc2NhcGUgdGhlbSwgdGFraW5nIGNhcmUgbm90IHRvIGRvdWJsZS1lc2NhcGUgYW55XG4gIC8vIHwgY2hhcnMgdGhhdCB3ZXJlIGFscmVhZHkgZXNjYXBlZC5cbiAgZm9yIChwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCk7IHBsOyBwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKCkpIHtcbiAgICB2YXIgdGFpbCA9IHJlLnNsaWNlKHBsLnJlU3RhcnQgKyBwbC5vcGVuLmxlbmd0aClcbiAgICB0aGlzLmRlYnVnKCdzZXR0aW5nIHRhaWwnLCByZSwgcGwpXG4gICAgLy8gbWF5YmUgc29tZSBldmVuIG51bWJlciBvZiBcXCwgdGhlbiBtYXliZSAxIFxcLCBmb2xsb3dlZCBieSBhIHxcbiAgICB0YWlsID0gdGFpbC5yZXBsYWNlKC8oKD86XFxcXHsyfSl7MCw2NH0pKFxcXFw/KVxcfC9nLCBmdW5jdGlvbiAoXywgJDEsICQyKSB7XG4gICAgICBpZiAoISQyKSB7XG4gICAgICAgIC8vIHRoZSB8IGlzbid0IGFscmVhZHkgZXNjYXBlZCwgc28gZXNjYXBlIGl0LlxuICAgICAgICAkMiA9ICdcXFxcJ1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHRvIGVzY2FwZSBhbGwgdGhvc2Ugc2xhc2hlcyAqYWdhaW4qLCB3aXRob3V0IGVzY2FwaW5nIHRoZVxuICAgICAgLy8gb25lIHRoYXQgd2UgbmVlZCBmb3IgZXNjYXBpbmcgdGhlIHwgY2hhcmFjdGVyLiAgQXMgaXQgd29ya3Mgb3V0LFxuICAgICAgLy8gZXNjYXBpbmcgYW4gZXZlbiBudW1iZXIgb2Ygc2xhc2hlcyBjYW4gYmUgZG9uZSBieSBzaW1wbHkgcmVwZWF0aW5nXG4gICAgICAvLyBpdCBleGFjdGx5IGFmdGVyIGl0c2VsZi4gIFRoYXQncyB3aHkgdGhpcyB0cmljayB3b3Jrcy5cbiAgICAgIC8vXG4gICAgICAvLyBJIGFtIHNvcnJ5IHRoYXQgeW91IGhhdmUgdG8gc2VlIHRoaXMuXG4gICAgICByZXR1cm4gJDEgKyAkMSArICQyICsgJ3wnXG4gICAgfSlcblxuICAgIHRoaXMuZGVidWcoJ3RhaWw9JWpcXG4gICAlcycsIHRhaWwsIHRhaWwsIHBsLCByZSlcbiAgICB2YXIgdCA9IHBsLnR5cGUgPT09ICcqJyA/IHN0YXJcbiAgICAgIDogcGwudHlwZSA9PT0gJz8nID8gcW1hcmtcbiAgICAgIDogJ1xcXFwnICsgcGwudHlwZVxuXG4gICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgcmUgPSByZS5zbGljZSgwLCBwbC5yZVN0YXJ0KSArIHQgKyAnXFxcXCgnICsgdGFpbFxuICB9XG5cbiAgLy8gaGFuZGxlIHRyYWlsaW5nIHRoaW5ncyB0aGF0IG9ubHkgbWF0dGVyIGF0IHRoZSB2ZXJ5IGVuZC5cbiAgY2xlYXJTdGF0ZUNoYXIoKVxuICBpZiAoZXNjYXBpbmcpIHtcbiAgICAvLyB0cmFpbGluZyBcXFxcXG4gICAgcmUgKz0gJ1xcXFxcXFxcJ1xuICB9XG5cbiAgLy8gb25seSBuZWVkIHRvIGFwcGx5IHRoZSBub2RvdCBzdGFydCBpZiB0aGUgcmUgc3RhcnRzIHdpdGhcbiAgLy8gc29tZXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgY2FwdHVyZSBhIGRvdFxuICB2YXIgYWRkUGF0dGVyblN0YXJ0ID0gZmFsc2VcbiAgc3dpdGNoIChyZS5jaGFyQXQoMCkpIHtcbiAgICBjYXNlICcuJzpcbiAgICBjYXNlICdbJzpcbiAgICBjYXNlICcoJzogYWRkUGF0dGVyblN0YXJ0ID0gdHJ1ZVxuICB9XG5cbiAgLy8gSGFjayB0byB3b3JrIGFyb3VuZCBsYWNrIG9mIG5lZ2F0aXZlIGxvb2tiZWhpbmQgaW4gSlNcbiAgLy8gQSBwYXR0ZXJuIGxpa2U6ICouISh4KS4hKHl8eikgbmVlZHMgdG8gZW5zdXJlIHRoYXQgYSBuYW1lXG4gIC8vIGxpa2UgJ2EueHl6Lnl6JyBkb2Vzbid0IG1hdGNoLiAgU28sIHRoZSBmaXJzdCBuZWdhdGl2ZVxuICAvLyBsb29rYWhlYWQsIGhhcyB0byBsb29rIEFMTCB0aGUgd2F5IGFoZWFkLCB0byB0aGUgZW5kIG9mXG4gIC8vIHRoZSBwYXR0ZXJuLlxuICBmb3IgKHZhciBuID0gbmVnYXRpdmVMaXN0cy5sZW5ndGggLSAxOyBuID4gLTE7IG4tLSkge1xuICAgIHZhciBubCA9IG5lZ2F0aXZlTGlzdHNbbl1cblxuICAgIHZhciBubEJlZm9yZSA9IHJlLnNsaWNlKDAsIG5sLnJlU3RhcnQpXG4gICAgdmFyIG5sRmlyc3QgPSByZS5zbGljZShubC5yZVN0YXJ0LCBubC5yZUVuZCAtIDgpXG4gICAgdmFyIG5sTGFzdCA9IHJlLnNsaWNlKG5sLnJlRW5kIC0gOCwgbmwucmVFbmQpXG4gICAgdmFyIG5sQWZ0ZXIgPSByZS5zbGljZShubC5yZUVuZClcblxuICAgIG5sTGFzdCArPSBubEFmdGVyXG5cbiAgICAvLyBIYW5kbGUgbmVzdGVkIHN0dWZmIGxpa2UgKigqLmpzfCEoKi5qc29uKSksIHdoZXJlIG9wZW4gcGFyZW5zXG4gICAgLy8gbWVhbiB0aGF0IHdlIHNob3VsZCAqbm90KiBpbmNsdWRlIHRoZSApIGluIHRoZSBiaXQgdGhhdCBpcyBjb25zaWRlcmVkXG4gICAgLy8gXCJhZnRlclwiIHRoZSBuZWdhdGVkIHNlY3Rpb24uXG4gICAgdmFyIG9wZW5QYXJlbnNCZWZvcmUgPSBubEJlZm9yZS5zcGxpdCgnKCcpLmxlbmd0aCAtIDFcbiAgICB2YXIgY2xlYW5BZnRlciA9IG5sQWZ0ZXJcbiAgICBmb3IgKGkgPSAwOyBpIDwgb3BlblBhcmVuc0JlZm9yZTsgaSsrKSB7XG4gICAgICBjbGVhbkFmdGVyID0gY2xlYW5BZnRlci5yZXBsYWNlKC9cXClbKyo/XT8vLCAnJylcbiAgICB9XG4gICAgbmxBZnRlciA9IGNsZWFuQWZ0ZXJcblxuICAgIHZhciBkb2xsYXIgPSAnJ1xuICAgIGlmIChubEFmdGVyID09PSAnJyAmJiBpc1N1YiAhPT0gU1VCUEFSU0UpIHtcbiAgICAgIGRvbGxhciA9ICckJ1xuICAgIH1cbiAgICB2YXIgbmV3UmUgPSBubEJlZm9yZSArIG5sRmlyc3QgKyBubEFmdGVyICsgZG9sbGFyICsgbmxMYXN0XG4gICAgcmUgPSBuZXdSZVxuICB9XG5cbiAgLy8gaWYgdGhlIHJlIGlzIG5vdCBcIlwiIGF0IHRoaXMgcG9pbnQsIHRoZW4gd2UgbmVlZCB0byBtYWtlIHN1cmVcbiAgLy8gaXQgZG9lc24ndCBtYXRjaCBhZ2FpbnN0IGFuIGVtcHR5IHBhdGggcGFydC5cbiAgLy8gT3RoZXJ3aXNlIGEvKiB3aWxsIG1hdGNoIGEvLCB3aGljaCBpdCBzaG91bGQgbm90LlxuICBpZiAocmUgIT09ICcnICYmIGhhc01hZ2ljKSB7XG4gICAgcmUgPSAnKD89LiknICsgcmVcbiAgfVxuXG4gIGlmIChhZGRQYXR0ZXJuU3RhcnQpIHtcbiAgICByZSA9IHBhdHRlcm5TdGFydCArIHJlXG4gIH1cblxuICAvLyBwYXJzaW5nIGp1c3QgYSBwaWVjZSBvZiBhIGxhcmdlciBwYXR0ZXJuLlxuICBpZiAoaXNTdWIgPT09IFNVQlBBUlNFKSB7XG4gICAgcmV0dXJuIFtyZSwgaGFzTWFnaWNdXG4gIH1cblxuICAvLyBza2lwIHRoZSByZWdleHAgZm9yIG5vbi1tYWdpY2FsIHBhdHRlcm5zXG4gIC8vIHVuZXNjYXBlIGFueXRoaW5nIGluIGl0LCB0aG91Z2gsIHNvIHRoYXQgaXQnbGwgYmVcbiAgLy8gYW4gZXhhY3QgbWF0Y2ggYWdhaW5zdCBhIGZpbGUgZXRjLlxuICBpZiAoIWhhc01hZ2ljKSB7XG4gICAgcmV0dXJuIGdsb2JVbmVzY2FwZShwYXR0ZXJuKVxuICB9XG5cbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyAnaScgOiAnJ1xuICB0cnkge1xuICAgIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIHJlICsgJyQnLCBmbGFncylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICAvLyBJZiBpdCB3YXMgYW4gaW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb24sIHRoZW4gaXQgY2FuJ3QgbWF0Y2hcbiAgICAvLyBhbnl0aGluZy4gIFRoaXMgdHJpY2sgbG9va3MgZm9yIGEgY2hhcmFjdGVyIGFmdGVyIHRoZSBlbmQgb2ZcbiAgICAvLyB0aGUgc3RyaW5nLCB3aGljaCBpcyBvZiBjb3Vyc2UgaW1wb3NzaWJsZSwgZXhjZXB0IGluIG11bHRpLWxpbmVcbiAgICAvLyBtb2RlLCBidXQgaXQncyBub3QgYSAvbSByZWdleC5cbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnJC4nKVxuICB9XG5cbiAgcmVnRXhwLl9nbG9iID0gcGF0dGVyblxuICByZWdFeHAuX3NyYyA9IHJlXG5cbiAgcmV0dXJuIHJlZ0V4cFxufVxuXG5taW5pbWF0Y2gubWFrZVJlID0gZnVuY3Rpb24gKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucyB8fCB7fSkubWFrZVJlKClcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlUmUgPSBtYWtlUmVcbmZ1bmN0aW9uIG1ha2VSZSAoKSB7XG4gIGlmICh0aGlzLnJlZ2V4cCB8fCB0aGlzLnJlZ2V4cCA9PT0gZmFsc2UpIHJldHVybiB0aGlzLnJlZ2V4cFxuXG4gIC8vIGF0IHRoaXMgcG9pbnQsIHRoaXMuc2V0IGlzIGEgMmQgYXJyYXkgb2YgcGFydGlhbFxuICAvLyBwYXR0ZXJuIHN0cmluZ3MsIG9yIFwiKipcIi5cbiAgLy9cbiAgLy8gSXQncyBiZXR0ZXIgdG8gdXNlIC5tYXRjaCgpLiAgVGhpcyBmdW5jdGlvbiBzaG91bGRuJ3RcbiAgLy8gYmUgdXNlZCwgcmVhbGx5LCBidXQgaXQncyBwcmV0dHkgY29udmVuaWVudCBzb21ldGltZXMsXG4gIC8vIHdoZW4geW91IGp1c3Qgd2FudCB0byB3b3JrIHdpdGggYSByZWdleC5cbiAgdmFyIHNldCA9IHRoaXMuc2V0XG5cbiAgaWYgKCFzZXQubGVuZ3RoKSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICAgIHJldHVybiB0aGlzLnJlZ2V4cFxuICB9XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdmFyIHR3b1N0YXIgPSBvcHRpb25zLm5vZ2xvYnN0YXIgPyBzdGFyXG4gICAgOiBvcHRpb25zLmRvdCA/IHR3b1N0YXJEb3RcbiAgICA6IHR3b1N0YXJOb0RvdFxuICB2YXIgZmxhZ3MgPSBvcHRpb25zLm5vY2FzZSA/ICdpJyA6ICcnXG5cbiAgdmFyIHJlID0gc2V0Lm1hcChmdW5jdGlvbiAocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIChwID09PSBHTE9CU1RBUikgPyB0d29TdGFyXG4gICAgICA6ICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpID8gcmVnRXhwRXNjYXBlKHApXG4gICAgICA6IHAuX3NyY1xuICAgIH0pLmpvaW4oJ1xcXFxcXC8nKVxuICB9KS5qb2luKCd8JylcblxuICAvLyBtdXN0IG1hdGNoIGVudGlyZSBwYXR0ZXJuXG4gIC8vIGVuZGluZyBpbiBhICogb3IgKiogd2lsbCBtYWtlIGl0IGxlc3Mgc3RyaWN0LlxuICByZSA9ICdeKD86JyArIHJlICsgJykkJ1xuXG4gIC8vIGNhbiBtYXRjaCBhbnl0aGluZywgYXMgbG9uZyBhcyBpdCdzIG5vdCB0aGlzLlxuICBpZiAodGhpcy5uZWdhdGUpIHJlID0gJ14oPyEnICsgcmUgKyAnKS4qJCdcblxuICB0cnkge1xuICAgIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChyZSwgZmxhZ3MpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgdGhpcy5yZWdleHAgPSBmYWxzZVxuICB9XG4gIHJldHVybiB0aGlzLnJlZ2V4cFxufVxuXG5taW5pbWF0Y2gubWF0Y2ggPSBmdW5jdGlvbiAobGlzdCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbW0gPSBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpXG4gIGxpc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBtbS5tYXRjaChmKVxuICB9KVxuICBpZiAobW0ub3B0aW9ucy5ub251bGwgJiYgIWxpc3QubGVuZ3RoKSB7XG4gICAgbGlzdC5wdXNoKHBhdHRlcm4pXG4gIH1cbiAgcmV0dXJuIGxpc3Rcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaCA9IG1hdGNoXG5mdW5jdGlvbiBtYXRjaCAoZiwgcGFydGlhbCkge1xuICB0aGlzLmRlYnVnKCdtYXRjaCcsIGYsIHRoaXMucGF0dGVybilcbiAgLy8gc2hvcnQtY2lyY3VpdCBpbiB0aGUgY2FzZSBvZiBidXN0ZWQgdGhpbmdzLlxuICAvLyBjb21tZW50cywgZXRjLlxuICBpZiAodGhpcy5jb21tZW50KSByZXR1cm4gZmFsc2VcbiAgaWYgKHRoaXMuZW1wdHkpIHJldHVybiBmID09PSAnJ1xuXG4gIGlmIChmID09PSAnLycgJiYgcGFydGlhbCkgcmV0dXJuIHRydWVcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIHdpbmRvd3M6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICBpZiAocGF0aC5zZXAgIT09ICcvJykge1xuICAgIGYgPSBmLnNwbGl0KHBhdGguc2VwKS5qb2luKCcvJylcbiAgfVxuXG4gIC8vIHRyZWF0IHRoZSB0ZXN0IHBhdGggYXMgYSBzZXQgb2YgcGF0aHBhcnRzLlxuICBmID0gZi5zcGxpdChzbGFzaFNwbGl0KVxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NwbGl0JywgZilcblxuICAvLyBqdXN0IE9ORSBvZiB0aGUgcGF0dGVybiBzZXRzIGluIHRoaXMuc2V0IG5lZWRzIHRvIG1hdGNoXG4gIC8vIGluIG9yZGVyIGZvciBpdCB0byBiZSB2YWxpZC4gIElmIG5lZ2F0aW5nLCB0aGVuIGp1c3Qgb25lXG4gIC8vIG1hdGNoIG1lYW5zIHRoYXQgd2UgaGF2ZSBmYWlsZWQuXG4gIC8vIEVpdGhlciB3YXksIHJldHVybiBvbiB0aGUgZmlyc3QgaGl0LlxuXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgJ3NldCcsIHNldClcblxuICAvLyBGaW5kIHRoZSBiYXNlbmFtZSBvZiB0aGUgcGF0aCBieSBsb29raW5nIGZvciB0aGUgbGFzdCBub24tZW1wdHkgc2VnbWVudFxuICB2YXIgZmlsZW5hbWVcbiAgdmFyIGlcbiAgZm9yIChpID0gZi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZpbGVuYW1lID0gZltpXVxuICAgIGlmIChmaWxlbmFtZSkgYnJlYWtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGF0dGVybiA9IHNldFtpXVxuICAgIHZhciBmaWxlID0gZlxuICAgIGlmIChvcHRpb25zLm1hdGNoQmFzZSAmJiBwYXR0ZXJuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZmlsZSA9IFtmaWxlbmFtZV1cbiAgICB9XG4gICAgdmFyIGhpdCA9IHRoaXMubWF0Y2hPbmUoZmlsZSwgcGF0dGVybiwgcGFydGlhbClcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuICF0aGlzLm5lZ2F0ZVxuICAgIH1cbiAgfVxuXG4gIC8vIGRpZG4ndCBnZXQgYW55IGhpdHMuICB0aGlzIGlzIHN1Y2Nlc3MgaWYgaXQncyBhIG5lZ2F0aXZlXG4gIC8vIHBhdHRlcm4sIGZhaWx1cmUgb3RoZXJ3aXNlLlxuICBpZiAob3B0aW9ucy5mbGlwTmVnYXRlKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHRoaXMubmVnYXRlXG59XG5cbi8vIHNldCBwYXJ0aWFsIHRvIHRydWUgdG8gdGVzdCBpZiwgZm9yIGV4YW1wbGUsXG4vLyBcIi9hL2JcIiBtYXRjaGVzIHRoZSBzdGFydCBvZiBcIi8qL2IvKi9kXCJcbi8vIFBhcnRpYWwgbWVhbnMsIGlmIHlvdSBydW4gb3V0IG9mIGZpbGUgYmVmb3JlIHlvdSBydW5cbi8vIG91dCBvZiBwYXR0ZXJuLCB0aGVuIHRoYXQncyBmaW5lLCBhcyBsb25nIGFzIGFsbFxuLy8gdGhlIHBhcnRzIG1hdGNoLlxuTWluaW1hdGNoLnByb3RvdHlwZS5tYXRjaE9uZSA9IGZ1bmN0aW9uIChmaWxlLCBwYXR0ZXJuLCBwYXJ0aWFsKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLFxuICAgIHsgJ3RoaXMnOiB0aGlzLCBmaWxlOiBmaWxlLCBwYXR0ZXJuOiBwYXR0ZXJuIH0pXG5cbiAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUnLCBmaWxlLmxlbmd0aCwgcGF0dGVybi5sZW5ndGgpXG5cbiAgZm9yICh2YXIgZmkgPSAwLFxuICAgICAgcGkgPSAwLFxuICAgICAgZmwgPSBmaWxlLmxlbmd0aCxcbiAgICAgIHBsID0gcGF0dGVybi5sZW5ndGhcbiAgICAgIDsgKGZpIDwgZmwpICYmIChwaSA8IHBsKVxuICAgICAgOyBmaSsrLCBwaSsrKSB7XG4gICAgdGhpcy5kZWJ1ZygnbWF0Y2hPbmUgbG9vcCcpXG4gICAgdmFyIHAgPSBwYXR0ZXJuW3BpXVxuICAgIHZhciBmID0gZmlsZVtmaV1cblxuICAgIHRoaXMuZGVidWcocGF0dGVybiwgcCwgZilcblxuICAgIC8vIHNob3VsZCBiZSBpbXBvc3NpYmxlLlxuICAgIC8vIHNvbWUgaW52YWxpZCByZWdleHAgc3R1ZmYgaW4gdGhlIHNldC5cbiAgICBpZiAocCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHAgPT09IEdMT0JTVEFSKSB7XG4gICAgICB0aGlzLmRlYnVnKCdHTE9CU1RBUicsIFtwYXR0ZXJuLCBwLCBmXSlcblxuICAgICAgLy8gXCIqKlwiXG4gICAgICAvLyBhLyoqL2IvKiovYyB3b3VsZCBtYXRjaCB0aGUgZm9sbG93aW5nOlxuICAgICAgLy8gYS9iL3gveS96L2NcbiAgICAgIC8vIGEveC95L3ovYi9jXG4gICAgICAvLyBhL2IveC9iL3gvY1xuICAgICAgLy8gYS9iL2NcbiAgICAgIC8vIFRvIGRvIHRoaXMsIHRha2UgdGhlIHJlc3Qgb2YgdGhlIHBhdHRlcm4gYWZ0ZXJcbiAgICAgIC8vIHRoZSAqKiwgYW5kIHNlZSBpZiBpdCB3b3VsZCBtYXRjaCB0aGUgZmlsZSByZW1haW5kZXIuXG4gICAgICAvLyBJZiBzbywgcmV0dXJuIHN1Y2Nlc3MuXG4gICAgICAvLyBJZiBub3QsIHRoZSAqKiBcInN3YWxsb3dzXCIgYSBzZWdtZW50LCBhbmQgdHJ5IGFnYWluLlxuICAgICAgLy8gVGhpcyBpcyByZWN1cnNpdmVseSBhd2Z1bC5cbiAgICAgIC8vXG4gICAgICAvLyBhLyoqL2IvKiovYyBtYXRjaGluZyBhL2IveC95L3ovY1xuICAgICAgLy8gLSBhIG1hdGNoZXMgYVxuICAgICAgLy8gLSBkb3VibGVzdGFyXG4gICAgICAvLyAgIC0gbWF0Y2hPbmUoYi94L3kvei9jLCBiLyoqL2MpXG4gICAgICAvLyAgICAgLSBiIG1hdGNoZXMgYlxuICAgICAgLy8gICAgIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh4L3kvei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh5L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZShjLCBjKSB5ZXMsIGhpdFxuICAgICAgdmFyIGZyID0gZmlcbiAgICAgIHZhciBwciA9IHBpICsgMVxuICAgICAgaWYgKHByID09PSBwbCkge1xuICAgICAgICB0aGlzLmRlYnVnKCcqKiBhdCB0aGUgZW5kJylcbiAgICAgICAgLy8gYSAqKiBhdCB0aGUgZW5kIHdpbGwganVzdCBzd2FsbG93IHRoZSByZXN0LlxuICAgICAgICAvLyBXZSBoYXZlIGZvdW5kIGEgbWF0Y2guXG4gICAgICAgIC8vIGhvd2V2ZXIsIGl0IHdpbGwgbm90IHN3YWxsb3cgLy54LCB1bmxlc3NcbiAgICAgICAgLy8gb3B0aW9ucy5kb3QgaXMgc2V0LlxuICAgICAgICAvLyAuIGFuZCAuLiBhcmUgKm5ldmVyKiBtYXRjaGVkIGJ5ICoqLCBmb3IgZXhwbG9zaXZlbHlcbiAgICAgICAgLy8gZXhwb25lbnRpYWwgcmVhc29ucy5cbiAgICAgICAgZm9yICg7IGZpIDwgZmw7IGZpKyspIHtcbiAgICAgICAgICBpZiAoZmlsZVtmaV0gPT09ICcuJyB8fCBmaWxlW2ZpXSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBmaWxlW2ZpXS5jaGFyQXQoMCkgPT09ICcuJykpIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIG9rLCBsZXQncyBzZWUgaWYgd2UgY2FuIHN3YWxsb3cgd2hhdGV2ZXIgd2UgY2FuLlxuICAgICAgd2hpbGUgKGZyIDwgZmwpIHtcbiAgICAgICAgdmFyIHN3YWxsb3dlZSA9IGZpbGVbZnJdXG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuZ2xvYnN0YXIgd2hpbGUnLCBmaWxlLCBmciwgcGF0dGVybiwgcHIsIHN3YWxsb3dlZSlcblxuICAgICAgICAvLyBYWFggcmVtb3ZlIHRoaXMgc2xpY2UuICBKdXN0IHBhc3MgdGhlIHN0YXJ0IGluZGV4LlxuICAgICAgICBpZiAodGhpcy5tYXRjaE9uZShmaWxlLnNsaWNlKGZyKSwgcGF0dGVybi5zbGljZShwciksIHBhcnRpYWwpKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgZm91bmQgbWF0Y2ghJywgZnIsIGZsLCBzd2FsbG93ZWUpXG4gICAgICAgICAgLy8gZm91bmQgYSBtYXRjaC5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbid0IHN3YWxsb3cgXCIuXCIgb3IgXCIuLlwiIGV2ZXIuXG4gICAgICAgICAgLy8gY2FuIG9ubHkgc3dhbGxvdyBcIi5mb29cIiB3aGVuIGV4cGxpY2l0bHkgYXNrZWQuXG4gICAgICAgICAgaWYgKHN3YWxsb3dlZSA9PT0gJy4nIHx8IHN3YWxsb3dlZSA9PT0gJy4uJyB8fFxuICAgICAgICAgICAgKCFvcHRpb25zLmRvdCAmJiBzd2FsbG93ZWUuY2hhckF0KDApID09PSAnLicpKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdkb3QgZGV0ZWN0ZWQhJywgZmlsZSwgZnIsIHBhdHRlcm4sIHByKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyAqKiBzd2FsbG93cyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZS5cbiAgICAgICAgICB0aGlzLmRlYnVnKCdnbG9ic3RhciBzd2FsbG93IGEgc2VnbWVudCwgYW5kIGNvbnRpbnVlJylcbiAgICAgICAgICBmcisrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kLlxuICAgICAgLy8gSG93ZXZlciwgaW4gcGFydGlhbCBtb2RlLCB3ZSBjYW4ndCBzYXkgdGhpcyBpcyBuZWNlc3NhcmlseSBvdmVyLlxuICAgICAgLy8gSWYgdGhlcmUncyBtb3JlICpwYXR0ZXJuKiBsZWZ0LCB0aGVuXG4gICAgICBpZiAocGFydGlhbCkge1xuICAgICAgICAvLyByYW4gb3V0IG9mIGZpbGVcbiAgICAgICAgdGhpcy5kZWJ1ZygnXFxuPj4+IG5vIG1hdGNoLCBwYXJ0aWFsPycsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgaWYgKGZyID09PSBmbCkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuICoqXG4gICAgLy8gbm9uLW1hZ2ljIHBhdHRlcm5zIGp1c3QgaGF2ZSB0byBtYXRjaCBleGFjdGx5XG4gICAgLy8gcGF0dGVybnMgd2l0aCBtYWdpYyBoYXZlIGJlZW4gdHVybmVkIGludG8gcmVnZXhwcy5cbiAgICB2YXIgaGl0XG4gICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG9wdGlvbnMubm9jYXNlKSB7XG4gICAgICAgIGhpdCA9IGYudG9Mb3dlckNhc2UoKSA9PT0gcC50b0xvd2VyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaXQgPSBmID09PSBwXG4gICAgICB9XG4gICAgICB0aGlzLmRlYnVnKCdzdHJpbmcgbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdCA9IGYubWF0Y2gocClcbiAgICAgIHRoaXMuZGVidWcoJ3BhdHRlcm4gbWF0Y2gnLCBwLCBmLCBoaXQpXG4gICAgfVxuXG4gICAgaWYgKCFoaXQpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gTm90ZTogZW5kaW5nIGluIC8gbWVhbnMgdGhhdCB3ZSdsbCBnZXQgYSBmaW5hbCBcIlwiXG4gIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uICBUaGlzIGNhbiBvbmx5IG1hdGNoIGFcbiAgLy8gY29ycmVzcG9uZGluZyBcIlwiIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gIC8vIElmIHRoZSBmaWxlIGVuZHMgaW4gLywgdGhlbiBpdCBjYW4gb25seSBtYXRjaCBhXG4gIC8vIGEgcGF0dGVybiB0aGF0IGVuZHMgaW4gLywgdW5sZXNzIHRoZSBwYXR0ZXJuIGp1c3RcbiAgLy8gZG9lc24ndCBoYXZlIGFueSBtb3JlIGZvciBpdC4gQnV0LCBhL2IvIHNob3VsZCAqbm90KlxuICAvLyBtYXRjaCBcImEvYi8qXCIsIGV2ZW4gdGhvdWdoIFwiXCIgbWF0Y2hlcyBhZ2FpbnN0IHRoZVxuICAvLyBbXi9dKj8gcGF0dGVybiwgZXhjZXB0IGluIHBhcnRpYWwgbW9kZSwgd2hlcmUgaXQgbWlnaHRcbiAgLy8gc2ltcGx5IG5vdCBiZSByZWFjaGVkIHlldC5cbiAgLy8gSG93ZXZlciwgYS9iLyBzaG91bGQgc3RpbGwgc2F0aXNmeSBhLypcblxuICAvLyBub3cgZWl0aGVyIHdlIGZlbGwgb2ZmIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4sIG9yIHdlJ3JlIGRvbmUuXG4gIGlmIChmaSA9PT0gZmwgJiYgcGkgPT09IHBsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBwYXR0ZXJuIGFuZCBmaWxlbmFtZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIGFuIGV4YWN0IGhpdCFcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKGZpID09PSBmbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgZmlsZSwgYnV0IHN0aWxsIGhhZCBwYXR0ZXJuIGxlZnQuXG4gICAgLy8gdGhpcyBpcyBvayBpZiB3ZSdyZSBkb2luZyB0aGUgbWF0Y2ggYXMgcGFydCBvZlxuICAgIC8vIGEgZ2xvYiBmcyB0cmF2ZXJzYWwuXG4gICAgcmV0dXJuIHBhcnRpYWxcbiAgfSBlbHNlIGlmIChwaSA9PT0gcGwpIHtcbiAgICAvLyByYW4gb3V0IG9mIHBhdHRlcm4sIHN0aWxsIGhhdmUgZmlsZSBsZWZ0LlxuICAgIC8vIHRoaXMgaXMgb25seSBhY2NlcHRhYmxlIGlmIHdlJ3JlIG9uIHRoZSB2ZXJ5IGxhc3RcbiAgICAvLyBlbXB0eSBzZWdtZW50IG9mIGEgZmlsZSB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAgLy8gYS8qIHNob3VsZCBtYXRjaCBhL2IvXG4gICAgdmFyIGVtcHR5RmlsZUVuZCA9IChmaSA9PT0gZmwgLSAxKSAmJiAoZmlsZVtmaV0gPT09ICcnKVxuICAgIHJldHVybiBlbXB0eUZpbGVFbmRcbiAgfVxuXG4gIC8vIHNob3VsZCBiZSB1bnJlYWNoYWJsZS5cbiAgdGhyb3cgbmV3IEVycm9yKCd3dGY/Jylcbn1cblxuLy8gcmVwbGFjZSBzdHVmZiBsaWtlIFxcKiB3aXRoICpcbmZ1bmN0aW9uIGdsb2JVbmVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXFxcKC4pL2csICckMScpXG59XG5cbmZ1bmN0aW9uIHJlZ0V4cEVzY2FwZSAocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpXG59XG4iLCJ2YXIgZGlycGF0aHMgPSByZXF1aXJlKCcuL2xpYi9wYXRocycpO1xyXG5cclxuT2JqZWN0LmFzc2lnbihleHBvcnRzLCBkaXJwYXRocylcclxuZXhwb3J0cy5yZWFkRmlsZXMgPSByZXF1aXJlKCcuL2xpYi9yZWFkZmlsZXMnKTtcclxuZXhwb3J0cy5yZWFkRmlsZXNTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi9yZWFkZmlsZXNzdHJlYW0nKTtcclxuIiwi77u/dmFyIGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5leHBvcnRzLnByb21pc2VGaWxlcyA9IGZ1bmN0aW9uIHByb21pc2VGaWxlcyhkaXIsIHR5cGUsIG9wdGlvbnMpe1xuICB0eXBlID0gdHlwZSB8fCAnZmlsZSdcblxuICB2YXIgcHJvY2Vzc29yID0gZnVuY3Rpb24ocmVzLHJlail7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oZXJyLGRhdGEpe1xuICAgICAgaWYoZXJyKXJldHVybiByZWooZXJyKVxuICAgICAgcmVzKGRhdGEpXG4gICAgfVxuICAgIGV4cG9ydHMuZmlsZXMoZGlyLHR5cGUsY2Isb3B0aW9ucylcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UocHJvY2Vzc29yKVxufVxuXG4vKipcbiAqIGZpbmQgYWxsIGZpbGVzIG9yIHN1YmRpcnMgKHJlY3Vyc2l2ZSkgYW5kIHBhc3MgdG8gY2FsbGJhY2sgZm5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdG9yeSBpbiB3aGljaCB0byByZWN1cnNlIGZpbGVzIG9yIHN1YmRpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHR5cGUgb2YgZGlyIGVudHJ5IHRvIHJlY3Vyc2UgKCdmaWxlJywgJ2RpcicsIG9yICdhbGwnLCBkZWZhdWx0cyB0byAnZmlsZScpXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGVycm9yLCA8QXJyYXkuPHN0cmluZz4pfSBjYWxsYmFjayBmbiB0byBjYWxsIHdoZW4gZG9uZVxuICogQGV4YW1wbGVcbiAqIGRpci5maWxlcyhfX2Rpcm5hbWUsIGZ1bmN0aW9uKGVyciwgZmlsZXMpIHtcbiAqICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICogICAgICBjb25zb2xlLmxvZygnZmlsZXM6JywgZmlsZXMpO1xuICogIH0pO1xuICovXG5leHBvcnRzLmZpbGVzID0gZnVuY3Rpb24gZmlsZXMoZGlyLCB0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgb2ZUeXBlID0gdHlwZW9mIHR5cGVcbiAgaWYob2ZUeXBlID09ICdvYmplY3QnKXtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB0eXBlXG4gICAgdHlwZSA9ICdmaWxlJ1xuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24oKXt9XG4gIH1lbHNlIGlmIChvZlR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy9pZ25vcmVUeXBlID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSB0eXBlO1xuICAgIHR5cGUgPSAnZmlsZSc7XG4gIH1cbiAgXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHBlbmRpbmcsXG4gICAgICByZXN1bHRzID0ge1xuICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICBkaXJzOiBbXVxuICAgICAgfTtcblxuICB2YXIgZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHR5cGU9PT0nY29tYmluZScpe1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsZXMuY29uY2F0KHJlc3VsdHMuZGlycylcbiAgICB9IGVsc2UgaWYgKCF0eXBlIHx8IG9wdGlvbnMuaWdub3JlVHlwZSB8fCBbJ2FsbCcsJ2NvbWJpbmUnXS5pbmRleE9mKHR5cGUpPj0wKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzW3R5cGUgKyAncyddXG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5zeW5jKXJldHVybjtcblxuXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gIH07XG5cbiAgdmFyIGdldFN0YXRIYW5kbGVyID0gZnVuY3Rpb24oc3RhdFBhdGgsIG5hbWUsIGxzdGF0Q2FsbGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVyciwgc3RhdCkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBpZiAoIWxzdGF0Q2FsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZzLmxzdGF0KHN0YXRQYXRoLCBnZXRTdGF0SGFuZGxlcihzdGF0UGF0aCwgbmFtZSwgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHVzaFZhbCA9IG9wdGlvbnMuc2hvcnROYW1lID8gbmFtZSA6IHN0YXRQYXRoXG5cbiAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSAmJiBzdGF0Lm1vZGUgIT09IDE3MTE1KSB7XG4gICAgICAgIGlmICh0eXBlICE9PSAnZmlsZScpIHtcbiAgICAgICAgICByZXN1bHRzLmRpcnMucHVzaChwdXNoVmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnJlY3Vyc2l2ZT09bnVsbCB8fCBvcHRpb25zLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgIHZhciBzdWJsb29wID0gZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdjb21iaW5lJyl7XG4gICAgICAgICAgICAgIHJlc3VsdHMuZmlsZXMgPSByZXN1bHRzLmZpbGVzLmNvbmNhdChyZXMpO1xuICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdHMuZmlsZXMgPSByZXN1bHRzLmZpbGVzLmNvbmNhdChyZXMuZmlsZXMpO1xuICAgICAgICAgICAgICByZXN1bHRzLmRpcnMgPSByZXN1bHRzLmRpcnMuY29uY2F0KHJlcy5kaXJzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5maWxlcyA9IHJlc3VsdHMuZmlsZXMuY29uY2F0KHJlcy5maWxlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuZGlycyA9IHJlc3VsdHMuZGlycy5jb25jYXQocmVzLmRpcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIS0tcGVuZGluZyl7XG4gICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpXG4gICAgICAgICAgbmV3T3B0aW9ucy5pZ25vcmVUeXBlID0gdHJ1ZVxuICAgICAgICAgIHZhciBtb3JlUmVzdWx0cyA9IGZpbGVzKHN0YXRQYXRoLCB0eXBlLCBzdWJsb29wLCBuZXdPcHRpb25zKTtcblxuICAgICAgICAgIGlmKG9wdGlvbnMuc3luYyl7XG4gICAgICAgICAgICBzdWJsb29wKG51bGwsIG1vcmVSZXN1bHRzKVxuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYgKCEtLXBlbmRpbmcpe1xuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZSAhPT0gJ2RpcicpIHtcbiAgICAgICAgICByZXN1bHRzLmZpbGVzLnB1c2gocHVzaFZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdWxkIGJlIHRoZSBsYXN0IHN0YXRlbWVudCBpbiBzdGF0SGFuZGxlclxuICAgICAgICBpZiAoIS0tcGVuZGluZyl7XG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZGlyID0gQnVmZmVyLmZyb20oZGlyKTtcblxuICBjb25zdCBvbkRpclJlYWQgPSBmdW5jdGlvbihlcnIsIGxpc3QpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICBcbiAgICBwZW5kaW5nID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKCFwZW5kaW5nKSByZXR1cm4gZG9uZSgpO1xuICAgIFxuICAgIGZvciAodmFyIGZpbGUsIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBmbmFtZSA9IGxpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgIGZpbGUgPSBwYXRoLmpvaW4oZGlyLCBmbmFtZSk7XG4gICAgICB2YXIgYnVmZmlsZSA9IEJ1ZmZlci5jb25jYXQoW2J1ZmRpciwgQnVmZmVyLmZyb20ocGF0aC5zZXApLCBsaXN0W2ldXSk7XG5cbiAgICAgIGlmKG9wdGlvbnMuc3luYyl7XG4gICAgICAgIHZhciByZXMgPSBmcy5zdGF0U3luYyhidWZmaWxlKTtcbiAgICAgICAgZ2V0U3RhdEhhbmRsZXIoZmlsZSxmbmFtZSkobnVsbCwgcmVzKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGZzLnN0YXQoYnVmZmlsZSwgZ2V0U3RhdEhhbmRsZXIoZmlsZSxmbmFtZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBjb25zdCBvblN0YXQgPSBmdW5jdGlvbihlcnIsIHN0YXQpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICBpZiAoc3RhdCAmJiBzdGF0Lm1vZGUgPT09IDE3MTE1KSByZXR1cm4gZG9uZSgpO1xuXG4gICAgaWYob3B0aW9ucy5zeW5jKXtcbiAgICAgIGNvbnN0IGxpc3QgPSBmcy5yZWFkZGlyU3luYyhidWZkaXIsIHtlbmNvZGluZzogJ2J1ZmZlcid9KVxuICAgICAgcmV0dXJuIG9uRGlyUmVhZChudWxsLCBsaXN0KVxuICAgIH1lbHNle1xuICAgICAgZnMucmVhZGRpcihidWZkaXIsIHtlbmNvZGluZzogJ2J1ZmZlcid9LCBvbkRpclJlYWQpXG4gICAgfVxuICB9XG5cbiAgaWYob3B0aW9ucy5zeW5jKXtcbiAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYnVmZGlyKTtcbiAgICByZXR1cm4gb25TdGF0KG51bGwsIHN0YXQpXG4gIH1lbHNle1xuICAgIGZzLnN0YXQoYnVmZGlyLCBvblN0YXQpO1xuICB9XG59O1xuXG5cbi8qKlxuICogZmluZCBhbGwgZmlsZXMgYW5kIHN1YmRpcnMgaW4gIGEgZGlyZWN0b3J5IChyZWN1cnNpdmUpIGFuZCBwYXNzIHRoZW0gdG8gY2FsbGJhY2sgZm5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdG9yeSBpbiB3aGljaCB0byByZWN1cnNlIGZpbGVzIG9yIHN1YmRpcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tYmluZSB3aGV0aGVyIHRvIGNvbWJpbmUgYm90aCBzdWJkaXJzIGFuZCBmaWxlcGF0aHMgaW50byBvbmUgYXJyYXkgKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGVycm9yLCBPYmplY3QuPDxBcnJheS48c3RyaW5nPiwgQXJyYXkuPHN0cmluZz4+KX0gY2FsbGJhY2sgZm4gdG8gY2FsbCB3aGVuIGRvbmVcbiAqIEBleGFtcGxlXG4gKiBkaXIucGF0aHMoX19kaXJuYW1lLCBmdW5jdGlvbiAoZXJyLCBwYXRocykge1xuICogICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAqICAgICBjb25zb2xlLmxvZygnZmlsZXM6JywgcGF0aHMuZmlsZXMpO1xuICogICAgIGNvbnNvbGUubG9nKCdzdWJkaXJzOicsIHBhdGhzLmRpcnMpO1xuICogfSk7XG4gKiBkaXIucGF0aHMoX19kaXJuYW1lLCB0cnVlLCBmdW5jdGlvbiAoZXJyLCBwYXRocykge1xuICogICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdwYXRoczonLCBwYXRocyk7XG4gKiB9KTtcbiAqL1xuZXhwb3J0cy5wYXRocyA9IGZ1bmN0aW9uIHBhdGhzKGRpciwgY29tYmluZSwgY2FsbGJhY2spIHtcblxuICAgIHZhciB0eXBlO1xuXG4gICAgaWYgKHR5cGVvZiBjb21iaW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY29tYmluZTtcbiAgICAgICAgY29tYmluZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGV4cG9ydHMuZmlsZXMoZGlyLCAnYWxsJywgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICBpZiAoY29tYmluZSkge1xuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzLmZpbGVzLmNvbmNhdChyZXN1bHRzLmRpcnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cbi8qKlxuICogZmluZCBhbGwgc3ViZGlycyAocmVjdXJzaXZlKSBvZiBhIGRpcmVjdG9yeSBhbmQgcGFzcyB0aGVtIHRvIGNhbGxiYWNrIGZuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpciBkaXJlY3RvcnkgaW4gd2hpY2ggdG8gZmluZCBzdWJkaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSB0eXBlIG9mIGRpciBlbnRyeSB0byByZWN1cnNlICgnZmlsZScgb3IgJ2RpcicsIGRlZmF1bHRzIHRvICdmaWxlJylcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyb3IsIDxBcnJheS48c3RyaW5nPil9IGNhbGxiYWNrIGZuIHRvIGNhbGwgd2hlbiBkb25lXG4gKiBAZXhhbXBsZVxuICogZGlyLnN1YmRpcnMoX19kaXJuYW1lLCBmdW5jdGlvbiAoZXJyLCBwYXRocykge1xuICogICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdmaWxlczonLCBwYXRocy5maWxlcyk7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdzdWJkaXJzOicsIHBhdGhzLmRpcnMpO1xuICogfSk7XG4gKi9cbmV4cG9ydHMuc3ViZGlycyA9IGZ1bmN0aW9uIHN1YmRpcnMoZGlyLCBjYWxsYmFjaywgdHlwZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGNvbnN0IGlDYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgc3ViZGlycykge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuXG4gICAgaWYodHlwZT09J2NvbWJpbmUnKXtcbiAgICAgIHN1YmRpcnMgPSBzdWJkaXJzLmZpbGVzLmNvbmNhdChzdWJkaXJzLmRpcnMpXG4gICAgfVxuICAgIFxuICAgIGlmKG9wdGlvbnMuc3luYylyZXR1cm4gc3ViZGlyc1xuXG4gICAgY2FsbGJhY2sobnVsbCwgc3ViZGlycyk7XG4gIH1cblxuICBjb25zdCByZXMgPSBleHBvcnRzLmZpbGVzKGRpciwgJ2RpcicsIGlDYWxsYmFjaywgb3B0aW9ucylcblxuICBpZihvcHRpb25zICYmIG9wdGlvbnMuc3luYyl7XG4gICAgcmV0dXJuIGlDYWxsYmFjayhudWxsLHJlcylcbiAgfVxufTtcbiIsInZhciBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLyoqXG4gKiBtZXJnZSB0d28gb2JqZWN0cyBieSBleHRlbmRpbmcgdGFyZ2V0IG9iamVjdCB3aXRoIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdlXG4gKiBAcGFyYW0gc291cmNlIG9iamVjdCB0byBtZXJnZVxuICogQHBhcmFtIHtCb29sZWFufSBbbW9kaWZ5XSB3aGV0aGVyIHRvIG1vZGlmeSB0aGUgdGFyZ2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBleHRlbmRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBtb2RpZnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0ID8gbW9kaWZ5ID8gdGFyZ2V0IDogZXh0ZW5kKHt9LCB0YXJnZXQsIHRydWUpIDoge307XG4gICAgaWYgKCFzb3VyY2UpIHJldHVybiByZXN1bHQ7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgc291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIGRldGVybWluZSBpZiBhIHN0cmluZyBpcyBjb250YWluZWQgd2l0aGluIGFuIGFycmF5IG9yIG1hdGNoZXMgYSByZWd1bGFyIGV4cHJlc3Npb25cbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0ciBzdHJpbmcgdG8gbWF0Y2hcbiAqIEBwYXJhbSAgIHtBcnJheXxSZWdleH0gbWF0Y2ggYXJyYXkgb3IgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZXJlIGlzIGEgbWF0Y2hcbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhzdHIsIG1hdGNoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSByZXR1cm4gbWF0Y2guaW5kZXhPZihzdHIpID4gLTE7XG4gICAgcmV0dXJuIG1hdGNoLnRlc3Qoc3RyKTtcbn1cblxuLyoqXG4gKiByZWFkIGZpbGVzIGFuZCBjYWxsIGEgZnVuY3Rpb24gd2l0aCB0aGUgY29udGVudHMgb2YgZWFjaCBmaWxlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRpciBwYXRoIG9mIGRpciBjb250YWluaW5nIHRoZSBmaWxlcyB0byBiZSByZWFkXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGVuY29kaW5nIGZpbGUgZW5jb2RpbmcgKGRlZmF1bHQgaXMgJ3V0ZjgnKVxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgaGFzaCBmb3IgZW5jb2RpbmcsIHJlY3Vyc2l2ZSwgYW5kIG1hdGNoL2V4Y2x1ZGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9uKGVycm9yLCBzdHJpbmcpfSBjYWxsYmFjayAgY2FsbGJhY2sgZm9yIGVhY2ggZmlsZXMgY29udGVudFxuICogQHBhcmFtICB7RnVuY3Rpb24oZXJyb3IpfSAgIGNvbXBsZXRlICBmbiB0byBjYWxsIHdoZW4gZmluaXNoZWRcbiAqL1xuZnVuY3Rpb24gcmVhZEZpbGVzKGRpciwgb3B0aW9ucywgY2FsbGJhY2ssIGNvbXBsZXRlKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0ge1xuICAgICAgICBlbmNvZGluZzogb3B0aW9uc1xuICAgIH07XG4gICAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZSxcbiAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgZG9uZU9uRXJyOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdmFyIGZpbGVzID0gW107XG5cbiAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY29tcGxldGUoZXJyKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKG51bGwsIGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmcy5yZWFkZGlyKGRpciwgZnVuY3Rpb24oZXJyLCBsaXN0KSB7XG4gICAgICAgIGlmIChlcnIpIMKge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VBQ0NFUycpIHJldHVybiBkb25lKCk7XG4gICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJldmVyc2UgPT09IHRydWUgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygb3B0aW9ucy5zb3J0ID09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgKC9yZXZlcnNlfGRlc2MvaSkudGVzdChvcHRpb25zLnNvcnQpKSkge1xuICAgICAgICAgICAgbGlzdCA9IGxpc3QucmV2ZXJzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc29ydCAhPT0gZmFsc2UpIGxpc3QgPSBsaXN0LnNvcnQoKTtcblxuICAgICAgICAoZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGxpc3RbaSsrXTtcbiAgICAgICAgICAgIGlmICghZmlsZW5hbWUpIHJldHVybiBkb25lKG51bGwsIGZpbGVzKTtcbiAgICAgICAgICAgIHZhciBmaWxlID0gcGF0aC5qb2luKGRpciwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgZnMuc3RhdChmaWxlLCBmdW5jdGlvbihlcnIsIHN0YXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1hdGNoRGlyICYmICFtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLm1hdGNoRGlyKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmV4Y2x1ZGVEaXIgJiYgbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5leGNsdWRlRGlyKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlcyhmaWxlLCBvcHRpb25zLCBjYWxsYmFjaywgZnVuY3Rpb24oZXJyLCBzZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyICYmIG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuY29uY2F0KHNmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ICYmIHN0YXQuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF0Y2ggJiYgIW1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMubWF0Y2gpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlICYmIG1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMuZXhjbHVkZSkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbHRlciAmJiAhb3B0aW9ucy5maWx0ZXIoZmlsZW5hbWUpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG9ydE5hbWUpIGZpbGVzLnB1c2goZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZzLnJlYWRGaWxlKGZpbGUsIG9wdGlvbnMuZW5jb2RpbmcsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VBQ0NFUycpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCA+IDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvcnROYW1lKSBjYWxsYmFjayhudWxsLCBkYXRhLCBmaWxlbmFtZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhudWxsLCBkYXRhLCBmaWxlLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKG51bGwsIGRhdGEsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcblxuICAgIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSByZWFkRmlsZXM7XG4iLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgIG1tID0gcmVxdWlyZSgnbWluaW1hdGNoJyksXG4gICAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLyoqXG4gKiBtZXJnZSB0d28gb2JqZWN0cyBieSBleHRlbmRpbmcgdGFyZ2V0IG9iamVjdCB3aXRoIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdlXG4gKiBAcGFyYW0gc291cmNlIG9iamVjdCB0byBtZXJnZVxuICogQHBhcmFtIHtCb29sZWFufSBbbW9kaWZ5XSB3aGV0aGVyIHRvIG1vZGlmeSB0aGUgdGFyZ2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBleHRlbmRlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBtb2RpZnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0ID8gbW9kaWZ5ID8gdGFyZ2V0IDogZXh0ZW5kKHt9LCB0YXJnZXQsIHRydWUpIDoge307XG4gICAgaWYgKCFzb3VyY2UpIHJldHVybiByZXN1bHQ7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgc291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIGRldGVybWluZSBpZiBhIHN0cmluZyBpcyBjb250YWluZWQgd2l0aGluIGFuIGFycmF5IG9yIG1hdGNoZXMgYSByZWd1bGFyIGV4cHJlc3Npb25cbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0ciBzdHJpbmcgdG8gbWF0Y2hcbiAqIEBwYXJhbSAgIHtBcnJheXxSZWdleH0gbWF0Y2ggYXJyYXkgb3IgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSB3aGV0aGVyIHRoZXJlIGlzIGEgbWF0Y2hcbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhzdHIsIG1hdGNoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIHZhciBsID0gbWF0Y2gubGVuZ3RoO1xuICAgICAgICBmb3IoIHZhciBzPTA7IHMgPCBsOyBzKyspIHtcbiAgICAgICAgICAgIGlmICggbW0oc3RyLG1hdGNoW3NdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoLnRlc3Qoc3RyKTtcbn1cblxuLyoqXG4gKiByZWFkIGZpbGVzIGFuZCBjYWxsIGEgZnVuY3Rpb24gd2l0aCB0aGUgY29udGVudHMgb2YgZWFjaCBmaWxlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRpciBwYXRoIG9mIGRpciBjb250YWluaW5nIHRoZSBmaWxlcyB0byBiZSByZWFkXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGVuY29kaW5nIGZpbGUgZW5jb2RpbmcgKGRlZmF1bHQgaXMgJ3V0ZjgnKVxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgaGFzaCBmb3IgZW5jb2RpbmcsIHJlY3Vyc2l2ZSwgYW5kIG1hdGNoL2V4Y2x1ZGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9uKGVycm9yLCBzdHJpbmcpfSBjYWxsYmFjayAgY2FsbGJhY2sgZm9yIGVhY2ggZmlsZXMgY29udGVudFxuICogQHBhcmFtICB7RnVuY3Rpb24oZXJyb3IpfSAgIGNvbXBsZXRlICBmbiB0byBjYWxsIHdoZW4gZmluaXNoZWRcbiAqL1xuZnVuY3Rpb24gcmVhZEZpbGVzU3RyZWFtKGRpciwgb3B0aW9ucywgY2FsbGJhY2ssIGNvbXBsZXRlKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0ge1xuICAgICAgICBlbmNvZGluZzogb3B0aW9uc1xuICAgIH07XG4gICAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZSxcbiAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgZG9uZU9uRXJyOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdmFyIGZpbGVzID0gW107XG5cbiAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY29tcGxldGUoZXJyKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKG51bGwsIGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmcy5yZWFkZGlyKGRpciwgZnVuY3Rpb24oZXJyLCBsaXN0KSB7XG4gICAgICAgIGlmIChlcnIpIMKge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VBQ0NFUycpIHJldHVybiBkb25lKCk7XG4gICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJldmVyc2UgPT09IHRydWUgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygb3B0aW9ucy5zb3J0ID09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgKC9yZXZlcnNlfGRlc2MvaSkudGVzdChvcHRpb25zLnNvcnQpKSkge1xuICAgICAgICAgICAgbGlzdCA9IGxpc3QucmV2ZXJzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc29ydCAhPT0gZmFsc2UpIGxpc3QgPSBsaXN0LnNvcnQoKTtcblxuICAgICAgICAoZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGxpc3RbaSsrXTtcbiAgICAgICAgICAgIGlmICghZmlsZW5hbWUpIHJldHVybiBkb25lKG51bGwsIGZpbGVzKTtcbiAgICAgICAgICAgIHZhciBmaWxlID0gcGF0aC5qb2luKGRpciwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgZnMuc3RhdChmaWxlLCBmdW5jdGlvbihlcnIsIHN0YXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1hdGNoRGlyICYmICFtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLm1hdGNoRGlyKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmV4Y2x1ZGVEaXIgJiYgbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5leGNsdWRlRGlyKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlc1N0cmVhbShmaWxlLCBvcHRpb25zLCBjYWxsYmFjaywgZnVuY3Rpb24oZXJyLCBzZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyICYmIG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzID0gZmlsZXMuY29uY2F0KHNmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ICYmIHN0YXQuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF0Y2ggJiYgIW1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMubWF0Y2gpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlICYmIG1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMuZXhjbHVkZSkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbHRlciAmJiAhb3B0aW9ucy5maWx0ZXIoZmlsZW5hbWUpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG9ydE5hbWUpIGZpbGVzLnB1c2goZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lbmNvZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnNldEVuY29kaW5nKG9wdGlvbnMuZW5jb2RpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS5vbignZXJyb3InLGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID4gMylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3J0TmFtZSkgY2FsbGJhY2sobnVsbCwgc3RyZWFtLCBmaWxlbmFtZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKG51bGwsIHN0cmVhbSwgZmlsZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKG51bGwsIHN0cmVhbSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuXG4gICAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHJlYWRGaWxlc1N0cmVhbTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIGRlZmF1bHRzID0ge1xyXG4gICAgbGluZXM6IDEyLFxyXG4gICAgbGVuZ3RoOiA3LFxyXG4gICAgd2lkdGg6IDUsXHJcbiAgICByYWRpdXM6IDEwLFxyXG4gICAgc2NhbGU6IDEuMCxcclxuICAgIGNvcm5lcnM6IDEsXHJcbiAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgZmFkZUNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYW5pbWF0aW9uOiAnc3Bpbm5lci1saW5lLWZhZGUtZGVmYXVsdCcsXHJcbiAgICByb3RhdGU6IDAsXHJcbiAgICBkaXJlY3Rpb246IDEsXHJcbiAgICBzcGVlZDogMSxcclxuICAgIHpJbmRleDogMmU5LFxyXG4gICAgY2xhc3NOYW1lOiAnc3Bpbm5lcicsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICBzaGFkb3c6ICcwIDAgMXB4IHRyYW5zcGFyZW50JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG59O1xyXG52YXIgU3Bpbm5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNwaW5uZXIob3B0cykge1xyXG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XHJcbiAgICAgICAgdGhpcy5vcHRzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRzKSwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIHNwaW5uZXIgdG8gdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50LiBJZiB0aGlzIGluc3RhbmNlIGlzIGFscmVhZHlcclxuICAgICAqIHNwaW5uaW5nLCBpdCBpcyBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBpdHMgcHJldmlvdXMgdGFyZ2V0IGJ5IGNhbGxpbmdcclxuICAgICAqIHN0b3AoKSBpbnRlcm5hbGx5LlxyXG4gICAgICovXHJcbiAgICBTcGlubmVyLnByb3RvdHlwZS5zcGluID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IHRoaXMub3B0cy5jbGFzc05hbWU7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJvZ3Jlc3NiYXInKTtcclxuICAgICAgICBjc3ModGhpcy5lbCwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vcHRzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgekluZGV4OiB0aGlzLm9wdHMuekluZGV4LFxyXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLm9wdHMubGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0aGlzLm9wdHMudG9wLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyB0aGlzLm9wdHMuc2NhbGUgKyBcIilcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGFyZ2V0LmZpcnN0Q2hpbGQgfHwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyYXdMaW5lcyh0aGlzLmVsLCB0aGlzLm9wdHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgYW5kIHJlbW92ZXMgdGhlIFNwaW5uZXIuXHJcbiAgICAgKiBTdG9wcGVkIHNwaW5uZXJzIG1heSBiZSByZXVzZWQgYnkgY2FsbGluZyBzcGluKCkgYWdhaW4uXHJcbiAgICAgKi9cclxuICAgIFNwaW5uZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3Bpbm5lcjtcclxufSgpKTtcclxuZXhwb3J0IHsgU3Bpbm5lciB9O1xyXG4vKipcclxuICogU2V0cyBtdWx0aXBsZSBzdHlsZSBwcm9wZXJ0aWVzIGF0IG9uY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjc3MoZWwsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgZWwuc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbGluZSBjb2xvciBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgb3IgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb2xvcihjb2xvciwgaWR4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGNvbG9yID09ICdzdHJpbmcnID8gY29sb3IgOiBjb2xvcltpZHggJSBjb2xvci5sZW5ndGhdO1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBkcmF3cyB0aGUgaW5kaXZpZHVhbCBsaW5lcy5cclxuICovXHJcbmZ1bmN0aW9uIGRyYXdMaW5lcyhlbCwgb3B0cykge1xyXG4gICAgdmFyIGJvcmRlclJhZGl1cyA9IChNYXRoLnJvdW5kKG9wdHMuY29ybmVycyAqIG9wdHMud2lkdGggKiA1MDApIC8gMTAwMCkgKyAncHgnO1xyXG4gICAgdmFyIHNoYWRvdyA9ICdub25lJztcclxuICAgIGlmIChvcHRzLnNoYWRvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHNoYWRvdyA9ICcwIDJweCA0cHggIzAwMCc7IC8vIGRlZmF1bHQgc2hhZG93XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0cy5zaGFkb3cgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgc2hhZG93ID0gb3B0cy5zaGFkb3c7XHJcbiAgICB9XHJcbiAgICB2YXIgc2hhZG93cyA9IHBhcnNlQm94U2hhZG93KHNoYWRvdyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdHMubGluZXM7IGkrKykge1xyXG4gICAgICAgIHZhciBkZWdyZWVzID0gfn4oMzYwIC8gb3B0cy5saW5lcyAqIGkgKyBvcHRzLnJvdGF0ZSk7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRMaW5lID0gY3NzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IC1vcHRzLndpZHRoIC8gMiArIFwicHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IChvcHRzLmxlbmd0aCArIG9wdHMud2lkdGgpICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBvcHRzLndpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ2V0Q29sb3Iob3B0cy5mYWRlQ29sb3IsIGkpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoXCIgKyBkZWdyZWVzICsgXCJkZWcpIHRyYW5zbGF0ZVgoXCIgKyBvcHRzLnJhZGl1cyArIFwicHgpXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gaSAqIG9wdHMuZGlyZWN0aW9uIC8gb3B0cy5saW5lcyAvIG9wdHMuc3BlZWQ7XHJcbiAgICAgICAgZGVsYXkgLT0gMSAvIG9wdHMuc3BlZWQ7IC8vIHNvIGluaXRpYWwgYW5pbWF0aW9uIHN0YXRlIHdpbGwgaW5jbHVkZSB0cmFpbFxyXG4gICAgICAgIHZhciBsaW5lID0gY3NzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRDb2xvcihvcHRzLmNvbG9yLCBpKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogbm9ybWFsaXplU2hhZG93KHNoYWRvd3MsIGRlZ3JlZXMpLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IDEgLyBvcHRzLnNwZWVkICsgXCJzIGxpbmVhciBcIiArIGRlbGF5ICsgXCJzIGluZmluaXRlIFwiICsgb3B0cy5hbmltYXRpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmFja2dyb3VuZExpbmUuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZExpbmUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcnNlQm94U2hhZG93KGJveFNoYWRvdykge1xyXG4gICAgdmFyIHJlZ2V4ID0gL15cXHMqKFthLXpBLVpdK1xccyspPygtP1xcZCsoXFwuXFxkKyk/KShbYS16QS1aXSopXFxzKygtP1xcZCsoXFwuXFxkKyk/KShbYS16QS1aXSopKC4qKSQvO1xyXG4gICAgdmFyIHNoYWRvd3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBib3hTaGFkb3cuc3BsaXQoJywnKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2hhZG93ID0gX2FbX2ldO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gc2hhZG93Lm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gaW52YWxpZCBzeW50YXhcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHggPSArbWF0Y2hlc1syXTtcclxuICAgICAgICB2YXIgeSA9ICttYXRjaGVzWzVdO1xyXG4gICAgICAgIHZhciB4VW5pdHMgPSBtYXRjaGVzWzRdO1xyXG4gICAgICAgIHZhciB5VW5pdHMgPSBtYXRjaGVzWzddO1xyXG4gICAgICAgIGlmICh4ID09PSAwICYmICF4VW5pdHMpIHtcclxuICAgICAgICAgICAgeFVuaXRzID0geVVuaXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSA9PT0gMCAmJiAheVVuaXRzKSB7XHJcbiAgICAgICAgICAgIHlVbml0cyA9IHhVbml0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHhVbml0cyAhPT0geVVuaXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlOyAvLyB1bml0cyBtdXN0IG1hdGNoIHRvIHVzZSBhcyBjb29yZGluYXRlc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGFkb3dzLnB1c2goe1xyXG4gICAgICAgICAgICBwcmVmaXg6IG1hdGNoZXNbMV0gfHwgJycsXHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgIHhVbml0czogeFVuaXRzLFxyXG4gICAgICAgICAgICB5VW5pdHM6IHlVbml0cyxcclxuICAgICAgICAgICAgZW5kOiBtYXRjaGVzWzhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoYWRvd3M7XHJcbn1cclxuLyoqXHJcbiAqIE1vZGlmeSBib3gtc2hhZG93IHgveSBvZmZzZXRzIHRvIGNvdW50ZXJhY3Qgcm90YXRpb25cclxuICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNoYWRvdyhzaGFkb3dzLCBkZWdyZWVzKSB7XHJcbiAgICB2YXIgbm9ybWFsaXplZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBzaGFkb3dzXzEgPSBzaGFkb3dzOyBfaSA8IHNoYWRvd3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc2hhZG93ID0gc2hhZG93c18xW19pXTtcclxuICAgICAgICB2YXIgeHkgPSBjb252ZXJ0T2Zmc2V0KHNoYWRvdy54LCBzaGFkb3cueSwgZGVncmVlcyk7XHJcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKHNoYWRvdy5wcmVmaXggKyB4eVswXSArIHNoYWRvdy54VW5pdHMgKyAnICcgKyB4eVsxXSArIHNoYWRvdy55VW5pdHMgKyBzaGFkb3cuZW5kKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub3JtYWxpemVkLmpvaW4oJywgJyk7XHJcbn1cclxuZnVuY3Rpb24gY29udmVydE9mZnNldCh4LCB5LCBkZWdyZWVzKSB7XHJcbiAgICB2YXIgcmFkaWFucyA9IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xyXG4gICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZGlhbnMpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBNYXRoLnJvdW5kKCh4ICogY29zICsgeSAqIHNpbikgKiAxMDAwKSAvIDEwMDAsXHJcbiAgICAgICAgTWF0aC5yb3VuZCgoLXggKiBzaW4gKyB5ICogY29zKSAqIDEwMDApIC8gMTAwMCxcclxuICAgIF07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
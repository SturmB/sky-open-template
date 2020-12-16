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
                var selected = elSelect.val();
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
                var selected = elSelect.val();
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
                elSelect.empty();
                for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                    var file = fileList_1[_i];
                    elSelect.append($("<option />")
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
        console.log("templateButton:");
        console.log(templateButton);
        if (templateButton) {
            console.log("templateButton is.");
            templateButton.on("click", function () {
                console.log("button pressed");
                // @ts-ignore: `cep` _does_ exist on `window`.
                var selection = window.cep.fs.showOpenDialogEx(false, // allowMultipleSelection
                true, // chooseDirectory
                "Select the template folder", // title
                csInterface.getSystemPath(csinterface_ts__WEBPACK_IMPORTED_MODULE_0__["SystemPath"].MY_DOCUMENTS), // initialPath
                undefined);
                console.log("selection: ");
                console.log(selection);
                console.log("selection.data.length: ", selection.data.length);
                console.log("selection.data.length (bool): ", !!selection.data.length);
                if (!!selection.data.length) {
                    var filePath = selection.data[0];
                    console.log("filePath: " + filePath);
                    var osFixedPath = filePath.replace(/\\/g, "/");
                    console.log("osFixedPath: " + osFixedPath);
                    cookieManager.set(osFixedPath);
                    getFiles(osFixedPath);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxHQUFHLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFN0M7O0dBRUc7QUFDSCxDQUFDO0lBQ0MsWUFBWSxDQUFDO0lBRWIsb0JBQW9CO0lBQ3BCLElBQU0sV0FBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBQ25ELElBQU0sYUFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3pELElBQU0sT0FBTyxHQUFZLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxJQUFNLE1BQU0sR0FBd0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLElBQU0sZUFBZSxHQUF3QixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN6RSxJQUFNLFFBQVEsR0FBd0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsSUFBTSxPQUFPLEdBQTZCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRCxJQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0lBQzVCLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFD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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9Db29raWVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2pzL2xpYnMvVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9UeXBlQWhlYWQudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uY2F0LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NpbnRlcmZhY2UtdHMvZGlzdC9jc2ludGVyZmFjZS10cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaW1hdGNoL21pbmltYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtZGlyL2xpYi9wYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlc3N0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3Bpbi5qcy9zcGluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdMQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwidmFyIENvb2tpZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb29raWVNYW5hZ2VyKHRlbXBsYXRlRGlyKSB7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlRGlyID09PSB2b2lkIDApIHsgdGVtcGxhdGVEaXIgPSBcIlwiOyB9XHJcbiAgICAgICAgdGhpcy5jb29raWVOYW1lID0gXCJza3lPcGVuVGVtcGxhdGVcIjtcclxuICAgICAgICB0aGlzLmNvb2tpZVZhbHVlID0gdGVtcGxhdGVEaXI7XHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cGlyZXMuc2V0RnVsbFllYXIoZXhwaXJlcy5nZXRGdWxsWWVhcigpICsgMik7XHJcbiAgICAgICAgdGhpcy5leHBpcnlEYXRlID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgQ29va2llTWFuYWdlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29va2llVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvb2tpZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVmFsaWQgZGlyZWN0b3J5IG5vdCBjaG9zZW4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuY29va2llTmFtZSArIFwiPVwiICsgdGhpcy5jb29raWVWYWx1ZSArIFwiO2V4cGlyZXM9XCIgKyB0aGlzLmV4cGlyeURhdGUgKyBcIjtcIjtcclxuICAgIH07XHJcbiAgICBDb29raWVNYW5hZ2VyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZSkge1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXRDb29raWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNwbGl0Q29va2llXzEgPSBzcGxpdENvb2tpZTsgX2kgPCBzcGxpdENvb2tpZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBzcGxpdENvb2tpZV8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gY29va2llLnNwbGl0KFwiPVwiKVswXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY29va2llLnNwbGl0KFwiPVwiKVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5jb29raWVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvb2tpZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENvb2tpZU1hbmFnZXIgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dmEybGxUV0Z1WVdkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWtOdmIydHBaVTFoYm1GblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1NVRkxSU3gxUWtGQldTeFhRVUYzUWp0UlFVRjRRaXcwUWtGQlFTeEZRVUZCTEdkQ1FVRjNRanRSUVVvMVFpeGxRVUZWTEVkQlFWY3NhVUpCUVdsQ0xFTkJRVU03VVVGTE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGREwwSXNTVUZCVFN4UFFVRlBMRWRCUVZNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5xUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlUwc01rSkJRVWNzUjBGQlZpeFZRVUZYTEV0QlFXTTdVVUZEZGtJc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFZDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRM0pDTEV0QlFVc3NRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzFsQlEzSkRMRTlCUVU4N1UwRkRVanRSUVVORUxGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVMHNTVUZCU1N4RFFVRkRMRlZCUVZVc1UwRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eHBRa0ZCV1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hOUVVGSExFTkJRVU03U1VGRGVrWXNRMEZCUXp0SlFVVk5MREpDUVVGSExFZEJRVlk3VVVGRFJTeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRia0lzU1VGQlRTeFhRVUZYTEVkQlFXRXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZWtRc1NVRkJTU3hYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTjBRaXhMUVVGeFFpeFZRVUZYTEVWQlFWZ3NNa0pCUVZjc1JVRkJXQ3g1UWtGQlZ5eEZRVUZZTEVsQlFWY3NSVUZCUlR0dlFrRkJOMElzU1VGQlRTeE5RVUZOTEc5Q1FVRkJPMjlDUVVObUxFbEJRVTBzUjBGQlJ5eEhRVUZYTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2IwSkJRMmhFTEVsQlFVMHNTMEZCU3l4SFFVRlhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEyeEVMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdkMEpCUXpOQ0xFOUJRVThzUzBGQlN5eERRVUZETzNGQ1FVTmtPMmxDUVVOR08yRkJRMFk3VTBGRFJqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVOSUxHOUNRVUZETzBGQlFVUXNRMEZCUXl4QlFYUkRSQ3hKUVhORFF5SjkiLCJ2YXIgVGVtcGxhdGVGaWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGVtcGxhdGVGaWxlKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgdGhpcy5mdWxsUGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5mdWxsUGF0aCA9IGZ1bGxQYXRoO1xyXG4gICAgICAgIHZhciBvc0ZpeGVkUGF0aCA9IGZ1bGxQYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xyXG4gICAgICAgIHZhciBmbiA9IG9zRml4ZWRQYXRoLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZm4gPT09IHVuZGVmaW5lZCA/IFwiRmlsZSBuYW1lIG1hbGZvcm1lZFwiIDogZm47XHJcbiAgICB9XHJcbiAgICBUZW1wbGF0ZUZpbGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImZpbGVOYW1lOiBcIiArIHRoaXMuZmlsZU5hbWUgKyBcIlxcbiAgICAgIGZ1bGxQYXRoOiBcIiArIHRoaXMuZnVsbFBhdGg7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRlbXBsYXRlRmlsZTtcclxufSgpKTtcclxuZXhwb3J0IHsgVGVtcGxhdGVGaWxlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHVnRjR3hoZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpVWlcxd2JHRjBaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEpRVXRGTEhOQ1FVRlpMRkZCUVdkQ08xRkJTSEpDTEdGQlFWRXNSMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkRkRUlzWVVGQlVTeEhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVY3pRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTjZRaXhKUVVGTkxGZEJRVmNzUjBGQlZ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UkN4SlFVRk5MRVZCUVVVc1IwRkJkVUlzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0xUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVVzUzBGQlN5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRhRVVzUTBGQlF6dEpRVVZOTEN0Q1FVRlJMRWRCUVdZN1VVRkRSU3hQUVVGUExHVkJRV0VzU1VGQlNTeERRVUZETEZGQlFWRXNNRUpCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZWTEVOQlFVTTdTVUZEYUVNc1EwRkJRenRKUVVOSUxHMUNRVUZETzBGQlFVUXNRMEZCUXl4QlFXaENSQ3hKUVdkQ1F5SjkiLCJ2YXIgVHlwZUFoZWFkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgVHlwZUFoZWFkIGNvbnN0cnVjdG9yLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gc2VsZWN0IC0gVGhlIFNlbGVjdCBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtKUXVlcnk8SFRNTElucHV0RWxlbWVudD59IGlucHV0IC0gVGhlIElucHV0IGVsZW1lbnQgd2hpY2ggY29udGFpbnNcclxuICAgICAqIHRoZSBzZWFyY2ggc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBUeXBlQWhlYWQoc2VsZWN0LCBpbnB1dCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gc2VsZWN0O1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICB0aGlzLm9wdGlvbnNPcmlnaW5hbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlIHRoZSBvcmlnaW5hbCBvcHRpb25zIGZvciB0aGUgc2VsZWN0IGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBUeXBlQWhlYWQucHJvdG90eXBlLnNldE9wdGlvbnNPcmlnaW5hbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNPcmlnaW5hbCA9IHRoaXMuc2VsZWN0LmNoaWxkcmVuKFwib3B0aW9uXCIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBTZWxlY3QgZWxlbWVudCwgZmlsdGVyIGFsbCBvZiBpdHMgT3B0aW9uIGVsZW1lbnRzIHRvIG9ubHkgc2hvdyB0aG9zZVxyXG4gICAgICogd2hvIHBhc3MgYSBnaXZlbiB0ZXN0LCBpbiBgZmluZE1hdGNoZXNgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gc2VsZWN0RWxlbWVudCAtIFRoZSBTZWxlY3QgZWxlbWVudCB0byBiZSBmaWx0ZXJlZC5cclxuICAgICAqL1xyXG4gICAgVHlwZUFoZWFkLnByb3RvdHlwZS5maWx0ZXJPcHRpb25zSW4gPSBmdW5jdGlvbiAoc2VsZWN0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gc2VsZWN0RWxlbWVudDtcclxuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNNaXNtYXRjaGVkQ29sbGVjdGlvblF1ZXJ5VXBkYXRlXHJcbiAgICAgICAgdmFyIG9wdGlvbnNDdXJyZW50ID0gdGhpcy5zZWxlY3QuY2hpbGRyZW4oXCJvcHRpb25cIik7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLmZpbmRNYXRjaGVzKHRoaXMuaW5wdXQudmFsKCkpO1xyXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnNDdXJyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmQobWF0Y2hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5hcHBlbmQodGhpcy5vcHRpb25zT3JpZ2luYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzIGJ5IGEgZ2l2ZW4gc2VhcmNoIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoIC0gVGhlIHN0cmluZyBvZiB0ZXh0IHRvIHVzZSBmb3IgZmlsdGVyaW5nIHRoZSBPcHRpb24gbGlzdC5cclxuICAgICAqIEByZXR1cm5zIHtKUXVlcnk8SFRNTE9wdGlvbkVsZW1lbnQ+IHwgbnVsbH0gVGhlIGZpbHRlcmVkIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzLFxyXG4gICAgICogb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm9uZSB0byBiZWdpbiB3aXRoIG9yIGlmIHRoZSBzZWFyY2ggc3RyaW5nIGlzIGJsYW5rLlxyXG4gICAgICovXHJcbiAgICBUeXBlQWhlYWQucHJvdG90eXBlLmZpbmRNYXRjaGVzID0gZnVuY3Rpb24gKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNPcmlnaW5hbCAhPT0gbnVsbCAmJiBzZWFyY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc09yaWdpbmFsLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgsIG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi50ZXh0Lm1hdGNoKHJlZ2V4KSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUeXBlQWhlYWQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFR5cGVBaGVhZCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWSGx3WlVGb1pXRmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVZIbHdaVUZvWldGa0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBsQlMwVTdPenM3T3p0UFFVMUhPMGxCUTBnc2JVSkJRVmtzVFVGQk1rSXNSVUZCUlN4TFFVRXJRanRSUVVOMFJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzYzBOQlFXdENMRWRCUVhwQ08xRkJRMFVzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlJXNUVMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeHRRMEZCWlN4SFFVRjBRaXhWUVVGMVFpeGhRVUZyUXp0UlFVTjJSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTTFRaXhwUkVGQmFVUTdVVUZEYWtRc1NVRkJUU3hqUVVGakxFZEJRVGhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVOd1JTeFJRVUZSTEVOQlEyOUNMRU5CUVVNN1VVRkRMMElzU1VGQlRTeFBRVUZQTEVkQlFYRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRMmhGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGWkxFTkJRek5DTEVOQlFVTTdVVUZEUml4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGNFSXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJRM2hDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6ZENPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJORU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMGxCUTBnc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5MTEN0Q1FVRlhMRWRCUVc1Q0xGVkJRVzlDTEUxQlFXTTdVVUZEYUVNc1NVRkJUU3hMUVVGTExFZEJRVmNzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhKUVVGSkxFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlF6TkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlEyaERMRlZCUVVNc1MwRkJZU3hGUVVGRkxFMUJRWGxDTzJkQ1FVTjJReXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF6dFpRVU16UXl4RFFVRkRMRU5CUTBZc1EwRkJRenRUUVVOSU8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUTBnc1owSkJRVU03UVVGQlJDeERRVUZETEVGQmNrVkVMRWxCY1VWREluMD0iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBtYWluIHBhbmVsIGZ1bmN0aW9ucyBhbmQgY2FsbHMgdG8gYWxsIG9mIGl0cyBtb2R1bGVzLlxyXG4gKi9cclxuaW1wb3J0IHsgQ1NJbnRlcmZhY2UsIFN5c3RlbVBhdGggfSBmcm9tIFwiY3NpbnRlcmZhY2UtdHNcIjtcclxuaW1wb3J0ICogYXMgZGlyIGZyb20gXCJub2RlLWRpclwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInNwaW4uanNcIjtcclxuaW1wb3J0IHsgQ29va2llTWFuYWdlciB9IGZyb20gXCIuL2xpYnMvQ29va2llTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUZpbGUgfSBmcm9tIFwiLi9saWJzL1RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IFR5cGVBaGVhZCB9IGZyb20gXCIuL2xpYnMvVHlwZUFoZWFkXCI7XHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBmdW5jdGlvbiB0aGF0IHdpbGwgcnVuIGluIHRoZSBBZG9iZSBDRVAgcGFuZWwuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvLyBTZXQgdXAgY29uc3RhbnRzLlxyXG4gICAgdmFyIGNzSW50ZXJmYWNlID0gbmV3IENTSW50ZXJmYWNlKCk7XHJcbiAgICB2YXIgY29va2llTWFuYWdlciA9IG5ldyBDb29raWVNYW5hZ2VyKCk7XHJcbiAgICB2YXIgc3Bpbm5lciA9IG5ldyBTcGlubmVyKHsgY29sb3I6IFwiI2ZmZlwiLCBsaW5lczogMTIgfSk7XHJcbiAgICB2YXIgZWxCb2R5ID0gJChcImJvZHlcIik7XHJcbiAgICB2YXIgZWxTZWxlY3RXcmFwcGVyID0gJChcIiN0ZW1wbGF0ZS1saXN0LXdyYXBwZXJcIik7XHJcbiAgICB2YXIgZWxTZWxlY3QgPSAkKFwiI3RlbXBsYXRlLWxpc3RcIik7XHJcbiAgICB2YXIgZWxJbnB1dCA9ICQoXCIjc2VhcmNoLWJveFwiKTtcclxuICAgIHZhciB0eXBlQWhlYWQgPSBuZXcgVHlwZUFoZWFkKGVsU2VsZWN0LCBlbElucHV0KTtcclxuICAgIHZhciBub25TZWxlY3RIZWlnaHQgPSAxODA7XHJcbiAgICB2YXIgc2VsZWN0TGluZUhlaWdodCA9IDIwO1xyXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3IgQmxvY2tVSS5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICQuYmxvY2tVSS5kZWZhdWx0cyA9IHtcclxuICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgIG9uQmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3BpbihlbEJvZHkuZ2V0KDApKTsgfSxcclxuICAgICAgICBvblVuYmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3RvcCgpOyB9LFxyXG4gICAgICAgIG92ZXJsYXlDU1M6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyB0aGUgaG9zdCBhcHBsaWNhdGlvbiB0byBvcGVuIGFsbCBvZiB0aGUgZmlsZXMgaW4gdGhlIGdpdmVuIGxpc3Qgb2YgZnVsbCBwYXRobmFtZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VsZWN0ZWQgLSBUaGUgbGlzdCBvZiBmdWxsIHBhdGhuYW1lcyBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxyXG4gICAgICovXHJcbiAgICB2YXIgb3BlblRlbXBsYXRlcyA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgc2VsZWN0ZWRfMSA9IHNlbGVjdGVkOyBfaSA8IHNlbGVjdGVkXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZUZpbGUoaXRlbSk7XHJcbiAgICAgICAgICAgIHZhciBqc29uVGVtcGxhdGUgPSBKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIGNzSW50ZXJmYWNlLmV2YWxTY3JpcHQoXCJvcGVuRG9jdW1lbnQoXCIgKyBqc29uVGVtcGxhdGUgKyBcIilcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQudW5ibG9ja1VJKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBleHRlbnNpb24gcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0LlwiKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgU2VsZWN0IGVsZW1lbnQuXHJcbiAgICAgICAgICogTW9zdGx5IGp1c3QgZm9yIGRvdWJsZS1jbGlja2luZyBhbiBPcHRpb24gaW4gdGhlIFNlbGVjdCBFbGVtZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGVsU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGVsU2VsZWN0LmRibGNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGVsU2VsZWN0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYmxvY2tVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb3BlblRlbXBsYXRlcyhzZWxlY3RlZCk7IH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIE9wZW4gYnV0dG9uLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIG9wZW5CdXR0b24gPSAkKFwiI29wZW4tYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmIChvcGVuQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG9wZW5CdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBlbFNlbGVjdC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLmJsb2NrVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9wZW5UZW1wbGF0ZXMoc2VsZWN0ZWQpOyB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldCB0aGUgbGlzdCBvZiB0ZW1wbGF0ZXMgaW4gdGhlIFBhbmVsIGFzIE9wdGlvbiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7VGVtcGxhdGVGaWxlW119IGZpbGVMaXN0IC0gVGhlIGxpc3Qgb2YgdGVtcGxhdGVzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBzZXRUZW1wbGF0ZUxpc3QgPSBmdW5jdGlvbiAoZmlsZUxpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZWxTZWxlY3QuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZmlsZUxpc3RfMSA9IGZpbGVMaXN0OyBfaSA8IGZpbGVMaXN0XzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlTGlzdF8xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICBlbFNlbGVjdC5hcHBlbmQoJChcIjxvcHRpb24gLz5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChmaWxlLmZ1bGxQYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChmaWxlLmZpbGVOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgbGlzdCBvZiB0ZW1wbGF0ZSBmaWxlcyByZWN1cnNpdmVseSBmcm9tIGEgZ2l2ZW4gcGF0aCxcclxuICAgICAgICAgKiB0aGVuIHBvcHVsYXRlIHRoZSBIVE1MIHBhbmVsIHdpdGggdGhhdCBsaXN0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCBmcm9tIHdoaWNoIHRvIG9idGFpbiB0aGUgbGlzdCBvZiBmaWxlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgZ2V0RmlsZXMgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGVsU2VsZWN0V3JhcHBlci5ibG9jayh7XHJcbiAgICAgICAgICAgICAgICBvbkJsb2NrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzcGlubmVyLnNwaW4oZWxTZWxlY3RXcmFwcGVyLmdldCgwKSk7IH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpci5maWxlcyhwYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ID0gXCJhaVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVBhdGhzID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLnNwbGl0KFwiLlwiKS5wb3AoKSA9PT0gZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUGF0aHMuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRlbXBsYXRlUGF0aHNfMSA9IHRlbXBsYXRlUGF0aHM7IF9pIDwgdGVtcGxhdGVQYXRoc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0ZW1wbGF0ZVBhdGhzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMucHVzaChuZXcgVGVtcGxhdGVGaWxlKHRlbXBsYXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlbXBsYXRlTGlzdCh0ZW1wbGF0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBlbFNlbGVjdFdyYXBwZXIudW5ibG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsSW5wdXQub2ZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFoZWFkLnNldE9wdGlvbnNPcmlnaW5hbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsSW5wdXQub24oXCJrZXl1cCBjaGFuZ2UgcmVzZXQgc2VhcmNoXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUFoZWFkLmZpbHRlck9wdGlvbnNJbihlbFNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgdGVtcGxhdGUgZm9sZGVyIHNlbGVjdGlvbiBidXR0b24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgdGVtcGxhdGVCdXR0b24gPSAkKFwiI2ZpbGUtY29udHJvbFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlbXBsYXRlQnV0dG9uOlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZUJ1dHRvbik7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVtcGxhdGVCdXR0b24gaXMuXCIpO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZUJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBgY2VwYCBfZG9lc18gZXhpc3Qgb24gYHdpbmRvd2AuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmNlcC5mcy5zaG93T3BlbkRpYWxvZ0V4KGZhbHNlLCAvLyBhbGxvd011bHRpcGxlU2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0cnVlLCAvLyBjaG9vc2VEaXJlY3RvcnlcclxuICAgICAgICAgICAgICAgIFwiU2VsZWN0IHRoZSB0ZW1wbGF0ZSBmb2xkZXJcIiwgLy8gdGl0bGVcclxuICAgICAgICAgICAgICAgIGNzSW50ZXJmYWNlLmdldFN5c3RlbVBhdGgoU3lzdGVtUGF0aC5NWV9ET0NVTUVOVFMpLCAvLyBpbml0aWFsUGF0aFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uOiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24uZGF0YS5sZW5ndGg6IFwiLCBzZWxlY3Rpb24uZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24uZGF0YS5sZW5ndGggKGJvb2wpOiBcIiwgISFzZWxlY3Rpb24uZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhc2VsZWN0aW9uLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVQYXRoID0gc2VsZWN0aW9uLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlUGF0aDogXCIgKyBmaWxlUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9zRml4ZWRQYXRoID0gZmlsZVBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvc0ZpeGVkUGF0aDogXCIgKyBvc0ZpeGVkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llTWFuYWdlci5zZXQob3NGaXhlZFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEZpbGVzKG9zRml4ZWRQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXRpYWxpemUgdGhlIHRoZW1lIChjb2xvcnMsIEdVSSwgbG9vayAmIGZlZWwsIGV0Yy4pXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGVtZU1hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwb24gc3RhcnRpbmcgdGhlIGV4dGVuc2lvbiwgb2J0YWluIGFuIGV4aXN0aW5nIGxpc3Qgb2YgZmlsZXNcclxuICAgICAgICAgKiBpZiB0aGUgcGF0aCB0byB0aGVtIGhhcyBhbHJlYWR5IGJlZW4gc2V0LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIHRlbXBsYXRlUGF0aCA9IGNvb2tpZU1hbmFnZXIuZ2V0KCk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlUGF0aCkge1xyXG4gICAgICAgICAgICBnZXRGaWxlcyh0ZW1wbGF0ZVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBleHRlbnNpb24gcGFuZWwgaXMgcmUtc2l6ZWQuXHJcbiAgICAgICAgICogUmUtc2l6ZXMgdGhlIFNlbGVjdFttdWx0aXBsZV0gZWxlbWVudCB0byBmaWxsIHRoZSBzcGFjZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciByZXNpemVTZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1MaW5lcyA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIG5vblNlbGVjdEhlaWdodCkgLyBzZWxlY3RMaW5lSGVpZ2h0KTtcclxuICAgICAgICAgICAgZWxTZWxlY3QuYXR0cihcInNpemVcIiwgbnVtTGluZXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVzaXplIHRoZSBTZWxlY3RbbXVsdGlwbGVdIGVsZW1lbnQgdXBvbiBzdGFydHVwIG9mIHRoZSBleHRlbnNpb24gcGFuZWxcclxuICAgICAgICAgKiBhbmQgYXNzaWduIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudCB3aGVuIHRoZSBwYW5lbCBpcyByZS1zaXplZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICAkKHJlc2l6ZVNlbGVjdCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHJlc2l6ZVNlbGVjdCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCk7XHJcbn0pKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnBiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltMWhhVzR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMGRCUlVjN1FVRkZTQ3hQUVVGUExFVkJRVVVzVjBGQlZ5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MR2RDUVVGblFpeERRVUZETzBGQlEzcEVMRTlCUVU4c1MwRkJTeXhIUVVGSExFMUJRVTBzVlVGQlZTeERRVUZETzBGQlEyaERMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeFRRVUZUTEVOQlFVTTdRVUZEYkVNc1QwRkJUeXhGUVVGRkxHRkJRV0VzUlVGQlJTeE5RVUZOTEhOQ1FVRnpRaXhEUVVGRE8wRkJRM0pFTEU5QlFVOHNSVUZCUlN4WlFVRlpMRVZCUVVVc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0QlFVTXZReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVU03UVVGRk4wTTdPMGRCUlVjN1FVRkRTQ3hEUVVGRE8wbEJRME1zV1VGQldTeERRVUZETzBsQlJXSXNiMEpCUVc5Q08wbEJRM0JDTEVsQlFVMHNWMEZCVnl4SFFVRm5RaXhKUVVGSkxGZEJRVmNzUlVGQlJTeERRVUZETzBsQlEyNUVMRWxCUVUwc1lVRkJZU3hIUVVGclFpeEpRVUZKTEdGQlFXRXNSVUZCUlN4RFFVRkRPMGxCUTNwRUxFbEJRVTBzVDBGQlR5eEhRVUZaTEVsQlFVa3NUMEZCVHl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOdVJTeEpRVUZOTEUxQlFVMHNSMEZCZDBJc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6bERMRWxCUVUwc1pVRkJaU3hIUVVGM1FpeERRVUZETEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dEpRVU42UlN4SlFVRk5MRkZCUVZFc1IwRkJkMElzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03U1VGRE1VUXNTVUZCVFN4UFFVRlBMRWRCUVRaQ0xFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hKUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGJrUXNTVUZCVFN4bFFVRmxMRWRCUVVjc1IwRkJSeXhEUVVGRE8wbEJRelZDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUlVGQlJTeERRVUZETzBsQlJUVkNMR2REUVVGblF6dEpRVU5vUXl4aFFVRmhPMGxCUTJJc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVkQlFVYzdVVUZEYmtJc1QwRkJUeXhGUVVGRkxFbEJRVWs3VVVGRFlpeFBRVUZQTEVWQlFVVXNZMEZCVFN4UFFVRkJMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVFelFpeERRVUV5UWp0UlFVTXhReXhUUVVGVExFVkJRVVVzWTBGQlRTeFBRVUZCTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJaQ3hEUVVGak8xRkJReTlDTEZWQlFWVXNSVUZCUlR0WlFVTldMR1ZCUVdVc1JVRkJSU3hOUVVGTk8xbEJRM1pDTEU5QlFVOHNSVUZCUlN4SFFVRkhPMU5CUTJJN1VVRkRSQ3hYUVVGWExFVkJRVVVzU1VGQlNUdExRVU5zUWl4RFFVRkRPMGxCUlVZN096czdUMEZKUnp0SlFVTklMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zVVVGQmEwSTdVVUZEZGtNc1MwRkJiVUlzVlVGQlVTeEZRVUZTTEhGQ1FVRlJMRVZCUVZJc2MwSkJRVkVzUlVGQlVpeEpRVUZSTEVWQlFVVTdXVUZCZUVJc1NVRkJUU3hKUVVGSkxHbENRVUZCTzFsQlEySXNTVUZCVFN4UlFVRlJMRWRCUVdsQ0xFbEJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNSRUxFbEJRVTBzV1VGQldTeEhRVUZYTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGRFUXNWMEZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhyUWtGQlowSXNXVUZCV1N4TlFVRkhMRVZCUVVVN1owSkJRM1JFTEhWQ1FVRjFRanRaUVVONlFpeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTktPMUZCUTBRc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEyaENMRU5CUVVNc1EwRkJRenRKUVVWR096dFBRVVZITzBsQlEwZ3NVMEZCVXl4SlFVRkpPMUZCUTFnc2QwSkJRWGRDTzFGQlEzaENPenM3TzFkQlNVYzdVVUZEU0N4SlFVRkpMRkZCUVZFc1JVRkJSVHRaUVVOYUxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTJoQ0xFbEJRVTBzVVVGQlVTeEhRVUZoTEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVdNc1EwRkJRenRuUWtGRGRFUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU51UWl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03YjBKQlExb3NWVUZCVlN4RFFVRkRMR05CUVUwc1QwRkJRU3hoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFYWkNMRU5CUVhWQ0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTJwRU8xbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEU2p0UlFVVkVPenM3VjBGSFJ6dFJRVU5JTEVsQlFVMHNWVUZCVlN4SFFVRjNRaXhEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZETVVRc1NVRkJTU3hWUVVGVkxFVkJRVVU3V1VGRFpDeFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGNrSXNTVUZCVFN4UlFVRlJMRWRCUVdFc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQll5eERRVUZETzJkQ1FVTjBSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTI1Q0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRXaXhWUVVGVkxFTkJRVU1zWTBGQlRTeFBRVUZCTEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJka0lzUTBGQmRVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRwUWtGRGFrUTdXVUZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOS08xRkJSVVE3T3pzN1YwRkpSenRSUVVOSUxFbEJRVTBzWlVGQlpTeEhRVUZITEZWQlFVTXNVVUZCZDBJN1dVRkRMME1zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZPMmRDUVVOdVFpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMnBDTEV0QlFXMUNMRlZCUVZFc1JVRkJVaXh4UWtGQlVTeEZRVUZTTEhOQ1FVRlJMRVZCUVZJc1NVRkJVU3hGUVVGRk8yOUNRVUY0UWl4SlFVRk5MRWxCUVVrc2FVSkJRVUU3YjBKQlEySXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkRZaXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzNsQ1FVTmFMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzNsQ1FVTnNRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVTjJRaXhEUVVGRE8ybENRVU5JTzJGQlEwWTdVVUZEU0N4RFFVRkRMRU5CUVVNN1VVRkZSanM3T3pzN1YwRkxSenRSUVVOSUxFbEJRVTBzVVVGQlVTeEhRVUZITEZWQlFVTXNTVUZCV1R0WlFVTTFRaXhoUVVGaE8xbEJRMklzWlVGQlpTeERRVUZETEV0QlFVc3NRMEZCUXp0blFrRkRjRUlzVDBGQlR5eEZRVUZGTEdOQlFVMHNUMEZCUVN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJjRU1zUTBGQmIwTTdZVUZEY0VRc1EwRkJReXhEUVVGRE8xbEJRMGdzVlVGQlZTeERRVUZETzJkQ1FVTlVMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFVTXNSMEZCVlN4RlFVRkZMRXRCUVdVN2IwSkJRekZETEVsQlFVa3NSMEZCUnl4RlFVRkZPM2RDUVVOUUxFMUJRVTBzUjBGQlJ5eERRVUZETzNGQ1FVTllPMjlDUVVORUxFbEJRVTBzUjBGQlJ5eEhRVUZYTEVsQlFVa3NRMEZCUXp0dlFrRkRla0lzU1VGQlRTeGhRVUZoTEVkQlFXRXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGRExFbEJRVWs3ZDBKQlEyaEVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhIUVVGSExFTkJRVU03YjBKQlEzWkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5JTEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNTVUZCVFN4VFFVRlRMRWRCUVcxQ0xFVkJRVVVzUTBGQlF6dHZRa0ZEY2tNc1MwRkJkVUlzVlVGQllTeEZRVUZpTEN0Q1FVRmhMRVZCUVdJc01rSkJRV0VzUlVGQllpeEpRVUZoTEVWQlFVVTdkMEpCUVdwRExFbEJRVTBzVVVGQlVTeHpRa0ZCUVR0M1FrRkRha0lzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzNGQ1FVTTFRenR2UWtGRFJDeGxRVUZsTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEdGQlFXRTdiMEpCUTJJc1pVRkJaU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTXhRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdiMEpCUTJRc1UwRkJVeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN2IwSkJReTlDTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc01rSkJRVEpDTEVWQlFVVTdkMEpCUTNSRExGTkJRVk1zUTBGQlF5eGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRM1JETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEwd3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMWdzUTBGQlF5eERRVUZETzFGQlJVWTdPenRYUVVkSE8xRkJRMGdzU1VGQlRTeGpRVUZqTEVkQlFYZENMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU12UkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRMMElzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNMVFpeEpRVUZKTEdOQlFXTXNSVUZCUlR0WlFVTnNRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03V1VGRmJFTXNZMEZCWXl4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEzcENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenRuUWtGRE9VSXNPRU5CUVRoRE8yZENRVU01UXl4SlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGRE9VTXNTMEZCU3l4RlFVRkZMSGxDUVVGNVFqdG5Ra0ZEYUVNc1NVRkJTU3hGUVVGRkxHdENRVUZyUWp0blFrRkRlRUlzTkVKQlFUUkNMRVZCUVVVc1VVRkJVVHRuUWtGRGRFTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNZMEZCWXp0blFrRkRiRVVzVTBGQlV5eERRVU5XTEVOQlFVTTdaMEpCUTBZc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRNMElzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTTVSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdkRFFVRm5ReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVU4yUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0dlFrRkRNMElzU1VGQlRTeFJRVUZSTEVkQlFWY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETTBNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRM0pETEVsQlFVMHNWMEZCVnl4SFFVRlhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVONlJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZETTBNc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkRMMElzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMmxDUVVOMlFqdFpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTBvN1VVRkZSRHM3TzFkQlIwYzdVVUZEU0N4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRmNFSTdPenM3VjBGSlJ6dFJRVU5JTEVsQlFVMHNXVUZCV1N4SFFVRnJRaXhoUVVGaExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEZUVRc1NVRkJTU3haUVVGWkxFVkJRVVU3V1VGRGFFSXNVVUZCVVN4RFFVRkRMRmxCUVhOQ0xFTkJRVU1zUTBGQlF6dFRRVU5zUXp0UlFVVkVPenM3TzFkQlNVYzdVVUZEU0N4SlFVRk5MRmxCUVZrc1IwRkJSenRaUVVOdVFpeEpRVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVONlFpeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRWRCUVVjc1pVRkJaU3hEUVVGRExFZEJRVWNzWjBKQlFXZENMRU5CUXpGRUxFTkJRVU03V1VGRFJpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU5zUXl4RFFVRkRMRU5CUVVNN1VVRkZSanM3TzFkQlIwYzdVVUZEU0N4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGFFSXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUTFRc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5SjkiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGJhbGFuY2VkO1xuZnVuY3Rpb24gYmFsYW5jZWQoYSwgYiwgc3RyKSB7XG4gIGlmIChhIGluc3RhbmNlb2YgUmVnRXhwKSBhID0gbWF5YmVNYXRjaChhLCBzdHIpO1xuICBpZiAoYiBpbnN0YW5jZW9mIFJlZ0V4cCkgYiA9IG1heWJlTWF0Y2goYiwgc3RyKTtcblxuICB2YXIgciA9IHJhbmdlKGEsIGIsIHN0cik7XG5cbiAgcmV0dXJuIHIgJiYge1xuICAgIHN0YXJ0OiByWzBdLFxuICAgIGVuZDogclsxXSxcbiAgICBwcmU6IHN0ci5zbGljZSgwLCByWzBdKSxcbiAgICBib2R5OiBzdHIuc2xpY2UoclswXSArIGEubGVuZ3RoLCByWzFdKSxcbiAgICBwb3N0OiBzdHIuc2xpY2UoclsxXSArIGIubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXliZU1hdGNoKHJlZywgc3RyKSB7XG4gIHZhciBtID0gc3RyLm1hdGNoKHJlZyk7XG4gIHJldHVybiBtID8gbVswXSA6IG51bGw7XG59XG5cbmJhbGFuY2VkLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiByYW5nZShhLCBiLCBzdHIpIHtcbiAgdmFyIGJlZ3MsIGJlZywgbGVmdCwgcmlnaHQsIHJlc3VsdDtcbiAgdmFyIGFpID0gc3RyLmluZGV4T2YoYSk7XG4gIHZhciBiaSA9IHN0ci5pbmRleE9mKGIsIGFpICsgMSk7XG4gIHZhciBpID0gYWk7XG5cbiAgaWYgKGFpID49IDAgJiYgYmkgPiAwKSB7XG4gICAgYmVncyA9IFtdO1xuICAgIGxlZnQgPSBzdHIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPj0gMCAmJiAhcmVzdWx0KSB7XG4gICAgICBpZiAoaSA9PSBhaSkge1xuICAgICAgICBiZWdzLnB1c2goaSk7XG4gICAgICAgIGFpID0gc3RyLmluZGV4T2YoYSwgaSArIDEpO1xuICAgICAgfSBlbHNlIGlmIChiZWdzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHJlc3VsdCA9IFsgYmVncy5wb3AoKSwgYmkgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZyA9IGJlZ3MucG9wKCk7XG4gICAgICAgIGlmIChiZWcgPCBsZWZ0KSB7XG4gICAgICAgICAgbGVmdCA9IGJlZztcbiAgICAgICAgICByaWdodCA9IGJpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmkgPSBzdHIuaW5kZXhPZihiLCBpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGkgPSBhaSA8IGJpICYmIGFpID49IDAgPyBhaSA6IGJpO1xuICAgIH1cblxuICAgIGlmIChiZWdzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gWyBsZWZ0LCByaWdodCBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJ2YXIgY29uY2F0TWFwID0gcmVxdWlyZSgnY29uY2F0LW1hcCcpO1xudmFyIGJhbGFuY2VkID0gcmVxdWlyZSgnYmFsYW5jZWQtbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBhbmRUb3A7XG5cbnZhciBlc2NTbGFzaCA9ICdcXDBTTEFTSCcrTWF0aC5yYW5kb20oKSsnXFwwJztcbnZhciBlc2NPcGVuID0gJ1xcME9QRU4nK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjQ2xvc2UgPSAnXFwwQ0xPU0UnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjQ29tbWEgPSAnXFwwQ09NTUEnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjUGVyaW9kID0gJ1xcMFBFUklPRCcrTWF0aC5yYW5kb20oKSsnXFwwJztcblxuZnVuY3Rpb24gbnVtZXJpYyhzdHIpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0ciwgMTApID09IHN0clxuICAgID8gcGFyc2VJbnQoc3RyLCAxMClcbiAgICA6IHN0ci5jaGFyQ29kZUF0KDApO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVCcmFjZXMoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJ1xcXFxcXFxcJykuam9pbihlc2NTbGFzaClcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXHsnKS5qb2luKGVzY09wZW4pXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFx9Jykuam9pbihlc2NDbG9zZSlcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXCwnKS5qb2luKGVzY0NvbW1hKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcLicpLmpvaW4oZXNjUGVyaW9kKTtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGVCcmFjZXMoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoZXNjU2xhc2gpLmpvaW4oJ1xcXFwnKVxuICAgICAgICAgICAgLnNwbGl0KGVzY09wZW4pLmpvaW4oJ3snKVxuICAgICAgICAgICAgLnNwbGl0KGVzY0Nsb3NlKS5qb2luKCd9JylcbiAgICAgICAgICAgIC5zcGxpdChlc2NDb21tYSkuam9pbignLCcpXG4gICAgICAgICAgICAuc3BsaXQoZXNjUGVyaW9kKS5qb2luKCcuJyk7XG59XG5cblxuLy8gQmFzaWNhbGx5IGp1c3Qgc3RyLnNwbGl0KFwiLFwiKSwgYnV0IGhhbmRsaW5nIGNhc2VzXG4vLyB3aGVyZSB3ZSBoYXZlIG5lc3RlZCBicmFjZWQgc2VjdGlvbnMsIHdoaWNoIHNob3VsZCBiZVxuLy8gdHJlYXRlZCBhcyBpbmRpdmlkdWFsIG1lbWJlcnMsIGxpa2Uge2Ese2IsY30sZH1cbmZ1bmN0aW9uIHBhcnNlQ29tbWFQYXJ0cyhzdHIpIHtcbiAgaWYgKCFzdHIpXG4gICAgcmV0dXJuIFsnJ107XG5cbiAgdmFyIHBhcnRzID0gW107XG4gIHZhciBtID0gYmFsYW5jZWQoJ3snLCAnfScsIHN0cik7XG5cbiAgaWYgKCFtKVxuICAgIHJldHVybiBzdHIuc3BsaXQoJywnKTtcblxuICB2YXIgcHJlID0gbS5wcmU7XG4gIHZhciBib2R5ID0gbS5ib2R5O1xuICB2YXIgcG9zdCA9IG0ucG9zdDtcbiAgdmFyIHAgPSBwcmUuc3BsaXQoJywnKTtcblxuICBwW3AubGVuZ3RoLTFdICs9ICd7JyArIGJvZHkgKyAnfSc7XG4gIHZhciBwb3N0UGFydHMgPSBwYXJzZUNvbW1hUGFydHMocG9zdCk7XG4gIGlmIChwb3N0Lmxlbmd0aCkge1xuICAgIHBbcC5sZW5ndGgtMV0gKz0gcG9zdFBhcnRzLnNoaWZ0KCk7XG4gICAgcC5wdXNoLmFwcGx5KHAsIHBvc3RQYXJ0cyk7XG4gIH1cblxuICBwYXJ0cy5wdXNoLmFwcGx5KHBhcnRzLCBwKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvcChzdHIpIHtcbiAgaWYgKCFzdHIpXG4gICAgcmV0dXJuIFtdO1xuXG4gIC8vIEkgZG9uJ3Qga25vdyB3aHkgQmFzaCA0LjMgZG9lcyB0aGlzLCBidXQgaXQgZG9lcy5cbiAgLy8gQW55dGhpbmcgc3RhcnRpbmcgd2l0aCB7fSB3aWxsIGhhdmUgdGhlIGZpcnN0IHR3byBieXRlcyBwcmVzZXJ2ZWRcbiAgLy8gYnV0ICpvbmx5KiBhdCB0aGUgdG9wIGxldmVsLCBzbyB7fSxhfWIgd2lsbCBub3QgZXhwYW5kIHRvIGFueXRoaW5nLFxuICAvLyBidXQgYXt9LGJ9YyB3aWxsIGJlIGV4cGFuZGVkIHRvIFthfWMsYWJjXS5cbiAgLy8gT25lIGNvdWxkIGFyZ3VlIHRoYXQgdGhpcyBpcyBhIGJ1ZyBpbiBCYXNoLCBidXQgc2luY2UgdGhlIGdvYWwgb2ZcbiAgLy8gdGhpcyBtb2R1bGUgaXMgdG8gbWF0Y2ggQmFzaCdzIHJ1bGVzLCB3ZSBlc2NhcGUgYSBsZWFkaW5nIHt9XG4gIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAne30nKSB7XG4gICAgc3RyID0gJ1xcXFx7XFxcXH0nICsgc3RyLnN1YnN0cigyKTtcbiAgfVxuXG4gIHJldHVybiBleHBhbmQoZXNjYXBlQnJhY2VzKHN0ciksIHRydWUpLm1hcCh1bmVzY2FwZUJyYWNlcyk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5KGUpIHtcbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGVtYnJhY2Uoc3RyKSB7XG4gIHJldHVybiAneycgKyBzdHIgKyAnfSc7XG59XG5mdW5jdGlvbiBpc1BhZGRlZChlbCkge1xuICByZXR1cm4gL14tPzBcXGQvLnRlc3QoZWwpO1xufVxuXG5mdW5jdGlvbiBsdGUoaSwgeSkge1xuICByZXR1cm4gaSA8PSB5O1xufVxuZnVuY3Rpb24gZ3RlKGksIHkpIHtcbiAgcmV0dXJuIGkgPj0geTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kKHN0ciwgaXNUb3ApIHtcbiAgdmFyIGV4cGFuc2lvbnMgPSBbXTtcblxuICB2YXIgbSA9IGJhbGFuY2VkKCd7JywgJ30nLCBzdHIpO1xuICBpZiAoIW0gfHwgL1xcJCQvLnRlc3QobS5wcmUpKSByZXR1cm4gW3N0cl07XG5cbiAgdmFyIGlzTnVtZXJpY1NlcXVlbmNlID0gL14tP1xcZCtcXC5cXC4tP1xcZCsoPzpcXC5cXC4tP1xcZCspPyQvLnRlc3QobS5ib2R5KTtcbiAgdmFyIGlzQWxwaGFTZXF1ZW5jZSA9IC9eW2EtekEtWl1cXC5cXC5bYS16QS1aXSg/OlxcLlxcLi0/XFxkKyk/JC8udGVzdChtLmJvZHkpO1xuICB2YXIgaXNTZXF1ZW5jZSA9IGlzTnVtZXJpY1NlcXVlbmNlIHx8IGlzQWxwaGFTZXF1ZW5jZTtcbiAgdmFyIGlzT3B0aW9ucyA9IG0uYm9keS5pbmRleE9mKCcsJykgPj0gMDtcbiAgaWYgKCFpc1NlcXVlbmNlICYmICFpc09wdGlvbnMpIHtcbiAgICAvLyB7YX0sYn1cbiAgICBpZiAobS5wb3N0Lm1hdGNoKC8sLipcXH0vKSkge1xuICAgICAgc3RyID0gbS5wcmUgKyAneycgKyBtLmJvZHkgKyBlc2NDbG9zZSArIG0ucG9zdDtcbiAgICAgIHJldHVybiBleHBhbmQoc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIFtzdHJdO1xuICB9XG5cbiAgdmFyIG47XG4gIGlmIChpc1NlcXVlbmNlKSB7XG4gICAgbiA9IG0uYm9keS5zcGxpdCgvXFwuXFwuLyk7XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlQ29tbWFQYXJ0cyhtLmJvZHkpO1xuICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8geHt7YSxifX15ID09PiB4e2F9eSB4e2J9eVxuICAgICAgbiA9IGV4cGFuZChuWzBdLCBmYWxzZSkubWFwKGVtYnJhY2UpO1xuICAgICAgaWYgKG4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBwb3N0ID0gbS5wb3N0Lmxlbmd0aFxuICAgICAgICAgID8gZXhwYW5kKG0ucG9zdCwgZmFsc2UpXG4gICAgICAgICAgOiBbJyddO1xuICAgICAgICByZXR1cm4gcG9zdC5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHJldHVybiBtLnByZSArIG5bMF0gKyBwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhdCB0aGlzIHBvaW50LCBuIGlzIHRoZSBwYXJ0cywgYW5kIHdlIGtub3cgaXQncyBub3QgYSBjb21tYSBzZXRcbiAgLy8gd2l0aCBhIHNpbmdsZSBlbnRyeS5cblxuICAvLyBubyBuZWVkIHRvIGV4cGFuZCBwcmUsIHNpbmNlIGl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgZnJlZSBvZiBicmFjZS1zZXRzXG4gIHZhciBwcmUgPSBtLnByZTtcbiAgdmFyIHBvc3QgPSBtLnBvc3QubGVuZ3RoXG4gICAgPyBleHBhbmQobS5wb3N0LCBmYWxzZSlcbiAgICA6IFsnJ107XG5cbiAgdmFyIE47XG5cbiAgaWYgKGlzU2VxdWVuY2UpIHtcbiAgICB2YXIgeCA9IG51bWVyaWMoblswXSk7XG4gICAgdmFyIHkgPSBudW1lcmljKG5bMV0pO1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KG5bMF0ubGVuZ3RoLCBuWzFdLmxlbmd0aClcbiAgICB2YXIgaW5jciA9IG4ubGVuZ3RoID09IDNcbiAgICAgID8gTWF0aC5hYnMobnVtZXJpYyhuWzJdKSlcbiAgICAgIDogMTtcbiAgICB2YXIgdGVzdCA9IGx0ZTtcbiAgICB2YXIgcmV2ZXJzZSA9IHkgPCB4O1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBpbmNyICo9IC0xO1xuICAgICAgdGVzdCA9IGd0ZTtcbiAgICB9XG4gICAgdmFyIHBhZCA9IG4uc29tZShpc1BhZGRlZCk7XG5cbiAgICBOID0gW107XG5cbiAgICBmb3IgKHZhciBpID0geDsgdGVzdChpLCB5KTsgaSArPSBpbmNyKSB7XG4gICAgICB2YXIgYztcbiAgICAgIGlmIChpc0FscGhhU2VxdWVuY2UpIHtcbiAgICAgICAgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgIGlmIChjID09PSAnXFxcXCcpXG4gICAgICAgICAgYyA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYyA9IFN0cmluZyhpKTtcbiAgICAgICAgaWYgKHBhZCkge1xuICAgICAgICAgIHZhciBuZWVkID0gd2lkdGggLSBjLmxlbmd0aDtcbiAgICAgICAgICBpZiAobmVlZCA+IDApIHtcbiAgICAgICAgICAgIHZhciB6ID0gbmV3IEFycmF5KG5lZWQgKyAxKS5qb2luKCcwJyk7XG4gICAgICAgICAgICBpZiAoaSA8IDApXG4gICAgICAgICAgICAgIGMgPSAnLScgKyB6ICsgYy5zbGljZSgxKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYyA9IHogKyBjO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgTi5wdXNoKGMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBOID0gY29uY2F0TWFwKG4sIGZ1bmN0aW9uKGVsKSB7IHJldHVybiBleHBhbmQoZWwsIGZhbHNlKSB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGogPSAwOyBqIDwgTi5sZW5ndGg7IGorKykge1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcG9zdC5sZW5ndGg7IGsrKykge1xuICAgICAgdmFyIGV4cGFuc2lvbiA9IHByZSArIE5bal0gKyBwb3N0W2tdO1xuICAgICAgaWYgKCFpc1RvcCB8fCBpc1NlcXVlbmNlIHx8IGV4cGFuc2lvbilcbiAgICAgICAgZXhwYW5zaW9ucy5wdXNoKGV4cGFuc2lvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4cGFuc2lvbnM7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHhzLCBmbikge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB4ID0gZm4oeHNbaV0sIGkpO1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkgcmVzLnB1c2guYXBwbHkocmVzLCB4KTtcbiAgICAgICAgZWxzZSByZXMucHVzaCh4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKipcclxuICogIFR5cGVzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgQ1NJbnRlcmZhY2UgLSB2Ny4wLjBcclxuICpcclxuICogIEN1c3RvbSBDU0ludGVyZmFjZS5qcyBpbXBsZW1lbnRhdGlvbiBpbiBUeXBlc2NyaXB0LlxyXG4gKiAgVGhlIGltcGxlbWVudGF0aW9uIGNvdmVycyB2ZXJzaW9uIDcueCBmcm9tIG9yaWdpbmFsIHJlcG9zaXRvcnksIHdpdGggYWxsIGZ1bmN0aW9uYWxpdGllcy5cclxuICogIEFsbCBkb2N1bWVudGF0aW9uIGNvbW1lbnRzIHdlcmUgYWxzbyBiYXNlZCBvbiBvcmlnaW5hbC5cclxuICpcclxuICpcclxuICogIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IENyZWF0aXZlIENsb3VkIGV4dGVuc2lvbnMgZGV2ZWxvcG1lbnRcclxuICogIHBsZWFzZSByZWZlciB0byBvcmlnaW5hbCBHaXRodWIgcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL0Fkb2JlLUNFUC9DRVAtUmVzb3VyY2VzXHJcbiAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBjbGFzcyBDU0ludGVyZmFjZVxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCB0byB0aGUgQ0VQIGV4dGVuc2liaWxpdHkgaW5mcmFzdHJ1Y3R1cmUuXHJcbiAqIEluc3RhbnRpYXRlIHRoaXMgb2JqZWN0IGFuZCB1c2UgaXQgdG86XHJcbiAqIDx1bD5cclxuICogPGxpPkFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaG9zdCBhcHBsaWNhdGlvbiBpbiB3aGljaCBhbiBleHRlbnNpb24gaXMgcnVubmluZzwvbGk+XHJcbiAqIDxsaT5MYXVuY2ggYW4gZXh0ZW5zaW9uPC9saT5cclxuICogPGxpPlJlZ2lzdGVyIGludGVyZXN0IGluIGV2ZW50IG5vdGlmaWNhdGlvbnMsIGFuZCBkaXNwYXRjaCBldmVudHM8L2xpPlxyXG4gKiA8L3VsPlxyXG4gKlxyXG4gKi9cclxudmFyIENTSW50ZXJmYWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENTSW50ZXJmYWNlKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVzZXIgY2FuIGFkZCB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBuYXRpdmUgYXBwbGljYXRpb24gdGhlbWUgY29sb3IgY2hhbmdlcy5cclxuICAgICAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBnaXZlcyBleHRlbnNpb25zIGFiaWxpdHkgdG8gZmluZS10dW5lIHRoZWlyIHRoZW1lIGNvbG9yIGFmdGVyIHRoZVxyXG4gICAgICAgICAqIGdsb2JhbCB0aGVtZSBjb2xvciBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAgICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBzaG91bGQgYmUgbGlrZSBiZWxvdzpcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogLy8gZXZlbnQgaXMgYSBDU0V2ZW50IG9iamVjdCwgYnV0IHVzZXIgY2FuIGlnbm9yZSBpdC5cclxuICAgICAgICAgKiBmdW5jdGlvbiBPbkFwcFRoZW1lQ29sb3JDaGFuZ2VkKGV2ZW50KVxyXG4gICAgICAgICAqIHtcclxuICAgICAgICAgKiAgICAvLyBTaG91bGQgZ2V0IGEgbGF0ZXN0IEhvc3RFbnZpcm9ubWVudCBvYmplY3QgZnJvbSBhcHBsaWNhdGlvbi5cclxuICAgICAgICAgKiAgICB2YXIgc2tpbkluZm8gPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEhvc3RFbnZpcm9ubWVudCgpKS5hcHBTa2luSW5mbztcclxuICAgICAgICAgKiAgICAvLyBHZXRzIHRoZSBzdHlsZSBpbmZvcm1hdGlvbiBzdWNoIGFzIGNvbG9yIGluZm8gZnJvbSB0aGUgc2tpbkluZm8sXHJcbiAgICAgICAgICogICAgLy8gYW5kIHJlZHJhdyBhbGwgVUkgY29udHJvbHMgb2YgeW91ciBleHRlbnNpb24gYWNjb3JkaW5nIHRvIHRoZSBzdHlsZSBpbmZvLlxyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlRIRU1FX0NPTE9SX0NIQU5HRURfRVZFTlQgPSBcImNvbS5hZG9iZS5jc3hzLmV2ZW50cy5UaGVtZUNvbG9yQ2hhbmdlZFwiO1xyXG4gICAgICAgIC8qKiBUaGUgaG9zdCBlbnZpcm9ubWVudCBkYXRhIG9iamVjdC4gKi9cclxuICAgICAgICB0aGlzLmhvc3RFbnZpcm9ubWVudCA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0SG9zdEVudmlyb25tZW50KCkpO1xyXG4gICAgfVxyXG4gICAgLyoqIFJldHJpZXZlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaG9zdCBlbnZpcm9ubWVudCBpbiB3aGljaCB0aGVcclxuICAgICAqICBleHRlbnNpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcuXHJcbiAgICAgKlxyXG4gICAgICogICBAcmV0dXJuIEEgXFxjICNIb3N0RW52aXJvbm1lbnQgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0SG9zdEVudmlyb25tZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9zdEVudmlyb25tZW50ID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRIb3N0RW52aXJvbm1lbnQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdEVudmlyb25tZW50O1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKiBDbG9zZXMgdGhpcyBleHRlbnNpb24uICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuY2xvc2VFeHRlbnNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uY2xvc2VFeHRlbnNpb24oKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIHBhdGggZm9yIHdoaWNoIGEgY29uc3RhbnQgaXMgZGVmaW5lZCBpbiB0aGUgc3lzdGVtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXRoVHlwZSBUaGUgcGF0aC10eXBlIGNvbnN0YW50IGRlZmluZWQgaW4gXFxjICNTeXN0ZW1QYXRoICxcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBwbGF0Zm9ybS1zcGVjaWZpYyBzeXN0ZW0gcGF0aCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRTeXN0ZW1QYXRoID0gZnVuY3Rpb24gKHBhdGhUeXBlKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBkZWNvZGVVUkkod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0U3lzdGVtUGF0aChwYXRoVHlwZSkpO1xyXG4gICAgICAgIHZhciBPU1ZlcnNpb24gPSB0aGlzLmdldE9TSW5mb3JtYXRpb24oKTtcclxuICAgICAgICBpZiAoT1NWZXJzaW9uLmluZGV4T2YoXCJXaW5kb3dzXCIpID49IDApIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZShcImZpbGU6Ly8vXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChPU1ZlcnNpb24uaW5kZXhPZihcIk1hY1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoXCJmaWxlOi8vXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIEV2YWx1YXRlcyBhIEphdmFTY3JpcHQgc2NyaXB0LCB3aGljaCBjYW4gdXNlIHRoZSBKYXZhU2NyaXB0IERPTVxyXG4gICAgICogb2YgdGhlIGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNjcmlwdCAgICBUaGUgSmF2YVNjcmlwdCBzY3JpcHQuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgIE9wdGlvbmFsLiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIHJlc3VsdCBvZiBleGVjdXRpb24uXHJcbiAgICAgKiAgICAgICAgICBJZiBleGVjdXRpb24gZmFpbHMsIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZWNlaXZlcyB0aGUgZXJyb3IgbWVzc2FnZSBcXGMgRXZhbFNjcmlwdF9FcnJNZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZXZhbFNjcmlwdCA9IGZ1bmN0aW9uIChzY3JpcHQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSBudWxsIHx8IGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzdWx0KSB7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmV2YWxTY3JpcHQoc2NyaXB0LCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgICAqIGluIHdoaWNoIHRoZSBleHRlbnNpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBUaGUgdW5pcXVlIElEIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEFwcGxpY2F0aW9uSUQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFwcElkID0gdGhpcy5ob3N0RW52aXJvbm1lbnQuYXBwSWQ7XHJcbiAgICAgICAgcmV0dXJuIGFwcElkO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGhvc3QgY2FwYWJpbGl0eSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgKiBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGlzIGN1cnJlbnRseSBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQSBcXGMgI0hvc3RDYXBhYmlsaXRpZXMgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0SG9zdENhcGFiaWxpdGllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaG9zdENhcGFiaWxpdGllcyA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0SG9zdENhcGFiaWxpdGllcygpKTtcclxuICAgICAgICByZXR1cm4gaG9zdENhcGFiaWxpdGllcztcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJzIGEgQ0VQIGV2ZW50IHByb2dyYW1tYXRpY2FsbHkuIFlveSBjYW4gdXNlIGl0IHRvIGRpc3BhdGNoXHJcbiAgICAgKiBhbiBldmVudCBvZiBhIHByZWRlZmluZWQgdHlwZSwgb3Igb2YgYSB0eXBlIHlvdSBoYXZlIGRlZmluZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50IEEgXFxjIENTRXZlbnQgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGEgPSBKU09OLnN0cmluZ2lmeShldmVudC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYW4gaW50ZXJlc3QgaW4gYSBDRVAgZXZlbnQgb2YgYSBwYXJ0aWN1bGFyIHR5cGUsIGFuZFxyXG4gICAgICogYXNzaWducyBhbiBldmVudCBoYW5kbGVyLlxyXG4gICAgICogVGhlIGV2ZW50IGluZnJhc3RydWN0dXJlIG5vdGlmaWVzIHlvdXIgZXh0ZW5zaW9uIHdoZW4gZXZlbnRzIG9mIHRoaXMgdHlwZSBvY2N1cixcclxuICAgICAqIHBhc3NpbmcgdGhlIGV2ZW50IG9iamVjdCB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVyIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlICAgICBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdHlwZSBvZiBpbnRlcmVzdC5cclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgSmF2YVNjcmlwdCBoYW5kbGVyIGZ1bmN0aW9uIG9yIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSBvYmogICAgICBPcHRpb25hbCwgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBoYW5kbGVyIG1ldGhvZCwgaWYgYW55LlxyXG4gICAgICogICAgICAgICBEZWZhdWx0IGlzIG51bGwuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvYmopIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvYmopO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGUgICAgICBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdHlwZSBvZiBpbnRlcmVzdC5cclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciAgVGhlIEphdmFTY3JpcHQgaGFuZGxlciBmdW5jdGlvbiBvciBtZXRob2QgdGhhdCB3YXMgcmVnaXN0ZXJlZC5cclxuICAgICAqIEBwYXJhbSBvYmogICAgICAgT3B0aW9uYWwsIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgaGFuZGxlciBtZXRob2QsIGlmIGFueS5cclxuICAgICAqICAgICAgICAgIERlZmF1bHQgaXMgbnVsbC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9iaikge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9iaik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhbmQgbGF1bmNoZXMgYW5vdGhlciBleHRlbnNpb24sIG9yIGFjdGl2YXRlcyB0aGUgZXh0ZW5zaW9uIGlmIGl0IGlzIGFscmVhZHkgbG9hZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25JZCAgICAgICBUaGUgZXh0ZW5zaW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnR1cFBhcmFtcyAgICAgTm90IGN1cnJlbnRseSB1c2VkLCBwYXNzIFwiXCIuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIFRvIGxhdW5jaCB0aGUgZXh0ZW5zaW9uIFwiaGVscFwiIHdpdGggSUQgXCJITFBcIiBmcm9tIHRoaXMgZXh0ZW5zaW9uLCBjYWxsOlxyXG4gICAgICogPGNvZGU+cmVxdWVzdE9wZW5FeHRlbnNpb24oXCJITFBcIiwgXCJcIik7IDwvY29kZT5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5yZXF1ZXN0T3BlbkV4dGVuc2lvbiA9IGZ1bmN0aW9uIChleHRlbnNpb25JZCwgcGFyYW1zKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18ucmVxdWVzdE9wZW5FeHRlbnNpb24oZXh0ZW5zaW9uSWQsIHBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGxpc3Qgb2YgZXh0ZW5zaW9ucyBjdXJyZW50bHkgbG9hZGVkIGluIHRoZSBjdXJyZW50IGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICAgKiBUaGUgZXh0ZW5zaW9uIGxpc3QgaXMgaW5pdGlhbGl6ZWQgb25jZSwgYW5kIHJlbWFpbnMgdGhlIHNhbWUgZHVyaW5nIHRoZSBsaWZldGltZVxyXG4gICAgICogb2YgdGhlIENFUCBzZXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25JZHMgIE9wdGlvbmFsLCBhbiBhcnJheSBvZiB1bmlxdWUgaWRlbnRpZmllcnMgZm9yIGV4dGVuc2lvbnMgb2YgaW50ZXJlc3QuXHJcbiAgICAgKiAgICAgICAgICBJZiBvbWl0dGVkLCByZXRyaWV2ZXMgZGF0YSBmb3IgYWxsIGV4dGVuc2lvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBaZXJvIG9yIG1vcmUgXFxjICNFeHRlbnNpb24gb2JqZWN0cy5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uSWRzKSB7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbklkc1N0ciA9IEpTT04uc3RyaW5naWZ5KGV4dGVuc2lvbklkcyk7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbnNTdHIgPSB3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRFeHRlbnNpb25zKGV4dGVuc2lvbklkc1N0cik7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBKU09OLnBhcnNlKGV4dGVuc2lvbnNTdHIpO1xyXG4gICAgICAgIHJldHVybiBleHRlbnNpb25zO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIG5ldHdvcmstcmVsYXRlZCBwcmVmZXJlbmNlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEEgSmF2YVNjcmlwdCBvYmplY3QgY29udGFpbmluZyBuZXR3b3JrIHByZWZlcmVuY2VzLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0TmV0d29ya1ByZWZlcmVuY2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXROZXR3b3JrUHJlZmVyZW5jZXMoKTtcclxuICAgICAgICB2YXIgbmV0d29ya1ByZSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gbmV0d29ya1ByZTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSByZXNvdXJjZSBidW5kbGUgZm9yIHRoaXMgZXh0ZW5zaW9uIHdpdGggcHJvcGVydHkgdmFsdWVzXHJcbiAgICAgKiBmb3IgdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gYW5kIGxvY2FsZS5cclxuICAgICAqIFRvIHN1cHBvcnQgbXVsdGlwbGUgbG9jYWxlcywgeW91IG11c3QgZGVmaW5lIGEgcHJvcGVydHkgZmlsZSBmb3IgZWFjaCBsb2NhbGUsXHJcbiAgICAgKiBjb250YWluaW5nIGtleWVkIGRpc3BsYXktc3RyaW5nIHZhbHVlcyBmb3IgdGhhdCBsb2NhbGUuXHJcbiAgICAgKiBTZWUgbG9jYWxpemF0aW9uIGRvY3VtZW50YXRpb24gZm9yIEV4dGVuc2lvbiBCdWlsZGVyIGFuZCByZWxhdGVkIHByb2R1Y3RzLlxyXG4gICAgICpcclxuICAgICAqIEtleXMgY2FuIGJlIGluIHRoZVxyXG4gICAgICogZm9ybSA8Y29kZT5rZXkudmFsdWU9XCJsb2NhbGl6ZWQgc3RyaW5nXCI8L2NvZGU+LCBmb3IgdXNlIGluIEhUTUwgdGV4dCBlbGVtZW50cy5cclxuICAgICAqIEZvciBleGFtcGxlLCBpbiB0aGlzIGlucHV0IGVsZW1lbnQsIHRoZSBsb2NhbGl6ZWQgXFxjIGtleS52YWx1ZSBzdHJpbmcgaXMgZGlzcGxheWVkXHJcbiAgICAgKiBpbnN0ZWFkIG9mIHRoZSBlbXB0eSBcXGMgdmFsdWUgc3RyaW5nOlxyXG4gICAgICpcclxuICAgICAqIDxjb2RlPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJcIiBkYXRhLWxvY2FsZT1cImtleVwiLz48L2NvZGU+XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb3VyY2UgYnVuZGxlIGluZm9ybWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuaW5pdFJlc291cmNlQnVuZGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXNvdXJjZUJ1bmRsZSA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uaW5pdFJlc291cmNlQnVuZGxlKCkpO1xyXG4gICAgICAgIHZhciByZXNFbG1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9jYWxlXScpO1xyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcmVzRWxtcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICB2YXIgcmVzRWwgPSByZXNFbG1zW25dO1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHJlc291cmNlIGtleSBmcm9tIHRoZSBlbGVtZW50LlxyXG4gICAgICAgICAgICB2YXIgcmVzS2V5ID0gcmVzRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpO1xyXG4gICAgICAgICAgICBpZiAocmVzS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWxsIHRoZSByZXNvdXJjZXMgdGhhdCBzdGFydCB3aXRoIHRoZSBrZXkuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmVzb3VyY2VCdW5kbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YocmVzS2V5KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzVmFsdWUgPSByZXNvdXJjZUJ1bmRsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA9PSByZXNLZXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNFbC5pbm5lckhUTUwgPSByZXNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgnLicgPT0ga2V5LmNoYXJBdChyZXNLZXkubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJLZXkgPSBrZXkuc3Vic3RyaW5nKHJlc0tleS5sZW5ndGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0VsW2F0dHJLZXldID0gcmVzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlQnVuZGxlO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogV3JpdGVzIGluc3RhbGxhdGlvbiBpbmZvcm1hdGlvbiB0byBhIGZpbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBUaGUgZmlsZSBwYXRoLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZHVtcEluc3RhbGxhdGlvbkluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmR1bXBJbnN0YWxsYXRpb25JbmZvKCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdmVyc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1cnJlbnQgT3BlcmF0aW5nIFN5c3RlbSxcclxuICAgICAqIFNlZSBodHRwOi8vd3d3LnVzZXJhZ2VudHN0cmluZy5jb20vcGFnZXMvQ2hyb21lLyBmb3IgQ2hyb21lIFxcYyBuYXZpZ2F0b3IudXNlckFnZW50IHZhbHVlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIE9TIHZlcnNpb24sIG9yIFwidW5rbm93biBPcGVyYXRpb24gU3lzdGVtXCIuXHJcbiAgICAgKiBJZiB1c2VyIGN1c3RvbWl6ZXMgdGhlIFVzZXIgQWdlbnQgYnkgc2V0dGluZyBDRUYgY29tbWFuZCBwYXJhbWV0ZXIgXCItLXVzZXItYWdlbnRcIiwgb25seVxyXG4gICAgICogXCJNYWMgT1MgWFwiIG9yIFwiV2luZG93c1wiIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRPU0luZm9ybWF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgIGlmICgobmF2aWdhdG9yLnBsYXRmb3JtID09IFwiV2luMzJcIikgfHwgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PSBcIldpbmRvd3NcIikpIHtcclxuICAgICAgICAgICAgdmFyIHdpblZlcnNpb24gPSBcIldpbmRvd3NcIjtcclxuICAgICAgICAgICAgdmFyIHdpbkJpdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3NcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA1LjBcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgMjAwMFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDUuMVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyBYUFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDUuMlwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyBTZXJ2ZXIgMjAwM1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDYuMFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyBWaXN0YVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDYuMVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyA3XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNi4yXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIDhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA2LjNcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgOC4xXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgMTBcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgMTBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldPVzY0XCIpID4gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoXCJXaW42NFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luQml0ID0gXCIgNjQtYml0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5CaXQgPSBcIiAzMi1iaXRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gd2luVmVyc2lvbiArIHdpbkJpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG5hdmlnYXRvci5wbGF0Zm9ybSA9PSBcIk1hY0ludGVsXCIpIHx8IChuYXZpZ2F0b3IucGxhdGZvcm0gPT0gXCJNYWNpbnRvc2hcIikpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiTWFjIE9TIFhcIjtcclxuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiTWFjIE9TIFhcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdXNlckFnZW50LnN1YnN0cmluZyh1c2VyQWdlbnQuaW5kZXhPZihcIk1hYyBPUyBYXCIpLCB1c2VyQWdlbnQuaW5kZXhPZihcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL18vZywgXCIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlVua25vd24gT3BlcmF0aW9uIFN5c3RlbVwiO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBwYWdlIGluIHRoZSBkZWZhdWx0IHN5c3RlbSBicm93c2VyLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCAgVGhlIFVSTCBvZiB0aGUgcGFnZS9maWxlIHRvIG9wZW4sIG9yIHRoZSBlbWFpbCBhZGRyZXNzLlxyXG4gICAgICogTXVzdCB1c2UgSFRUUC9IVFRQUy9maWxlL21haWx0byBwcm90b2NvbC4gRm9yIGV4YW1wbGU6XHJcbiAgICAgKiAgIFwiaHR0cDovL3d3dy5hZG9iZS5jb21cIlxyXG4gICAgICogICBcImh0dHBzOi8vZ2l0aHViLmNvbVwiXHJcbiAgICAgKiAgIFwiZmlsZTovLy9DOi9sb2cudHh0XCJcclxuICAgICAqICAgXCJtYWlsdG86dGVzdEBhZG9iZS5jb21cIlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gT25lIG9mIHRoZXNlIGVycm9yIGNvZGVzOlxcblxyXG4gICAgICogICAgICA8dWw+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+Tk9fRVJST1IgLSAwPC9saT5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT5FUlJfVU5LTk9XTiAtIDE8L2xpPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPkVSUl9JTlZBTElEX1BBUkFNUyAtIDI8L2xpPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPkVSUl9JTlZBTElEX1VSTCAtIDIwMTwvbGk+XFxuXHJcbiAgICAgKiAgICAgIDwvdWw+XFxuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5vcGVuVVJMSW5EZWZhdWx0QnJvd3NlciA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gY2VwLnV0aWwub3BlblVSTEluRGVmYXVsdEJyb3dzZXIodXJsKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBleHRlbnNpb24gSUQuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIGV4dGVuc2lvbiBJRC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEV4dGVuc2lvbklEID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRFeHRlbnNpb25JZCgpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSBzY2FsZSBmYWN0b3Igb2Ygc2NyZWVuLlxyXG4gICAgICogT24gV2luZG93cyBwbGF0Zm9ybSwgdGhlIHZhbHVlIG9mIHNjYWxlIGZhY3RvciBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbSBvcGVyYXRpbmcgc3lzdGVtJ3Mgc2NhbGUgZmFjdG9yLFxyXG4gICAgICogc2luY2UgaG9zdCBhcHBsaWNhdGlvbiBtYXkgdXNlIGl0cyBzZWxmLWRlZmluZWQgc2NhbGUgZmFjdG9yLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBPbmUgb2YgdGhlIGZvbGxvd2luZyBmbG9hdCBudW1iZXIuXHJcbiAgICAgKiAgICAgIDx1bD5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT4gLTEuMCB3aGVuIGVycm9yIG9jY3VycyA8L2xpPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPiAxLjAgbWVhbnMgbm9ybWFsIHNjcmVlbiA8L2xpPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPiA+MS4wIG1lYW5zIEhpRFBJIHNjcmVlbiA8L2xpPlxcblxyXG4gICAgICogICAgICA8L3VsPlxcblxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0U2NhbGVGYWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldFNjYWxlRmFjdG9yKCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBoYW5kbGVyIHRvIGRldGVjdCBhbnkgY2hhbmdlcyBvZiBzY2FsZSBmYWN0b3IuIFRoaXMgb25seSB3b3JrcyBvbiBNYWMuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciAgIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBzY2FsZSBmYWN0b3IgaXMgY2hhbmdlZC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRTY2FsZUZhY3RvckNoYW5nZWRIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5zZXRTY2FsZUZhY3RvckNoYW5nZWRIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGN1cnJlbnQgQVBJIHZlcnNpb24uXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEFwaVZlcnNpb24gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEN1cnJlbnRBcGlWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcGlWZXJzaW9uID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRDdXJyZW50QXBpVmVyc2lvbigpKTtcclxuICAgICAgICByZXR1cm4gYXBpVmVyc2lvbjtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBwYW5lbCBmbHlvdXQgbWVudSBieSBhbiBYTUwuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBcImNvbS5hZG9iZS5jc3hzLmV2ZW50cy5mbHlvdXRNZW51Q2xpY2tlZFwiIHRvIGdldCBub3RpZmllZCB3aGVuIGFcclxuICAgICAqIG1lbnUgaXRlbSBpcyBjbGlja2VkLlxyXG4gICAgICogVGhlIFwiZGF0YVwiIGF0dHJpYnV0ZSBvZiBldmVudCBpcyBhbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgXCJtZW51SWRcIiBhbmQgXCJtZW51TmFtZVwiIGF0dHJpYnV0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZnVuY3Rpb25zIGZvciBcImNvbS5hZG9iZS5jc3hzLmV2ZW50cy5mbHlvdXRNZW51T3BlbmVkXCIgYW5kIFwiY29tLmFkb2JlLmNzeHMuZXZlbnRzLmZseW91dE1lbnVDbG9zZWRcIlxyXG4gICAgICogcmVzcGVjdGl2ZWx5IHRvIGdldCBub3RpZmllZCB3aGVuIGZseW91dCBtZW51IGlzIG9wZW5lZCBvciBjbG9zZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnUgICAgIEEgWE1MIHN0cmluZyB3aGljaCBkZXNjcmliZXMgbWVudSBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBBbiBleGFtcGxlIG1lbnUgWE1MOlxyXG4gICAgICogPE1lbnU+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQxXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTFcIiBFbmFibGVkPVwidHJ1ZVwiIENoZWNrZWQ9XCJmYWxzZVwiLz5cclxuICAgICAqICAgPE1lbnVJdGVtIExhYmVsPVwiVGVzdEV4YW1wbGUyXCI+XHJcbiAgICAgKiAgICAgPE1lbnVJdGVtIExhYmVsPVwiVGVzdEV4YW1wbGUyLTFcIiA+XHJcbiAgICAgKiAgICAgICA8TWVudUl0ZW0gTGFiZWw9XCJUZXN0RXhhbXBsZTItMS0xXCIgRW5hYmxlZD1cImZhbHNlXCIgQ2hlY2tlZD1cInRydWVcIi8+XHJcbiAgICAgKiAgICAgPC9NZW51SXRlbT5cclxuICAgICAqICAgICA8TWVudUl0ZW0gTGFiZWw9XCJUZXN0RXhhbXBsZTItMlwiIEVuYWJsZWQ9XCJ0cnVlXCIgQ2hlY2tlZD1cInRydWVcIi8+XHJcbiAgICAgKiAgIDwvTWVudUl0ZW0+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBMYWJlbD1cIi0tLVwiIC8+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBMYWJlbD1cIlRlc3RFeGFtcGxlM1wiIEVuYWJsZWQ9XCJmYWxzZVwiIENoZWNrZWQ9XCJmYWxzZVwiLz5cclxuICAgICAqIDwvTWVudT5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRQYW5lbEZseW91dE1lbnUgPSBmdW5jdGlvbiAobWVudSkge1xyXG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBtZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcInNldFBhbmVsRmx5b3V0TWVudVwiLCBtZW51KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBtZW51IGl0ZW0gaW4gdGhlIGV4dGVuc2lvbiB3aW5kb3cncyBmbHlvdXQgbWVudSwgYnkgc2V0dGluZyB0aGUgZW5hYmxlZFxyXG4gICAgICogYW5kIHNlbGVjdGlvbiBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudUl0ZW1MYWJlbCAgICBUaGUgbWVudSBpdGVtIGxhYmVsLlxyXG4gICAgICogQHBhcmFtIGVuYWJsZWQgICAgICAgIFRydWUgdG8gZW5hYmxlIHRoZSBpdGVtLCBmYWxzZSB0byBkaXNhYmxlIGl0IChncmF5IGl0IG91dCkuXHJcbiAgICAgKiBAcGFyYW0gY2hlY2tlZCAgICAgICAgVHJ1ZSB0byBzZWxlY3QgdGhlIGl0ZW0sIGZhbHNlIHRvIGRlc2VsZWN0IGl0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gZmFsc2Ugd2hlbiB0aGUgaG9zdCBhcHBsaWNhdGlvbiBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgZnVuY3Rpb25hbGl0eSAoSG9zdENhcGFiaWxpdGllcy5FWFRFTkRFRF9QQU5FTF9NRU5VIGlzIGZhbHNlKS5cclxuICAgICAqICAgICAgICAgRmFpbHMgc2lsZW50bHkgaWYgbWVudSBsYWJlbCBpcyBpbnZhbGlkLlxyXG4gICAgICpcclxuICAgICAqIEBzZWUgSG9zdENhcGFiaWxpdGllcy5FWFRFTkRFRF9QQU5FTF9NRU5VXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS51cGRhdGVQYW5lbE1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVJdGVtTGFiZWwsIGVuYWJsZWQsIGNoZWNrZWQpIHtcclxuICAgICAgICB2YXIgcmV0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0SG9zdENhcGFiaWxpdGllcygpLkVYVEVOREVEX1BBTkVMX01FTlUpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1TdGF0dXMgPSBuZXcgTWVudUl0ZW1TdGF0dXMobWVudUl0ZW1MYWJlbCwgZW5hYmxlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHJldCA9IHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJ1cGRhdGVQYW5lbE1lbnVJdGVtXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1TdGF0dXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBjb250ZXh0IG1lbnUgYnkgWE1MIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIFRoZXJlIGFyZSBhIG51bWJlciBvZiBjb252ZW50aW9ucyB1c2VkIHRvIGNvbW11bmljYXRlIHdoYXQgdHlwZSBvZiBtZW51IGl0ZW0gdG8gY3JlYXRlIGFuZCBob3cgaXQgc2hvdWxkIGJlIGhhbmRsZWQuXHJcbiAgICAgKiAtIGFuIGl0ZW0gd2l0aG91dCBtZW51IElEIG9yIG1lbnUgbmFtZSBpcyBkaXNhYmxlZCBhbmQgaXMgbm90IHNob3duLlxyXG4gICAgICogLSBpZiB0aGUgaXRlbSBuYW1lIGlzIFwiLS0tXCIgKHRocmVlIGh5cGhlbnMpIHRoZW4gaXQgaXMgdHJlYXRlZCBhcyBhIHNlcGFyYXRvci4gVGhlIG1lbnUgSUQgaW4gdGhpcyBjYXNlIHdpbGwgYWx3YXlzIGJlIE5VTEwuXHJcbiAgICAgKiAtIENoZWNrYWJsZSBhdHRyaWJ1dGUgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIENoZWNrZWQgYXR0cmlidXRlLlxyXG4gICAgICogLSBhIFBORyBpY29uLiBGb3Igb3B0aW1hbCBkaXNwbGF5IHJlc3VsdHMgcGxlYXNlIHN1cHBseSBhIDE2IHggMTZweCBpY29uIGFzIGxhcmdlciBkaW1lbnNpb25zIHdpbGwgaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIG1lbnUgaXRlbS5cclxuICAgICBUaGUgQ2hyb21lIGV4dGVuc2lvbiBjb250ZXh0TWVudXMgQVBJIHdhcyB0YWtlbiBhcyBhIHJlZmVyZW5jZS5cclxuICAgICBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvY29udGV4dE1lbnVzXHJcbiAgICAgKiAtIHRoZSBpdGVtcyB3aXRoIGljb25zIGFuZCBjaGVja2FibGUgaXRlbXMgY2Fubm90IGNvZXhpc3Qgb24gdGhlIHNhbWUgbWVudSBsZXZlbC4gVGhlIGZvcm1lciB0YWtlIHByZWNlZGVuY2VzIG92ZXIgdGhlIGxhdHRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudSAgICAgIEEgWE1MIHN0cmluZyB3aGljaCBkZXNjcmliZXMgbWVudSBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBjbGlja2VkLiBUaGUgb25seSBwYXJhbWV0ZXIgaXMgdGhlIHJldHVybmVkIElEIG9mIGNsaWNrZWQgbWVudSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBbiBleGFtcGxlIG1lbnUgWE1MOlxyXG4gICAgICogPE1lbnU+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQxXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTFcIiBFbmFibGVkPVwidHJ1ZVwiIENoZWNrYWJsZT1cInRydWVcIiBDaGVja2VkPVwiZmFsc2VcIiBJY29uPVwiLi9pbWFnZS9zbWFsbF8xNlgxNi5wbmdcIi8+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQyXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTJcIj5cclxuICAgICAqICAgICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMi0xXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTItMVwiID5cclxuICAgICAqICAgICAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQyLTEtMVwiIExhYmVsPVwiVGVzdEV4YW1wbGUyLTEtMVwiIEVuYWJsZWQ9XCJmYWxzZVwiIENoZWNrYWJsZT1cInRydWVcIiBDaGVja2VkPVwidHJ1ZVwiLz5cclxuICAgICAqICAgICA8L01lbnVJdGVtPlxyXG4gICAgICogICAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQyLTJcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMi0yXCIgRW5hYmxlZD1cInRydWVcIiBDaGVja2FibGU9XCJ0cnVlXCIgQ2hlY2tlZD1cInRydWVcIi8+XHJcbiAgICAgKiAgIDwvTWVudUl0ZW0+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBMYWJlbD1cIi0tLVwiIC8+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBJZD1cIm1lbnVJdGVtSWQzXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTNcIiBFbmFibGVkPVwiZmFsc2VcIiBDaGVja2FibGU9XCJ0cnVlXCIgQ2hlY2tlZD1cImZhbHNlXCIvPlxyXG4gICAgICogPC9NZW51PlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuc2V0Q29udGV4dE1lbnUgPSBmdW5jdGlvbiAobWVudSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZUFzeW5jKFwic2V0Q29udGV4dE1lbnVcIiwgbWVudSwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNvbnRleHQgbWVudSBieSBKU09OIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjAuMFxyXG4gICAgICpcclxuICAgICAqIFRoZXJlIGFyZSBhIG51bWJlciBvZiBjb252ZW50aW9ucyB1c2VkIHRvIGNvbW11bmljYXRlIHdoYXQgdHlwZSBvZiBtZW51IGl0ZW0gdG8gY3JlYXRlIGFuZCBob3cgaXQgc2hvdWxkIGJlIGhhbmRsZWQuXHJcbiAgICAgKiAtIGFuIGl0ZW0gd2l0aG91dCBtZW51IElEIG9yIG1lbnUgbmFtZSBpcyBkaXNhYmxlZCBhbmQgaXMgbm90IHNob3duLlxyXG4gICAgICogLSBpZiB0aGUgaXRlbSBsYWJlbCBpcyBcIi0tLVwiICh0aHJlZSBoeXBoZW5zKSB0aGVuIGl0IGlzIHRyZWF0ZWQgYXMgYSBzZXBhcmF0b3IuIFRoZSBtZW51IElEIGluIHRoaXMgY2FzZSB3aWxsIGFsd2F5cyBiZSBOVUxMLlxyXG4gICAgICogLSBDaGVja2FibGUgYXR0cmlidXRlIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBDaGVja2VkIGF0dHJpYnV0ZS5cclxuICAgICAqIC0gYSBQTkcgaWNvbi4gRm9yIG9wdGltYWwgZGlzcGxheSByZXN1bHRzIHBsZWFzZSBzdXBwbHkgYSAxNiB4IDE2cHggaWNvbiBhcyBsYXJnZXIgZGltZW5zaW9ucyB3aWxsIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgVGhlIENocm9tZSBleHRlbnNpb24gY29udGV4dE1lbnVzIEFQSSB3YXMgdGFrZW4gYXMgYSByZWZlcmVuY2UuXHJcbiAgICAgKiAtIHRoZSBpdGVtcyB3aXRoIGljb25zIGFuZCBjaGVja2FibGUgaXRlbXMgY2Fubm90IGNvZXhpc3Qgb24gdGhlIHNhbWUgbWVudSBsZXZlbC4gVGhlIGZvcm1lciB0YWtlIHByZWNlZGVuY2VzIG92ZXIgdGhlIGxhdHRlci5cclxuICAgICBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvY29udGV4dE1lbnVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnUgICAgICBBIEpTT04gc3RyaW5nIHdoaWNoIGRlc2NyaWJlcyBtZW51IHN0cnVjdHVyZS5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGEgbWVudSBpdGVtIGlzIGNsaWNrZWQuIFRoZSBvbmx5IHBhcmFtZXRlciBpcyB0aGUgcmV0dXJuZWQgSUQgb2YgY2xpY2tlZCBtZW51IGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFuIGV4YW1wbGUgbWVudSBKU09OOlxyXG4gICAgICpcclxuICAgICAqIHtcclxuICAgICAqICAgICAgXCJtZW51XCI6IFtcclxuICAgICAqICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDFcIixcclxuICAgICAqICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUxXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJjaGVja2FibGVcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICBcImNoZWNrZWRcIjogZmFsc2UsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJpY29uXCI6IFwiLi9pbWFnZS9zbWFsbF8xNlgxNi5wbmdcIlxyXG4gICAgICogICAgICAgICAgfSxcclxuICAgICAqICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDJcIixcclxuICAgICAqICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUyXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJtZW51XCI6IFtcclxuICAgICAqICAgICAgICAgICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQyLTFcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTItMVwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJtZW51XCI6IFtcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkMi0xLTFcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlMi0xLTFcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IGZhbHNlLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrYWJsZVwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogdHJ1ZVxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAqICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAqICAgICAgICAgICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQyLTJcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTItMlwiLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrYWJsZVwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IHRydWVcclxuICAgICAqICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICogICAgICAgICAgICAgIF1cclxuICAgICAqICAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIi0tLVwiXHJcbiAgICAgKiAgICAgICAgICB9LFxyXG4gICAgICogICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkM1wiLFxyXG4gICAgICogICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTNcIixcclxuICAgICAqICAgICAgICAgICAgICBcImVuYWJsZWRcIjogZmFsc2UsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJjaGVja2FibGVcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICBcImNoZWNrZWRcIjogZmFsc2VcclxuICAgICAqICAgICAgICAgIH1cclxuICAgICAqICAgICAgXVxyXG4gICAgICogIH1cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRDb250ZXh0TWVudUJ5SlNPTiA9IGZ1bmN0aW9uIChtZW51LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBtZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlQXN5bmMoXCJzZXRDb250ZXh0TWVudUJ5SlNPTlwiLCBtZW51LCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGEgY29udGV4dCBtZW51IGl0ZW0gYnkgc2V0dGluZyB0aGUgZW5hYmxlZCBhbmQgc2VsZWN0aW9uIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51SXRlbUlEICAgIFRoZSBtZW51IGl0ZW0gSUQuXHJcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAgICAgICAgVHJ1ZSB0byBlbmFibGUgdGhlIGl0ZW0sIGZhbHNlIHRvIGRpc2FibGUgaXQgKGdyYXkgaXQgb3V0KS5cclxuICAgICAqIEBwYXJhbSBjaGVja2VkICAgICAgICBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSwgZmFsc2UgdG8gZGVzZWxlY3QgaXQuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS51cGRhdGVDb250ZXh0TWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW1JRCwgZW5hYmxlZCwgY2hlY2tlZCkge1xyXG4gICAgICAgIHZhciBpdGVtU3RhdHVzID0gbmV3IENvbnRleHRNZW51SXRlbVN0YXR1cyhtZW51SXRlbUlELCBlbmFibGVkLCBjaGVja2VkKTtcclxuICAgICAgICByZXQgPSB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwidXBkYXRlQ29udGV4dE1lbnVJdGVtXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1TdGF0dXMpKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmlzaWJpbGl0eSBzdGF0dXMgb2YgYW4gZXh0ZW5zaW9uIHdpbmRvdy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjAuMFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgZXh0ZW5zaW9uIHdpbmRvdyBpcyB2aXNpYmxlOyBmYWxzZSBpZiB0aGUgZXh0ZW5zaW9uIHdpbmRvdyBpcyBoaWRkZW4uXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5pc1dpbmRvd1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJpc1dpbmRvd1Zpc2libGVcIiwgXCJcIik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemUgZXh0ZW5zaW9uJ3MgY29udGVudCB0byB0aGUgc3BlY2lmaWVkIGRpbWVuc2lvbnMuXHJcbiAgICAgKiAxLiBXb3JrcyB3aXRoIG1vZGFsIGFuZCBtb2RlbGVzcyBleHRlbnNpb25zIGluIGFsbCBBZG9iZSBwcm9kdWN0cy5cclxuICAgICAqIDIuIEV4dGVuc2lvbidzIG1hbmlmZXN0IG1pbi9tYXggc2l6ZSBjb25zdHJhaW50cyBhcHBseSBhbmQgdGFrZSBwcmVjZWRlbmNlLlxyXG4gICAgICogMy4gRm9yIHBhbmVsIGV4dGVuc2lvbnNcclxuICAgICAqICAgIDMuMSBUaGlzIHdvcmtzIGluIGFsbCBBZG9iZSBwcm9kdWN0cyBleGNlcHQ6XHJcbiAgICAgKiAgICAgICAgKiBQcmVtaWVyZSBQcm9cclxuICAgICAqICAgICAgICAqIFByZWx1ZGVcclxuICAgICAqICAgICAgICAqIEFmdGVyIEVmZmVjdHNcclxuICAgICAqICAgIDMuMiBXaGVuIHRoZSBwYW5lbCBpcyBpbiBjZXJ0YWluIHN0YXRlcyAoZXNwZWNpYWxseSB3aGVuIGJlaW5nIGRvY2tlZCksXHJcbiAgICAgKiAgICAgICAgaXQgd2lsbCBub3QgY2hhbmdlIHRvIHRoZSBkZXNpcmVkIGRpbWVuc2lvbnMgZXZlbiB3aGVuIHRoZVxyXG4gICAgICogICAgICAgIHNwZWNpZmllZCBzaXplIHNhdGlzZmllcyBtaW4vbWF4IGNvbnN0cmFpbnRzLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMC4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHdpZHRoICBUaGUgbmV3IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBuZXcgaGVpZ2h0XHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5yZXNpemVDb250ZW50ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5yZXNpemVDb250ZW50KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgdGhlIGludmFsaWQgY2VydGlmaWNhdGUgY2FsbGJhY2sgZm9yIGFuIGV4dGVuc2lvbi5cclxuICAgICAqIFRoaXMgY2FsbGJhY2sgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgZXh0ZW5zaW9uIHRyaWVzIHRvIGFjY2VzcyB0aGUgd2ViIHNpdGUgdGhhdCBjb250YWlucyB0aGUgaW52YWxpZCBjZXJ0aWZpY2F0ZSBvbiB0aGUgbWFpbiBmcmFtZS5cclxuICAgICAqIEJ1dCBpZiB0aGUgZXh0ZW5zaW9uIGRvZXMgbm90IGNhbGwgdGhpcyBmdW5jdGlvbiBhbmQgdHJpZXMgdG8gYWNjZXNzIHRoZSB3ZWIgc2l0ZSBjb250YWluaW5nIHRoZSBpbnZhbGlkIGNlcnRpZmljYXRlLCBhIGRlZmF1bHQgZXJyb3IgcGFnZSB3aWxsIGJlIHNob3duLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMS4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUucmVnaXN0ZXJJbnZhbGlkQ2VydGlmaWNhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5yZWdpc3RlckludmFsaWRDZXJ0aWZpY2F0ZUNhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIGludGVyZXN0IGluIHNvbWUga2V5IGV2ZW50cyB0byBwcmV2ZW50IHRoZW0gZnJvbSBiZWluZyBzZW50IHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd29ya3Mgd2l0aCBtb2RlbGVzcyBleHRlbnNpb25zIGFuZCBwYW5lbCBleHRlbnNpb25zLlxyXG4gICAgICogR2VuZXJhbGx5IGFsbCB0aGUga2V5IGV2ZW50cyB3aWxsIGJlIHNlbnQgdG8gdGhlIGhvc3QgYXBwbGljYXRpb24gZm9yIHRoZXNlIHR3byBleHRlbnNpb25zIGlmIHRoZSBjdXJyZW50IGZvY3VzZWQgZWxlbWVudFxyXG4gICAgICogaXMgbm90IHRleHQgaW5wdXQgb3IgZHJvcGRvd24sXHJcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBpbnRlcmNlcHQgc29tZSBrZXkgZXZlbnRzIGFuZCB3YW50IHRoZW0gdG8gYmUgaGFuZGxlZCBpbiB0aGUgZXh0ZW5zaW9uLCBwbGVhc2UgY2FsbCB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgKiBpbiBhZHZhbmNlIHRvIHByZXZlbnQgdGhlbSBiZWluZyBzZW50IHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMS4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleUV2ZW50c0ludGVyZXN0ICAgICAgQSBKU09OIHN0cmluZyBkZXNjcmliaW5nIHRob3NlIGtleSBldmVudHMgeW91IGFyZSBpbnRlcmVzdGVkIGluLiBBIG51bGwgb2JqZWN0IG9yXHJcbiAgICAgYW4gZW1wdHkgc3RyaW5nIHdpbGwgbGVhZCB0byByZW1vdmluZyB0aGUgaW50ZXJlc3RcclxuICAgICAqXHJcbiAgICAgKiBUaGlzIEpTT04gc3RyaW5nIHNob3VsZCBiZSBhbiBhcnJheSwgZWFjaCBvYmplY3QgaGFzIGZvbGxvd2luZyBrZXlzOlxyXG4gICAgICpcclxuICAgICAqIGtleUNvZGU6ICBbUmVxdWlyZWRdIHJlcHJlc2VudHMgYW4gT1Mgc3lzdGVtIGRlcGVuZGVudCB2aXJ0dWFsIGtleSBjb2RlIGlkZW50aWZ5aW5nXHJcbiAgICAgKiAgICAgICAgICAgdGhlIHVubW9kaWZpZWQgdmFsdWUgb2YgdGhlIHByZXNzZWQga2V5LlxyXG4gICAgICogY3RybEtleTogIFtvcHRpb25hbF0gYSBCb29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBjb250cm9sIGtleSB3YXMgcHJlc3NlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSkgd2hlbiB0aGUgZXZlbnQgb2NjdXJyZWQuXHJcbiAgICAgKiBhbHRLZXk6ICAgW29wdGlvbmFsXSBhIEJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGFsdCBrZXkgd2FzIHByZXNzZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpIHdoZW4gdGhlIGV2ZW50IG9jY3VycmVkLlxyXG4gICAgICogc2hpZnRLZXk6IFtvcHRpb25hbF0gYSBCb29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBzaGlmdCBrZXkgd2FzIHByZXNzZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpIHdoZW4gdGhlIGV2ZW50IG9jY3VycmVkLlxyXG4gICAgICogbWV0YUtleTogIFtvcHRpb25hbF0gKE1hYyBPbmx5KSBhIEJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIE1ldGEga2V5IHdhcyBwcmVzc2VkICh0cnVlKSBvciBub3QgKGZhbHNlKSB3aGVuIHRoZSBldmVudCBvY2N1cnJlZC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIE9uIE1hY2ludG9zaCBrZXlib2FyZHMsIHRoaXMgaXMgdGhlIGNvbW1hbmQga2V5LiBUbyBkZXRlY3QgV2luZG93cyBrZXkgb24gV2luZG93cywgcGxlYXNlIHVzZSBrZXlDb2RlIGluc3RlYWQuXHJcbiAgICAgKiBBbiBleGFtcGxlIEpTT04gc3RyaW5nOlxyXG4gICAgICpcclxuICAgICAqIFtcclxuICAgICAqICAgICB7XHJcbiAgICAgKiAgICAgICAgIFwia2V5Q29kZVwiOiA0OFxyXG4gICAgICogICAgIH0sXHJcbiAgICAgKiAgICAge1xyXG4gICAgICogICAgICAgICBcImtleUNvZGVcIjogMTIzLFxyXG4gICAgICogICAgICAgICBcImN0cmxLZXlcIjogdHJ1ZVxyXG4gICAgICogICAgIH0sXHJcbiAgICAgKiAgICAge1xyXG4gICAgICogICAgICAgICBcImtleUNvZGVcIjogMTIzLFxyXG4gICAgICogICAgICAgICBcImN0cmxLZXlcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgXCJtZXRhS2V5XCI6IHRydWVcclxuICAgICAqICAgICB9XHJcbiAgICAgKiBdXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUucmVnaXN0ZXJLZXlFdmVudHNJbnRlcmVzdCA9IGZ1bmN0aW9uIChrZXlFdmVudHNJbnRlcmVzdCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5yZWdpc3RlcktleUV2ZW50c0ludGVyZXN0KGtleUV2ZW50c0ludGVyZXN0KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdGl0bGUgb2YgdGhlIGV4dGVuc2lvbiB3aW5kb3cuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdvcmtzIHdpdGggbW9kYWwgYW5kIG1vZGVsZXNzIGV4dGVuc2lvbnMgaW4gYWxsIEFkb2JlIHByb2R1Y3RzLCBhbmQgcGFuZWwgZXh0ZW5zaW9ucyBpbiBQaG90b3Nob3AsIEluRGVzaWduLCBJbkNvcHksIElsbHVzdHJhdG9yLCBGbGFzaCBQcm8gYW5kIERyZWFtd2VhdmVyLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDYuMS4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRpdGxlIFRoZSB3aW5kb3cgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRXaW5kb3dUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJzZXRXaW5kb3dUaXRsZVwiLCB0aXRsZSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRpdGxlIG9mIHRoZSBleHRlbnNpb24gd2luZG93LlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3b3JrcyB3aXRoIG1vZGFsIGFuZCBtb2RlbGVzcyBleHRlbnNpb25zIGluIGFsbCBBZG9iZSBwcm9kdWN0cywgYW5kIHBhbmVsIGV4dGVuc2lvbnMgaW4gUGhvdG9zaG9wLCBJbkRlc2lnbiwgSW5Db3B5LCBJbGx1c3RyYXRvciwgRmxhc2ggUHJvIGFuZCBEcmVhbXdlYXZlci5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjEuMFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gVGhlIHdpbmRvdyB0aXRsZS5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldFdpbmRvd1RpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwiZ2V0V2luZG93VGl0bGVcIiwgXCJcIik7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIENTSW50ZXJmYWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNTSW50ZXJmYWNlID0gQ1NJbnRlcmZhY2U7XHJcbi8qKlxyXG4gKiBDbGFzcyBDU0V2ZW50LlxyXG4gKiBZb3UgY2FuIHVzZSBpdCB0byBkaXNwYXRjaCBhIHN0YW5kYXJkIENFUCBldmVudC5cclxuICpcclxuICogQHJldHVybiBDU0V2ZW50IG9iamVjdFxyXG4gKi9cclxudmFyIENTRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBuZXcgaW5zdGFuY2Ugb2YgQ1NFdmVudCBvYmplY3QuXHJcbiAgICAgKiBZb3UgY2FuIHVzZSBpdCB0byBkaXNwYXRjaCBhIHN0YW5kYXJkIENFUCBldmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgRXZlbnQgdHlwZS5cclxuICAgICAqIEBwYXJhbSBzY29wZSAgICAgICBUaGUgc2NvcGUgb2YgZXZlbnQsIGNhbiBiZSBcIkdMT0JBTFwiIG9yIFwiQVBQTElDQVRJT05cIi5cclxuICAgICAqIEBwYXJhbSBhcHBJZCAgICAgICBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFwcGxpY2F0aW9uIHRoYXQgZ2VuZXJhdGVkIHRoZSBldmVudC4gT3B0aW9uYWwuXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uSWQgVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBleHRlbnNpb24gdGhhdCBnZW5lcmF0ZWQgdGhlIGV2ZW50LiBPcHRpb25hbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ1NFdmVudCh0eXBlLCBzY29wZSwgYXBwSWQsIGV4dGVuc2lvbklkKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uSWQgPSBleHRlbnNpb25JZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFdmVudC1zcGVjaWZpYyBkYXRhLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ1NFdmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5DU0V2ZW50ID0gQ1NFdmVudDtcclxuLyoqXHJcbiAqIEBjbGFzcyBTeXN0ZW1QYXRoXHJcbiAqIFN0b3JlcyBvcGVyYXRpbmctc3lzdGVtLXNwZWNpZmljIGxvY2F0aW9uIGNvbnN0YW50cyBmb3IgdXNlIGluIHRoZVxyXG4gKiBcXGMgI0NTSW50ZXJmYWNlLmdldFN5c3RlbVBhdGgoKSBtZXRob2QuXHJcbiAqL1xyXG52YXIgU3lzdGVtUGF0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTeXN0ZW1QYXRoKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFN5c3RlbVBhdGg7XHJcbn0oKSk7XHJcbi8qKiBUaGUgcGF0aCB0byB1c2VyIGRhdGEuICAqL1xyXG5TeXN0ZW1QYXRoLlVTRVJfREFUQSA9IFwidXNlckRhdGFcIjtcclxuLyoqIFRoZSBwYXRoIHRvIGNvbW1vbiBmaWxlcyBmb3IgQWRvYmUgYXBwbGljYXRpb25zLiAgKi9cclxuU3lzdGVtUGF0aC5DT01NT05fRklMRVMgPSBcImNvbW1vbkZpbGVzXCI7XHJcbi8qKiBUaGUgcGF0aCB0byB0aGUgdXNlcidzIGRlZmF1bHQgZG9jdW1lbnQgZm9sZGVyLiAgKi9cclxuU3lzdGVtUGF0aC5NWV9ET0NVTUVOVFMgPSBcIm15RG9jdW1lbnRzXCI7XHJcbi8qKiBAZGVwcmVjYXRlZC4gVXNlIFxcYyAjU3lzdGVtUGF0aC5FeHRlbnNpb24uICAqL1xyXG5TeXN0ZW1QYXRoLkFQUExJQ0FUSU9OID0gXCJhcHBsaWNhdGlvblwiO1xyXG4vKiogVGhlIHBhdGggdG8gY3VycmVudCBleHRlbnNpb24uICAqL1xyXG5TeXN0ZW1QYXRoLkVYVEVOU0lPTiA9IFwiZXh0ZW5zaW9uXCI7XHJcbi8qKiBUaGUgcGF0aCB0byBob3N0aW5nIGFwcGxpY2F0aW9uJ3MgZXhlY3V0YWJsZS4gICovXHJcblN5c3RlbVBhdGguSE9TVF9BUFBMSUNBVElPTiA9IFwiaG9zdEFwcGxpY2F0aW9uXCI7XHJcbmV4cG9ydHMuU3lzdGVtUGF0aCA9IFN5c3RlbVBhdGg7XHJcbi8qKlxyXG4gKiBAY2xhc3MgQ29sb3JUeXBlXHJcbiAqIFN0b3JlcyBjb2xvci10eXBlIGNvbnN0YW50cy5cclxuICovXHJcbnZhciBDb2xvclR5cGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sb3JUeXBlKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbG9yVHlwZTtcclxufSgpKTtcclxuLyoqIFJHQiBjb2xvciB0eXBlLiAqL1xyXG5Db2xvclR5cGUuUkdCID0gXCJyZ2JcIjtcclxuLyoqIEdyYWRpZW50IGNvbG9yIHR5cGUuICovXHJcbkNvbG9yVHlwZS5HUkFESUVOVCA9IFwiZ3JhZGllbnRcIjtcclxuLyoqIE51bGwgY29sb3IgdHlwZS4gKi9cclxuQ29sb3JUeXBlLk5PTkUgPSBcIm5vbmVcIjtcclxuZXhwb3J0cy5Db2xvclR5cGUgPSBDb2xvclR5cGU7XHJcbi8qKlxyXG4gKiBAY2xhc3MgUkdCQ29sb3JcclxuICogU3RvcmVzIGFuIFJHQiBjb2xvciB3aXRoIHJlZCwgZ3JlZW4sIGJsdWUsIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAqIEFsbCB2YWx1ZXMgYXJlIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS4gSW52YWxpZCBudW1lcmljIHZhbHVlcyBhcmVcclxuICogY29udmVydGVkIHRvIG51bWJlcnMgd2l0aGluIHRoaXMgcmFuZ2UuXHJcbiAqXHJcbiAqL1xyXG52YXIgUkdCQ29sb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYW4gUkdCIGNvbG9yIHdpdGggcmVkLCBncmVlbiwgYmx1ZSwgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEFsbCB2YWx1ZXMgYXJlIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS4gSW52YWxpZCBudW1lcmljIHZhbHVlcyBhcmVcclxuICAgICAqIGNvbnZlcnRlZCB0byBudW1iZXJzIHdpdGhpbiB0aGlzIHJhbmdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByZWQgICBUaGUgcmVkIHZhbHVlLCBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uXHJcbiAgICAgKiBAcGFyYW0gZ3JlZW4gVGhlIGdyZWVuIHZhbHVlLCBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uXHJcbiAgICAgKiBAcGFyYW0gYmx1ZSAgVGhlIGJsdWUgdmFsdWUsIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS5cclxuICAgICAqIEBwYXJhbSBhbHBoYSBUaGUgYWxwaGEgKHRyYW5zcGFyZW5jeSkgdmFsdWUsIGluIHRoZSByYW5nZSBbMC4wIHRvIDI1NS4wXS5cclxuICAgICAqICAgICAgVGhlIGRlZmF1bHQsIDI1NS4wLCBtZWFucyB0aGF0IHRoZSBjb2xvciBpcyBmdWxseSBvcGFxdWUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJHQkNvbG9yKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKSB7XHJcbiAgICAgICAgdGhpcy5yZWQgPSByZWQ7XHJcbiAgICAgICAgdGhpcy5ncmVlbiA9IGdyZWVuO1xyXG4gICAgICAgIHRoaXMuYmx1ZSA9IGJsdWU7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJHQkNvbG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLlJHQkNvbG9yID0gUkdCQ29sb3I7XHJcbi8qKlxyXG4gKiBAY2xhc3MgRGlyZWN0aW9uXHJcbiAqIEEgcG9pbnQgdmFsdWUgIGluIHdoaWNoIHRoZSB5IGNvbXBvbmVudCBpcyAwIGFuZCB0aGUgeCBjb21wb25lbnRcclxuICogaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgZm9yIGEgcmlnaHQgb3IgbGVmdCBkaXJlY3Rpb24sXHJcbiAqIG9yIHRoZSB4IGNvbXBvbmVudCBpcyAwIGFuZCB0aGUgeSBjb21wb25lbnQgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgZm9yXHJcbiAqIGFuIHVwIG9yIGRvd24gZGlyZWN0aW9uLlxyXG4gKi9cclxudmFyIERpcmVjdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgcG9pbnQgdmFsdWUgIGluIHdoaWNoIHRoZSB5IGNvbXBvbmVudCBpcyAwIGFuZCB0aGUgeCBjb21wb25lbnRcclxuICAgICAqIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGZvciBhIHJpZ2h0IG9yIGxlZnQgZGlyZWN0aW9uLFxyXG4gICAgICogb3IgdGhlIHggY29tcG9uZW50IGlzIDAgYW5kIHRoZSB5IGNvbXBvbmVudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBmb3JcclxuICAgICAqIGFuIHVwIG9yIGRvd24gZGlyZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB4ICAgICBUaGUgaG9yaXpvbnRhbCBjb21wb25lbnQgb2YgdGhlIHBvaW50LlxyXG4gICAgICogQHBhcmFtIHkgICAgIFRoZSB2ZXJ0aWNhbCBjb21wb25lbnQgb2YgdGhlIHBvaW50LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBEaXJlY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHJldHVybiBEaXJlY3Rpb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuRGlyZWN0aW9uID0gRGlyZWN0aW9uO1xyXG4vKipcclxuICogQGNsYXNzIEdyYWRpZW50U3RvcFxyXG4gKiBTdG9yZXMgZ3JhZGllbnQgc3RvcCBpbmZvcm1hdGlvbi5cclxuICovXHJcbnZhciBHcmFkaWVudFN0b3AgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgZ3JhZGllbnQgc3RvcCBpbmZvcm1hdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0ICAgVGhlIG9mZnNldCBvZiB0aGUgZ3JhZGllbnQgc3RvcCwgaW4gdGhlIHJhbmdlIFswLjAgdG8gMS4wXS5cclxuICAgICAqIEBwYXJhbSByZ2JDb2xvciBUaGUgY29sb3Igb2YgdGhlIGdyYWRpZW50IGF0IHRoaXMgcG9pbnQsIGFuIFxcYyAjUkdCQ29sb3Igb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBHcmFkaWVudFN0b3Aob2Zmc2V0LCByZ2JDb2xvcikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMucmdiQ29sb3IgPSByZ2JDb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBHcmFkaWVudFN0b3A7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR3JhZGllbnRTdG9wID0gR3JhZGllbnRTdG9wO1xyXG4vKipcclxuICogQGNsYXNzIEdyYWRpZW50Q29sb3JcclxuICogU3RvcmVzIGdyYWRpZW50IGNvbG9yIGluZm9ybWF0aW9uLlxyXG4gKi9cclxudmFyIEdyYWRpZW50Q29sb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBuZXcgXFxjICNHcmFkaWVudENvbG9yIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlICAgICAgICAgIFRoZSBncmFkaWVudCB0eXBlLCBtdXN0IGJlIFwibGluZWFyXCIuXHJcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uICAgICBBIFxcYyAjRGlyZWN0aW9uIG9iamVjdCBmb3IgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZ3JhZGllbnRcclxuICAgICAodXAsIGRvd24sIHJpZ2h0LCBvciBsZWZ0KS5cclxuICAgICAqIEBwYXJhbSBudW1TdG9wcyAgICAgICAgICBUaGUgbnVtYmVyIG9mIHN0b3BzIGluIHRoZSBncmFkaWVudC5cclxuICAgICAqIEBwYXJhbSBncmFkaWVudFN0b3BMaXN0ICBBbiBhcnJheSBvZiBcXGMgI0dyYWRpZW50U3RvcCBvYmplY3RzLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBHcmFkaWVudENvbG9yKHR5cGUsIGRpcmVjdGlvbiwgbnVtU3RvcHMsIGFyckdyYWRpZW50U3RvcCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5udW1TdG9wcyA9IG51bVN0b3BzO1xyXG4gICAgICAgIHRoaXMuYXJyR3JhZGllbnRTdG9wID0gYXJyR3JhZGllbnRTdG9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdyYWRpZW50Q29sb3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR3JhZGllbnRDb2xvciA9IEdyYWRpZW50Q29sb3I7XHJcbi8qKlxyXG4gKiBAY2xhc3MgVUlDb2xvclxyXG4gKiBTdG9yZXMgY29sb3IgaW5mb3JtYXRpb24sIGluY2x1ZGluZyB0aGUgdHlwZSwgYW50aS1hbGlhcyBsZXZlbCwgYW5kIHNwZWNpZmljIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBhIGNvbG9yIG9iamVjdCBvZiBhbiBhcHByb3ByaWF0ZSB0eXBlLlxyXG4gKi9cclxudmFyIFVJQ29sb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgY29sb3IgaW5mb3JtYXRpb24sIGluY2x1ZGluZyB0aGUgdHlwZSwgYW50aS1hbGlhcyBsZXZlbCwgYW5kIHNwZWNpZmljIGNvbG9yXHJcbiAgICAgKiB2YWx1ZXMgaW4gYSBjb2xvciBvYmplY3Qgb2YgYW4gYXBwcm9wcmlhdGUgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgICBUaGUgY29sb3IgdHlwZSwgMSBmb3IgXCJyZ2JcIiBhbmQgMiBmb3IgXCJncmFkaWVudFwiLlxyXG4gICAgIFRoZSBzdXBwbGllZCBjb2xvciBvYmplY3QgbXVzdCBjb3JyZXNwb25kIHRvIHRoaXMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBhbnRpYWxpYXNMZXZlbCAgICBUaGUgYW50aS1hbGlhcyBsZXZlbCBjb25zdGFudC5cclxuICAgICAqIEBwYXJhbSBjb2xvciAgICAgICAgIEEgXFxjICNSR0JDb2xvciBvciBcXGMgI0dyYWRpZW50Q29sb3Igb2JqZWN0IGNvbnRhaW5pbmcgc3BlY2lmaWMgY29sb3IgaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFVJQ29sb3IodHlwZSwgYW50aWFsaWFzTGV2ZWwsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFudGlhbGlhc0xldmVsID0gYW50aWFsaWFzTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVJQ29sb3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVUlDb2xvciA9IFVJQ29sb3I7XHJcbi8qKlxyXG4gKiBAY2xhc3MgQXBwU2tpbkluZm9cclxuICogU3RvcmVzIHdpbmRvdy1za2luIHByb3BlcnRpZXMsIHN1Y2ggYXMgY29sb3IgYW5kIGZvbnQuIEFsbCBjb2xvciBwYXJhbWV0ZXIgdmFsdWVzIGFyZSBcXGMgI1VJQ29sb3Igb2JqZWN0cyBleGNlcHQgdGhhdCBzeXN0ZW1IaWdobGlnaHRDb2xvciBpcyBcXGMgI1JHQkNvbG9yIG9iamVjdC5cclxuICovXHJcbnZhciBBcHBTa2luSW5mbyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB3aW5kb3ctc2tpbiBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNvbG9yIGFuZCBmb250LiBBbGwgY29sb3IgcGFyYW1ldGVyIHZhbHVlcyBhcmUgXFxjICNVSUNvbG9yIG9iamVjdHMgZXhjZXB0IHRoYXQgc3lzdGVtSGlnaGxpZ2h0Q29sb3IgaXMgXFxjICNSR0JDb2xvciBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGJhc2VGb250RmFtaWx5ICAgICAgICBUaGUgYmFzZSBmb250IGZhbWlseSBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFzZUZvbnRTaXplICAgICAgICAgIFRoZSBiYXNlIGZvbnQgc2l6ZSBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYXBwQmFyQmFja2dyb3VuZENvbG9yICAgICBUaGUgYXBwbGljYXRpb24gYmFyIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxCYWNrZ3JvdW5kQ29sb3IgICAgICBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZXh0ZW5zaW9uIHBhbmVsLlxyXG4gICAgICogQHBhcmFtIGFwcEJhckJhY2tncm91bmRDb2xvclNSR0IgICAgIFRoZSBhcHBsaWNhdGlvbiBiYXIgYmFja2dyb3VuZCBjb2xvciwgYXMgc1JHQi5cclxuICAgICAqIEBwYXJhbSBwYW5lbEJhY2tncm91bmRDb2xvclNSR0IgICAgICBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZXh0ZW5zaW9uIHBhbmVsLCBhcyBzUkdCLlxyXG4gICAgICogQHBhcmFtIHN5c3RlbUhpZ2hsaWdodENvbG9yICAgICAgICAgIFRoZSBvcGVyYXRpbmctc3lzdGVtIGhpZ2hsaWdodCBjb2xvciwgYXMgc1JHQi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQXBwU2tpbkluZm8oYmFzZUZvbnRGYW1pbHksIGJhc2VGb250U2l6ZSwgYXBwQmFyQmFja2dyb3VuZENvbG9yLCBwYW5lbEJhY2tncm91bmRDb2xvciwgYXBwQmFyQmFja2dyb3VuZENvbG9yU1JHQiwgcGFuZWxCYWNrZ3JvdW5kQ29sb3JTUkdCLCBzeXN0ZW1IaWdobGlnaHRDb2xvcikge1xyXG4gICAgICAgIHRoaXMuYmFzZUZvbnRGYW1pbHkgPSBiYXNlRm9udEZhbWlseTtcclxuICAgICAgICB0aGlzLmJhc2VGb250U2l6ZSA9IGJhc2VGb250U2l6ZTtcclxuICAgICAgICB0aGlzLmFwcEJhckJhY2tncm91bmRDb2xvciA9IGFwcEJhckJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLnBhbmVsQmFja2dyb3VuZENvbG9yID0gcGFuZWxCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5hcHBCYXJCYWNrZ3JvdW5kQ29sb3JTUkdCID0gYXBwQmFyQmFja2dyb3VuZENvbG9yU1JHQjtcclxuICAgICAgICB0aGlzLnBhbmVsQmFja2dyb3VuZENvbG9yU1JHQiA9IHBhbmVsQmFja2dyb3VuZENvbG9yU1JHQjtcclxuICAgICAgICB0aGlzLnN5c3RlbUhpZ2hsaWdodENvbG9yID0gc3lzdGVtSGlnaGxpZ2h0Q29sb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwU2tpbkluZm87XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwU2tpbkluZm8gPSBBcHBTa2luSW5mbztcclxuLyoqXHJcbiAqIEBjbGFzcyBIb3N0RW52aXJvbm1lbnRcclxuICogU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbnZpcm9ubWVudCBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGlzIGxvYWRlZC5cclxuICovXHJcbnZhciBIb3N0RW52aXJvbm1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVudmlyb25tZW50IGluIHdoaWNoIHRoZSBleHRlbnNpb24gaXMgbG9hZGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcHBOYW1lICAgVGhlIGFwcGxpY2F0aW9uJ3MgbmFtZS5cclxuICAgICAqIEBwYXJhbSBhcHBWZXJzaW9uICAgIFRoZSBhcHBsaWNhdGlvbidzIHZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gYXBwTG9jYWxlIFRoZSBhcHBsaWNhdGlvbidzIGN1cnJlbnQgbGljZW5zZSBsb2NhbGUuXHJcbiAgICAgKiBAcGFyYW0gYXBwVUlMb2NhbGUgICBUaGUgYXBwbGljYXRpb24ncyBjdXJyZW50IFVJIGxvY2FsZS5cclxuICAgICAqIEBwYXJhbSBhcHBJZCAgICAgVGhlIGFwcGxpY2F0aW9uJ3MgdW5pcXVlIGlkZW50aWZpZXIuXHJcbiAgICAgKiBAcGFyYW0gaXNBcHBPbmxpbmUgIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGN1cnJlbnRseSBvbmxpbmUuXHJcbiAgICAgKiBAcGFyYW0gYXBwU2tpbkluZm8gICBBbiBcXGMgI0FwcFNraW5JbmZvIG9iamVjdCBjb250YWluaW5nIHRoZSBhcHBsaWNhdGlvbidzIGRlZmF1bHQgY29sb3IgYW5kIGZvbnQgc3R5bGVzLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBIb3N0RW52aXJvbm1lbnQoYXBwTmFtZSwgYXBwVmVyc2lvbiwgYXBwTG9jYWxlLCBhcHBVSUxvY2FsZSwgYXBwSWQsIGlzQXBwT25saW5lLCBhcHBTa2luSW5mbykge1xyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IGFwcE5hbWU7XHJcbiAgICAgICAgdGhpcy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmFwcExvY2FsZSA9IGFwcExvY2FsZTtcclxuICAgICAgICB0aGlzLmFwcFVJTG9jYWxlID0gYXBwVUlMb2NhbGU7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuaXNBcHBPbmxpbmUgPSBpc0FwcE9ubGluZTtcclxuICAgICAgICB0aGlzLmFwcFNraW5JbmZvID0gYXBwU2tpbkluZm87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSG9zdEVudmlyb25tZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkhvc3RFbnZpcm9ubWVudCA9IEhvc3RFbnZpcm9ubWVudDtcclxuLyoqXHJcbiAqIEBjbGFzcyBIb3N0Q2FwYWJpbGl0aWVzXHJcbiAqIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaG9zdCBjYXBhYmlsaXRpZXMuXHJcbiAqL1xyXG52YXIgSG9zdENhcGFiaWxpdGllcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaG9zdCBjYXBhYmlsaXRpZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIEVYVEVOREVEX1BBTkVMX01FTlUgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gc3VwcG9ydHMgcGFuZWwgbWVudS5cclxuICAgICAqIEBwYXJhbSBFWFRFTkRFRF9QQU5FTF9JQ09OUyBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBzdXBwb3J0cyBwYW5lbCBpY29uLlxyXG4gICAgICogQHBhcmFtIERFTEVHQVRFX0FQRV9FTkdJTkUgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gc3VwcG9ydHMgZGVsZWdhdGVkIEFQRSBlbmdpbmUuXHJcbiAgICAgKiBAcGFyYW0gU1VQUE9SVF9IVE1MX0VYVEVOU0lPTlMgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gc3VwcG9ydHMgSFRNTCBleHRlbnNpb25zLlxyXG4gICAgICogQHBhcmFtIERJU0FCTEVfRkxBU0hfRVhURU5TSU9OUyBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBkaXNhYmxlcyBGTEFTSCBleHRlbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBIb3N0Q2FwYWJpbGl0aWVzKEVYVEVOREVEX1BBTkVMX01FTlUsIEVYVEVOREVEX1BBTkVMX0lDT05TLCBERUxFR0FURV9BUEVfRU5HSU5FLCBTVVBQT1JUX0hUTUxfRVhURU5TSU9OUywgRElTQUJMRV9GTEFTSF9FWFRFTlNJT05TKSB7XHJcbiAgICAgICAgdGhpcy5FWFRFTkRFRF9QQU5FTF9NRU5VID0gRVhURU5ERURfUEFORUxfTUVOVTtcclxuICAgICAgICB0aGlzLkVYVEVOREVEX1BBTkVMX0lDT05TID0gRVhURU5ERURfUEFORUxfSUNPTlM7XHJcbiAgICAgICAgdGhpcy5ERUxFR0FURV9BUEVfRU5HSU5FID0gREVMRUdBVEVfQVBFX0VOR0lORTtcclxuICAgICAgICB0aGlzLlNVUFBPUlRfSFRNTF9FWFRFTlNJT05TID0gU1VQUE9SVF9IVE1MX0VYVEVOU0lPTlM7XHJcbiAgICAgICAgdGhpcy5ESVNBQkxFX0ZMQVNIX0VYVEVOU0lPTlMgPSBESVNBQkxFX0ZMQVNIX0VYVEVOU0lPTlM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSG9zdENhcGFiaWxpdGllcztcclxufSgpKTtcclxuZXhwb3J0cy5Ib3N0Q2FwYWJpbGl0aWVzID0gSG9zdENhcGFiaWxpdGllcztcclxuLyoqXHJcbiAqIEBjbGFzcyBBcGlWZXJzaW9uXHJcbiAqIFN0b3JlcyBjdXJyZW50IGFwaSB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBTaW5jZSA0LjIuMFxyXG4gKi9cclxudmFyIEFwaVZlcnNpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgY3VycmVudCBhcGkgdmVyc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtYWpvciAgVGhlIG1ham9yIHZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbWlub3IgIFRoZSBtaW5vciB2ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIG1pY3JvICBUaGUgbWljcm8gdmVyc2lvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQXBpVmVyc2lvbihtYWpvciwgbWlub3IsIG1pY3JvKSB7XHJcbiAgICAgICAgdGhpcy5tYWpvciA9IG1ham9yO1xyXG4gICAgICAgIHRoaXMubWlub3IgPSBtaW5vcjtcclxuICAgICAgICB0aGlzLm1pY3JvID0gbWljcm87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBpVmVyc2lvbjtcclxufSgpKTtcclxuZXhwb3J0cy5BcGlWZXJzaW9uID0gQXBpVmVyc2lvbjtcclxuLyoqXHJcbiAqIEBjbGFzcyBNZW51SXRlbVN0YXR1c1xyXG4gKiBTdG9yZXMgZmx5b3V0IG1lbnUgaXRlbSBzdGF0dXNcclxuICpcclxuICogU2luY2UgNS4yLjBcclxuICovXHJcbnZhciBNZW51SXRlbVN0YXR1cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyBmbHlvdXQgbWVudSBpdGVtIHN0YXR1c1xyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnVJdGVtTGFiZWwgIFRoZSBtZW51IGl0ZW0gbGFiZWwuXHJcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAgXHRcdCBUcnVlIGlmIHVzZXIgd2FudHMgdG8gZW5hYmxlIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gY2hlY2tlZCAgXHRcdCBUcnVlIGlmIHVzZXIgd2FudHMgdG8gY2hlY2sgdGhlIG1lbnUgaXRlbS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gTWVudUl0ZW1TdGF0dXMobWVudUl0ZW1MYWJlbCwgZW5hYmxlZCwgY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1MYWJlbCA9IG1lbnVJdGVtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1lbnVJdGVtU3RhdHVzO1xyXG59KCkpO1xyXG5leHBvcnRzLk1lbnVJdGVtU3RhdHVzID0gTWVudUl0ZW1TdGF0dXM7XHJcbi8qKlxyXG4gKiBAY2xhc3MgQ29udGV4dE1lbnVJdGVtU3RhdHVzXHJcbiAqIFN0b3JlcyB0aGUgc3RhdHVzIG9mIHRoZSBjb250ZXh0IG1lbnUgaXRlbS5cclxuICpcclxuICogU2luY2UgNS4yLjBcclxuICovXHJcbnZhciBDb250ZXh0TWVudUl0ZW1TdGF0dXMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgdGhlIHN0YXR1cyBvZiB0aGUgY29udGV4dCBtZW51IGl0ZW0uXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudUl0ZW1JRCAgICAgVGhlIG1lbnUgaXRlbSBpZC5cclxuICAgICAqIEBwYXJhbSBlbmFibGVkICBcdFx0IFRydWUgaWYgdXNlciB3YW50cyB0byBlbmFibGUgdGhlIG1lbnUgaXRlbS5cclxuICAgICAqIEBwYXJhbSBjaGVja2VkICBcdFx0IFRydWUgaWYgdXNlciB3YW50cyB0byBjaGVjayB0aGUgbWVudSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDb250ZXh0TWVudUl0ZW1TdGF0dXMobWVudUl0ZW1JRCwgZW5hYmxlZCwgY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1JRCA9IG1lbnVJdGVtSUQ7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbnRleHRNZW51SXRlbVN0YXR1cztcclxufSgpKTtcclxuZXhwb3J0cy5Db250ZXh0TWVudUl0ZW1TdGF0dXMgPSBDb250ZXh0TWVudUl0ZW1TdGF0dXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gbWluaW1hdGNoXG5taW5pbWF0Y2guTWluaW1hdGNoID0gTWluaW1hdGNoXG5cbnZhciBwYXRoID0geyBzZXA6ICcvJyB9XG50cnkge1xuICBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG59IGNhdGNoIChlcikge31cblxudmFyIEdMT0JTVEFSID0gbWluaW1hdGNoLkdMT0JTVEFSID0gTWluaW1hdGNoLkdMT0JTVEFSID0ge31cbnZhciBleHBhbmQgPSByZXF1aXJlKCdicmFjZS1leHBhbnNpb24nKVxuXG52YXIgcGxUeXBlcyA9IHtcbiAgJyEnOiB7IG9wZW46ICcoPzooPyEoPzonLCBjbG9zZTogJykpW14vXSo/KSd9LFxuICAnPyc6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKT8nIH0sXG4gICcrJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpKycgfSxcbiAgJyonOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJykqJyB9LFxuICAnQCc6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKScgfVxufVxuXG4vLyBhbnkgc2luZ2xlIHRoaW5nIG90aGVyIHRoYW4gL1xuLy8gZG9uJ3QgbmVlZCB0byBlc2NhcGUgLyB3aGVuIHVzaW5nIG5ldyBSZWdFeHAoKVxudmFyIHFtYXJrID0gJ1teL10nXG5cbi8vICogPT4gYW55IG51bWJlciBvZiBjaGFyYWN0ZXJzXG52YXIgc3RhciA9IHFtYXJrICsgJyo/J1xuXG4vLyAqKiB3aGVuIGRvdHMgYXJlIGFsbG93ZWQuICBBbnl0aGluZyBnb2VzLCBleGNlcHQgLi4gYW5kIC5cbi8vIG5vdCAoXiBvciAvIGZvbGxvd2VkIGJ5IG9uZSBvciB0d28gZG90cyBmb2xsb3dlZCBieSAkIG9yIC8pLFxuLy8gZm9sbG93ZWQgYnkgYW55dGhpbmcsIGFueSBudW1iZXIgb2YgdGltZXMuXG52YXIgdHdvU3RhckRvdCA9ICcoPzooPyEoPzpcXFxcXFwvfF4pKD86XFxcXC57MSwyfSkoJHxcXFxcXFwvKSkuKSo/J1xuXG4vLyBub3QgYSBeIG9yIC8gZm9sbG93ZWQgYnkgYSBkb3QsXG4vLyBmb2xsb3dlZCBieSBhbnl0aGluZywgYW55IG51bWJlciBvZiB0aW1lcy5cbnZhciB0d29TdGFyTm9Eb3QgPSAnKD86KD8hKD86XFxcXFxcL3xeKVxcXFwuKS4pKj8nXG5cbi8vIGNoYXJhY3RlcnMgdGhhdCBuZWVkIHRvIGJlIGVzY2FwZWQgaW4gUmVnRXhwLlxudmFyIHJlU3BlY2lhbHMgPSBjaGFyU2V0KCcoKS4qe30rP1tdXiRcXFxcIScpXG5cbi8vIFwiYWJjXCIgLT4geyBhOnRydWUsIGI6dHJ1ZSwgYzp0cnVlIH1cbmZ1bmN0aW9uIGNoYXJTZXQgKHMpIHtcbiAgcmV0dXJuIHMuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoc2V0LCBjKSB7XG4gICAgc2V0W2NdID0gdHJ1ZVxuICAgIHJldHVybiBzZXRcbiAgfSwge30pXG59XG5cbi8vIG5vcm1hbGl6ZXMgc2xhc2hlcy5cbnZhciBzbGFzaFNwbGl0ID0gL1xcLysvXG5cbm1pbmltYXRjaC5maWx0ZXIgPSBmaWx0ZXJcbmZ1bmN0aW9uIGZpbHRlciAocGF0dGVybiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICByZXR1cm4gZnVuY3Rpb24gKHAsIGksIGxpc3QpIHtcbiAgICByZXR1cm4gbWluaW1hdGNoKHAsIHBhdHRlcm4sIG9wdGlvbnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0IChhLCBiKSB7XG4gIGEgPSBhIHx8IHt9XG4gIGIgPSBiIHx8IHt9XG4gIHZhciB0ID0ge31cbiAgT2JqZWN0LmtleXMoYikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHRba10gPSBiW2tdXG4gIH0pXG4gIE9iamVjdC5rZXlzKGEpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB0W2tdID0gYVtrXVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5taW5pbWF0Y2guZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIGlmICghZGVmIHx8ICFPYmplY3Qua2V5cyhkZWYpLmxlbmd0aCkgcmV0dXJuIG1pbmltYXRjaFxuXG4gIHZhciBvcmlnID0gbWluaW1hdGNoXG5cbiAgdmFyIG0gPSBmdW5jdGlvbiBtaW5pbWF0Y2ggKHAsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3JpZy5taW5pbWF0Y2gocCwgcGF0dGVybiwgZXh0KGRlZiwgb3B0aW9ucykpXG4gIH1cblxuICBtLk1pbmltYXRjaCA9IGZ1bmN0aW9uIE1pbmltYXRjaCAocGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgb3JpZy5NaW5pbWF0Y2gocGF0dGVybiwgZXh0KGRlZiwgb3B0aW9ucykpXG4gIH1cblxuICByZXR1cm4gbVxufVxuXG5NaW5pbWF0Y2guZGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIGlmICghZGVmIHx8ICFPYmplY3Qua2V5cyhkZWYpLmxlbmd0aCkgcmV0dXJuIE1pbmltYXRjaFxuICByZXR1cm4gbWluaW1hdGNoLmRlZmF1bHRzKGRlZikuTWluaW1hdGNoXG59XG5cbmZ1bmN0aW9uIG1pbmltYXRjaCAocCwgcGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2xvYiBwYXR0ZXJuIHN0cmluZyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuXG4gIC8vIHNob3J0Y3V0OiBjb21tZW50cyBtYXRjaCBub3RoaW5nLlxuICBpZiAoIW9wdGlvbnMubm9jb21tZW50ICYmIHBhdHRlcm4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFwiXCIgb25seSBtYXRjaGVzIFwiXCJcbiAgaWYgKHBhdHRlcm4udHJpbSgpID09PSAnJykgcmV0dXJuIHAgPT09ICcnXG5cbiAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucykubWF0Y2gocClcbn1cblxuZnVuY3Rpb24gTWluaW1hdGNoIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNaW5pbWF0Y2gpKSB7XG4gICAgcmV0dXJuIG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucylcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnbG9iIHBhdHRlcm4gc3RyaW5nIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9XG4gIHBhdHRlcm4gPSBwYXR0ZXJuLnRyaW0oKVxuXG4gIC8vIHdpbmRvd3Mgc3VwcG9ydDogbmVlZCB0byB1c2UgLywgbm90IFxcXG4gIGlmIChwYXRoLnNlcCAhPT0gJy8nKSB7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKVxuICB9XG5cbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLnNldCA9IFtdXG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cbiAgdGhpcy5yZWdleHAgPSBudWxsXG4gIHRoaXMubmVnYXRlID0gZmFsc2VcbiAgdGhpcy5jb21tZW50ID0gZmFsc2VcbiAgdGhpcy5lbXB0eSA9IGZhbHNlXG5cbiAgLy8gbWFrZSB0aGUgc2V0IG9mIHJlZ2V4cHMgZXRjLlxuICB0aGlzLm1ha2UoKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge31cblxuTWluaW1hdGNoLnByb3RvdHlwZS5tYWtlID0gbWFrZVxuZnVuY3Rpb24gbWFrZSAoKSB7XG4gIC8vIGRvbid0IGRvIGl0IG1vcmUgdGhhbiBvbmNlLlxuICBpZiAodGhpcy5fbWFkZSkgcmV0dXJuXG5cbiAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyBlbXB0eSBwYXR0ZXJucyBhbmQgY29tbWVudHMgbWF0Y2ggbm90aGluZy5cbiAgaWYgKCFvcHRpb25zLm5vY29tbWVudCAmJiBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgdGhpcy5jb21tZW50ID0gdHJ1ZVxuICAgIHJldHVyblxuICB9XG4gIGlmICghcGF0dGVybikge1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBzdGVwIDE6IGZpZ3VyZSBvdXQgbmVnYXRpb24sIGV0Yy5cbiAgdGhpcy5wYXJzZU5lZ2F0ZSgpXG5cbiAgLy8gc3RlcCAyOiBleHBhbmQgYnJhY2VzXG4gIHZhciBzZXQgPSB0aGlzLmdsb2JTZXQgPSB0aGlzLmJyYWNlRXhwYW5kKClcblxuICBpZiAob3B0aW9ucy5kZWJ1ZykgdGhpcy5kZWJ1ZyA9IGNvbnNvbGUuZXJyb3JcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIHN0ZXAgMzogbm93IHdlIGhhdmUgYSBzZXQsIHNvIHR1cm4gZWFjaCBvbmUgaW50byBhIHNlcmllcyBvZiBwYXRoLXBvcnRpb25cbiAgLy8gbWF0Y2hpbmcgcGF0dGVybnMuXG4gIC8vIFRoZXNlIHdpbGwgYmUgcmVnZXhwcywgZXhjZXB0IGluIHRoZSBjYXNlIG9mIFwiKipcIiwgd2hpY2ggaXNcbiAgLy8gc2V0IHRvIHRoZSBHTE9CU1RBUiBvYmplY3QgZm9yIGdsb2JzdGFyIGJlaGF2aW9yLFxuICAvLyBhbmQgd2lsbCBub3QgY29udGFpbiBhbnkgLyBjaGFyYWN0ZXJzXG4gIHNldCA9IHRoaXMuZ2xvYlBhcnRzID0gc2V0Lm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnNwbGl0KHNsYXNoU3BsaXQpXG4gIH0pXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICAvLyBnbG9iIC0tPiByZWdleHBzXG4gIHNldCA9IHNldC5tYXAoZnVuY3Rpb24gKHMsIHNpLCBzZXQpIHtcbiAgICByZXR1cm4gcy5tYXAodGhpcy5wYXJzZSwgdGhpcylcbiAgfSwgdGhpcylcblxuICB0aGlzLmRlYnVnKHRoaXMucGF0dGVybiwgc2V0KVxuXG4gIC8vIGZpbHRlciBvdXQgZXZlcnl0aGluZyB0aGF0IGRpZG4ndCBjb21waWxlIHByb3Blcmx5LlxuICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMuaW5kZXhPZihmYWxzZSkgPT09IC0xXG4gIH0pXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICB0aGlzLnNldCA9IHNldFxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLnBhcnNlTmVnYXRlID0gcGFyc2VOZWdhdGVcbmZ1bmN0aW9uIHBhcnNlTmVnYXRlICgpIHtcbiAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm5cbiAgdmFyIG5lZ2F0ZSA9IGZhbHNlXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gIHZhciBuZWdhdGVPZmZzZXQgPSAwXG5cbiAgaWYgKG9wdGlvbnMubm9uZWdhdGUpIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0dGVybi5sZW5ndGhcbiAgICA7IGkgPCBsICYmIHBhdHRlcm4uY2hhckF0KGkpID09PSAnISdcbiAgICA7IGkrKykge1xuICAgIG5lZ2F0ZSA9ICFuZWdhdGVcbiAgICBuZWdhdGVPZmZzZXQrK1xuICB9XG5cbiAgaWYgKG5lZ2F0ZU9mZnNldCkgdGhpcy5wYXR0ZXJuID0gcGF0dGVybi5zdWJzdHIobmVnYXRlT2Zmc2V0KVxuICB0aGlzLm5lZ2F0ZSA9IG5lZ2F0ZVxufVxuXG4vLyBCcmFjZSBleHBhbnNpb246XG4vLyBhe2IsY31kIC0+IGFiZCBhY2Rcbi8vIGF7Yix9YyAtPiBhYmMgYWNcbi8vIGF7MC4uM31kIC0+IGEwZCBhMWQgYTJkIGEzZFxuLy8gYXtiLGN7ZCxlfWZ9ZyAtPiBhYmcgYWNkZmcgYWNlZmdcbi8vIGF7YixjfWR7ZSxmfWcgLT4gYWJkZWcgYWNkZWcgYWJkZWcgYWJkZmdcbi8vXG4vLyBJbnZhbGlkIHNldHMgYXJlIG5vdCBleHBhbmRlZC5cbi8vIGF7Mi4ufWIgLT4gYXsyLi59YlxuLy8gYXtifWMgLT4gYXtifWNcbm1pbmltYXRjaC5icmFjZUV4cGFuZCA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHJldHVybiBicmFjZUV4cGFuZChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLmJyYWNlRXhwYW5kID0gYnJhY2VFeHBhbmRcblxuZnVuY3Rpb24gYnJhY2VFeHBhbmQgKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNaW5pbWF0Y2gpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuICB9XG5cbiAgcGF0dGVybiA9IHR5cGVvZiBwYXR0ZXJuID09PSAndW5kZWZpbmVkJ1xuICAgID8gdGhpcy5wYXR0ZXJuIDogcGF0dGVyblxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmRlZmluZWQgcGF0dGVybicpXG4gIH1cblxuICBpZiAob3B0aW9ucy5ub2JyYWNlIHx8XG4gICAgIXBhdHRlcm4ubWF0Y2goL1xcey4qXFx9LykpIHtcbiAgICAvLyBzaG9ydGN1dC4gbm8gbmVlZCB0byBleHBhbmQuXG4gICAgcmV0dXJuIFtwYXR0ZXJuXVxuICB9XG5cbiAgcmV0dXJuIGV4cGFuZChwYXR0ZXJuKVxufVxuXG4vLyBwYXJzZSBhIGNvbXBvbmVudCBvZiB0aGUgZXhwYW5kZWQgc2V0LlxuLy8gQXQgdGhpcyBwb2ludCwgbm8gcGF0dGVybiBtYXkgY29udGFpbiBcIi9cIiBpbiBpdFxuLy8gc28gd2UncmUgZ29pbmcgdG8gcmV0dXJuIGEgMmQgYXJyYXksIHdoZXJlIGVhY2ggZW50cnkgaXMgdGhlIGZ1bGxcbi8vIHBhdHRlcm4sIHNwbGl0IG9uICcvJywgYW5kIHRoZW4gdHVybmVkIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24uXG4vLyBBIHJlZ2V4cCBpcyBtYWRlIGF0IHRoZSBlbmQgd2hpY2ggam9pbnMgZWFjaCBhcnJheSB3aXRoIGFuXG4vLyBlc2NhcGVkIC8sIGFuZCBhbm90aGVyIGZ1bGwgb25lIHdoaWNoIGpvaW5zIGVhY2ggcmVnZXhwIHdpdGggfC5cbi8vXG4vLyBGb2xsb3dpbmcgdGhlIGxlYWQgb2YgQmFzaCA0LjEsIG5vdGUgdGhhdCBcIioqXCIgb25seSBoYXMgc3BlY2lhbCBtZWFuaW5nXG4vLyB3aGVuIGl0IGlzIHRoZSAqb25seSogdGhpbmcgaW4gYSBwYXRoIHBvcnRpb24uICBPdGhlcndpc2UsIGFueSBzZXJpZXNcbi8vIG9mICogaXMgZXF1aXZhbGVudCB0byBhIHNpbmdsZSAqLiAgR2xvYnN0YXIgYmVoYXZpb3IgaXMgZW5hYmxlZCBieVxuLy8gZGVmYXVsdCwgYW5kIGNhbiBiZSBkaXNhYmxlZCBieSBzZXR0aW5nIG9wdGlvbnMubm9nbG9ic3Rhci5cbk1pbmltYXRjaC5wcm90b3R5cGUucGFyc2UgPSBwYXJzZVxudmFyIFNVQlBBUlNFID0ge31cbmZ1bmN0aW9uIHBhcnNlIChwYXR0ZXJuLCBpc1N1Yikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiAxMDI0ICogNjQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXR0ZXJuIGlzIHRvbyBsb25nJylcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgLy8gc2hvcnRjdXRzXG4gIGlmICghb3B0aW9ucy5ub2dsb2JzdGFyICYmIHBhdHRlcm4gPT09ICcqKicpIHJldHVybiBHTE9CU1RBUlxuICBpZiAocGF0dGVybiA9PT0gJycpIHJldHVybiAnJ1xuXG4gIHZhciByZSA9ICcnXG4gIHZhciBoYXNNYWdpYyA9ICEhb3B0aW9ucy5ub2Nhc2VcbiAgdmFyIGVzY2FwaW5nID0gZmFsc2VcbiAgLy8gPyA9PiBvbmUgc2luZ2xlIGNoYXJhY3RlclxuICB2YXIgcGF0dGVybkxpc3RTdGFjayA9IFtdXG4gIHZhciBuZWdhdGl2ZUxpc3RzID0gW11cbiAgdmFyIHN0YXRlQ2hhclxuICB2YXIgaW5DbGFzcyA9IGZhbHNlXG4gIHZhciByZUNsYXNzU3RhcnQgPSAtMVxuICB2YXIgY2xhc3NTdGFydCA9IC0xXG4gIC8vIC4gYW5kIC4uIG5ldmVyIG1hdGNoIGFueXRoaW5nIHRoYXQgZG9lc24ndCBzdGFydCB3aXRoIC4sXG4gIC8vIGV2ZW4gd2hlbiBvcHRpb25zLmRvdCBpcyBzZXQuXG4gIHZhciBwYXR0ZXJuU3RhcnQgPSBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJy4nID8gJycgLy8gYW55dGhpbmdcbiAgLy8gbm90IChzdGFydCBvciAvIGZvbGxvd2VkIGJ5IC4gb3IgLi4gZm9sbG93ZWQgYnkgLyBvciBlbmQpXG4gIDogb3B0aW9ucy5kb3QgPyAnKD8hKD86XnxcXFxcXFwvKVxcXFwuezEsMn0oPzokfFxcXFxcXC8pKSdcbiAgOiAnKD8hXFxcXC4pJ1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBmdW5jdGlvbiBjbGVhclN0YXRlQ2hhciAoKSB7XG4gICAgaWYgKHN0YXRlQ2hhcikge1xuICAgICAgLy8gd2UgaGFkIHNvbWUgc3RhdGUtdHJhY2tpbmcgY2hhcmFjdGVyXG4gICAgICAvLyB0aGF0IHdhc24ndCBjb25zdW1lZCBieSB0aGlzIHBhc3MuXG4gICAgICBzd2l0Y2ggKHN0YXRlQ2hhcikge1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICByZSArPSBzdGFyXG4gICAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgIHJlICs9IHFtYXJrXG4gICAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgc3RhdGVDaGFyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzZWxmLmRlYnVnKCdjbGVhclN0YXRlQ2hhciAlaiAlaicsIHN0YXRlQ2hhciwgcmUpXG4gICAgICBzdGF0ZUNoYXIgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aCwgY1xuICAgIDsgKGkgPCBsZW4pICYmIChjID0gcGF0dGVybi5jaGFyQXQoaSkpXG4gICAgOyBpKyspIHtcbiAgICB0aGlzLmRlYnVnKCclc1xcdCVzICVzICVqJywgcGF0dGVybiwgaSwgcmUsIGMpXG5cbiAgICAvLyBza2lwIG92ZXIgYW55IHRoYXQgYXJlIGVzY2FwZWQuXG4gICAgaWYgKGVzY2FwaW5nICYmIHJlU3BlY2lhbHNbY10pIHtcbiAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgLy8gY29tcGxldGVseSBub3QgYWxsb3dlZCwgZXZlbiBlc2NhcGVkLlxuICAgICAgICAvLyBTaG91bGQgYWxyZWFkeSBiZSBwYXRoLXNwbGl0IGJ5IG5vdy5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIGVzY2FwaW5nID0gdHJ1ZVxuICAgICAgY29udGludWVcblxuICAgICAgLy8gdGhlIHZhcmlvdXMgc3RhdGVDaGFyIHZhbHVlc1xuICAgICAgLy8gZm9yIHRoZSBcImV4dGdsb2JcIiBzdHVmZi5cbiAgICAgIGNhc2UgJz8nOlxuICAgICAgY2FzZSAnKic6XG4gICAgICBjYXNlICcrJzpcbiAgICAgIGNhc2UgJ0AnOlxuICAgICAgY2FzZSAnISc6XG4gICAgICAgIHRoaXMuZGVidWcoJyVzXFx0JXMgJXMgJWogPC0tIHN0YXRlQ2hhcicsIHBhdHRlcm4sIGksIHJlLCBjKVxuXG4gICAgICAgIC8vIGFsbCBvZiB0aG9zZSBhcmUgbGl0ZXJhbHMgaW5zaWRlIGEgY2xhc3MsIGV4Y2VwdCB0aGF0XG4gICAgICAgIC8vIHRoZSBnbG9iIFshYV0gbWVhbnMgW15hXSBpbiByZWdleHBcbiAgICAgICAgaWYgKGluQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLmRlYnVnKCcgIGluIGNsYXNzJylcbiAgICAgICAgICBpZiAoYyA9PT0gJyEnICYmIGkgPT09IGNsYXNzU3RhcnQgKyAxKSBjID0gJ14nXG4gICAgICAgICAgcmUgKz0gY1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBzdGF0ZUNoYXIsIHRoZW4gaXQgbWVhbnNcbiAgICAgICAgLy8gdGhhdCB0aGVyZSB3YXMgc29tZXRoaW5nIGxpa2UgKiogb3IgKz8gaW4gdGhlcmUuXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgc3RhdGVDaGFyLCB0aGVuIHByb2NlZWQgd2l0aCB0aGlzIG9uZS5cbiAgICAgICAgc2VsZi5kZWJ1ZygnY2FsbCBjbGVhclN0YXRlQ2hhciAlaicsIHN0YXRlQ2hhcilcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBzdGF0ZUNoYXIgPSBjXG4gICAgICAgIC8vIGlmIGV4dGdsb2IgaXMgZGlzYWJsZWQsIHRoZW4gKyhhc2RmfGZvbykgaXNuJ3QgYSB0aGluZy5cbiAgICAgICAgLy8ganVzdCBjbGVhciB0aGUgc3RhdGVjaGFyICpub3cqLCByYXRoZXIgdGhhbiBldmVuIGRpdmluZyBpbnRvXG4gICAgICAgIC8vIHRoZSBwYXR0ZXJuTGlzdCBzdHVmZi5cbiAgICAgICAgaWYgKG9wdGlvbnMubm9leHQpIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJygnOlxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9ICcoJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlQ2hhcikge1xuICAgICAgICAgIHJlICs9ICdcXFxcKCdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgcGF0dGVybkxpc3RTdGFjay5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBzdGF0ZUNoYXIsXG4gICAgICAgICAgc3RhcnQ6IGkgLSAxLFxuICAgICAgICAgIHJlU3RhcnQ6IHJlLmxlbmd0aCxcbiAgICAgICAgICBvcGVuOiBwbFR5cGVzW3N0YXRlQ2hhcl0ub3BlbixcbiAgICAgICAgICBjbG9zZTogcGxUeXBlc1tzdGF0ZUNoYXJdLmNsb3NlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG5lZ2F0aW9uIGlzICg/Oig/IWpzKVteL10qKVxuICAgICAgICByZSArPSBzdGF0ZUNoYXIgPT09ICchJyA/ICcoPzooPyEoPzonIDogJyg/OidcbiAgICAgICAgdGhpcy5kZWJ1ZygncGxUeXBlICVqICVqJywgc3RhdGVDaGFyLCByZSlcbiAgICAgICAgc3RhdGVDaGFyID0gZmFsc2VcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJyknOlxuICAgICAgICBpZiAoaW5DbGFzcyB8fCAhcGF0dGVybkxpc3RTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCknXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIHZhciBwbCA9IHBhdHRlcm5MaXN0U3RhY2sucG9wKClcbiAgICAgICAgLy8gbmVnYXRpb24gaXMgKD86KD8hanMpW14vXSopXG4gICAgICAgIC8vIFRoZSBvdGhlcnMgYXJlICg/OjxwYXR0ZXJuPik8dHlwZT5cbiAgICAgICAgcmUgKz0gcGwuY2xvc2VcbiAgICAgICAgaWYgKHBsLnR5cGUgPT09ICchJykge1xuICAgICAgICAgIG5lZ2F0aXZlTGlzdHMucHVzaChwbClcbiAgICAgICAgfVxuICAgICAgICBwbC5yZUVuZCA9IHJlLmxlbmd0aFxuICAgICAgY29udGludWVcblxuICAgICAgY2FzZSAnfCc6XG4gICAgICAgIGlmIChpbkNsYXNzIHx8ICFwYXR0ZXJuTGlzdFN0YWNrLmxlbmd0aCB8fCBlc2NhcGluZykge1xuICAgICAgICAgIHJlICs9ICdcXFxcfCdcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgcmUgKz0gJ3wnXG4gICAgICBjb250aW51ZVxuXG4gICAgICAvLyB0aGVzZSBhcmUgbW9zdGx5IHRoZSBzYW1lIGluIHJlZ2V4cCBhbmQgZ2xvYlxuICAgICAgY2FzZSAnWyc6XG4gICAgICAgIC8vIHN3YWxsb3cgYW55IHN0YXRlLXRyYWNraW5nIGNoYXIgYmVmb3JlIHRoZSBbXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcblxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaW5DbGFzcyA9IHRydWVcbiAgICAgICAgY2xhc3NTdGFydCA9IGlcbiAgICAgICAgcmVDbGFzc1N0YXJ0ID0gcmUubGVuZ3RoXG4gICAgICAgIHJlICs9IGNcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJ10nOlxuICAgICAgICAvLyAgYSByaWdodCBicmFja2V0IHNoYWxsIGxvc2UgaXRzIHNwZWNpYWxcbiAgICAgICAgLy8gIG1lYW5pbmcgYW5kIHJlcHJlc2VudCBpdHNlbGYgaW5cbiAgICAgICAgLy8gIGEgYnJhY2tldCBleHByZXNzaW9uIGlmIGl0IG9jY3Vyc1xuICAgICAgICAvLyAgZmlyc3QgaW4gdGhlIGxpc3QuICAtLSBQT1NJWC4yIDIuOC4zLjJcbiAgICAgICAgaWYgKGkgPT09IGNsYXNzU3RhcnQgKyAxIHx8ICFpbkNsYXNzKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwnICsgY1xuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGxlZnQgYSBjbGFzcyBvcGVuLlxuICAgICAgICAvLyBcIlt6LWFdXCIgaXMgdmFsaWQsIGVxdWl2YWxlbnQgdG8gXCJcXFt6LWFcXF1cIlxuICAgICAgICBpZiAoaW5DbGFzcykge1xuICAgICAgICAgIC8vIHNwbGl0IHdoZXJlIHRoZSBsYXN0IFsgd2FzLCBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZVxuICAgICAgICAgIC8vIGFuIGludmFsaWQgcmUuIGlmIHNvLCByZS13YWxrIHRoZSBjb250ZW50cyBvZiB0aGVcbiAgICAgICAgICAvLyB3b3VsZC1iZSBjbGFzcyB0byByZS10cmFuc2xhdGUgYW55IGNoYXJhY3RlcnMgdGhhdFxuICAgICAgICAgIC8vIHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXNcbiAgICAgICAgICAvLyBUT0RPOiBJdCB3b3VsZCBwcm9iYWJseSBiZSBmYXN0ZXIgdG8gZGV0ZXJtaW5lIHRoaXNcbiAgICAgICAgICAvLyB3aXRob3V0IGEgdHJ5L2NhdGNoIGFuZCBhIG5ldyBSZWdFeHAsIGJ1dCBpdCdzIHRyaWNreVxuICAgICAgICAgIC8vIHRvIGRvIHNhZmVseS4gIEZvciBub3csIHRoaXMgaXMgc2FmZSBhbmQgd29ya3MuXG4gICAgICAgICAgdmFyIGNzID0gcGF0dGVybi5zdWJzdHJpbmcoY2xhc3NTdGFydCArIDEsIGkpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFJlZ0V4cCgnWycgKyBjcyArICddJylcbiAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgLy8gbm90IGEgdmFsaWQgY2xhc3MhXG4gICAgICAgICAgICB2YXIgc3AgPSB0aGlzLnBhcnNlKGNzLCBTVUJQQVJTRSlcbiAgICAgICAgICAgIHJlID0gcmUuc3Vic3RyKDAsIHJlQ2xhc3NTdGFydCkgKyAnXFxcXFsnICsgc3BbMF0gKyAnXFxcXF0nXG4gICAgICAgICAgICBoYXNNYWdpYyA9IGhhc01hZ2ljIHx8IHNwWzFdXG4gICAgICAgICAgICBpbkNsYXNzID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluaXNoIHVwIHRoZSBjbGFzcy5cbiAgICAgICAgaGFzTWFnaWMgPSB0cnVlXG4gICAgICAgIGluQ2xhc3MgPSBmYWxzZVxuICAgICAgICByZSArPSBjXG4gICAgICBjb250aW51ZVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBzd2FsbG93IGFueSBzdGF0ZSBjaGFyIHRoYXQgd2Fzbid0IGNvbnN1bWVkXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcblxuICAgICAgICBpZiAoZXNjYXBpbmcpIHtcbiAgICAgICAgICAvLyBubyBuZWVkXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHJlU3BlY2lhbHNbY11cbiAgICAgICAgICAmJiAhKGMgPT09ICdeJyAmJiBpbkNsYXNzKSkge1xuICAgICAgICAgIHJlICs9ICdcXFxcJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmUgKz0gY1xuXG4gICAgfSAvLyBzd2l0Y2hcbiAgfSAvLyBmb3JcblxuICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgbGVmdCBhIGNsYXNzIG9wZW4uXG4gIC8vIFwiW2FiY1wiIGlzIHZhbGlkLCBlcXVpdmFsZW50IHRvIFwiXFxbYWJjXCJcbiAgaWYgKGluQ2xhc3MpIHtcbiAgICAvLyBzcGxpdCB3aGVyZSB0aGUgbGFzdCBbIHdhcywgYW5kIGVzY2FwZSBpdFxuICAgIC8vIHRoaXMgaXMgYSBodWdlIHBpdGEuICBXZSBub3cgaGF2ZSB0byByZS13YWxrXG4gICAgLy8gdGhlIGNvbnRlbnRzIG9mIHRoZSB3b3VsZC1iZSBjbGFzcyB0byByZS10cmFuc2xhdGVcbiAgICAvLyBhbnkgY2hhcmFjdGVycyB0aGF0IHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXNcbiAgICBjcyA9IHBhdHRlcm4uc3Vic3RyKGNsYXNzU3RhcnQgKyAxKVxuICAgIHNwID0gdGhpcy5wYXJzZShjcywgU1VCUEFSU0UpXG4gICAgcmUgPSByZS5zdWJzdHIoMCwgcmVDbGFzc1N0YXJ0KSArICdcXFxcWycgKyBzcFswXVxuICAgIGhhc01hZ2ljID0gaGFzTWFnaWMgfHwgc3BbMV1cbiAgfVxuXG4gIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBoYWQgYSArKCB0aGluZyBhdCB0aGUgKmVuZCpcbiAgLy8gb2YgdGhlIHBhdHRlcm4uXG4gIC8vIGVhY2ggcGF0dGVybiBsaXN0IHN0YWNrIGFkZHMgMyBjaGFycywgYW5kIHdlIG5lZWQgdG8gZ28gdGhyb3VnaFxuICAvLyBhbmQgZXNjYXBlIGFueSB8IGNoYXJzIHRoYXQgd2VyZSBwYXNzZWQgdGhyb3VnaCBhcy1pcyBmb3IgdGhlIHJlZ2V4cC5cbiAgLy8gR28gdGhyb3VnaCBhbmQgZXNjYXBlIHRoZW0sIHRha2luZyBjYXJlIG5vdCB0byBkb3VibGUtZXNjYXBlIGFueVxuICAvLyB8IGNoYXJzIHRoYXQgd2VyZSBhbHJlYWR5IGVzY2FwZWQuXG4gIGZvciAocGwgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpOyBwbDsgcGwgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpKSB7XG4gICAgdmFyIHRhaWwgPSByZS5zbGljZShwbC5yZVN0YXJ0ICsgcGwub3Blbi5sZW5ndGgpXG4gICAgdGhpcy5kZWJ1Zygnc2V0dGluZyB0YWlsJywgcmUsIHBsKVxuICAgIC8vIG1heWJlIHNvbWUgZXZlbiBudW1iZXIgb2YgXFwsIHRoZW4gbWF5YmUgMSBcXCwgZm9sbG93ZWQgYnkgYSB8XG4gICAgdGFpbCA9IHRhaWwucmVwbGFjZSgvKCg/OlxcXFx7Mn0pezAsNjR9KShcXFxcPylcXHwvZywgZnVuY3Rpb24gKF8sICQxLCAkMikge1xuICAgICAgaWYgKCEkMikge1xuICAgICAgICAvLyB0aGUgfCBpc24ndCBhbHJlYWR5IGVzY2FwZWQsIHNvIGVzY2FwZSBpdC5cbiAgICAgICAgJDIgPSAnXFxcXCdcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCB0byBlc2NhcGUgYWxsIHRob3NlIHNsYXNoZXMgKmFnYWluKiwgd2l0aG91dCBlc2NhcGluZyB0aGVcbiAgICAgIC8vIG9uZSB0aGF0IHdlIG5lZWQgZm9yIGVzY2FwaW5nIHRoZSB8IGNoYXJhY3Rlci4gIEFzIGl0IHdvcmtzIG91dCxcbiAgICAgIC8vIGVzY2FwaW5nIGFuIGV2ZW4gbnVtYmVyIG9mIHNsYXNoZXMgY2FuIGJlIGRvbmUgYnkgc2ltcGx5IHJlcGVhdGluZ1xuICAgICAgLy8gaXQgZXhhY3RseSBhZnRlciBpdHNlbGYuICBUaGF0J3Mgd2h5IHRoaXMgdHJpY2sgd29ya3MuXG4gICAgICAvL1xuICAgICAgLy8gSSBhbSBzb3JyeSB0aGF0IHlvdSBoYXZlIHRvIHNlZSB0aGlzLlxuICAgICAgcmV0dXJuICQxICsgJDEgKyAkMiArICd8J1xuICAgIH0pXG5cbiAgICB0aGlzLmRlYnVnKCd0YWlsPSVqXFxuICAgJXMnLCB0YWlsLCB0YWlsLCBwbCwgcmUpXG4gICAgdmFyIHQgPSBwbC50eXBlID09PSAnKicgPyBzdGFyXG4gICAgICA6IHBsLnR5cGUgPT09ICc/JyA/IHFtYXJrXG4gICAgICA6ICdcXFxcJyArIHBsLnR5cGVcblxuICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgIHJlID0gcmUuc2xpY2UoMCwgcGwucmVTdGFydCkgKyB0ICsgJ1xcXFwoJyArIHRhaWxcbiAgfVxuXG4gIC8vIGhhbmRsZSB0cmFpbGluZyB0aGluZ3MgdGhhdCBvbmx5IG1hdHRlciBhdCB0aGUgdmVyeSBlbmQuXG4gIGNsZWFyU3RhdGVDaGFyKClcbiAgaWYgKGVzY2FwaW5nKSB7XG4gICAgLy8gdHJhaWxpbmcgXFxcXFxuICAgIHJlICs9ICdcXFxcXFxcXCdcbiAgfVxuXG4gIC8vIG9ubHkgbmVlZCB0byBhcHBseSB0aGUgbm9kb3Qgc3RhcnQgaWYgdGhlIHJlIHN0YXJ0cyB3aXRoXG4gIC8vIHNvbWV0aGluZyB0aGF0IGNvdWxkIGNvbmNlaXZhYmx5IGNhcHR1cmUgYSBkb3RcbiAgdmFyIGFkZFBhdHRlcm5TdGFydCA9IGZhbHNlXG4gIHN3aXRjaCAocmUuY2hhckF0KDApKSB7XG4gICAgY2FzZSAnLic6XG4gICAgY2FzZSAnWyc6XG4gICAgY2FzZSAnKCc6IGFkZFBhdHRlcm5TdGFydCA9IHRydWVcbiAgfVxuXG4gIC8vIEhhY2sgdG8gd29yayBhcm91bmQgbGFjayBvZiBuZWdhdGl2ZSBsb29rYmVoaW5kIGluIEpTXG4gIC8vIEEgcGF0dGVybiBsaWtlOiAqLiEoeCkuISh5fHopIG5lZWRzIHRvIGVuc3VyZSB0aGF0IGEgbmFtZVxuICAvLyBsaWtlICdhLnh5ei55eicgZG9lc24ndCBtYXRjaC4gIFNvLCB0aGUgZmlyc3QgbmVnYXRpdmVcbiAgLy8gbG9va2FoZWFkLCBoYXMgdG8gbG9vayBBTEwgdGhlIHdheSBhaGVhZCwgdG8gdGhlIGVuZCBvZlxuICAvLyB0aGUgcGF0dGVybi5cbiAgZm9yICh2YXIgbiA9IG5lZ2F0aXZlTGlzdHMubGVuZ3RoIC0gMTsgbiA+IC0xOyBuLS0pIHtcbiAgICB2YXIgbmwgPSBuZWdhdGl2ZUxpc3RzW25dXG5cbiAgICB2YXIgbmxCZWZvcmUgPSByZS5zbGljZSgwLCBubC5yZVN0YXJ0KVxuICAgIHZhciBubEZpcnN0ID0gcmUuc2xpY2UobmwucmVTdGFydCwgbmwucmVFbmQgLSA4KVxuICAgIHZhciBubExhc3QgPSByZS5zbGljZShubC5yZUVuZCAtIDgsIG5sLnJlRW5kKVxuICAgIHZhciBubEFmdGVyID0gcmUuc2xpY2UobmwucmVFbmQpXG5cbiAgICBubExhc3QgKz0gbmxBZnRlclxuXG4gICAgLy8gSGFuZGxlIG5lc3RlZCBzdHVmZiBsaWtlICooKi5qc3whKCouanNvbikpLCB3aGVyZSBvcGVuIHBhcmVuc1xuICAgIC8vIG1lYW4gdGhhdCB3ZSBzaG91bGQgKm5vdCogaW5jbHVkZSB0aGUgKSBpbiB0aGUgYml0IHRoYXQgaXMgY29uc2lkZXJlZFxuICAgIC8vIFwiYWZ0ZXJcIiB0aGUgbmVnYXRlZCBzZWN0aW9uLlxuICAgIHZhciBvcGVuUGFyZW5zQmVmb3JlID0gbmxCZWZvcmUuc3BsaXQoJygnKS5sZW5ndGggLSAxXG4gICAgdmFyIGNsZWFuQWZ0ZXIgPSBubEFmdGVyXG4gICAgZm9yIChpID0gMDsgaSA8IG9wZW5QYXJlbnNCZWZvcmU7IGkrKykge1xuICAgICAgY2xlYW5BZnRlciA9IGNsZWFuQWZ0ZXIucmVwbGFjZSgvXFwpWysqP10/LywgJycpXG4gICAgfVxuICAgIG5sQWZ0ZXIgPSBjbGVhbkFmdGVyXG5cbiAgICB2YXIgZG9sbGFyID0gJydcbiAgICBpZiAobmxBZnRlciA9PT0gJycgJiYgaXNTdWIgIT09IFNVQlBBUlNFKSB7XG4gICAgICBkb2xsYXIgPSAnJCdcbiAgICB9XG4gICAgdmFyIG5ld1JlID0gbmxCZWZvcmUgKyBubEZpcnN0ICsgbmxBZnRlciArIGRvbGxhciArIG5sTGFzdFxuICAgIHJlID0gbmV3UmVcbiAgfVxuXG4gIC8vIGlmIHRoZSByZSBpcyBub3QgXCJcIiBhdCB0aGlzIHBvaW50LCB0aGVuIHdlIG5lZWQgdG8gbWFrZSBzdXJlXG4gIC8vIGl0IGRvZXNuJ3QgbWF0Y2ggYWdhaW5zdCBhbiBlbXB0eSBwYXRoIHBhcnQuXG4gIC8vIE90aGVyd2lzZSBhLyogd2lsbCBtYXRjaCBhLywgd2hpY2ggaXQgc2hvdWxkIG5vdC5cbiAgaWYgKHJlICE9PSAnJyAmJiBoYXNNYWdpYykge1xuICAgIHJlID0gJyg/PS4pJyArIHJlXG4gIH1cblxuICBpZiAoYWRkUGF0dGVyblN0YXJ0KSB7XG4gICAgcmUgPSBwYXR0ZXJuU3RhcnQgKyByZVxuICB9XG5cbiAgLy8gcGFyc2luZyBqdXN0IGEgcGllY2Ugb2YgYSBsYXJnZXIgcGF0dGVybi5cbiAgaWYgKGlzU3ViID09PSBTVUJQQVJTRSkge1xuICAgIHJldHVybiBbcmUsIGhhc01hZ2ljXVxuICB9XG5cbiAgLy8gc2tpcCB0aGUgcmVnZXhwIGZvciBub24tbWFnaWNhbCBwYXR0ZXJuc1xuICAvLyB1bmVzY2FwZSBhbnl0aGluZyBpbiBpdCwgdGhvdWdoLCBzbyB0aGF0IGl0J2xsIGJlXG4gIC8vIGFuIGV4YWN0IG1hdGNoIGFnYWluc3QgYSBmaWxlIGV0Yy5cbiAgaWYgKCFoYXNNYWdpYykge1xuICAgIHJldHVybiBnbG9iVW5lc2NhcGUocGF0dGVybilcbiAgfVxuXG4gIHZhciBmbGFncyA9IG9wdGlvbnMubm9jYXNlID8gJ2knIDogJydcbiAgdHJ5IHtcbiAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyByZSArICckJywgZmxhZ3MpXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgLy8gSWYgaXQgd2FzIGFuIGludmFsaWQgcmVndWxhciBleHByZXNzaW9uLCB0aGVuIGl0IGNhbid0IG1hdGNoXG4gICAgLy8gYW55dGhpbmcuICBUaGlzIHRyaWNrIGxvb2tzIGZvciBhIGNoYXJhY3RlciBhZnRlciB0aGUgZW5kIG9mXG4gICAgLy8gdGhlIHN0cmluZywgd2hpY2ggaXMgb2YgY291cnNlIGltcG9zc2libGUsIGV4Y2VwdCBpbiBtdWx0aS1saW5lXG4gICAgLy8gbW9kZSwgYnV0IGl0J3Mgbm90IGEgL20gcmVnZXguXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyQuJylcbiAgfVxuXG4gIHJlZ0V4cC5fZ2xvYiA9IHBhdHRlcm5cbiAgcmVnRXhwLl9zcmMgPSByZVxuXG4gIHJldHVybiByZWdFeHBcbn1cblxubWluaW1hdGNoLm1ha2VSZSA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMgfHwge30pLm1ha2VSZSgpXG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUubWFrZVJlID0gbWFrZVJlXG5mdW5jdGlvbiBtYWtlUmUgKCkge1xuICBpZiAodGhpcy5yZWdleHAgfHwgdGhpcy5yZWdleHAgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5yZWdleHBcblxuICAvLyBhdCB0aGlzIHBvaW50LCB0aGlzLnNldCBpcyBhIDJkIGFycmF5IG9mIHBhcnRpYWxcbiAgLy8gcGF0dGVybiBzdHJpbmdzLCBvciBcIioqXCIuXG4gIC8vXG4gIC8vIEl0J3MgYmV0dGVyIHRvIHVzZSAubWF0Y2goKS4gIFRoaXMgZnVuY3Rpb24gc2hvdWxkbid0XG4gIC8vIGJlIHVzZWQsIHJlYWxseSwgYnV0IGl0J3MgcHJldHR5IGNvbnZlbmllbnQgc29tZXRpbWVzLFxuICAvLyB3aGVuIHlvdSBqdXN0IHdhbnQgdG8gd29yayB3aXRoIGEgcmVnZXguXG4gIHZhciBzZXQgPSB0aGlzLnNldFxuXG4gIGlmICghc2V0Lmxlbmd0aCkge1xuICAgIHRoaXMucmVnZXhwID0gZmFsc2VcbiAgICByZXR1cm4gdGhpcy5yZWdleHBcbiAgfVxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIHZhciB0d29TdGFyID0gb3B0aW9ucy5ub2dsb2JzdGFyID8gc3RhclxuICAgIDogb3B0aW9ucy5kb3QgPyB0d29TdGFyRG90XG4gICAgOiB0d29TdGFyTm9Eb3RcbiAgdmFyIGZsYWdzID0gb3B0aW9ucy5ub2Nhc2UgPyAnaScgOiAnJ1xuXG4gIHZhciByZSA9IHNldC5tYXAoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAocCA9PT0gR0xPQlNUQVIpID8gdHdvU3RhclxuICAgICAgOiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKSA/IHJlZ0V4cEVzY2FwZShwKVxuICAgICAgOiBwLl9zcmNcbiAgICB9KS5qb2luKCdcXFxcXFwvJylcbiAgfSkuam9pbignfCcpXG5cbiAgLy8gbXVzdCBtYXRjaCBlbnRpcmUgcGF0dGVyblxuICAvLyBlbmRpbmcgaW4gYSAqIG9yICoqIHdpbGwgbWFrZSBpdCBsZXNzIHN0cmljdC5cbiAgcmUgPSAnXig/OicgKyByZSArICcpJCdcblxuICAvLyBjYW4gbWF0Y2ggYW55dGhpbmcsIGFzIGxvbmcgYXMgaXQncyBub3QgdGhpcy5cbiAgaWYgKHRoaXMubmVnYXRlKSByZSA9ICdeKD8hJyArIHJlICsgJykuKiQnXG5cbiAgdHJ5IHtcbiAgICB0aGlzLnJlZ2V4cCA9IG5ldyBSZWdFeHAocmUsIGZsYWdzKVxuICB9IGNhdGNoIChleCkge1xuICAgIHRoaXMucmVnZXhwID0gZmFsc2VcbiAgfVxuICByZXR1cm4gdGhpcy5yZWdleHBcbn1cblxubWluaW1hdGNoLm1hdGNoID0gZnVuY3Rpb24gKGxpc3QsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIG1tID0gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zKVxuICBsaXN0ID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gbW0ubWF0Y2goZilcbiAgfSlcbiAgaWYgKG1tLm9wdGlvbnMubm9udWxsICYmICFsaXN0Lmxlbmd0aCkge1xuICAgIGxpc3QucHVzaChwYXR0ZXJuKVxuICB9XG4gIHJldHVybiBsaXN0XG59XG5cbk1pbmltYXRjaC5wcm90b3R5cGUubWF0Y2ggPSBtYXRjaFxuZnVuY3Rpb24gbWF0Y2ggKGYsIHBhcnRpYWwpIHtcbiAgdGhpcy5kZWJ1ZygnbWF0Y2gnLCBmLCB0aGlzLnBhdHRlcm4pXG4gIC8vIHNob3J0LWNpcmN1aXQgaW4gdGhlIGNhc2Ugb2YgYnVzdGVkIHRoaW5ncy5cbiAgLy8gY29tbWVudHMsIGV0Yy5cbiAgaWYgKHRoaXMuY29tbWVudCkgcmV0dXJuIGZhbHNlXG4gIGlmICh0aGlzLmVtcHR5KSByZXR1cm4gZiA9PT0gJydcblxuICBpZiAoZiA9PT0gJy8nICYmIHBhcnRpYWwpIHJldHVybiB0cnVlXG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICAvLyB3aW5kb3dzOiBuZWVkIHRvIHVzZSAvLCBub3QgXFxcbiAgaWYgKHBhdGguc2VwICE9PSAnLycpIHtcbiAgICBmID0gZi5zcGxpdChwYXRoLnNlcCkuam9pbignLycpXG4gIH1cblxuICAvLyB0cmVhdCB0aGUgdGVzdCBwYXRoIGFzIGEgc2V0IG9mIHBhdGhwYXJ0cy5cbiAgZiA9IGYuc3BsaXQoc2xhc2hTcGxpdClcbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sICdzcGxpdCcsIGYpXG5cbiAgLy8ganVzdCBPTkUgb2YgdGhlIHBhdHRlcm4gc2V0cyBpbiB0aGlzLnNldCBuZWVkcyB0byBtYXRjaFxuICAvLyBpbiBvcmRlciBmb3IgaXQgdG8gYmUgdmFsaWQuICBJZiBuZWdhdGluZywgdGhlbiBqdXN0IG9uZVxuICAvLyBtYXRjaCBtZWFucyB0aGF0IHdlIGhhdmUgZmFpbGVkLlxuICAvLyBFaXRoZXIgd2F5LCByZXR1cm4gb24gdGhlIGZpcnN0IGhpdC5cblxuICB2YXIgc2V0ID0gdGhpcy5zZXRcbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sICdzZXQnLCBzZXQpXG5cbiAgLy8gRmluZCB0aGUgYmFzZW5hbWUgb2YgdGhlIHBhdGggYnkgbG9va2luZyBmb3IgdGhlIGxhc3Qgbm9uLWVtcHR5IHNlZ21lbnRcbiAgdmFyIGZpbGVuYW1lXG4gIHZhciBpXG4gIGZvciAoaSA9IGYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBmaWxlbmFtZSA9IGZbaV1cbiAgICBpZiAoZmlsZW5hbWUpIGJyZWFrXG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhdHRlcm4gPSBzZXRbaV1cbiAgICB2YXIgZmlsZSA9IGZcbiAgICBpZiAob3B0aW9ucy5tYXRjaEJhc2UgJiYgcGF0dGVybi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZpbGUgPSBbZmlsZW5hbWVdXG4gICAgfVxuICAgIHZhciBoaXQgPSB0aGlzLm1hdGNoT25lKGZpbGUsIHBhdHRlcm4sIHBhcnRpYWwpXG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKG9wdGlvbnMuZmxpcE5lZ2F0ZSkgcmV0dXJuIHRydWVcbiAgICAgIHJldHVybiAhdGhpcy5uZWdhdGVcbiAgICB9XG4gIH1cblxuICAvLyBkaWRuJ3QgZ2V0IGFueSBoaXRzLiAgdGhpcyBpcyBzdWNjZXNzIGlmIGl0J3MgYSBuZWdhdGl2ZVxuICAvLyBwYXR0ZXJuLCBmYWlsdXJlIG90aGVyd2lzZS5cbiAgaWYgKG9wdGlvbnMuZmxpcE5lZ2F0ZSkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB0aGlzLm5lZ2F0ZVxufVxuXG4vLyBzZXQgcGFydGlhbCB0byB0cnVlIHRvIHRlc3QgaWYsIGZvciBleGFtcGxlLFxuLy8gXCIvYS9iXCIgbWF0Y2hlcyB0aGUgc3RhcnQgb2YgXCIvKi9iLyovZFwiXG4vLyBQYXJ0aWFsIG1lYW5zLCBpZiB5b3UgcnVuIG91dCBvZiBmaWxlIGJlZm9yZSB5b3UgcnVuXG4vLyBvdXQgb2YgcGF0dGVybiwgdGhlbiB0aGF0J3MgZmluZSwgYXMgbG9uZyBhcyBhbGxcbi8vIHRoZSBwYXJ0cyBtYXRjaC5cbk1pbmltYXRjaC5wcm90b3R5cGUubWF0Y2hPbmUgPSBmdW5jdGlvbiAoZmlsZSwgcGF0dGVybiwgcGFydGlhbCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIHRoaXMuZGVidWcoJ21hdGNoT25lJyxcbiAgICB7ICd0aGlzJzogdGhpcywgZmlsZTogZmlsZSwgcGF0dGVybjogcGF0dGVybiB9KVxuXG4gIHRoaXMuZGVidWcoJ21hdGNoT25lJywgZmlsZS5sZW5ndGgsIHBhdHRlcm4ubGVuZ3RoKVxuXG4gIGZvciAodmFyIGZpID0gMCxcbiAgICAgIHBpID0gMCxcbiAgICAgIGZsID0gZmlsZS5sZW5ndGgsXG4gICAgICBwbCA9IHBhdHRlcm4ubGVuZ3RoXG4gICAgICA7IChmaSA8IGZsKSAmJiAocGkgPCBwbClcbiAgICAgIDsgZmkrKywgcGkrKykge1xuICAgIHRoaXMuZGVidWcoJ21hdGNoT25lIGxvb3AnKVxuICAgIHZhciBwID0gcGF0dGVybltwaV1cbiAgICB2YXIgZiA9IGZpbGVbZmldXG5cbiAgICB0aGlzLmRlYnVnKHBhdHRlcm4sIHAsIGYpXG5cbiAgICAvLyBzaG91bGQgYmUgaW1wb3NzaWJsZS5cbiAgICAvLyBzb21lIGludmFsaWQgcmVnZXhwIHN0dWZmIGluIHRoZSBzZXQuXG4gICAgaWYgKHAgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgIGlmIChwID09PSBHTE9CU1RBUikge1xuICAgICAgdGhpcy5kZWJ1ZygnR0xPQlNUQVInLCBbcGF0dGVybiwgcCwgZl0pXG5cbiAgICAgIC8vIFwiKipcIlxuICAgICAgLy8gYS8qKi9iLyoqL2Mgd291bGQgbWF0Y2ggdGhlIGZvbGxvd2luZzpcbiAgICAgIC8vIGEvYi94L3kvei9jXG4gICAgICAvLyBhL3gveS96L2IvY1xuICAgICAgLy8gYS9iL3gvYi94L2NcbiAgICAgIC8vIGEvYi9jXG4gICAgICAvLyBUbyBkbyB0aGlzLCB0YWtlIHRoZSByZXN0IG9mIHRoZSBwYXR0ZXJuIGFmdGVyXG4gICAgICAvLyB0aGUgKiosIGFuZCBzZWUgaWYgaXQgd291bGQgbWF0Y2ggdGhlIGZpbGUgcmVtYWluZGVyLlxuICAgICAgLy8gSWYgc28sIHJldHVybiBzdWNjZXNzLlxuICAgICAgLy8gSWYgbm90LCB0aGUgKiogXCJzd2FsbG93c1wiIGEgc2VnbWVudCwgYW5kIHRyeSBhZ2Fpbi5cbiAgICAgIC8vIFRoaXMgaXMgcmVjdXJzaXZlbHkgYXdmdWwuXG4gICAgICAvL1xuICAgICAgLy8gYS8qKi9iLyoqL2MgbWF0Y2hpbmcgYS9iL3gveS96L2NcbiAgICAgIC8vIC0gYSBtYXRjaGVzIGFcbiAgICAgIC8vIC0gZG91Ymxlc3RhclxuICAgICAgLy8gICAtIG1hdGNoT25lKGIveC95L3ovYywgYi8qKi9jKVxuICAgICAgLy8gICAgIC0gYiBtYXRjaGVzIGJcbiAgICAgIC8vICAgICAtIGRvdWJsZXN0YXJcbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeC95L3ovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoeS96L2MsIGMpIC0+IG5vXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKHovYywgYykgLT4gbm9cbiAgICAgIC8vICAgICAgIC0gbWF0Y2hPbmUoYywgYykgeWVzLCBoaXRcbiAgICAgIHZhciBmciA9IGZpXG4gICAgICB2YXIgcHIgPSBwaSArIDFcbiAgICAgIGlmIChwciA9PT0gcGwpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZygnKiogYXQgdGhlIGVuZCcpXG4gICAgICAgIC8vIGEgKiogYXQgdGhlIGVuZCB3aWxsIGp1c3Qgc3dhbGxvdyB0aGUgcmVzdC5cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VuZCBhIG1hdGNoLlxuICAgICAgICAvLyBob3dldmVyLCBpdCB3aWxsIG5vdCBzd2FsbG93IC8ueCwgdW5sZXNzXG4gICAgICAgIC8vIG9wdGlvbnMuZG90IGlzIHNldC5cbiAgICAgICAgLy8gLiBhbmQgLi4gYXJlICpuZXZlciogbWF0Y2hlZCBieSAqKiwgZm9yIGV4cGxvc2l2ZWx5XG4gICAgICAgIC8vIGV4cG9uZW50aWFsIHJlYXNvbnMuXG4gICAgICAgIGZvciAoOyBmaSA8IGZsOyBmaSsrKSB7XG4gICAgICAgICAgaWYgKGZpbGVbZmldID09PSAnLicgfHwgZmlsZVtmaV0gPT09ICcuLicgfHxcbiAgICAgICAgICAgICghb3B0aW9ucy5kb3QgJiYgZmlsZVtmaV0uY2hhckF0KDApID09PSAnLicpKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBvaywgbGV0J3Mgc2VlIGlmIHdlIGNhbiBzd2FsbG93IHdoYXRldmVyIHdlIGNhbi5cbiAgICAgIHdoaWxlIChmciA8IGZsKSB7XG4gICAgICAgIHZhciBzd2FsbG93ZWUgPSBmaWxlW2ZyXVxuXG4gICAgICAgIHRoaXMuZGVidWcoJ1xcbmdsb2JzdGFyIHdoaWxlJywgZmlsZSwgZnIsIHBhdHRlcm4sIHByLCBzd2FsbG93ZWUpXG5cbiAgICAgICAgLy8gWFhYIHJlbW92ZSB0aGlzIHNsaWNlLiAgSnVzdCBwYXNzIHRoZSBzdGFydCBpbmRleC5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2hPbmUoZmlsZS5zbGljZShmciksIHBhdHRlcm4uc2xpY2UocHIpLCBwYXJ0aWFsKSkge1xuICAgICAgICAgIHRoaXMuZGVidWcoJ2dsb2JzdGFyIGZvdW5kIG1hdGNoIScsIGZyLCBmbCwgc3dhbGxvd2VlKVxuICAgICAgICAgIC8vIGZvdW5kIGEgbWF0Y2guXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYW4ndCBzd2FsbG93IFwiLlwiIG9yIFwiLi5cIiBldmVyLlxuICAgICAgICAgIC8vIGNhbiBvbmx5IHN3YWxsb3cgXCIuZm9vXCIgd2hlbiBleHBsaWNpdGx5IGFza2VkLlxuICAgICAgICAgIGlmIChzd2FsbG93ZWUgPT09ICcuJyB8fCBzd2FsbG93ZWUgPT09ICcuLicgfHxcbiAgICAgICAgICAgICghb3B0aW9ucy5kb3QgJiYgc3dhbGxvd2VlLmNoYXJBdCgwKSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnZG90IGRldGVjdGVkIScsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwcilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gKiogc3dhbGxvd3MgYSBzZWdtZW50LCBhbmQgY29udGludWUuXG4gICAgICAgICAgdGhpcy5kZWJ1ZygnZ2xvYnN0YXIgc3dhbGxvdyBhIHNlZ21lbnQsIGFuZCBjb250aW51ZScpXG4gICAgICAgICAgZnIrK1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIG1hdGNoIHdhcyBmb3VuZC5cbiAgICAgIC8vIEhvd2V2ZXIsIGluIHBhcnRpYWwgbW9kZSwgd2UgY2FuJ3Qgc2F5IHRoaXMgaXMgbmVjZXNzYXJpbHkgb3Zlci5cbiAgICAgIC8vIElmIHRoZXJlJ3MgbW9yZSAqcGF0dGVybiogbGVmdCwgdGhlblxuICAgICAgaWYgKHBhcnRpYWwpIHtcbiAgICAgICAgLy8gcmFuIG91dCBvZiBmaWxlXG4gICAgICAgIHRoaXMuZGVidWcoJ1xcbj4+PiBubyBtYXRjaCwgcGFydGlhbD8nLCBmaWxlLCBmciwgcGF0dGVybiwgcHIpXG4gICAgICAgIGlmIChmciA9PT0gZmwpIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiAqKlxuICAgIC8vIG5vbi1tYWdpYyBwYXR0ZXJucyBqdXN0IGhhdmUgdG8gbWF0Y2ggZXhhY3RseVxuICAgIC8vIHBhdHRlcm5zIHdpdGggbWFnaWMgaGF2ZSBiZWVuIHR1cm5lZCBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIGhpdFxuICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChvcHRpb25zLm5vY2FzZSkge1xuICAgICAgICBoaXQgPSBmLnRvTG93ZXJDYXNlKCkgPT09IHAudG9Mb3dlckNhc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGl0ID0gZiA9PT0gcFxuICAgICAgfVxuICAgICAgdGhpcy5kZWJ1Zygnc3RyaW5nIG1hdGNoJywgcCwgZiwgaGl0KVxuICAgIH0gZWxzZSB7XG4gICAgICBoaXQgPSBmLm1hdGNoKHApXG4gICAgICB0aGlzLmRlYnVnKCdwYXR0ZXJuIG1hdGNoJywgcCwgZiwgaGl0KVxuICAgIH1cblxuICAgIGlmICghaGl0KSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIE5vdGU6IGVuZGluZyBpbiAvIG1lYW5zIHRoYXQgd2UnbGwgZ2V0IGEgZmluYWwgXCJcIlxuICAvLyBhdCB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLiAgVGhpcyBjYW4gb25seSBtYXRjaCBhXG4gIC8vIGNvcnJlc3BvbmRpbmcgXCJcIiBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAvLyBJZiB0aGUgZmlsZSBlbmRzIGluIC8sIHRoZW4gaXQgY2FuIG9ubHkgbWF0Y2ggYVxuICAvLyBhIHBhdHRlcm4gdGhhdCBlbmRzIGluIC8sIHVubGVzcyB0aGUgcGF0dGVybiBqdXN0XG4gIC8vIGRvZXNuJ3QgaGF2ZSBhbnkgbW9yZSBmb3IgaXQuIEJ1dCwgYS9iLyBzaG91bGQgKm5vdCpcbiAgLy8gbWF0Y2ggXCJhL2IvKlwiLCBldmVuIHRob3VnaCBcIlwiIG1hdGNoZXMgYWdhaW5zdCB0aGVcbiAgLy8gW14vXSo/IHBhdHRlcm4sIGV4Y2VwdCBpbiBwYXJ0aWFsIG1vZGUsIHdoZXJlIGl0IG1pZ2h0XG4gIC8vIHNpbXBseSBub3QgYmUgcmVhY2hlZCB5ZXQuXG4gIC8vIEhvd2V2ZXIsIGEvYi8gc2hvdWxkIHN0aWxsIHNhdGlzZnkgYS8qXG5cbiAgLy8gbm93IGVpdGhlciB3ZSBmZWxsIG9mZiB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuLCBvciB3ZSdyZSBkb25lLlxuICBpZiAoZmkgPT09IGZsICYmIHBpID09PSBwbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgcGF0dGVybiBhbmQgZmlsZW5hbWUgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAvLyBhbiBleGFjdCBoaXQhXG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChmaSA9PT0gZmwpIHtcbiAgICAvLyByYW4gb3V0IG9mIGZpbGUsIGJ1dCBzdGlsbCBoYWQgcGF0dGVybiBsZWZ0LlxuICAgIC8vIHRoaXMgaXMgb2sgaWYgd2UncmUgZG9pbmcgdGhlIG1hdGNoIGFzIHBhcnQgb2ZcbiAgICAvLyBhIGdsb2IgZnMgdHJhdmVyc2FsLlxuICAgIHJldHVybiBwYXJ0aWFsXG4gIH0gZWxzZSBpZiAocGkgPT09IHBsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBwYXR0ZXJuLCBzdGlsbCBoYXZlIGZpbGUgbGVmdC5cbiAgICAvLyB0aGlzIGlzIG9ubHkgYWNjZXB0YWJsZSBpZiB3ZSdyZSBvbiB0aGUgdmVyeSBsYXN0XG4gICAgLy8gZW1wdHkgc2VnbWVudCBvZiBhIGZpbGUgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgIC8vIGEvKiBzaG91bGQgbWF0Y2ggYS9iL1xuICAgIHZhciBlbXB0eUZpbGVFbmQgPSAoZmkgPT09IGZsIC0gMSkgJiYgKGZpbGVbZmldID09PSAnJylcbiAgICByZXR1cm4gZW1wdHlGaWxlRW5kXG4gIH1cblxuICAvLyBzaG91bGQgYmUgdW5yZWFjaGFibGUuXG4gIHRocm93IG5ldyBFcnJvcignd3RmPycpXG59XG5cbi8vIHJlcGxhY2Ugc3R1ZmYgbGlrZSBcXCogd2l0aCAqXG5mdW5jdGlvbiBnbG9iVW5lc2NhcGUgKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFxcXCguKS9nLCAnJDEnKVxufVxuXG5mdW5jdGlvbiByZWdFeHBFc2NhcGUgKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKVxufVxuIiwidmFyIGRpcnBhdGhzID0gcmVxdWlyZSgnLi9saWIvcGF0aHMnKTtcclxuXHJcbk9iamVjdC5hc3NpZ24oZXhwb3J0cywgZGlycGF0aHMpXHJcbmV4cG9ydHMucmVhZEZpbGVzID0gcmVxdWlyZSgnLi9saWIvcmVhZGZpbGVzJyk7XHJcbmV4cG9ydHMucmVhZEZpbGVzU3RyZWFtID0gcmVxdWlyZSgnLi9saWIvcmVhZGZpbGVzc3RyZWFtJyk7XHJcbiIsIu+7v3ZhciBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZXhwb3J0cy5wcm9taXNlRmlsZXMgPSBmdW5jdGlvbiBwcm9taXNlRmlsZXMoZGlyLCB0eXBlLCBvcHRpb25zKXtcbiAgdHlwZSA9IHR5cGUgfHwgJ2ZpbGUnXG5cbiAgdmFyIHByb2Nlc3NvciA9IGZ1bmN0aW9uKHJlcyxyZWope1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKGVycixkYXRhKXtcbiAgICAgIGlmKGVycilyZXR1cm4gcmVqKGVycilcbiAgICAgIHJlcyhkYXRhKVxuICAgIH1cbiAgICBleHBvcnRzLmZpbGVzKGRpcix0eXBlLGNiLG9wdGlvbnMpXG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKHByb2Nlc3Nvcilcbn1cblxuLyoqXG4gKiBmaW5kIGFsbCBmaWxlcyBvciBzdWJkaXJzIChyZWN1cnNpdmUpIGFuZCBwYXNzIHRvIGNhbGxiYWNrIGZuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpciBkaXJlY3RvcnkgaW4gd2hpY2ggdG8gcmVjdXJzZSBmaWxlcyBvciBzdWJkaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSB0eXBlIG9mIGRpciBlbnRyeSB0byByZWN1cnNlICgnZmlsZScsICdkaXInLCBvciAnYWxsJywgZGVmYXVsdHMgdG8gJ2ZpbGUnKVxuICogQHBhcmFtIHtmdW5jdGlvbihlcnJvciwgPEFycmF5LjxzdHJpbmc+KX0gY2FsbGJhY2sgZm4gdG8gY2FsbCB3aGVuIGRvbmVcbiAqIEBleGFtcGxlXG4gKiBkaXIuZmlsZXMoX19kaXJuYW1lLCBmdW5jdGlvbihlcnIsIGZpbGVzKSB7XG4gKiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAqICAgICAgY29uc29sZS5sb2coJ2ZpbGVzOicsIGZpbGVzKTtcbiAqICB9KTtcbiAqL1xuZXhwb3J0cy5maWxlcyA9IGZ1bmN0aW9uIGZpbGVzKGRpciwgdHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIG9mVHlwZSA9IHR5cGVvZiB0eXBlXG4gIGlmKG9mVHlwZSA9PSAnb2JqZWN0Jyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgdHlwZVxuICAgIHR5cGUgPSAnZmlsZSdcbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uKCl7fVxuICB9ZWxzZSBpZiAob2ZUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIC8vaWdub3JlVHlwZSA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gdHlwZTtcbiAgICB0eXBlID0gJ2ZpbGUnO1xuICB9XG4gIFxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBwZW5kaW5nLFxuICAgICAgcmVzdWx0cyA9IHtcbiAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgZGlyczogW11cbiAgICAgIH07XG5cbiAgdmFyIGRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0eXBlPT09J2NvbWJpbmUnKXtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbGVzLmNvbmNhdChyZXN1bHRzLmRpcnMpXG4gICAgfSBlbHNlIGlmICghdHlwZSB8fCBvcHRpb25zLmlnbm9yZVR5cGUgfHwgWydhbGwnLCdjb21iaW5lJ10uaW5kZXhPZih0eXBlKT49MCkge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0c1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0c1t0eXBlICsgJ3MnXVxuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuc3luYylyZXR1cm47XG5cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICB9O1xuXG4gIHZhciBnZXRTdGF0SGFuZGxlciA9IGZ1bmN0aW9uKHN0YXRQYXRoLCBuYW1lLCBsc3RhdENhbGxlZCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlcnIsIHN0YXQpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgaWYgKCFsc3RhdENhbGxlZCkge1xuICAgICAgICAgIHJldHVybiBmcy5sc3RhdChzdGF0UGF0aCwgZ2V0U3RhdEhhbmRsZXIoc3RhdFBhdGgsIG5hbWUsIHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHB1c2hWYWwgPSBvcHRpb25zLnNob3J0TmFtZSA/IG5hbWUgOiBzdGF0UGF0aFxuXG4gICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkgJiYgc3RhdC5tb2RlICE9PSAxNzExNSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgcmVzdWx0cy5kaXJzLnB1c2gocHVzaFZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5yZWN1cnNpdmU9PW51bGwgfHwgb3B0aW9ucy5yZWN1cnNpdmUpIHtcbiAgICAgICAgICB2YXIgc3VibG9vcCA9IGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0eXBlID09PSAnY29tYmluZScpe1xuICAgICAgICAgICAgICByZXN1bHRzLmZpbGVzID0gcmVzdWx0cy5maWxlcy5jb25jYXQocmVzKTtcbiAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgICAgICAgICByZXN1bHRzLmZpbGVzID0gcmVzdWx0cy5maWxlcy5jb25jYXQocmVzLmZpbGVzKTtcbiAgICAgICAgICAgICAgcmVzdWx0cy5kaXJzID0gcmVzdWx0cy5kaXJzLmNvbmNhdChyZXMuZGlycyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuZmlsZXMgPSByZXN1bHRzLmZpbGVzLmNvbmNhdChyZXMuZmlsZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLmRpcnMgPSByZXN1bHRzLmRpcnMuY29uY2F0KHJlcy5kaXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEtLXBlbmRpbmcpe1xuICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKVxuICAgICAgICAgIG5ld09wdGlvbnMuaWdub3JlVHlwZSA9IHRydWVcbiAgICAgICAgICB2YXIgbW9yZVJlc3VsdHMgPSBmaWxlcyhzdGF0UGF0aCwgdHlwZSwgc3VibG9vcCwgbmV3T3B0aW9ucyk7XG5cbiAgICAgICAgICBpZihvcHRpb25zLnN5bmMpe1xuICAgICAgICAgICAgc3VibG9vcChudWxsLCBtb3JlUmVzdWx0cylcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmICghLS1wZW5kaW5nKXtcbiAgICAgICAgICBkb25lKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICdkaXInKSB7XG4gICAgICAgICAgcmVzdWx0cy5maWxlcy5wdXNoKHB1c2hWYWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3VsZCBiZSB0aGUgbGFzdCBzdGF0ZW1lbnQgaW4gc3RhdEhhbmRsZXJcbiAgICAgICAgaWYgKCEtLXBlbmRpbmcpe1xuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmRpciA9IEJ1ZmZlci5mcm9tKGRpcik7XG5cbiAgY29uc3Qgb25EaXJSZWFkID0gZnVuY3Rpb24oZXJyLCBsaXN0KSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgXG4gICAgcGVuZGluZyA9IGxpc3QubGVuZ3RoO1xuICAgIGlmICghcGVuZGluZykgcmV0dXJuIGRvbmUoKTtcbiAgICBcbiAgICBmb3IgKHZhciBmaWxlLCBpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgZm5hbWUgPSBsaXN0W2ldLnRvU3RyaW5nKCk7XG4gICAgICBmaWxlID0gcGF0aC5qb2luKGRpciwgZm5hbWUpO1xuICAgICAgdmFyIGJ1ZmZpbGUgPSBCdWZmZXIuY29uY2F0KFtidWZkaXIsIEJ1ZmZlci5mcm9tKHBhdGguc2VwKSwgbGlzdFtpXV0pO1xuXG4gICAgICBpZihvcHRpb25zLnN5bmMpe1xuICAgICAgICB2YXIgcmVzID0gZnMuc3RhdFN5bmMoYnVmZmlsZSk7XG4gICAgICAgIGdldFN0YXRIYW5kbGVyKGZpbGUsZm5hbWUpKG51bGwsIHJlcylcbiAgICAgIH1lbHNle1xuICAgICAgICBmcy5zdGF0KGJ1ZmZpbGUsIGdldFN0YXRIYW5kbGVyKGZpbGUsZm5hbWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgY29uc3Qgb25TdGF0ID0gZnVuY3Rpb24oZXJyLCBzdGF0KSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgaWYgKHN0YXQgJiYgc3RhdC5tb2RlID09PSAxNzExNSkgcmV0dXJuIGRvbmUoKTtcblxuICAgIGlmKG9wdGlvbnMuc3luYyl7XG4gICAgICBjb25zdCBsaXN0ID0gZnMucmVhZGRpclN5bmMoYnVmZGlyLCB7ZW5jb2Rpbmc6ICdidWZmZXInfSlcbiAgICAgIHJldHVybiBvbkRpclJlYWQobnVsbCwgbGlzdClcbiAgICB9ZWxzZXtcbiAgICAgIGZzLnJlYWRkaXIoYnVmZGlyLCB7ZW5jb2Rpbmc6ICdidWZmZXInfSwgb25EaXJSZWFkKVxuICAgIH1cbiAgfVxuXG4gIGlmKG9wdGlvbnMuc3luYyl7XG4gICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGJ1ZmRpcik7XG4gICAgcmV0dXJuIG9uU3RhdChudWxsLCBzdGF0KVxuICB9ZWxzZXtcbiAgICBmcy5zdGF0KGJ1ZmRpciwgb25TdGF0KTtcbiAgfVxufTtcblxuXG4vKipcbiAqIGZpbmQgYWxsIGZpbGVzIGFuZCBzdWJkaXJzIGluICBhIGRpcmVjdG9yeSAocmVjdXJzaXZlKSBhbmQgcGFzcyB0aGVtIHRvIGNhbGxiYWNrIGZuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpciBkaXJlY3RvcnkgaW4gd2hpY2ggdG8gcmVjdXJzZSBmaWxlcyBvciBzdWJkaXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbWJpbmUgd2hldGhlciB0byBjb21iaW5lIGJvdGggc3ViZGlycyBhbmQgZmlsZXBhdGhzIGludG8gb25lIGFycmF5IChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtmdW5jdGlvbihlcnJvciwgT2JqZWN0Ljw8QXJyYXkuPHN0cmluZz4sIEFycmF5LjxzdHJpbmc+Pil9IGNhbGxiYWNrIGZuIHRvIGNhbGwgd2hlbiBkb25lXG4gKiBAZXhhbXBsZVxuICogZGlyLnBhdGhzKF9fZGlybmFtZSwgZnVuY3Rpb24gKGVyciwgcGF0aHMpIHtcbiAqICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gKiAgICAgY29uc29sZS5sb2coJ2ZpbGVzOicsIHBhdGhzLmZpbGVzKTtcbiAqICAgICBjb25zb2xlLmxvZygnc3ViZGlyczonLCBwYXRocy5kaXJzKTtcbiAqIH0pO1xuICogZGlyLnBhdGhzKF9fZGlybmFtZSwgdHJ1ZSwgZnVuY3Rpb24gKGVyciwgcGF0aHMpIHtcbiAqICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICogICAgICBjb25zb2xlLmxvZygncGF0aHM6JywgcGF0aHMpO1xuICogfSk7XG4gKi9cbmV4cG9ydHMucGF0aHMgPSBmdW5jdGlvbiBwYXRocyhkaXIsIGNvbWJpbmUsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgdHlwZTtcblxuICAgIGlmICh0eXBlb2YgY29tYmluZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IGNvbWJpbmU7XG4gICAgICAgIGNvbWJpbmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBvcnRzLmZpbGVzKGRpciwgJ2FsbCcsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgaWYgKGNvbWJpbmUpIHtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cy5maWxlcy5jb25jYXQocmVzdWx0cy5kaXJzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG4vKipcbiAqIGZpbmQgYWxsIHN1YmRpcnMgKHJlY3Vyc2l2ZSkgb2YgYSBkaXJlY3RvcnkgYW5kIHBhc3MgdGhlbSB0byBjYWxsYmFjayBmblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgZGlyZWN0b3J5IGluIHdoaWNoIHRvIGZpbmQgc3ViZGlyc1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgdHlwZSBvZiBkaXIgZW50cnkgdG8gcmVjdXJzZSAoJ2ZpbGUnIG9yICdkaXInLCBkZWZhdWx0cyB0byAnZmlsZScpXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGVycm9yLCA8QXJyYXkuPHN0cmluZz4pfSBjYWxsYmFjayBmbiB0byBjYWxsIHdoZW4gZG9uZVxuICogQGV4YW1wbGVcbiAqIGRpci5zdWJkaXJzKF9fZGlybmFtZSwgZnVuY3Rpb24gKGVyciwgcGF0aHMpIHtcbiAqICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICogICAgICBjb25zb2xlLmxvZygnZmlsZXM6JywgcGF0aHMuZmlsZXMpO1xuICogICAgICBjb25zb2xlLmxvZygnc3ViZGlyczonLCBwYXRocy5kaXJzKTtcbiAqIH0pO1xuICovXG5leHBvcnRzLnN1YmRpcnMgPSBmdW5jdGlvbiBzdWJkaXJzKGRpciwgY2FsbGJhY2ssIHR5cGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBjb25zdCBpQ2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHN1YmRpcnMpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcblxuICAgIGlmKHR5cGU9PSdjb21iaW5lJyl7XG4gICAgICBzdWJkaXJzID0gc3ViZGlycy5maWxlcy5jb25jYXQoc3ViZGlycy5kaXJzKVxuICAgIH1cbiAgICBcbiAgICBpZihvcHRpb25zLnN5bmMpcmV0dXJuIHN1YmRpcnNcblxuICAgIGNhbGxiYWNrKG51bGwsIHN1YmRpcnMpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gZXhwb3J0cy5maWxlcyhkaXIsICdkaXInLCBpQ2FsbGJhY2ssIG9wdGlvbnMpXG5cbiAgaWYob3B0aW9ucyAmJiBvcHRpb25zLnN5bmMpe1xuICAgIHJldHVybiBpQ2FsbGJhY2sobnVsbCxyZXMpXG4gIH1cbn07XG4iLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8qKlxuICogbWVyZ2UgdHdvIG9iamVjdHMgYnkgZXh0ZW5kaW5nIHRhcmdldCBvYmplY3Qgd2l0aCBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gdGFyZ2V0IG9iamVjdCB0byBtZXJnZVxuICogQHBhcmFtIHNvdXJjZSBvYmplY3QgdG8gbWVyZ2VcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW21vZGlmeV0gd2hldGhlciB0byBtb2RpZnkgdGhlIHRhcmdldFxuICogQHJldHVybnMge09iamVjdH0gZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSwgbW9kaWZ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRhcmdldCA/IG1vZGlmeSA/IHRhcmdldCA6IGV4dGVuZCh7fSwgdGFyZ2V0LCB0cnVlKSA6IHt9O1xuICAgIGlmICghc291cmNlKSByZXR1cm4gcmVzdWx0O1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBkZXRlcm1pbmUgaWYgYSBzdHJpbmcgaXMgY29udGFpbmVkIHdpdGhpbiBhbiBhcnJheSBvciBtYXRjaGVzIGEgcmVndWxhciBleHByZXNzaW9uXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIG1hdGNoXG4gKiBAcGFyYW0gICB7QXJyYXl8UmVnZXh9IG1hdGNoIGFycmF5IG9yIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGVyZSBpcyBhIG1hdGNoXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoc3RyLCBtYXRjaCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkgcmV0dXJuIG1hdGNoLmluZGV4T2Yoc3RyKSA+IC0xO1xuICAgIHJldHVybiBtYXRjaC50ZXN0KHN0cik7XG59XG5cbi8qKlxuICogcmVhZCBmaWxlcyBhbmQgY2FsbCBhIGZ1bmN0aW9uIHdpdGggdGhlIGNvbnRlbnRzIG9mIGVhY2ggZmlsZVxuICogQHBhcmFtICB7U3RyaW5nfSBkaXIgcGF0aCBvZiBkaXIgY29udGFpbmluZyB0aGUgZmlsZXMgdG8gYmUgcmVhZFxuICogQHBhcmFtICB7U3RyaW5nfSBlbmNvZGluZyBmaWxlIGVuY29kaW5nIChkZWZhdWx0IGlzICd1dGY4JylcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBvcHRpb25zIGhhc2ggZm9yIGVuY29kaW5nLCByZWN1cnNpdmUsIGFuZCBtYXRjaC9leGNsdWRlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbihlcnJvciwgc3RyaW5nKX0gY2FsbGJhY2sgIGNhbGxiYWNrIGZvciBlYWNoIGZpbGVzIGNvbnRlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9uKGVycm9yKX0gICBjb21wbGV0ZSAgZm4gdG8gY2FsbCB3aGVuIGZpbmlzaGVkXG4gKi9cbmZ1bmN0aW9uIHJlYWRGaWxlcyhkaXIsIG9wdGlvbnMsIGNhbGxiYWNrLCBjb21wbGV0ZSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb21wbGV0ZSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHtcbiAgICAgICAgZW5jb2Rpbmc6IG9wdGlvbnNcbiAgICB9O1xuICAgIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICByZWN1cnNpdmU6IHRydWUsXG4gICAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICAgIGRvbmVPbkVycjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHZhciBmaWxlcyA9IFtdO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbXBsZXRlKGVycik7XG4gICAgICAgICAgICBjb21wbGV0ZShudWxsLCBmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnMucmVhZGRpcihkaXIsIGZ1bmN0aW9uKGVyciwgbGlzdCkge1xuICAgICAgICBpZiAoZXJyKSDCoHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFQUNDRVMnKSByZXR1cm4gZG9uZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBpZiAob3B0aW9ucy5yZXZlcnNlID09PSB0cnVlIHx8XG4gICAgICAgICAgICAodHlwZW9mIG9wdGlvbnMuc29ydCA9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICgvcmV2ZXJzZXxkZXNjL2kpLnRlc3Qob3B0aW9ucy5zb3J0KSkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LnJldmVyc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSBsaXN0ID0gbGlzdC5zb3J0KCk7XG5cbiAgICAgICAgKGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBsaXN0W2krK107XG4gICAgICAgICAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm4gZG9uZShudWxsLCBmaWxlcyk7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IHBhdGguam9pbihkaXIsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIGZzLnN0YXQoZmlsZSwgZnVuY3Rpb24oZXJyLCBzdGF0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tYXRjaERpciAmJiAhbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5tYXRjaERpcikpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlRGlyICYmIG1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMuZXhjbHVkZURpcikpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkRmlsZXMoZmlsZSwgb3B0aW9ucywgY2FsbGJhY2ssIGZ1bmN0aW9uKGVyciwgc2ZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciAmJiBvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmNvbmNhdChzZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdCAmJiBzdGF0LmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1hdGNoICYmICFtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLm1hdGNoKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXhjbHVkZSAmJiBtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLmV4Y2x1ZGUpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWx0ZXIgJiYgIW9wdGlvbnMuZmlsdGVyKGZpbGVuYW1lKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvcnROYW1lKSBmaWxlcy5wdXNoKGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZShmaWxlLCBvcHRpb25zLmVuY29kaW5nLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFQUNDRVMnKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPiAzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3J0TmFtZSkgY2FsbGJhY2sobnVsbCwgZGF0YSwgZmlsZW5hbWUsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgZGF0YSwgZmlsZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhudWxsLCBkYXRhLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG5cbiAgICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVhZEZpbGVzO1xuIiwidmFyIGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICBtbSA9IHJlcXVpcmUoJ21pbmltYXRjaCcpLFxuICAgIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8qKlxuICogbWVyZ2UgdHdvIG9iamVjdHMgYnkgZXh0ZW5kaW5nIHRhcmdldCBvYmplY3Qgd2l0aCBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gdGFyZ2V0IG9iamVjdCB0byBtZXJnZVxuICogQHBhcmFtIHNvdXJjZSBvYmplY3QgdG8gbWVyZ2VcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW21vZGlmeV0gd2hldGhlciB0byBtb2RpZnkgdGhlIHRhcmdldFxuICogQHJldHVybnMge09iamVjdH0gZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSwgbW9kaWZ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRhcmdldCA/IG1vZGlmeSA/IHRhcmdldCA6IGV4dGVuZCh7fSwgdGFyZ2V0LCB0cnVlKSA6IHt9O1xuICAgIGlmICghc291cmNlKSByZXR1cm4gcmVzdWx0O1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBkZXRlcm1pbmUgaWYgYSBzdHJpbmcgaXMgY29udGFpbmVkIHdpdGhpbiBhbiBhcnJheSBvciBtYXRjaGVzIGEgcmVndWxhciBleHByZXNzaW9uXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBzdHIgc3RyaW5nIHRvIG1hdGNoXG4gKiBAcGFyYW0gICB7QXJyYXl8UmVnZXh9IG1hdGNoIGFycmF5IG9yIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gd2hldGhlciB0aGVyZSBpcyBhIG1hdGNoXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoc3RyLCBtYXRjaCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkge1xuICAgICAgICB2YXIgbCA9IG1hdGNoLmxlbmd0aDtcbiAgICAgICAgZm9yKCB2YXIgcz0wOyBzIDwgbDsgcysrKSB7XG4gICAgICAgICAgICBpZiAoIG1tKHN0cixtYXRjaFtzXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaC50ZXN0KHN0cik7XG59XG5cbi8qKlxuICogcmVhZCBmaWxlcyBhbmQgY2FsbCBhIGZ1bmN0aW9uIHdpdGggdGhlIGNvbnRlbnRzIG9mIGVhY2ggZmlsZVxuICogQHBhcmFtICB7U3RyaW5nfSBkaXIgcGF0aCBvZiBkaXIgY29udGFpbmluZyB0aGUgZmlsZXMgdG8gYmUgcmVhZFxuICogQHBhcmFtICB7U3RyaW5nfSBlbmNvZGluZyBmaWxlIGVuY29kaW5nIChkZWZhdWx0IGlzICd1dGY4JylcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBvcHRpb25zIGhhc2ggZm9yIGVuY29kaW5nLCByZWN1cnNpdmUsIGFuZCBtYXRjaC9leGNsdWRlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbihlcnJvciwgc3RyaW5nKX0gY2FsbGJhY2sgIGNhbGxiYWNrIGZvciBlYWNoIGZpbGVzIGNvbnRlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9uKGVycm9yKX0gICBjb21wbGV0ZSAgZm4gdG8gY2FsbCB3aGVuIGZpbmlzaGVkXG4gKi9cbmZ1bmN0aW9uIHJlYWRGaWxlc1N0cmVhbShkaXIsIG9wdGlvbnMsIGNhbGxiYWNrLCBjb21wbGV0ZSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb21wbGV0ZSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHtcbiAgICAgICAgZW5jb2Rpbmc6IG9wdGlvbnNcbiAgICB9O1xuICAgIG9wdGlvbnMgPSBleHRlbmQoe1xuICAgICAgICByZWN1cnNpdmU6IHRydWUsXG4gICAgICAgIGVuY29kaW5nOiAndXRmOCcsXG4gICAgICAgIGRvbmVPbkVycjogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHZhciBmaWxlcyA9IFtdO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbXBsZXRlKGVycik7XG4gICAgICAgICAgICBjb21wbGV0ZShudWxsLCBmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnMucmVhZGRpcihkaXIsIGZ1bmN0aW9uKGVyciwgbGlzdCkge1xuICAgICAgICBpZiAoZXJyKSDCoHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFQUNDRVMnKSByZXR1cm4gZG9uZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBpZiAob3B0aW9ucy5yZXZlcnNlID09PSB0cnVlIHx8XG4gICAgICAgICAgICAodHlwZW9mIG9wdGlvbnMuc29ydCA9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICgvcmV2ZXJzZXxkZXNjL2kpLnRlc3Qob3B0aW9ucy5zb3J0KSkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LnJldmVyc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSBsaXN0ID0gbGlzdC5zb3J0KCk7XG5cbiAgICAgICAgKGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBsaXN0W2krK107XG4gICAgICAgICAgICBpZiAoIWZpbGVuYW1lKSByZXR1cm4gZG9uZShudWxsLCBmaWxlcyk7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IHBhdGguam9pbihkaXIsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIGZzLnN0YXQoZmlsZSwgZnVuY3Rpb24oZXJyLCBzdGF0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tYXRjaERpciAmJiAhbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5tYXRjaERpcikpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5leGNsdWRlRGlyICYmIG1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMuZXhjbHVkZURpcikpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkRmlsZXNTdHJlYW0oZmlsZSwgb3B0aW9ucywgY2FsbGJhY2ssIGZ1bmN0aW9uKGVyciwgc2ZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciAmJiBvcHRpb25zLmRvbmVPbkVyciA9PT0gdHJ1ZSkgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IGZpbGVzLmNvbmNhdChzZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdCAmJiBzdGF0LmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1hdGNoICYmICFtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLm1hdGNoKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXhjbHVkZSAmJiBtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLmV4Y2x1ZGUpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWx0ZXIgJiYgIW9wdGlvbnMuZmlsdGVyKGZpbGVuYW1lKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvcnROYW1lKSBmaWxlcy5wdXNoKGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW5jb2RpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS5zZXRFbmNvZGluZyhvcHRpb25zLmVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJyxmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCA+IDMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG9ydE5hbWUpIGNhbGxiYWNrKG51bGwsIHN0cmVhbSwgZmlsZW5hbWUsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhudWxsLCBzdHJlYW0sIGZpbGUsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhudWxsLCBzdHJlYW0sIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcblxuICAgIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSByZWFkRmlsZXNTdHJlYW07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIGxpbmVzOiAxMixcclxuICAgIGxlbmd0aDogNyxcclxuICAgIHdpZHRoOiA1LFxyXG4gICAgcmFkaXVzOiAxMCxcclxuICAgIHNjYWxlOiAxLjAsXHJcbiAgICBjb3JuZXJzOiAxLFxyXG4gICAgY29sb3I6ICcjMDAwJyxcclxuICAgIGZhZGVDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGFuaW1hdGlvbjogJ3NwaW5uZXItbGluZS1mYWRlLWRlZmF1bHQnLFxyXG4gICAgcm90YXRlOiAwLFxyXG4gICAgZGlyZWN0aW9uOiAxLFxyXG4gICAgc3BlZWQ6IDEsXHJcbiAgICB6SW5kZXg6IDJlOSxcclxuICAgIGNsYXNzTmFtZTogJ3NwaW5uZXInLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgc2hhZG93OiAnMCAwIDFweCB0cmFuc3BhcmVudCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxufTtcclxudmFyIFNwaW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcGlubmVyKG9wdHMpIHtcclxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMub3B0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0cyksIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBzcGlubmVyIHRvIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudC4gSWYgdGhpcyBpbnN0YW5jZSBpcyBhbHJlYWR5XHJcbiAgICAgKiBzcGlubmluZywgaXQgaXMgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gaXRzIHByZXZpb3VzIHRhcmdldCBieSBjYWxsaW5nXHJcbiAgICAgKiBzdG9wKCkgaW50ZXJuYWxseS5cclxuICAgICAqL1xyXG4gICAgU3Bpbm5lci5wcm90b3R5cGUuc3BpbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSB0aGlzLm9wdHMuY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3Byb2dyZXNzYmFyJyk7XHJcbiAgICAgICAgY3NzKHRoaXMuZWwsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0cy5wb3NpdGlvbixcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHpJbmRleDogdGhpcy5vcHRzLnpJbmRleCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRzLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5vcHRzLnRvcCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5vcHRzLnNjYWxlICsgXCIpXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldC5maXJzdENoaWxkIHx8IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcmF3TGluZXModGhpcy5lbCwgdGhpcy5vcHRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIGFuZCByZW1vdmVzIHRoZSBTcGlubmVyLlxyXG4gICAgICogU3RvcHBlZCBzcGlubmVycyBtYXkgYmUgcmV1c2VkIGJ5IGNhbGxpbmcgc3BpbigpIGFnYWluLlxyXG4gICAgICovXHJcbiAgICBTcGlubmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0ZUlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNwaW5uZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFNwaW5uZXIgfTtcclxuLyoqXHJcbiAqIFNldHMgbXVsdGlwbGUgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3NzKGVsLCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xyXG4gICAgICAgIGVsLnN0eWxlW3Byb3BdID0gcHJvcHNbcHJvcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGxpbmUgY29sb3IgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFycmF5LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29sb3IoY29sb3IsIGlkeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJyA/IGNvbG9yIDogY29sb3JbaWR4ICUgY29sb3IubGVuZ3RoXTtcclxufVxyXG4vKipcclxuICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgZHJhd3MgdGhlIGluZGl2aWR1YWwgbGluZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3TGluZXMoZWwsIG9wdHMpIHtcclxuICAgIHZhciBib3JkZXJSYWRpdXMgPSAoTWF0aC5yb3VuZChvcHRzLmNvcm5lcnMgKiBvcHRzLndpZHRoICogNTAwKSAvIDEwMDApICsgJ3B4JztcclxuICAgIHZhciBzaGFkb3cgPSAnbm9uZSc7XHJcbiAgICBpZiAob3B0cy5zaGFkb3cgPT09IHRydWUpIHtcclxuICAgICAgICBzaGFkb3cgPSAnMCAycHggNHB4ICMwMDAnOyAvLyBkZWZhdWx0IHNoYWRvd1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG9wdHMuc2hhZG93ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHNoYWRvdyA9IG9wdHMuc2hhZG93O1xyXG4gICAgfVxyXG4gICAgdmFyIHNoYWRvd3MgPSBwYXJzZUJveFNoYWRvdyhzaGFkb3cpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLmxpbmVzOyBpKyspIHtcclxuICAgICAgICB2YXIgZGVncmVlcyA9IH5+KDM2MCAvIG9wdHMubGluZXMgKiBpICsgb3B0cy5yb3RhdGUpO1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kTGluZSA9IGNzcyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAtb3B0cy53aWR0aCAvIDIgKyBcInB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAob3B0cy5sZW5ndGggKyBvcHRzLndpZHRoKSArICdweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogb3B0cy53aWR0aCArICdweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdldENvbG9yKG9wdHMuZmFkZUNvbG9yLCBpKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKFwiICsgZGVncmVlcyArIFwiZGVnKSB0cmFuc2xhdGVYKFwiICsgb3B0cy5yYWRpdXMgKyBcInB4KVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBkZWxheSA9IGkgKiBvcHRzLmRpcmVjdGlvbiAvIG9wdHMubGluZXMgLyBvcHRzLnNwZWVkO1xyXG4gICAgICAgIGRlbGF5IC09IDEgLyBvcHRzLnNwZWVkOyAvLyBzbyBpbml0aWFsIGFuaW1hdGlvbiBzdGF0ZSB3aWxsIGluY2x1ZGUgdHJhaWxcclxuICAgICAgICB2YXIgbGluZSA9IGNzcyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ2V0Q29sb3Iob3B0cy5jb2xvciwgaSksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IG5vcm1hbGl6ZVNoYWRvdyhzaGFkb3dzLCBkZWdyZWVzKSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAxIC8gb3B0cy5zcGVlZCArIFwicyBsaW5lYXIgXCIgKyBkZWxheSArIFwicyBpbmZpbml0ZSBcIiArIG9wdHMuYW5pbWF0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhY2tncm91bmRMaW5lLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGJhY2tncm91bmRMaW5lKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwYXJzZUJveFNoYWRvdyhib3hTaGFkb3cpIHtcclxuICAgIHZhciByZWdleCA9IC9eXFxzKihbYS16QS1aXStcXHMrKT8oLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKVxccysoLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKSguKikkLztcclxuICAgIHZhciBzaGFkb3dzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gYm94U2hhZG93LnNwbGl0KCcsJyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNoYWRvdyA9IF9hW19pXTtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHNoYWRvdy5tYXRjaChyZWdleCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIGludmFsaWQgc3ludGF4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4ID0gK21hdGNoZXNbMl07XHJcbiAgICAgICAgdmFyIHkgPSArbWF0Y2hlc1s1XTtcclxuICAgICAgICB2YXIgeFVuaXRzID0gbWF0Y2hlc1s0XTtcclxuICAgICAgICB2YXIgeVVuaXRzID0gbWF0Y2hlc1s3XTtcclxuICAgICAgICBpZiAoeCA9PT0gMCAmJiAheFVuaXRzKSB7XHJcbiAgICAgICAgICAgIHhVbml0cyA9IHlVbml0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgPT09IDAgJiYgIXlVbml0cykge1xyXG4gICAgICAgICAgICB5VW5pdHMgPSB4VW5pdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4VW5pdHMgIT09IHlVbml0cykge1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gdW5pdHMgbXVzdCBtYXRjaCB0byB1c2UgYXMgY29vcmRpbmF0ZXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hhZG93cy5wdXNoKHtcclxuICAgICAgICAgICAgcHJlZml4OiBtYXRjaGVzWzFdIHx8ICcnLFxyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICB4VW5pdHM6IHhVbml0cyxcclxuICAgICAgICAgICAgeVVuaXRzOiB5VW5pdHMsXHJcbiAgICAgICAgICAgIGVuZDogbWF0Y2hlc1s4XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkb3dzO1xyXG59XHJcbi8qKlxyXG4gKiBNb2RpZnkgYm94LXNoYWRvdyB4L3kgb2Zmc2V0cyB0byBjb3VudGVyYWN0IHJvdGF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVTaGFkb3coc2hhZG93cywgZGVncmVlcykge1xyXG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgc2hhZG93c18xID0gc2hhZG93czsgX2kgPCBzaGFkb3dzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNoYWRvdyA9IHNoYWRvd3NfMVtfaV07XHJcbiAgICAgICAgdmFyIHh5ID0gY29udmVydE9mZnNldChzaGFkb3cueCwgc2hhZG93LnksIGRlZ3JlZXMpO1xyXG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChzaGFkb3cucHJlZml4ICsgeHlbMF0gKyBzaGFkb3cueFVuaXRzICsgJyAnICsgeHlbMV0gKyBzaGFkb3cueVVuaXRzICsgc2hhZG93LmVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZC5qb2luKCcsICcpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoeCwgeSwgZGVncmVlcykge1xyXG4gICAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxuICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgTWF0aC5yb3VuZCgoeCAqIGNvcyArIHkgKiBzaW4pICogMTAwMCkgLyAxMDAwLFxyXG4gICAgICAgIE1hdGgucm91bmQoKC14ICogc2luICsgeSAqIGNvcykgKiAxMDAwKSAvIDEwMDAsXHJcbiAgICBdO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
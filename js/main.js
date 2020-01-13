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
    var nonSelectHeight = 151;
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
        // noinspection JSMismatchedCollectionQueryUpdate
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
                // @ts-ignore
                var files = templateButton[0].files;
                if (files.length) {
                    // @ts-ignore
                    var filePath = files[0].path;
                    // console.log("filePath: " + filePath);
                    var osFixedPath = filePath.replace(/\\/g, "/");
                    // console.log("osFixedPath: " + osFixedPath);
                    var path = osFixedPath.substr(0, osFixedPath.lastIndexOf("/"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9Db29raWVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2pzL2xpYnMvVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbGlicy9UeXBlQWhlYWQudHMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFsYW5jZWQtbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JyYWNlLWV4cGFuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uY2F0LW1hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NpbnRlcmZhY2UtdHMvZGlzdC9jc2ludGVyZmFjZS10cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaW1hdGNoL21pbmltYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtZGlyL2xpYi9wYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1kaXIvbGliL3JlYWRmaWxlc3N0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3Bpbi5qcy9zcGluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw2Q0FBNkM7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtB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O0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdMQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwidmFyIENvb2tpZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29va2llTWFuYWdlcih0ZW1wbGF0ZURpcikge1xuICAgICAgICBpZiAodGVtcGxhdGVEaXIgPT09IHZvaWQgMCkgeyB0ZW1wbGF0ZURpciA9IFwiXCI7IH1cbiAgICAgICAgdGhpcy5jb29raWVOYW1lID0gXCJza3lPcGVuVGVtcGxhdGVcIjtcbiAgICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHRlbXBsYXRlRGlyO1xuICAgICAgICB2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGV4cGlyZXMuc2V0RnVsbFllYXIoZXhwaXJlcy5nZXRGdWxsWWVhcigpICsgMik7XG4gICAgICAgIHRoaXMuZXhwaXJ5RGF0ZSA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgQ29va2llTWFuYWdlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb29raWVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb29raWVWYWx1ZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJWYWxpZCBkaXJlY3Rvcnkgbm90IGNob3Nlbi5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gdGhpcy5jb29raWVOYW1lICsgXCI9XCIgKyB0aGlzLmNvb2tpZVZhbHVlICsgXCI7ZXhwaXJlcz1cIiArIHRoaXMuZXhwaXJ5RGF0ZSArIFwiO1wiO1xuICAgIH07XG4gICAgQ29va2llTWFuYWdlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuY29va2llKSB7XG4gICAgICAgICAgICB2YXIgc3BsaXRDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgaWYgKHNwbGl0Q29va2llLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgc3BsaXRDb29raWVfMSA9IHNwbGl0Q29va2llOyBfaSA8IHNwbGl0Q29va2llXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBzcGxpdENvb2tpZV8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGNvb2tpZS5zcGxpdChcIj1cIilbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjb29raWUuc3BsaXQoXCI9XCIpWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5jb29raWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gQ29va2llTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBDb29raWVNYW5hZ2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl2YTJsbFRXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJa052YjJ0cFpVMWhibUZuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3U1VGTFJTeDFRa0ZCV1N4WFFVRjNRanRSUVVGNFFpdzBRa0ZCUVN4RlFVRkJMR2RDUVVGM1FqdFJRVW8xUWl4bFFVRlZMRWRCUVZjc2FVSkJRV2xDTEVOQlFVTTdVVUZMTjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZETDBJc1NVRkJUU3hQUVVGUExFZEJRVk1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTnFReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wbEJSVTBzTWtKQlFVY3NSMEZCVml4VlFVRlhMRXRCUVdNN1VVRkRka0lzU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEVkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU14UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFsQlEzSkNMRXRCUVVzc1EwRkJReXcyUWtGQk5rSXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFOUJRVTg3VTBGRFVqdFJRVU5FTEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzVTBGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4cFFrRkJXU3hKUVVGSkxFTkJRVU1zVlVGQlZTeE5RVUZITEVOQlFVTTdTVUZEZWtZc1EwRkJRenRKUVVWTkxESkNRVUZITEVkQlFWWTdVVUZEUlN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGJrSXNTVUZCVFN4WFFVRlhMRWRCUVdFc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRla1FzU1VGQlNTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMmRDUVVOMFFpeExRVUZ4UWl4VlFVRlhMRVZCUVZnc01rSkJRVmNzUlVGQldDeDVRa0ZCVnl4RlFVRllMRWxCUVZjc1JVRkJSVHR2UWtGQk4wSXNTVUZCVFN4TlFVRk5MRzlDUVVGQk8yOUNRVU5tTEVsQlFVMHNSMEZCUnl4SFFVRlhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlEyaEVMRWxCUVUwc1MwRkJTeXhIUVVGWExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdiMEpCUTJ4RUxFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVN2QwSkJRek5DTEU5QlFVOHNTMEZCU3l4RFFVRkRPM0ZDUVVOa08ybENRVU5HTzJGQlEwWTdVMEZEUmp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVU5JTEc5Q1FVRkRPMEZCUVVRc1EwRkJReXhCUVhSRFJDeEpRWE5EUXlKOSIsInZhciBUZW1wbGF0ZUZpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGVtcGxhdGVGaWxlKGZ1bGxQYXRoKSB7XG4gICAgICAgIHRoaXMuZnVsbFBhdGggPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5mdWxsUGF0aCA9IGZ1bGxQYXRoO1xuICAgICAgICB2YXIgb3NGaXhlZFBhdGggPSBmdWxsUGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICAgICAgdmFyIGZuID0gb3NGaXhlZFBhdGguc3BsaXQoXCIvXCIpLnBvcCgpO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZm4gPT09IHVuZGVmaW5lZCA/IFwiRmlsZSBuYW1lIG1hbGZvcm1lZFwiIDogZm47XG4gICAgfVxuICAgIFRlbXBsYXRlRmlsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcImZpbGVOYW1lOiBcIiArIHRoaXMuZmlsZU5hbWUgKyBcIlxcbiAgICAgIGZ1bGxQYXRoOiBcIiArIHRoaXMuZnVsbFBhdGg7XG4gICAgfTtcbiAgICByZXR1cm4gVGVtcGxhdGVGaWxlO1xufSgpKTtcbmV4cG9ydCB7IFRlbXBsYXRlRmlsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdWdGNHeGhkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SlVaVzF3YkdGMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0SlFVdEZMSE5DUVVGWkxGRkJRV2RDTzFGQlNISkNMR0ZCUVZFc1IwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRFSXNZVUZCVVN4SFFVRlhMRVZCUVVVc1EwRkJRenRSUVVjelFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVONlFpeEpRVUZOTEZkQlFWY3NSMEZCVnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGTkxFVkJRVVVzUjBGQmRVSXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGFFVXNRMEZCUXp0SlFVVk5MQ3RDUVVGUkxFZEJRV1k3VVVGRFJTeFBRVUZQTEdWQlFXRXNTVUZCU1N4RFFVRkRMRkZCUVZFc01FSkJRMjVDTEVsQlFVa3NRMEZCUXl4UlFVRlZMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVU5JTEcxQ1FVRkRPMEZCUVVRc1EwRkJReXhCUVdoQ1JDeEpRV2RDUXlKOSIsInZhciBUeXBlQWhlYWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIFR5cGVBaGVhZCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gc2VsZWN0IC0gVGhlIFNlbGVjdCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+fSBpbnB1dCAtIFRoZSBJbnB1dCBlbGVtZW50IHdoaWNoIGNvbnRhaW5zXG4gICAgICogdGhlIHNlYXJjaCBzdHJpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gVHlwZUFoZWFkKHNlbGVjdCwgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBzZWxlY3Q7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5vcHRpb25zT3JpZ2luYWwgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9yZSB0aGUgb3JpZ2luYWwgb3B0aW9ucyBmb3IgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgICAqXG4gICAgICovXG4gICAgVHlwZUFoZWFkLnByb3RvdHlwZS5zZXRPcHRpb25zT3JpZ2luYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc09yaWdpbmFsID0gdGhpcy5zZWxlY3QuY2hpbGRyZW4oXCJvcHRpb25cIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIFNlbGVjdCBlbGVtZW50LCBmaWx0ZXIgYWxsIG9mIGl0cyBPcHRpb24gZWxlbWVudHMgdG8gb25seSBzaG93IHRob3NlXG4gICAgICogd2hvIHBhc3MgYSBnaXZlbiB0ZXN0LCBpbiBgZmluZE1hdGNoZXNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBzZWxlY3RFbGVtZW50IC0gVGhlIFNlbGVjdCBlbGVtZW50IHRvIGJlIGZpbHRlcmVkLlxuICAgICAqL1xuICAgIFR5cGVBaGVhZC5wcm90b3R5cGUuZmlsdGVyT3B0aW9uc0luID0gZnVuY3Rpb24gKHNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBzZWxlY3RFbGVtZW50O1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNNaXNtYXRjaGVkQ29sbGVjdGlvblF1ZXJ5VXBkYXRlXG4gICAgICAgIHZhciBvcHRpb25zQ3VycmVudCA9IHRoaXMuc2VsZWN0LmNoaWxkcmVuKFwib3B0aW9uXCIpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMuZmluZE1hdGNoZXModGhpcy5pbnB1dC52YWwoKSk7XG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRpb25zQ3VycmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZChtYXRjaGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZCh0aGlzLm9wdGlvbnNPcmlnaW5hbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbHRlcnMgdGhlIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzIGJ5IGEgZ2l2ZW4gc2VhcmNoIHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2ggLSBUaGUgc3RyaW5nIG9mIHRleHQgdG8gdXNlIGZvciBmaWx0ZXJpbmcgdGhlIE9wdGlvbiBsaXN0LlxuICAgICAqIEByZXR1cm5zIHtKUXVlcnk8SFRNTE9wdGlvbkVsZW1lbnQ+IHwgbnVsbH0gVGhlIGZpbHRlcmVkIGxpc3Qgb2YgT3B0aW9uIGVsZW1lbnRzLFxuICAgICAqIG9yIG51bGwgaWYgdGhlcmUgYXJlIG5vbmUgdG8gYmVnaW4gd2l0aCBvciBpZiB0aGUgc2VhcmNoIHN0cmluZyBpcyBibGFuay5cbiAgICAgKi9cbiAgICBUeXBlQWhlYWQucHJvdG90eXBlLmZpbmRNYXRjaGVzID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc09yaWdpbmFsICE9PSBudWxsICYmIHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc09yaWdpbmFsLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgsIG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24udGV4dC5tYXRjaChyZWdleCkgIT09IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBUeXBlQWhlYWQ7XG59KCkpO1xuZXhwb3J0IHsgVHlwZUFoZWFkIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWSGx3WlVGb1pXRmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVZIbHdaVUZvWldGa0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBsQlMwVTdPenM3T3p0UFFVMUhPMGxCUTBnc2JVSkJRVmtzVFVGQk1rSXNSVUZCUlN4TFFVRXJRanRSUVVOMFJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOeVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzYzBOQlFXdENMRWRCUVhwQ08xRkJRMFVzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlJXNUVMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeHRRMEZCWlN4SFFVRjBRaXhWUVVGMVFpeGhRVUZyUXp0UlFVTjJSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTTFRaXhwUkVGQmFVUTdVVUZEYWtRc1NVRkJUU3hqUVVGakxFZEJRVGhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVOd1JTeFJRVUZSTEVOQlEyOUNMRU5CUVVNN1VVRkRMMElzU1VGQlRTeFBRVUZQTEVkQlFYRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRMmhGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGWkxFTkJRek5DTEVOQlFVTTdVVUZEUml4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGNFSXNZMEZCWXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJRM2hDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6ZENPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJORU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMGxCUTBnc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5MTEN0Q1FVRlhMRWRCUVc1Q0xGVkJRVzlDTEUxQlFXTTdVVUZEYUVNc1NVRkJUU3hMUVVGTExFZEJRVmNzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhKUVVGSkxFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlF6TkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlEyaERMRlZCUVVNc1MwRkJZU3hGUVVGRkxFMUJRWGxDTzJkQ1FVTjJReXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF6dFpRVU16UXl4RFFVRkRMRU5CUTBZc1EwRkJRenRUUVVOSU8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCUTBnc1owSkJRVU03UVVGQlJDeERRVUZETEVGQmNrVkVMRWxCY1VWREluMD0iLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0aGUgbWFpbiBwYW5lbCBmdW5jdGlvbnMgYW5kIGNhbGxzIHRvIGFsbCBvZiBpdHMgbW9kdWxlcy5cbiAqL1xuaW1wb3J0IHsgQ1NJbnRlcmZhY2UgfSBmcm9tIFwiY3NpbnRlcmZhY2UtdHNcIjtcbmltcG9ydCAqIGFzIGRpciBmcm9tIFwibm9kZS1kaXJcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwic3Bpbi5qc1wiO1xuaW1wb3J0IHsgQ29va2llTWFuYWdlciB9IGZyb20gXCIuL2xpYnMvQ29va2llTWFuYWdlclwiO1xuaW1wb3J0IHsgVGVtcGxhdGVGaWxlIH0gZnJvbSBcIi4vbGlicy9UZW1wbGF0ZVwiO1xuaW1wb3J0IHsgVHlwZUFoZWFkIH0gZnJvbSBcIi4vbGlicy9UeXBlQWhlYWRcIjtcbi8qKlxuICogVGhlIG1haW4gZnVuY3Rpb24gdGhhdCB3aWxsIHJ1biBpbiB0aGUgQWRvYmUgQ0VQIHBhbmVsLlxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8vIFNldCB1cCBjb25zdGFudHMuXG4gICAgdmFyIGNzSW50ZXJmYWNlID0gbmV3IENTSW50ZXJmYWNlKCk7XG4gICAgdmFyIGNvb2tpZU1hbmFnZXIgPSBuZXcgQ29va2llTWFuYWdlcigpO1xuICAgIHZhciBzcGlubmVyID0gbmV3IFNwaW5uZXIoeyBjb2xvcjogXCIjZmZmXCIsIGxpbmVzOiAxMiB9KTtcbiAgICB2YXIgZWxCb2R5ID0gJChcImJvZHlcIik7XG4gICAgdmFyIGVsU2VsZWN0V3JhcHBlciA9ICQoXCIjdGVtcGxhdGUtbGlzdC13cmFwcGVyXCIpO1xuICAgIHZhciBlbFNlbGVjdCA9ICQoXCIjdGVtcGxhdGUtbGlzdFwiKTtcbiAgICB2YXIgZWxJbnB1dCA9ICQoXCIjc2VhcmNoLWJveFwiKTtcbiAgICB2YXIgdHlwZUFoZWFkID0gbmV3IFR5cGVBaGVhZChlbFNlbGVjdCwgZWxJbnB1dCk7XG4gICAgdmFyIG5vblNlbGVjdEhlaWdodCA9IDE1MTtcbiAgICB2YXIgc2VsZWN0TGluZUhlaWdodCA9IDIwO1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIEJsb2NrVUkuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICQuYmxvY2tVSS5kZWZhdWx0cyA9IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgb25CbG9jazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Bpbm5lci5zcGluKGVsQm9keS5nZXQoMCkpOyB9LFxuICAgICAgICBvblVuYmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3RvcCgpOyB9LFxuICAgICAgICBvdmVybGF5Q1NTOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICB9LFxuICAgICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBob3N0IGFwcGxpY2F0aW9uIHRvIG9wZW4gYWxsIG9mIHRoZSBmaWxlcyBpbiB0aGUgZ2l2ZW4gbGlzdCBvZiBmdWxsIHBhdGhuYW1lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHNlbGVjdGVkIC0gVGhlIGxpc3Qgb2YgZnVsbCBwYXRobmFtZXMgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICAgKi9cbiAgICB2YXIgb3BlblRlbXBsYXRlcyA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNlbGVjdGVkXzEgPSBzZWxlY3RlZDsgX2kgPCBzZWxlY3RlZF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxlY3RlZF8xW19pXTtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZUZpbGUoaXRlbSk7XG4gICAgICAgICAgICB2YXIganNvblRlbXBsYXRlID0gSlNPTi5zdHJpbmdpZnkodGVtcGxhdGUpO1xuICAgICAgICAgICAgY3NJbnRlcmZhY2UuZXZhbFNjcmlwdChcIm9wZW5Eb2N1bWVudChcIiArIGpzb25UZW1wbGF0ZSArIFwiKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICQudW5ibG9ja1VJKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBleHRlbnNpb24gcGFuZWwuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTTWlzbWF0Y2hlZENvbGxlY3Rpb25RdWVyeVVwZGF0ZVxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIE9wZW4gYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIG9wZW5CdXR0b24gPSAkKFwiI29wZW4tYnV0dG9uXCIpO1xuICAgICAgICBpZiAob3BlbkJ1dHRvbikge1xuICAgICAgICAgICAgb3BlbkJ1dHRvbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0ZW1wbGF0ZUxpc3QudmFsKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkLmJsb2NrVUkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBvcGVuVGVtcGxhdGVzKHNlbGVjdGVkKTsgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgbGlzdCBvZiB0ZW1wbGF0ZXMgaW4gdGhlIFBhbmVsIGFzIE9wdGlvbiBlbGVtZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtUZW1wbGF0ZUZpbGVbXX0gZmlsZUxpc3QgLSBUaGUgbGlzdCBvZiB0ZW1wbGF0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc2V0VGVtcGxhdGVMaXN0ID0gZnVuY3Rpb24gKGZpbGVMaXN0KSB7XG4gICAgICAgICAgICBpZiAoZmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVMaXN0LmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBmaWxlTGlzdF8xID0gZmlsZUxpc3Q7IF9pIDwgZmlsZUxpc3RfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlTGlzdF8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVMaXN0LmFwcGVuZCgkKFwiPG9wdGlvbiAvPlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnZhbChmaWxlLmZ1bGxQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoZmlsZS5maWxlTmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgbGlzdCBvZiB0ZW1wbGF0ZSBmaWxlcyByZWN1cnNpdmVseSBmcm9tIGEgZ2l2ZW4gcGF0aCxcbiAgICAgICAgICogdGhlbiBwb3B1bGF0ZSB0aGUgSFRNTCBwYW5lbCB3aXRoIHRoYXQgbGlzdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCBmcm9tIHdoaWNoIHRvIG9idGFpbiB0aGUgbGlzdCBvZiBmaWxlcy5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBnZXRGaWxlcyA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBlbFNlbGVjdFdyYXBwZXIuYmxvY2soe1xuICAgICAgICAgICAgICAgIG9uQmxvY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwaW5uZXIuc3BpbihlbFNlbGVjdFdyYXBwZXIuZ2V0KDApKTsgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGlyLmZpbGVzKHBhdGgsIGZ1bmN0aW9uIChlcnIsIGZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ID0gXCJhaVwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVQYXRocyA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuc3BsaXQoXCIuXCIpLnBvcCgpID09PSBleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhdGhzLnNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRlbXBsYXRlUGF0aHNfMSA9IHRlbXBsYXRlUGF0aHM7IF9pIDwgdGVtcGxhdGVQYXRoc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGVQYXRoc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKG5ldyBUZW1wbGF0ZUZpbGUodGVtcGxhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUZW1wbGF0ZUxpc3QodGVtcGxhdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBlbFNlbGVjdFdyYXBwZXIudW5ibG9jaygpO1xuICAgICAgICAgICAgICAgICAgICBlbElucHV0Lm9mZigpO1xuICAgICAgICAgICAgICAgICAgICB0eXBlQWhlYWQuc2V0T3B0aW9uc09yaWdpbmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsSW5wdXQub24oXCJrZXl1cCBjaGFuZ2UgcmVzZXQgc2VhcmNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBaGVhZC5maWx0ZXJPcHRpb25zSW4oZWxTZWxlY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgaGFuZGxlciBmb3IgdGhlIHRlbXBsYXRlIGZvbGRlciBzZWxlY3Rpb24gYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHRlbXBsYXRlQnV0dG9uID0gJChcIiNmaWxlLWNvbnRyb2xcIik7XG4gICAgICAgIHZhciB0ZW1wbGF0ZUxpc3QgPSAkKFwiI3RlbXBsYXRlLWxpc3RcIik7XG4gICAgICAgIGlmICh0ZW1wbGF0ZUJ1dHRvbikge1xuICAgICAgICAgICAgdGVtcGxhdGVCdXR0b24ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSB0ZW1wbGF0ZUJ1dHRvblswXS5maWxlcztcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVQYXRoID0gZmlsZXNbMF0ucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWxlUGF0aDogXCIgKyBmaWxlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvc0ZpeGVkUGF0aCA9IGZpbGVQYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9zRml4ZWRQYXRoOiBcIiArIG9zRml4ZWRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBvc0ZpeGVkUGF0aC5zdWJzdHIoMCwgb3NGaXhlZFBhdGgubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGaXhlZCBwYXRoOiBcIiArIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBjb29raWVNYW5hZ2VyLnNldChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlsZXMocGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgdGhlIHRoZW1lIChjb2xvcnMsIEdVSSwgbG9vayAmIGZlZWwsIGV0Yy4pXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGVtZU1hbmFnZXIuaW5pdCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBvbiBzdGFydGluZyB0aGUgZXh0ZW5zaW9uLCBvYnRhaW4gYW4gZXhpc3RpbmcgbGlzdCBvZiBmaWxlc1xuICAgICAgICAgKiBpZiB0aGUgcGF0aCB0byB0aGVtIGhhcyBhbHJlYWR5IGJlZW4gc2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHRlbXBsYXRlUGF0aCA9IGNvb2tpZU1hbmFnZXIuZ2V0KCk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcbiAgICAgICAgICAgIGdldEZpbGVzKHRlbXBsYXRlUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIGV4dGVuc2lvbiBwYW5lbCBpcyByZS1zaXplZC5cbiAgICAgICAgICogUmUtc2l6ZXMgdGhlIFNlbGVjdFttdWx0aXBsZV0gZWxlbWVudCB0byBmaWxsIHRoZSBzcGFjZS5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHZhciByZXNpemVTZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtTGluZXMgPSBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBub25TZWxlY3RIZWlnaHQpIC8gc2VsZWN0TGluZUhlaWdodCk7XG4gICAgICAgICAgICBlbFNlbGVjdC5hdHRyKFwic2l6ZVwiLCBudW1MaW5lcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNpemUgdGhlIFNlbGVjdFttdWx0aXBsZV0gZWxlbWVudCB1cG9uIHN0YXJ0dXAgb2YgdGhlIGV4dGVuc2lvbiBwYW5lbFxuICAgICAgICAgKiBhbmQgYXNzaWduIHRoZSBoYW5kbGVyIHRvIHRoZSBldmVudCB3aGVuIHRoZSBwYW5lbCBpcyByZS1zaXplZC5cbiAgICAgICAgICovXG4gICAgICAgICQocmVzaXplU2VsZWN0KTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHJlc2l6ZVNlbGVjdCk7XG4gICAgfVxuICAgIGluaXQoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBkQlJVYzdRVUZGU0N4UFFVRlBMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzWjBKQlFXZENMRU5CUVVNN1FVRkROME1zVDBGQlR5eExRVUZMTEVkQlFVY3NUVUZCVFN4VlFVRlZMRU5CUVVNN1FVRkRhRU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRk5CUVZNc1EwRkJRenRCUVVOc1F5eFBRVUZQTEVWQlFVVXNZVUZCWVN4RlFVRkZMRTFCUVUwc2MwSkJRWE5DTEVOQlFVTTdRVUZEY2tRc1QwRkJUeXhGUVVGRkxGbEJRVmtzUlVGQlJTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wRkJReTlETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hyUWtGQmEwSXNRMEZCUXp0QlFVVTNRenM3UjBGRlJ6dEJRVU5JTEVOQlFVTTdTVUZEUXl4WlFVRlpMRU5CUVVNN1NVRkZZaXh2UWtGQmIwSTdTVUZEY0VJc1NVRkJUU3hYUVVGWExFZEJRV2RDTEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRia1FzU1VGQlRTeGhRVUZoTEVkQlFXdENMRWxCUVVrc1lVRkJZU3hGUVVGRkxFTkJRVU03U1VGRGVrUXNTVUZCVFN4UFFVRlBMRWRCUVZrc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyNUZMRWxCUVUwc1RVRkJUU3hIUVVGM1FpeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRPVU1zU1VGQlRTeGxRVUZsTEVkQlFYZENMRU5CUVVNc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMGxCUTNwRkxFbEJRVTBzVVVGQlVTeEhRVUYzUWl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hKUVVGTkxFOUJRVThzUjBGQk5rSXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8wbEJRek5FTEVsQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTnVSQ3hKUVVGTkxHVkJRV1VzUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZETlVJc1NVRkJUU3huUWtGQlowSXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkZOVUlzWjBOQlFXZERPMGxCUTJoRExHRkJRV0U3U1VGRFlpeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSenRSUVVOdVFpeFBRVUZQTEVWQlFVVXNTVUZCU1R0UlFVTmlMRTlCUVU4c1JVRkJSU3hqUVVGTkxFOUJRVUVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFUTkNMRU5CUVRKQ08xRkJRekZETEZOQlFWTXNSVUZCUlN4alFVRk5MRTlCUVVFc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZrTEVOQlFXTTdVVUZETDBJc1ZVRkJWU3hGUVVGRk8xbEJRMVlzWlVGQlpTeEZRVUZGTEUxQlFVMDdXVUZEZGtJc1QwRkJUeXhGUVVGRkxFZEJRVWM3VTBGRFlqdFJRVU5FTEZkQlFWY3NSVUZCUlN4SlFVRkpPMHRCUTJ4Q0xFTkJRVU03U1VGRlJqczdPenRQUVVsSE8wbEJRMGdzU1VGQlRTeGhRVUZoTEVkQlFVY3NWVUZCUXl4UlFVRnJRanRSUVVOMlF5eExRVUZ0UWl4VlFVRlJMRVZCUVZJc2NVSkJRVkVzUlVGQlVpeHpRa0ZCVVN4RlFVRlNMRWxCUVZFc1JVRkJSVHRaUVVGNFFpeEpRVUZOTEVsQlFVa3NhVUpCUVVFN1dVRkRZaXhKUVVGTkxGRkJRVkVzUjBGQmFVSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGRFUXNTVUZCVFN4WlFVRlpMRWRCUVZjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTjBSQ3hYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEd0Q1FVRm5RaXhaUVVGWkxFMUJRVWNzUlVGQlJUdG5Ra0ZEZEVRc2RVSkJRWFZDTzFsQlEzcENMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMG83VVVGRFJDeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRhRUlzUTBGQlF5eERRVUZETzBsQlJVWTdPMDlCUlVjN1NVRkRTQ3hUUVVGVExFbEJRVWs3VVVGRFdDeHBSRUZCYVVRN1VVRkRha1E3T3p0WFFVZEhPMUZCUTBnc1NVRkJUU3hWUVVGVkxFZEJRWGRDTEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEZWQlFWVXNSVUZCUlR0WlFVTmtMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQllTeFpRVUZaTEVOQlFVTXNSMEZCUnl4RlFVRmpMRU5CUVVNN1owSkJRekZFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGJrSXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU5hTEZWQlFWVXNRMEZCUXl4alFVRk5MRTlCUVVFc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUYyUWl4RFFVRjFRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnFSRHRaUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEwbzdVVUZGUkRzN096dFhRVWxITzFGQlEwZ3NTVUZCVFN4bFFVRmxMRWRCUVVjc1ZVRkJReXhSUVVGM1FqdFpRVU12UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEyNUNMRmxCUVZrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEY2tJc1MwRkJiVUlzVlVGQlVTeEZRVUZTTEhGQ1FVRlJMRVZCUVZJc2MwSkJRVkVzUlVGQlVpeEpRVUZSTEVWQlFVVTdiMEpCUVhoQ0xFbEJRVTBzU1VGQlNTeHBRa0ZCUVR0dlFrRkRZaXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVU5xUWl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8zbENRVU5hTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8zbENRVU5zUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVU4yUWl4RFFVRkRPMmxDUVVOSU8yRkJRMFk3VVVGRFNDeERRVUZETEVOQlFVTTdVVUZGUmpzN096czdWMEZMUnp0UlFVTklMRWxCUVUwc1VVRkJVU3hIUVVGSExGVkJRVU1zU1VGQldUdFpRVU0xUWl4aFFVRmhPMWxCUTJJc1pVRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF6dG5Ra0ZEY0VJc1QwRkJUeXhGUVVGRkxHTkJRVTBzVDBGQlFTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCY0VNc1EwRkJiME03WVVGRGNFUXNRMEZCUXl4RFFVRkRPMWxCUTBnc1ZVRkJWU3hEUVVGRE8yZENRVU5VTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVU1zUjBGQlZTeEZRVUZGTEV0QlFXVTdiMEpCUXpGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzNkQ1FVTlFMRTFCUVUwc1IwRkJSeXhEUVVGRE8zRkNRVU5ZTzI5Q1FVTkVMRWxCUVUwc1IwRkJSeXhIUVVGWExFbEJRVWtzUTBGQlF6dHZRa0ZEZWtJc1NVRkJUU3hoUVVGaExFZEJRV0VzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRkRMRWxCUVVrN2QwSkJRMmhFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4SFFVRkhMRU5CUVVNN2IwSkJRM1pETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzU1VGQlRTeFRRVUZUTEVkQlFXMUNMRVZCUVVVc1EwRkJRenR2UWtGRGNrTXNTMEZCZFVJc1ZVRkJZU3hGUVVGaUxDdENRVUZoTEVWQlFXSXNNa0pCUVdFc1JVRkJZaXhKUVVGaExFVkJRVVU3ZDBKQlFXcERMRWxCUVUwc1VVRkJVU3h6UWtGQlFUdDNRa0ZEYWtJc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8zRkNRVU0xUXp0dlFrRkRSQ3hsUVVGbExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xHRkJRV0U3YjBKQlEySXNaVUZCWlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU14UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03YjBKQlEyUXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTTdiMEpCUXk5Q0xFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNNa0pCUVRKQ0xFVkJRVVU3ZDBKQlEzUkRMRk5CUVZNc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdiMEpCUTNSRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMHdzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFnc1EwRkJReXhEUVVGRE8xRkJSVVk3T3p0WFFVZEhPMUZCUTBnc1NVRkJUU3hqUVVGakxFZEJRWGRDTEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNdlJDeEpRVUZOTEZsQlFWa3NSMEZCZDBJc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeGpRVUZqTEVWQlFVVTdXVUZEYkVJc1kwRkJZeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdaMEpCUXpGQ0xHRkJRV0U3WjBKQlEySXNTVUZCVFN4TFFVRkxMRWRCUVdFc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0blFrRkRhRVFzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMjlDUVVOb1FpeGhRVUZoTzI5Q1FVTmlMRWxCUVUwc1VVRkJVU3hIUVVGWExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN2IwSkJRM1pETEhkRFFVRjNRenR2UWtGRGVFTXNTVUZCVFN4WFFVRlhMRWRCUVZjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRM3BFTERoRFFVRTRRenR2UWtGRE9VTXNTVUZCVFN4SlFVRkpMRWRCUVZjc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGRGNrTXNRMEZCUXl4RlFVTkVMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlF6ZENMRU5CUVVNN2IwSkJRMFlzYzBOQlFYTkRPMjlDUVVOMFF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU40UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEyaENPMWxCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFNqdFJRVVZFT3pzN1YwRkhSenRSUVVOSUxGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVVndRanM3T3p0WFFVbEhPMUZCUTBnc1NVRkJUU3haUVVGWkxFZEJRV3RDTEdGQlFXRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVONFJDeEpRVUZKTEZsQlFWa3NSVUZCUlR0WlFVTm9RaXhSUVVGUkxFTkJRVU1zV1VGQmMwSXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJSVVE3T3pzN1YwRkpSenRSUVVOSUxFbEJRVTBzV1VGQldTeEhRVUZITzFsQlEyNUNMRWxCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlEzcENMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSMEZCUnl4blFrRkJaMElzUTBGRE1VUXNRMEZCUXp0WlFVTkdMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTJ4RExFTkJRVU1zUTBGQlF6dFJRVVZHT3pzN1YwRkhSenRSUVVOSUxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0UlFVTm9RaXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc1NVRkJTU3hGUVVGRkxFTkJRVU03UVVGRFZDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRJbjA9IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBiYWxhbmNlZDtcbmZ1bmN0aW9uIGJhbGFuY2VkKGEsIGIsIHN0cikge1xuICBpZiAoYSBpbnN0YW5jZW9mIFJlZ0V4cCkgYSA9IG1heWJlTWF0Y2goYSwgc3RyKTtcbiAgaWYgKGIgaW5zdGFuY2VvZiBSZWdFeHApIGIgPSBtYXliZU1hdGNoKGIsIHN0cik7XG5cbiAgdmFyIHIgPSByYW5nZShhLCBiLCBzdHIpO1xuXG4gIHJldHVybiByICYmIHtcbiAgICBzdGFydDogclswXSxcbiAgICBlbmQ6IHJbMV0sXG4gICAgcHJlOiBzdHIuc2xpY2UoMCwgclswXSksXG4gICAgYm9keTogc3RyLnNsaWNlKHJbMF0gKyBhLmxlbmd0aCwgclsxXSksXG4gICAgcG9zdDogc3RyLnNsaWNlKHJbMV0gKyBiLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWF5YmVNYXRjaChyZWcsIHN0cikge1xuICB2YXIgbSA9IHN0ci5tYXRjaChyZWcpO1xuICByZXR1cm4gbSA/IG1bMF0gOiBudWxsO1xufVxuXG5iYWxhbmNlZC5yYW5nZSA9IHJhbmdlO1xuZnVuY3Rpb24gcmFuZ2UoYSwgYiwgc3RyKSB7XG4gIHZhciBiZWdzLCBiZWcsIGxlZnQsIHJpZ2h0LCByZXN1bHQ7XG4gIHZhciBhaSA9IHN0ci5pbmRleE9mKGEpO1xuICB2YXIgYmkgPSBzdHIuaW5kZXhPZihiLCBhaSArIDEpO1xuICB2YXIgaSA9IGFpO1xuXG4gIGlmIChhaSA+PSAwICYmIGJpID4gMCkge1xuICAgIGJlZ3MgPSBbXTtcbiAgICBsZWZ0ID0gc3RyLmxlbmd0aDtcblxuICAgIHdoaWxlIChpID49IDAgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGkgPT0gYWkpIHtcbiAgICAgICAgYmVncy5wdXNoKGkpO1xuICAgICAgICBhaSA9IHN0ci5pbmRleE9mKGEsIGkgKyAxKTtcbiAgICAgIH0gZWxzZSBpZiAoYmVncy5sZW5ndGggPT0gMSkge1xuICAgICAgICByZXN1bHQgPSBbIGJlZ3MucG9wKCksIGJpIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWcgPSBiZWdzLnBvcCgpO1xuICAgICAgICBpZiAoYmVnIDwgbGVmdCkge1xuICAgICAgICAgIGxlZnQgPSBiZWc7XG4gICAgICAgICAgcmlnaHQgPSBiaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJpID0gc3RyLmluZGV4T2YoYiwgaSArIDEpO1xuICAgICAgfVxuXG4gICAgICBpID0gYWkgPCBiaSAmJiBhaSA+PSAwID8gYWkgOiBiaTtcbiAgICB9XG5cbiAgICBpZiAoYmVncy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IFsgbGVmdCwgcmlnaHQgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwidmFyIGNvbmNhdE1hcCA9IHJlcXVpcmUoJ2NvbmNhdC1tYXAnKTtcbnZhciBiYWxhbmNlZCA9IHJlcXVpcmUoJ2JhbGFuY2VkLW1hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwYW5kVG9wO1xuXG52YXIgZXNjU2xhc2ggPSAnXFwwU0xBU0gnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG52YXIgZXNjT3BlbiA9ICdcXDBPUEVOJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY0Nsb3NlID0gJ1xcMENMT1NFJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY0NvbW1hID0gJ1xcMENPTU1BJytNYXRoLnJhbmRvbSgpKydcXDAnO1xudmFyIGVzY1BlcmlvZCA9ICdcXDBQRVJJT0QnK01hdGgucmFuZG9tKCkrJ1xcMCc7XG5cbmZ1bmN0aW9uIG51bWVyaWMoc3RyKSB7XG4gIHJldHVybiBwYXJzZUludChzdHIsIDEwKSA9PSBzdHJcbiAgICA/IHBhcnNlSW50KHN0ciwgMTApXG4gICAgOiBzdHIuY2hhckNvZGVBdCgwKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlQnJhY2VzKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCdcXFxcXFxcXCcpLmpvaW4oZXNjU2xhc2gpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFx7Jykuam9pbihlc2NPcGVuKVxuICAgICAgICAgICAgLnNwbGl0KCdcXFxcfScpLmpvaW4oZXNjQ2xvc2UpXG4gICAgICAgICAgICAuc3BsaXQoJ1xcXFwsJykuam9pbihlc2NDb21tYSlcbiAgICAgICAgICAgIC5zcGxpdCgnXFxcXC4nKS5qb2luKGVzY1BlcmlvZCk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlQnJhY2VzKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KGVzY1NsYXNoKS5qb2luKCdcXFxcJylcbiAgICAgICAgICAgIC5zcGxpdChlc2NPcGVuKS5qb2luKCd7JylcbiAgICAgICAgICAgIC5zcGxpdChlc2NDbG9zZSkuam9pbignfScpXG4gICAgICAgICAgICAuc3BsaXQoZXNjQ29tbWEpLmpvaW4oJywnKVxuICAgICAgICAgICAgLnNwbGl0KGVzY1BlcmlvZCkuam9pbignLicpO1xufVxuXG5cbi8vIEJhc2ljYWxseSBqdXN0IHN0ci5zcGxpdChcIixcIiksIGJ1dCBoYW5kbGluZyBjYXNlc1xuLy8gd2hlcmUgd2UgaGF2ZSBuZXN0ZWQgYnJhY2VkIHNlY3Rpb25zLCB3aGljaCBzaG91bGQgYmVcbi8vIHRyZWF0ZWQgYXMgaW5kaXZpZHVhbCBtZW1iZXJzLCBsaWtlIHthLHtiLGN9LGR9XG5mdW5jdGlvbiBwYXJzZUNvbW1hUGFydHMoc3RyKSB7XG4gIGlmICghc3RyKVxuICAgIHJldHVybiBbJyddO1xuXG4gIHZhciBwYXJ0cyA9IFtdO1xuICB2YXIgbSA9IGJhbGFuY2VkKCd7JywgJ30nLCBzdHIpO1xuXG4gIGlmICghbSlcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcsJyk7XG5cbiAgdmFyIHByZSA9IG0ucHJlO1xuICB2YXIgYm9keSA9IG0uYm9keTtcbiAgdmFyIHBvc3QgPSBtLnBvc3Q7XG4gIHZhciBwID0gcHJlLnNwbGl0KCcsJyk7XG5cbiAgcFtwLmxlbmd0aC0xXSArPSAneycgKyBib2R5ICsgJ30nO1xuICB2YXIgcG9zdFBhcnRzID0gcGFyc2VDb21tYVBhcnRzKHBvc3QpO1xuICBpZiAocG9zdC5sZW5ndGgpIHtcbiAgICBwW3AubGVuZ3RoLTFdICs9IHBvc3RQYXJ0cy5zaGlmdCgpO1xuICAgIHAucHVzaC5hcHBseShwLCBwb3N0UGFydHMpO1xuICB9XG5cbiAgcGFydHMucHVzaC5hcHBseShwYXJ0cywgcCk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb3Aoc3RyKSB7XG4gIGlmICghc3RyKVxuICAgIHJldHVybiBbXTtcblxuICAvLyBJIGRvbid0IGtub3cgd2h5IEJhc2ggNC4zIGRvZXMgdGhpcywgYnV0IGl0IGRvZXMuXG4gIC8vIEFueXRoaW5nIHN0YXJ0aW5nIHdpdGgge30gd2lsbCBoYXZlIHRoZSBmaXJzdCB0d28gYnl0ZXMgcHJlc2VydmVkXG4gIC8vIGJ1dCAqb25seSogYXQgdGhlIHRvcCBsZXZlbCwgc28ge30sYX1iIHdpbGwgbm90IGV4cGFuZCB0byBhbnl0aGluZyxcbiAgLy8gYnV0IGF7fSxifWMgd2lsbCBiZSBleHBhbmRlZCB0byBbYX1jLGFiY10uXG4gIC8vIE9uZSBjb3VsZCBhcmd1ZSB0aGF0IHRoaXMgaXMgYSBidWcgaW4gQmFzaCwgYnV0IHNpbmNlIHRoZSBnb2FsIG9mXG4gIC8vIHRoaXMgbW9kdWxlIGlzIHRvIG1hdGNoIEJhc2gncyBydWxlcywgd2UgZXNjYXBlIGEgbGVhZGluZyB7fVxuICBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJ3t9Jykge1xuICAgIHN0ciA9ICdcXFxce1xcXFx9JyArIHN0ci5zdWJzdHIoMik7XG4gIH1cblxuICByZXR1cm4gZXhwYW5kKGVzY2FwZUJyYWNlcyhzdHIpLCB0cnVlKS5tYXAodW5lc2NhcGVCcmFjZXMpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eShlKSB7XG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBlbWJyYWNlKHN0cikge1xuICByZXR1cm4gJ3snICsgc3RyICsgJ30nO1xufVxuZnVuY3Rpb24gaXNQYWRkZWQoZWwpIHtcbiAgcmV0dXJuIC9eLT8wXFxkLy50ZXN0KGVsKTtcbn1cblxuZnVuY3Rpb24gbHRlKGksIHkpIHtcbiAgcmV0dXJuIGkgPD0geTtcbn1cbmZ1bmN0aW9uIGd0ZShpLCB5KSB7XG4gIHJldHVybiBpID49IHk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZChzdHIsIGlzVG9wKSB7XG4gIHZhciBleHBhbnNpb25zID0gW107XG5cbiAgdmFyIG0gPSBiYWxhbmNlZCgneycsICd9Jywgc3RyKTtcbiAgaWYgKCFtIHx8IC9cXCQkLy50ZXN0KG0ucHJlKSkgcmV0dXJuIFtzdHJdO1xuXG4gIHZhciBpc051bWVyaWNTZXF1ZW5jZSA9IC9eLT9cXGQrXFwuXFwuLT9cXGQrKD86XFwuXFwuLT9cXGQrKT8kLy50ZXN0KG0uYm9keSk7XG4gIHZhciBpc0FscGhhU2VxdWVuY2UgPSAvXlthLXpBLVpdXFwuXFwuW2EtekEtWl0oPzpcXC5cXC4tP1xcZCspPyQvLnRlc3QobS5ib2R5KTtcbiAgdmFyIGlzU2VxdWVuY2UgPSBpc051bWVyaWNTZXF1ZW5jZSB8fCBpc0FscGhhU2VxdWVuY2U7XG4gIHZhciBpc09wdGlvbnMgPSBtLmJvZHkuaW5kZXhPZignLCcpID49IDA7XG4gIGlmICghaXNTZXF1ZW5jZSAmJiAhaXNPcHRpb25zKSB7XG4gICAgLy8ge2F9LGJ9XG4gICAgaWYgKG0ucG9zdC5tYXRjaCgvLC4qXFx9LykpIHtcbiAgICAgIHN0ciA9IG0ucHJlICsgJ3snICsgbS5ib2R5ICsgZXNjQ2xvc2UgKyBtLnBvc3Q7XG4gICAgICByZXR1cm4gZXhwYW5kKHN0cik7XG4gICAgfVxuICAgIHJldHVybiBbc3RyXTtcbiAgfVxuXG4gIHZhciBuO1xuICBpZiAoaXNTZXF1ZW5jZSkge1xuICAgIG4gPSBtLmJvZHkuc3BsaXQoL1xcLlxcLi8pO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUNvbW1hUGFydHMobS5ib2R5KTtcbiAgICBpZiAobi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIHh7e2EsYn19eSA9PT4geHthfXkgeHtifXlcbiAgICAgIG4gPSBleHBhbmQoblswXSwgZmFsc2UpLm1hcChlbWJyYWNlKTtcbiAgICAgIGlmIChuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgcG9zdCA9IG0ucG9zdC5sZW5ndGhcbiAgICAgICAgICA/IGV4cGFuZChtLnBvc3QsIGZhbHNlKVxuICAgICAgICAgIDogWycnXTtcbiAgICAgICAgcmV0dXJuIHBvc3QubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICByZXR1cm4gbS5wcmUgKyBuWzBdICsgcDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXQgdGhpcyBwb2ludCwgbiBpcyB0aGUgcGFydHMsIGFuZCB3ZSBrbm93IGl0J3Mgbm90IGEgY29tbWEgc2V0XG4gIC8vIHdpdGggYSBzaW5nbGUgZW50cnkuXG5cbiAgLy8gbm8gbmVlZCB0byBleHBhbmQgcHJlLCBzaW5jZSBpdCBpcyBndWFyYW50ZWVkIHRvIGJlIGZyZWUgb2YgYnJhY2Utc2V0c1xuICB2YXIgcHJlID0gbS5wcmU7XG4gIHZhciBwb3N0ID0gbS5wb3N0Lmxlbmd0aFxuICAgID8gZXhwYW5kKG0ucG9zdCwgZmFsc2UpXG4gICAgOiBbJyddO1xuXG4gIHZhciBOO1xuXG4gIGlmIChpc1NlcXVlbmNlKSB7XG4gICAgdmFyIHggPSBudW1lcmljKG5bMF0pO1xuICAgIHZhciB5ID0gbnVtZXJpYyhuWzFdKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChuWzBdLmxlbmd0aCwgblsxXS5sZW5ndGgpXG4gICAgdmFyIGluY3IgPSBuLmxlbmd0aCA9PSAzXG4gICAgICA/IE1hdGguYWJzKG51bWVyaWMoblsyXSkpXG4gICAgICA6IDE7XG4gICAgdmFyIHRlc3QgPSBsdGU7XG4gICAgdmFyIHJldmVyc2UgPSB5IDwgeDtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgaW5jciAqPSAtMTtcbiAgICAgIHRlc3QgPSBndGU7XG4gICAgfVxuICAgIHZhciBwYWQgPSBuLnNvbWUoaXNQYWRkZWQpO1xuXG4gICAgTiA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IHg7IHRlc3QoaSwgeSk7IGkgKz0gaW5jcikge1xuICAgICAgdmFyIGM7XG4gICAgICBpZiAoaXNBbHBoYVNlcXVlbmNlKSB7XG4gICAgICAgIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgICAgICBpZiAoYyA9PT0gJ1xcXFwnKVxuICAgICAgICAgIGMgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMgPSBTdHJpbmcoaSk7XG4gICAgICAgIGlmIChwYWQpIHtcbiAgICAgICAgICB2YXIgbmVlZCA9IHdpZHRoIC0gYy5sZW5ndGg7XG4gICAgICAgICAgaWYgKG5lZWQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgeiA9IG5ldyBBcnJheShuZWVkICsgMSkuam9pbignMCcpO1xuICAgICAgICAgICAgaWYgKGkgPCAwKVxuICAgICAgICAgICAgICBjID0gJy0nICsgeiArIGMuc2xpY2UoMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGMgPSB6ICsgYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE4ucHVzaChjKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgTiA9IGNvbmNhdE1hcChuLCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZXhwYW5kKGVsLCBmYWxzZSkgfSk7XG4gIH1cblxuICBmb3IgKHZhciBqID0gMDsgaiA8IE4ubGVuZ3RoOyBqKyspIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHBvc3QubGVuZ3RoOyBrKyspIHtcbiAgICAgIHZhciBleHBhbnNpb24gPSBwcmUgKyBOW2pdICsgcG9zdFtrXTtcbiAgICAgIGlmICghaXNUb3AgfHwgaXNTZXF1ZW5jZSB8fCBleHBhbnNpb24pXG4gICAgICAgIGV4cGFuc2lvbnMucHVzaChleHBhbnNpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHBhbnNpb25zO1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4cywgZm4pIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IGZuKHhzW2ldLCBpKTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHJlcy5wdXNoLmFwcGx5KHJlcywgeCk7XG4gICAgICAgIGVsc2UgcmVzLnB1c2goeCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyoqXHJcbiAqICBUeXBlc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIENTSW50ZXJmYWNlIC0gdjcuMC4wXHJcbiAqXHJcbiAqICBDdXN0b20gQ1NJbnRlcmZhY2UuanMgaW1wbGVtZW50YXRpb24gaW4gVHlwZXNjcmlwdC5cclxuICogIFRoZSBpbXBsZW1lbnRhdGlvbiBjb3ZlcnMgdmVyc2lvbiA3LnggZnJvbSBvcmlnaW5hbCByZXBvc2l0b3J5LCB3aXRoIGFsbCBmdW5jdGlvbmFsaXRpZXMuXHJcbiAqICBBbGwgZG9jdW1lbnRhdGlvbiBjb21tZW50cyB3ZXJlIGFsc28gYmFzZWQgb24gb3JpZ2luYWwuXHJcbiAqXHJcbiAqXHJcbiAqICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBDcmVhdGl2ZSBDbG91ZCBleHRlbnNpb25zIGRldmVsb3BtZW50XHJcbiAqICBwbGVhc2UgcmVmZXIgdG8gb3JpZ2luYWwgR2l0aHViIHBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9BZG9iZS1DRVAvQ0VQLVJlc291cmNlc1xyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAY2xhc3MgQ1NJbnRlcmZhY2VcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgdG8gdGhlIENFUCBleHRlbnNpYmlsaXR5IGluZnJhc3RydWN0dXJlLlxyXG4gKiBJbnN0YW50aWF0ZSB0aGlzIG9iamVjdCBhbmQgdXNlIGl0IHRvOlxyXG4gKiA8dWw+XHJcbiAqIDxsaT5BY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGhvc3QgYXBwbGljYXRpb24gaW4gd2hpY2ggYW4gZXh0ZW5zaW9uIGlzIHJ1bm5pbmc8L2xpPlxyXG4gKiA8bGk+TGF1bmNoIGFuIGV4dGVuc2lvbjwvbGk+XHJcbiAqIDxsaT5SZWdpc3RlciBpbnRlcmVzdCBpbiBldmVudCBub3RpZmljYXRpb25zLCBhbmQgZGlzcGF0Y2ggZXZlbnRzPC9saT5cclxuICogPC91bD5cclxuICpcclxuICovXHJcbnZhciBDU0ludGVyZmFjZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDU0ludGVyZmFjZSgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVc2VyIGNhbiBhZGQgdGhpcyBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgbmF0aXZlIGFwcGxpY2F0aW9uIHRoZW1lIGNvbG9yIGNoYW5nZXMuXHJcbiAgICAgICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZ2l2ZXMgZXh0ZW5zaW9ucyBhYmlsaXR5IHRvIGZpbmUtdHVuZSB0aGVpciB0aGVtZSBjb2xvciBhZnRlciB0aGVcclxuICAgICAgICAgKiBnbG9iYWwgdGhlbWUgY29sb3IgaGFzIGJlZW4gY2hhbmdlZC5cclxuICAgICAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gc2hvdWxkIGJlIGxpa2UgYmVsb3c6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIC8vIGV2ZW50IGlzIGEgQ1NFdmVudCBvYmplY3QsIGJ1dCB1c2VyIGNhbiBpZ25vcmUgaXQuXHJcbiAgICAgICAgICogZnVuY3Rpb24gT25BcHBUaGVtZUNvbG9yQ2hhbmdlZChldmVudClcclxuICAgICAgICAgKiB7XHJcbiAgICAgICAgICogICAgLy8gU2hvdWxkIGdldCBhIGxhdGVzdCBIb3N0RW52aXJvbm1lbnQgb2JqZWN0IGZyb20gYXBwbGljYXRpb24uXHJcbiAgICAgICAgICogICAgdmFyIHNraW5JbmZvID0gSlNPTi5wYXJzZSh3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRIb3N0RW52aXJvbm1lbnQoKSkuYXBwU2tpbkluZm87XHJcbiAgICAgICAgICogICAgLy8gR2V0cyB0aGUgc3R5bGUgaW5mb3JtYXRpb24gc3VjaCBhcyBjb2xvciBpbmZvIGZyb20gdGhlIHNraW5JbmZvLFxyXG4gICAgICAgICAqICAgIC8vIGFuZCByZWRyYXcgYWxsIFVJIGNvbnRyb2xzIG9mIHlvdXIgZXh0ZW5zaW9uIGFjY29yZGluZyB0byB0aGUgc3R5bGUgaW5mby5cclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5USEVNRV9DT0xPUl9DSEFOR0VEX0VWRU5UID0gXCJjb20uYWRvYmUuY3N4cy5ldmVudHMuVGhlbWVDb2xvckNoYW5nZWRcIjtcclxuICAgICAgICAvKiogVGhlIGhvc3QgZW52aXJvbm1lbnQgZGF0YSBvYmplY3QuICovXHJcbiAgICAgICAgdGhpcy5ob3N0RW52aXJvbm1lbnQgPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEhvc3RFbnZpcm9ubWVudCgpKTtcclxuICAgIH1cclxuICAgIC8qKiBSZXRyaWV2ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGhvc3QgZW52aXJvbm1lbnQgaW4gd2hpY2ggdGhlXHJcbiAgICAgKiAgZXh0ZW5zaW9uIGlzIGN1cnJlbnRseSBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqICAgQHJldHVybiBBIFxcYyAjSG9zdEVudmlyb25tZW50IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEhvc3RFbnZpcm9ubWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvc3RFbnZpcm9ubWVudCA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0SG9zdEVudmlyb25tZW50KCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3RFbnZpcm9ubWVudDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKiogQ2xvc2VzIHRoaXMgZXh0ZW5zaW9uLiAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmNsb3NlRXh0ZW5zaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmNsb3NlRXh0ZW5zaW9uKCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBwYXRoIGZvciB3aGljaCBhIGNvbnN0YW50IGlzIGRlZmluZWQgaW4gdGhlIHN5c3RlbS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGF0aFR5cGUgVGhlIHBhdGgtdHlwZSBjb25zdGFudCBkZWZpbmVkIGluIFxcYyAjU3lzdGVtUGF0aCAsXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBUaGUgcGxhdGZvcm0tc3BlY2lmaWMgc3lzdGVtIHBhdGggc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0U3lzdGVtUGF0aCA9IGZ1bmN0aW9uIChwYXRoVHlwZSkge1xyXG4gICAgICAgIHZhciBwYXRoID0gZGVjb2RlVVJJKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldFN5c3RlbVBhdGgocGF0aFR5cGUpKTtcclxuICAgICAgICB2YXIgT1NWZXJzaW9uID0gdGhpcy5nZXRPU0luZm9ybWF0aW9uKCk7XHJcbiAgICAgICAgaWYgKE9TVmVyc2lvbi5pbmRleE9mKFwiV2luZG93c1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoXCJmaWxlOi8vL1wiLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoT1NWZXJzaW9uLmluZGV4T2YoXCJNYWNcIikgPj0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKFwiZmlsZTovL1wiLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFdmFsdWF0ZXMgYSBKYXZhU2NyaXB0IHNjcmlwdCwgd2hpY2ggY2FuIHVzZSB0aGUgSmF2YVNjcmlwdCBET01cclxuICAgICAqIG9mIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzY3JpcHQgICAgVGhlIEphdmFTY3JpcHQgc2NyaXB0LlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrICBPcHRpb25hbC4gQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSByZXN1bHQgb2YgZXhlY3V0aW9uLlxyXG4gICAgICogICAgICAgICAgSWYgZXhlY3V0aW9uIGZhaWxzLCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIGVycm9yIG1lc3NhZ2UgXFxjIEV2YWxTY3JpcHRfRXJyTWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmV2YWxTY3JpcHQgPSBmdW5jdGlvbiAoc2NyaXB0LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc3VsdCkgeyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5ldmFsU2NyaXB0KHNjcmlwdCwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKiBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGlzIGN1cnJlbnRseSBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gVGhlIHVuaXF1ZSBJRCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRBcHBsaWNhdGlvbklEID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcHBJZCA9IHRoaXMuaG9zdEVudmlyb25tZW50LmFwcElkO1xyXG4gICAgICAgIHJldHVybiBhcHBJZDtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBob3N0IGNhcGFiaWxpdHkgaW5mb3JtYXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvblxyXG4gICAgICogaW4gd2hpY2ggdGhlIGV4dGVuc2lvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEEgXFxjICNIb3N0Q2FwYWJpbGl0aWVzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldEhvc3RDYXBhYmlsaXRpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvc3RDYXBhYmlsaXRpZXMgPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmdldEhvc3RDYXBhYmlsaXRpZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIGhvc3RDYXBhYmlsaXRpZXM7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyBhIENFUCBldmVudCBwcm9ncmFtbWF0aWNhbGx5LiBZb3kgY2FuIHVzZSBpdCB0byBkaXNwYXRjaFxyXG4gICAgICogYW4gZXZlbnQgb2YgYSBwcmVkZWZpbmVkIHR5cGUsIG9yIG9mIGEgdHlwZSB5b3UgaGF2ZSBkZWZpbmVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBldmVudCBBIFxcYyBDU0V2ZW50IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGFuIGludGVyZXN0IGluIGEgQ0VQIGV2ZW50IG9mIGEgcGFydGljdWxhciB0eXBlLCBhbmRcclxuICAgICAqIGFzc2lnbnMgYW4gZXZlbnQgaGFuZGxlci5cclxuICAgICAqIFRoZSBldmVudCBpbmZyYXN0cnVjdHVyZSBub3RpZmllcyB5b3VyIGV4dGVuc2lvbiB3aGVuIGV2ZW50cyBvZiB0aGlzIHR5cGUgb2NjdXIsXHJcbiAgICAgKiBwYXNzaW5nIHRoZSBldmVudCBvYmplY3QgdG8gdGhlIHJlZ2lzdGVyZWQgaGFuZGxlciBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHR5cGUgb2YgaW50ZXJlc3QuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIEphdmFTY3JpcHQgaGFuZGxlciBmdW5jdGlvbiBvciBtZXRob2QuXHJcbiAgICAgKiBAcGFyYW0gb2JqICAgICAgT3B0aW9uYWwsIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgaGFuZGxlciBtZXRob2QsIGlmIGFueS5cclxuICAgICAqICAgICAgICAgRGVmYXVsdCBpcyBudWxsLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb2JqKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb2JqKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlICAgICAgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHR5cGUgb2YgaW50ZXJlc3QuXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgIFRoZSBKYXZhU2NyaXB0IGhhbmRsZXIgZnVuY3Rpb24gb3IgbWV0aG9kIHRoYXQgd2FzIHJlZ2lzdGVyZWQuXHJcbiAgICAgKiBAcGFyYW0gb2JqICAgICAgIE9wdGlvbmFsLCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGhhbmRsZXIgbWV0aG9kLCBpZiBhbnkuXHJcbiAgICAgKiAgICAgICAgICBEZWZhdWx0IGlzIG51bGwuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvYmopIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvYmopO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYW5kIGxhdW5jaGVzIGFub3RoZXIgZXh0ZW5zaW9uLCBvciBhY3RpdmF0ZXMgdGhlIGV4dGVuc2lvbiBpZiBpdCBpcyBhbHJlYWR5IGxvYWRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uSWQgICAgICAgVGhlIGV4dGVuc2lvbidzIHVuaXF1ZSBpZGVudGlmaWVyLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0dXBQYXJhbXMgICAgIE5vdCBjdXJyZW50bHkgdXNlZCwgcGFzcyBcIlwiLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBUbyBsYXVuY2ggdGhlIGV4dGVuc2lvbiBcImhlbHBcIiB3aXRoIElEIFwiSExQXCIgZnJvbSB0aGlzIGV4dGVuc2lvbiwgY2FsbDpcclxuICAgICAqIDxjb2RlPnJlcXVlc3RPcGVuRXh0ZW5zaW9uKFwiSExQXCIsIFwiXCIpOyA8L2NvZGU+XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUucmVxdWVzdE9wZW5FeHRlbnNpb24gPSBmdW5jdGlvbiAoZXh0ZW5zaW9uSWQsIHBhcmFtcykge1xyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLnJlcXVlc3RPcGVuRXh0ZW5zaW9uKGV4dGVuc2lvbklkLCBwYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSBsaXN0IG9mIGV4dGVuc2lvbnMgY3VycmVudGx5IGxvYWRlZCBpbiB0aGUgY3VycmVudCBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgICogVGhlIGV4dGVuc2lvbiBsaXN0IGlzIGluaXRpYWxpemVkIG9uY2UsIGFuZCByZW1haW5zIHRoZSBzYW1lIGR1cmluZyB0aGUgbGlmZXRpbWVcclxuICAgICAqIG9mIHRoZSBDRVAgc2Vzc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uSWRzICBPcHRpb25hbCwgYW4gYXJyYXkgb2YgdW5pcXVlIGlkZW50aWZpZXJzIGZvciBleHRlbnNpb25zIG9mIGludGVyZXN0LlxyXG4gICAgICogICAgICAgICAgSWYgb21pdHRlZCwgcmV0cmlldmVzIGRhdGEgZm9yIGFsbCBleHRlbnNpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gWmVybyBvciBtb3JlIFxcYyAjRXh0ZW5zaW9uIG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKGV4dGVuc2lvbklkcykge1xyXG4gICAgICAgIHZhciBleHRlbnNpb25JZHNTdHIgPSBKU09OLnN0cmluZ2lmeShleHRlbnNpb25JZHMpO1xyXG4gICAgICAgIHZhciBleHRlbnNpb25zU3RyID0gd2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0RXh0ZW5zaW9ucyhleHRlbnNpb25JZHNTdHIpO1xyXG4gICAgICAgIHZhciBleHRlbnNpb25zID0gSlNPTi5wYXJzZShleHRlbnNpb25zU3RyKTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9ucztcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBuZXR3b3JrLXJlbGF0ZWQgcHJlZmVyZW5jZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBIEphdmFTY3JpcHQgb2JqZWN0IGNvbnRhaW5pbmcgbmV0d29yayBwcmVmZXJlbmNlcy5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldE5ldHdvcmtQcmVmZXJlbmNlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gd2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0TmV0d29ya1ByZWZlcmVuY2VzKCk7XHJcbiAgICAgICAgdmFyIG5ldHdvcmtQcmUgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldHdvcmtQcmU7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgcmVzb3VyY2UgYnVuZGxlIGZvciB0aGlzIGV4dGVuc2lvbiB3aXRoIHByb3BlcnR5IHZhbHVlc1xyXG4gICAgICogZm9yIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIGFuZCBsb2NhbGUuXHJcbiAgICAgKiBUbyBzdXBwb3J0IG11bHRpcGxlIGxvY2FsZXMsIHlvdSBtdXN0IGRlZmluZSBhIHByb3BlcnR5IGZpbGUgZm9yIGVhY2ggbG9jYWxlLFxyXG4gICAgICogY29udGFpbmluZyBrZXllZCBkaXNwbGF5LXN0cmluZyB2YWx1ZXMgZm9yIHRoYXQgbG9jYWxlLlxyXG4gICAgICogU2VlIGxvY2FsaXphdGlvbiBkb2N1bWVudGF0aW9uIGZvciBFeHRlbnNpb24gQnVpbGRlciBhbmQgcmVsYXRlZCBwcm9kdWN0cy5cclxuICAgICAqXHJcbiAgICAgKiBLZXlzIGNhbiBiZSBpbiB0aGVcclxuICAgICAqIGZvcm0gPGNvZGU+a2V5LnZhbHVlPVwibG9jYWxpemVkIHN0cmluZ1wiPC9jb2RlPiwgZm9yIHVzZSBpbiBIVE1MIHRleHQgZWxlbWVudHMuXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgaW4gdGhpcyBpbnB1dCBlbGVtZW50LCB0aGUgbG9jYWxpemVkIFxcYyBrZXkudmFsdWUgc3RyaW5nIGlzIGRpc3BsYXllZFxyXG4gICAgICogaW5zdGVhZCBvZiB0aGUgZW1wdHkgXFxjIHZhbHVlIHN0cmluZzpcclxuICAgICAqXHJcbiAgICAgKiA8Y29kZT48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiXCIgZGF0YS1sb2NhbGU9XCJrZXlcIi8+PC9jb2RlPlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc291cmNlIGJ1bmRsZSBpbmZvcm1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmluaXRSZXNvdXJjZUJ1bmRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzb3VyY2VCdW5kbGUgPSBKU09OLnBhcnNlKHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmluaXRSZXNvdXJjZUJ1bmRsZSgpKTtcclxuICAgICAgICB2YXIgcmVzRWxtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxvY2FsZV0nKTtcclxuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHJlc0VsbXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgdmFyIHJlc0VsID0gcmVzRWxtc1tuXTtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSByZXNvdXJjZSBrZXkgZnJvbSB0aGUgZWxlbWVudC5cclxuICAgICAgICAgICAgdmFyIHJlc0tleSA9IHJlc0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGUnKTtcclxuICAgICAgICAgICAgaWYgKHJlc0tleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFsbCB0aGUgcmVzb3VyY2VzIHRoYXQgc3RhcnQgd2l0aCB0aGUga2V5LlxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc291cmNlQnVuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKHJlc0tleSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc1ZhbHVlID0gcmVzb3VyY2VCdW5kbGVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPT0gcmVzS2V5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzRWwuaW5uZXJIVE1MID0gcmVzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoJy4nID09IGtleS5jaGFyQXQocmVzS2V5Lmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyS2V5ID0ga2V5LnN1YnN0cmluZyhyZXNLZXkubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNFbFthdHRyS2V5XSA9IHJlc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNvdXJjZUJ1bmRsZTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlcyBpbnN0YWxsYXRpb24gaW5mb3JtYXRpb24gdG8gYSBmaWxlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gVGhlIGZpbGUgcGF0aC5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmR1bXBJbnN0YWxsYXRpb25JbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5kdW1wSW5zdGFsbGF0aW9uSW5mbygpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHZlcnNpb24gaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50IE9wZXJhdGluZyBTeXN0ZW0sXHJcbiAgICAgKiBTZWUgaHR0cDovL3d3dy51c2VyYWdlbnRzdHJpbmcuY29tL3BhZ2VzL0Nocm9tZS8gZm9yIENocm9tZSBcXGMgbmF2aWdhdG9yLnVzZXJBZ2VudCB2YWx1ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBPUyB2ZXJzaW9uLCBvciBcInVua25vd24gT3BlcmF0aW9uIFN5c3RlbVwiLlxyXG4gICAgICogSWYgdXNlciBjdXN0b21pemVzIHRoZSBVc2VyIEFnZW50IGJ5IHNldHRpbmcgQ0VGIGNvbW1hbmQgcGFyYW1ldGVyIFwiLS11c2VyLWFnZW50XCIsIG9ubHlcclxuICAgICAqIFwiTWFjIE9TIFhcIiBvciBcIldpbmRvd3NcIiB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuZ2V0T1NJbmZvcm1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBpZiAoKG5hdmlnYXRvci5wbGF0Zm9ybSA9PSBcIldpbjMyXCIpIHx8IChuYXZpZ2F0b3IucGxhdGZvcm0gPT0gXCJXaW5kb3dzXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciB3aW5WZXJzaW9uID0gXCJXaW5kb3dzXCI7XHJcbiAgICAgICAgICAgIHZhciB3aW5CaXQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNS4wXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIDIwMDBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA1LjFcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgWFBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA1LjJcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgU2VydmVyIDIwMDNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA2LjBcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgVmlzdGFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBOVCA2LjFcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblZlcnNpb24gPSBcIldpbmRvd3MgN1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDYuMlwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luVmVyc2lvbiA9IFwiV2luZG93cyA4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgTlQgNi4zXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIDguMVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIE5UIDEwXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5WZXJzaW9uID0gXCJXaW5kb3dzIDEwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXT1c2NFwiKSA+IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKFwiV2luNjRcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbkJpdCA9IFwiIDY0LWJpdFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luQml0ID0gXCIgMzItYml0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHdpblZlcnNpb24gKyB3aW5CaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChuYXZpZ2F0b3IucGxhdGZvcm0gPT0gXCJNYWNJbnRlbFwiKSB8fCAobmF2aWdhdG9yLnBsYXRmb3JtID09IFwiTWFjaW50b3NoXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIk1hYyBPUyBYXCI7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIk1hYyBPUyBYXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVzZXJBZ2VudC5zdWJzdHJpbmcodXNlckFnZW50LmluZGV4T2YoXCJNYWMgT1MgWFwiKSwgdXNlckFnZW50LmluZGV4T2YoXCIpXCIpKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9fL2csIFwiLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJVbmtub3duIE9wZXJhdGlvbiBTeXN0ZW1cIjtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgcGFnZSBpbiB0aGUgZGVmYXVsdCBzeXN0ZW0gYnJvd3Nlci5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgIFRoZSBVUkwgb2YgdGhlIHBhZ2UvZmlsZSB0byBvcGVuLCBvciB0aGUgZW1haWwgYWRkcmVzcy5cclxuICAgICAqIE11c3QgdXNlIEhUVFAvSFRUUFMvZmlsZS9tYWlsdG8gcHJvdG9jb2wuIEZvciBleGFtcGxlOlxyXG4gICAgICogICBcImh0dHA6Ly93d3cuYWRvYmUuY29tXCJcclxuICAgICAqICAgXCJodHRwczovL2dpdGh1Yi5jb21cIlxyXG4gICAgICogICBcImZpbGU6Ly8vQzovbG9nLnR4dFwiXHJcbiAgICAgKiAgIFwibWFpbHRvOnRlc3RAYWRvYmUuY29tXCJcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIE9uZSBvZiB0aGVzZSBlcnJvciBjb2RlczpcXG5cclxuICAgICAqICAgICAgPHVsPlxcblxyXG4gICAgICogICAgICAgICAgPGxpPk5PX0VSUk9SIC0gMDwvbGk+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+RVJSX1VOS05PV04gLSAxPC9saT5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT5FUlJfSU5WQUxJRF9QQVJBTVMgLSAyPC9saT5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT5FUlJfSU5WQUxJRF9VUkwgLSAyMDE8L2xpPlxcblxyXG4gICAgICogICAgICA8L3VsPlxcblxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUub3BlblVSTEluRGVmYXVsdEJyb3dzZXIgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNlcC51dGlsLm9wZW5VUkxJbkRlZmF1bHRCcm93c2VyKHVybCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgZXh0ZW5zaW9uIElELlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBleHRlbnNpb24gSUQuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRFeHRlbnNpb25JRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0RXh0ZW5zaW9uSWQoKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgc2NhbGUgZmFjdG9yIG9mIHNjcmVlbi5cclxuICAgICAqIE9uIFdpbmRvd3MgcGxhdGZvcm0sIHRoZSB2YWx1ZSBvZiBzY2FsZSBmYWN0b3IgbWlnaHQgYmUgZGlmZmVyZW50IGZyb20gb3BlcmF0aW5nIHN5c3RlbSdzIHNjYWxlIGZhY3RvcixcclxuICAgICAqIHNpbmNlIGhvc3QgYXBwbGljYXRpb24gbWF5IHVzZSBpdHMgc2VsZi1kZWZpbmVkIHNjYWxlIGZhY3Rvci5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA0LjIuMFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gT25lIG9mIHRoZSBmb2xsb3dpbmcgZmxvYXQgbnVtYmVyLlxyXG4gICAgICogICAgICA8dWw+XFxuXHJcbiAgICAgKiAgICAgICAgICA8bGk+IC0xLjAgd2hlbiBlcnJvciBvY2N1cnMgPC9saT5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT4gMS4wIG1lYW5zIG5vcm1hbCBzY3JlZW4gPC9saT5cXG5cclxuICAgICAqICAgICAgICAgIDxsaT4gPjEuMCBtZWFucyBIaURQSSBzY3JlZW4gPC9saT5cXG5cclxuICAgICAqICAgICAgPC91bD5cXG5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLmdldFNjYWxlRmFjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5nZXRTY2FsZUZhY3RvcigpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgaGFuZGxlciB0byBkZXRlY3QgYW55IGNoYW5nZXMgb2Ygc2NhbGUgZmFjdG9yLiBUaGlzIG9ubHkgd29ya3Mgb24gTWFjLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgICBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gc2NhbGUgZmFjdG9yIGlzIGNoYW5nZWQuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuc2V0U2NhbGVGYWN0b3JDaGFuZ2VkSGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18uc2V0U2NhbGVGYWN0b3JDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBjdXJyZW50IEFQSSB2ZXJzaW9uLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDQuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBcGlWZXJzaW9uIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRDdXJyZW50QXBpVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXBpVmVyc2lvbiA9IEpTT04ucGFyc2Uod2luZG93Ll9fYWRvYmVfY2VwX18uZ2V0Q3VycmVudEFwaVZlcnNpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGFwaVZlcnNpb247XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcGFuZWwgZmx5b3V0IG1lbnUgYnkgYW4gWE1MLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgXCJjb20uYWRvYmUuY3N4cy5ldmVudHMuZmx5b3V0TWVudUNsaWNrZWRcIiB0byBnZXQgbm90aWZpZWQgd2hlbiBhXHJcbiAgICAgKiBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cclxuICAgICAqIFRoZSBcImRhdGFcIiBhdHRyaWJ1dGUgb2YgZXZlbnQgaXMgYW4gb2JqZWN0IHdoaWNoIGNvbnRhaW5zIFwibWVudUlkXCIgYW5kIFwibWVudU5hbWVcIiBhdHRyaWJ1dGVzLlxyXG4gICAgICpcclxuICAgICAqIFJlZ2lzdGVyIGNhbGxiYWNrIGZ1bmN0aW9ucyBmb3IgXCJjb20uYWRvYmUuY3N4cy5ldmVudHMuZmx5b3V0TWVudU9wZW5lZFwiIGFuZCBcImNvbS5hZG9iZS5jc3hzLmV2ZW50cy5mbHlvdXRNZW51Q2xvc2VkXCJcclxuICAgICAqIHJlc3BlY3RpdmVseSB0byBnZXQgbm90aWZpZWQgd2hlbiBmbHlvdXQgbWVudSBpcyBvcGVuZWQgb3IgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51ICAgICBBIFhNTCBzdHJpbmcgd2hpY2ggZGVzY3JpYmVzIG1lbnUgc3RydWN0dXJlLlxyXG4gICAgICogQW4gZXhhbXBsZSBtZW51IFhNTDpcclxuICAgICAqIDxNZW51PlxyXG4gICAgICogICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMVwiIExhYmVsPVwiVGVzdEV4YW1wbGUxXCIgRW5hYmxlZD1cInRydWVcIiBDaGVja2VkPVwiZmFsc2VcIi8+XHJcbiAgICAgKiAgIDxNZW51SXRlbSBMYWJlbD1cIlRlc3RFeGFtcGxlMlwiPlxyXG4gICAgICogICAgIDxNZW51SXRlbSBMYWJlbD1cIlRlc3RFeGFtcGxlMi0xXCIgPlxyXG4gICAgICogICAgICAgPE1lbnVJdGVtIExhYmVsPVwiVGVzdEV4YW1wbGUyLTEtMVwiIEVuYWJsZWQ9XCJmYWxzZVwiIENoZWNrZWQ9XCJ0cnVlXCIvPlxyXG4gICAgICogICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgKiAgICAgPE1lbnVJdGVtIExhYmVsPVwiVGVzdEV4YW1wbGUyLTJcIiBFbmFibGVkPVwidHJ1ZVwiIENoZWNrZWQ9XCJ0cnVlXCIvPlxyXG4gICAgICogICA8L01lbnVJdGVtPlxyXG4gICAgICogICA8TWVudUl0ZW0gTGFiZWw9XCItLS1cIiAvPlxyXG4gICAgICogICA8TWVudUl0ZW0gTGFiZWw9XCJUZXN0RXhhbXBsZTNcIiBFbmFibGVkPVwiZmFsc2VcIiBDaGVja2VkPVwiZmFsc2VcIi8+XHJcbiAgICAgKiA8L01lbnU+XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuc2V0UGFuZWxGbHlvdXRNZW51ID0gZnVuY3Rpb24gKG1lbnUpIHtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZVN5bmMoXCJzZXRQYW5lbEZseW91dE1lbnVcIiwgbWVudSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGEgbWVudSBpdGVtIGluIHRoZSBleHRlbnNpb24gd2luZG93J3MgZmx5b3V0IG1lbnUsIGJ5IHNldHRpbmcgdGhlIGVuYWJsZWRcclxuICAgICAqIGFuZCBzZWxlY3Rpb24gc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnVJdGVtTGFiZWwgICAgVGhlIG1lbnUgaXRlbSBsYWJlbC5cclxuICAgICAqIEBwYXJhbSBlbmFibGVkICAgICAgICBUcnVlIHRvIGVuYWJsZSB0aGUgaXRlbSwgZmFsc2UgdG8gZGlzYWJsZSBpdCAoZ3JheSBpdCBvdXQpLlxyXG4gICAgICogQHBhcmFtIGNoZWNrZWQgICAgICAgIFRydWUgdG8gc2VsZWN0IHRoZSBpdGVtLCBmYWxzZSB0byBkZXNlbGVjdCBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIGZhbHNlIHdoZW4gdGhlIGhvc3QgYXBwbGljYXRpb24gZG9lcyBub3Qgc3VwcG9ydCB0aGlzIGZ1bmN0aW9uYWxpdHkgKEhvc3RDYXBhYmlsaXRpZXMuRVhURU5ERURfUEFORUxfTUVOVSBpcyBmYWxzZSkuXHJcbiAgICAgKiAgICAgICAgIEZhaWxzIHNpbGVudGx5IGlmIG1lbnUgbGFiZWwgaXMgaW52YWxpZC5cclxuICAgICAqXHJcbiAgICAgKiBAc2VlIEhvc3RDYXBhYmlsaXRpZXMuRVhURU5ERURfUEFORUxfTUVOVVxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUudXBkYXRlUGFuZWxNZW51SXRlbSA9IGZ1bmN0aW9uIChtZW51SXRlbUxhYmVsLCBlbmFibGVkLCBjaGVja2VkKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmdldEhvc3RDYXBhYmlsaXRpZXMoKS5FWFRFTkRFRF9QQU5FTF9NRU5VKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtU3RhdHVzID0gbmV3IE1lbnVJdGVtU3RhdHVzKG1lbnVJdGVtTGFiZWwsIGVuYWJsZWQsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICByZXQgPSB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwidXBkYXRlUGFuZWxNZW51SXRlbVwiLCBKU09OLnN0cmluZ2lmeShpdGVtU3RhdHVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY29udGV4dCBtZW51IGJ5IFhNTCBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBUaGVyZSBhcmUgYSBudW1iZXIgb2YgY29udmVudGlvbnMgdXNlZCB0byBjb21tdW5pY2F0ZSB3aGF0IHR5cGUgb2YgbWVudSBpdGVtIHRvIGNyZWF0ZSBhbmQgaG93IGl0IHNob3VsZCBiZSBoYW5kbGVkLlxyXG4gICAgICogLSBhbiBpdGVtIHdpdGhvdXQgbWVudSBJRCBvciBtZW51IG5hbWUgaXMgZGlzYWJsZWQgYW5kIGlzIG5vdCBzaG93bi5cclxuICAgICAqIC0gaWYgdGhlIGl0ZW0gbmFtZSBpcyBcIi0tLVwiICh0aHJlZSBoeXBoZW5zKSB0aGVuIGl0IGlzIHRyZWF0ZWQgYXMgYSBzZXBhcmF0b3IuIFRoZSBtZW51IElEIGluIHRoaXMgY2FzZSB3aWxsIGFsd2F5cyBiZSBOVUxMLlxyXG4gICAgICogLSBDaGVja2FibGUgYXR0cmlidXRlIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBDaGVja2VkIGF0dHJpYnV0ZS5cclxuICAgICAqIC0gYSBQTkcgaWNvbi4gRm9yIG9wdGltYWwgZGlzcGxheSByZXN1bHRzIHBsZWFzZSBzdXBwbHkgYSAxNiB4IDE2cHggaWNvbiBhcyBsYXJnZXIgZGltZW5zaW9ucyB3aWxsIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgVGhlIENocm9tZSBleHRlbnNpb24gY29udGV4dE1lbnVzIEFQSSB3YXMgdGFrZW4gYXMgYSByZWZlcmVuY2UuXHJcbiAgICAgaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL2NvbnRleHRNZW51c1xyXG4gICAgICogLSB0aGUgaXRlbXMgd2l0aCBpY29ucyBhbmQgY2hlY2thYmxlIGl0ZW1zIGNhbm5vdCBjb2V4aXN0IG9uIHRoZSBzYW1lIG1lbnUgbGV2ZWwuIFRoZSBmb3JtZXIgdGFrZSBwcmVjZWRlbmNlcyBvdmVyIHRoZSBsYXR0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnUgICAgICBBIFhNTCBzdHJpbmcgd2hpY2ggZGVzY3JpYmVzIG1lbnUgc3RydWN0dXJlLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrICBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZC4gVGhlIG9ubHkgcGFyYW1ldGVyIGlzIHRoZSByZXR1cm5lZCBJRCBvZiBjbGlja2VkIG1lbnUgaXRlbS5cclxuICAgICAqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQW4gZXhhbXBsZSBtZW51IFhNTDpcclxuICAgICAqIDxNZW51PlxyXG4gICAgICogICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMVwiIExhYmVsPVwiVGVzdEV4YW1wbGUxXCIgRW5hYmxlZD1cInRydWVcIiBDaGVja2FibGU9XCJ0cnVlXCIgQ2hlY2tlZD1cImZhbHNlXCIgSWNvbj1cIi4vaW1hZ2Uvc21hbGxfMTZYMTYucG5nXCIvPlxyXG4gICAgICogICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMlwiIExhYmVsPVwiVGVzdEV4YW1wbGUyXCI+XHJcbiAgICAgKiAgICAgPE1lbnVJdGVtIElkPVwibWVudUl0ZW1JZDItMVwiIExhYmVsPVwiVGVzdEV4YW1wbGUyLTFcIiA+XHJcbiAgICAgKiAgICAgICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMi0xLTFcIiBMYWJlbD1cIlRlc3RFeGFtcGxlMi0xLTFcIiBFbmFibGVkPVwiZmFsc2VcIiBDaGVja2FibGU9XCJ0cnVlXCIgQ2hlY2tlZD1cInRydWVcIi8+XHJcbiAgICAgKiAgICAgPC9NZW51SXRlbT5cclxuICAgICAqICAgICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkMi0yXCIgTGFiZWw9XCJUZXN0RXhhbXBsZTItMlwiIEVuYWJsZWQ9XCJ0cnVlXCIgQ2hlY2thYmxlPVwidHJ1ZVwiIENoZWNrZWQ9XCJ0cnVlXCIvPlxyXG4gICAgICogICA8L01lbnVJdGVtPlxyXG4gICAgICogICA8TWVudUl0ZW0gTGFiZWw9XCItLS1cIiAvPlxyXG4gICAgICogICA8TWVudUl0ZW0gSWQ9XCJtZW51SXRlbUlkM1wiIExhYmVsPVwiVGVzdEV4YW1wbGUzXCIgRW5hYmxlZD1cImZhbHNlXCIgQ2hlY2thYmxlPVwidHJ1ZVwiIENoZWNrZWQ9XCJmYWxzZVwiLz5cclxuICAgICAqIDwvTWVudT5cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnNldENvbnRleHRNZW51ID0gZnVuY3Rpb24gKG1lbnUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIG1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VBc3luYyhcInNldENvbnRleHRNZW51XCIsIG1lbnUsIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFNldCBjb250ZXh0IG1lbnUgYnkgSlNPTiBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4wLjBcclxuICAgICAqXHJcbiAgICAgKiBUaGVyZSBhcmUgYSBudW1iZXIgb2YgY29udmVudGlvbnMgdXNlZCB0byBjb21tdW5pY2F0ZSB3aGF0IHR5cGUgb2YgbWVudSBpdGVtIHRvIGNyZWF0ZSBhbmQgaG93IGl0IHNob3VsZCBiZSBoYW5kbGVkLlxyXG4gICAgICogLSBhbiBpdGVtIHdpdGhvdXQgbWVudSBJRCBvciBtZW51IG5hbWUgaXMgZGlzYWJsZWQgYW5kIGlzIG5vdCBzaG93bi5cclxuICAgICAqIC0gaWYgdGhlIGl0ZW0gbGFiZWwgaXMgXCItLS1cIiAodGhyZWUgaHlwaGVucykgdGhlbiBpdCBpcyB0cmVhdGVkIGFzIGEgc2VwYXJhdG9yLiBUaGUgbWVudSBJRCBpbiB0aGlzIGNhc2Ugd2lsbCBhbHdheXMgYmUgTlVMTC5cclxuICAgICAqIC0gQ2hlY2thYmxlIGF0dHJpYnV0ZSB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgQ2hlY2tlZCBhdHRyaWJ1dGUuXHJcbiAgICAgKiAtIGEgUE5HIGljb24uIEZvciBvcHRpbWFsIGRpc3BsYXkgcmVzdWx0cyBwbGVhc2Ugc3VwcGx5IGEgMTYgeCAxNnB4IGljb24gYXMgbGFyZ2VyIGRpbWVuc2lvbnMgd2lsbCBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgbWVudSBpdGVtLlxyXG4gICAgIFRoZSBDaHJvbWUgZXh0ZW5zaW9uIGNvbnRleHRNZW51cyBBUEkgd2FzIHRha2VuIGFzIGEgcmVmZXJlbmNlLlxyXG4gICAgICogLSB0aGUgaXRlbXMgd2l0aCBpY29ucyBhbmQgY2hlY2thYmxlIGl0ZW1zIGNhbm5vdCBjb2V4aXN0IG9uIHRoZSBzYW1lIG1lbnUgbGV2ZWwuIFRoZSBmb3JtZXIgdGFrZSBwcmVjZWRlbmNlcyBvdmVyIHRoZSBsYXR0ZXIuXHJcbiAgICAgaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL2NvbnRleHRNZW51c1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51ICAgICAgQSBKU09OIHN0cmluZyB3aGljaCBkZXNjcmliZXMgbWVudSBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBjbGlja2VkLiBUaGUgb25seSBwYXJhbWV0ZXIgaXMgdGhlIHJldHVybmVkIElEIG9mIGNsaWNrZWQgbWVudSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBbiBleGFtcGxlIG1lbnUgSlNPTjpcclxuICAgICAqXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgICAgIFwibWVudVwiOiBbXHJcbiAgICAgKiAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQxXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlMVwiLFxyXG4gICAgICogICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgIFwiY2hlY2thYmxlXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IGZhbHNlLFxyXG4gICAgICogICAgICAgICAgICAgIFwiaWNvblwiOiBcIi4vaW1hZ2Uvc21hbGxfMTZYMTYucG5nXCJcclxuICAgICAqICAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgICAgICB7XHJcbiAgICAgKiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lbnVJdGVtSWQyXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcInRlc3RFeGFtcGxlMlwiLFxyXG4gICAgICogICAgICAgICAgICAgIFwibWVudVwiOiBbXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkMi0xXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUyLTFcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwibWVudVwiOiBbXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDItMS0xXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJ0ZXN0RXhhbXBsZTItMS0xXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiBmYWxzZSxcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2FibGVcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IHRydWVcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJtZW51SXRlbUlkMi0yXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUyLTJcIixcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB0cnVlLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2FibGVcIjogdHJ1ZSxcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiB0cnVlXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAqICAgICAgICAgICAgICBdXHJcbiAgICAgKiAgICAgICAgICB9LFxyXG4gICAgICogICAgICAgICAge1xyXG4gICAgICogICAgICAgICAgICAgIFwibGFiZWxcIjogXCItLS1cIlxyXG4gICAgICogICAgICAgICAgfSxcclxuICAgICAqICAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICBcImlkXCI6IFwibWVudUl0ZW1JZDNcIixcclxuICAgICAqICAgICAgICAgICAgICBcImxhYmVsXCI6IFwidGVzdEV4YW1wbGUzXCIsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJlbmFibGVkXCI6IGZhbHNlLFxyXG4gICAgICogICAgICAgICAgICAgIFwiY2hlY2thYmxlXCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IGZhbHNlXHJcbiAgICAgKiAgICAgICAgICB9XHJcbiAgICAgKiAgICAgIF1cclxuICAgICAqICB9XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuc2V0Q29udGV4dE1lbnVCeUpTT04gPSBmdW5jdGlvbiAobWVudSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5fX2Fkb2JlX2NlcF9fLmludm9rZUFzeW5jKFwic2V0Q29udGV4dE1lbnVCeUpTT05cIiwgbWVudSwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIGNvbnRleHQgbWVudSBpdGVtIGJ5IHNldHRpbmcgdGhlIGVuYWJsZWQgYW5kIHNlbGVjdGlvbiBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNS4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVudUl0ZW1JRCAgICBUaGUgbWVudSBpdGVtIElELlxyXG4gICAgICogQHBhcmFtIGVuYWJsZWQgICAgICAgIFRydWUgdG8gZW5hYmxlIHRoZSBpdGVtLCBmYWxzZSB0byBkaXNhYmxlIGl0IChncmF5IGl0IG91dCkuXHJcbiAgICAgKiBAcGFyYW0gY2hlY2tlZCAgICAgICAgVHJ1ZSB0byBzZWxlY3QgdGhlIGl0ZW0sIGZhbHNlIHRvIGRlc2VsZWN0IGl0LlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUudXBkYXRlQ29udGV4dE1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVJdGVtSUQsIGVuYWJsZWQsIGNoZWNrZWQpIHtcclxuICAgICAgICB2YXIgaXRlbVN0YXR1cyA9IG5ldyBDb250ZXh0TWVudUl0ZW1TdGF0dXMobWVudUl0ZW1JRCwgZW5hYmxlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgcmV0ID0gd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcInVwZGF0ZUNvbnRleHRNZW51SXRlbVwiLCBKU09OLnN0cmluZ2lmeShpdGVtU3RhdHVzKSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZpc2liaWxpdHkgc3RhdHVzIG9mIGFuIGV4dGVuc2lvbiB3aW5kb3cuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4wLjBcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGV4dGVuc2lvbiB3aW5kb3cgaXMgdmlzaWJsZTsgZmFsc2UgaWYgdGhlIGV4dGVuc2lvbiB3aW5kb3cgaXMgaGlkZGVuLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuaXNXaW5kb3dWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwiaXNXaW5kb3dWaXNpYmxlXCIsIFwiXCIpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplIGV4dGVuc2lvbidzIGNvbnRlbnQgdG8gdGhlIHNwZWNpZmllZCBkaW1lbnNpb25zLlxyXG4gICAgICogMS4gV29ya3Mgd2l0aCBtb2RhbCBhbmQgbW9kZWxlc3MgZXh0ZW5zaW9ucyBpbiBhbGwgQWRvYmUgcHJvZHVjdHMuXHJcbiAgICAgKiAyLiBFeHRlbnNpb24ncyBtYW5pZmVzdCBtaW4vbWF4IHNpemUgY29uc3RyYWludHMgYXBwbHkgYW5kIHRha2UgcHJlY2VkZW5jZS5cclxuICAgICAqIDMuIEZvciBwYW5lbCBleHRlbnNpb25zXHJcbiAgICAgKiAgICAzLjEgVGhpcyB3b3JrcyBpbiBhbGwgQWRvYmUgcHJvZHVjdHMgZXhjZXB0OlxyXG4gICAgICogICAgICAgICogUHJlbWllcmUgUHJvXHJcbiAgICAgKiAgICAgICAgKiBQcmVsdWRlXHJcbiAgICAgKiAgICAgICAgKiBBZnRlciBFZmZlY3RzXHJcbiAgICAgKiAgICAzLjIgV2hlbiB0aGUgcGFuZWwgaXMgaW4gY2VydGFpbiBzdGF0ZXMgKGVzcGVjaWFsbHkgd2hlbiBiZWluZyBkb2NrZWQpLFxyXG4gICAgICogICAgICAgIGl0IHdpbGwgbm90IGNoYW5nZSB0byB0aGUgZGVzaXJlZCBkaW1lbnNpb25zIGV2ZW4gd2hlbiB0aGVcclxuICAgICAqICAgICAgICBzcGVjaWZpZWQgc2l6ZSBzYXRpc2ZpZXMgbWluL21heCBjb25zdHJhaW50cy5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjAuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB3aWR0aCAgVGhlIG5ldyB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodCBUaGUgbmV3IGhlaWdodFxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUucmVzaXplQ29udGVudCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgd2luZG93Ll9fYWRvYmVfY2VwX18ucmVzaXplQ29udGVudCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIHRoZSBpbnZhbGlkIGNlcnRpZmljYXRlIGNhbGxiYWNrIGZvciBhbiBleHRlbnNpb24uXHJcbiAgICAgKiBUaGlzIGNhbGxiYWNrIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGV4dGVuc2lvbiB0cmllcyB0byBhY2Nlc3MgdGhlIHdlYiBzaXRlIHRoYXQgY29udGFpbnMgdGhlIGludmFsaWQgY2VydGlmaWNhdGUgb24gdGhlIG1haW4gZnJhbWUuXHJcbiAgICAgKiBCdXQgaWYgdGhlIGV4dGVuc2lvbiBkb2VzIG5vdCBjYWxsIHRoaXMgZnVuY3Rpb24gYW5kIHRyaWVzIHRvIGFjY2VzcyB0aGUgd2ViIHNpdGUgY29udGFpbmluZyB0aGUgaW52YWxpZCBjZXJ0aWZpY2F0ZSwgYSBkZWZhdWx0IGVycm9yIHBhZ2Ugd2lsbCBiZSBzaG93bi5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjEuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnJlZ2lzdGVySW52YWxpZENlcnRpZmljYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18ucmVnaXN0ZXJJbnZhbGlkQ2VydGlmaWNhdGVDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBpbnRlcmVzdCBpbiBzb21lIGtleSBldmVudHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVpbmcgc2VudCB0byB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdvcmtzIHdpdGggbW9kZWxlc3MgZXh0ZW5zaW9ucyBhbmQgcGFuZWwgZXh0ZW5zaW9ucy5cclxuICAgICAqIEdlbmVyYWxseSBhbGwgdGhlIGtleSBldmVudHMgd2lsbCBiZSBzZW50IHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uIGZvciB0aGVzZSB0d28gZXh0ZW5zaW9ucyBpZiB0aGUgY3VycmVudCBmb2N1c2VkIGVsZW1lbnRcclxuICAgICAqIGlzIG5vdCB0ZXh0IGlucHV0IG9yIGRyb3Bkb3duLFxyXG4gICAgICogSWYgeW91IHdhbnQgdG8gaW50ZXJjZXB0IHNvbWUga2V5IGV2ZW50cyBhbmQgd2FudCB0aGVtIHRvIGJlIGhhbmRsZWQgaW4gdGhlIGV4dGVuc2lvbiwgcGxlYXNlIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAgICogaW4gYWR2YW5jZSB0byBwcmV2ZW50IHRoZW0gYmVpbmcgc2VudCB0byB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjEuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlFdmVudHNJbnRlcmVzdCAgICAgIEEgSlNPTiBzdHJpbmcgZGVzY3JpYmluZyB0aG9zZSBrZXkgZXZlbnRzIHlvdSBhcmUgaW50ZXJlc3RlZCBpbi4gQSBudWxsIG9iamVjdCBvclxyXG4gICAgIGFuIGVtcHR5IHN0cmluZyB3aWxsIGxlYWQgdG8gcmVtb3ZpbmcgdGhlIGludGVyZXN0XHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBKU09OIHN0cmluZyBzaG91bGQgYmUgYW4gYXJyYXksIGVhY2ggb2JqZWN0IGhhcyBmb2xsb3dpbmcga2V5czpcclxuICAgICAqXHJcbiAgICAgKiBrZXlDb2RlOiAgW1JlcXVpcmVkXSByZXByZXNlbnRzIGFuIE9TIHN5c3RlbSBkZXBlbmRlbnQgdmlydHVhbCBrZXkgY29kZSBpZGVudGlmeWluZ1xyXG4gICAgICogICAgICAgICAgIHRoZSB1bm1vZGlmaWVkIHZhbHVlIG9mIHRoZSBwcmVzc2VkIGtleS5cclxuICAgICAqIGN0cmxLZXk6ICBbb3B0aW9uYWxdIGEgQm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgY29udHJvbCBrZXkgd2FzIHByZXNzZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpIHdoZW4gdGhlIGV2ZW50IG9jY3VycmVkLlxyXG4gICAgICogYWx0S2V5OiAgIFtvcHRpb25hbF0gYSBCb29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBhbHQga2V5IHdhcyBwcmVzc2VkICh0cnVlKSBvciBub3QgKGZhbHNlKSB3aGVuIHRoZSBldmVudCBvY2N1cnJlZC5cclxuICAgICAqIHNoaWZ0S2V5OiBbb3B0aW9uYWxdIGEgQm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgc2hpZnQga2V5IHdhcyBwcmVzc2VkICh0cnVlKSBvciBub3QgKGZhbHNlKSB3aGVuIHRoZSBldmVudCBvY2N1cnJlZC5cclxuICAgICAqIG1ldGFLZXk6ICBbb3B0aW9uYWxdIChNYWMgT25seSkgYSBCb29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBNZXRhIGtleSB3YXMgcHJlc3NlZCAodHJ1ZSkgb3Igbm90IChmYWxzZSkgd2hlbiB0aGUgZXZlbnQgb2NjdXJyZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICBPbiBNYWNpbnRvc2gga2V5Ym9hcmRzLCB0aGlzIGlzIHRoZSBjb21tYW5kIGtleS4gVG8gZGV0ZWN0IFdpbmRvd3Mga2V5IG9uIFdpbmRvd3MsIHBsZWFzZSB1c2Uga2V5Q29kZSBpbnN0ZWFkLlxyXG4gICAgICogQW4gZXhhbXBsZSBKU09OIHN0cmluZzpcclxuICAgICAqXHJcbiAgICAgKiBbXHJcbiAgICAgKiAgICAge1xyXG4gICAgICogICAgICAgICBcImtleUNvZGVcIjogNDhcclxuICAgICAqICAgICB9LFxyXG4gICAgICogICAgIHtcclxuICAgICAqICAgICAgICAgXCJrZXlDb2RlXCI6IDEyMyxcclxuICAgICAqICAgICAgICAgXCJjdHJsS2V5XCI6IHRydWVcclxuICAgICAqICAgICB9LFxyXG4gICAgICogICAgIHtcclxuICAgICAqICAgICAgICAgXCJrZXlDb2RlXCI6IDEyMyxcclxuICAgICAqICAgICAgICAgXCJjdHJsS2V5XCI6IHRydWUsXHJcbiAgICAgKiAgICAgICAgIFwibWV0YUtleVwiOiB0cnVlXHJcbiAgICAgKiAgICAgfVxyXG4gICAgICogXVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgQ1NJbnRlcmZhY2UucHJvdG90eXBlLnJlZ2lzdGVyS2V5RXZlbnRzSW50ZXJlc3QgPSBmdW5jdGlvbiAoa2V5RXZlbnRzSW50ZXJlc3QpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18ucmVnaXN0ZXJLZXlFdmVudHNJbnRlcmVzdChrZXlFdmVudHNJbnRlcmVzdCk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHRpdGxlIG9mIHRoZSBleHRlbnNpb24gd2luZG93LlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3b3JrcyB3aXRoIG1vZGFsIGFuZCBtb2RlbGVzcyBleHRlbnNpb25zIGluIGFsbCBBZG9iZSBwcm9kdWN0cywgYW5kIHBhbmVsIGV4dGVuc2lvbnMgaW4gUGhvdG9zaG9wLCBJbkRlc2lnbiwgSW5Db3B5LCBJbGx1c3RyYXRvciwgRmxhc2ggUHJvIGFuZCBEcmVhbXdlYXZlci5cclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA2LjEuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0aXRsZSBUaGUgd2luZG93IHRpdGxlLlxyXG4gICAgICovXHJcbiAgICBDU0ludGVyZmFjZS5wcm90b3R5cGUuc2V0V2luZG93VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuICAgICAgICB3aW5kb3cuX19hZG9iZV9jZXBfXy5pbnZva2VTeW5jKFwic2V0V2luZG93VGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0aXRsZSBvZiB0aGUgZXh0ZW5zaW9uIHdpbmRvdy5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd29ya3Mgd2l0aCBtb2RhbCBhbmQgbW9kZWxlc3MgZXh0ZW5zaW9ucyBpbiBhbGwgQWRvYmUgcHJvZHVjdHMsIGFuZCBwYW5lbCBleHRlbnNpb25zIGluIFBob3Rvc2hvcCwgSW5EZXNpZ24sIEluQ29weSwgSWxsdXN0cmF0b3IsIEZsYXNoIFBybyBhbmQgRHJlYW13ZWF2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNi4xLjBcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFRoZSB3aW5kb3cgdGl0bGUuXHJcbiAgICAgKi9cclxuICAgIENTSW50ZXJmYWNlLnByb3RvdHlwZS5nZXRXaW5kb3dUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Ll9fYWRvYmVfY2VwX18uaW52b2tlU3luYyhcImdldFdpbmRvd1RpdGxlXCIsIFwiXCIpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBDU0ludGVyZmFjZTtcclxufSgpKTtcclxuZXhwb3J0cy5DU0ludGVyZmFjZSA9IENTSW50ZXJmYWNlO1xyXG4vKipcclxuICogQ2xhc3MgQ1NFdmVudC5cclxuICogWW91IGNhbiB1c2UgaXQgdG8gZGlzcGF0Y2ggYSBzdGFuZGFyZCBDRVAgZXZlbnQuXHJcbiAqXHJcbiAqIEByZXR1cm4gQ1NFdmVudCBvYmplY3RcclxuICovXHJcbnZhciBDU0V2ZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgbmV3IGluc3RhbmNlIG9mIENTRXZlbnQgb2JqZWN0LlxyXG4gICAgICogWW91IGNhbiB1c2UgaXQgdG8gZGlzcGF0Y2ggYSBzdGFuZGFyZCBDRVAgZXZlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGUgICAgICAgIEV2ZW50IHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGUgICAgICAgVGhlIHNjb3BlIG9mIGV2ZW50LCBjYW4gYmUgXCJHTE9CQUxcIiBvciBcIkFQUExJQ0FUSU9OXCIuXHJcbiAgICAgKiBAcGFyYW0gYXBwSWQgICAgICAgVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhcHBsaWNhdGlvbiB0aGF0IGdlbmVyYXRlZCB0aGUgZXZlbnQuIE9wdGlvbmFsLlxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbklkIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZXh0ZW5zaW9uIHRoYXQgZ2VuZXJhdGVkIHRoZSBldmVudC4gT3B0aW9uYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENTRXZlbnQodHlwZSwgc2NvcGUsIGFwcElkLCBleHRlbnNpb25JZCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbklkID0gZXh0ZW5zaW9uSWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXZlbnQtc3BlY2lmaWMgZGF0YS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRhdGEgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENTRXZlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ1NFdmVudCA9IENTRXZlbnQ7XHJcbi8qKlxyXG4gKiBAY2xhc3MgU3lzdGVtUGF0aFxyXG4gKiBTdG9yZXMgb3BlcmF0aW5nLXN5c3RlbS1zcGVjaWZpYyBsb2NhdGlvbiBjb25zdGFudHMgZm9yIHVzZSBpbiB0aGVcclxuICogXFxjICNDU0ludGVyZmFjZS5nZXRTeXN0ZW1QYXRoKCkgbWV0aG9kLlxyXG4gKi9cclxudmFyIFN5c3RlbVBhdGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3lzdGVtUGF0aCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBTeXN0ZW1QYXRoO1xyXG59KCkpO1xyXG4vKiogVGhlIHBhdGggdG8gdXNlciBkYXRhLiAgKi9cclxuU3lzdGVtUGF0aC5VU0VSX0RBVEEgPSBcInVzZXJEYXRhXCI7XHJcbi8qKiBUaGUgcGF0aCB0byBjb21tb24gZmlsZXMgZm9yIEFkb2JlIGFwcGxpY2F0aW9ucy4gICovXHJcblN5c3RlbVBhdGguQ09NTU9OX0ZJTEVTID0gXCJjb21tb25GaWxlc1wiO1xyXG4vKiogVGhlIHBhdGggdG8gdGhlIHVzZXIncyBkZWZhdWx0IGRvY3VtZW50IGZvbGRlci4gICovXHJcblN5c3RlbVBhdGguTVlfRE9DVU1FTlRTID0gXCJteURvY3VtZW50c1wiO1xyXG4vKiogQGRlcHJlY2F0ZWQuIFVzZSBcXGMgI1N5c3RlbVBhdGguRXh0ZW5zaW9uLiAgKi9cclxuU3lzdGVtUGF0aC5BUFBMSUNBVElPTiA9IFwiYXBwbGljYXRpb25cIjtcclxuLyoqIFRoZSBwYXRoIHRvIGN1cnJlbnQgZXh0ZW5zaW9uLiAgKi9cclxuU3lzdGVtUGF0aC5FWFRFTlNJT04gPSBcImV4dGVuc2lvblwiO1xyXG4vKiogVGhlIHBhdGggdG8gaG9zdGluZyBhcHBsaWNhdGlvbidzIGV4ZWN1dGFibGUuICAqL1xyXG5TeXN0ZW1QYXRoLkhPU1RfQVBQTElDQVRJT04gPSBcImhvc3RBcHBsaWNhdGlvblwiO1xyXG5leHBvcnRzLlN5c3RlbVBhdGggPSBTeXN0ZW1QYXRoO1xyXG4vKipcclxuICogQGNsYXNzIENvbG9yVHlwZVxyXG4gKiBTdG9yZXMgY29sb3ItdHlwZSBjb25zdGFudHMuXHJcbiAqL1xyXG52YXIgQ29sb3JUeXBlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbG9yVHlwZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBDb2xvclR5cGU7XHJcbn0oKSk7XHJcbi8qKiBSR0IgY29sb3IgdHlwZS4gKi9cclxuQ29sb3JUeXBlLlJHQiA9IFwicmdiXCI7XHJcbi8qKiBHcmFkaWVudCBjb2xvciB0eXBlLiAqL1xyXG5Db2xvclR5cGUuR1JBRElFTlQgPSBcImdyYWRpZW50XCI7XHJcbi8qKiBOdWxsIGNvbG9yIHR5cGUuICovXHJcbkNvbG9yVHlwZS5OT05FID0gXCJub25lXCI7XHJcbmV4cG9ydHMuQ29sb3JUeXBlID0gQ29sb3JUeXBlO1xyXG4vKipcclxuICogQGNsYXNzIFJHQkNvbG9yXHJcbiAqIFN0b3JlcyBhbiBSR0IgY29sb3Igd2l0aCByZWQsIGdyZWVuLCBibHVlLCBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gKiBBbGwgdmFsdWVzIGFyZSBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uIEludmFsaWQgbnVtZXJpYyB2YWx1ZXMgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBudW1iZXJzIHdpdGhpbiB0aGlzIHJhbmdlLlxyXG4gKlxyXG4gKi9cclxudmFyIFJHQkNvbG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGFuIFJHQiBjb2xvciB3aXRoIHJlZCwgZ3JlZW4sIGJsdWUsIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBBbGwgdmFsdWVzIGFyZSBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uIEludmFsaWQgbnVtZXJpYyB2YWx1ZXMgYXJlXHJcbiAgICAgKiBjb252ZXJ0ZWQgdG8gbnVtYmVycyB3aXRoaW4gdGhpcyByYW5nZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcmVkICAgVGhlIHJlZCB2YWx1ZSwgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLlxyXG4gICAgICogQHBhcmFtIGdyZWVuIFRoZSBncmVlbiB2YWx1ZSwgaW4gdGhlIHJhbmdlIFswLjAgdG8gMjU1LjBdLlxyXG4gICAgICogQHBhcmFtIGJsdWUgIFRoZSBibHVlIHZhbHVlLCBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uXHJcbiAgICAgKiBAcGFyYW0gYWxwaGEgVGhlIGFscGhhICh0cmFuc3BhcmVuY3kpIHZhbHVlLCBpbiB0aGUgcmFuZ2UgWzAuMCB0byAyNTUuMF0uXHJcbiAgICAgKiAgICAgIFRoZSBkZWZhdWx0LCAyNTUuMCwgbWVhbnMgdGhhdCB0aGUgY29sb3IgaXMgZnVsbHkgb3BhcXVlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSR0JDb2xvcihyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSkge1xyXG4gICAgICAgIHRoaXMucmVkID0gcmVkO1xyXG4gICAgICAgIHRoaXMuZ3JlZW4gPSBncmVlbjtcclxuICAgICAgICB0aGlzLmJsdWUgPSBibHVlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYTtcclxuICAgIH1cclxuICAgIHJldHVybiBSR0JDb2xvcjtcclxufSgpKTtcclxuZXhwb3J0cy5SR0JDb2xvciA9IFJHQkNvbG9yO1xyXG4vKipcclxuICogQGNsYXNzIERpcmVjdGlvblxyXG4gKiBBIHBvaW50IHZhbHVlICBpbiB3aGljaCB0aGUgeSBjb21wb25lbnQgaXMgMCBhbmQgdGhlIHggY29tcG9uZW50XHJcbiAqIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGZvciBhIHJpZ2h0IG9yIGxlZnQgZGlyZWN0aW9uLFxyXG4gKiBvciB0aGUgeCBjb21wb25lbnQgaXMgMCBhbmQgdGhlIHkgY29tcG9uZW50IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGZvclxyXG4gKiBhbiB1cCBvciBkb3duIGRpcmVjdGlvbi5cclxuICovXHJcbnZhciBEaXJlY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHBvaW50IHZhbHVlICBpbiB3aGljaCB0aGUgeSBjb21wb25lbnQgaXMgMCBhbmQgdGhlIHggY29tcG9uZW50XHJcbiAgICAgKiBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBmb3IgYSByaWdodCBvciBsZWZ0IGRpcmVjdGlvbixcclxuICAgICAqIG9yIHRoZSB4IGNvbXBvbmVudCBpcyAwIGFuZCB0aGUgeSBjb21wb25lbnQgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUgZm9yXHJcbiAgICAgKiBhbiB1cCBvciBkb3duIGRpcmVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geCAgICAgVGhlIGhvcml6b250YWwgY29tcG9uZW50IG9mIHRoZSBwb2ludC5cclxuICAgICAqIEBwYXJhbSB5ICAgICBUaGUgdmVydGljYWwgY29tcG9uZW50IG9mIHRoZSBwb2ludC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gRGlyZWN0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGlyZWN0aW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkRpcmVjdGlvbiA9IERpcmVjdGlvbjtcclxuLyoqXHJcbiAqIEBjbGFzcyBHcmFkaWVudFN0b3BcclxuICogU3RvcmVzIGdyYWRpZW50IHN0b3AgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG52YXIgR3JhZGllbnRTdG9wID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGdyYWRpZW50IHN0b3AgaW5mb3JtYXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9mZnNldCAgIFRoZSBvZmZzZXQgb2YgdGhlIGdyYWRpZW50IHN0b3AsIGluIHRoZSByYW5nZSBbMC4wIHRvIDEuMF0uXHJcbiAgICAgKiBAcGFyYW0gcmdiQ29sb3IgVGhlIGNvbG9yIG9mIHRoZSBncmFkaWVudCBhdCB0aGlzIHBvaW50LCBhbiBcXGMgI1JHQkNvbG9yIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gR3JhZGllbnRTdG9wKG9mZnNldCwgcmdiQ29sb3IpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICB0aGlzLnJnYkNvbG9yID0gcmdiQ29sb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR3JhZGllbnRTdG9wO1xyXG59KCkpO1xyXG5leHBvcnRzLkdyYWRpZW50U3RvcCA9IEdyYWRpZW50U3RvcDtcclxuLyoqXHJcbiAqIEBjbGFzcyBHcmFkaWVudENvbG9yXHJcbiAqIFN0b3JlcyBncmFkaWVudCBjb2xvciBpbmZvcm1hdGlvbi5cclxuICovXHJcbnZhciBHcmFkaWVudENvbG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgbmV3IFxcYyAjR3JhZGllbnRDb2xvciBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZSAgICAgICAgICBUaGUgZ3JhZGllbnQgdHlwZSwgbXVzdCBiZSBcImxpbmVhclwiLlxyXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiAgICAgQSBcXGMgI0RpcmVjdGlvbiBvYmplY3QgZm9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGdyYWRpZW50XHJcbiAgICAgKHVwLCBkb3duLCByaWdodCwgb3IgbGVmdCkuXHJcbiAgICAgKiBAcGFyYW0gbnVtU3RvcHMgICAgICAgICAgVGhlIG51bWJlciBvZiBzdG9wcyBpbiB0aGUgZ3JhZGllbnQuXHJcbiAgICAgKiBAcGFyYW0gZ3JhZGllbnRTdG9wTGlzdCAgQW4gYXJyYXkgb2YgXFxjICNHcmFkaWVudFN0b3Agb2JqZWN0cy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gR3JhZGllbnRDb2xvcih0eXBlLCBkaXJlY3Rpb24sIG51bVN0b3BzLCBhcnJHcmFkaWVudFN0b3ApIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMubnVtU3RvcHMgPSBudW1TdG9wcztcclxuICAgICAgICB0aGlzLmFyckdyYWRpZW50U3RvcCA9IGFyckdyYWRpZW50U3RvcDtcclxuICAgIH1cclxuICAgIHJldHVybiBHcmFkaWVudENvbG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkdyYWRpZW50Q29sb3IgPSBHcmFkaWVudENvbG9yO1xyXG4vKipcclxuICogQGNsYXNzIFVJQ29sb3JcclxuICogU3RvcmVzIGNvbG9yIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgdGhlIHR5cGUsIGFudGktYWxpYXMgbGV2ZWwsIGFuZCBzcGVjaWZpYyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gYSBjb2xvciBvYmplY3Qgb2YgYW4gYXBwcm9wcmlhdGUgdHlwZS5cclxuICovXHJcbnZhciBVSUNvbG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGNvbG9yIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgdGhlIHR5cGUsIGFudGktYWxpYXMgbGV2ZWwsIGFuZCBzcGVjaWZpYyBjb2xvclxyXG4gICAgICogdmFsdWVzIGluIGEgY29sb3Igb2JqZWN0IG9mIGFuIGFwcHJvcHJpYXRlIHR5cGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGUgICAgICAgICAgVGhlIGNvbG9yIHR5cGUsIDEgZm9yIFwicmdiXCIgYW5kIDIgZm9yIFwiZ3JhZGllbnRcIi5cclxuICAgICBUaGUgc3VwcGxpZWQgY29sb3Igb2JqZWN0IG11c3QgY29ycmVzcG9uZCB0byB0aGlzIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gYW50aWFsaWFzTGV2ZWwgICAgVGhlIGFudGktYWxpYXMgbGV2ZWwgY29uc3RhbnQuXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgICAgICAgICBBIFxcYyAjUkdCQ29sb3Igb3IgXFxjICNHcmFkaWVudENvbG9yIG9iamVjdCBjb250YWluaW5nIHNwZWNpZmljIGNvbG9yIGluZm9ybWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBVSUNvbG9yKHR5cGUsIGFudGlhbGlhc0xldmVsLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbnRpYWxpYXNMZXZlbCA9IGFudGlhbGlhc0xldmVsO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBVSUNvbG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLlVJQ29sb3IgPSBVSUNvbG9yO1xyXG4vKipcclxuICogQGNsYXNzIEFwcFNraW5JbmZvXHJcbiAqIFN0b3JlcyB3aW5kb3ctc2tpbiBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNvbG9yIGFuZCBmb250LiBBbGwgY29sb3IgcGFyYW1ldGVyIHZhbHVlcyBhcmUgXFxjICNVSUNvbG9yIG9iamVjdHMgZXhjZXB0IHRoYXQgc3lzdGVtSGlnaGxpZ2h0Q29sb3IgaXMgXFxjICNSR0JDb2xvciBvYmplY3QuXHJcbiAqL1xyXG52YXIgQXBwU2tpbkluZm8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgd2luZG93LXNraW4gcHJvcGVydGllcywgc3VjaCBhcyBjb2xvciBhbmQgZm9udC4gQWxsIGNvbG9yIHBhcmFtZXRlciB2YWx1ZXMgYXJlIFxcYyAjVUlDb2xvciBvYmplY3RzIGV4Y2VwdCB0aGF0IHN5c3RlbUhpZ2hsaWdodENvbG9yIGlzIFxcYyAjUkdCQ29sb3Igb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBiYXNlRm9udEZhbWlseSAgICAgICAgVGhlIGJhc2UgZm9udCBmYW1pbHkgb2YgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIGJhc2VGb250U2l6ZSAgICAgICAgICBUaGUgYmFzZSBmb250IHNpemUgb2YgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIGFwcEJhckJhY2tncm91bmRDb2xvciAgICAgVGhlIGFwcGxpY2F0aW9uIGJhciBiYWNrZ3JvdW5kIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIHBhbmVsQmFja2dyb3VuZENvbG9yICAgICAgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGV4dGVuc2lvbiBwYW5lbC5cclxuICAgICAqIEBwYXJhbSBhcHBCYXJCYWNrZ3JvdW5kQ29sb3JTUkdCICAgICBUaGUgYXBwbGljYXRpb24gYmFyIGJhY2tncm91bmQgY29sb3IsIGFzIHNSR0IuXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxCYWNrZ3JvdW5kQ29sb3JTUkdCICAgICAgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGV4dGVuc2lvbiBwYW5lbCwgYXMgc1JHQi5cclxuICAgICAqIEBwYXJhbSBzeXN0ZW1IaWdobGlnaHRDb2xvciAgICAgICAgICBUaGUgb3BlcmF0aW5nLXN5c3RlbSBoaWdobGlnaHQgY29sb3IsIGFzIHNSR0IuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEFwcFNraW5JbmZvKGJhc2VGb250RmFtaWx5LCBiYXNlRm9udFNpemUsIGFwcEJhckJhY2tncm91bmRDb2xvciwgcGFuZWxCYWNrZ3JvdW5kQ29sb3IsIGFwcEJhckJhY2tncm91bmRDb2xvclNSR0IsIHBhbmVsQmFja2dyb3VuZENvbG9yU1JHQiwgc3lzdGVtSGlnaGxpZ2h0Q29sb3IpIHtcclxuICAgICAgICB0aGlzLmJhc2VGb250RmFtaWx5ID0gYmFzZUZvbnRGYW1pbHk7XHJcbiAgICAgICAgdGhpcy5iYXNlRm9udFNpemUgPSBiYXNlRm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5hcHBCYXJCYWNrZ3JvdW5kQ29sb3IgPSBhcHBCYXJCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5wYW5lbEJhY2tncm91bmRDb2xvciA9IHBhbmVsQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuYXBwQmFyQmFja2dyb3VuZENvbG9yU1JHQiA9IGFwcEJhckJhY2tncm91bmRDb2xvclNSR0I7XHJcbiAgICAgICAgdGhpcy5wYW5lbEJhY2tncm91bmRDb2xvclNSR0IgPSBwYW5lbEJhY2tncm91bmRDb2xvclNSR0I7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1IaWdobGlnaHRDb2xvciA9IHN5c3RlbUhpZ2hsaWdodENvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFwcFNraW5JbmZvO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcFNraW5JbmZvID0gQXBwU2tpbkluZm87XHJcbi8qKlxyXG4gKiBAY2xhc3MgSG9zdEVudmlyb25tZW50XHJcbiAqIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW52aXJvbm1lbnQgaW4gd2hpY2ggdGhlIGV4dGVuc2lvbiBpcyBsb2FkZWQuXHJcbiAqL1xyXG52YXIgSG9zdEVudmlyb25tZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbnZpcm9ubWVudCBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGlzIGxvYWRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXBwTmFtZSAgIFRoZSBhcHBsaWNhdGlvbidzIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gYXBwVmVyc2lvbiAgICBUaGUgYXBwbGljYXRpb24ncyB2ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIGFwcExvY2FsZSBUaGUgYXBwbGljYXRpb24ncyBjdXJyZW50IGxpY2Vuc2UgbG9jYWxlLlxyXG4gICAgICogQHBhcmFtIGFwcFVJTG9jYWxlICAgVGhlIGFwcGxpY2F0aW9uJ3MgY3VycmVudCBVSSBsb2NhbGUuXHJcbiAgICAgKiBAcGFyYW0gYXBwSWQgICAgIFRoZSBhcHBsaWNhdGlvbidzIHVuaXF1ZSBpZGVudGlmaWVyLlxyXG4gICAgICogQHBhcmFtIGlzQXBwT25saW5lICBUcnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBjdXJyZW50bHkgb25saW5lLlxyXG4gICAgICogQHBhcmFtIGFwcFNraW5JbmZvICAgQW4gXFxjICNBcHBTa2luSW5mbyBvYmplY3QgY29udGFpbmluZyB0aGUgYXBwbGljYXRpb24ncyBkZWZhdWx0IGNvbG9yIGFuZCBmb250IHN0eWxlcy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gSG9zdEVudmlyb25tZW50KGFwcE5hbWUsIGFwcFZlcnNpb24sIGFwcExvY2FsZSwgYXBwVUlMb2NhbGUsIGFwcElkLCBpc0FwcE9ubGluZSwgYXBwU2tpbkluZm8pIHtcclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSBhcHBOYW1lO1xyXG4gICAgICAgIHRoaXMuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XHJcbiAgICAgICAgdGhpcy5hcHBMb2NhbGUgPSBhcHBMb2NhbGU7XHJcbiAgICAgICAgdGhpcy5hcHBVSUxvY2FsZSA9IGFwcFVJTG9jYWxlO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICAgICAgICB0aGlzLmlzQXBwT25saW5lID0gaXNBcHBPbmxpbmU7XHJcbiAgICAgICAgdGhpcy5hcHBTa2luSW5mbyA9IGFwcFNraW5JbmZvO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEhvc3RFbnZpcm9ubWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Ib3N0RW52aXJvbm1lbnQgPSBIb3N0RW52aXJvbm1lbnQ7XHJcbi8qKlxyXG4gKiBAY2xhc3MgSG9zdENhcGFiaWxpdGllc1xyXG4gKiBTdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGhvc3QgY2FwYWJpbGl0aWVzLlxyXG4gKi9cclxudmFyIEhvc3RDYXBhYmlsaXRpZXMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGhvc3QgY2FwYWJpbGl0aWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBFWFRFTkRFRF9QQU5FTF9NRU5VIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIHN1cHBvcnRzIHBhbmVsIG1lbnUuXHJcbiAgICAgKiBAcGFyYW0gRVhURU5ERURfUEFORUxfSUNPTlMgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gc3VwcG9ydHMgcGFuZWwgaWNvbi5cclxuICAgICAqIEBwYXJhbSBERUxFR0FURV9BUEVfRU5HSU5FIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIHN1cHBvcnRzIGRlbGVnYXRlZCBBUEUgZW5naW5lLlxyXG4gICAgICogQHBhcmFtIFNVUFBPUlRfSFRNTF9FWFRFTlNJT05TIFRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEhUTUwgZXh0ZW5zaW9ucy5cclxuICAgICAqIEBwYXJhbSBESVNBQkxFX0ZMQVNIX0VYVEVOU0lPTlMgVHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gZGlzYWJsZXMgRkxBU0ggZXh0ZW5zaW9ucy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gSG9zdENhcGFiaWxpdGllcyhFWFRFTkRFRF9QQU5FTF9NRU5VLCBFWFRFTkRFRF9QQU5FTF9JQ09OUywgREVMRUdBVEVfQVBFX0VOR0lORSwgU1VQUE9SVF9IVE1MX0VYVEVOU0lPTlMsIERJU0FCTEVfRkxBU0hfRVhURU5TSU9OUykge1xyXG4gICAgICAgIHRoaXMuRVhURU5ERURfUEFORUxfTUVOVSA9IEVYVEVOREVEX1BBTkVMX01FTlU7XHJcbiAgICAgICAgdGhpcy5FWFRFTkRFRF9QQU5FTF9JQ09OUyA9IEVYVEVOREVEX1BBTkVMX0lDT05TO1xyXG4gICAgICAgIHRoaXMuREVMRUdBVEVfQVBFX0VOR0lORSA9IERFTEVHQVRFX0FQRV9FTkdJTkU7XHJcbiAgICAgICAgdGhpcy5TVVBQT1JUX0hUTUxfRVhURU5TSU9OUyA9IFNVUFBPUlRfSFRNTF9FWFRFTlNJT05TO1xyXG4gICAgICAgIHRoaXMuRElTQUJMRV9GTEFTSF9FWFRFTlNJT05TID0gRElTQUJMRV9GTEFTSF9FWFRFTlNJT05TO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEhvc3RDYXBhYmlsaXRpZXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSG9zdENhcGFiaWxpdGllcyA9IEhvc3RDYXBhYmlsaXRpZXM7XHJcbi8qKlxyXG4gKiBAY2xhc3MgQXBpVmVyc2lvblxyXG4gKiBTdG9yZXMgY3VycmVudCBhcGkgdmVyc2lvbi5cclxuICpcclxuICogU2luY2UgNC4yLjBcclxuICovXHJcbnZhciBBcGlWZXJzaW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIGN1cnJlbnQgYXBpIHZlcnNpb24uXHJcbiAgICAgKlxyXG4gICAgICogU2luY2UgNC4yLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWFqb3IgIFRoZSBtYWpvciB2ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIG1pbm9yICBUaGUgbWlub3IgdmVyc2lvbi5cclxuICAgICAqIEBwYXJhbSBtaWNybyAgVGhlIG1pY3JvIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEFwaVZlcnNpb24obWFqb3IsIG1pbm9yLCBtaWNybykge1xyXG4gICAgICAgIHRoaXMubWFqb3IgPSBtYWpvcjtcclxuICAgICAgICB0aGlzLm1pbm9yID0gbWlub3I7XHJcbiAgICAgICAgdGhpcy5taWNybyA9IG1pY3JvO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFwaVZlcnNpb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpVmVyc2lvbiA9IEFwaVZlcnNpb247XHJcbi8qKlxyXG4gKiBAY2xhc3MgTWVudUl0ZW1TdGF0dXNcclxuICogU3RvcmVzIGZseW91dCBtZW51IGl0ZW0gc3RhdHVzXHJcbiAqXHJcbiAqIFNpbmNlIDUuMi4wXHJcbiAqL1xyXG52YXIgTWVudUl0ZW1TdGF0dXMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgZmx5b3V0IG1lbnUgaXRlbSBzdGF0dXNcclxuICAgICAqXHJcbiAgICAgKiBTaW5jZSA1LjIuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZW51SXRlbUxhYmVsICBUaGUgbWVudSBpdGVtIGxhYmVsLlxyXG4gICAgICogQHBhcmFtIGVuYWJsZWQgIFx0XHQgVHJ1ZSBpZiB1c2VyIHdhbnRzIHRvIGVuYWJsZSB0aGUgbWVudSBpdGVtLlxyXG4gICAgICogQHBhcmFtIGNoZWNrZWQgIFx0XHQgVHJ1ZSBpZiB1c2VyIHdhbnRzIHRvIGNoZWNrIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIE1lbnVJdGVtU3RhdHVzKG1lbnVJdGVtTGFiZWwsIGVuYWJsZWQsIGNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtTGFiZWwgPSBtZW51SXRlbUxhYmVsO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBNZW51SXRlbVN0YXR1cztcclxufSgpKTtcclxuZXhwb3J0cy5NZW51SXRlbVN0YXR1cyA9IE1lbnVJdGVtU3RhdHVzO1xyXG4vKipcclxuICogQGNsYXNzIENvbnRleHRNZW51SXRlbVN0YXR1c1xyXG4gKiBTdG9yZXMgdGhlIHN0YXR1cyBvZiB0aGUgY29udGV4dCBtZW51IGl0ZW0uXHJcbiAqXHJcbiAqIFNpbmNlIDUuMi4wXHJcbiAqL1xyXG52YXIgQ29udGV4dE1lbnVJdGVtU3RhdHVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBzdGF0dXMgb2YgdGhlIGNvbnRleHQgbWVudSBpdGVtLlxyXG4gICAgICpcclxuICAgICAqIFNpbmNlIDUuMi4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lbnVJdGVtSUQgICAgIFRoZSBtZW51IGl0ZW0gaWQuXHJcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAgXHRcdCBUcnVlIGlmIHVzZXIgd2FudHMgdG8gZW5hYmxlIHRoZSBtZW51IGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gY2hlY2tlZCAgXHRcdCBUcnVlIGlmIHVzZXIgd2FudHMgdG8gY2hlY2sgdGhlIG1lbnUgaXRlbS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29udGV4dE1lbnVJdGVtU3RhdHVzKG1lbnVJdGVtSUQsIGVuYWJsZWQsIGNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtSUQgPSBtZW51SXRlbUlEO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBDb250ZXh0TWVudUl0ZW1TdGF0dXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29udGV4dE1lbnVJdGVtU3RhdHVzID0gQ29udGV4dE1lbnVJdGVtU3RhdHVzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pbmltYXRjaFxubWluaW1hdGNoLk1pbmltYXRjaCA9IE1pbmltYXRjaFxuXG52YXIgcGF0aCA9IHsgc2VwOiAnLycgfVxudHJ5IHtcbiAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxufSBjYXRjaCAoZXIpIHt9XG5cbnZhciBHTE9CU1RBUiA9IG1pbmltYXRjaC5HTE9CU1RBUiA9IE1pbmltYXRjaC5HTE9CU1RBUiA9IHt9XG52YXIgZXhwYW5kID0gcmVxdWlyZSgnYnJhY2UtZXhwYW5zaW9uJylcblxudmFyIHBsVHlwZXMgPSB7XG4gICchJzogeyBvcGVuOiAnKD86KD8hKD86JywgY2xvc2U6ICcpKVteL10qPyknfSxcbiAgJz8nOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJyk/JyB9LFxuICAnKyc6IHsgb3BlbjogJyg/OicsIGNsb3NlOiAnKSsnIH0sXG4gICcqJzogeyBvcGVuOiAnKD86JywgY2xvc2U6ICcpKicgfSxcbiAgJ0AnOiB7IG9wZW46ICcoPzonLCBjbG9zZTogJyknIH1cbn1cblxuLy8gYW55IHNpbmdsZSB0aGluZyBvdGhlciB0aGFuIC9cbi8vIGRvbid0IG5lZWQgdG8gZXNjYXBlIC8gd2hlbiB1c2luZyBuZXcgUmVnRXhwKClcbnZhciBxbWFyayA9ICdbXi9dJ1xuXG4vLyAqID0+IGFueSBudW1iZXIgb2YgY2hhcmFjdGVyc1xudmFyIHN0YXIgPSBxbWFyayArICcqPydcblxuLy8gKiogd2hlbiBkb3RzIGFyZSBhbGxvd2VkLiAgQW55dGhpbmcgZ29lcywgZXhjZXB0IC4uIGFuZCAuXG4vLyBub3QgKF4gb3IgLyBmb2xsb3dlZCBieSBvbmUgb3IgdHdvIGRvdHMgZm9sbG93ZWQgYnkgJCBvciAvKSxcbi8vIGZvbGxvd2VkIGJ5IGFueXRoaW5nLCBhbnkgbnVtYmVyIG9mIHRpbWVzLlxudmFyIHR3b1N0YXJEb3QgPSAnKD86KD8hKD86XFxcXFxcL3xeKSg/OlxcXFwuezEsMn0pKCR8XFxcXFxcLykpLikqPydcblxuLy8gbm90IGEgXiBvciAvIGZvbGxvd2VkIGJ5IGEgZG90LFxuLy8gZm9sbG93ZWQgYnkgYW55dGhpbmcsIGFueSBudW1iZXIgb2YgdGltZXMuXG52YXIgdHdvU3Rhck5vRG90ID0gJyg/Oig/ISg/OlxcXFxcXC98XilcXFxcLikuKSo/J1xuXG4vLyBjaGFyYWN0ZXJzIHRoYXQgbmVlZCB0byBiZSBlc2NhcGVkIGluIFJlZ0V4cC5cbnZhciByZVNwZWNpYWxzID0gY2hhclNldCgnKCkuKnt9Kz9bXV4kXFxcXCEnKVxuXG4vLyBcImFiY1wiIC0+IHsgYTp0cnVlLCBiOnRydWUsIGM6dHJ1ZSB9XG5mdW5jdGlvbiBjaGFyU2V0IChzKSB7XG4gIHJldHVybiBzLnNwbGl0KCcnKS5yZWR1Y2UoZnVuY3Rpb24gKHNldCwgYykge1xuICAgIHNldFtjXSA9IHRydWVcbiAgICByZXR1cm4gc2V0XG4gIH0sIHt9KVxufVxuXG4vLyBub3JtYWxpemVzIHNsYXNoZXMuXG52YXIgc2xhc2hTcGxpdCA9IC9cXC8rL1xuXG5taW5pbWF0Y2guZmlsdGVyID0gZmlsdGVyXG5mdW5jdGlvbiBmaWx0ZXIgKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgcmV0dXJuIGZ1bmN0aW9uIChwLCBpLCBsaXN0KSB7XG4gICAgcmV0dXJuIG1pbmltYXRjaChwLCBwYXR0ZXJuLCBvcHRpb25zKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dCAoYSwgYikge1xuICBhID0gYSB8fCB7fVxuICBiID0gYiB8fCB7fVxuICB2YXIgdCA9IHt9XG4gIE9iamVjdC5rZXlzKGIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICB0W2tdID0gYltrXVxuICB9KVxuICBPYmplY3Qua2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgdFtrXSA9IGFba11cbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxubWluaW1hdGNoLmRlZmF1bHRzID0gZnVuY3Rpb24gKGRlZikge1xuICBpZiAoIWRlZiB8fCAhT2JqZWN0LmtleXMoZGVmKS5sZW5ndGgpIHJldHVybiBtaW5pbWF0Y2hcblxuICB2YXIgb3JpZyA9IG1pbmltYXRjaFxuXG4gIHZhciBtID0gZnVuY3Rpb24gbWluaW1hdGNoIChwLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9yaWcubWluaW1hdGNoKHAsIHBhdHRlcm4sIGV4dChkZWYsIG9wdGlvbnMpKVxuICB9XG5cbiAgbS5NaW5pbWF0Y2ggPSBmdW5jdGlvbiBNaW5pbWF0Y2ggKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IG9yaWcuTWluaW1hdGNoKHBhdHRlcm4sIGV4dChkZWYsIG9wdGlvbnMpKVxuICB9XG5cbiAgcmV0dXJuIG1cbn1cblxuTWluaW1hdGNoLmRlZmF1bHRzID0gZnVuY3Rpb24gKGRlZikge1xuICBpZiAoIWRlZiB8fCAhT2JqZWN0LmtleXMoZGVmKS5sZW5ndGgpIHJldHVybiBNaW5pbWF0Y2hcbiAgcmV0dXJuIG1pbmltYXRjaC5kZWZhdWx0cyhkZWYpLk1pbmltYXRjaFxufVxuXG5mdW5jdGlvbiBtaW5pbWF0Y2ggKHAsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2dsb2IgcGF0dGVybiBzdHJpbmcgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cblxuICAvLyBzaG9ydGN1dDogY29tbWVudHMgbWF0Y2ggbm90aGluZy5cbiAgaWYgKCFvcHRpb25zLm5vY29tbWVudCAmJiBwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBcIlwiIG9ubHkgbWF0Y2hlcyBcIlwiXG4gIGlmIChwYXR0ZXJuLnRyaW0oKSA9PT0gJycpIHJldHVybiBwID09PSAnJ1xuXG4gIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpLm1hdGNoKHApXG59XG5cbmZ1bmN0aW9uIE1pbmltYXRjaCAocGF0dGVybiwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWluaW1hdGNoKSkge1xuICAgIHJldHVybiBuZXcgTWluaW1hdGNoKHBhdHRlcm4sIG9wdGlvbnMpXG4gIH1cblxuICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2xvYiBwYXR0ZXJuIHN0cmluZyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICBwYXR0ZXJuID0gcGF0dGVybi50cmltKClcblxuICAvLyB3aW5kb3dzIHN1cHBvcnQ6IG5lZWQgdG8gdXNlIC8sIG5vdCBcXFxuICBpZiAocGF0aC5zZXAgIT09ICcvJykge1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnNwbGl0KHBhdGguc2VwKS5qb2luKCcvJylcbiAgfVxuXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5zZXQgPSBbXVxuICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuXG4gIHRoaXMucmVnZXhwID0gbnVsbFxuICB0aGlzLm5lZ2F0ZSA9IGZhbHNlXG4gIHRoaXMuY29tbWVudCA9IGZhbHNlXG4gIHRoaXMuZW1wdHkgPSBmYWxzZVxuXG4gIC8vIG1ha2UgdGhlIHNldCBvZiByZWdleHBzIGV0Yy5cbiAgdGhpcy5tYWtlKClcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9XG5cbk1pbmltYXRjaC5wcm90b3R5cGUubWFrZSA9IG1ha2VcbmZ1bmN0aW9uIG1ha2UgKCkge1xuICAvLyBkb24ndCBkbyBpdCBtb3JlIHRoYW4gb25jZS5cbiAgaWYgKHRoaXMuX21hZGUpIHJldHVyblxuXG4gIHZhciBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgLy8gZW1wdHkgcGF0dGVybnMgYW5kIGNvbW1lbnRzIG1hdGNoIG5vdGhpbmcuXG4gIGlmICghb3B0aW9ucy5ub2NvbW1lbnQgJiYgcGF0dGVybi5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHRoaXMuY29tbWVudCA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIXBhdHRlcm4pIHtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gc3RlcCAxOiBmaWd1cmUgb3V0IG5lZ2F0aW9uLCBldGMuXG4gIHRoaXMucGFyc2VOZWdhdGUoKVxuXG4gIC8vIHN0ZXAgMjogZXhwYW5kIGJyYWNlc1xuICB2YXIgc2V0ID0gdGhpcy5nbG9iU2V0ID0gdGhpcy5icmFjZUV4cGFuZCgpXG5cbiAgaWYgKG9wdGlvbnMuZGVidWcpIHRoaXMuZGVidWcgPSBjb25zb2xlLmVycm9yXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICAvLyBzdGVwIDM6IG5vdyB3ZSBoYXZlIGEgc2V0LCBzbyB0dXJuIGVhY2ggb25lIGludG8gYSBzZXJpZXMgb2YgcGF0aC1wb3J0aW9uXG4gIC8vIG1hdGNoaW5nIHBhdHRlcm5zLlxuICAvLyBUaGVzZSB3aWxsIGJlIHJlZ2V4cHMsIGV4Y2VwdCBpbiB0aGUgY2FzZSBvZiBcIioqXCIsIHdoaWNoIGlzXG4gIC8vIHNldCB0byB0aGUgR0xPQlNUQVIgb2JqZWN0IGZvciBnbG9ic3RhciBiZWhhdmlvcixcbiAgLy8gYW5kIHdpbGwgbm90IGNvbnRhaW4gYW55IC8gY2hhcmFjdGVyc1xuICBzZXQgPSB0aGlzLmdsb2JQYXJ0cyA9IHNldC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5zcGxpdChzbGFzaFNwbGl0KVxuICB9KVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgLy8gZ2xvYiAtLT4gcmVnZXhwc1xuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uIChzLCBzaSwgc2V0KSB7XG4gICAgcmV0dXJuIHMubWFwKHRoaXMucGFyc2UsIHRoaXMpXG4gIH0sIHRoaXMpXG5cbiAgdGhpcy5kZWJ1Zyh0aGlzLnBhdHRlcm4sIHNldClcblxuICAvLyBmaWx0ZXIgb3V0IGV2ZXJ5dGhpbmcgdGhhdCBkaWRuJ3QgY29tcGlsZSBwcm9wZXJseS5cbiAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLmluZGV4T2YoZmFsc2UpID09PSAtMVxuICB9KVxuXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCBzZXQpXG5cbiAgdGhpcy5zZXQgPSBzZXRcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5wYXJzZU5lZ2F0ZSA9IHBhcnNlTmVnYXRlXG5mdW5jdGlvbiBwYXJzZU5lZ2F0ZSAoKSB7XG4gIHZhciBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuXG4gIHZhciBuZWdhdGUgPSBmYWxzZVxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICB2YXIgbmVnYXRlT2Zmc2V0ID0gMFxuXG4gIGlmIChvcHRpb25zLm5vbmVnYXRlKSByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdHRlcm4ubGVuZ3RoXG4gICAgOyBpIDwgbCAmJiBwYXR0ZXJuLmNoYXJBdChpKSA9PT0gJyEnXG4gICAgOyBpKyspIHtcbiAgICBuZWdhdGUgPSAhbmVnYXRlXG4gICAgbmVnYXRlT2Zmc2V0KytcbiAgfVxuXG4gIGlmIChuZWdhdGVPZmZzZXQpIHRoaXMucGF0dGVybiA9IHBhdHRlcm4uc3Vic3RyKG5lZ2F0ZU9mZnNldClcbiAgdGhpcy5uZWdhdGUgPSBuZWdhdGVcbn1cblxuLy8gQnJhY2UgZXhwYW5zaW9uOlxuLy8gYXtiLGN9ZCAtPiBhYmQgYWNkXG4vLyBhe2IsfWMgLT4gYWJjIGFjXG4vLyBhezAuLjN9ZCAtPiBhMGQgYTFkIGEyZCBhM2Rcbi8vIGF7Yixje2QsZX1mfWcgLT4gYWJnIGFjZGZnIGFjZWZnXG4vLyBhe2IsY31ke2UsZn1nIC0+IGFiZGVnIGFjZGVnIGFiZGVnIGFiZGZnXG4vL1xuLy8gSW52YWxpZCBzZXRzIGFyZSBub3QgZXhwYW5kZWQuXG4vLyBhezIuLn1iIC0+IGF7Mi4ufWJcbi8vIGF7Yn1jIC0+IGF7Yn1jXG5taW5pbWF0Y2guYnJhY2VFeHBhbmQgPSBmdW5jdGlvbiAocGF0dGVybiwgb3B0aW9ucykge1xuICByZXR1cm4gYnJhY2VFeHBhbmQocGF0dGVybiwgb3B0aW9ucylcbn1cblxuTWluaW1hdGNoLnByb3RvdHlwZS5icmFjZUV4cGFuZCA9IGJyYWNlRXhwYW5kXG5cbmZ1bmN0aW9uIGJyYWNlRXhwYW5kIChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTWluaW1hdGNoKSB7XG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cbiAgfVxuXG4gIHBhdHRlcm4gPSB0eXBlb2YgcGF0dGVybiA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IHRoaXMucGF0dGVybiA6IHBhdHRlcm5cblxuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5kZWZpbmVkIHBhdHRlcm4nKVxuICB9XG5cbiAgaWYgKG9wdGlvbnMubm9icmFjZSB8fFxuICAgICFwYXR0ZXJuLm1hdGNoKC9cXHsuKlxcfS8pKSB7XG4gICAgLy8gc2hvcnRjdXQuIG5vIG5lZWQgdG8gZXhwYW5kLlxuICAgIHJldHVybiBbcGF0dGVybl1cbiAgfVxuXG4gIHJldHVybiBleHBhbmQocGF0dGVybilcbn1cblxuLy8gcGFyc2UgYSBjb21wb25lbnQgb2YgdGhlIGV4cGFuZGVkIHNldC5cbi8vIEF0IHRoaXMgcG9pbnQsIG5vIHBhdHRlcm4gbWF5IGNvbnRhaW4gXCIvXCIgaW4gaXRcbi8vIHNvIHdlJ3JlIGdvaW5nIHRvIHJldHVybiBhIDJkIGFycmF5LCB3aGVyZSBlYWNoIGVudHJ5IGlzIHRoZSBmdWxsXG4vLyBwYXR0ZXJuLCBzcGxpdCBvbiAnLycsIGFuZCB0aGVuIHR1cm5lZCBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uLlxuLy8gQSByZWdleHAgaXMgbWFkZSBhdCB0aGUgZW5kIHdoaWNoIGpvaW5zIGVhY2ggYXJyYXkgd2l0aCBhblxuLy8gZXNjYXBlZCAvLCBhbmQgYW5vdGhlciBmdWxsIG9uZSB3aGljaCBqb2lucyBlYWNoIHJlZ2V4cCB3aXRoIHwuXG4vL1xuLy8gRm9sbG93aW5nIHRoZSBsZWFkIG9mIEJhc2ggNC4xLCBub3RlIHRoYXQgXCIqKlwiIG9ubHkgaGFzIHNwZWNpYWwgbWVhbmluZ1xuLy8gd2hlbiBpdCBpcyB0aGUgKm9ubHkqIHRoaW5nIGluIGEgcGF0aCBwb3J0aW9uLiAgT3RoZXJ3aXNlLCBhbnkgc2VyaWVzXG4vLyBvZiAqIGlzIGVxdWl2YWxlbnQgdG8gYSBzaW5nbGUgKi4gIEdsb2JzdGFyIGJlaGF2aW9yIGlzIGVuYWJsZWQgYnlcbi8vIGRlZmF1bHQsIGFuZCBjYW4gYmUgZGlzYWJsZWQgYnkgc2V0dGluZyBvcHRpb25zLm5vZ2xvYnN0YXIuXG5NaW5pbWF0Y2gucHJvdG90eXBlLnBhcnNlID0gcGFyc2VcbnZhciBTVUJQQVJTRSA9IHt9XG5mdW5jdGlvbiBwYXJzZSAocGF0dGVybiwgaXNTdWIpIHtcbiAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gMTAyNCAqIDY0KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGF0dGVybiBpcyB0b28gbG9uZycpXG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuXG4gIC8vIHNob3J0Y3V0c1xuICBpZiAoIW9wdGlvbnMubm9nbG9ic3RhciAmJiBwYXR0ZXJuID09PSAnKionKSByZXR1cm4gR0xPQlNUQVJcbiAgaWYgKHBhdHRlcm4gPT09ICcnKSByZXR1cm4gJydcblxuICB2YXIgcmUgPSAnJ1xuICB2YXIgaGFzTWFnaWMgPSAhIW9wdGlvbnMubm9jYXNlXG4gIHZhciBlc2NhcGluZyA9IGZhbHNlXG4gIC8vID8gPT4gb25lIHNpbmdsZSBjaGFyYWN0ZXJcbiAgdmFyIHBhdHRlcm5MaXN0U3RhY2sgPSBbXVxuICB2YXIgbmVnYXRpdmVMaXN0cyA9IFtdXG4gIHZhciBzdGF0ZUNoYXJcbiAgdmFyIGluQ2xhc3MgPSBmYWxzZVxuICB2YXIgcmVDbGFzc1N0YXJ0ID0gLTFcbiAgdmFyIGNsYXNzU3RhcnQgPSAtMVxuICAvLyAuIGFuZCAuLiBuZXZlciBtYXRjaCBhbnl0aGluZyB0aGF0IGRvZXNuJ3Qgc3RhcnQgd2l0aCAuLFxuICAvLyBldmVuIHdoZW4gb3B0aW9ucy5kb3QgaXMgc2V0LlxuICB2YXIgcGF0dGVyblN0YXJ0ID0gcGF0dGVybi5jaGFyQXQoMCkgPT09ICcuJyA/ICcnIC8vIGFueXRoaW5nXG4gIC8vIG5vdCAoc3RhcnQgb3IgLyBmb2xsb3dlZCBieSAuIG9yIC4uIGZvbGxvd2VkIGJ5IC8gb3IgZW5kKVxuICA6IG9wdGlvbnMuZG90ID8gJyg/ISg/Ol58XFxcXFxcLylcXFxcLnsxLDJ9KD86JHxcXFxcXFwvKSknXG4gIDogJyg/IVxcXFwuKSdcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZnVuY3Rpb24gY2xlYXJTdGF0ZUNoYXIgKCkge1xuICAgIGlmIChzdGF0ZUNoYXIpIHtcbiAgICAgIC8vIHdlIGhhZCBzb21lIHN0YXRlLXRyYWNraW5nIGNoYXJhY3RlclxuICAgICAgLy8gdGhhdCB3YXNuJ3QgY29uc3VtZWQgYnkgdGhpcyBwYXNzLlxuICAgICAgc3dpdGNoIChzdGF0ZUNoYXIpIHtcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgcmUgKz0gc3RhclxuICAgICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICByZSArPSBxbWFya1xuICAgICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlICs9ICdcXFxcJyArIHN0YXRlQ2hhclxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgc2VsZi5kZWJ1ZygnY2xlYXJTdGF0ZUNoYXIgJWogJWonLCBzdGF0ZUNoYXIsIHJlKVxuICAgICAgc3RhdGVDaGFyID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGgsIGNcbiAgICA7IChpIDwgbGVuKSAmJiAoYyA9IHBhdHRlcm4uY2hhckF0KGkpKVxuICAgIDsgaSsrKSB7XG4gICAgdGhpcy5kZWJ1ZygnJXNcXHQlcyAlcyAlaicsIHBhdHRlcm4sIGksIHJlLCBjKVxuXG4gICAgLy8gc2tpcCBvdmVyIGFueSB0aGF0IGFyZSBlc2NhcGVkLlxuICAgIGlmIChlc2NhcGluZyAmJiByZVNwZWNpYWxzW2NdKSB7XG4gICAgICByZSArPSAnXFxcXCcgKyBjXG4gICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIC8vIGNvbXBsZXRlbHkgbm90IGFsbG93ZWQsIGV2ZW4gZXNjYXBlZC5cbiAgICAgICAgLy8gU2hvdWxkIGFscmVhZHkgYmUgcGF0aC1zcGxpdCBieSBub3cuXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgY2xlYXJTdGF0ZUNoYXIoKVxuICAgICAgICBlc2NhcGluZyA9IHRydWVcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIC8vIHRoZSB2YXJpb3VzIHN0YXRlQ2hhciB2YWx1ZXNcbiAgICAgIC8vIGZvciB0aGUgXCJleHRnbG9iXCIgc3R1ZmYuXG4gICAgICBjYXNlICc/JzpcbiAgICAgIGNhc2UgJyonOlxuICAgICAgY2FzZSAnKyc6XG4gICAgICBjYXNlICdAJzpcbiAgICAgIGNhc2UgJyEnOlxuICAgICAgICB0aGlzLmRlYnVnKCclc1xcdCVzICVzICVqIDwtLSBzdGF0ZUNoYXInLCBwYXR0ZXJuLCBpLCByZSwgYylcblxuICAgICAgICAvLyBhbGwgb2YgdGhvc2UgYXJlIGxpdGVyYWxzIGluc2lkZSBhIGNsYXNzLCBleGNlcHQgdGhhdFxuICAgICAgICAvLyB0aGUgZ2xvYiBbIWFdIG1lYW5zIFteYV0gaW4gcmVnZXhwXG4gICAgICAgIGlmIChpbkNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1ZygnICBpbiBjbGFzcycpXG4gICAgICAgICAgaWYgKGMgPT09ICchJyAmJiBpID09PSBjbGFzc1N0YXJ0ICsgMSkgYyA9ICdeJ1xuICAgICAgICAgIHJlICs9IGNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIGEgc3RhdGVDaGFyLCB0aGVuIGl0IG1lYW5zXG4gICAgICAgIC8vIHRoYXQgdGhlcmUgd2FzIHNvbWV0aGluZyBsaWtlICoqIG9yICs/IGluIHRoZXJlLlxuICAgICAgICAvLyBIYW5kbGUgdGhlIHN0YXRlQ2hhciwgdGhlbiBwcm9jZWVkIHdpdGggdGhpcyBvbmUuXG4gICAgICAgIHNlbGYuZGVidWcoJ2NhbGwgY2xlYXJTdGF0ZUNoYXIgJWonLCBzdGF0ZUNoYXIpXG4gICAgICAgIGNsZWFyU3RhdGVDaGFyKClcbiAgICAgICAgc3RhdGVDaGFyID0gY1xuICAgICAgICAvLyBpZiBleHRnbG9iIGlzIGRpc2FibGVkLCB0aGVuICsoYXNkZnxmb28pIGlzbid0IGEgdGhpbmcuXG4gICAgICAgIC8vIGp1c3QgY2xlYXIgdGhlIHN0YXRlY2hhciAqbm93KiwgcmF0aGVyIHRoYW4gZXZlbiBkaXZpbmcgaW50b1xuICAgICAgICAvLyB0aGUgcGF0dGVybkxpc3Qgc3R1ZmYuXG4gICAgICAgIGlmIChvcHRpb25zLm5vZXh0KSBjbGVhclN0YXRlQ2hhcigpXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICcoJzpcbiAgICAgICAgaWYgKGluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSAnKCdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGF0ZUNoYXIpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCgnXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdHRlcm5MaXN0U3RhY2sucHVzaCh7XG4gICAgICAgICAgdHlwZTogc3RhdGVDaGFyLFxuICAgICAgICAgIHN0YXJ0OiBpIC0gMSxcbiAgICAgICAgICByZVN0YXJ0OiByZS5sZW5ndGgsXG4gICAgICAgICAgb3BlbjogcGxUeXBlc1tzdGF0ZUNoYXJdLm9wZW4sXG4gICAgICAgICAgY2xvc2U6IHBsVHlwZXNbc3RhdGVDaGFyXS5jbG9zZVxuICAgICAgICB9KVxuICAgICAgICAvLyBuZWdhdGlvbiBpcyAoPzooPyFqcylbXi9dKilcbiAgICAgICAgcmUgKz0gc3RhdGVDaGFyID09PSAnIScgPyAnKD86KD8hKD86JyA6ICcoPzonXG4gICAgICAgIHRoaXMuZGVidWcoJ3BsVHlwZSAlaiAlaicsIHN0YXRlQ2hhciwgcmUpXG4gICAgICAgIHN0YXRlQ2hhciA9IGZhbHNlXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICcpJzpcbiAgICAgICAgaWYgKGluQ2xhc3MgfHwgIXBhdHRlcm5MaXN0U3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgcmUgKz0gJ1xcXFwpJ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICB2YXIgcGwgPSBwYXR0ZXJuTGlzdFN0YWNrLnBvcCgpXG4gICAgICAgIC8vIG5lZ2F0aW9uIGlzICg/Oig/IWpzKVteL10qKVxuICAgICAgICAvLyBUaGUgb3RoZXJzIGFyZSAoPzo8cGF0dGVybj4pPHR5cGU+XG4gICAgICAgIHJlICs9IHBsLmNsb3NlXG4gICAgICAgIGlmIChwbC50eXBlID09PSAnIScpIHtcbiAgICAgICAgICBuZWdhdGl2ZUxpc3RzLnB1c2gocGwpXG4gICAgICAgIH1cbiAgICAgICAgcGwucmVFbmQgPSByZS5sZW5ndGhcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAgIGNhc2UgJ3wnOlxuICAgICAgICBpZiAoaW5DbGFzcyB8fCAhcGF0dGVybkxpc3RTdGFjay5sZW5ndGggfHwgZXNjYXBpbmcpIHtcbiAgICAgICAgICByZSArPSAnXFxcXHwnXG4gICAgICAgICAgZXNjYXBpbmcgPSBmYWxzZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG4gICAgICAgIHJlICs9ICd8J1xuICAgICAgY29udGludWVcblxuICAgICAgLy8gdGhlc2UgYXJlIG1vc3RseSB0aGUgc2FtZSBpbiByZWdleHAgYW5kIGdsb2JcbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICAvLyBzd2FsbG93IGFueSBzdGF0ZS10cmFja2luZyBjaGFyIGJlZm9yZSB0aGUgW1xuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG5cbiAgICAgICAgaWYgKGluQ2xhc3MpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCcgKyBjXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGluQ2xhc3MgPSB0cnVlXG4gICAgICAgIGNsYXNzU3RhcnQgPSBpXG4gICAgICAgIHJlQ2xhc3NTdGFydCA9IHJlLmxlbmd0aFxuICAgICAgICByZSArPSBjXG4gICAgICBjb250aW51ZVxuXG4gICAgICBjYXNlICddJzpcbiAgICAgICAgLy8gIGEgcmlnaHQgYnJhY2tldCBzaGFsbCBsb3NlIGl0cyBzcGVjaWFsXG4gICAgICAgIC8vICBtZWFuaW5nIGFuZCByZXByZXNlbnQgaXRzZWxmIGluXG4gICAgICAgIC8vICBhIGJyYWNrZXQgZXhwcmVzc2lvbiBpZiBpdCBvY2N1cnNcbiAgICAgICAgLy8gIGZpcnN0IGluIHRoZSBsaXN0LiAgLS0gUE9TSVguMiAyLjguMy4yXG4gICAgICAgIGlmIChpID09PSBjbGFzc1N0YXJ0ICsgMSB8fCAhaW5DbGFzcykge1xuICAgICAgICAgIHJlICs9ICdcXFxcJyArIGNcbiAgICAgICAgICBlc2NhcGluZyA9IGZhbHNlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBsZWZ0IGEgY2xhc3Mgb3Blbi5cbiAgICAgICAgLy8gXCJbei1hXVwiIGlzIHZhbGlkLCBlcXVpdmFsZW50IHRvIFwiXFxbei1hXFxdXCJcbiAgICAgICAgaWYgKGluQ2xhc3MpIHtcbiAgICAgICAgICAvLyBzcGxpdCB3aGVyZSB0aGUgbGFzdCBbIHdhcywgbWFrZSBzdXJlIHdlIGRvbid0IGhhdmVcbiAgICAgICAgICAvLyBhbiBpbnZhbGlkIHJlLiBpZiBzbywgcmUtd2FsayB0aGUgY29udGVudHMgb2YgdGhlXG4gICAgICAgICAgLy8gd291bGQtYmUgY2xhc3MgdG8gcmUtdHJhbnNsYXRlIGFueSBjaGFyYWN0ZXJzIHRoYXRcbiAgICAgICAgICAvLyB3ZXJlIHBhc3NlZCB0aHJvdWdoIGFzLWlzXG4gICAgICAgICAgLy8gVE9ETzogSXQgd291bGQgcHJvYmFibHkgYmUgZmFzdGVyIHRvIGRldGVybWluZSB0aGlzXG4gICAgICAgICAgLy8gd2l0aG91dCBhIHRyeS9jYXRjaCBhbmQgYSBuZXcgUmVnRXhwLCBidXQgaXQncyB0cmlja3lcbiAgICAgICAgICAvLyB0byBkbyBzYWZlbHkuICBGb3Igbm93LCB0aGlzIGlzIHNhZmUgYW5kIHdvcmtzLlxuICAgICAgICAgIHZhciBjcyA9IHBhdHRlcm4uc3Vic3RyaW5nKGNsYXNzU3RhcnQgKyAxLCBpKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBSZWdFeHAoJ1snICsgY3MgKyAnXScpXG4gICAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgIC8vIG5vdCBhIHZhbGlkIGNsYXNzIVxuICAgICAgICAgICAgdmFyIHNwID0gdGhpcy5wYXJzZShjcywgU1VCUEFSU0UpXG4gICAgICAgICAgICByZSA9IHJlLnN1YnN0cigwLCByZUNsYXNzU3RhcnQpICsgJ1xcXFxbJyArIHNwWzBdICsgJ1xcXFxdJ1xuICAgICAgICAgICAgaGFzTWFnaWMgPSBoYXNNYWdpYyB8fCBzcFsxXVxuICAgICAgICAgICAgaW5DbGFzcyA9IGZhbHNlXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmlzaCB1cCB0aGUgY2xhc3MuXG4gICAgICAgIGhhc01hZ2ljID0gdHJ1ZVxuICAgICAgICBpbkNsYXNzID0gZmFsc2VcbiAgICAgICAgcmUgKz0gY1xuICAgICAgY29udGludWVcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gc3dhbGxvdyBhbnkgc3RhdGUgY2hhciB0aGF0IHdhc24ndCBjb25zdW1lZFxuICAgICAgICBjbGVhclN0YXRlQ2hhcigpXG5cbiAgICAgICAgaWYgKGVzY2FwaW5nKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZFxuICAgICAgICAgIGVzY2FwaW5nID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmIChyZVNwZWNpYWxzW2NdXG4gICAgICAgICAgJiYgIShjID09PSAnXicgJiYgaW5DbGFzcykpIHtcbiAgICAgICAgICByZSArPSAnXFxcXCdcbiAgICAgICAgfVxuXG4gICAgICAgIHJlICs9IGNcblxuICAgIH0gLy8gc3dpdGNoXG4gIH0gLy8gZm9yXG5cbiAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHdlIGxlZnQgYSBjbGFzcyBvcGVuLlxuICAvLyBcIlthYmNcIiBpcyB2YWxpZCwgZXF1aXZhbGVudCB0byBcIlxcW2FiY1wiXG4gIGlmIChpbkNsYXNzKSB7XG4gICAgLy8gc3BsaXQgd2hlcmUgdGhlIGxhc3QgWyB3YXMsIGFuZCBlc2NhcGUgaXRcbiAgICAvLyB0aGlzIGlzIGEgaHVnZSBwaXRhLiAgV2Ugbm93IGhhdmUgdG8gcmUtd2Fsa1xuICAgIC8vIHRoZSBjb250ZW50cyBvZiB0aGUgd291bGQtYmUgY2xhc3MgdG8gcmUtdHJhbnNsYXRlXG4gICAgLy8gYW55IGNoYXJhY3RlcnMgdGhhdCB3ZXJlIHBhc3NlZCB0aHJvdWdoIGFzLWlzXG4gICAgY3MgPSBwYXR0ZXJuLnN1YnN0cihjbGFzc1N0YXJ0ICsgMSlcbiAgICBzcCA9IHRoaXMucGFyc2UoY3MsIFNVQlBBUlNFKVxuICAgIHJlID0gcmUuc3Vic3RyKDAsIHJlQ2xhc3NTdGFydCkgKyAnXFxcXFsnICsgc3BbMF1cbiAgICBoYXNNYWdpYyA9IGhhc01hZ2ljIHx8IHNwWzFdXG4gIH1cblxuICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgaGFkIGEgKyggdGhpbmcgYXQgdGhlICplbmQqXG4gIC8vIG9mIHRoZSBwYXR0ZXJuLlxuICAvLyBlYWNoIHBhdHRlcm4gbGlzdCBzdGFjayBhZGRzIDMgY2hhcnMsIGFuZCB3ZSBuZWVkIHRvIGdvIHRocm91Z2hcbiAgLy8gYW5kIGVzY2FwZSBhbnkgfCBjaGFycyB0aGF0IHdlcmUgcGFzc2VkIHRocm91Z2ggYXMtaXMgZm9yIHRoZSByZWdleHAuXG4gIC8vIEdvIHRocm91Z2ggYW5kIGVzY2FwZSB0aGVtLCB0YWtpbmcgY2FyZSBub3QgdG8gZG91YmxlLWVzY2FwZSBhbnlcbiAgLy8gfCBjaGFycyB0aGF0IHdlcmUgYWxyZWFkeSBlc2NhcGVkLlxuICBmb3IgKHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKTsgcGw7IHBsID0gcGF0dGVybkxpc3RTdGFjay5wb3AoKSkge1xuICAgIHZhciB0YWlsID0gcmUuc2xpY2UocGwucmVTdGFydCArIHBsLm9wZW4ubGVuZ3RoKVxuICAgIHRoaXMuZGVidWcoJ3NldHRpbmcgdGFpbCcsIHJlLCBwbClcbiAgICAvLyBtYXliZSBzb21lIGV2ZW4gbnVtYmVyIG9mIFxcLCB0aGVuIG1heWJlIDEgXFwsIGZvbGxvd2VkIGJ5IGEgfFxuICAgIHRhaWwgPSB0YWlsLnJlcGxhY2UoLygoPzpcXFxcezJ9KXswLDY0fSkoXFxcXD8pXFx8L2csIGZ1bmN0aW9uIChfLCAkMSwgJDIpIHtcbiAgICAgIGlmICghJDIpIHtcbiAgICAgICAgLy8gdGhlIHwgaXNuJ3QgYWxyZWFkeSBlc2NhcGVkLCBzbyBlc2NhcGUgaXQuXG4gICAgICAgICQyID0gJ1xcXFwnXG4gICAgICB9XG5cbiAgICAgIC8vIG5lZWQgdG8gZXNjYXBlIGFsbCB0aG9zZSBzbGFzaGVzICphZ2FpbiosIHdpdGhvdXQgZXNjYXBpbmcgdGhlXG4gICAgICAvLyBvbmUgdGhhdCB3ZSBuZWVkIGZvciBlc2NhcGluZyB0aGUgfCBjaGFyYWN0ZXIuICBBcyBpdCB3b3JrcyBvdXQsXG4gICAgICAvLyBlc2NhcGluZyBhbiBldmVuIG51bWJlciBvZiBzbGFzaGVzIGNhbiBiZSBkb25lIGJ5IHNpbXBseSByZXBlYXRpbmdcbiAgICAgIC8vIGl0IGV4YWN0bHkgYWZ0ZXIgaXRzZWxmLiAgVGhhdCdzIHdoeSB0aGlzIHRyaWNrIHdvcmtzLlxuICAgICAgLy9cbiAgICAgIC8vIEkgYW0gc29ycnkgdGhhdCB5b3UgaGF2ZSB0byBzZWUgdGhpcy5cbiAgICAgIHJldHVybiAkMSArICQxICsgJDIgKyAnfCdcbiAgICB9KVxuXG4gICAgdGhpcy5kZWJ1ZygndGFpbD0lalxcbiAgICVzJywgdGFpbCwgdGFpbCwgcGwsIHJlKVxuICAgIHZhciB0ID0gcGwudHlwZSA9PT0gJyonID8gc3RhclxuICAgICAgOiBwbC50eXBlID09PSAnPycgPyBxbWFya1xuICAgICAgOiAnXFxcXCcgKyBwbC50eXBlXG5cbiAgICBoYXNNYWdpYyA9IHRydWVcbiAgICByZSA9IHJlLnNsaWNlKDAsIHBsLnJlU3RhcnQpICsgdCArICdcXFxcKCcgKyB0YWlsXG4gIH1cblxuICAvLyBoYW5kbGUgdHJhaWxpbmcgdGhpbmdzIHRoYXQgb25seSBtYXR0ZXIgYXQgdGhlIHZlcnkgZW5kLlxuICBjbGVhclN0YXRlQ2hhcigpXG4gIGlmIChlc2NhcGluZykge1xuICAgIC8vIHRyYWlsaW5nIFxcXFxcbiAgICByZSArPSAnXFxcXFxcXFwnXG4gIH1cblxuICAvLyBvbmx5IG5lZWQgdG8gYXBwbHkgdGhlIG5vZG90IHN0YXJ0IGlmIHRoZSByZSBzdGFydHMgd2l0aFxuICAvLyBzb21ldGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBjYXB0dXJlIGEgZG90XG4gIHZhciBhZGRQYXR0ZXJuU3RhcnQgPSBmYWxzZVxuICBzd2l0Y2ggKHJlLmNoYXJBdCgwKSkge1xuICAgIGNhc2UgJy4nOlxuICAgIGNhc2UgJ1snOlxuICAgIGNhc2UgJygnOiBhZGRQYXR0ZXJuU3RhcnQgPSB0cnVlXG4gIH1cblxuICAvLyBIYWNrIHRvIHdvcmsgYXJvdW5kIGxhY2sgb2YgbmVnYXRpdmUgbG9va2JlaGluZCBpbiBKU1xuICAvLyBBIHBhdHRlcm4gbGlrZTogKi4hKHgpLiEoeXx6KSBuZWVkcyB0byBlbnN1cmUgdGhhdCBhIG5hbWVcbiAgLy8gbGlrZSAnYS54eXoueXonIGRvZXNuJ3QgbWF0Y2guICBTbywgdGhlIGZpcnN0IG5lZ2F0aXZlXG4gIC8vIGxvb2thaGVhZCwgaGFzIHRvIGxvb2sgQUxMIHRoZSB3YXkgYWhlYWQsIHRvIHRoZSBlbmQgb2ZcbiAgLy8gdGhlIHBhdHRlcm4uXG4gIGZvciAodmFyIG4gPSBuZWdhdGl2ZUxpc3RzLmxlbmd0aCAtIDE7IG4gPiAtMTsgbi0tKSB7XG4gICAgdmFyIG5sID0gbmVnYXRpdmVMaXN0c1tuXVxuXG4gICAgdmFyIG5sQmVmb3JlID0gcmUuc2xpY2UoMCwgbmwucmVTdGFydClcbiAgICB2YXIgbmxGaXJzdCA9IHJlLnNsaWNlKG5sLnJlU3RhcnQsIG5sLnJlRW5kIC0gOClcbiAgICB2YXIgbmxMYXN0ID0gcmUuc2xpY2UobmwucmVFbmQgLSA4LCBubC5yZUVuZClcbiAgICB2YXIgbmxBZnRlciA9IHJlLnNsaWNlKG5sLnJlRW5kKVxuXG4gICAgbmxMYXN0ICs9IG5sQWZ0ZXJcblxuICAgIC8vIEhhbmRsZSBuZXN0ZWQgc3R1ZmYgbGlrZSAqKCouanN8ISgqLmpzb24pKSwgd2hlcmUgb3BlbiBwYXJlbnNcbiAgICAvLyBtZWFuIHRoYXQgd2Ugc2hvdWxkICpub3QqIGluY2x1ZGUgdGhlICkgaW4gdGhlIGJpdCB0aGF0IGlzIGNvbnNpZGVyZWRcbiAgICAvLyBcImFmdGVyXCIgdGhlIG5lZ2F0ZWQgc2VjdGlvbi5cbiAgICB2YXIgb3BlblBhcmVuc0JlZm9yZSA9IG5sQmVmb3JlLnNwbGl0KCcoJykubGVuZ3RoIC0gMVxuICAgIHZhciBjbGVhbkFmdGVyID0gbmxBZnRlclxuICAgIGZvciAoaSA9IDA7IGkgPCBvcGVuUGFyZW5zQmVmb3JlOyBpKyspIHtcbiAgICAgIGNsZWFuQWZ0ZXIgPSBjbGVhbkFmdGVyLnJlcGxhY2UoL1xcKVsrKj9dPy8sICcnKVxuICAgIH1cbiAgICBubEFmdGVyID0gY2xlYW5BZnRlclxuXG4gICAgdmFyIGRvbGxhciA9ICcnXG4gICAgaWYgKG5sQWZ0ZXIgPT09ICcnICYmIGlzU3ViICE9PSBTVUJQQVJTRSkge1xuICAgICAgZG9sbGFyID0gJyQnXG4gICAgfVxuICAgIHZhciBuZXdSZSA9IG5sQmVmb3JlICsgbmxGaXJzdCArIG5sQWZ0ZXIgKyBkb2xsYXIgKyBubExhc3RcbiAgICByZSA9IG5ld1JlXG4gIH1cblxuICAvLyBpZiB0aGUgcmUgaXMgbm90IFwiXCIgYXQgdGhpcyBwb2ludCwgdGhlbiB3ZSBuZWVkIHRvIG1ha2Ugc3VyZVxuICAvLyBpdCBkb2Vzbid0IG1hdGNoIGFnYWluc3QgYW4gZW1wdHkgcGF0aCBwYXJ0LlxuICAvLyBPdGhlcndpc2UgYS8qIHdpbGwgbWF0Y2ggYS8sIHdoaWNoIGl0IHNob3VsZCBub3QuXG4gIGlmIChyZSAhPT0gJycgJiYgaGFzTWFnaWMpIHtcbiAgICByZSA9ICcoPz0uKScgKyByZVxuICB9XG5cbiAgaWYgKGFkZFBhdHRlcm5TdGFydCkge1xuICAgIHJlID0gcGF0dGVyblN0YXJ0ICsgcmVcbiAgfVxuXG4gIC8vIHBhcnNpbmcganVzdCBhIHBpZWNlIG9mIGEgbGFyZ2VyIHBhdHRlcm4uXG4gIGlmIChpc1N1YiA9PT0gU1VCUEFSU0UpIHtcbiAgICByZXR1cm4gW3JlLCBoYXNNYWdpY11cbiAgfVxuXG4gIC8vIHNraXAgdGhlIHJlZ2V4cCBmb3Igbm9uLW1hZ2ljYWwgcGF0dGVybnNcbiAgLy8gdW5lc2NhcGUgYW55dGhpbmcgaW4gaXQsIHRob3VnaCwgc28gdGhhdCBpdCdsbCBiZVxuICAvLyBhbiBleGFjdCBtYXRjaCBhZ2FpbnN0IGEgZmlsZSBldGMuXG4gIGlmICghaGFzTWFnaWMpIHtcbiAgICByZXR1cm4gZ2xvYlVuZXNjYXBlKHBhdHRlcm4pXG4gIH1cblxuICB2YXIgZmxhZ3MgPSBvcHRpb25zLm5vY2FzZSA/ICdpJyA6ICcnXG4gIHRyeSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14nICsgcmUgKyAnJCcsIGZsYWdzKVxuICB9IGNhdGNoIChlcikge1xuICAgIC8vIElmIGl0IHdhcyBhbiBpbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiwgdGhlbiBpdCBjYW4ndCBtYXRjaFxuICAgIC8vIGFueXRoaW5nLiAgVGhpcyB0cmljayBsb29rcyBmb3IgYSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGVuZCBvZlxuICAgIC8vIHRoZSBzdHJpbmcsIHdoaWNoIGlzIG9mIGNvdXJzZSBpbXBvc3NpYmxlLCBleGNlcHQgaW4gbXVsdGktbGluZVxuICAgIC8vIG1vZGUsIGJ1dCBpdCdzIG5vdCBhIC9tIHJlZ2V4LlxuICAgIHJldHVybiBuZXcgUmVnRXhwKCckLicpXG4gIH1cblxuICByZWdFeHAuX2dsb2IgPSBwYXR0ZXJuXG4gIHJlZ0V4cC5fc3JjID0gcmVcblxuICByZXR1cm4gcmVnRXhwXG59XG5cbm1pbmltYXRjaC5tYWtlUmUgPSBmdW5jdGlvbiAocGF0dGVybiwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IE1pbmltYXRjaChwYXR0ZXJuLCBvcHRpb25zIHx8IHt9KS5tYWtlUmUoKVxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1ha2VSZSA9IG1ha2VSZVxuZnVuY3Rpb24gbWFrZVJlICgpIHtcbiAgaWYgKHRoaXMucmVnZXhwIHx8IHRoaXMucmVnZXhwID09PSBmYWxzZSkgcmV0dXJuIHRoaXMucmVnZXhwXG5cbiAgLy8gYXQgdGhpcyBwb2ludCwgdGhpcy5zZXQgaXMgYSAyZCBhcnJheSBvZiBwYXJ0aWFsXG4gIC8vIHBhdHRlcm4gc3RyaW5ncywgb3IgXCIqKlwiLlxuICAvL1xuICAvLyBJdCdzIGJldHRlciB0byB1c2UgLm1hdGNoKCkuICBUaGlzIGZ1bmN0aW9uIHNob3VsZG4ndFxuICAvLyBiZSB1c2VkLCByZWFsbHksIGJ1dCBpdCdzIHByZXR0eSBjb252ZW5pZW50IHNvbWV0aW1lcyxcbiAgLy8gd2hlbiB5b3UganVzdCB3YW50IHRvIHdvcmsgd2l0aCBhIHJlZ2V4LlxuICB2YXIgc2V0ID0gdGhpcy5zZXRcblxuICBpZiAoIXNldC5sZW5ndGgpIHtcbiAgICB0aGlzLnJlZ2V4cCA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXMucmVnZXhwXG4gIH1cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICB2YXIgdHdvU3RhciA9IG9wdGlvbnMubm9nbG9ic3RhciA/IHN0YXJcbiAgICA6IG9wdGlvbnMuZG90ID8gdHdvU3RhckRvdFxuICAgIDogdHdvU3Rhck5vRG90XG4gIHZhciBmbGFncyA9IG9wdGlvbnMubm9jYXNlID8gJ2knIDogJydcblxuICB2YXIgcmUgPSBzZXQubWFwKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKHAgPT09IEdMT0JTVEFSKSA/IHR3b1N0YXJcbiAgICAgIDogKHR5cGVvZiBwID09PSAnc3RyaW5nJykgPyByZWdFeHBFc2NhcGUocClcbiAgICAgIDogcC5fc3JjXG4gICAgfSkuam9pbignXFxcXFxcLycpXG4gIH0pLmpvaW4oJ3wnKVxuXG4gIC8vIG11c3QgbWF0Y2ggZW50aXJlIHBhdHRlcm5cbiAgLy8gZW5kaW5nIGluIGEgKiBvciAqKiB3aWxsIG1ha2UgaXQgbGVzcyBzdHJpY3QuXG4gIHJlID0gJ14oPzonICsgcmUgKyAnKSQnXG5cbiAgLy8gY2FuIG1hdGNoIGFueXRoaW5nLCBhcyBsb25nIGFzIGl0J3Mgbm90IHRoaXMuXG4gIGlmICh0aGlzLm5lZ2F0ZSkgcmUgPSAnXig/IScgKyByZSArICcpLiokJ1xuXG4gIHRyeSB7XG4gICAgdGhpcy5yZWdleHAgPSBuZXcgUmVnRXhwKHJlLCBmbGFncylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICB0aGlzLnJlZ2V4cCA9IGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRoaXMucmVnZXhwXG59XG5cbm1pbmltYXRjaC5tYXRjaCA9IGZ1bmN0aW9uIChsaXN0LCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBtbSA9IG5ldyBNaW5pbWF0Y2gocGF0dGVybiwgb3B0aW9ucylcbiAgbGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIG1tLm1hdGNoKGYpXG4gIH0pXG4gIGlmIChtbS5vcHRpb25zLm5vbnVsbCAmJiAhbGlzdC5sZW5ndGgpIHtcbiAgICBsaXN0LnB1c2gocGF0dGVybilcbiAgfVxuICByZXR1cm4gbGlzdFxufVxuXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1hdGNoID0gbWF0Y2hcbmZ1bmN0aW9uIG1hdGNoIChmLCBwYXJ0aWFsKSB7XG4gIHRoaXMuZGVidWcoJ21hdGNoJywgZiwgdGhpcy5wYXR0ZXJuKVxuICAvLyBzaG9ydC1jaXJjdWl0IGluIHRoZSBjYXNlIG9mIGJ1c3RlZCB0aGluZ3MuXG4gIC8vIGNvbW1lbnRzLCBldGMuXG4gIGlmICh0aGlzLmNvbW1lbnQpIHJldHVybiBmYWxzZVxuICBpZiAodGhpcy5lbXB0eSkgcmV0dXJuIGYgPT09ICcnXG5cbiAgaWYgKGYgPT09ICcvJyAmJiBwYXJ0aWFsKSByZXR1cm4gdHJ1ZVxuXG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG5cbiAgLy8gd2luZG93czogbmVlZCB0byB1c2UgLywgbm90IFxcXG4gIGlmIChwYXRoLnNlcCAhPT0gJy8nKSB7XG4gICAgZiA9IGYuc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKVxuICB9XG5cbiAgLy8gdHJlYXQgdGhlIHRlc3QgcGF0aCBhcyBhIHNldCBvZiBwYXRocGFydHMuXG4gIGYgPSBmLnNwbGl0KHNsYXNoU3BsaXQpXG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCAnc3BsaXQnLCBmKVxuXG4gIC8vIGp1c3QgT05FIG9mIHRoZSBwYXR0ZXJuIHNldHMgaW4gdGhpcy5zZXQgbmVlZHMgdG8gbWF0Y2hcbiAgLy8gaW4gb3JkZXIgZm9yIGl0IHRvIGJlIHZhbGlkLiAgSWYgbmVnYXRpbmcsIHRoZW4ganVzdCBvbmVcbiAgLy8gbWF0Y2ggbWVhbnMgdGhhdCB3ZSBoYXZlIGZhaWxlZC5cbiAgLy8gRWl0aGVyIHdheSwgcmV0dXJuIG9uIHRoZSBmaXJzdCBoaXQuXG5cbiAgdmFyIHNldCA9IHRoaXMuc2V0XG4gIHRoaXMuZGVidWcodGhpcy5wYXR0ZXJuLCAnc2V0Jywgc2V0KVxuXG4gIC8vIEZpbmQgdGhlIGJhc2VuYW1lIG9mIHRoZSBwYXRoIGJ5IGxvb2tpbmcgZm9yIHRoZSBsYXN0IG5vbi1lbXB0eSBzZWdtZW50XG4gIHZhciBmaWxlbmFtZVxuICB2YXIgaVxuICBmb3IgKGkgPSBmLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZmlsZW5hbWUgPSBmW2ldXG4gICAgaWYgKGZpbGVuYW1lKSBicmVha1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXR0ZXJuID0gc2V0W2ldXG4gICAgdmFyIGZpbGUgPSBmXG4gICAgaWYgKG9wdGlvbnMubWF0Y2hCYXNlICYmIHBhdHRlcm4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBmaWxlID0gW2ZpbGVuYW1lXVxuICAgIH1cbiAgICB2YXIgaGl0ID0gdGhpcy5tYXRjaE9uZShmaWxlLCBwYXR0ZXJuLCBwYXJ0aWFsKVxuICAgIGlmIChoaXQpIHtcbiAgICAgIGlmIChvcHRpb25zLmZsaXBOZWdhdGUpIHJldHVybiB0cnVlXG4gICAgICByZXR1cm4gIXRoaXMubmVnYXRlXG4gICAgfVxuICB9XG5cbiAgLy8gZGlkbid0IGdldCBhbnkgaGl0cy4gIHRoaXMgaXMgc3VjY2VzcyBpZiBpdCdzIGEgbmVnYXRpdmVcbiAgLy8gcGF0dGVybiwgZmFpbHVyZSBvdGhlcndpc2UuXG4gIGlmIChvcHRpb25zLmZsaXBOZWdhdGUpIHJldHVybiBmYWxzZVxuICByZXR1cm4gdGhpcy5uZWdhdGVcbn1cblxuLy8gc2V0IHBhcnRpYWwgdG8gdHJ1ZSB0byB0ZXN0IGlmLCBmb3IgZXhhbXBsZSxcbi8vIFwiL2EvYlwiIG1hdGNoZXMgdGhlIHN0YXJ0IG9mIFwiLyovYi8qL2RcIlxuLy8gUGFydGlhbCBtZWFucywgaWYgeW91IHJ1biBvdXQgb2YgZmlsZSBiZWZvcmUgeW91IHJ1blxuLy8gb3V0IG9mIHBhdHRlcm4sIHRoZW4gdGhhdCdzIGZpbmUsIGFzIGxvbmcgYXMgYWxsXG4vLyB0aGUgcGFydHMgbWF0Y2guXG5NaW5pbWF0Y2gucHJvdG90eXBlLm1hdGNoT25lID0gZnVuY3Rpb24gKGZpbGUsIHBhdHRlcm4sIHBhcnRpYWwpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcblxuICB0aGlzLmRlYnVnKCdtYXRjaE9uZScsXG4gICAgeyAndGhpcyc6IHRoaXMsIGZpbGU6IGZpbGUsIHBhdHRlcm46IHBhdHRlcm4gfSlcblxuICB0aGlzLmRlYnVnKCdtYXRjaE9uZScsIGZpbGUubGVuZ3RoLCBwYXR0ZXJuLmxlbmd0aClcblxuICBmb3IgKHZhciBmaSA9IDAsXG4gICAgICBwaSA9IDAsXG4gICAgICBmbCA9IGZpbGUubGVuZ3RoLFxuICAgICAgcGwgPSBwYXR0ZXJuLmxlbmd0aFxuICAgICAgOyAoZmkgPCBmbCkgJiYgKHBpIDwgcGwpXG4gICAgICA7IGZpKyssIHBpKyspIHtcbiAgICB0aGlzLmRlYnVnKCdtYXRjaE9uZSBsb29wJylcbiAgICB2YXIgcCA9IHBhdHRlcm5bcGldXG4gICAgdmFyIGYgPSBmaWxlW2ZpXVxuXG4gICAgdGhpcy5kZWJ1ZyhwYXR0ZXJuLCBwLCBmKVxuXG4gICAgLy8gc2hvdWxkIGJlIGltcG9zc2libGUuXG4gICAgLy8gc29tZSBpbnZhbGlkIHJlZ2V4cCBzdHVmZiBpbiB0aGUgc2V0LlxuICAgIGlmIChwID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAocCA9PT0gR0xPQlNUQVIpIHtcbiAgICAgIHRoaXMuZGVidWcoJ0dMT0JTVEFSJywgW3BhdHRlcm4sIHAsIGZdKVxuXG4gICAgICAvLyBcIioqXCJcbiAgICAgIC8vIGEvKiovYi8qKi9jIHdvdWxkIG1hdGNoIHRoZSBmb2xsb3dpbmc6XG4gICAgICAvLyBhL2IveC95L3ovY1xuICAgICAgLy8gYS94L3kvei9iL2NcbiAgICAgIC8vIGEvYi94L2IveC9jXG4gICAgICAvLyBhL2IvY1xuICAgICAgLy8gVG8gZG8gdGhpcywgdGFrZSB0aGUgcmVzdCBvZiB0aGUgcGF0dGVybiBhZnRlclxuICAgICAgLy8gdGhlICoqLCBhbmQgc2VlIGlmIGl0IHdvdWxkIG1hdGNoIHRoZSBmaWxlIHJlbWFpbmRlci5cbiAgICAgIC8vIElmIHNvLCByZXR1cm4gc3VjY2Vzcy5cbiAgICAgIC8vIElmIG5vdCwgdGhlICoqIFwic3dhbGxvd3NcIiBhIHNlZ21lbnQsIGFuZCB0cnkgYWdhaW4uXG4gICAgICAvLyBUaGlzIGlzIHJlY3Vyc2l2ZWx5IGF3ZnVsLlxuICAgICAgLy9cbiAgICAgIC8vIGEvKiovYi8qKi9jIG1hdGNoaW5nIGEvYi94L3kvei9jXG4gICAgICAvLyAtIGEgbWF0Y2hlcyBhXG4gICAgICAvLyAtIGRvdWJsZXN0YXJcbiAgICAgIC8vICAgLSBtYXRjaE9uZShiL3gveS96L2MsIGIvKiovYylcbiAgICAgIC8vICAgICAtIGIgbWF0Y2hlcyBiXG4gICAgICAvLyAgICAgLSBkb3VibGVzdGFyXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKHgveS96L2MsIGMpIC0+IG5vXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKHkvei9jLCBjKSAtPiBub1xuICAgICAgLy8gICAgICAgLSBtYXRjaE9uZSh6L2MsIGMpIC0+IG5vXG4gICAgICAvLyAgICAgICAtIG1hdGNoT25lKGMsIGMpIHllcywgaGl0XG4gICAgICB2YXIgZnIgPSBmaVxuICAgICAgdmFyIHByID0gcGkgKyAxXG4gICAgICBpZiAocHIgPT09IHBsKSB7XG4gICAgICAgIHRoaXMuZGVidWcoJyoqIGF0IHRoZSBlbmQnKVxuICAgICAgICAvLyBhICoqIGF0IHRoZSBlbmQgd2lsbCBqdXN0IHN3YWxsb3cgdGhlIHJlc3QuXG4gICAgICAgIC8vIFdlIGhhdmUgZm91bmQgYSBtYXRjaC5cbiAgICAgICAgLy8gaG93ZXZlciwgaXQgd2lsbCBub3Qgc3dhbGxvdyAvLngsIHVubGVzc1xuICAgICAgICAvLyBvcHRpb25zLmRvdCBpcyBzZXQuXG4gICAgICAgIC8vIC4gYW5kIC4uIGFyZSAqbmV2ZXIqIG1hdGNoZWQgYnkgKiosIGZvciBleHBsb3NpdmVseVxuICAgICAgICAvLyBleHBvbmVudGlhbCByZWFzb25zLlxuICAgICAgICBmb3IgKDsgZmkgPCBmbDsgZmkrKykge1xuICAgICAgICAgIGlmIChmaWxlW2ZpXSA9PT0gJy4nIHx8IGZpbGVbZmldID09PSAnLi4nIHx8XG4gICAgICAgICAgICAoIW9wdGlvbnMuZG90ICYmIGZpbGVbZmldLmNoYXJBdCgwKSA9PT0gJy4nKSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gb2ssIGxldCdzIHNlZSBpZiB3ZSBjYW4gc3dhbGxvdyB3aGF0ZXZlciB3ZSBjYW4uXG4gICAgICB3aGlsZSAoZnIgPCBmbCkge1xuICAgICAgICB2YXIgc3dhbGxvd2VlID0gZmlsZVtmcl1cblxuICAgICAgICB0aGlzLmRlYnVnKCdcXG5nbG9ic3RhciB3aGlsZScsIGZpbGUsIGZyLCBwYXR0ZXJuLCBwciwgc3dhbGxvd2VlKVxuXG4gICAgICAgIC8vIFhYWCByZW1vdmUgdGhpcyBzbGljZS4gIEp1c3QgcGFzcyB0aGUgc3RhcnQgaW5kZXguXG4gICAgICAgIGlmICh0aGlzLm1hdGNoT25lKGZpbGUuc2xpY2UoZnIpLCBwYXR0ZXJuLnNsaWNlKHByKSwgcGFydGlhbCkpIHtcbiAgICAgICAgICB0aGlzLmRlYnVnKCdnbG9ic3RhciBmb3VuZCBtYXRjaCEnLCBmciwgZmwsIHN3YWxsb3dlZSlcbiAgICAgICAgICAvLyBmb3VuZCBhIG1hdGNoLlxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FuJ3Qgc3dhbGxvdyBcIi5cIiBvciBcIi4uXCIgZXZlci5cbiAgICAgICAgICAvLyBjYW4gb25seSBzd2FsbG93IFwiLmZvb1wiIHdoZW4gZXhwbGljaXRseSBhc2tlZC5cbiAgICAgICAgICBpZiAoc3dhbGxvd2VlID09PSAnLicgfHwgc3dhbGxvd2VlID09PSAnLi4nIHx8XG4gICAgICAgICAgICAoIW9wdGlvbnMuZG90ICYmIHN3YWxsb3dlZS5jaGFyQXQoMCkgPT09ICcuJykpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ2RvdCBkZXRlY3RlZCEnLCBmaWxlLCBmciwgcGF0dGVybiwgcHIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vICoqIHN3YWxsb3dzIGEgc2VnbWVudCwgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgIHRoaXMuZGVidWcoJ2dsb2JzdGFyIHN3YWxsb3cgYSBzZWdtZW50LCBhbmQgY29udGludWUnKVxuICAgICAgICAgIGZyKytcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBubyBtYXRjaCB3YXMgZm91bmQuXG4gICAgICAvLyBIb3dldmVyLCBpbiBwYXJ0aWFsIG1vZGUsIHdlIGNhbid0IHNheSB0aGlzIGlzIG5lY2Vzc2FyaWx5IG92ZXIuXG4gICAgICAvLyBJZiB0aGVyZSdzIG1vcmUgKnBhdHRlcm4qIGxlZnQsIHRoZW5cbiAgICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICAgIC8vIHJhbiBvdXQgb2YgZmlsZVxuICAgICAgICB0aGlzLmRlYnVnKCdcXG4+Pj4gbm8gbWF0Y2gsIHBhcnRpYWw/JywgZmlsZSwgZnIsIHBhdHRlcm4sIHByKVxuICAgICAgICBpZiAoZnIgPT09IGZsKSByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gKipcbiAgICAvLyBub24tbWFnaWMgcGF0dGVybnMganVzdCBoYXZlIHRvIG1hdGNoIGV4YWN0bHlcbiAgICAvLyBwYXR0ZXJucyB3aXRoIG1hZ2ljIGhhdmUgYmVlbiB0dXJuZWQgaW50byByZWdleHBzLlxuICAgIHZhciBoaXRcbiAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAob3B0aW9ucy5ub2Nhc2UpIHtcbiAgICAgICAgaGl0ID0gZi50b0xvd2VyQ2FzZSgpID09PSBwLnRvTG93ZXJDYXNlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpdCA9IGYgPT09IHBcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVidWcoJ3N0cmluZyBtYXRjaCcsIHAsIGYsIGhpdClcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0ID0gZi5tYXRjaChwKVxuICAgICAgdGhpcy5kZWJ1ZygncGF0dGVybiBtYXRjaCcsIHAsIGYsIGhpdClcbiAgICB9XG5cbiAgICBpZiAoIWhpdCkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBOb3RlOiBlbmRpbmcgaW4gLyBtZWFucyB0aGF0IHdlJ2xsIGdldCBhIGZpbmFsIFwiXCJcbiAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi4gIFRoaXMgY2FuIG9ubHkgbWF0Y2ggYVxuICAvLyBjb3JyZXNwb25kaW5nIFwiXCIgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAgLy8gSWYgdGhlIGZpbGUgZW5kcyBpbiAvLCB0aGVuIGl0IGNhbiBvbmx5IG1hdGNoIGFcbiAgLy8gYSBwYXR0ZXJuIHRoYXQgZW5kcyBpbiAvLCB1bmxlc3MgdGhlIHBhdHRlcm4ganVzdFxuICAvLyBkb2Vzbid0IGhhdmUgYW55IG1vcmUgZm9yIGl0LiBCdXQsIGEvYi8gc2hvdWxkICpub3QqXG4gIC8vIG1hdGNoIFwiYS9iLypcIiwgZXZlbiB0aG91Z2ggXCJcIiBtYXRjaGVzIGFnYWluc3QgdGhlXG4gIC8vIFteL10qPyBwYXR0ZXJuLCBleGNlcHQgaW4gcGFydGlhbCBtb2RlLCB3aGVyZSBpdCBtaWdodFxuICAvLyBzaW1wbHkgbm90IGJlIHJlYWNoZWQgeWV0LlxuICAvLyBIb3dldmVyLCBhL2IvIHNob3VsZCBzdGlsbCBzYXRpc2Z5IGEvKlxuXG4gIC8vIG5vdyBlaXRoZXIgd2UgZmVsbCBvZmYgdGhlIGVuZCBvZiB0aGUgcGF0dGVybiwgb3Igd2UncmUgZG9uZS5cbiAgaWYgKGZpID09PSBmbCAmJiBwaSA9PT0gcGwpIHtcbiAgICAvLyByYW4gb3V0IG9mIHBhdHRlcm4gYW5kIGZpbGVuYW1lIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgLy8gYW4gZXhhY3QgaGl0IVxuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAoZmkgPT09IGZsKSB7XG4gICAgLy8gcmFuIG91dCBvZiBmaWxlLCBidXQgc3RpbGwgaGFkIHBhdHRlcm4gbGVmdC5cbiAgICAvLyB0aGlzIGlzIG9rIGlmIHdlJ3JlIGRvaW5nIHRoZSBtYXRjaCBhcyBwYXJ0IG9mXG4gICAgLy8gYSBnbG9iIGZzIHRyYXZlcnNhbC5cbiAgICByZXR1cm4gcGFydGlhbFxuICB9IGVsc2UgaWYgKHBpID09PSBwbCkge1xuICAgIC8vIHJhbiBvdXQgb2YgcGF0dGVybiwgc3RpbGwgaGF2ZSBmaWxlIGxlZnQuXG4gICAgLy8gdGhpcyBpcyBvbmx5IGFjY2VwdGFibGUgaWYgd2UncmUgb24gdGhlIHZlcnkgbGFzdFxuICAgIC8vIGVtcHR5IHNlZ21lbnQgb2YgYSBmaWxlIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICAvLyBhLyogc2hvdWxkIG1hdGNoIGEvYi9cbiAgICB2YXIgZW1wdHlGaWxlRW5kID0gKGZpID09PSBmbCAtIDEpICYmIChmaWxlW2ZpXSA9PT0gJycpXG4gICAgcmV0dXJuIGVtcHR5RmlsZUVuZFxuICB9XG5cbiAgLy8gc2hvdWxkIGJlIHVucmVhY2hhYmxlLlxuICB0aHJvdyBuZXcgRXJyb3IoJ3d0Zj8nKVxufVxuXG4vLyByZXBsYWNlIHN0dWZmIGxpa2UgXFwqIHdpdGggKlxuZnVuY3Rpb24gZ2xvYlVuZXNjYXBlIChzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1xcXFwoLikvZywgJyQxJylcbn1cblxuZnVuY3Rpb24gcmVnRXhwRXNjYXBlIChzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJylcbn1cbiIsInZhciBkaXJwYXRocyA9IHJlcXVpcmUoJy4vbGliL3BhdGhzJyk7XHJcblxyXG5PYmplY3QuYXNzaWduKGV4cG9ydHMsIGRpcnBhdGhzKVxyXG5leHBvcnRzLnJlYWRGaWxlcyA9IHJlcXVpcmUoJy4vbGliL3JlYWRmaWxlcycpO1xyXG5leHBvcnRzLnJlYWRGaWxlc1N0cmVhbSA9IHJlcXVpcmUoJy4vbGliL3JlYWRmaWxlc3N0cmVhbScpO1xyXG4iLCLvu792YXIgZnMgPSByZXF1aXJlKCdmcycpLFxuICAgIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmV4cG9ydHMucHJvbWlzZUZpbGVzID0gZnVuY3Rpb24gcHJvbWlzZUZpbGVzKGRpciwgdHlwZSwgb3B0aW9ucyl7XG4gIHR5cGUgPSB0eXBlIHx8ICdmaWxlJ1xuXG4gIHZhciBwcm9jZXNzb3IgPSBmdW5jdGlvbihyZXMscmVqKXtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbihlcnIsZGF0YSl7XG4gICAgICBpZihlcnIpcmV0dXJuIHJlaihlcnIpXG4gICAgICByZXMoZGF0YSlcbiAgICB9XG4gICAgZXhwb3J0cy5maWxlcyhkaXIsdHlwZSxjYixvcHRpb25zKVxuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZShwcm9jZXNzb3IpXG59XG5cbi8qKlxuICogZmluZCBhbGwgZmlsZXMgb3Igc3ViZGlycyAocmVjdXJzaXZlKSBhbmQgcGFzcyB0byBjYWxsYmFjayBmblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgZGlyZWN0b3J5IGluIHdoaWNoIHRvIHJlY3Vyc2UgZmlsZXMgb3Igc3ViZGlyc1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgdHlwZSBvZiBkaXIgZW50cnkgdG8gcmVjdXJzZSAoJ2ZpbGUnLCAnZGlyJywgb3IgJ2FsbCcsIGRlZmF1bHRzIHRvICdmaWxlJylcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyb3IsIDxBcnJheS48c3RyaW5nPil9IGNhbGxiYWNrIGZuIHRvIGNhbGwgd2hlbiBkb25lXG4gKiBAZXhhbXBsZVxuICogZGlyLmZpbGVzKF9fZGlybmFtZSwgZnVuY3Rpb24oZXJyLCBmaWxlcykge1xuICogICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gKiAgICAgIGNvbnNvbGUubG9nKCdmaWxlczonLCBmaWxlcyk7XG4gKiAgfSk7XG4gKi9cbmV4cG9ydHMuZmlsZXMgPSBmdW5jdGlvbiBmaWxlcyhkaXIsIHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBvZlR5cGUgPSB0eXBlb2YgdHlwZVxuICBpZihvZlR5cGUgPT0gJ29iamVjdCcpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHR5cGVcbiAgICB0eXBlID0gJ2ZpbGUnXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbigpe31cbiAgfWVsc2UgaWYgKG9mVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvL2lnbm9yZVR5cGUgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IHR5cGU7XG4gICAgdHlwZSA9ICdmaWxlJztcbiAgfVxuICBcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgcGVuZGluZyxcbiAgICAgIHJlc3VsdHMgPSB7XG4gICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgIGRpcnM6IFtdXG4gICAgICB9O1xuXG4gIHZhciBkb25lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodHlwZT09PSdjb21iaW5lJyl7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWxlcy5jb25jYXQocmVzdWx0cy5kaXJzKVxuICAgIH0gZWxzZSBpZiAoIXR5cGUgfHwgb3B0aW9ucy5pZ25vcmVUeXBlIHx8IFsnYWxsJywnY29tYmluZSddLmluZGV4T2YodHlwZSk+PTApIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHNbdHlwZSArICdzJ11cbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnN5bmMpcmV0dXJuO1xuXG5cbiAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgfTtcblxuICB2YXIgZ2V0U3RhdEhhbmRsZXIgPSBmdW5jdGlvbihzdGF0UGF0aCwgbmFtZSwgbHN0YXRDYWxsZWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXJyLCBzdGF0KSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmICghbHN0YXRDYWxsZWQpIHtcbiAgICAgICAgICByZXR1cm4gZnMubHN0YXQoc3RhdFBhdGgsIGdldFN0YXRIYW5kbGVyKHN0YXRQYXRoLCBuYW1lLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBwdXNoVmFsID0gb3B0aW9ucy5zaG9ydE5hbWUgPyBuYW1lIDogc3RhdFBhdGhcblxuICAgICAgaWYgKHN0YXQgJiYgc3RhdC5pc0RpcmVjdG9yeSgpICYmIHN0YXQubW9kZSAhPT0gMTcxMTUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09ICdmaWxlJykge1xuICAgICAgICAgIHJlc3VsdHMuZGlycy5wdXNoKHB1c2hWYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlPT1udWxsIHx8IG9wdGlvbnMucmVjdXJzaXZlKSB7XG4gICAgICAgICAgdmFyIHN1Ymxvb3AgPSBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgaWYgKGVycil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ2NvbWJpbmUnKXtcbiAgICAgICAgICAgICAgcmVzdWx0cy5maWxlcyA9IHJlc3VsdHMuZmlsZXMuY29uY2F0KHJlcyk7XG4gICAgICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgcmVzdWx0cy5maWxlcyA9IHJlc3VsdHMuZmlsZXMuY29uY2F0KHJlcy5maWxlcyk7XG4gICAgICAgICAgICAgIHJlc3VsdHMuZGlycyA9IHJlc3VsdHMuZGlycy5jb25jYXQocmVzLmRpcnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLmZpbGVzID0gcmVzdWx0cy5maWxlcy5jb25jYXQocmVzLmZpbGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5kaXJzID0gcmVzdWx0cy5kaXJzLmNvbmNhdChyZXMuZGlycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghLS1wZW5kaW5nKXtcbiAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucylcbiAgICAgICAgICBuZXdPcHRpb25zLmlnbm9yZVR5cGUgPSB0cnVlXG4gICAgICAgICAgdmFyIG1vcmVSZXN1bHRzID0gZmlsZXMoc3RhdFBhdGgsIHR5cGUsIHN1Ymxvb3AsIG5ld09wdGlvbnMpO1xuXG4gICAgICAgICAgaWYob3B0aW9ucy5zeW5jKXtcbiAgICAgICAgICAgIHN1Ymxvb3AobnVsbCwgbW9yZVJlc3VsdHMpXG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZiAoIS0tcGVuZGluZyl7XG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlICE9PSAnZGlyJykge1xuICAgICAgICAgIHJlc3VsdHMuZmlsZXMucHVzaChwdXNoVmFsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzaG91bGQgYmUgdGhlIGxhc3Qgc3RhdGVtZW50IGluIHN0YXRIYW5kbGVyXG4gICAgICAgIGlmICghLS1wZW5kaW5nKXtcbiAgICAgICAgICBkb25lKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZkaXIgPSBCdWZmZXIuZnJvbShkaXIpO1xuXG4gIGNvbnN0IG9uRGlyUmVhZCA9IGZ1bmN0aW9uKGVyciwgbGlzdCkge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIFxuICAgIHBlbmRpbmcgPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG4gICAgXG4gICAgZm9yICh2YXIgZmlsZSwgaSA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGZuYW1lID0gbGlzdFtpXS50b1N0cmluZygpO1xuICAgICAgZmlsZSA9IHBhdGguam9pbihkaXIsIGZuYW1lKTtcbiAgICAgIHZhciBidWZmaWxlID0gQnVmZmVyLmNvbmNhdChbYnVmZGlyLCBCdWZmZXIuZnJvbShwYXRoLnNlcCksIGxpc3RbaV1dKTtcblxuICAgICAgaWYob3B0aW9ucy5zeW5jKXtcbiAgICAgICAgdmFyIHJlcyA9IGZzLnN0YXRTeW5jKGJ1ZmZpbGUpO1xuICAgICAgICBnZXRTdGF0SGFuZGxlcihmaWxlLGZuYW1lKShudWxsLCByZXMpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgZnMuc3RhdChidWZmaWxlLCBnZXRTdGF0SGFuZGxlcihmaWxlLGZuYW1lKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGNvbnN0IG9uU3RhdCA9IGZ1bmN0aW9uKGVyciwgc3RhdCkge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgIGlmIChzdGF0ICYmIHN0YXQubW9kZSA9PT0gMTcxMTUpIHJldHVybiBkb25lKCk7XG5cbiAgICBpZihvcHRpb25zLnN5bmMpe1xuICAgICAgY29uc3QgbGlzdCA9IGZzLnJlYWRkaXJTeW5jKGJ1ZmRpciwge2VuY29kaW5nOiAnYnVmZmVyJ30pXG4gICAgICByZXR1cm4gb25EaXJSZWFkKG51bGwsIGxpc3QpXG4gICAgfWVsc2V7XG4gICAgICBmcy5yZWFkZGlyKGJ1ZmRpciwge2VuY29kaW5nOiAnYnVmZmVyJ30sIG9uRGlyUmVhZClcbiAgICB9XG4gIH1cblxuICBpZihvcHRpb25zLnN5bmMpe1xuICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhidWZkaXIpO1xuICAgIHJldHVybiBvblN0YXQobnVsbCwgc3RhdClcbiAgfWVsc2V7XG4gICAgZnMuc3RhdChidWZkaXIsIG9uU3RhdCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBmaW5kIGFsbCBmaWxlcyBhbmQgc3ViZGlycyBpbiAgYSBkaXJlY3RvcnkgKHJlY3Vyc2l2ZSkgYW5kIHBhc3MgdGhlbSB0byBjYWxsYmFjayBmblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgZGlyZWN0b3J5IGluIHdoaWNoIHRvIHJlY3Vyc2UgZmlsZXMgb3Igc3ViZGlyc1xuICogQHBhcmFtIHtib29sZWFufSBjb21iaW5lIHdoZXRoZXIgdG8gY29tYmluZSBib3RoIHN1YmRpcnMgYW5kIGZpbGVwYXRocyBpbnRvIG9uZSBhcnJheSAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyb3IsIE9iamVjdC48PEFycmF5LjxzdHJpbmc+LCBBcnJheS48c3RyaW5nPj4pfSBjYWxsYmFjayBmbiB0byBjYWxsIHdoZW4gZG9uZVxuICogQGV4YW1wbGVcbiAqIGRpci5wYXRocyhfX2Rpcm5hbWUsIGZ1bmN0aW9uIChlcnIsIHBhdGhzKSB7XG4gKiAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICogICAgIGNvbnNvbGUubG9nKCdmaWxlczonLCBwYXRocy5maWxlcyk7XG4gKiAgICAgY29uc29sZS5sb2coJ3N1YmRpcnM6JywgcGF0aHMuZGlycyk7XG4gKiB9KTtcbiAqIGRpci5wYXRocyhfX2Rpcm5hbWUsIHRydWUsIGZ1bmN0aW9uIChlcnIsIHBhdGhzKSB7XG4gKiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAqICAgICAgY29uc29sZS5sb2coJ3BhdGhzOicsIHBhdGhzKTtcbiAqIH0pO1xuICovXG5leHBvcnRzLnBhdGhzID0gZnVuY3Rpb24gcGF0aHMoZGlyLCBjb21iaW5lLCBjYWxsYmFjaykge1xuXG4gICAgdmFyIHR5cGU7XG5cbiAgICBpZiAodHlwZW9mIGNvbWJpbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjb21iaW5lO1xuICAgICAgICBjb21iaW5lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhwb3J0cy5maWxlcyhkaXIsICdhbGwnLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIGlmIChjb21iaW5lKSB7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMuZmlsZXMuY29uY2F0KHJlc3VsdHMuZGlycykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuLyoqXG4gKiBmaW5kIGFsbCBzdWJkaXJzIChyZWN1cnNpdmUpIG9mIGEgZGlyZWN0b3J5IGFuZCBwYXNzIHRoZW0gdG8gY2FsbGJhY2sgZm5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdG9yeSBpbiB3aGljaCB0byBmaW5kIHN1YmRpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHR5cGUgb2YgZGlyIGVudHJ5IHRvIHJlY3Vyc2UgKCdmaWxlJyBvciAnZGlyJywgZGVmYXVsdHMgdG8gJ2ZpbGUnKVxuICogQHBhcmFtIHtmdW5jdGlvbihlcnJvciwgPEFycmF5LjxzdHJpbmc+KX0gY2FsbGJhY2sgZm4gdG8gY2FsbCB3aGVuIGRvbmVcbiAqIEBleGFtcGxlXG4gKiBkaXIuc3ViZGlycyhfX2Rpcm5hbWUsIGZ1bmN0aW9uIChlcnIsIHBhdGhzKSB7XG4gKiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAqICAgICAgY29uc29sZS5sb2coJ2ZpbGVzOicsIHBhdGhzLmZpbGVzKTtcbiAqICAgICAgY29uc29sZS5sb2coJ3N1YmRpcnM6JywgcGF0aHMuZGlycyk7XG4gKiB9KTtcbiAqL1xuZXhwb3J0cy5zdWJkaXJzID0gZnVuY3Rpb24gc3ViZGlycyhkaXIsIGNhbGxiYWNrLCB0eXBlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgY29uc3QgaUNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCBzdWJkaXJzKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG5cbiAgICBpZih0eXBlPT0nY29tYmluZScpe1xuICAgICAgc3ViZGlycyA9IHN1YmRpcnMuZmlsZXMuY29uY2F0KHN1YmRpcnMuZGlycylcbiAgICB9XG4gICAgXG4gICAgaWYob3B0aW9ucy5zeW5jKXJldHVybiBzdWJkaXJzXG5cbiAgICBjYWxsYmFjayhudWxsLCBzdWJkaXJzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGV4cG9ydHMuZmlsZXMoZGlyLCAnZGlyJywgaUNhbGxiYWNrLCBvcHRpb25zKVxuXG4gIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5zeW5jKXtcbiAgICByZXR1cm4gaUNhbGxiYWNrKG51bGwscmVzKVxuICB9XG59O1xuIiwidmFyIGZzID0gcmVxdWlyZSgnZnMnKSxcbiAgICBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vKipcbiAqIG1lcmdlIHR3byBvYmplY3RzIGJ5IGV4dGVuZGluZyB0YXJnZXQgb2JqZWN0IHdpdGggc291cmNlIG9iamVjdFxuICogQHBhcmFtIHRhcmdldCBvYmplY3QgdG8gbWVyZ2VcbiAqIEBwYXJhbSBzb3VyY2Ugb2JqZWN0IHRvIG1lcmdlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFttb2RpZnldIHdoZXRoZXIgdG8gbW9kaWZ5IHRoZSB0YXJnZXRcbiAqIEByZXR1cm5zIHtPYmplY3R9IGV4dGVuZGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UsIG1vZGlmeSkge1xuICAgIHZhciByZXN1bHQgPSB0YXJnZXQgPyBtb2RpZnkgPyB0YXJnZXQgOiBleHRlbmQoe30sIHRhcmdldCwgdHJ1ZSkgOiB7fTtcbiAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlc3VsdDtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogZGV0ZXJtaW5lIGlmIGEgc3RyaW5nIGlzIGNvbnRhaW5lZCB3aXRoaW4gYW4gYXJyYXkgb3IgbWF0Y2hlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICogQHBhcmFtICAge1N0cmluZ30gc3RyIHN0cmluZyB0byBtYXRjaFxuICogQHBhcmFtICAge0FycmF5fFJlZ2V4fSBtYXRjaCBhcnJheSBvciByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlcmUgaXMgYSBtYXRjaFxuICovXG5mdW5jdGlvbiBtYXRjaGVzKHN0ciwgbWF0Y2gpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaCkpIHJldHVybiBtYXRjaC5pbmRleE9mKHN0cikgPiAtMTtcbiAgICByZXR1cm4gbWF0Y2gudGVzdChzdHIpO1xufVxuXG4vKipcbiAqIHJlYWQgZmlsZXMgYW5kIGNhbGwgYSBmdW5jdGlvbiB3aXRoIHRoZSBjb250ZW50cyBvZiBlYWNoIGZpbGVcbiAqIEBwYXJhbSAge1N0cmluZ30gZGlyIHBhdGggb2YgZGlyIGNvbnRhaW5pbmcgdGhlIGZpbGVzIHRvIGJlIHJlYWRcbiAqIEBwYXJhbSAge1N0cmluZ30gZW5jb2RpbmcgZmlsZSBlbmNvZGluZyAoZGVmYXVsdCBpcyAndXRmOCcpXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBoYXNoIGZvciBlbmNvZGluZywgcmVjdXJzaXZlLCBhbmQgbWF0Y2gvZXhjbHVkZVxuICogQHBhcmFtICB7RnVuY3Rpb24oZXJyb3IsIHN0cmluZyl9IGNhbGxiYWNrICBjYWxsYmFjayBmb3IgZWFjaCBmaWxlcyBjb250ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbihlcnJvcil9ICAgY29tcGxldGUgIGZuIHRvIGNhbGwgd2hlbiBmaW5pc2hlZFxuICovXG5mdW5jdGlvbiByZWFkRmlsZXMoZGlyLCBvcHRpb25zLCBjYWxsYmFjaywgY29tcGxldGUpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29tcGxldGUgPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7XG4gICAgICAgIGVuY29kaW5nOiBvcHRpb25zXG4gICAgfTtcbiAgICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgcmVjdXJzaXZlOiB0cnVlLFxuICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICBkb25lT25FcnI6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgICB2YXIgZmlsZXMgPSBbXTtcblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjb21wbGV0ZShlcnIpO1xuICAgICAgICAgICAgY29tcGxldGUobnVsbCwgZmlsZXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZzLnJlYWRkaXIoZGlyLCBmdW5jdGlvbihlcnIsIGxpc3QpIHtcbiAgICAgICAgaWYgKGVycikgwqB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJykgcmV0dXJuIGRvbmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBvcHRpb25zLnNvcnQgPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAoL3JldmVyc2V8ZGVzYy9pKS50ZXN0KG9wdGlvbnMuc29ydCkpKSB7XG4gICAgICAgICAgICBsaXN0ID0gbGlzdC5yZXZlcnNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zb3J0ICE9PSBmYWxzZSkgbGlzdCA9IGxpc3Quc29ydCgpO1xuXG4gICAgICAgIChmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gbGlzdFtpKytdO1xuICAgICAgICAgICAgaWYgKCFmaWxlbmFtZSkgcmV0dXJuIGRvbmUobnVsbCwgZmlsZXMpO1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBwYXRoLmpvaW4oZGlyLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICBmcy5zdGF0KGZpbGUsIGZ1bmN0aW9uKGVyciwgc3RhdCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgb3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQgJiYgc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF0Y2hEaXIgJiYgIW1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMubWF0Y2hEaXIpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXhjbHVkZURpciAmJiBtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLmV4Y2x1ZGVEaXIpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZpbGVzKGZpbGUsIG9wdGlvbnMsIGNhbGxiYWNrLCBmdW5jdGlvbihlcnIsIHNmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgb3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBmaWxlcy5jb25jYXQoc2ZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXQgJiYgc3RhdC5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tYXRjaCAmJiAhbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5tYXRjaCkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmV4Y2x1ZGUgJiYgbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5leGNsdWRlKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmlsdGVyICYmICFvcHRpb25zLmZpbHRlcihmaWxlbmFtZSkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3J0TmFtZSkgZmlsZXMucHVzaChmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoZmlsZSwgb3B0aW9ucy5lbmNvZGluZywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJykgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID4gMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG9ydE5hbWUpIGNhbGxiYWNrKG51bGwsIGRhdGEsIGZpbGVuYW1lLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhbGxiYWNrKG51bGwsIGRhdGEsIGZpbGUsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgZGF0YSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuXG4gICAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHJlYWRGaWxlcztcbiIsInZhciBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgbW0gPSByZXF1aXJlKCdtaW5pbWF0Y2gnKSxcbiAgICBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vKipcbiAqIG1lcmdlIHR3byBvYmplY3RzIGJ5IGV4dGVuZGluZyB0YXJnZXQgb2JqZWN0IHdpdGggc291cmNlIG9iamVjdFxuICogQHBhcmFtIHRhcmdldCBvYmplY3QgdG8gbWVyZ2VcbiAqIEBwYXJhbSBzb3VyY2Ugb2JqZWN0IHRvIG1lcmdlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFttb2RpZnldIHdoZXRoZXIgdG8gbW9kaWZ5IHRoZSB0YXJnZXRcbiAqIEByZXR1cm5zIHtPYmplY3R9IGV4dGVuZGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UsIG1vZGlmeSkge1xuICAgIHZhciByZXN1bHQgPSB0YXJnZXQgPyBtb2RpZnkgPyB0YXJnZXQgOiBleHRlbmQoe30sIHRhcmdldCwgdHJ1ZSkgOiB7fTtcbiAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIHJlc3VsdDtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogZGV0ZXJtaW5lIGlmIGEgc3RyaW5nIGlzIGNvbnRhaW5lZCB3aXRoaW4gYW4gYXJyYXkgb3IgbWF0Y2hlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICogQHBhcmFtICAge1N0cmluZ30gc3RyIHN0cmluZyB0byBtYXRjaFxuICogQHBhcmFtICAge0FycmF5fFJlZ2V4fSBtYXRjaCBhcnJheSBvciByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlcmUgaXMgYSBtYXRjaFxuICovXG5mdW5jdGlvbiBtYXRjaGVzKHN0ciwgbWF0Y2gpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaCkpIHtcbiAgICAgICAgdmFyIGwgPSBtYXRjaC5sZW5ndGg7XG4gICAgICAgIGZvciggdmFyIHM9MDsgcyA8IGw7IHMrKykge1xuICAgICAgICAgICAgaWYgKCBtbShzdHIsbWF0Y2hbc10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2gudGVzdChzdHIpO1xufVxuXG4vKipcbiAqIHJlYWQgZmlsZXMgYW5kIGNhbGwgYSBmdW5jdGlvbiB3aXRoIHRoZSBjb250ZW50cyBvZiBlYWNoIGZpbGVcbiAqIEBwYXJhbSAge1N0cmluZ30gZGlyIHBhdGggb2YgZGlyIGNvbnRhaW5pbmcgdGhlIGZpbGVzIHRvIGJlIHJlYWRcbiAqIEBwYXJhbSAge1N0cmluZ30gZW5jb2RpbmcgZmlsZSBlbmNvZGluZyAoZGVmYXVsdCBpcyAndXRmOCcpXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBoYXNoIGZvciBlbmNvZGluZywgcmVjdXJzaXZlLCBhbmQgbWF0Y2gvZXhjbHVkZVxuICogQHBhcmFtICB7RnVuY3Rpb24oZXJyb3IsIHN0cmluZyl9IGNhbGxiYWNrICBjYWxsYmFjayBmb3IgZWFjaCBmaWxlcyBjb250ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbihlcnJvcil9ICAgY29tcGxldGUgIGZuIHRvIGNhbGwgd2hlbiBmaW5pc2hlZFxuICovXG5mdW5jdGlvbiByZWFkRmlsZXNTdHJlYW0oZGlyLCBvcHRpb25zLCBjYWxsYmFjaywgY29tcGxldGUpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29tcGxldGUgPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7XG4gICAgICAgIGVuY29kaW5nOiBvcHRpb25zXG4gICAgfTtcbiAgICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICAgICAgcmVjdXJzaXZlOiB0cnVlLFxuICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICBkb25lT25FcnI6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgICB2YXIgZmlsZXMgPSBbXTtcblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjb21wbGV0ZShlcnIpO1xuICAgICAgICAgICAgY29tcGxldGUobnVsbCwgZmlsZXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZzLnJlYWRkaXIoZGlyLCBmdW5jdGlvbihlcnIsIGxpc3QpIHtcbiAgICAgICAgaWYgKGVycikgwqB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRUFDQ0VTJykgcmV0dXJuIGRvbmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBvcHRpb25zLnNvcnQgPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAoL3JldmVyc2V8ZGVzYy9pKS50ZXN0KG9wdGlvbnMuc29ydCkpKSB7XG4gICAgICAgICAgICBsaXN0ID0gbGlzdC5yZXZlcnNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zb3J0ICE9PSBmYWxzZSkgbGlzdCA9IGxpc3Quc29ydCgpO1xuXG4gICAgICAgIChmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gbGlzdFtpKytdO1xuICAgICAgICAgICAgaWYgKCFmaWxlbmFtZSkgcmV0dXJuIGRvbmUobnVsbCwgZmlsZXMpO1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBwYXRoLmpvaW4oZGlyLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICBmcy5zdGF0KGZpbGUsIGZ1bmN0aW9uKGVyciwgc3RhdCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgb3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXQgJiYgc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF0Y2hEaXIgJiYgIW1hdGNoZXMoZmlsZW5hbWUsIG9wdGlvbnMubWF0Y2hEaXIpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXhjbHVkZURpciAmJiBtYXRjaGVzKGZpbGVuYW1lLCBvcHRpb25zLmV4Y2x1ZGVEaXIpKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZpbGVzU3RyZWFtKGZpbGUsIG9wdGlvbnMsIGNhbGxiYWNrLCBmdW5jdGlvbihlcnIsIHNmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgb3B0aW9ucy5kb25lT25FcnIgPT09IHRydWUpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBmaWxlcy5jb25jYXQoc2ZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXQgJiYgc3RhdC5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5tYXRjaCAmJiAhbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5tYXRjaCkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmV4Y2x1ZGUgJiYgbWF0Y2hlcyhmaWxlbmFtZSwgb3B0aW9ucy5leGNsdWRlKSkgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmlsdGVyICYmICFvcHRpb25zLmZpbHRlcihmaWxlbmFtZSkpIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3J0TmFtZSkgZmlsZXMucHVzaChmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVuY29kaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW0uc2V0RW5jb2Rpbmcob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLm9uKCdlcnJvcicsZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZG9uZU9uRXJyID09PSB0cnVlKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPiAzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvcnROYW1lKSBjYWxsYmFjayhudWxsLCBzdHJlYW0sIGZpbGVuYW1lLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgc3RyZWFtLCBmaWxlLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgc3RyZWFtLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG5cbiAgICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVhZEZpbGVzU3RyZWFtO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBsaW5lczogMTIsXHJcbiAgICBsZW5ndGg6IDcsXHJcbiAgICB3aWR0aDogNSxcclxuICAgIHJhZGl1czogMTAsXHJcbiAgICBzY2FsZTogMS4wLFxyXG4gICAgY29ybmVyczogMSxcclxuICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICBmYWRlQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBhbmltYXRpb246ICdzcGlubmVyLWxpbmUtZmFkZS1kZWZhdWx0JyxcclxuICAgIHJvdGF0ZTogMCxcclxuICAgIGRpcmVjdGlvbjogMSxcclxuICAgIHNwZWVkOiAxLFxyXG4gICAgekluZGV4OiAyZTksXHJcbiAgICBjbGFzc05hbWU6ICdzcGlubmVyJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHNoYWRvdzogJzAgMCAxcHggdHJhbnNwYXJlbnQnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbn07XHJcbnZhciBTcGlubmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3Bpbm5lcihvcHRzKSB7XHJcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cclxuICAgICAgICB0aGlzLm9wdHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdHMpLCBvcHRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgc3Bpbm5lciB0byB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQuIElmIHRoaXMgaW5zdGFuY2UgaXMgYWxyZWFkeVxyXG4gICAgICogc3Bpbm5pbmcsIGl0IGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGl0cyBwcmV2aW91cyB0YXJnZXQgYnkgY2FsbGluZ1xyXG4gICAgICogc3RvcCgpIGludGVybmFsbHkuXHJcbiAgICAgKi9cclxuICAgIFNwaW5uZXIucHJvdG90eXBlLnNwaW4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gdGhpcy5vcHRzLmNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcm9ncmVzc2JhcicpO1xyXG4gICAgICAgIGNzcyh0aGlzLmVsLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdHMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICB6SW5kZXg6IHRoaXMub3B0cy56SW5kZXgsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMub3B0cy5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRoaXMub3B0cy50b3AsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZShcIiArIHRoaXMub3B0cy5zY2FsZSArIFwiKVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZSh0aGlzLmVsLCB0YXJnZXQuZmlyc3RDaGlsZCB8fCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJhd0xpbmVzKHRoaXMuZWwsIHRoaXMub3B0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBhbmQgcmVtb3ZlcyB0aGUgU3Bpbm5lci5cclxuICAgICAqIFN0b3BwZWQgc3Bpbm5lcnMgbWF5IGJlIHJldXNlZCBieSBjYWxsaW5nIHNwaW4oKSBhZ2Fpbi5cclxuICAgICAqL1xyXG4gICAgU3Bpbm5lci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGVJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcGlubmVyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBTcGlubmVyIH07XHJcbi8qKlxyXG4gKiBTZXRzIG11bHRpcGxlIHN0eWxlIHByb3BlcnRpZXMgYXQgb25jZS5cclxuICovXHJcbmZ1bmN0aW9uIGNzcyhlbCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICBlbC5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsaW5lIGNvbG9yIGZyb20gdGhlIGdpdmVuIHN0cmluZyBvciBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbG9yKGNvbG9yLCBpZHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgY29sb3IgPT0gJ3N0cmluZycgPyBjb2xvciA6IGNvbG9yW2lkeCAlIGNvbG9yLmxlbmd0aF07XHJcbn1cclxuLyoqXHJcbiAqIEludGVybmFsIG1ldGhvZCB0aGF0IGRyYXdzIHRoZSBpbmRpdmlkdWFsIGxpbmVzLlxyXG4gKi9cclxuZnVuY3Rpb24gZHJhd0xpbmVzKGVsLCBvcHRzKSB7XHJcbiAgICB2YXIgYm9yZGVyUmFkaXVzID0gKE1hdGgucm91bmQob3B0cy5jb3JuZXJzICogb3B0cy53aWR0aCAqIDUwMCkgLyAxMDAwKSArICdweCc7XHJcbiAgICB2YXIgc2hhZG93ID0gJ25vbmUnO1xyXG4gICAgaWYgKG9wdHMuc2hhZG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgc2hhZG93ID0gJzAgMnB4IDRweCAjMDAwJzsgLy8gZGVmYXVsdCBzaGFkb3dcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRzLnNoYWRvdyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBzaGFkb3cgPSBvcHRzLnNoYWRvdztcclxuICAgIH1cclxuICAgIHZhciBzaGFkb3dzID0gcGFyc2VCb3hTaGFkb3coc2hhZG93KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0cy5saW5lczsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRlZ3JlZXMgPSB+figzNjAgLyBvcHRzLmxpbmVzICogaSArIG9wdHMucm90YXRlKTtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZExpbmUgPSBjc3MoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogLW9wdHMud2lkdGggLyAyICsgXCJweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogKG9wdHMubGVuZ3RoICsgb3B0cy53aWR0aCkgKyAncHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG9wdHMud2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRDb2xvcihvcHRzLmZhZGVDb2xvciwgaSksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0JyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZShcIiArIGRlZ3JlZXMgKyBcImRlZykgdHJhbnNsYXRlWChcIiArIG9wdHMucmFkaXVzICsgXCJweClcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZGVsYXkgPSBpICogb3B0cy5kaXJlY3Rpb24gLyBvcHRzLmxpbmVzIC8gb3B0cy5zcGVlZDtcclxuICAgICAgICBkZWxheSAtPSAxIC8gb3B0cy5zcGVlZDsgLy8gc28gaW5pdGlhbCBhbmltYXRpb24gc3RhdGUgd2lsbCBpbmNsdWRlIHRyYWlsXHJcbiAgICAgICAgdmFyIGxpbmUgPSBjc3MoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdldENvbG9yKG9wdHMuY29sb3IsIGkpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgYm94U2hhZG93OiBub3JtYWxpemVTaGFkb3coc2hhZG93cywgZGVncmVlcyksXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMSAvIG9wdHMuc3BlZWQgKyBcInMgbGluZWFyIFwiICsgZGVsYXkgKyBcInMgaW5maW5pdGUgXCIgKyBvcHRzLmFuaW1hdGlvbixcclxuICAgICAgICB9KTtcclxuICAgICAgICBiYWNrZ3JvdW5kTGluZS5hcHBlbmRDaGlsZChsaW5lKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kTGluZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VCb3hTaGFkb3coYm94U2hhZG93KSB7XHJcbiAgICB2YXIgcmVnZXggPSAvXlxccyooW2EtekEtWl0rXFxzKyk/KC0/XFxkKyhcXC5cXGQrKT8pKFthLXpBLVpdKilcXHMrKC0/XFxkKyhcXC5cXGQrKT8pKFthLXpBLVpdKikoLiopJC87XHJcbiAgICB2YXIgc2hhZG93cyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGJveFNoYWRvdy5zcGxpdCgnLCcpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzaGFkb3cgPSBfYVtfaV07XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzaGFkb3cubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBpbnZhbGlkIHN5bnRheFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeCA9ICttYXRjaGVzWzJdO1xyXG4gICAgICAgIHZhciB5ID0gK21hdGNoZXNbNV07XHJcbiAgICAgICAgdmFyIHhVbml0cyA9IG1hdGNoZXNbNF07XHJcbiAgICAgICAgdmFyIHlVbml0cyA9IG1hdGNoZXNbN107XHJcbiAgICAgICAgaWYgKHggPT09IDAgJiYgIXhVbml0cykge1xyXG4gICAgICAgICAgICB4VW5pdHMgPSB5VW5pdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ID09PSAwICYmICF5VW5pdHMpIHtcclxuICAgICAgICAgICAgeVVuaXRzID0geFVuaXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeFVuaXRzICE9PSB5VW5pdHMpIHtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIHVuaXRzIG11c3QgbWF0Y2ggdG8gdXNlIGFzIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoYWRvd3MucHVzaCh7XHJcbiAgICAgICAgICAgIHByZWZpeDogbWF0Y2hlc1sxXSB8fCAnJyxcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeSxcclxuICAgICAgICAgICAgeFVuaXRzOiB4VW5pdHMsXHJcbiAgICAgICAgICAgIHlVbml0czogeVVuaXRzLFxyXG4gICAgICAgICAgICBlbmQ6IG1hdGNoZXNbOF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hhZG93cztcclxufVxyXG4vKipcclxuICogTW9kaWZ5IGJveC1zaGFkb3cgeC95IG9mZnNldHMgdG8gY291bnRlcmFjdCByb3RhdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplU2hhZG93KHNoYWRvd3MsIGRlZ3JlZXMpIHtcclxuICAgIHZhciBub3JtYWxpemVkID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHNoYWRvd3NfMSA9IHNoYWRvd3M7IF9pIDwgc2hhZG93c18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzaGFkb3cgPSBzaGFkb3dzXzFbX2ldO1xyXG4gICAgICAgIHZhciB4eSA9IGNvbnZlcnRPZmZzZXQoc2hhZG93LngsIHNoYWRvdy55LCBkZWdyZWVzKTtcclxuICAgICAgICBub3JtYWxpemVkLnB1c2goc2hhZG93LnByZWZpeCArIHh5WzBdICsgc2hhZG93LnhVbml0cyArICcgJyArIHh5WzFdICsgc2hhZG93LnlVbml0cyArIHNoYWRvdy5lbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQuam9pbignLCAnKTtcclxufVxyXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0KHgsIHksIGRlZ3JlZXMpIHtcclxuICAgIHZhciByYWRpYW5zID0gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkaWFucyk7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIE1hdGgucm91bmQoKHggKiBjb3MgKyB5ICogc2luKSAqIDEwMDApIC8gMTAwMCxcclxuICAgICAgICBNYXRoLnJvdW5kKCgteCAqIHNpbiArIHkgKiBjb3MpICogMTAwMCkgLyAxMDAwLFxyXG4gICAgXTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dom_app/src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dom_app/src/app.ts":
/*!****************************!*\
  !*** ./dom_app/src/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*global JSON*/
/// <reference types="../../node_modules/types-for-adobe/Illustrator/2015.3"/>
/// <reference path="./lib/json2.d.ts"/>
/// <reference path="./lib/TheTalker.ts"/>
/// <reference path="./lib/Sayer.ts"/>
/// <reference path="./lib/Template.ts"/>
/**
 * Load libraries.
 */
var libFolder = new Folder($.includePath + "/lib/");
if (libFolder.exists) {
    var jsxFiles = libFolder.getFiles("*.js");
    for (var _i = 0, jsxFiles_1 = jsxFiles; _i < jsxFiles_1.length; _i++) {
        var jsxFile = jsxFiles_1[_i];
        try {
            $.evalFile(jsxFile);
        }
        catch (e) {
            alert("Exception: " + e);
        }
    }
}
var Talker = SimpleSayer.Talker;
var TemplateFile = OpenTemplate.TemplateFile;
function openDocument() {
    $.writeln("in the openDocument() function.");
    var fileRef = new File("~/Product Templates (Master)/Art Evaluation Form/Art_Evaluation_Form.indd");
    $.writeln(fileRef.fullName);
    var docRef = app.open(fileRef);
}
function sayHi() {
    var text = "loadJSX 17.";
    $.writeln(text);
    var talker = new Talker();
    $.writeln(talker.sayHello());
    // $.writeln(SimpleSayer.say());
    alert(text);
    return text;
}
function getFilesRecursively(folder, finalArray, extension) {
    if (finalArray === void 0) { finalArray = []; }
    var fileList = folder.getFiles("*");
    var addTemplate = function (file) {
        var f = new TemplateFile(file);
        // $.writeln(`f:
        //   ${f}`);
        finalArray.push(f);
    };
    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
        var file = fileList_1[_i];
        // $.writeln(file);
        if (file instanceof Folder) {
            finalArray = getFilesRecursively(file, finalArray, "ai");
        }
        else {
            if (!extension) {
                addTemplate(file);
            }
            else if (file.name.split(".").pop() === extension) {
                addTemplate(file);
            }
        }
    }
    return finalArray;
}
/**
 * Gets a string to a local directory and returns
 * all of the files recursively within it as a JSON string.
 *
 * @param path
 */
// noinspection JSUnusedGlobalSymbols
function getFiles(path) {
    // $.writeln(`Folder: ${path}`);
    var folder = new Folder(path);
    // $.writeln(`Folder exists: ${folder.exists}`);
    var productArray = getFilesRecursively(folder, [], "ai");
    // $.writeln("");
    // $.writeln("---");
    // $.writeln("");
    // $.writeln(productArray);
    // $.writeln(`First: ${productArray[0]}`);
    var j = JSON.stringify(productArray);
    // $.writeln(j);
    return j;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9tX2FwcC9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkb21fYXBwL3NyYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RvbV9hcHAvc3JjL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypnbG9iYWwgSlNPTiovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4uLy4uL25vZGVfbW9kdWxlcy90eXBlcy1mb3ItYWRvYmUvSWxsdXN0cmF0b3IvMjAxNS4zXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbGliL2pzb24yLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9saWIvVGhlVGFsa2VyLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbGliL1NheWVyLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbGliL1RlbXBsYXRlLnRzXCIvPlxuLyoqXG4gKiBMb2FkIGxpYnJhcmllcy5cbiAqL1xudmFyIGxpYkZvbGRlciA9IG5ldyBGb2xkZXIoJC5pbmNsdWRlUGF0aCArIFwiL2xpYi9cIik7XG5pZiAobGliRm9sZGVyLmV4aXN0cykge1xuICAgIHZhciBqc3hGaWxlcyA9IGxpYkZvbGRlci5nZXRGaWxlcyhcIiouanNcIik7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBqc3hGaWxlc18xID0ganN4RmlsZXM7IF9pIDwganN4RmlsZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGpzeEZpbGUgPSBqc3hGaWxlc18xW19pXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICQuZXZhbEZpbGUoanN4RmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXhjZXB0aW9uOiBcIiArIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxudmFyIFRhbGtlciA9IFNpbXBsZVNheWVyLlRhbGtlcjtcbnZhciBUZW1wbGF0ZUZpbGUgPSBPcGVuVGVtcGxhdGUuVGVtcGxhdGVGaWxlO1xuZnVuY3Rpb24gb3BlbkRvY3VtZW50KCkge1xuICAgICQud3JpdGVsbihcImluIHRoZSBvcGVuRG9jdW1lbnQoKSBmdW5jdGlvbi5cIik7XG4gICAgdmFyIGZpbGVSZWYgPSBuZXcgRmlsZShcIn4vUHJvZHVjdCBUZW1wbGF0ZXMgKE1hc3RlcikvQXJ0IEV2YWx1YXRpb24gRm9ybS9BcnRfRXZhbHVhdGlvbl9Gb3JtLmluZGRcIik7XG4gICAgJC53cml0ZWxuKGZpbGVSZWYuZnVsbE5hbWUpO1xuICAgIHZhciBkb2NSZWYgPSBhcHAub3BlbihmaWxlUmVmKTtcbn1cbmZ1bmN0aW9uIHNheUhpKCkge1xuICAgIHZhciB0ZXh0ID0gXCJsb2FkSlNYIDE3LlwiO1xuICAgICQud3JpdGVsbih0ZXh0KTtcbiAgICB2YXIgdGFsa2VyID0gbmV3IFRhbGtlcigpO1xuICAgICQud3JpdGVsbih0YWxrZXIuc2F5SGVsbG8oKSk7XG4gICAgLy8gJC53cml0ZWxuKFNpbXBsZVNheWVyLnNheSgpKTtcbiAgICBhbGVydCh0ZXh0KTtcbiAgICByZXR1cm4gdGV4dDtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzUmVjdXJzaXZlbHkoZm9sZGVyLCBmaW5hbEFycmF5LCBleHRlbnNpb24pIHtcbiAgICBpZiAoZmluYWxBcnJheSA9PT0gdm9pZCAwKSB7IGZpbmFsQXJyYXkgPSBbXTsgfVxuICAgIHZhciBmaWxlTGlzdCA9IGZvbGRlci5nZXRGaWxlcyhcIipcIik7XG4gICAgdmFyIGFkZFRlbXBsYXRlID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgdmFyIGYgPSBuZXcgVGVtcGxhdGVGaWxlKGZpbGUpO1xuICAgICAgICAvLyAkLndyaXRlbG4oYGY6XG4gICAgICAgIC8vICAgJHtmfWApO1xuICAgICAgICBmaW5hbEFycmF5LnB1c2goZik7XG4gICAgfTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGZpbGVMaXN0XzEgPSBmaWxlTGlzdDsgX2kgPCBmaWxlTGlzdF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZmlsZSA9IGZpbGVMaXN0XzFbX2ldO1xuICAgICAgICAvLyAkLndyaXRlbG4oZmlsZSk7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgRm9sZGVyKSB7XG4gICAgICAgICAgICBmaW5hbEFycmF5ID0gZ2V0RmlsZXNSZWN1cnNpdmVseShmaWxlLCBmaW5hbEFycmF5LCBcImFpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICBhZGRUZW1wbGF0ZShmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUubmFtZS5zcGxpdChcIi5cIikucG9wKCkgPT09IGV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIGFkZFRlbXBsYXRlKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5hbEFycmF5O1xufVxuLyoqXG4gKiBHZXRzIGEgc3RyaW5nIHRvIGEgbG9jYWwgZGlyZWN0b3J5IGFuZCByZXR1cm5zXG4gKiBhbGwgb2YgdGhlIGZpbGVzIHJlY3Vyc2l2ZWx5IHdpdGhpbiBpdCBhcyBhIEpTT04gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBwYXRoXG4gKi9cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbmZ1bmN0aW9uIGdldEZpbGVzKHBhdGgpIHtcbiAgICAvLyAkLndyaXRlbG4oYEZvbGRlcjogJHtwYXRofWApO1xuICAgIHZhciBmb2xkZXIgPSBuZXcgRm9sZGVyKHBhdGgpO1xuICAgIC8vICQud3JpdGVsbihgRm9sZGVyIGV4aXN0czogJHtmb2xkZXIuZXhpc3RzfWApO1xuICAgIHZhciBwcm9kdWN0QXJyYXkgPSBnZXRGaWxlc1JlY3Vyc2l2ZWx5KGZvbGRlciwgW10sIFwiYWlcIik7XG4gICAgLy8gJC53cml0ZWxuKFwiXCIpO1xuICAgIC8vICQud3JpdGVsbihcIi0tLVwiKTtcbiAgICAvLyAkLndyaXRlbG4oXCJcIik7XG4gICAgLy8gJC53cml0ZWxuKHByb2R1Y3RBcnJheSk7XG4gICAgLy8gJC53cml0ZWxuKGBGaXJzdDogJHtwcm9kdWN0QXJyYXlbMF19YCk7XG4gICAgdmFyIGogPSBKU09OLnN0cmluZ2lmeShwcm9kdWN0QXJyYXkpO1xuICAgIC8vICQud3JpdGVsbihqKTtcbiAgICByZXR1cm4gajtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
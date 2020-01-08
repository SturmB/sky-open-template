"use strict";
var OpenTemplate;
(function (OpenTemplate) {
    var TemplateFile = /** @class */ (function () {
        /**
         * Constructor for TemplateFile. Extracts a given file's full path
         * and file name.
         *
         * @param {File} file - The file from which to get the full path
         * and the file name.
         */
        function TemplateFile(file) {
            this.fullPath = "";
            this.fileName = "";
            this.fullPath = file.fsName;
            var fn = file.name.split(".").shift();
            this.fileName = fn === undefined ? "File name malformed" : fn;
        }
        /**
         * Returns a two-line string listing the contents of the File's
         * full path and its file name.
         *
         * @returns {string} The contents of the File's full path and its file name.
         */
        TemplateFile.prototype.toString = function () {
            return "fileName: " + this.fileName + "\n      fullPath: " + this.fullPath;
        };
        return TemplateFile;
    }());
    OpenTemplate.TemplateFile = TemplateFile;
})(OpenTemplate || (OpenTemplate = {}));

var OpenTemplate;
(function (OpenTemplate) {
    var TemplateFile = /** @class */ (function () {
        function TemplateFile(file) {
            this.fullPath = "";
            this.fileName = "";
            this.fullPath = file.fsName;
            var fn = file.name.split(".").shift();
            this.fileName = fn === undefined ? "File name malformed" : fn;
        }
        TemplateFile.prototype.toString = function () {
            return "fileName: " + this.fileName + "\n      fullPath: " + this.fullPath;
        };
        return TemplateFile;
    }());
    OpenTemplate.TemplateFile = TemplateFile;
})(OpenTemplate || (OpenTemplate = {}));

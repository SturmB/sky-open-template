var TemplateFile = /** @class */ (function () {
    function TemplateFile(fullPath) {
        this.fullPath = "";
        this.fileName = "";
        this.fullPath = fullPath;
        var fn = fullPath.split("/").pop();
        this.fileName = fn === undefined ? "File name malformed" : fn;
    }
    TemplateFile.prototype.toString = function () {
        return "fileName: " + this.fileName + "\n      fullPath: " + this.fullPath;
    };
    return TemplateFile;
}());
export { TemplateFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUtFLHNCQUFZLFFBQWdCO1FBSHJCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUczQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFNLEVBQUUsR0FBdUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDRSxPQUFPLGVBQWEsSUFBSSxDQUFDLFFBQVEsMEJBQ25CLElBQUksQ0FBQyxRQUFVLENBQUM7SUFDaEMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMifQ==
import fs from "fs";
var TemplateList = /** @class */ (function () {
    function TemplateList(folder) {
        this._allFiles = fs.readdirSync(folder);
        // this._allFiles = ["stringOne", "stringTwo"];
    }
    Object.defineProperty(TemplateList.prototype, "allFiles", {
        get: function () {
            return this._allFiles;
        },
        set: function (value) {
            this._allFiles = value;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateList;
}());
export { TemplateList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGVtcGxhdGVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUVwQjtJQUdFLHNCQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLCtDQUErQztJQUNqRCxDQUFDO0lBRUQsc0JBQUksa0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBYSxLQUFlO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBS0gsbUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyJ9
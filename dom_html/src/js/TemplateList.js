var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    var TemplateList = /** @class */ (function () {
        function TemplateList(folder) {
            this._allFiles = fs_1.default.readdirSync(folder);
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
    exports.TemplateList = TemplateList;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGVtcGxhdGVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQTtRQUdFLHNCQUFZLE1BQWM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLCtDQUErQztRQUNqRCxDQUFDO1FBRUQsc0JBQUksa0NBQVE7aUJBQVo7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hCLENBQUM7aUJBRUQsVUFBYSxLQUFlO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDOzs7V0FKQTtRQUtILG1CQUFDO0lBQUQsQ0FBQyxBQWZELElBZUM7SUFmWSxvQ0FBWSJ9
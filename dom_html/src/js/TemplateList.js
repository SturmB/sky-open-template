System.register(["fs"], function (exports_1, context_1) {
    "use strict";
    var fs_1, TemplateList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (fs_1_1) {
                fs_1 = fs_1_1;
            }
        ],
        execute: function () {
            TemplateList = /** @class */ (function () {
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
            exports_1("TemplateList", TemplateList);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGVtcGxhdGVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRUE7Z0JBR0Usc0JBQVksTUFBYztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QywrQ0FBK0M7Z0JBQ2pELENBQUM7Z0JBRUQsc0JBQUksa0NBQVE7eUJBQVo7d0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUN4QixDQUFDO3lCQUVELFVBQWEsS0FBZTt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7OzttQkFKQTtnQkFLSCxtQkFBQztZQUFELENBQUMsQUFmRCxJQWVDIn0=
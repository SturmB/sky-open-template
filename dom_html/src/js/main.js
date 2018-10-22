/*global $, window, location, CSInterface, SystemPath, themeManager*/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "fs", "./lib/CEPTalker", "./lib/CookieManager", "./lib/Template"], function (require, exports, fs, talker, CookieManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs = __importStar(fs);
    talker = __importStar(talker);
    (function () {
        "use strict";
        var resultFs = fs.existsSync("./");
        console.log("Current dir exists: " + resultFs);
        var csInterface = new CSInterface();
        var cookieManager = new CookieManager_1.CookieManager();
        function init() {
            /**
             * Event handler for the Open button.
             */
            var openButton = $("#open-button");
            if (openButton) {
                openButton.on("click", function () {
                    var t = new talker.Talker();
                    console.log(t.sayHello());
                    csInterface.evalScript("sayHi();", function (res) {
                        console.log(res);
                    });
                });
            }
            var setTemplateList = function (json) {
                if (json) {
                    var fileList = JSON.parse(json);
                    templateList.empty();
                    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                        var file = fileList_1[_i];
                        templateList.append($("<option />")
                            .val(file.fullPath)
                            .text(file.fileName));
                    }
                }
            };
            var getFiles = function (path) {
                csInterface.evalScript("getFiles(\"" + path + "\");", function (json) {
                    setTemplateList(json);
                });
            };
            /**
             * Event handler for the template folder selection button.
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
                        var path = filePath.substr(0, filePath.lastIndexOf("/"));
                        cookieManager.set(path);
                        getFiles(path);
                    }
                });
            }
            themeManager.init();
            var templatePath = cookieManager.get();
            if (templatePath) {
                getFiles(templatePath);
            }
        }
        init();
    })();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7Ozs7Ozs7Ozs7O0lBT3JFLENBQUM7UUFDQyxZQUFZLENBQUM7UUFDYixJQUFNLFFBQVEsR0FBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXVCLFFBQVUsQ0FBQyxDQUFDO1FBRS9DLElBQU0sV0FBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQU0sYUFBYSxHQUFrQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUV6RCxTQUFTLElBQUk7WUFFWDs7ZUFFRztZQUNILElBQU0sVUFBVSxHQUF3QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDMUQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLElBQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVE7d0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLElBQXdCO2dCQUMvQyxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFNLFFBQVEsR0FBZ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQixLQUFtQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTt3QkFBeEIsSUFBTSxJQUFJLGlCQUFBO3dCQUNiLFlBQVksQ0FBQyxNQUFNLENBQ2pCLENBQUMsQ0FBQyxZQUFZLENBQUM7NkJBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7NkJBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3ZCLENBQUM7cUJBQ0g7aUJBQ0Y7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFNLFFBQVEsR0FBRyxVQUFDLElBQVk7Z0JBQzVCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWEsSUFBSSxTQUFLLEVBQUUsVUFBQyxJQUFZO29CQUMxRCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUY7O2VBRUc7WUFDSCxJQUFNLGNBQWMsR0FBd0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELElBQU0sWUFBWSxHQUF3QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5RCxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsY0FBYyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQzFCLGFBQWE7b0JBQ2IsSUFBTSxLQUFLLEdBQWEsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNoQixhQUFhO3dCQUNiLElBQU0sUUFBUSxHQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZDLElBQU0sSUFBSSxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNoQjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBCLElBQU0sWUFBWSxHQUFrQixhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4QjtRQUVILENBQUM7UUFFRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMifQ==
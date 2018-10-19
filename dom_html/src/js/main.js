/*global $, window, location, CSInterface, SystemPath, themeManager*/
System.register(["./lib/CEPTalker", "./lib/CookieManager", "./lib/Template"], function (exports_1, context_1) {
    "use strict";
    var talker, CookieManager_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (talker_1) {
                talker = talker_1;
            },
            function (CookieManager_1_1) {
                CookieManager_1 = CookieManager_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            (function () {
                "use strict";
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
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7Ozs7Ozs7Ozs7Ozs7OztZQU1yRSxDQUFDO2dCQUNDLFlBQVksQ0FBQztnQkFFYixJQUFNLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDbkQsSUFBTSxhQUFhLEdBQWtCLElBQUksNkJBQWEsRUFBRSxDQUFDO2dCQUV6RCxTQUFTLElBQUk7b0JBRVg7O3VCQUVHO29CQUNILElBQU0sVUFBVSxHQUF3QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzFELElBQUksVUFBVSxFQUFFO3dCQUNkLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFOzRCQUNyQixJQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxHQUFRO2dDQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNuQixDQUFDLENBQUMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLElBQXdCO3dCQUMvQyxJQUFJLElBQUksRUFBRTs0QkFDUixJQUFNLFFBQVEsR0FBZ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDL0QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNyQixLQUFtQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtnQ0FBeEIsSUFBTSxJQUFJLGlCQUFBO2dDQUNiLFlBQVksQ0FBQyxNQUFNLENBQ2pCLENBQUMsQ0FBQyxZQUFZLENBQUM7cUNBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7cUNBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3ZCLENBQUM7NkJBQ0g7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDO29CQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBWTt3QkFDNUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBYSxJQUFJLFNBQUssRUFBRSxVQUFDLElBQVk7NEJBQzFELGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDO29CQUVGOzt1QkFFRztvQkFDSCxJQUFNLGNBQWMsR0FBd0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvRCxJQUFNLFlBQVksR0FBd0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzlELElBQUksY0FBYyxFQUFFO3dCQUNsQixjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTs0QkFDMUIsYUFBYTs0QkFDYixJQUFNLEtBQUssR0FBYSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNoRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0NBQ2hCLGFBQWE7Z0NBQ2IsSUFBTSxRQUFRLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDdkMsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNuRSxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2hCO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUVELFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFcEIsSUFBTSxZQUFZLEdBQWtCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDeEQsSUFBSSxZQUFZLEVBQUU7d0JBQ2hCLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDeEI7Z0JBRUgsQ0FBQztnQkFFRCxJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUMifQ==
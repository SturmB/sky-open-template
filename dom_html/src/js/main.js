/*global $, window, location, CSInterface, SystemPath, themeManager*/
System.register(["./lib/CEPTalker", "./lib/Template"], function (exports_1, context_1) {
    "use strict";
    var talker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (talker_1) {
                talker = talker_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            // import { TemplateList } from "./TemplateList";
            (function () {
                "use strict";
                var csInterface = new CSInterface();
                // const TemplateScript = OpenTemplate.TemplateList;
                // const templateList = new TemplateList("./");
                function init() {
                    // alert("main init.");
                    themeManager.init();
                    // alert("after themeManager's init.");
                    /**
                     * Event handler for the Open button.
                     */
                    var openButton = $("#open-button");
                    if (openButton) {
                        openButton.on("click", function () {
                            // alert(`Button clicked.`);
                            // console.log(templateList);
                            var t = new talker.Talker();
                            console.log(t.sayHello());
                            // const arr = templateList.allFiles;
                            // console.log(arr.toString());
                            csInterface.evalScript("sayHi();", function (res) {
                                console.log(res);
                                // alert(res);
                            });
                        });
                    }
                    /**
                     * Event handler for the template folder selection button.
                     */
                    var templateButton = $("#file-control");
                    var templateList = $("#template-list");
                    if (templateButton) {
                        templateButton.on("change", function () {
                            // console.log("File changed.");
                            // @ts-ignore
                            var files = templateButton[0].files;
                            if (files.length) {
                                // @ts-ignore
                                var filePath = files[0].path;
                                var path = filePath.substr(0, filePath.lastIndexOf("/"));
                                // console.log(`Its path is: ${path}`);
                                csInterface.evalScript("getFiles(\"" + path + "\");", function (res) {
                                    // console.log(res);
                                    var fileList = JSON.parse(res);
                                    // console.log(fileList);
                                    // console.log(fileList[0].fullName);
                                    templateList.empty();
                                    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                                        var file = fileList_1[_i];
                                        // console.log(`Item: ${file}`);
                                        templateList.append($("<option />").val(file.fullPath).text(file.fileName));
                                    }
                                });
                            }
                        });
                    }
                }
                init();
            })();
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7Ozs7Ozs7Ozs7OztZQUlyRSxpREFBaUQ7WUFFakQsQ0FBQztnQkFDQyxZQUFZLENBQUM7Z0JBRWIsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDdEMsb0RBQW9EO2dCQUNwRCwrQ0FBK0M7Z0JBRS9DLFNBQVMsSUFBSTtvQkFFWCx1QkFBdUI7b0JBRXZCLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFcEIsdUNBQXVDO29CQUV2Qzs7dUJBRUc7b0JBQ0gsSUFBTSxVQUFVLEdBQXdCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3JCLDRCQUE0Qjs0QkFDNUIsNkJBQTZCOzRCQUM3QixJQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDMUIscUNBQXFDOzRCQUNyQywrQkFBK0I7NEJBQy9CLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBUTtnQ0FDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakIsY0FBYzs0QkFDaEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7b0JBRUQ7O3VCQUVHO29CQUNILElBQU0sY0FBYyxHQUF3QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9ELElBQU0sWUFBWSxHQUF3QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxjQUFjLEVBQUU7d0JBQ2xCLGNBQWMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFOzRCQUMxQixnQ0FBZ0M7NEJBQ2hDLGFBQWE7NEJBQ2IsSUFBTSxLQUFLLEdBQWEsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDaEQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dDQUNoQixhQUFhO2dDQUNiLElBQU0sUUFBUSxHQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ3ZDLElBQU0sSUFBSSxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDbkUsdUNBQXVDO2dDQUN2QyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFhLElBQUksU0FBSyxFQUFFLFVBQUMsR0FBVztvQ0FDekQsb0JBQW9CO29DQUNwQixJQUFNLFFBQVEsR0FBZ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDOUQseUJBQXlCO29DQUN6QixxQ0FBcUM7b0NBQ3JDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQ0FDckIsS0FBbUIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7d0NBQXhCLElBQU0sSUFBSSxpQkFBQTt3Q0FDYixnQ0FBZ0M7d0NBQ2hDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3FDQUM3RTtnQ0FDSCxDQUFDLENBQUMsQ0FBQzs2QkFDSjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFFSCxDQUFDO2dCQUVELElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9
/*global $, window, location, CSInterface, SystemPath, themeManager*/
System.register(["./lib/CEPTalker"], function (exports_1, context_1) {
    "use strict";
    var talker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (talker_1) {
                talker = talker_1;
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
                            console.log("File changed.");
                            // @ts-ignore
                            var files = templateButton[0].files;
                            if (files.length) {
                                var filepath = files[0].path;
                                var path = filepath.substr(0, filepath.lastIndexOf("/") - 1);
                                console.log("Its path is: " + path);
                                csInterface.evalScript("getFiles(\"" + path + "\");", function (res) {
                                    console.log(res);
                                    var resArray = res.split(",");
                                    templateList.empty();
                                    for (var _i = 0, resArray_1 = resArray; _i < resArray_1.length; _i++) {
                                        var item = resArray_1[_i];
                                        console.log("Item: " + item);
                                        templateList.append($("<option />").val(item).text(item));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7Ozs7Ozs7Ozs7WUFHckUsaURBQWlEO1lBRWpELENBQUM7Z0JBQ0MsWUFBWSxDQUFDO2dCQUViLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUUvQyxTQUFTLElBQUk7b0JBRVgsdUJBQXVCO29CQUV2QixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXBCLHVDQUF1QztvQkFFdkM7O3VCQUVHO29CQUNILElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDckMsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3JCLDRCQUE0Qjs0QkFDNUIsNkJBQTZCOzRCQUM3QixJQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDMUIscUNBQXFDOzRCQUNyQywrQkFBK0I7NEJBQy9CLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBUTtnQ0FDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakIsY0FBYzs0QkFDaEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7b0JBRUQ7O3VCQUVHO29CQUNILElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDMUMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ3pDLElBQUksY0FBYyxFQUFFO3dCQUNsQixjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTs0QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDN0IsYUFBYTs0QkFDYixJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUN0QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0NBQ2hCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQy9CLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQU0sQ0FBQyxDQUFDO2dDQUNwQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFhLElBQUksU0FBSyxFQUFFLFVBQUMsR0FBUTtvQ0FDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDakIsSUFBTSxRQUFRLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDMUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUNyQixLQUFtQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTt3Q0FBeEIsSUFBTSxJQUFJLGlCQUFBO3dDQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxJQUFNLENBQUMsQ0FBQzt3Q0FDN0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FDQUMzRDtnQ0FDSCxDQUFDLENBQUMsQ0FBQzs2QkFDSjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFFSCxDQUFDO2dCQUVELElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9
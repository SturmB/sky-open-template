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
                                // @ts-ignore
                                var filePath = files[0].path;
                                var path = filePath.substr(0, filePath.lastIndexOf("/"));
                                console.log("Its path is: " + path);
                                csInterface.evalScript("getFiles(\"" + path + "\");", function (res) {
                                    // console.log(res);
                                    var fileList = JSON.parse(res);
                                    console.log(fileList);
                                    /*
                                                const resArray: string[] = res.split(",");
                                                templateList.empty();
                                                for (const item of resArray) {
                                                  console.log(`Item: ${item}`);
                                                  templateList.append($("<option />").val(item).text(item));
                                                }
                                    */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7Ozs7Ozs7Ozs7WUFHckUsaURBQWlEO1lBRWpELENBQUM7Z0JBQ0MsWUFBWSxDQUFDO2dCQUViLElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUUvQyxTQUFTLElBQUk7b0JBRVgsdUJBQXVCO29CQUV2QixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRXBCLHVDQUF1QztvQkFFdkM7O3VCQUVHO29CQUNILElBQU0sVUFBVSxHQUF3QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzFELElBQUksVUFBVSxFQUFFO3dCQUNkLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFOzRCQUNyQiw0QkFBNEI7NEJBQzVCLDZCQUE2Qjs0QkFDN0IsSUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7NEJBQzFCLHFDQUFxQzs0QkFDckMsK0JBQStCOzRCQUMvQixXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVE7Z0NBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pCLGNBQWM7NEJBQ2hCLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUVEOzt1QkFFRztvQkFDSCxJQUFNLGNBQWMsR0FBd0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvRCxJQUFNLFlBQVksR0FBd0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzlELElBQUksY0FBYyxFQUFFO3dCQUNsQixjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTs0QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDN0IsYUFBYTs0QkFDYixJQUFNLEtBQUssR0FBYSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNoRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0NBQ2hCLGFBQWE7Z0NBQ2IsSUFBTSxRQUFRLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDdkMsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixJQUFNLENBQUMsQ0FBQztnQ0FDcEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBYSxJQUFJLFNBQUssRUFBRSxVQUFDLEdBQVc7b0NBQ3pELG9CQUFvQjtvQ0FDcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQ0FDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQ0FDbEM7Ozs7Ozs7c0NBT0U7Z0NBQ1EsQ0FBQyxDQUFDLENBQUM7NkJBQ0o7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Z0JBRUgsQ0FBQztnQkFFRCxJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUMifQ==
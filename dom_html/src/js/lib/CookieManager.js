System.register([], function (exports_1, context_1) {
    "use strict";
    var CookieManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CookieManager = /** @class */ (function () {
                function CookieManager(templateDir) {
                    if (templateDir === void 0) { templateDir = ""; }
                    this.cookieName = "skyOpenTemplate";
                    this.cookieValue = templateDir;
                    var expires = new Date();
                    expires.setFullYear(expires.getFullYear() + 2);
                    this.expiryDate = expires.toUTCString();
                }
                CookieManager.prototype.set = function (value) {
                    if (value) {
                        this.cookieValue = value;
                    }
                    if (!this.cookieValue) {
                        alert("Valid directory not chosen.");
                        return;
                    }
                    document.cookie = this.cookieName + "=" + this.cookieValue + ";expires=" + this.expiryDate + ";";
                };
                CookieManager.prototype.get = function () {
                    if (document.cookie) {
                        var splitCookie = document.cookie.split(";");
                        if (splitCookie.length) {
                            for (var _i = 0, splitCookie_1 = splitCookie; _i < splitCookie_1.length; _i++) {
                                var cookie = splitCookie_1[_i];
                                var key = cookie.split("=")[0].trim();
                                var value = cookie.split("=")[1].trim();
                                if (key === this.cookieName) {
                                    return value;
                                }
                            }
                        }
                    }
                    return null;
                };
                return CookieManager;
            }());
            exports_1("CookieManager", CookieManager);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29va2llTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvb2tpZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUtFLHVCQUFZLFdBQXdCO29CQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtvQkFKNUIsZUFBVSxHQUFXLGlCQUFpQixDQUFDO29CQUs3QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDL0IsSUFBTSxPQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQyxDQUFDO2dCQUVNLDJCQUFHLEdBQVYsVUFBVyxLQUFjO29CQUN2QixJQUFJLEtBQUssRUFBRTt3QkFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztxQkFDMUI7b0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3JCLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUNyQyxPQUFPO3FCQUNSO29CQUNELFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsV0FBVyxpQkFBWSxJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7Z0JBQ3pGLENBQUM7Z0JBRU0sMkJBQUcsR0FBVjtvQkFDRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7d0JBQ25CLElBQU0sV0FBVyxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6RCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7NEJBQ3RCLEtBQXFCLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO2dDQUE3QixJQUFNLE1BQU0sb0JBQUE7Z0NBQ2YsSUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQ0FDaEQsSUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQ0FDbEQsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtvQ0FDM0IsT0FBTyxLQUFLLENBQUM7aUNBQ2Q7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFDSCxvQkFBQztZQUFELENBQUMsQUF0Q0QsSUFzQ0MifQ==
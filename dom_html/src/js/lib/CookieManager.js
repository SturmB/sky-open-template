define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CookieManager = /** @class */ (function () {
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
    exports.CookieManager = CookieManager;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29va2llTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvb2tpZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFLRSx1QkFBWSxXQUF3QjtZQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtZQUo1QixlQUFVLEdBQVcsaUJBQWlCLENBQUM7WUFLN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsSUFBTSxPQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxDQUFDO1FBRU0sMkJBQUcsR0FBVixVQUFXLEtBQWM7WUFDdkIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQ3JDLE9BQU87YUFDUjtZQUNELFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsV0FBVyxpQkFBWSxJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7UUFDekYsQ0FBQztRQUVNLDJCQUFHLEdBQVY7WUFDRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQU0sV0FBVyxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RCLEtBQXFCLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO3dCQUE3QixJQUFNLE1BQU0sb0JBQUE7d0JBQ2YsSUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDaEQsSUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEQsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTs0QkFDM0IsT0FBTyxLQUFLLENBQUM7eUJBQ2Q7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FBQyxBQXRDRCxJQXNDQztJQXRDWSxzQ0FBYSJ9
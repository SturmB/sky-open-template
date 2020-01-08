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
export { CookieManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29va2llTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvb2tpZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFLRSx1QkFBWSxXQUF3QjtRQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtRQUo1QixlQUFVLEdBQVcsaUJBQWlCLENBQUM7UUFLN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBTSxPQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDUjtRQUNELFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsV0FBVyxpQkFBWSxJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7SUFDekYsQ0FBQztJQUVNLDJCQUFHLEdBQVY7UUFDRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBTSxXQUFXLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN0QixLQUFxQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtvQkFBN0IsSUFBTSxNQUFNLG9CQUFBO29CQUNmLElBQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hELElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2xELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQzNCLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQyJ9
"use strict";
/*global $, window, location, CSInterface, SystemPath, themeManager*/
(function () {
    "use strict";
    var csInterface = new CSInterface();
    function init() {
        themeManager.init();
        /**
         * Event handler for the Open button.
         */
        var openButton = $("#open-button");
        if (openButton) {
            openButton.on("click", function () {
                console.log("button clicked.");
                csInterface.evalScript("sayHi();", function (res) {
                    console.log(res);
                    // alert(res);
                });
            });
        }
    }
    init();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFFQUFxRTtBQUVyRSxDQUFDO0lBQ0MsWUFBWSxDQUFDO0lBRWIsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUV0QyxTQUFTLElBQUk7UUFFWCxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEI7O1dBRUc7UUFDSCxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMvQixXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVE7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLGNBQWM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUVILENBQUM7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyxFQUFFLENBQUMifQ==
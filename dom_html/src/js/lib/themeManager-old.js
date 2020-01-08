/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global window, document, CSInterface*/

var themeManager = (function () {
    'use strict';
     
    /**
     * Convert the Color object to string in hexadecimal format;
     */
    function toHex(color, delta) {
        
        function computeValue(value, delta) {
            var computedValue = !isNaN(delta) ? value + delta : value;
            if (computedValue < 0) {
                computedValue = 0;
            } else if (computedValue > 255) {
                computedValue = 255;
            }
            
            computedValue = Math.floor(computedValue);
    
            computedValue = computedValue.toString(16);
            return computedValue.length === 1 ? "0" + computedValue : computedValue;
        }
    
        var hex = "";
        if (color) {
            hex = computeValue(color.red, delta) + computeValue(color.green, delta) + computeValue(color.blue, delta);
        }
        return hex;
    }


    function reverseColor(color, delta) {
        return toHex({
            red: Math.abs(255 - color.red),
            green: Math.abs(255 - color.green),
            blue: Math.abs(255 - color.blue)
        },
            delta);
    }
            

    function addRule(stylesheetId, selector, rule) {
        var stylesheet = document.getElementById(stylesheetId);
        
        if (stylesheet) {
            stylesheet = stylesheet.sheet;
            if (stylesheet.addRule) {
              console.log("Adding rule " + rule + " to " + selector + " on stylesheet " + stylesheet + ".");
              stylesheet.addRule(selector, rule);
              console.log(stylesheet);
            } else if (stylesheet.insertRule) {
                stylesheet.insertRule(selector + ' { ' + rule + ' }', stylesheet.cssRules.length);
            }
        }
    }
        
        
                
    /**
     * Update the theme with the AppSkinInfo retrieved from the host product.
     */
    function updateThemeWithAppSkinInfo(appSkinInfo) {
        
        var panelBgColor = appSkinInfo.panelBackgroundColor.color;
        var bgdColor = toHex(panelBgColor);
       
        var eltBgdColor =  toHex(panelBgColor, 20);
        
        var fontColor = "F0F0F0";
        if (panelBgColor.red > 122) {
            fontColor = "000000";
        }
        var borderColor = toHex(panelBgColor, -100);

        var styleId = "hostStyle";
        addRule(styleId, "body", "background-color:" + "#" + bgdColor + " !important");
        addRule(styleId, "body", "font-size:" + appSkinInfo.baseFontSize + "px !important;");
        addRule(styleId, "body", "font-family:" + appSkinInfo.baseFontFamily + " !important");
        addRule(styleId, "body", "color:" + "#" + fontColor + " !important");
                        
        addRule(styleId, "button", "background-color:" + "#" + eltBgdColor + " !important");
        addRule(styleId, "button:hover", "background-color:" + "#" + bgdColor + " !important");
        addRule(styleId, "button:active", "background-color:" + "#" + eltBgdColor + " !important");
        addRule(styleId, "button", "border-color: " + "#" + borderColor + " !important");
        

        addRule(styleId, ".hostFont", "font-size:" + appSkinInfo.baseFontSize + "px !important;");
        addRule(styleId, ".hostFont", "font-family:" + appSkinInfo.baseFontFamily + " !important");
        addRule(styleId, ".hostFont", "color:" + "#" + fontColor + " !important");
                        
        addRule(styleId, ".hostBgd", "background-color:" + "#" + bgdColor + " !important");
        addRule(styleId, ".hostElt", "background-color:" + "#" + eltBgdColor + " !important");
        addRule(styleId, ".hostElt", "border-color: " + "#" + borderColor + " !important");

    }
    
    
    function onAppThemeColorChanged(event) {
        var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
        updateThemeWithAppSkinInfo(skinInfo);
    }


    function init() {
        
        var csInterface = new CSInterface();
      // console.log(csInterface);
      // console.log(csInterface.hostEnvironment);

      updateThemeWithAppSkinInfo(csInterface.hostEnvironment.appSkinInfo);
        
        csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);
    }
    
    return {
        init: init
    };
    
}());

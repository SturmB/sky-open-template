// Type definitions for themeManager
// Project: Theme Manager
// Definitions by: Chris McGee <https://github.com/SturmB>

declare namespace themeManager {
  function toHex(color: any, delta: any): string;
  function addRule(stylesheetId: string, selector: string, rule: string): never;
  function updateThemeWithAppSkinInfo(appSkinInfo: JSON): never;
  function onAppThemeColorChanged(event: Event): never;
  function init(): never;
}

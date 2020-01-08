interface JQueryStatic {
    blockUI(property?: blockUISettings);
    unblockUI(property?: blockUISettings);
}

interface blockUISettings {
    message?: any;
    title?: string;
    draggable?: bool;
    theme?: bool;
    css?: blockUI_CSS_Settings;
    themedCSS?: blockUI_ThemedCSS_Settings;
    overlayCSS?: blockUI_OverlayCSS_Settings;
    cursorReset?: string;
    growlCSS?: blockUI_GrowlCSS_Settings;
    iframeSrc?: any;
    forceIframe?: bool;
    baseZ?: number;
    centerX?: bool;
    centerY?: bool;
    allowBodyStretch?: bool;
    bindEvents?: bool;
    constraainTabKey?: bool;
    fadeIn?: number;
    fadeOut?: number;
    timeout?: number;
    showOverlay?: bool;
    onBlock?: Function;
    onUnblock?: Function;
    quirksmodeOffsetHack?: number;
    blockMsgClass?: string;
    ignoreIfBlocked?: bool;
}

interface blockUI_CSS_Settings {
    padding?: number;
    margin?: number;
    width?: string;
    top?: string;
    left?: string;
    textAlign?: string;
    color?: string;
    border?: string;
    backgroundColor?: string;
    cursor?: string;
}

interface blockUI_ThemedCSS_Settings {
    width?: string;
    top?: string;
    left?: string;
}

interface blockUI_OverlayCSS_Settings {
    backgroundColor?: string;
    opacity?: number;
    cursor?: string;
}

interface blockUI_GrowlCSS_Settings {
    width?: string;
    top?: string;
    left?: string;
    right?: string;
    border?: string;
    padding?: string;
    opacity?: number;
    cursor?: string;
    color?: string;
    backgroundColor?: string;
}


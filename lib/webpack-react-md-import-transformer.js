(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("reactMdTransformer", [], factory);
	else if(typeof exports === 'object')
		exports["reactMdTransformer"] = factory();
	else
		root["reactMdTransformer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reactMdTransformer__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__reactMdTransformer__["a" /* default */]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rules__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatten__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moduleFinder__ = __webpack_require__(5);




function reactMdTransformer(importName) {
    var libPath = 'react-md/lib';

    var modules = Object(__WEBPACK_IMPORTED_MODULE_1__flatten__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */].map(function (rule) {
        return rule[1].map(function (component) {
            if (Array.isArray(component)) {
                return {
                    component: component[1],
                    module: rule[0],
                    originalComponent: component[0]
                };
            }

            return {
                component: component,
                module: rule[0]
            };
        });
    }));

    var foundModule = modules.find(Object(__WEBPACK_IMPORTED_MODULE_2__moduleFinder__["a" /* default */])(importName));

    if (foundModule) {
        return libPath + '/' + foundModule.module + '/' + foundModule.component;
    }

    return libPath + '/' + importName + 's/' + importName;
}

/* harmony default export */ __webpack_exports__["a"] = (reactMdTransformer);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rules = [['Autocompletes', ['Autocomplete']], ['Avatars', ['Avatar']], ['Badges', ['Badge']], ['BottomNavigations', ['BottomNav', 'BottomNavigation']], ['Buttons', ['Button', 'FlatButton', 'FloatingButton', 'IconButton', 'RaisedButton']], ['Cards', ['Card', 'CardActionOverlay', 'CardActions', 'CardExpander', 'CardMedia', 'CardText', 'CardTitle', 'CardTitleBlock']], ['Chips', ['Chip']], ['DataTables', ['DataTable', 'DropdownMenuColumn', 'EditDialog', 'EditDialogColumn', 'MenuButtonColumn', 'SelectFieldColumn', 'TableBody', 'TableCardHeader', 'TableCheckbox', 'TableColumn', 'TableFooter', 'TableHeader', 'TablePagination', 'TableRow']], ['Dialogs', ['Dialog', 'DialogContainer', 'DialogFooter', 'DialogTitle']], ['Dividers', ['Divider']], ['Drawers', ['Drawer', 'DrawerTypes', 'Overlay']], ['ExpansionPanels', ['ExpansionList', 'ExpansionPanel', 'PanelContent']], ['FABTransitions', ['SpeedDial']], ['FileInputs', ['FileInput', 'FileUpload']], ['FontIcons', ['FontIcon']], ['Grids', ['Cell', 'Grid', 'GridList']], ['Helpers', ['AccessibleFakeButton', 'AccessibleFakeInkedButton', 'Collapse', 'FocusContainer', 'HorizontalAnchors', 'IconSeperator', 'Layover', 'Portal', 'Positions', 'ResizeObserver', 'VerticalAnchors', 'anchorShape', 'fixedToShape', 'positionShape']], ['Inks', ['Ink', 'InkContainer', 'injectInk']], ['Lists', ['List', 'ListItem', 'ListItemControl', 'ListItemText', 'TileAddon']], ['Media', ['Media', 'MediaOverlay']], ['Menus', ['DropdownMenu', 'Menu', 'MenuButton']], ['NavigationDrawers', ['CloseButton', 'JumpToContentLink', 'MiniListItem', 'NavigationDrawer']], ['Papers', ['Paper']], ['Pickers', ['CalendarDate', 'CalendarHeader', 'CalendarMonth', 'ClockFace', 'ClockHand', 'ClockTime', 'DatePicker', 'DatePickerCalendar', 'DatePickerContainer', 'DatePickerHeader', 'PickerControl', 'PickerFooter', 'TimePeriods', 'TimePicker', 'TimePickerContainer', 'TimePickerHeader', 'Year', 'YearPicker']], ['Progress', ['CircularProgress', 'LinearProgress']], ['SVGIcons', ['SVGIcon']], ['SelectFields', ['SelectField', 'SelectFieldInput', 'SelectFieldToggle']], ['SelectionControls', ['Checkbox', 'Radio', 'RadioGroup', 'SelectionControl', 'SelectionControlGroup', 'Switch', 'SwitchThumb', 'SwitchTrack']], ['Sidebars', ['Sidebar']], ['Sliders', ['DiscreteValue', 'Slider', 'SliderLabel', 'Thumb', 'ThumbMask', 'Track', 'TrackFill']], ['Snackbars', [['Snackbar', 'SnackbarContainer'], 'SnackbarContainer']], ['Subheaders', ['Subheader']], ['Tabs', ['MenuTab', 'Tab', 'TabIndicator', 'TabOverflowButton', 'TabPanel', 'Tabs', 'TabsContainer']], ['TextFields', ['FloatingLabel', 'InputField', 'Message', 'PasswordButton', 'TextArea', 'TextField', 'TextFieldDivider', 'TextFieldMessage']], ['Toolbars', ['Toolbar', 'ToolbarTitle']], ['Tooltips', ['Tooltip', 'TooltipContainer', 'Tooltipped', 'injectTooltip']], ['constants', ['CSSTransitionGroupTick', 'additionalInkTriggerKeys', 'keyCodes', 'media']]];

/* harmony default export */ __webpack_exports__["a"] = (rules);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var flatten = function flatten(list) {
  return list.reduce(function (a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
};

/* harmony default export */ __webpack_exports__["a"] = (flatten);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var moduleFinder = function moduleFinder(importName) {
  return function (item) {
    return item.originalComponent ? item.originalComponent === importName : item.component === importName;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (moduleFinder);

/***/ })
/******/ ])["default"];
});
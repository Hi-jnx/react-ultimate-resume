"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  var _theme$components$car = theme.components.cards,
      height = _theme$components$car.height,
      width = _theme$components$car.width;
  return {
    container: function container(_ref) {
      var variant = _ref.variant;

      var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
          backgroundColor = _getColorsFromCardVar.backgroundColor,
          color = _getColorsFromCardVar.color;

      return {
        height: height,
        width: width,
        position: 'relative',
        margin: theme.miscellaneous.spacing * 2,
        borderRadius: theme.components.cards.borderRadius,
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor),
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        overflow: 'hidden'
      };
    },
    editButton: _objectSpread({
      zIndex: 2,
      position: 'absolute',
      top: spacing * 2,
      right: spacing * 2,
      height: 50,
      width: 50,
      borderRadius: '50%',
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'light')
    }, center),
    editIcon: {
      height: 24,
      fill: (0, _styles_utils.getHexFromPaletteColor)(theme, 'dark')
    }
  };
};

exports.styles = styles;
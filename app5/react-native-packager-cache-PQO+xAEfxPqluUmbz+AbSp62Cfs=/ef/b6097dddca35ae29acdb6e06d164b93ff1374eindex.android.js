Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/media/DADOS/Mega/Workspace/react-native/curso-react-e-redux/app5/index.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeDeprecatedCustomComponents = require('react-native-deprecated-custom-components');

var _CenaPrincipal = require('./src/components/CenaPrincipal');

var _CenaPrincipal2 = babelHelpers.interopRequireDefault(_CenaPrincipal);

var _CenaClientes = require('./src/components/CenaClientes');

var _CenaClientes2 = babelHelpers.interopRequireDefault(_CenaClientes);

var app5 = function (_Component) {
  babelHelpers.inherits(app5, _Component);

  function app5() {
    babelHelpers.classCallCheck(this, app5);
    return babelHelpers.possibleConstructorReturn(this, (app5.__proto__ || Object.getPrototypeOf(app5)).apply(this, arguments));
  }

  babelHelpers.createClass(app5, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    }
  }]);
  return app5;
}(_react.Component);

exports.default = app5;


_reactNative.AppRegistry.registerComponent('app5', function () {
  return app5;
});
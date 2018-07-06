'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselNavigation = (_dec = (0, _reactThemed2.default)(/^CarouselNavigation/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(CarouselNavigation, _PureComponent);

  function CarouselNavigation() {
    (0, _classCallCheck3.default)(this, CarouselNavigation);
    return (0, _possibleConstructorReturn3.default)(this, (CarouselNavigation.__proto__ || (0, _getPrototypeOf2.default)(CarouselNavigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(CarouselNavigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          rest = (0, _objectWithoutProperties3.default)(_props, ['direction', 'theme', 'className', 'children']);


      return _react2.default.createElement(
        _Button.Button,
        (0, _extends3.default)({
          'data-tid': 'carousel-navigation-' + direction,
          className: (0, _classnames2.default)(className, theme.CarouselNavigation, theme['CarouselNavigation-' + direction]),
          role: 'button',
          tabIndex: 0
        }, rest),
        children
      );
    }
  }]);
  return CarouselNavigation;
}(_react.PureComponent), _class2.propTypes = {
  direction: _propTypes2.default.oneOf(['previous', 'next']),
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
}, _class2.defaultProps = {
  direction: 'next',
  theme: {}
}, _temp)) || _class);
exports.default = CarouselNavigation;
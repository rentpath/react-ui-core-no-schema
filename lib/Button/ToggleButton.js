'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ToggleButton = (_dec = (0, _reactThemed2.default)(/^ToggleButton/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(ToggleButton, _Component);

  function ToggleButton(props) {
    (0, _classCallCheck3.default)(this, ToggleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ToggleButton.__proto__ || (0, _getPrototypeOf2.default)(ToggleButton)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(ToggleButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.value === nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(event) {
      var _props = this.props,
          onClick = _props.onClick,
          inactive = _props.inactive;


      var value = inactive ? this.state.value : !this.state.value;

      if (!inactive) {
        this.setState({
          value: value
        });
      }

      if (onClick) onClick(value, event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          theme = _props2.theme,
          children = _props2.children,
          onClick = _props2.onClick,
          value = _props2.value,
          inactive = _props2.inactive,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'theme', 'children', 'onClick', 'value', 'inactive']);


      return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({
          onClick: this.toggle,
          className: (0, _classnames2.default)(theme.ToggleButton, className, theme[this.state.value ? 'ToggleButton-on' : 'ToggleButton-off']),
          'data-tid': 'toggle-button'
        }, props),
        children
      );
    }
  }]);
  return ToggleButton;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  children: _propTypes2.default.node,
  value: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  inactive: _propTypes2.default.bool
}, _class3.defaultProps = {
  theme: {},
  value: false
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'toggle', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'toggle'), _class2.prototype)), _class2)) || _class);
exports.default = ToggleButton;
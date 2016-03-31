'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageBoxContainer = require('./ImageBoxContainer');

var _ImageBoxContainer2 = _interopRequireDefault(_ImageBoxContainer);

var _CloseBtn = require('./CloseBtn');

var _CloseBtn2 = _interopRequireDefault(_CloseBtn);

var _ImageBox = require('./ImageBox');

var _ImageBox2 = _interopRequireDefault(_ImageBox);

var _ImageBoxLabel = require('./ImageBoxLabel');

var _ImageBoxLabel2 = _interopRequireDefault(_ImageBoxLabel);

var _ImageLoading = require('./ImageLoading');

var _ImageLoading2 = _interopRequireDefault(_ImageLoading);

var _tools = require('../tools');

var ImageBoxGroup = (function (_React$Component) {
	_inherits(ImageBoxGroup, _React$Component);

	function ImageBoxGroup(props) {
		_classCallCheck(this, ImageBoxGroup);

		_get(Object.getPrototypeOf(ImageBoxGroup.prototype), 'constructor', this).call(this, props);
		var width = props.width;
		var height = props.height;

		this.state = { onLoading: false, current: null, show: false, width: width || 320, height: height || 180 };
	}

	_createClass(ImageBoxGroup, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this = this;

			_tools.handler.listen(function (payload) {
				_this.setState(payload);
			});

			var DOM = _react2['default'].findDOMNode(this);

			DOM.addEventListener("transitionend", function (e) {
				return _this.handleTransitionEnd(e);
			});
			DOM.addEventListener("webkitTransitionEnd", function (e) {
				return _this.handleTransitionEnd(e);
			});
			DOM.addEventListener("mozTransitionEnd", function (e) {
				return _this.handleTransitionEnd(e);
			});
			DOM.addEventListener("msTransitionEnd", function (e) {
				return _this.handleTransitionEnd(e);
			});
			DOM.addEventListener("oTransitionEnd", function (e) {
				return _this.handleTransitionEnd(e);
			});

			// Handle click outside the box
			document.addEventListener('click', function (e) {
				if (!DOM.contains(e.target) && _this.state.current !== null) {
					_this.hideBox();
					return;
				}
			});

			document.addEventListener('keydown', function (e) {
				if (_this.state.current) {
					e.preventDefault();
					switch (e.keyCode) {
						// On click right button
						case 39:
							_tools.handler.selectNext();
							return;
						// On click left button
						case 37:
							_tools.handler.selectPrev();
							return;
						// On click ESC button
						case 27:
							_this.hideBox();
							return;
						default:
							return;
					}
				}
			});
		}
	}, {
		key: 'styles',
		value: function styles(component) {
			var _state = this.state;
			var width = _state.width;
			var height = _state.height;
			var transitionTime = this.props.options.transitionTime;

			return {
				WebkitTransition: 'all ' + transitionTime + 'ms linear',
				MozTransition: 'all ' + transitionTime + 'ms linear',
				msTransition: 'all ' + transitionTime + 'ms linear',
				OTransition: 'all ' + transitionTime + 'ms linear',
				transition: 'all ' + transitionTime + 'ms linear',
				position: 'absolute',
				top: 'calc((100% - ' + (height + 40) + 'px) / 2)',
				left: 'calc((100% - ' + width + 'px) / 2)',
				height: height + 40 + 'px',
				width: width + 'px',
				display: this.state.show ? 'block' : 'none'
			};
		}
	}, {
		key: 'handleTransitionEnd',
		value: function handleTransitionEnd(e) {
			this.setState({ onLoading: false });
		}
	}, {
		key: 'hideBox',
		value: function hideBox() {
			this.setState({ onLoading: false, current: null, show: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var currentBox = this.state.current;

			return _react2['default'].createElement(
				'div',
				{ style: this.styles() },
				_react2['default'].createElement(
					_ImageBoxContainer2['default'],
					this.props.options,
					this.state.onLoading ? _react2['default'].createElement(this.props.ImageLoading, { key: 'loading' }) : null,
					!this.state.onLoading ? _react2['default'].createElement(this.props.ImageBox, _extends({ key: 'box' }, currentBox)) : null,
					!this.state.onLoading ? _react2['default'].createElement(this.props.CloseBtn, { key: 'close', onClose: function () {
							return _this2.hideBox();
						} }) : null,
					this.props.options.showLabel && !this.state.onLoading ? _react2['default'].createElement(this.props.ImageBoxLabel, _extends({ key: 'label' }, currentBox, { total: _tools.handler.boxes.length })) : null
				)
			);
		}
	}]);

	return ImageBoxGroup;
})(_react2['default'].Component);

exports['default'] = ImageBoxGroup;

ImageBoxGroup.defaultProps = {
	options: { showLabel: true, transitionTime: 400 },
	CloseBtn: _CloseBtn2['default'],
	ImageBox: _ImageBox2['default'],
	ImageBoxLabel: _ImageBoxLabel2['default'],
	ImageLoading: _ImageLoading2['default']
};
module.exports = exports['default'];
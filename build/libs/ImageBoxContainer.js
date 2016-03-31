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

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactLibReactTransitionGroupJs = require('react/lib/ReactTransitionGroup.js');

var _reactLibReactTransitionGroupJs2 = _interopRequireDefault(_reactLibReactTransitionGroupJs);

var _ImageLoading = require('./ImageLoading');

var _ImageLoading2 = _interopRequireDefault(_ImageLoading);

var ImageBoxContainer = (function (_React$Component) {
	_inherits(ImageBoxContainer, _React$Component);

	function ImageBoxContainer() {
		_classCallCheck(this, ImageBoxContainer);

		_get(Object.getPrototypeOf(ImageBoxContainer.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ImageBoxContainer, [{
		key: 'styles',
		value: function styles() {
			return {
				position: 'relative',
				width: '100%',
				height: '100%',
				background: 'rgba(0,0,0,0.75)',
				outline: '9999px solid rgba(0,0,0,0.75)'
			};
		}
	}, {
		key: 'transition',
		value: function transition() {
			var transitionTime = this.props.transitionTime;

			return {
				WebkitTransition: 'all ' + transitionTime + 'ms linear',
				MozTransition: 'all ' + transitionTime + 'ms linear',
				msTransition: 'all ' + transitionTime + 'ms linear',
				OTransition: 'all ' + transitionTime + 'ms linear',
				transition: 'all ' + transitionTime + 'ms linear'
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var children = this.props.children.map(function (child) {
				if (!child) {
					return child;
				}
				return _reactAddons2['default'].addons.cloneWithProps(child, {
					key: child['key'],
					transition: _this.transition()
				});
			});
			return _reactAddons2['default'].createElement(
				'div',
				{ style: _extends({}, this.styles(), this.transition()) },
				_reactAddons2['default'].createElement(
					_reactLibReactTransitionGroupJs2['default'],
					null,
					children
				)
			);
		}
	}]);

	return ImageBoxContainer;
})(_reactAddons2['default'].Component);

exports['default'] = ImageBoxContainer;
module.exports = exports['default'];
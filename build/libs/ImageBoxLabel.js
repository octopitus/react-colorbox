'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ImageBoxLabel = (function (_React$Component) {
	_inherits(ImageBoxLabel, _React$Component);

	function ImageBoxLabel() {
		_classCallCheck(this, ImageBoxLabel);

		_get(Object.getPrototypeOf(ImageBoxLabel.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ImageBoxLabel, [{
		key: 'styles',
		value: function styles() {
			return {
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				width: 'auto',
				height: '20px',
				padding: '6px 0',
				lineHeight: '16px',
				fontSize: '16px',
				fontFamily: 'Helvetica, Arial, sans-serif',
				textAlign: 'left',
				color: '#fff',
				zIndex: '9999'
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ style: this.styles() },
				this.props.title,
				_react2['default'].createElement('br', null),
				_react2['default'].createElement(
					'small',
					{ style: { color: '#999' } },
					'Image ',
					this.props.index,
					' of ',
					this.props.total
				)
			);
		}
	}]);

	return ImageBoxLabel;
})(_react2['default'].Component);

exports['default'] = ImageBoxLabel;
module.exports = exports['default'];
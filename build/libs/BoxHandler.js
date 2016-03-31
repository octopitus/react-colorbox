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

var _toolsHandler = require('../tools/handler');

var _toolsHandler2 = _interopRequireDefault(_toolsHandler);

var BoxHandler = (function (_React$Component) {
	_inherits(BoxHandler, _React$Component);

	function BoxHandler(props) {
		_classCallCheck(this, BoxHandler);

		_get(Object.getPrototypeOf(BoxHandler.prototype), 'constructor', this).call(this, props);
		this.group = props.group;
		this.index = props.index || _toolsHandler2['default'].boxes.length + 1;
		_toolsHandler2['default'].addBox({ src: props.src, title: props.title, index: this.index, group: this.group });
	}

	_createClass(BoxHandler, [{
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				'span',
				{ onClick: function () {
						return _toolsHandler2['default'].selectBox({ index: _this.index, group: _this.group });
					} },
				this.props.children
			);
		}
	}]);

	return BoxHandler;
})(_react2['default'].Component);

exports['default'] = BoxHandler;
module.exports = exports['default'];
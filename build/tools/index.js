'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispatcher = require('./dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

exports['default'] = {
	dispatcher: _dispatcher2['default'],
	handler: _handler2['default']
};
module.exports = exports['default'];
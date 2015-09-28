'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dispatcher = require('./dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _imageLoader = require('./imageLoader');

var _imageLoader2 = _interopRequireDefault(_imageLoader);

var Handler = (function () {
	function Handler() {
		_classCallCheck(this, Handler);

		this.boxes = [];
		this.currentBox;
	}

	_createClass(Handler, [{
		key: 'listen',
		value: function listen(callback) {
			var _this = this;

			_dispatcher2['default'].on('change', function (payload) {
				_this.currentBox = payload['current'];
				callback(payload);
			});
		}
	}, {
		key: 'addBox',
		value: function addBox(box) {
			// Do some magic here
			this.boxes.push(box);
		}
	}, {
		key: 'selectBox',
		value: function selectBox(box) {
			var image;
			return regeneratorRuntime.async(function selectBox$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:

						box = this.boxes.find(function (b) {
							return b.index === box.index;
						});

						// Loading state
						_dispatcher2['default'].emit('change', { current: null, onLoading: true, show: true });

						image = undefined;
						context$2$0.prev = 3;
						context$2$0.next = 6;
						return regeneratorRuntime.awrap((0, _imageLoader2['default'])(box.src));

					case 6:
						image = context$2$0.sent;
						context$2$0.next = 13;
						break;

					case 9:
						context$2$0.prev = 9;
						context$2$0.t0 = context$2$0['catch'](3);

						console.error(context$2$0.t0);
						return context$2$0.abrupt('return');

					case 13:

						// Receive one image
						_dispatcher2['default'].emit('change', { current: box, width: image.width, height: image.height });

					case 14:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this, [[3, 9]]);
		}
	}, {
		key: 'selectNext',
		value: function selectNext() {
			var index = this.currentBox.index >= this.boxes.length ? 1 : this.currentBox.index + 1;
			this.selectBox({ index: index });
		}
	}, {
		key: 'selectPrev',
		value: function selectPrev() {
			var index = this.currentBox.index > 1 ? this.currentBox.index - 1 : this.boxes.length;
			this.selectBox({ index: index });
		}
	}]);

	return Handler;
})();

exports['default'] = new Handler();
module.exports = exports['default'];
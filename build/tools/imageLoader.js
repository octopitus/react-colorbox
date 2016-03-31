// Why we don't load image via xhr?
// See this: http://stackoverflow.com/questions/19063399/loading-images-with-xhr-request
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = loadImage;

function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}

module.exports = exports['default'];
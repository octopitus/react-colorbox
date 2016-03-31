	// Why we don't load image via xhr?
	// See this: http://stackoverflow.com/questions/19063399/loading-images-with-xhr-request
export default function loadImage(url) {
  return new Promise(function(resolve, reject) {
    let image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}
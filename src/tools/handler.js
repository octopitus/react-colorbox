import dispatcher from './dispatcher';
import loadImage from './imageLoader';

class Handler {

	constructor() {
		this.boxes = [];
		this.currentBox;
	}

	listen(callback) {
		dispatcher.on('change', (payload) => {
			this.currentBox = payload['current'];
			callback(payload);
		});
	}

	addBox(box) {
		// Do some magic here
		this.boxes.push(box);
	}

	async selectBox(box) {

		box = this.boxes.find(b => b.index === box.index);

		// Loading state
		dispatcher.emit('change', { current: null, onLoading: true, show: true });
		
		let image;

		try {
			image = await loadImage(box.src);
		} catch(e) {
			console.error(e);
			return;
		}

		// Receive one image
		dispatcher.emit('change', { current: box, width: image.width, height: image.height });
	}

	selectNext() {
		let index = this.currentBox.index >= this.boxes.length ? 1 : this.currentBox.index + 1;
		this.selectBox({ index });
	}

	selectPrev() {	
		let index = this.currentBox.index > 1 ? this.currentBox.index - 1 : this.boxes.length;
		this.selectBox({ index });
	}
}

export default new Handler();
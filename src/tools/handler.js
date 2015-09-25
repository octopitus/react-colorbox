import dispatcher from './dispatcher';
import loadImage from './imageLoader';

class Handler {

	constructor() {
		this.boxes = [];
		this.initialState = { width: 320, height: 180, onLoading: false, current: null, show: false };
		this.state = Object.create(this.initialState);
	}

	getInitialState() {
		return this.initialState;
	}

	listen(callback) {
		dispatcher.on('change', (payload) => {
			this.state = Object.assign(this.state, payload);
			callback(payload);
		});
	}

	addBox(box) {
		this.boxes.push(box);
	}

	async selectBox(box) {

		box = this.boxes.find(b => b.index === box.index);

		dispatcher.emit('change', { current: null, onLoading: true, show: true });
		
		let image;

		try {
			image = await loadImage(box.src);
		} catch(e) {
			console.error(e);
			return;
		}

		dispatcher.emit('change', { current: box, width: image.width, height: image.height });
	}

	selectNext() {
		let index = this.state.current.index >= this.boxes.length ? 1 : this.state.current.index + 1;
		this.selectBox({ index });
	}

	selectPrev() {	
		let index = this.state.current.index > 1 ? this.state.current.index - 1 : this.boxes.length;
		this.selectBox({ index });
	}
}

export default new Handler();
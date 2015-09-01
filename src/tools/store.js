import dispatcher from './dispatcher';

class Store {

	constructor() {
		this.state = { width: 320, height: 180, show: false, currentBox: null };
	}

	listen(callback) {
		dispatcher.on('change', callback);
	}

	getState() {
		return this.state;
	}
}

export default new Store();
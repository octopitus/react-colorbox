import dispatcher from './dispatcher';

class ActionHandler {
	selectBox(box) {
		dispatcher.emit('change', { currentBox: box });
	}
}

export default new ActionHandler();
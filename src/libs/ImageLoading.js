import React from 'react';
import Spinner from 'spin.js';

export default class ImageLoading extends React.Component {
	componentDidEnter() {
		let DOM = React.findDOMNode(this);
		let opts = {
			lines: 13,
			length: 10,
			width: 4,
			radius: 13,
			top: 'calc(50% - 5px)'
		};
		new Spinner(opts).spin(DOM);
		DOM.style.opacity = 1;
	}
	componentWillLeave(callback) {
		let DOM = React.findDOMNode(this);
		DOM.style.opacity = 0;
		setTimeout(callback, 400);
	}
	styles() {
		return {
			zIndex: '9999',
			position: 'absolute',
			top: '0px',
			left: '0px',
			right: '0px',
			width: '100%',
			boxSizing: 'border-box',
			height: 'calc(100% - 40px)',
			border: '4px solid #fff',
			background: '#fff',
			opacity: 0
		};
	}
	render() {
		return (<div style={{...this.styles(), ...this.props.transition}}>{""}</div>);
	}
}

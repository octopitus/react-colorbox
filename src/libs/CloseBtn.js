import React from 'react';

export default class CloseBtn extends React.Component {

	constructor(props) {
		super(props);
	}

	styles() {
		return {
			zIndex: 9999,
			position: 'absolute',
			bottom: '0',
			right: '0',
			cursor: 'pointer',
			border: 'none',
			fontSize: '32px',
			fontWeight: 'bold',
			color: '#fff',
			width: '32px',
			height: '32px',
			background: 'rgba(0,0,0,0)',
			lineHeight: '32px',
		}
	}

	render() {
		return (
				<button style={this.styles()} onClick={(e) => this.props.onClose(e)}>&times;</button>
		);
	}
}

import React from 'react';

export default class CloseBtn extends React.Component {

	constructor(props) {
		super(props);
	}

	styles() {
		return {
			position: 'absolute',
			top: '5px',
			right: '5px',
			cursor: 'pointer',
			border: 'none',
			fontSize: '16px',
			color: '#fff',
			background: 'transparent!important'
		}
	}

	render() {
		return (
				<button style={this.styles()} onClick={(e) => this.props.onClose(e)}>&times;</button>
		);
	}
}

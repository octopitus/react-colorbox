import React from 'react';

export default class ImageBoxLabel extends React.Component {
	styles() {
		return {
			padding: '0px 8px',
			position: 'absolute',
			bottom: '0px',
			left: '0px',
			right: '0px',
			width: 'auto',
			height: '32px',
			lineHeight: '32px',
			fontSize: '16px',
			textAlign: 'center',
			color: '#fff',
			background: 'rgba(0, 0, 0, 0.75)'
		}
	}
	render() {
		return (
			<div style={this.styles()}>{this.props.title}</div>
		);
	}
}

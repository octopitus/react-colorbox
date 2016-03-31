import React from 'react';

export default class ImageBox extends React.Component {
	styles() {
		return {
			position: 'absolute',
			top: '0px',
			left: '0px',
			right: '0px',
			width: '100%',
			height: 'calc(100% - 40px)',
			border: '4px solid #fff',
			borderRadius: '4px',
			boxSizing: 'border-box'
		}
	}
	render() {
		return (
			<img src={this.props.src} alt={this.props.title} style={this.styles()} />
		);
	}
}
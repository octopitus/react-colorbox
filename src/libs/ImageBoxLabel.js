import React from 'react';

export default class ImageBoxLabel extends React.Component {
	styles() {
		return {
			position: 'absolute',
			bottom: '0px',
			left: '0px',
			width: 'auto',
			height: '20px',
			padding: '6px 0',
			lineHeight: '16px',
			fontSize: '16px',
			fontFamily: 'Helvetica, Arial, sans-serif',
			textAlign: 'left',
			color: '#fff',
			zIndex: '9999'
		}
	}
	render() {
		return (
			<div style={this.styles()}>
				{this.props.title}<br/>
				<small style={{color: '#999'}}>Image {this.props.index} of {this.props.total}</small>
			</div>
		);
	}
}
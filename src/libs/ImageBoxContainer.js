import React from 'react';

import ImageLoading from './ImageLoading';

export default class ImageBoxContainer extends React.Component {
	
	styles() {
		return {
			position: 'relative',
			width: '100%',
			height: '100%'
		};
	}

	render() {

		React.Children.forEach(this.props.children, (child) => console.log(child));

		return (
			<div style={this.styles()}>
				{this.props.children}
			</div>
		);
	}
}
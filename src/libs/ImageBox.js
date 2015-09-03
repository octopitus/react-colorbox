import React from 'react';

import ImageBoxLabel from './ImageBoxLabel';

export default class ImageBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {onLoading: true};
	}

	componentDidMount() {
		let img = new Image();
		img.src = this.props.src;
		img.onload = () => {
			this.setState({onLoading: false});
			this.props.onSizeChange({width: img.width, height: img.height});
		}
	}

	styles() {
		return {
		};
	}

	beforeLoading() {
		if (this.props.beforeLoading) {
			return this.props.beforeLoading();
		}
		return (<div>Loading</div>);
	}

	render() {

		if (this.state.onLoading || !this.props.show) {
			return this.beforeLoading();
		}

		return (
			<div>
				<img style={this.styles()} src={this.props.src} alt={this.props.title} />
				<ImageBoxLabel title={this.props.title} />
			</div>
		);
	}
}

ImageBox.propTypes = {
	src: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}
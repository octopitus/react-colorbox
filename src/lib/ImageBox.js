import React from 'react';
import ReactCSS from 'reactcss';

export default class ImageBox extends ReactCSS.Component {

	constructor(props) {
		super(props);
		this.state = { onLoading: true };
	}

	protoTypes: {
		src: React.ProtoTypes.string,
		beforeLoading: React.ProtoTypes.element
	}

	componentDidMount() {
		let img = new Image();
		img.src = this.props.src;
		img.onload = () => {
			this.setState({ onLoading: false });
			this.props.setSize({width: img.width, height: img.height });
		}
	}

	beforeLoading() {
		if (this.props.beforeLoading) {
			return this.props.beforeLoading();
		}
		return (<div>Loading</div>);
	}

	render() {
		if (this.state.onLoading) {
			return this.beforeLoading();
		}
		return (
			<img src={this.props.src} />
		);
	}
}

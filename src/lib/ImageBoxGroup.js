import React from 'react';
import ImageBox from './ImageBox';

export default class ImageBoxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = { width: '640', height: '480' };
	}

	protoTypes: {
		boxes: React.ProtoTypes.Array
	}

	styles() {
		let { width, height } = this.state;
		return {
			WebkitTransition: 'all 0.2s linear',
			MozTransition: 'all 0.2s linear',
			msTransition: 'all 0.2s linear',
			OTransition: 'all 0.2s linear',
			transition: 'all 0.2s linear',
			backgroundColor: '#ccc',
			position: 'absolute',
			top: `calc((100% - ${height}px) / 2)`,
			left: `calc((100% - ${width}px) / 2)`,
			width: width,
			height: height
		};
	}

	render() {
		if (!this.props.display) { return null; }
		return (
			<div style={this.styles()}>
				{this.props.boxes.map((box, i) => {
					if (i !== this.props.current) {
						return null;
					}
					return (<ImageBox key={i} setSize={(size) => this.setState(size)} src={box.src} />);
				})}
			</div>
		);
	}
}

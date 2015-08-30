import React from 'react';
import ImageBox from './ImageBox';

export default class ImageBoxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = { width: '640', height: '480', show: false };
		this.setSize.bind(this);
	}

	protoTypes: {
		boxes: React.ProtoTypes.Array
	}

	componentDidMount() {
		React.findDOMNode(this).addEventListener("transitionend", () => {
			this.setState({ show: true });
		});
	}

	styles() {
		let { width, height } = this.state;
		return {
			WebkitTransition: 'all 0.3s linear',
			MozTransition: 'all 0.3s linear',
			msTransition: 'all 0.3s linear',
			OTransition: 'all 0.3s linear',
			transition: 'all 0.3s linear',
			backgroundColor: '#ccc',
			position: 'absolute',
			top: `calc((100% - ${height}px) / 2)`,
			left: `calc((100% - ${width}px) / 2)`,
			width: width,
			height: height
		};
	}

	setSize(size) {
		this.setState({...size, show: false});
	}

	render() {
		let styles = {...this.styles(), display: this.props.display ? 'block' : 'none'};
		return (
			<div style={styles}>
				{this.props.boxes.map((box, i) => {
					if (i !== this.props.current) { return null; }
					return (<ImageBox key={i} setSize={(size) => this.setSize(size)} src={box.src} show={this.state.show} />);
				})}
			</div>
		);
	}
}

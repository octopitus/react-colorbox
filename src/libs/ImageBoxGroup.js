import React from 'react';

import ImageBox from './ImageBox';
import CloseBtn from './CloseBtn';

import { store } from '../tools';

export default class ImageBoxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
	}

	componentDidMount() {
		store.listen(data => this.setState(data));
		React.findDOMNode(this).addEventListener("transitionend", () => {
			this.setState({ show: true });
		});
	}

	styles(component) {
		let { width, height } = this.state;
		return {
			wrapper: {
				WebkitTransition: 'all 0.3s linear',
				MozTransition: 'all 0.3s linear',
				msTransition: 'all 0.3s linear',
				OTransition: 'all 0.3s linear',
				transition: 'all 0.3s linear',
				backgroundColor: '#fefefe',
				position: 'absolute',
				top: `calc((100% - ${height}px) / 2)`,
				left: `calc((100% - ${width}px) / 2)`,
				width: width,
				height: height,
				border: '8px solid rgba(0, 0, 0, 0.35)',
				WebkitBorderRadius: '8px',
				borderRadius: '8px'
			},
			container: {
				position: 'relative',
				width: '100%',
				height: '100%'
			}
		};
	}

	setSize(size) {
		this.setState({...size, show: false});
	}

	onClose() {
		// Just reset the current state of component
		// to the initial state
		this.setState(store.getState());
	}

	render() {

		let styles = this.styles();

		let wrapper = {...styles['wrapper'], display: this.state.currentBox !== null ? 'block' : 'none'};
		let container = styles['container'];

		let boxes = this.props.boxes.map((box, i) => {
			if (i !== this.state.currentBox) { return null; }
			return <ImageBox key={i} {...box} index={i + 1} total={this.props.boxes.length} setSize={(size) => this.setSize(size)} show={this.state.show} />;
		});

		return (
			<div style={wrapper}>
				<div style={container}>
					<CloseBtn onClose={() => this.onClose()} />
					{boxes}
				</div>
			</div>
		);
	}
}

ImageBoxGroup.propTypes = {
	boxes: React.PropTypes.array
}
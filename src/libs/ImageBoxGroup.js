import React from 'react';

import ImageBoxContainer from './ImageBoxContainer';

import CloseBtn from './CloseBtn';
import ImageBox from './ImageBox';

import { store } from '../tools';

export default class ImageBoxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
	}

	componentDidMount() {

		let DOM = React.findDOMNode(this);

		DOM.addEventListener("transitionend", (e) => this.handleTransitionEnd(e), false);
		DOM.addEventListener("webkitTransitionEnd", (e) => this.handleTransitionEnd(e), false);
		DOM.addEventListener("mozTransitionEnd", (e) => this.handleTransitionEnd(e), false);
		DOM.addEventListener("msTransitionEnd", (e) => this.handleTransitionEnd(e), false);
		DOM.addEventListener("oTransitionEnd", (e) => this.handleTransitionEnd(e), false);

		store.listen(data => this.setState(data));
	}

	handleTransitionEnd(e) {
		this.setState({ show: true });
	}

	styles(component) {
		let { width, height } = this.state;
		return {
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
		};
	}

	render() {

		let currentBox = this.props.boxes.findIndex((box, i) => {
			return i === this.state.currentBox;
		});

		return (
			<div style={{...this.styles(), display: this.state.currentBox !== null ? 'block' : 'none'}}>
				<ImageBoxContainer>
					<CloseBtn onClose={() => this.setState(store.getState())} />
					{ currentBox !== -1 ? <ImageBox key={currentBox} {...this.props.boxes[currentBox]} show={this.state.show} onSizeChange={(size) => this.setState({...size, show: false})} /> : null }
				</ImageBoxContainer>
			</div>
		);
	}
}

ImageBoxGroup.propTypes = {
	boxes: React.PropTypes.array.isRequired
}
import React from 'react';

import ImageBoxContainer from './ImageBoxContainer';

import CloseBtn from './CloseBtn';
import ImageBox from './ImageBox';
import ImageBoxLabel from './ImageBoxLabel';
import ImageLoading from './ImageLoading';

import { handler } from '../tools';

export default class ImageBoxGroup extends React.Component {

	constructor(props) {
		super(props);
		let { width, height } = props;
		this.state = {onLoading: false, current: null, show: false, width: width || 320, height: height || 180};
	}

	componentDidMount() {

		handler.listen(payload => {
			this.setState(payload);
		});

		let DOM = React.findDOMNode(this);

		DOM.addEventListener("transitionend", (e) => this.handleTransitionEnd(e));
		DOM.addEventListener("webkitTransitionEnd", (e) => this.handleTransitionEnd(e));
		DOM.addEventListener("mozTransitionEnd", (e) => this.handleTransitionEnd(e));
		DOM.addEventListener("msTransitionEnd", (e) => this.handleTransitionEnd(e));
		DOM.addEventListener("oTransitionEnd", (e) => this.handleTransitionEnd(e));

		// Handle click outside the box
		document.addEventListener('click', (e) => {
			if(!DOM.contains(e.target) && this.state.current !== null) {
				this.hideBox();
				return;
			}
		});

		document.addEventListener('keydown', (e) => {
			if (this.state.current) {
				e.preventDefault();
				switch (e.keyCode) {
					// On click right button
					case 39:
						handler.selectNext();
						return;
					// On click left button
					case 37:
						handler.selectPrev();
						return;
					// On click ESC button
					case 27:
						this.hideBox();
						return;
					default:
						return;
				}
			}
		});
	}

	styles(component) {
		let { width, height } = this.state;
		let { transitionTime } = this.props.options;
		return {
			WebkitTransition: `all ${transitionTime}ms linear`,
			MozTransition: `all ${transitionTime}ms linear`,
			msTransition: `all ${transitionTime}ms linear`,
			OTransition: `all ${transitionTime}ms linear`,
			transition: `all ${transitionTime}ms linear`,
			position: 'absolute',
			top: `calc((100% - ${height + 40}px) / 2)`,
			left: `calc((100% - ${width}px) / 2)`,
			height: `${height + 40}px`,
			width: `${width}px`,
			display: this.state.show ? 'block' : 'none'
		};
	}

	handleTransitionEnd(e) {
		this.setState({ onLoading: false });
	}

	hideBox() {
		this.setState({onLoading: false, current: null, show: false});
	}

	render() {
		
		let currentBox = this.state.current;

		return (
			<div style={this.styles()}>
				<ImageBoxContainer {...this.props.options}>
					{ this.state.onLoading ? <this.props.ImageLoading key="loading" /> : null}
					{ !this.state.onLoading ? <this.props.ImageBox key="box" {...currentBox} /> : null }
					{ !this.state.onLoading ? <this.props.CloseBtn key="close" onClose={() => this.hideBox()} /> : null }
					{ this.props.options.showLabel && !this.state.onLoading ? <this.props.ImageBoxLabel key="label" {...currentBox} total={handler.boxes.length} /> : null }
				</ImageBoxContainer>
			</div>
		);
	}
}

ImageBoxGroup.defaultProps = {
	options: { showLabel: true, transitionTime: 400 },
	CloseBtn: CloseBtn,
	ImageBox: ImageBox,
	ImageBoxLabel: ImageBoxLabel,
	ImageLoading: ImageLoading
};
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
		this.state = handler.getInitialState();
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

		document.addEventListener('click', (e) => {
			if(!DOM.contains(e.target) && this.state.current !== null) {
				this.hideBox();
				return;
			}
		});

		document.addEventListener('keydown', (e) => {
			if (this.state.current) {
				switch (e.keyCode) {
					case 39:
						e.preventDefault();
						handler.selectNext();
						return;
					case 37:
						e.preventDefault();
						handler.selectPrev();
						return;
					case 27:
						e.preventDefault();
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
		this.setState({onLoading: false});
	}

	hideBox() {
		this.setState(handler.getInitialState());
	}

	render() {
		
		let current = this.state.current;
		let total = handler.boxes.length;
		let options = this.props.options;

		return (
			<div style={this.styles()}>
				<ImageBoxContainer {...options}>
					{ this.state.onLoading ? <this.props.ImageLoading key="loading" /> : null}
					{ !this.state.onLoading ? <this.props.ImageBox key="box" {...current} /> : null }
					{ !this.state.onLoading ? <this.props.CloseBtn key="close" onClose={() => this.hideBox()} /> : null }
					{ options.showLabel && !this.state.onLoading ? <this.props.ImageBoxLabel key="label" {...current} total={total} /> : null }
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
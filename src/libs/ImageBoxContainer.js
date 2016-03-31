import React from 'react/addons';
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup.js';

import ImageLoading from './ImageLoading';

export default class ImageBoxContainer extends React.Component {	
	styles() {
		return {
			position: 'relative',
			width: '100%',
			height: '100%',
			background: 'rgba(0,0,0,0.75)',
			outline: '9999px solid rgba(0,0,0,0.75)'
		};
	}
	transition() {
		let { transitionTime } = this.props;
		return {
			WebkitTransition: `all ${transitionTime}ms linear`,
			MozTransition: `all ${transitionTime}ms linear`,
			msTransition: `all ${transitionTime}ms linear`,
			OTransition: `all ${transitionTime}ms linear`,
			transition: `all ${transitionTime}ms linear`
		}
	}
	render() {
		let children = this.props.children.map(child => {
			if (!child) { return child; }
			return React.addons.cloneWithProps(child, {
				key: child['key'],
				transition: this.transition()
			});
		});
		return (
			<div style={this.styles()}>
				<ReactTransitionGroup>{children}</ReactTransitionGroup>
			</div>
		);
	}
}
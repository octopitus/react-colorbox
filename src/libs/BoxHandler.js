import React from 'react';
import handler from '../tools/handler';

export default class BoxHandler extends React.Component {

	constructor(props) {
		super(props);
		this.group = props.group;
		this.index = props.index || handler.boxes.length + 1;
		handler.addBox({ src: props.src, title: props.title, index: this.index, group: this.group });
	}

	render() {
		return (
			<span onClick={() => handler.selectBox({index: this.index, group: this.group})}>{this.props.children}</span>
		);
	}
}

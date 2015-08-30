import React from 'react';
import { ImageBox, ImageBoxGroup } from 'react-colorbox';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = { display: false, current: null };
		this.showBox.bind(this);
	}
	
	showBox(index) {
		this.setState({ display: true, current: index });
	}

	render() {
		let boxes = [
			{src: 'http://lorempixel.com/400/200/', alt: 'Image 1'},
			{src: 'http://lorempixel.com/720/600/', alt: 'Image 2'}
		];
		return (
			<div>
				<ImageBoxGroup ref="boxes" boxes={boxes} display={this.state.display} current={this.state.current} />
				<ul>
					{boxes.map((box, i) => {
						return (<li key={i}><a onClick={() => this.showBox(i)}>{box.alt}</a></li>);
					})}
				</ul>
			</div>
		);
	}

}

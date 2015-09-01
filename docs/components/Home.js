import React from 'react';
import { ImageBoxGroup, actionCreator } from 'react-colorbox';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = { display: false, current: null };
	}

	render() {
		
		let boxes = [
			{src: 'http://lorempixel.com/400/200/', title: 'Image Title 1'},
			{src: 'http://lorempixel.com/720/600/', title: 'Image Title 2'}
		];

		return (
			<div>
				<ImageBoxGroup boxes={boxes} />
				<ul>
					{boxes.map((box, i) => {
						return (<li key={i}><a onClick={() => actionCreator.selectBox(i)}>{box.title}</a></li>);
					})}
				</ul>
			</div>
		);
	}

}

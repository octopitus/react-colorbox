import React from 'react';
import { ImageBoxGroup, BoxHandler } from 'react-colorbox';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		
		let boxes = [
			{src: 'http://lorempixel.com/400/200/', title: 'Image Title 1'},
			{src: 'http://lorempixel.com/720/600/', title: 'Image Title 2'}
		];

		return (
			<div>
				<ImageBoxGroup />
				<ul>
					{boxes.map((box, i) => {
						return (<li key={i}><BoxHandler {...box}>{box.title}</BoxHandler></li>);
					})}
				</ul>
			</div>
		);
	}

}

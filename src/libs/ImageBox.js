import React from 'react';
import ReactCSS from 'reactcss';

export default class ImageBox extends ReactCSS.Component {

	constructor(props) {
		super(props);
		this.state = { onLoading: true };
	}

	componentDidMount() {
		let img = new Image();
		img.src = this.props.src;
		img.onload = () => {
			this.setState({ onLoading: false });
			this.props.setSize({width: img.width, height: img.height + 32 });
		}
	}

	styles() {
		return {
			img: {
			},
			desc: {
				padding: '0px 8px',
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				right: '0px',
				width: '100%',
				height: '32px',
				lineHeight: '32px',
				fontSize: '16px',
				textAlign: 'center',
				color: '#666'
			}
		};
	}

	beforeLoading() {
		if (this.props.beforeLoading) {
			return this.props.beforeLoading();
		}
		return (<div>Loading</div>);
	}

	render() {
		if (this.state.onLoading || !this.props.show) {
			return this.beforeLoading();
		}
		let styles = this.styles();
		return (
			<div>
				<img style={styles['img']} src={this.props.src} />
				<div style={styles['desc']}>{this.props.title}</div>
				<span style={{...styles['desc'], textAlign: 'left', left: '0px', bottom: '0px'}}>
					{this.props.index ? `Image ${this.props.index} of ${this.props.total}` : null}
				</span>
			</div>
		);
	}
}

ImageBox.propTypes = {
	src: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	index: React.PropTypes.number.isRequired,
	beforeLoading: React.PropTypes.element
}
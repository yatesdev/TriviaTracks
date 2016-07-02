import './SongListItem.scss'
import React, { Component, PropTypes } from 'react';

export default class SongListItem extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		trackName: PropTypes.string.isRequired,
		artistName: PropTypes.string.isRequired,
		albumName: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="card share full-width">
				<div className="card-header">
					<h5>{this.props.trackName}</h5>
					<h6>{this.props.artistName}</h6>
				</div>
				<div className="card-description">
				</div>
				<div className="card-footer">
					{this.props.albumName}
				</div>
			</div>
		);
	}
}
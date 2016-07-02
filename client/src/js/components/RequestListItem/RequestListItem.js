import './RequestListItem.scss'
import React, { Component, PropTypes } from 'react';

export default class RequestListItem extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		trackName: PropTypes.string.isRequired,
		artistName: PropTypes.string.isRequired,
		albumName: PropTypes.string.isRequired,
		requesterFirstName: PropTypes.string.isRequired,
		requesterLastName: PropTypes.string.isRequired,
		requestTime: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="card share full-width">
				<div className="card-header">
					<h5>{this.props.requesterFirstName}</h5>
					<h6>{this.props.requesterLastName}</h6>
				</div>
				<div className="card-description">
					{this.props.trackName}<br/>
					{this.props.artistName}<br/>
					{this.props.albumName}<br/>
				</div>
				<div className="card-footer">
					{this.props.requestTime}
				</div>
			</div>
		);
	}
}
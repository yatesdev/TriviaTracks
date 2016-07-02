
import React, { Component, PropTypes } from 'react';
import RequestListItem from '../RequestListItem/RequestListItem';

export default class RequestList extends Component {
	static propTypes = {
		requests: PropTypes.array.isRequired
	}

	renderList() {
		return this.props.requests.map((request) =>
			(
				<RequestListItem
					key={request.id}
					id= {request.id}
					trackName = {request.song.metadata.name}
					artistName = {request.song.metadata.artist.name}
					albumName = {request.song.metadata.album.name}
					requesterFirstName = {request.user.first_name}
					requesterLastName = {request.user.last_name}
					requestTime = {request.date_requested} />
			)
		);
	}

	render () {
		return (
			<div className="requestList">
				{this.renderList()}
			</div>
		);
	}
}
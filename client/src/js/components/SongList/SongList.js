
import React, { Component, PropTypes } from 'react';
import SongListItem from '../SongListItem/SongListItem';

export default class SongList extends Component {
	static propTypes = {
		songs: PropTypes.array.isRequired
	}

	renderList() {
		return this.props.songs.map((song) =>
			(
				<SongListItem
					key={song.id}
					id= {song.id}
					trackName = {song.metadata.name}
					artistName = {song.metadata.artist.name}
					albumName = {song.metadata.album.name} />
			)
		);
	}

	render () {
		return (
			<div className="songList">
				{this.renderList()}
			</div>
		);
	}
}
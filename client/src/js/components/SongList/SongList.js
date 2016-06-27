import React, { Component, PropTypes } from 'react';
import SongListItem from '../SongListItem/SongListItem';
import { List } from 'material-ui/List';

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
					trackName = {song.trackName}
					artistName = {song.artistName} />
			)
		);
	}

	render () {
		return (
			<List className="songList">
				{this.renderList()}
			</List>
		);
	}
}
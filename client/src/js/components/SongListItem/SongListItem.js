import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';

export default class SongListItem extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		trackName: PropTypes.string.isRequired,
		artistName: PropTypes.string.isRequired
	};

	render() {
		return (
			<ListItem 
				primaryText={this.props.trackName}
				secondaryText={this.props.artistName}
				rightIcon={<NavigationMoreVert/>}>
			</ListItem>
		);
	}
}
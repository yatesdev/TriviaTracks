import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';

export default class SongListItem extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		trackName: PropTypes.string.isRequired,
		artistName: PropTypes.string.isRequired
	}

	render() {
		return (
			<ListItem 
				primaryText={this.props.trackName}
				secondaryText={this.props.artistName}
				leftAvatar= {
					<Avatar src="https://i.scdn.co/image/4a7374d9257760370a054fbb1795725d567c3d91" 
						style= {{
							borderRadius: '5px',
							height: '60px',
							width: '60px',
							top: '6px',
							left: '6px'
						}}/>
				}
				rightIconButton={
					<IconMenu iconButtonElement={
						<IconButton
						    touch={true}
						    tooltip="more"
						    tooltipPosition="bottom-left">
						    <MoreVertIcon />
						  </IconButton>
					}>
				    <MenuItem>Remove</MenuItem>
				    <MenuItem></MenuItem>
				    <MenuItem>Delete</MenuItem>
				  </IconMenu>
				}>
			</ListItem>
		);
	}
}
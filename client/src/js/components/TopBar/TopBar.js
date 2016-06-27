import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class TopBar extends Component {

	render () {
		return (
			<AppBar
		    title="Trivia Tracks"
		    iconElementRight={
		      <IconMenu
		        iconButtonElement={
		          <IconButton><MoreVertIcon /></IconButton>
		        }
		        targetOrigin={{horizontal: 'right', vertical: 'top'}}
		        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		      >
		        <MenuItem primaryText="Refresh" />
		        <MenuItem primaryText="Help" />
		        <MenuItem primaryText="Sign out" />
		      </IconMenu>
		    }
	  	/>
  	);
	}
}
import React from 'react'
import classes from './SidebarHeader.scss'
import LogoImage from '../../static/img/TriviaTracksLogoWhite.png'

export default class SidebarHeader extends React.Component {
	render() {
		return(
			<div className="sidebar-header">
				<img 
					src={LogoImage}
					width="93"
					height="25" />
			</div>
		);
	}
}
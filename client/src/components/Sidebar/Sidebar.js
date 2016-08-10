import React from 'react'
import classes from './Sidebar.scss'
import SidebarHeader from '../SidebarHeader'

export default class Sidebar extends React.Component {
	render() {
		return(
			<div className="Sidebar page-sidebar">
				<div className="sidebar-overlay-slide from-top">
				</div>
				<SidebarHeader />
			</div>
		);
	}
}

import React from 'react'
import classes from './Sidebar.scss'
import SidebarHeader from '../SidebarHeader'
import SidebarMenu from '../SidebarMenu'

export default class Sidebar extends React.Component {
	render() {
		const menuItems = [{
			name: 'Home'
		},
		{
			name: 'Location'
		}];
		return(
			<div className="Sidebar page-sidebar">
				<div className="sidebar-overlay-slide from-top">
				</div>
				<SidebarHeader />
				<SidebarMenu links={menuItems} />
			</div>
		);
	}
}

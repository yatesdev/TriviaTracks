import React from 'react'
import classes from './Sidebar.scss'
import SidebarHeader from '../SidebarHeader'
import SidebarMenu from '../SidebarMenu'

export default class Sidebar extends React.Component {
	render() {
		const menuItems = [{
			name: 'Home',
			href: '/',
			iconClass: 'fa fa-home',
			iconColor: 'bg-success'
		},
		{
			name: 'Location',
			href: 'location',
			iconClass: 'fa fa-map-marker',
			iconColor: 'bg-warning'
		},
		{
			name: 'Statistics',
			href: 'statistics',
			iconClass: 'fa fa-bar-chart',
			iconColor: 'bg-primary'
		},
		{
			name: 'Admin',
			href: 'admin',
			iconClass: 'fa fa-cog',
			iconColor: 'bg-complete'
		},
		{
			name: 'UserName',
			href: 'user',
			iconClass: 'fa fa-user',
			iconColor: 'bg-danger'
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

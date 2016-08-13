import React from 'react'
import classes from './Sidebar.scss'
import SidebarHeader from '../SidebarHeader'
import SidebarMenu from '../SidebarMenu'

export default class Sidebar extends React.Component {
	render() {
		const menuItems = [{
			name: 'Home',
			href: '/',
			iconClass: 'fa fa-home'
		},
		{
			name: 'Location',
			href: '/location',
			iconClass: 'fa fa-map-marker'
		},
		{
			name: 'Statistics',
			href: 'statistics',
			iconClass: 'fa fa-bar-chart'
		},
		{
			name: 'Admin',
			href: '/admin',
			iconClass: 'fa fa-cog'
		},
		{
			name: 'UserName',
			href: '/user',
			iconClass: 'fa fa-user'
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

import React,{ Component, PropTypes } from 'react'
import classes from './SidebarMenu.scss'
import SidebarMenuItem from '../SidebarMenuItem'

export default class SidebarMenu extends React.Component {
	static propTypes = {
		links: React.PropTypes.array.isRequired
	}

	renderList() {
		return this.props.links.map((link,index) =>
			(
				<SidebarMenuItem
					key={index}
					name={link.name}
					href={link.href}
					iconClass={link.iconClass} 
					iconColor={link.iconColor}/>
			)
		);
	}
	render() {
		return (
			<div className="sidebar-menu">
				<ul className="menu-items">
					<div className="m-t-30"></div>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

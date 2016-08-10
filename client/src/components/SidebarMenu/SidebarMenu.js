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
					href={link.href} />
			)
		);
	}
	render() {
		return (
			<div className="sidebar-menu">
				<ul className="menu-items m-t-30">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

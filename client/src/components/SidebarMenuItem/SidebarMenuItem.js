import React,{ Component, PropTypes } from 'react'
import classes from './SidebarMenuItem.scss'

export default class SidebarMenuItem extends React.Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	}
	render() {
		return(
			<li>
				<a href="#">
					<span className="title">{this.props.name}</span>
				</a>
				<span className="icon-thumbnail">
					<i className="pg-home"></i>
				</span>
			</li>
		);
	}
}
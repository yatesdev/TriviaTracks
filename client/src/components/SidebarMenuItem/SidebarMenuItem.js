import React,{ Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import classes from './SidebarMenuItem.scss'

export default class SidebarMenuItem extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired
	}
	render() {
		return(
			<li>
				<Link to={this.props.href} activeClassName="active">
					<span className="title">{this.props.name}</span>
				</Link>
				<span className="icon-thumbnail">
					<i className="pg-home"></i>
				</span>
			</li>
		);
	}
}
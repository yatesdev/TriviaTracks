import React,{ Component, PropTypes } from 'react'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import classes from './SidebarMenuItem.scss'

class NavItem extends React.Component {
	static contextTypes = {
    router: React.PropTypes.object.isRequired
	};

  render () {
    const { router } = this.context
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props

    const isActive = router.isActive(to, onlyActiveOnIndex)
    const LinkComponent = index ? Link : IndexLink

    var classNames = require('classnames');
		var iconThumbnailColor = classNames(
			"icon-thumbnail",
			this.props.iconColor
		);
    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to}>{children}</LinkComponent>
        <span className={iconThumbnailColor}>
					<i className={this.props.iconClass}></i>
				</span>
      </li>
    )
  }
}
export default class SidebarMenuItem extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		iconClass: PropTypes.string.isRequired,
		iconColor: PropTypes.string.isRequired
	}
	render() {
		return(
			<NavItem to={this.props.href} onlyActiveOnIndex iconClass={this.props.iconClass}
				iconColor={this.props.iconColor}>
				<span className="title">{this.props.name}</span>
			</NavItem>
		);
	}
}
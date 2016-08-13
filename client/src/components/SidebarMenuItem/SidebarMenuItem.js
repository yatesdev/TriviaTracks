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

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to} {...props}>{children}</LinkComponent>
        <span className="icon-thumbnail">
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
		iconClass: PropTypes.string.isRequired
	}
	render() {
		return(
			<NavItem to={this.props.href} onlyActiveOnIndex iconClass={this.props.iconClass}>
				<span className="title">{this.props.name}</span>
			</NavItem>
		);
	}
}
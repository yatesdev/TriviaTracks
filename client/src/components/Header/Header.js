import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className="page-container">
    <div className="header">
      <div className="pull-left full-height visible-sm visible-xs">
        <div className="sm-action-bar">
          <a className="btn-link toggle-sidebar">
            <span className="icon-set menu-hamburger p-b-15">
              <i className="fa fa-navicon"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Header

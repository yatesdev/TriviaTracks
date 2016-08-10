import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import LogoImage from '../../static/img/TriviaTracksLogo.png'

export default class Header extends React.Component {
  render() {
    return (
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
        <div className="pull-right full-height visible-sm visible-xs">
          <div className="sm-action-bar">
            <a href="#" className="btn-link" data-toggle="search" >
              <span ><i className="fa fa-search"></i></span>
            </a>
          </div>
        </div>
        <div className="pull-left sm-table">
          <div className="header-inner">
            <div className="brand inline">
              <img
                src={ LogoImage }
                width="93"
                height="25" />
            </div>
            <a href="#" className="search-link" data-toggle="search"><i className="fa fa-search"></i>Type anywhere to <span className="bold">search</span></a>
          </div>
        </div>
      </div>
    );
  }
}

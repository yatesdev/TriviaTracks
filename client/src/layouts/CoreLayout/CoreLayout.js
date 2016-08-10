import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='fixed-header menu-pin menu-behind'>
  	<Sidebar />
  	<div className="page-container">
    	<Header />
    	<div className="page-content-wrapper">
    		<div className="content">
	    		<div className="container-fluid container-fixed-lg">
	      		{children}
	      	</div>
	      </div>
    	</div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

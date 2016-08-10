import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='fixed-header menu-pin menu-behind'>
  	<Sidebar />
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout

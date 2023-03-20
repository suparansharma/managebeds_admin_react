import React from 'react'
import Header from './Header'
import Leftsidebar from './Leftsidebar'
import Customizer from './Customizer'

const Layout = ({children}) => {
  return (
    <>
    <div id="main-wrapper">

    <Header/>
    <Leftsidebar/>
    <div className="page-wrapper">
    {children}
    </div>
    </div>
    <div>
        <Customizer/>
        <div className="chat-windows" />
        </div>
    </>
  )
}

export default Layout
import React from 'react'
import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout
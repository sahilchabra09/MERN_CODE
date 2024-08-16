import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav.jsx'
import Footer from './Footer/Footer.jsx'
function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout
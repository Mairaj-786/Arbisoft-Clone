import React, { useState, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import NavResponsive from '../NavResponsive'

const Navbar = ({ HandleToggle, NavShow }) => {
    const [FixedNav, SetFixedNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        if (window.scrollY > 100) {
            SetFixedNav(true)
        } else {
            SetFixedNav(false)
        }
    }

    return (
        <>
            <div className={`Nav ${FixedNav ? 'change' : ''}`}>
                <nav className='navbar navbar-expand-lg '>
                    <a className="navbar-brand" href="#"><img src="/images/logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Why arbisoft</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Solution</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">industries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Client</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn" href="#">REQUEST A QUETE</a>
                            </li>
                        </ul>

                    </div>
                    <div className="ham ml-auto" onClick={HandleToggle} >
                        <Hamburger size={27} />
                    </div>
                </nav>
            </div>
            <NavResponsive FixedNav={FixedNav} />

        </>
    )
}

export default Navbar

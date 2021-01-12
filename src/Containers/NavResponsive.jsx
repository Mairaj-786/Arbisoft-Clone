import React from 'react'

const NavResponsive = ({ NavShow, FixedNav }) => {
    return (
        <>
            <div className="Full">
                <div className={`nav2 ${NavShow ? 'show' : ''}`}>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <button className=" btn btn2" href="#">REQUEST A QUETE</button>
                        </li>
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


                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavResponsive

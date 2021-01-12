import React from 'react'
import { Container } from 'react-bootstrap'
import { BsHeart } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'

const HappyClient = () => {
    return (
        <div className="HappyClient">
            <div className="HappyClient__inner">
                <ul>
                    <li className="d-flex">
                        <div className="HappyClient__icons__text">
                            <div className="HappyClient__icons">
                                <BsHeart />
                            </div>
                            <div className="HappyClient__text">
                                <div className="HappyClient__text__inner">
                                    <b>100<span>+</span></b>
                                </div>
                                <div className="para">
                                    <p className="text-muted">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex">
                        <div className="HappyClient__icons__text">
                            <div className="HappyClient__icons">
                                <FaRegLightbulb />
                            </div>
                            <div className="HappyClient__text">
                                <div className="HappyClient__text__inner">
                                    <b>13<span></span></b>
                                </div>
                                <div className="para">
                                    <p className="text-muted">Years in Business</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex">
                        <div className="HappyClient__icons__text">
                            <div className="HappyClient__icons">
                                <AiOutlineUser />
                            </div>
                            <div className="HappyClient__text">
                                <div className="HappyClient__text__inner">
                                    <b>500<span>+</span></b>
                                </div>
                                <div className="para">
                                    <p className="text-muted">Team Members</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex">
                        <div className="HappyClient__icons__text">
                            <div className="HappyClient__icons">
                                <AiFillHome />
                            </div>
                            <div className="HappyClient__text">
                                <div className="HappyClient__text__inner">
                                    <b>4<span></span></b>
                                </div>
                                <div className="para">
                                    <p className="text-muted">Global Offices</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default HappyClient

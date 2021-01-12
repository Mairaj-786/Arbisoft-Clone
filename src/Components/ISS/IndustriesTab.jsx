import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa';
import { RiHeart2Line } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';

const IndustriesTab = () => {
    return (
        <div>
            <div className="home">
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaGraduationCap size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Education</h4>
                        <p className='text-muted'>We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the ways learning is accessed. Our online and ed-tech solutions are used by millions globally..</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaRegPaperPlane size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Travel</h4>
                        <p className='text-muted'>Arbisoft has helped startups become leading travel & hospitality search engines with our dedicated team of software developers, and machine learning and data engineers..</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
            </div>
            <div className="home">
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <RiHeart2Line size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">HealthCare</h4>
                        <p className='text-muted'>We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the ways learning is accessed. Our online and ed-tech solutions are used by millions globally..</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <GiMoneyStack size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Financial Services</h4>
                        <p className='text-muted'>Arbisoft has helped startups become leading travel & hospitality search engines with our dedicated team of software developers, and machine learning and data engineers..</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IndustriesTab

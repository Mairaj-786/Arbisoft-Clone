import React from 'react'
import { GiMoneyStack } from 'react-icons/gi';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs';

const ServicesTab = () => {
    return (
        <div>
            <div className="home">
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaDesktop size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Web App Development</h4>
                        <p className='text-muted'>We create beautifully designed web apps precisely tailored to your situation. Each phase of development from designing to coding and implementation is planned meticulously, while Agile methodology is used to build strategies for each sprint.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaMobileAlt size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Mobile App Development</h4>
                        <p className='text-muted'>We build native apps optimized for iOS and Android to provide your users a completely branded seamless mobile experience that leverages the full power of the OS. We’ve collaborated on several enterprise-grade apps for the iPhone and Android.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
            </div>
            <div className="home">
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <AiOutlineCloudDownload size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Web Scraping & Data Services</h4>
                        <p className='text-muted'>We create crawl clusters to analyse and crawl through data from multiple sources, collect usable data faster, and break free of scaling constraints. Data extractors created by experts handle data extraction and web scraping, in the time and format that suits you best.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <GiMoneyStack size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Enterprise Software Development</h4>
                        <p className='text-muted'>We provide full range of custom software development services to bring your ideas to life. Our turnkey solutions are custom-designed to fit into your enterprise software ecosystem. Anything you can dream up, from a custom desktop application to a global app, we can build it.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesTab

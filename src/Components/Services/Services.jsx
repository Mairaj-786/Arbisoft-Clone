import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { FaMobileAlt, FaDesktop } from 'react-icons/fa'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

const Services = () => {
    return (
        <div className="Services">
            <Container>
                <div className="Services_text text-center">
                    <h3>We take care of all the technology so you can focus on what you do best
                     </h3>
                    <p className="text-muted">Our team of 400+ experienced software engineers, developers, UX architects, and designers like to produce impactful software. We create software that is used by millions of users, in sectors spanning Education, Technology, Healthcare, Travel and beyond.</p>
                </div>
                <div className="Services_cards">
                    <div class="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="WEB cards">
                                <div className="font text-center" >

                                    <FaDesktop size={100} />
                                </div>
                                <h4>Web</h4>
                                <p className='text-muted'>Our web development team creates intuitive user
                                experiences wrapped up in beautiful designs. Everything we create is
                                custom and precisely made to your specification. Our award-winning web apps have
                                found the best deals for travelers, enabled businesses to
                                 maximize their ROI, and more.</p>
                                <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="WEB cards">
                                <div className="font text-center" >

                                    <FaMobileAlt size={100} />
                                </div>
                                <h4>Mobile</h4>
                                <p className='text-muted'>Our web development team creates intuitive user
                                experiences wrapped up in beautiful designs. Everything we create is
                                custom and precisely made to your specification. Our award-winning web apps have
                                found the best deals for travelers, enabled businesses to
                                 maximize their ROI, and more.</p>
                                <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="WEB cards">
                                <div className="font text-center" >

                                    <AiOutlineCloudDownload size={100} />
                                </div>

                                <h4>Data</h4>
                                <p className='text-muted'>Our web development team creates intuitive user
                                experiences wrapped up in beautiful designs. Everything we create is
                                custom and precisely made to your specification. Our award-winning web apps have
                                found the best deals for travelers, enabled businesses to
                                 maximize their ROI, and more.</p>
                                <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>



        </div>
    )
}

export default Services

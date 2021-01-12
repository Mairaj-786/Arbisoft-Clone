import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs'

const Companies = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="Companies">
            <Container>
                <h3>Great software needs great relationships</h3>
                <p className="text-center mb-5 pb-5">Beyond our skilled expertise, it is our customers and our relationship with them that sets us apart.</p>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/cheetah.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/6.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/7.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/8.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/9.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/10.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/11.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/12.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 ">
                        <div className="ComImg">
                            <img src="/images/12.png" alt="" />
                        </div>
                    </div>
                </div>


                {/* Slider */}
                <Slider {...settings}>
                    <div className="ComSlides d-flex">
                        <div className="IMG">
                            <img src="/image/1.png" alt="" />
                        </div>
                        <div className="Text">
                            <h5>Gerald Devlin</h5>
                            <b>Ceo & founder, lendaid Inc</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam, qui tempora, temporibus aspernatur possimus natus a incidunt illum quia autem voluptas sed iusto ex pariatur esse iure aliquid aliquam?</p>
                        </div>
                    </div>
                    <div className="ComSlides d-flex">
                        <div className="IMG">
                            <img src="/image/2.png" alt="" />
                        </div>
                        <div className="Text">
                            <h5>Gerald Devlin</h5>
                            <b>Ceo & founder, lendaid Inc</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam, qui tempora, temporibus aspernatur possimus natus a incidunt illum quia autem voluptas sed iusto ex pariatur esse iure aliquid aliquam?</p>
                        </div>
                    </div>
                    <div className="ComSlides d-flex">
                        <div className="IMG">
                            <img src="/image/4.png" alt="" />
                        </div>
                        <div className="Text">
                            <h5>Gerald Devlin</h5>
                            <b>Ceo & founder, lendaid Inc</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam, qui tempora, temporibus aspernatur possimus natus a incidunt illum quia autem voluptas sed iusto ex pariatur esse iure aliquid aliquam?</p>
                        </div>
                    </div>
                    <div className="ComSlides d-flex">
                        <div className="IMG">
                            <img src="/image/4.png" alt="" />
                        </div>
                        <div className="Text">
                            <h5>Gerald Devlin</h5>
                            <b>Ceo & founder, lendaid Inc</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam, qui tempora, temporibus aspernatur possimus natus a incidunt illum quia autem voluptas sed iusto ex pariatur esse iure aliquid aliquam?</p>
                        </div>
                    </div>
                    <div className="ComSlides d-flex">
                        <div className="IMG">
                            <img src="/image/5.png" alt="" />
                        </div>
                        <div className="Text">
                            <h5>Gerald Devlin</h5>
                            <b>Ceo & founder, lendaid Inc</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam, qui tempora, temporibus aspernatur possimus natus a incidunt illum quia autem voluptas sed iusto ex pariatur esse iure aliquid aliquam?</p>
                        </div>
                    </div>

                </Slider>
                <div className="testimotional">
                    <div className="testimotional_text">
                        <a href="#">View all Testimotional<BsArrowRight size={30} className="tesArrow" /></a>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Companies

import React from 'react'
import Companies from '../Companies/Companies'
import Services from '../Services/Services'
import HappyClient from '../HappyClient/HappyClient'
import TabNav from '../ISS/TabNav'


const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="Home__inner">
                    <div className="text">
                        <h1 className="text-center text-white">We build powerful digital<br /> solutions and experiences.</h1>
                    </div>
                    <div className="buttons">
                        <ul>
                            <li><a href="#" className="text-muted">View our Work</a></li>
                            <li><a href="#" className="text-white">Tell us about your project</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Services />
            <Companies />
            <HappyClient />
            <TabNav />

        </>

    )
}

export default Home

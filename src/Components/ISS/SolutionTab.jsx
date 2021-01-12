import React from 'react'
import { GiMoneyStack } from 'react-icons/gi';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs';

const SolutionTab = () => {
    return (
        <div>
            <div className="home">
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaDesktop size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Learning Management System</h4>
                        <p className='text-muted'>We realize the importance of learning as a form of leadership. Therefore, our learning management solution, Edly, provides everything you need to deliver and track learning experiences online.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <FaMobileAlt size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark ">CX Management Solution</h4>
                        <p className='text-muted'>Sentimeter is a user experience (CX) solution that empowers you to make data-driven decisions by anticipating customer needs and tracking demand.</p>
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
                        <h4 className="text-dark">HRIS</h4>
                        <p className='text-muted'>Designed by a team of Human Resource specialists and software engineers, Arbisoft’s Human Resource Information System (HRIS), WorkStream and HireStream, brings you a comprehensive array of features built-in modern technology to streamline your processes, facilitate workflow, improve efficiency and maintain data.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
                <div className="home__inner cards border">
                    <div className="font text-center" >
                        <GiMoneyStack size={100} />
                    </div>
                    <div className="home__inner__text">
                        <h4 className="text-dark">Data Analytics</h4>
                        <p className='text-muted'>In a world inundated by data, you need fast and reliable data to help you recognize and capitalize on opportunities. With real insight at your fingertips, you can improve engagement levels with your customers, reduce costs, and seize upon exciting new revenue streams.</p>
                        <a href="#">Learn more<BsArrowRight className="arrow" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SolutionTab

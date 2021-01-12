import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap'
import IndustriesTab from './IndustriesTab'
import ServicesTab from './ServicesTab'
import SolutionTab from './SolutionTab'

const ISS = () => {
    return (
        <div className="Industry_Services_Solutions">
            <Container>
                <Tabs defaultActiveKey="Industries" id="uncontrolled-tab-example">
                    <Tab eventKey="Industries" title="Industries">
                        <IndustriesTab />
                    </Tab>
                    <Tab eventKey="Services" title="Services">
                        <ServicesTab />
                    </Tab>
                    <Tab eventKey="Solution" title="Solution">
                        <SolutionTab />
                    </Tab>

                </Tabs>
            </Container>
        </div>
    )
}

export default ISS

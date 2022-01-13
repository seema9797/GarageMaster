import React from 'react'
import Navbar from '../features/home/Navabr';
import {Container,Form,Button,Input,FormGroup,Label,Col,Row} from 'reactstrap';
import booking from '../assets/images/booking.png';
import Item from './Item'
import './styles.css'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Container>
            <Row className="head_container">
                <Col lg={6} sm={12} className="left_container">
                    <div className="left_items">
                        <h1>One key to unlock 
                        all your car needs!</h1>
                        <p>Master Garage is your car buddy that assists you to make an informed
                    and helps you to enjoy your freedom to choose !</p>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                  <img src={booking} alt="error" className="bookingillus"/>
                </Col>
            </Row>
            <div>
                <h3>Select a Category </h3>
                <div>
                    <Item />
                </div>
            </div>
            </Container>
            <Container fluid className="about">
               <Row>
                   <Col lg={10}>
                       <p>
                       Master Garage provides end to end solution for all your automobile needs and assists you to 
make an informed decision, from new vehicle purchase to getting your car serviced at the best 
garage nearby, manage all your fastags at one place, find chauffer's for your trips, renew your 
insurance, find a suitable parking and to buy and sell used car at the best price.
                       </p>
                   </Col>
                   <Col lg={2} className="icon">
                       <h2>Logo</h2>
                   </Col>
               </Row>
            </Container>
        </div>
    )
}

export default Home

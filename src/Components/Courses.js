import 'antd/dist/antd.css';
import React,{ Component} from 'react';
import CoursesHolder from './CoursesHolder.js';
import { Row, Col, Divider,Typography, Spin } from 'antd';
import humanities from './Images/humanities.png'
import bigData from './Images/bigData.png'
import business from './Images/business.png'
import civil from './Images/civil.png'
import computer from './Images/computer.png'
import dataAnalysis from './Images/DataAnalytics.png'
import electric from './Images/electric.png'
import robotics from './Images/robotics.png'
import admin from './Images/admin.png'
import machine from './Images/machine.png'


const { Title } = Typography;

const styles={
    width:'100px',
    height:'100px',
}

class Courses extends Component {
    render() {

        return (
            <>
            
            <Divider style={{marginTop:'60px'}} orientation="left">Courses</Divider>
                <Row justify="space-around" gutter={[1,5]}>
                <Col className="gutter-row">
                    <CoursesHolder image={humanities} text ='Humanities'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={bigData} text ='Big Data'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={business} text ='Business'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={civil} text ='Civil'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={computer} text ='Computer'/>
                </Col>
                </Row>
                <Row justify="space-around" gutter={[1,5]}>

                <Col className="gutter-row">
                    <CoursesHolder image={dataAnalysis} text ='Data Analytics'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={electric} text ='Electrical'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={robotics} text ='Robotics'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={admin} text ='Administration'/>
                </Col>
                <Col className="gutter-row">
                    <CoursesHolder image={machine} text ='Machine Learning'/>
                </Col>
                </Row>
            
            </>
        );
    }
}

export default Courses;


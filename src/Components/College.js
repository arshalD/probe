import 'antd/dist/antd.css';
import '../App.css'
import { List, Avatar, Space,Layout,Divider,Typography,Carousel,Row,Col } from 'antd';
import Navbar from './Navbar';
import { MessageOutlined, LikeOutlined, StarOutlined,BankOutlined } from '@ant-design/icons';
import Banner6 from './Images/Banner6.png';
import Banner7 from './Images/Banner7.png';
import Banner8 from './Images/Banner8.png';
import Banner9 from './Images/Banner9.png';
import Banner10 from './Images/Banner10.png';
import Banner11 from './Images/Banner11.png';
import college7 from './Images/College7.png'
import college8 from './Images/College8.png'
import college9 from './Images/College9.png'
import college10 from './Images/College10.png'
import college11 from './Images/College11.png'
import college12 from './Images/College12.png'
import college13 from './Images/College13.png'
import React,{ Component} from 'react';
import CardHolder from './CardHolder.js';
import Comments from './Comments'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useLocation
  } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const contentStyle = {
    height: '30%',
    width:'101%'
  };

const imagesArray =[college7,college8,college9,college10,college11,college12,college13];
const bannerArray =[Banner6, Banner7, Banner8, Banner9, Banner10, Banner11];


const College = ()=>{
    const location = useLocation()
    const title = location.state?.title || sessionStorage.getItem('searchResult');
    console.log(title)
        return (
            <>
            <Layout className="layout">
              <Header>
                <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
              </Header>
              <Content>
               <Row>
                <Col>
                 <Typography>
                   <Title style={{marginTop:'35px 12px', paddingLeft:'24px',paddingTop:'24px'}}>
                       <Avatar size={44} icon={<BankOutlined /> }/>{` ${title} `}</Title>
                 </Typography>
                </Col>
               </Row>
                <Row>
                <Col>
                <Carousel style={{marginTop:'45px'}}>
                    <div>
                    <img style={contentStyle} alt="Image" src={bannerArray[Math.floor((Math.random()*5)+1)]}/>
                    </div>
                    <div>
                    <img style={contentStyle} alt="Image" src={bannerArray[Math.floor((Math.random()*5)+1)]}/>
                    </div>
                    <div>
                    <img style={contentStyle} alt="Image" src={bannerArray[Math.floor((Math.random()*5)+1)]}/>
                    </div>
                    <div>
                    <img style={contentStyle} alt="Image" src={bannerArray[Math.floor((Math.random()*5)+1)]}/>
                    </div>
                </Carousel>
                </Col>
                </Row>
                <Row>
                  <Col style={{marginTop:'45px',marginLeft:'45px',paddingLeft:'45px'}}>
                   <Comments />
                  </Col>
                </Row>
              </Content>
              <Divider style={{marginTop:'45px'}} orientation="left"></Divider>
              <Footer>
               <Space split={<Divider type="vertical" />} style={{textAlign:'center'}}>
                 <Typography>Copyright © 2021 Probe, Inc</Typography>
                 <Typography>Made with ❤ Arshal</Typography>
               </Space> 
              </Footer>
             
            </Layout>
            </>
        );
    
}

export default College;
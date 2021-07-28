import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import React,{ Component,useState} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout,Input,Space,Typography,Divider,Row, Col, message, Spin} from 'antd';
import Banner from './Banner.js';
import PopularColleges from './PopularColleges.js';
import Courses from './Courses.js';
import Navbar from './Navbar';
import Pagin from './Pagin';
import Colleges from './Colleges';
import mainImage from './Images/main.png'
// import Pagination from './Components/Pagin';

const { Header, Footer, Content } = Layout;

const { Search } = Input;


class Home extends Component {
   state = { redirect: null, loading : false, };

   onSearch(value) {
    this.setState({redirect: null, loading: true });
    fetch(`https://probe-db-beta.herokuapp.com/getCollege/${value}`)
    .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if(json === false){
            this.setState({redirect: null, loading: false });
            message.error('Oops !! College not found!');                      
          }
          else
          {let data = JSON.parse(json);
          sessionStorage.setItem('searchResult',data.name)
          console.log(data);
          this.setState({ redirect: "/college", loading: false })}

        })
   }

   render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <>
      <Layout className="layout">
        <Header>
          <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
        </Header>
        
        <Content>
          <Row align="middle" justify="center" style={{backgroundColor:'#FFFFFF'}} >
            <Col xs={24} sm={24} md={12} lg={12} xl={12} justify="center" style={{ paddingTop:'35px',backgroundColor:'#FFFFFF',display: 'flex', justifyContent:'center'}}>
            <Spin spinning={this.state.loading}>
            <Search style={{width:'360px'}} placeholder="input search text" onSearch={(value)=>{this.onSearch(value)}} enterButton /></Spin>
            </Col>
            <Col align="center" style={{paddingTop:'35px', backgroundColor:'#FFFFFF'}} xs={24} sm={24} md={12} lg={12} xl={12}><img width="450" src={mainImage}/></Col>
          </Row>
          <PopularColleges />
          <Courses />
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
}

export default Home;

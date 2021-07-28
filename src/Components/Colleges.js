import '../App.css';
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import 'antd/dist/antd.css';
import { Layout,Menu,Space,Typography,Divider,Pagination} from 'antd';
import Banner from './Banner.js';
import PopularColleges from './PopularColleges.js';
import Navbar from './Navbar';
import Pagin from './Pagin';

const { Header, Footer, Content } = Layout;
var collegeDataOfCourse = sessionStorage.getItem('College');

const fetchData = ()=> {

  if(collegeDataOfCourse == undefined ||collegeDataOfCourse == null){
      
  }
  else{

  }
}



class Colleges extends Component {

    render() {
      return (
        <>
        <Layout className="layout">
          <Header>
            <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
          </Header>
          <Content>
            <Pagin />
            <PopularColleges />
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
  
  export default Colleges;
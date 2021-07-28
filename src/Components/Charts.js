import ApexCharts from 'apexcharts'
import '../App.css';
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Row, Col, Layout,Menu,Space,Typography,Divider,Pagination} from 'antd';
import Navbar from './Navbar';
import Chart from "react-apexcharts";

const { Header, Footer, Content } = Layout;

var noOfStudents = {
    chart: {
      type: 'bar',
      height: '350px',
      width: '900px',
    },
    series: [{
      name: 'No of Students',
      data: [56,78,64,89,45,59,67,77,84,75]
    }],
    xaxis: {
      categories: ['IT','Computer','Machine Learning','Business','Administration','Humanities','Big Data', 'Electrical','Data Analytics','Civil']
    }
  }
var noOfCourseCollege = {
    chart: {
      type: 'line',
      stroke: {
        curve: 'smooth',
      },
      height: '350px',
      width: '900px',
    },
    series: [{
      name: 'No of Courses',
      data: [6,8,7,9,5,10,11,5,7,6]
    }],
    xaxis: {
      categories: ['London Univ.','IIT','Colorado Univ.','Alabama Univ.','Nagpur Univ.','Cochin Univ.','Hong Kong Univ.', 'NIT','Harvard','MIT']
    }
  }

var noOfCollegesCountry = {
    chart: {
      type: 'donut',
      height: '400px',
      width: '400px',
    },
    series: [56,78,64,89,45,59,67,77,84,75],
    labels: ['India','China','Canada','USA','Germany','Bulgaria','Phillipines', 'Singapore','Poland','Iltaly'],

  }
  var noOfCollegesState = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67, 84, 97, 61, 78, 65, 57],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: false,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['Colorado', 'Washington', 'NYC', 'Florida','Indiana','Alabama','Virginia']
  };
  

class Charts extends Component {

    componentDidMount() {

        var chart1 = new ApexCharts(document.querySelector("#chart1"), noOfStudents);  
        chart1.render();
        var chart2 = new ApexCharts(document.querySelector("#chart2"), noOfCollegesCountry);  
         chart2.render();
        var chart3 = new ApexCharts(document.querySelector("#chart3"), noOfCollegesState);  
         chart3.render();
        var chart4 = new ApexCharts(document.querySelector("#chart4"), noOfCourseCollege);  
         chart4.render();
       }
    render() {
        return(
            <>
            <Layout className="layout">
                <Header>
                    <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
                </Header>
                <Content>
                <Row gutter={[69, 28]} justify="space-around" align="middle">
                  <Col><div className='chart-container' id="chart1"></div></Col>
                  <Col><div className='chart-container2' id="chart2"></div></Col>
                  <Col><div className='chart-container2' id="chart3"></div></Col>
                  <Col><div className='chart-container' id="chart4"></div></Col>
                </Row>
                    <div id="chart">
                    </div>
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


export default Charts;
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Carousel } from 'antd';
import Banner1 from './Images/Banner1.png';
import Banner2 from './Images/Banner2.png';
import Banner3 from './Images/Banner3.png';
import Banner4 from './Images/Banner4.png';
import { render } from '@testing-library/react';

const contentStyle = {
    height: '35%',
    width:'101%'
  };
  
  class Banner extends Component {
      
        render(){
          return(
            <>
              <Carousel autoplay>
                <div>
                  <img style={contentStyle} alt="Image" src={Banner1}/>
                </div>
                <div>
                 <img style={contentStyle} alt="Image" src={Banner2}/>
                </div>
                <div>
                  <img style={contentStyle} alt="Image" src={Banner3}/>
                </div>
                <div>
                  <img style={contentStyle} alt="Image" src={Banner4}/>
                </div>
              </Carousel>
              </>
            );          
        }
      
  } 

  export default Banner;
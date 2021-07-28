import 'antd/dist/antd.css';
import React , { Component} from 'react';
import { Image, Button, Space,Card,Spin } from 'antd';
import { GlobalOutlined, HeartOutlined, PhoneOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom';


const { Meta } = Card;

class CoursesHolder extends Component {
    state = { redirect: null, loading: false}


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (

            <Spin spinning={this.state.loading}>
            <Card
                className="course-card-container"
                style={{ marginTop:'50px', width: '180px', justifyContent: 'center'}}
                cover={
                <img
                    alt="example"
                    src={this.props.image}
                    style={{ width: '100px', height:'100px' }}
                />
                }
                onClick={(course = this.props.text)=>{
                    this.setState({ redirect: null, loading: true });
                    fetch(`https://probe-db-beta.herokuapp.com/getCourses/${course}`)
                    .then((response) => response.json())
                        .then((json) => {
                          console.log(json)
                          sessionStorage.setItem('College',json)
                          this.setState({ redirect: "/colleges", loading: false })
                        });
                  }}
                >
                <Meta
                title={this.props.text}
                />
            </Card>
            </Spin>
        );
    }
}

export default CoursesHolder;
import 'antd/dist/antd.css';
import '../App.css';
import React, { Component } from 'react';
import { Card, Statistic, message } from 'antd';
import { GlobalOutlined, HeartOutlined, PhoneOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

const { Meta } = Card;
const favlist=[];
var stringFavList;

class CardHolder extends Component{
    handleOnClick(title,imageUrl){
        favlist.push({
            title: title,
            imageUrl: imageUrl,
            description:'Institute that caters to pursue a the greater vision',
                });
        stringFavList = JSON.stringify(favlist);
        sessionStorage.setItem('favlist',stringFavList);
        message.success('Added to your favorites list');
    }

    render() {
        return(
            <>
                <Card
                className="dropShadow"
                style={{ marginTop:'50px', width: 280 }}
                cover={
                <img
                    style={{padding:'0px'}}
                    alt="example"
                    src={this.props.image}
                />
                }
                actions={[
                <HeartOutlined onClick={() => this.handleOnClick(this.props.title,this.props.image)} />,
                <GlobalOutlined />,
                <PhoneOutlined />,
                ]}
                >
                <Meta
                title={<Link to={{pathname: "/college",state: { title: this.props.title },}}>
                {this.props.title}</Link>}
                description={this.props.description}
                />
            
            <Statistic title="Feedback" value={1128} prefix={<HeartOutlined />} />
            </Card>
            </>
        );
    }
}

export default CardHolder;
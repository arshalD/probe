import { Card } from 'antd';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  
const { Meta } = Card;

const styles = {
    width: 240,
    marginTop: '45px'
}


class FavouriteCard extends Component{
    render() {
        return(
            <Card
               hoverable
               style={styles}
               cover={<img alt="example" src={this.props.imageUrl} />}
             >
               <Meta title={<Link to={{pathname: "/college",state: { title: this.props.title },}}>
                {this.props.title}</Link>} description={this.props.description} />
             </Card>)
    } 
}

export default FavouriteCard

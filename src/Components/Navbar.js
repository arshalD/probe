import 'antd/dist/antd.css';
import React , { Component} from 'react';
import '../App.css'
import { Menu, Input, Space} from 'antd';
import { HomeOutlined, FilterOutlined, BankOutlined, AudioOutlined, AppstoreOutlined, HeartOutlined  } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const { SubMenu } = Menu;
const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = value => console.log(value);

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
      <Menu style={{margin:'0px 0px 45px 0px', backgroundColor:'#FFFFFF'}} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
    
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to='/'>
          Home
          </Link>
        </Menu.Item>
        <Menu.Item key="screens" icon={<FilterOutlined />}>
          <Link to='/charts'>
          Screens
          </Link>
        </Menu.Item>
        <Menu.Item key="colleges" icon={<BankOutlined />}>
          <Link to='/colleges'>
            Colleges
          </Link>
        </Menu.Item>
        <Menu.Item key="favs" icon={<HeartOutlined />} >
        <Link to='/favourites'>
            My Favs
          </Link>
        </Menu.Item>
  
      </Menu>
      </>
    );
  }
}

export default Navbar;
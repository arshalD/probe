import 'antd/dist/antd.css';
import '../App.css'
import { List, Avatar, Space,Layout,Divider,Typography,Empty,Row,Col } from 'antd';
import Navbar from './Navbar';
import { MessageOutlined, LikeOutlined, StarOutlined,BankOutlined } from '@ant-design/icons';
import React,{ Component} from 'react';
import CardHolder from './CardHolder.js';
import Comments from './Comments'
import FavouriteCard from './FavouriteCard'
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

  var emptyStringFavList = {};

class Favourites extends Component {
    state = {changed: false}

    
        render() {
          if(sessionStorage.getItem('favlist')==null){
              return (
                  <>
                  <Layout className="layout">
                    <Header>
                        <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
                    </Header>
                    <Content style={{minHeight:'80%'}}>
                    <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                            height: 160,
                            }}
                            style={{margin:'40px',padding:'20px',marginBottom:'15em',marginTop:'85px'}}
                            description={
                            <span>
                                You have not yet added any....
                            </span>
                            }
                        />
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
              )
          }
        return (
            <>
            <Layout className="layout">
              <Header>
                <Navbar style={{margin:'0px', backgroundColor:'#FFFFFF'}}/>
              </Header>
              <Content >
                  
                    <List   justify="space-between"
                            grid={{ gutter: 16, column: 4 }}
                            style={{ display: 'flex',minHeight:'100%',justifyContent:'center'}}
                            dataSource={JSON.parse(sessionStorage.getItem('favlist'))}
                            renderItem={item => (
                            <List.Item style={{ margin:'85px'}}>
                                <FavouriteCard  title={item.title} imageUrl={item.imageUrl} description={item.description} />
                            </List.Item>
                            )}
                        />
                  
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


export default Favourites;
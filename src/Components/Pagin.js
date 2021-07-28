import 'antd/dist/antd.css';
import React,{ Component} from 'react';
import '../App.css'
import { List, Avatar, Space, Skeleton, message } from 'antd';
import { MessageOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import college1 from './Images/College1.png'
import college2 from './Images/College2.png'
import college3 from './Images/College3.png'
import college4 from './Images/College4.png'
import college5 from './Images/College5.png'
import college6 from './Images/College6.png'
import college7 from './Images/College7.png'
import college8 from './Images/College8.png'
import college9 from './Images/College9.png'
import college10 from './Images/College10.png'
import college11 from './Images/College11.png'
import college12 from './Images/College12.png'
import college13 from './Images/College13.png'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

const imagesArray =[college1,college2,college3,college4,college5,college6,college7,college8,college9,college10,college11,college12,college13];
const listData = [];
const favlist = [];
var stringFavList;


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class Pagin extends Component {
    state = {
        loading: true, dataFetched: false,
      }; 
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

      componentWillMount() {
        console.log('Fetching')
          fetch(`https://probe-db-beta.herokuapp.com/getCourses/IT`)
          .then((response) => response.json())
              .then((json) => {
                sessionStorage.setItem('College',json)
                this.setState({ loading:false, dataFetched:true })
                this.forceUpdate()
              });
        }

      componentDidMount(){
        var collegeData = sessionStorage.getItem('College');
        console.log(collegeData)
        if(collegeData){
            var parsedCollegeOfCourse = JSON.parse(collegeData).college;
            parsedCollegeOfCourse.forEach((item) => {
                if (item.name =='Tommy Vercetti'){    }
                else{
                    var rand = Math.floor((Math.random()*12)+1)
                listData.push({
                href: 'https://ant.design',
                title: item.name,
                Year: item.year,
                imageUrl: imagesArray[rand],
                description:'Institute that caters to pursue a the greater vision',
                content: `        ${item.city}, ${item.state}, ${item.country}`
                    });
                }
            })            
        }

            this.setState({ loading: true });
            setTimeout(() => {
              this.setState({ loading: false });
            }, 2000);
        
    }
    render() {
    
        const { loading } = this.state;
        return(
            
            <>
             <List
                itemLayout="vertical"
                size="large"
                bordered="true"
                split="true"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                position:"both"
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={!loading &&[
                    <HeartOutlined onClick={() =>this.handleOnClick(item.title,item.imageUrl)} />,
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={!loading &&(
                    <img
                        width={172}
                        alt="logo"
                        src={item.imageUrl}
                    />)
                    }
                 >
                    <Skeleton loading={loading} active avatar>
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<Link to={{pathname: "/college",state: { title: item.title },}}>
                        {item.title}</Link>}
                    description={item.description}
                    />
                    {item.content}
                    </Skeleton>
                </List.Item>
                )}
            />
            </>
        );
    }
}



export default Pagin;
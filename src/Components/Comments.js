import { Comment, Tooltip, List,Row, Col, Statistic } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { LikeOutlined, UserOutlined, AppstoreOutlined } from '@ant-design/icons';
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Review</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

class Comments extends Component {
    render() {
        return (
          <>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
            </Col>
            <Col span={8}>
              <Statistic title="Active Students" value={112893} prefix={<UserOutlined />}/>
            </Col>
            <Col span={8}>
              <Statistic title="Courses" value={15} prefix={<AppstoreOutlined />}/>
            </Col>
          </Row>
            <List
                className="comment-list"
                style={{marginTop:'35px', backgroundColor:'#FFFFFF',padding:'15px'}}
                header={`${data.length} Reviews`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    />
                </li>
                )}
            />
            </>
        );
    }
}

export default Comments;
import 'antd/dist/antd.css';
import React,{ Component} from 'react';
import CardHolder from './CardHolder.js';
import { Row, Col, Divider} from 'antd';
import college1 from './Images/College1.png'
import college2 from './Images/College2.png'
import college3 from './Images/College3.png'
import college4 from './Images/College4.png'

class PopularColleges extends Component {
    render() {
        return (
            <>
            <Divider style={{marginTop:'45px'}} orientation="left">Popular Colleges</Divider>
            <Row justify = 'space-around' gutter={[1,50]}>
            <Col className='gutter-row' ><CardHolder image={college1} title='St Vincent Pallotti' description='Transforming Generation'/></Col>
            <Col className='gutter-row' ><CardHolder image={college2} title='Bailey University' description='Fosters Greatness'/></Col>
            <Col className='gutter-row' ><CardHolder image={college3} title='Amritha Vidyapeetham' description='Satya Eva Jayathe'/></Col>
            <Col className='gutter-row' ><CardHolder image={college4} title='Baskerville Institute' description='Good Education Great Foundation'/></Col>
            </Row>
            </>
        );
    }
}

export default PopularColleges;
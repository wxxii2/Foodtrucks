import React, {useState, useEffect } from 'react'
import { Row, Button } from 'antd'

import Header from '../components/Header.js';
import OrderList from '../components/OrderList.js';

export default function VendorOrders(props) {

    const [target, setTarget] = useState('');
    const [status, setStatus] = useState('outstanding');

    useEffect(() => {
        if (window.location.pathname === '/orders') {
            setTarget('vendor')
        }
    }, [])
    // Onclick of top of vendor order page, required order will be shown
    return ( 
        <div>
            <Header vendor={props.location.state.vendor} />
            <div style={{marginLeft:'3vw', alignItems:'center'}}>
                <Row gutter={6}>
                    <Button onClick={() => setStatus('&status=outstanding')} style={ { background: '#F50057', borderColor: 'Black', marginLeft:'1vw' }} shape='round' >Outstanding</Button>
                    <Button onClick={() => setStatus('&status=completed')} style={ { background: '#F50057', borderColor: 'Black', marginLeft:'1vw' }} shape='round' >Completed</Button>
                    <Button onClick={() => setStatus('&status=fulfilled')} style={ { background: 'White', borderColor: '#F50057', marginLeft:'1vw' }} shape='round' >Fulfilled</Button>
                </Row>
            </div>
            <OrderList id={props.location.state.vendor._id} target={target} status={status} />
        </div>
    )
}

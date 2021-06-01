import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Divider, Drawer, PageHeader , message} from 'antd';
import axios from '../commons/axios.js';
import OrderList from './OrderList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
    let history = useHistory();
    const [drawerVisible, setDrawerVisible] = useState(false)
    const handleDrawerClose = () => setDrawerVisible(false);
    const handleDrawerShow = () => setDrawerVisible(true);
    const [title, setTitle] = useState('');
    const [options, setOptions] = useState([]);
    const [target, setTarget] = useState('');

    // Setile Header for different pages
    useEffect(() => {
        // For customer header
        if (history.location.pathname === "/customer") {
            if (props.customer){
                setTitle('Welcome, ' + props.customer.givenName)
                setTarget('customer');
                setOptions([<Button variant = 'outline-primary' key='0' style={{ borderColor: '#F50057' }} shape={"round"}
                    onClick={() => {
                        history.push('/profile', {
                            customer: props.customer,
                            orders: props.orders
                        });
                    }}>Profile</Button>,
                <Button varient="outline-primary" key="1" style={{ background: '#F50057', borderColor: 'BLack' }} shape={"round"} onClick={handleDrawerShow}>See Orders</Button>])
            }else{
                setTitle('Welcome !');
            }
        
        // For customer profile, only a back button.
        } else if (history.location.pathname === "/profile") {
            setTitle("Profile Settings")
            setOptions([
                <Button variant = 'outline-primary' key='1' style={{ borderColor: '#F50057' }} shape={"round"}
                    onClick={() => history.goBack()}>Back</Button>
            ])

        
        } else if (history.location.pathname === "/vendor") {
            setTitle("Time to earn MONEY, " + props.vendor.name + ".") 
        } else if (history.location.pathname === "/orders") {
            setTitle("Time to earn MONEY, " + props.vendor.name + ".")
            setOptions([<Button variant = 'outline-primary' key='0' style={{ borderColor: '#F50057' }} shape={"round"} onClick={onUnpark}>Unpark</Button>]);
        }else {
            setTitle("Hello!")

        }
    }, [history, props.customer, props.orders]);

    // A header for vendor to unpark their car
    const onUnpark = () => {
        axios.post('/vendor/park/' + props.vendor._id, {
            location: [],
            textAddress: "",
            parked: false
        }).then(response => {
            message.success('You have successfully Unparked!!')
            history.push({ pathname:'/'} )
        })
    }
    
    if (props.customer){
        return (
            <div>
                <PageHeader title={title}
                    extra={options}>
                </PageHeader>
                <Drawer visible={drawerVisible}
                    closable={true}
                    onClose={handleDrawerClose}
                    width={'60vw'}>
                    All orders
                    <Divider />
                    <OrderList id={props.customer.id} target={target} orders={props.orders} />
                </Drawer>
                
            </div>
        )
    }else{
        return (
            <div>
                <PageHeader title={title}
                    extra={options}>
                </PageHeader>               
            </div>
        )       
    }
}

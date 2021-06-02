import { useState, useEffect } from 'react'
import axios from '../commons/axios.js';

import Header from '../components/Header.js'
import LeafletMap from '../components/LeafletMap.js'

export default function CustomerMain(props) {

    const [orders, setOrders] = useState([]);
    const [snacks, setSnacks] = useState([]);
    useEffect(() => {
        // To get all order detail for one customer
        if (props.location.state.customer) {
            axios.get('/order?customer=' + props.location.state.customer.id).then(response => {
                setOrders(response.data.allOrders)
            })
        }
        axios.get('/snack').then(response => {
            setSnacks(response.data.snacks)
        })
       
    }, [props.location.state.position, props.location.state.vendors, props.location.state.customer]); 

    // This is to pass message to other file
    return(
        <>
            <Header
                customer={props.location.state.customer}
                orders={orders} />
            <LeafletMap
                center={props.location.state.position}
                vendors={props.location.state.vendors}
                snacks={snacks}
                customer={props.location.state.customer} />
            
        </>
    
    )
}

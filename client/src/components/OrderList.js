import React, { useEffect, useState } from 'react';
import axios from "../commons/axios.js";
import io from "socket.io-client";
import URLs from "../url";
import { Empty, message } from "antd";

import OrderBrief from './OrderBrief.js';

function Orders(props) {

    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState('')
    const id = props.id
    console.log(props,"Orders-props")

    useEffect(() => {
         if (props.status) {
             setStatus(props.status)
        }
        // fetch all order data
        async function fetchData() {
            console.log(props.target,"props.target");
            console.log(id,"id")
            console.log(status,"status")
            axios.get("/order?" + props.target + "=" + id + status).then(response => {
                if (response.data.success) {
                    setOrders(response.data.allOrders)              
                } else {
                    setOrders([])
                   
                }
            }).catch(error => {
                setOrders([]);
            });         
        }
        fetchData()
    }, [id, orders, props.target, props.status])


    const renderOrders = orders.map((order) => {
        return (
            <OrderBrief key={order._id} order={order} />
        )
    })


    return (
        <>
            {
                (orders.length > 0) ? renderOrders
                    : <Empty 
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                            height: 60,
                        }}
                        description={
                        <span>
                            No Orders Found
                        </span>
                        }
                    />
            }
        </>
    )

}

export default class OrderList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            orders: [],
        }
    }

    // use socket to update the page concurrently
    componentDidMount() {
        const socket = io(`${URLs.socketURL}/socket`, { transports: ['websocket'] });
        
        socket.on("newOrder", (order) => {
            console.log("insertion detected at frontend");
            this.setState({ orders: [...this.state.orders, order]});
        })

        socket.on("updateOrder", (id) => {
            console.log("updated detected at frontend");
            console.log(id)
        })

        socket.on("deleteOrder", (id) => {
            console.log("deletion detected at frontend");
            const updatedOrders = this.state.orders.filter((order) => {
                return order._id !== id;
            })
            this.setState({ orders: updatedOrders});
        });
    }

    render() {
        return(
            <div style={{ height: '100vh', width: '100%', margin: "auto", "marginTop": "5%" }}>
                <Orders id={this.props.id} orders = {this.state.orders} target={this.props.target} status={this.props.status} />
            </div>
        )
    }
}

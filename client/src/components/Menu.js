import React, { useState } from 'react'
import { InputNumber, Modal, Button, message, Card } from 'antd';
import axios from '../commons/axios';

import { Icon } from "leaflet";
import image from '../icons/1.png';
import { Marker } from 'react-leaflet';
import { useHistory } from 'react-router-dom';

const {Meta} = Card;

export default function Menu(props) {

    const vendorIcon = new Icon({
        iconUrl: image,
        iconSize: [40, 40],
    })

    const [modalVisible, setIsModalVisible] = useState(false);
    const [order, setOrder] = useState([]);
    
    const handleModalShow = () =>{
        setIsModalVisible(true);

    } 
    const handleModalClose = () => setIsModalVisible(false);
    const showModal = () => {setIsModalVisible(true)};
    const handleOk = () => {setIsModalVisible(false)};
    const handleCancel = () => {setIsModalVisible(false)};
      
    // Update order.
    const onChange = (index, event) => {
        console.log("onChange")
        let newArray = [...order];
        newArray[index] = event;
        setOrder(newArray);

    }

    let history = useHistory();

    // Submit updated order.
    const onSubmit = () => {
        console.log("onSubmit")
        var total = 0
        // Customer not loginned.
        if (!props.customer) {
            message.error("You need to login first!")
            history.goBack()
        // Submit order and ensure every new oder is recorded into the order list
        } else {
            var submitOrder = []
            for (var i = 0; i < order.length; i++) {
                if(Number.isFinite(order[i])) {
                    submitOrder.push({
                        "name": props.snacks[i].name,
                        "price":props.snacks[i].price,
                        "qty": order[i]
                    })
                }
            }
            // Calculate price
            for (var j=0; j<submitOrder.length; j++){
                let update = total + submitOrder[j].price *submitOrder[j].qty
                total = update
            }
            // If order placed does not have snack
            if (submitOrder.length === 0) {
                setIsModalVisible(false)
                message.error("You should order at least one snack")
            // else the order will be re-created and save into database
            } else {
                axios.post('/order/create', {
                    customer: props.customer.id,
                    vendor: props.vendor.id,
                    snacks: submitOrder,
                    total: total
                }).then(response => {
                    if (response.data.success) {
                        message.success("Order has been placed")
                        setIsModalVisible(false)
                    } else {
                        message.error("Order has not been placed!")
                    }   
                })
            }

        }
        
    }

    return (
        <>
            <Marker key={props.id} position={props.position} icon={vendorIcon}
                eventHandlers={{ click: handleModalShow }}>
            </Marker>
            <Modal title="Basic Modal" title={'Menu of '+props.vendor.name} visible={modalVisible} onOk={onSubmit} onCancel={handleCancel} closeButton >

                {props.snacks.map((snack, index) => (
                    <Card
                    hoverable
                    style={{ width: 240,marginTop:20 }}
                    cover={<img alt="example" src={snack.picture} />} key={snack._id}
                    >
                        <Meta title={snack.name + " $" + snack.price} />
                        <InputNumber key={snack._id} min={0} style={{ marginLeft: "80%"}} onChange={e => onChange(index, e)}></InputNumber>
                    </Card>

                ))}
            </Modal>
        </>
    
    )
}

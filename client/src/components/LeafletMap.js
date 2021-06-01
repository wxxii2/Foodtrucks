import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Form, Modal } from 'react-bootstrap'
import { message} from 'antd';

import Menu from './Menu.js';
import axios from '../commons/axios.js';

export default function LeafletMap(props) {

    let history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [address, setAddress] = useState('');

    const [position, setPosition] = useState(props.center)
    console.log(position,"position")
    const eventHandlers = useMemo(
        (e) => ({
            dragend(e) {
                setPosition(e.target.getLatLng())
            },
            click() {
                handleShow()
            }
        }),
        [],
    )
    
    // To make vendor able to park on the map
    const onPark = () => {
        console.log("leafletmap-34 " + props.vendor._id +"!")
        axios.post('/vendor/park/' + props.vendor._id, {
            location:[position.lat, position.lng],
            textAddress:address,
            parked: true
        }).then(response => {
            message.success('You have successfully parked at here')
            history.push({ pathname:'/orders', state: { vendor: props.vendor } })
        })
    }
    
    // Set a marker for customer so they know where they are
    const renderCustomerMarker = (
        <Marker position={props.center} iconUrl={"https://img-premium.flaticon.com/png/512/4108/4108831.png?token=exp=1"} >
        <Popup>
            Your Curent location.
        </Popup>
        </Marker>
    )
    
    // Set vendor marker for customer to let customer know where their five nearest vendor are
    const renderFiveVendor = props.vendors.map((vendor) => {
        return (
            <Menu key={vendor.id} position={vendor.location} snacks={props.snacks}
                vendor={vendor} customer={props.customer}/>
        )
    })

    // Vendor marker, they can drap to select place to park.(to be more precise of place)
    const renderVendorMarker = (
        <Marker 
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}>
        </Marker>
    )
    
    return (
        <div>
            <Modal show={show} onHide={handleClose} style={{ marginTop: '2vh'}}>
                <Modal.Header closeButton style={{ background: '#F50057', borderColor: 'Black' }} >
                    <Modal.Title>Vendor Park</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Text parking address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address"
                                    onChange={e => setAddress(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Tell us where you are pls
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button varient="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={onPark}>
                        Completely ready for business!
                    </Button>
                </Modal.Footer>
            </Modal> 
            <Map center={props.center} zoom={18} scrollWheelZoom={false}
                style={{ height: "90vh" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    
                />
                {(history.location.pathname === "/customer" ? renderCustomerMarker : <></>)}
                {(history.location.pathname === "/customer" ? renderFiveVendor : <></>)}
                {(history.location.pathname === "/vendor" ? renderVendorMarker : <></>)}                
            </Map>
        </div>
    )
}

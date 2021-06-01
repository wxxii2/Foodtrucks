import React from 'react'
import { InputNumber, Card, notification, message, Rate, Divider, Input ,Badge } from 'antd';
import { Modal, Button } from 'react-bootstrap';

import{ EyeOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';

import CountUp from './CountUp.js';
import axios from '../commons/axios';


const{ TextArea } = Input;
const{ Meta } = Card;

export default class OrderBrief extends React.Component{
    constructor(props){
        super();
        this.state = {
            menu:[],
            order:[],
            modalVisible: false,
            editModalVisible:false,
            modalBody:<></>,
            diff: '',
            ratings: 0,
            comment: ""
        }
    }
    handleClose = () => this.setState({modalVisible: false});
    handleShow = () => this.setState({modalVisible: true});

    handleEditClose = () => this.setState({editModalVisible: false});
    handleEditShow = () => this.setState({editModalVisible: true});

    onChange = (index, event) => {
        let newArray = [...this.state.order];
        newArray[index] = event;
        this.setState({ order: newArray })
    }
    // Calculate time changed
    tick() {
        let now = new Date().getTime()
        let upd = Date.parse(this.props.order.updatedAt)
        this.setState({diff: ((now - upd) / 60000) })
    }
    // updates this DOM every second
    componentDidMount() {
        axios.get('/snack').then(response => {
            this.setState({ menu: response.data.snacks })
        })
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    // Remove the timer and let the interval start again
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    handleShowOrderDetail = () => {
        console.log(this.props.order)
    }

    ratingsChange = (value) => {
        console.log(value)
        this.setState({ ratings: value});
    }

    commentChange = (value) => {
        this.setState({ comment: value});
    }

    // Check the business rule to ensure the edition of order is up to specificaton
    handleEditOrder = () => {
        if (this.props.order.status === "outstanding" && this.state.diff <= 10) {
            this.setState({ editModalVisible: true});
        }
        if (this.props.order.status === "fulfilled") {
            notification.open({
                message:'Order is ready to be collected!',
                description:'You cannot make any changes to a fulfilled order. You can rate your experience after picking up the snacks.',
                duration:3
            })
        }else if (this.props.order.status === "outstanding" && this.state.diff > 10){
            notification.open ({
                message:'Order is being processed!',
                description :'You can only change your order within 10 minutes after placing the order.',
                duration :3
            });
        }else {
            console.log(this.props.order)
            this.setState({ editModalVisible: true});
        }
    }
    // Allow vendor to mark the order as fulfilled and completed and calculate total price.
    // A discount badge will appear if the order is fulfilled after 15 minutes.
    onOrderMark = () => {
        var statusToBeUpdated, discount, total
        var total = this.props.order.total
        // mark outstanding order to fulfilled and check whether discount applies.
        if (this.props.order.status === "outstanding"){
            statusToBeUpdated = "fulfilled"
            if (this.state.diff > 15) {
                discount = true
                total = total * 0.8
            } else {
                discount = false
            }
            axios.post('/order/'+ this.props.order._id +'/update', {
                total: total,
                discount: discount,
                status: statusToBeUpdated
            }).then(response => {
                if (response.data.success) {
                    message.success("Order has been updated")
                    this.setState({ editModalVisible: false});
                } else {
                    message.error("Order updating errored!")
                }   
            })
        // Mark fulfilled order to completed order
        } else if (this.props.order.status === "fulfilled"){
            statusToBeUpdated = "completed"
            axios.post('/order/'+ this.props.order._id +'/update', {
                status: statusToBeUpdated
            }).then(response => {
                if (response.data.success) {
                    message.success("Order has been updated")
                    this.setState({ editModalVisible: false });
                } else {
                    message.error("Order updating errored!")
                }   
            })
        // if the order is already completed, it will remind the vendor
        } else {
            notification.open({
                message: 'Order is already completed!',
                description: 'Congratulations! You have completed this order!', 
                duration: 3
            });
        }

    }

    // All customer to resubmit a new order by editing exist order
    onOrderSubmit = () => {
        var submitOrder = []
        for (var i = 0; i < this.state.order.length; i++) {
            if(Number.isFinite(this.state.order[i])) {
                submitOrder.push({
                    "name": this.state.menu[i].name,
                    "qty": this.state.order[i]
                })
            }
        }
        if (submitOrder.length === 0) {
            this.setState({ editModalVisible: false});
            message.error("You should place at least one snack")

        } else {
            axios.post('/order/'+ this.props.order._id +'/update', {
                status:"outstanding",
                snacks: submitOrder
            }).then(response => {
                if (response.data.success) {
                    message.success("Order has been updated")
                    this.setState({ editModalVisible: false});
                } else {
                    message.error("Order updating errored!")
                }   
            })
        }  
    }
    // Allow customer to comment an order
    onCommentSubmit = () => {
        axios.post('/order/'+ this.props.order._id +'/update', {
            comment: this.state.comment,
            ratings: this.state.ratings
        }).then(response => {
            if (response.data.success) {
                message.success("Order has been commented")
                this.setState({ editModalVisible: false});
            } else {
                message.error("Order commenting errored!")
            }   
        })
    }

    renderActions = () =>{
        
        // Allow customer to edit and order according to the business rule
        if(window.location.pathname === '/customer') {
            return (
                [
                    <EyeOutlined onClick={() => this.handleShow()} />,
                    <EditOutlined onClick={() => this.handleEditOrder()} />
                ]
            )
        // For vendor part they can only view and mark the order as fulfilled or complete
        } else if (window.location.pathname === '/orders') {
            return (
                [
                    <EyeOutlined onClick={() => this.handleShow()} />,
                    <EditOutlined onClick={() => this.onOrderMark()} />  
                ]
            )
        }
    }

    // This is the modal for customer to edit order it will show if customer click the pencil button
    renderEditModalContent = () => {
        if (this.props.order.status === "outstanding"){
            return(
                <>
                <Modal.Header closeButton style={{ background: '#F50057', borderColor: 'Black' }} >
                        <Modal.Title>Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.menu.map((snack, index) => (
                            <Card cover={<img alt="example" src={snack.picture} />} style={{marginBottom:"2vh"}} size={'small'} key={snack._id}>
                                <Meta
                                    title={snack.name + "   $" + snack.price}
                                />
                                <InputNumber key={snack._id} min={0} defaultValue={0} style= {{marginLeft:"80%"}} onChange={e => this.onChange(index,e)} />
                            </Card>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={() => this.onOrderSubmit()}>
                        Submit
                    </Button>
                </Modal.Footer>
                </>
            )
        } else{
            return(
                <>
                <Modal.Header closeButton style={{ background: '#F50057', borderColor: 'Black' }} >
                        <Modal.Title>{"OrderId:" + this.props.order.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Vendor:{this.props.order.vendor.name}</p>
                        <p>Snacks:{this.props.order.snacks.map((snack) => <li key= {snack.name}>{snack.name} - qty: {snack.qty}</li>)}</p>
                        <Divider>Rate Your Experience</Divider>
                        <p>Rating:</p><Rate onChange={(e) => this.ratingsChange(e)} />
                        <Divider></Divider>
                            <p>Comment</p><TextArea rows={4} onChange={(e) => this.commentChange(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={() => this.onCommentSubmit()}>
                            Submit
                    </Button>
                    </Modal.Footer>
                </>
            )
        }

    }


    render() {
        return(
            <>
                <Modal show = {this.state.modalVisible} onHide = {() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{"OrderId:" + this.props.order._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Vendor:{this.props.order.vendor.name}</p>
                        <p>Snacks:{this.props.order.snacks.map((snack) => <li key= {snack.name}>{snack.name} - qty: {snack.qty}</li>)}</p>
                        {(this.props.order.discount) ? <p>Total: {this.props.order.total*1.25}*0.8 = {this.props.order.total}</p> :<p>Total:{this.props.order.total}</p>}
                        {(this.props.order.ratings) ? <> <p>Ratings: </p> <Rate disabled value={this.props.order.ratings} /> </> : <></> }
                        {(this.props.order.comment) ? <> <p>Comment: </p> <>{this.props.order.comment}</> </> : <></> }
                    </Modal.Body>
                </Modal>
                <Modal show = {this.state.editModalVisible} onHide = {() => this.handleEditClose()}>
                    {this.renderEditModalContent()}
                </Modal>
                {this.props.order.discount ? 
                    <Badge.Ribbon text = "order has been discounted">
                        <Card style={{ margin: "10px"}}
                            actions={this.renderActions()}>
                            <Meta title={this.props.order.vendor.name + "  -  " + this.props.order.status} />
                            {(this.props.order.status === "fulfilled") ? "order is fulfilled"
                                :(this.props.order.status === "completed") ? "order is completed"
                                    :<CountUp updatedAt={this.props.order.updatedAt} />}
                        </Card>
                    </Badge.Ribbon>
                    :
                    <Card style= {{ margin: "10px"}}
                        actions={this.renderActions()}>
                        <Meta title = {this.props.order.vendor.name + "  -  " + this.props.order.status} />
                        {(this.props.order.status === "fulfilled") ? "order is fulfilled"
                            :(this.props.order.status === "completed") ? "order is completed"
                                :<CountUp updatedAt = {this.props.order.updatedAt} />}
                    </Card>}
            </>
        )
    }
}
import React, { useState, useEffect } from 'react';
import { Jumbotron, OverlayTrigger, Tooltip, Modal, Form } from 'react-bootstrap';
import { message, Typography } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import axios from '../commons/axios.js';
import { Button } from 'antd';
import imagebg from '../static/login/bg.png';
import imagesmallcar from '../static/login/smallcar.png';

const { Link } = Typography;

function App(props) {
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');

    const [lat, setLat] = useState('-37.80714581767628'); 
    const [lng, setLng] = useState('144.96670319946628');
    const [vendors, setVendors] = useState([]); 

    const [modal, setModal] = useState('');

    const handleClose = () => setShow(false);
    // function getMapPosition(){
      
    //  }
    // getMapPosition()
    /**
    *Select appear modal for customer and vendor
    */
    const handleShow = (e) => {
      if (e.target.outerText === "Customer") {
        setModal('customer')
      } else {
        setModal('vendor')
      }
      setShow(true)
    };
    
    /**
    * Get geolocation from website
    */ 
  //  function aa(){
  //   navigator.geolocation.getCurrentPosition(function (position) {
        
  //     setLat(position.coords.latitude)
  //     setLng(position.coords.longitude)
  //       axios.get('/vendor?lat=' + position.coords.latitude + '&lng=' + position.coords.longitude).then(response => {
  //         setVendors(response.data.vendors)
  //     },function (err) {
  //       alert(err.code);
  //     })
  //   });
  //  }
  //  aa()
    
     
    
    // useEffect(() => {
    //   axios.get('/vendor?lat=' + lat + '&lng=' + lng).then(response => {
    //     setVendors(response.data.vendors)
    //   },function (err) {
    //     alert(err.code);
    //   })
    // }, [lat, lng])

    // For customer login
    const onCustomerLogin = () => {
        axios.post('/customer/login', { email: email, password: password }).then(response => {
            if (response.data.success) {
              // setInterval(()=>{
              //   getMapPosition()
              // },1000)              
              message.success('You have logged in successfully :)')
              props.history.push('/customer', {
                customer: response.data.customer,
                vendors: vendors,
                position: [lat, lng]
              });
            } else {
              message.error(response.data.error)
            }
        }).catch(error => {
            console.log(error)
            message.error('You may enter the wrong password :(')
        })
    }

  // For customer click the register button
  const onCustomerRegister = () => {
    axios.post('/customer/register', { email: email, password: password }).then(response => {
        if (response.data.success) {              
          message.success('You have registered successfully :)')
          props.history.push('/customer', {
                  customer: response.data.customer,
                  vendors: vendors,
                  position: [lat, lng]
              });
          } else {
              message.error(response.data.error)
          }
      }).catch(error => {
        console.log(error)
        message.error('The email was registered, try to use another one :(')
      })    
  }
  // For vendor login if they click the login button
  const onVendorLogin = () => {
    axios.post('/vendor/login', { name: name, password: password }).then(response => {
        if (response.data.success) {
            message.success('You have logged in successfully :)')
            console.log("App-92 " + response.data.vendor._id +"!")
            props.history.push('/vendor', {
                vendor: response.data.vendor,
                position: [lat, lng],
                vendors:[]
            });
        } else {
            message.error(response.data.error)
        }
    }).catch(error => {
      setShow(false);
        console.log(error.response.data.error)
        message.error('You may enter the wrong password :(')
    })
}

  // For vendor click the 
  const onVendorRegister = () => {
    axios.post('/vendor/register', { name: name, password: password }).then(response => {
        if (response.data.success) {              
          message.success('You have registered successfully, start your business :)')
          props.history.push('/vendor', {
              vendor: response.data.vendor,
              position: [lat, lng],
              vendors:[]
              });
          } else {
              message.error(response.data.error)
          }
      }).catch(error => {
        console.log(error)
        message.error('The name was registered, try to use another one :(')
      })    
  }


    const onSkip = () => {
      props.history.push('/customer', {
        position: [lat, lng],
        vendors: vendors
      });
    }
    const customerModal = (
      <>
        <Modal.Header closeButton style={{ background: '#F50057', borderColor: 'Black' }} >
          <Modal.Title>Customer Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                onChange={e => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We promise that we shall never send un-related emails to you nor share your email address with third party.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                onChange={e => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
          <Link onClick={onSkip}>Sign in later</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button varient="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={onCustomerLogin}>
            Login
            </Button>
          <Button varient="primary" style={{ background: 'White', borderColor: 'Black' }} shape="round" onClick={onCustomerRegister}>
            Register
          </Button>
        </Modal.Footer>       
      </>
    )

    const vendorModal = (
      <div>
        <Modal.Header closeButton style={{ background: '#F50057', borderColor: 'Black' }} >
              <Modal.Title>Vendor Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                 <Form.Control type="email" placeholder="Enter name"
                   onChange={e => setName(e.target.value)} />
                 <Form.Text className="text-muted">
                 </Form.Text>
                </Form.Group>
               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                   onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
               </Form>
              </Modal.Body>
             <Modal.Footer>
                <Button varient="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={onVendorLogin}>
                  Login
                </Button>
                <Button varient="primary" style={{ background: 'White', borderColor: 'Black' }} shape="round" onClick={onVendorRegister}>
                  Register
                </Button>
          </Modal.Footer>
      </div>
    )

    return (
      <div className={'login-page'} style={{ width: "100%",height:'calc(100vh)', backgroundImage:'url('+imagebg+')' ,backgroundSize:'100% calc(100vh)',backgroundRepeat:'no-repeat',position:'relative' }}>
        <Modal show={show} onHide={handleClose} style={{ marginTop: '2vh'}}>
          {(modal === "customer") ? customerModal : vendorModal}
        </Modal>
        <Jumbotron style={{background: "transparent",position:'absolute',top:'40%',right:'20%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h3 style={{textAlign:'center',}}>Welcome to</h3>
            <h1 style={{textAlign:'center',color:'rgb(247,64,129)',fontSize:'50px'}}>FoodTruck</h1>
            <p style={{textAlign:'center',fontSize:'18px'}}>
              Discover our best food trucks
            </p>
            <div style={{width:'200px',height:'150px',position:'absolute',top:'-180px',borderRadius:'50%',backgroundColor:'#eee',display:'flex',justifyContent:'center'}}>
              <img src={imagesmallcar} style={{width:'65%',height:'80%',marginTop:'20px'}} />
            </div>
            <p>
                <Button variant="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={handleShow}>Customer</Button>
                <Button variant="outline-primary" style={{ background: 'White', borderColor: 'Black', marginLeft:'1vw'}} shape="round" onClick={handleShow}>Vendor</Button>
            </p>
        </Jumbotron>
        </div> 

        
    )
}
export default App;

import React, { useState } from 'react'
import { Button, Form, Input, Divider, Typography, message } from 'antd';
import axios from '../commons/axios.js';
import Header from '../components/Header.js';

export default function CustomerProfile(props) {
    const [form] = Form.useForm();
    const { Link } = Typography;

    const [givenName, setGivenName] = useState(props.location.state.customer.givenName);
    const [familyName, setFamilyName] = useState(props.location.state.customer.familyName);
    const [email, setEmail] = useState(props.location.state.customer.email);
    const [password, setPassword] = useState(props.location.state.customer.password);
    const [disable, setDisable] = useState(true);

    const enablePassword = () => {
        if (disable) { setDisable(false) }
        else { setDisable(true) }
    }

    // Function used if the customer click the submit button for edit profile
    const onSubmit = () => {
        const updateBody = {
            "givenName": givenName,
            "familyName": familyName,
            "email": email,
            "password": password
        }
        axios.post('/customer/update', updateBody).then(response => {
            if (response.data.success) {
                message.success("Your information has been successfully updated")
            } else {
                message.error(response.data.error)
            }
        })
    }


    return (
        <>
            <Header />
            <div style={{ width: '40%', margin: 'auto' }}>
                <Form form={form} layout="vertical">
                    <Form.Item label="Given Name">
                        <Input placeholder='given name' defaultValue={props.location.state.customer.givenName}
                            onChange={e => setGivenName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Family Name">
                        <Input placeholder="family name" defaultValue={props.location.state.customer.familyName}
                            onChange={e => setFamilyName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="email" defaultValue={props.location.state.customer.email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Item>
                    <Divider >Click <Link onClick={enablePassword} target="_blank">
                        here
                    </Link> to change password</Divider>
                    <Form.Item label="Password">
                        <Input placeholder="password"
                            type="password"
                            defaultValue={props.location.state.customer.password}
                            disabled={disable}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" style={{ background: '#F50057', borderColor: 'Black' }} shape="round" onClick={onSubmit}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
    
}



    

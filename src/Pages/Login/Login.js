import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRaf = useRef('');
    const passwordRaf = useRef('');
    const navigate = useNavigate('');

    const handelSubmite = event => {
        event.preventDefault();
        const email = emailRaf.current.value;
        const password = passwordRaf.current.value;
        console.log(email, password);
    }
    const navigateRegister = event => {
        navigate('/register')

    }
    return (
        <div className='px-5 w-50 mx-auto'>
            <h2 className='mx-auto'>Login Here</h2>

            <Form onSubmit={handelSubmite}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRaf} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRaf} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>You can Register Here: <span onClick={navigateRegister}>pleases Register</span></p>
        </div>
    );
};

export default Login;
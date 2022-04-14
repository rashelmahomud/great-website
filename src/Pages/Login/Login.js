import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin/SocialLogin';


const Login = () => {

    let errorElements;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        Navigate('/home');
    }

    if (error) {
        errorElements =
            <div>
                <p>Error: {error?.message}</p>
            </div>
    }
    const emailRaf = useRef('');
    const passwordRaf = useRef('');
    const navigate = useNavigate('');


    const handelSubmite = event => {
        event.preventDefault();
        const email = emailRaf.current.value;
        const password = passwordRaf.current.value;
        signInWithEmailAndPassword(email, password)
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
                <Button className='w-50 my-3 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElements}
            <p>You can Register Here: <Link to='/register' className='fw-bold cursor-pointer' onClick={navigateRegister}>pleases Register</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;
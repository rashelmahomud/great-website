import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate('');

    const navigateLogin = () => {
        navigate('/login')

    }
    if (user) {
        navigate('/home');
    }
    const handelRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.trams.checked;
        if(agree){

            createUserWithEmailAndPassword(email, password, name);
        }

       
    }
    return (
        <div className='text-center mt-3 w-50 mx-auto'>
            <h3>This is a regestations page!</h3>
            <form onSubmit={handelRegister}>
                <input type="text" name="name" id="" placeholder='You Name:' required />
                <input type="email" name="email" id="" placeholder='Email:' required />
                <input type="password" name="password" id="" placeholder='password' required /> <br />

                <div className='my-3'>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="trams" id="trams" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="trams">Accpets great Website trams and condition</label> <br />
                </div>

                <Button disabled={!agree} variant="primary" type="submit">
                    Sign In
                </Button>
            </form>
            <p>You can Register Here: <Link to='/login' className='fw-bold cursor-pointer' onClick={navigateLogin}>Already have an Account</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
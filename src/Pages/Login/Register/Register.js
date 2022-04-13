import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate('');

    const navigateLogin = event => {
        navigate('/login')

    }
    return (
        <div className='text-center mt-3 w-50 mx-auto'>
            <h3>This is a regestations page!</h3>
            <form>
                <input type="text" name="Name" id="" placeholder='You Name:' required />
                <input type="email" name="Email" id="" placeholder='Email:' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            <p>You can Register Here: <Link to='/login' className='fw-bold cursor-pointer' onClick={navigateLogin}>Already have an Account</Link></p>

        </div>
    );
};

export default Register;
import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const { servicesId } = useParams();
    const [service] = useServiceDetails(servicesId);

    const handelOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            servicesId:servicesId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                alert('you are sessful!!')
                event.target.reset();
            }
        })

        
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Pleases Order: {service.name}</h2>
            <form onSubmit={handelOrder}>
                <input className='w-100 mb-3' value={user?.displayName} type="text" name='name' placeholder='Enter Your Name-' required disabled />
                <br />
                <input className='w-100 mb-3' value={user?.email} type="email" name='email' placeholder='Enter Your Email-' required disabled />
                <br />
                <input className='w-100 mb-3' value={service.name} type="text" name='service' placeholder='Enter Your Service-' required disabled />
                <br />
                <input className='w-100 mb-3' type="text" name='address' placeholder='Enter Your Address-' required />
                <br />
                <input className='w-100 mb-3' type="number" name='phone' placeholder='Enter Your Phone-' required />
                <br />
                <input className='fw-bold bg-primary text-white rounded-pill' type="submit" value="Order Now" />
            </form>
        </div>
    );
};

export default CheckOut;
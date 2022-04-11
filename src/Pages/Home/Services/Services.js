import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServces] = useState([]);

    useEffect( () => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServces(data))
    }, []);

    return (
        <div className='serbox-box'>
            
            {
                services.map(service => <Service 
                key={service.id}
                service = {service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
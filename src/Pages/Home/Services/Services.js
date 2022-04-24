import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/greatService')
            .then(res => res.json())
            .then(data => setServces(data))
    }, []);

    return (
        <div id="services" className='serbox-box mt-4'>

            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/greatService/${servicesId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    } ,[])

    const { servicesId } = useParams();
    return (
        <div>
            <h2>Welcome To Service Books:{service.name}</h2>
        </div>
    );
};

export default ServiceDetails;
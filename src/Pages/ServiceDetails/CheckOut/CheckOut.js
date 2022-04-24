import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const CheckOut = () => {
    const { servicesId } = useParams();
    const [service] = useServiceDetails(servicesId);
    
    return (
        <div>
            <h2>Pleases Order: {service.name}</h2>
        </div>
    );
};

export default CheckOut;
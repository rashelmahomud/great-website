import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, picture,comment} = service;
    const navigate= useNavigate();
    const handelerbtn = (id) => {
        navigate(`/services/${id}`);
    }

    return (
        <div className='single-box'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>{comment}</p>
            <button onClick={ () => handelerbtn(id)} className='service-box-btn'>Book:{name}</button>
        </div>
    );
};

export default Service;
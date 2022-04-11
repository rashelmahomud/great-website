import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, picture,comment} = service;
    return (
        <div className='single-box'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>{comment}</p>
            <button className='service-box-btn'>Book:{name}</button>
        </div>
    );
};

export default Service;
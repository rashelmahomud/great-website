import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, picture,comment} = service;
    const navigate= useNavigate();
    const handelerbtn = (id) => {
        navigate(`/services/${id}`);
    }

    return (
        <div className='single-box'>
            <PageTitle title='service'></PageTitle>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>{comment}</p>
            <button onClick={ () => handelerbtn(_id)} className='service-box-btn'>Book:{name}</button>
        </div>
    );
};

export default Service;
import React from 'react';
import './Experts.css';

import expert1 from '../../../../image/experts/expert-1.jpg';
import expert2 from '../../../../image/experts/expert-2.jpg';
import expert3 from '../../../../image/experts/expert-3.jpg';
import expert4 from '../../../../image/experts/expert-4.jpg';
import expert5 from '../../../../image/experts/expert-5.jpg';
import expert6 from '../../../../image/experts/expert-6.png';
import Expert from '../Expert';
import { Link } from 'react-router-dom';


const experts = [
    { id: 1, name: 'will Simulat', img: expert1 },
    { id: 2, name: 'Simulate', img: expert2 },
    { id: 3, name: 'well Simulate', img: expert3 },
    { id: 4, name: 'Rashel mahomud', img: expert4 },
    { id: 5, name: 'Tohi Khan', img: expert5 },
    { id: 6, name: 'Devil Simulate', img: expert6 }
]


const Experts = () => {
    return (
        <div id='experts'>
            <h1 className='text-center mt-5'>Exertes page!</h1>
            <div className='container'>

                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    ></Expert>)
                }



            </div>
        </div>
    );
};

export default Experts;
import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='row'>
            <PageTitle title='Expert'></PageTitle>
            <div className='mt-5 '>
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">{name}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;
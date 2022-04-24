import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
       const url = "http://localhost:5000/greatService";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Your Service Here!</h2>
            <form className='m-5 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Your Name' className='mt-3' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Writen your text-' className='mt-3' {...register("comment")} />
                {/* <input placeholder='Price' className='mt-3' type="number" {...register("price")} /> */}
                <input placeholder='Img URL' className='mt-3' type="text" {...register("picture")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
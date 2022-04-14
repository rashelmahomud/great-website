import React from 'react';
import google from '../../../../image/social/google.jpg';
import Facebok from '../../../../image/social/facebook.jpg';
import Github from '../../../../image/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p>Error: {error?.message} {error1?.message}</p>
            </div>
    }
    
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <div><p className='mx-2'>or</p></div>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 my-2'>
                    <img style={{ height: '30px' }} className='w-25 mx-3' src={google} alt="" />
                    Google Sign In
                </button> <br />
                <button className='btn btn-primary w-50 my-2'>
                    <img style={{ height: '30px' }} className='w-25 mx-3' src={Facebok} alt="" />
                    Facebok Sign In
                </button> <br />
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50'>
                    <img style={{ height: '30px' }} className='w-25 mx-3' src={Github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
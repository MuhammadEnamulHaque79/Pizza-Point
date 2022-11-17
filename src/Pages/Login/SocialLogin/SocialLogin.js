import React from 'react';
import google from '../../../images/logo/google.png';
import facebook from '../../../images/logo/facebook.png';
import github from '../../../images/logo/github.png';
import {
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
    };
    if(loading || loading1 || loading2){
        return <Loading></Loading>
    }

    if (user || user1 || user2) {
        navigate('/home');
    };


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    style={{ borderRadius: '8px' }} className='btn btn-success w-50 d-block mx-auto mb-2'>
                    <img src={google} alt="" />
                    <span className='mx-2'>CONTINUE WITH GOOGLE</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    style={{ borderRadius: '8px' }} className='btn btn-primary w-50 d-block mx-auto mb-2'>
                    <img src={github} alt="" />
                    <span className='mx-2 text-white'>CONTINUE WITH GITHUB</span>
                </button>

                <button
                    onClick={() => signInWithFacebook()}
                    style={{ borderRadius: '8px' }} className='btn btn-secondary w-50 d-block mx-auto'>
                    <img src={facebook} alt="" />
                    <span className='mx-2  text-white'>CONTINUE WITH FACEBOOK</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;
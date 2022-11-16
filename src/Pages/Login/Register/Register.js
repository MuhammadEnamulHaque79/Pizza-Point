import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }

    if(user){
       
        console.log('user',user);
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // const agree=event.target.terms.checked;
     

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name});
        // alert('Updated profile');
        console.log('Updated profile');
        navigate('/home');
     
        

    };



    return (
        <div className='register-form'>
            <h3 className='text-center text-primary mt-2'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`${agree ? 'text-primary' : 'text-danger'}`} style={{ marginLeft: '10px', marginTop: '3px' }} htmlFor="terms and conditions">Accept Pizza Point's terms and conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 d-block mx-auto text-white mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Register;




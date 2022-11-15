import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword
        // user,
        // loading,
        // error,
      ] = useCreateUserWithEmailAndPassword(auth);

      
      
      const navigate = useNavigate();
      const navigateToLogin = () => {
          navigate('/login');
      }
    const handleRegister = (event) => {
        event.preventDefault();
    // const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email,password);



    }

    return (
        <div className='register-form'>
            <h3 className='text-center text-primary mt-2'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='btn btn-primary w-50 d-block mx-auto text-white' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Register;
               
                
                

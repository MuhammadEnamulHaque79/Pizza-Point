import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
        // loading,
        // error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigateToRegister = (event) => {
        navigate('/register');
    }

    if (user) {
        // navigate('/home');
        navigate(from, { replace: true });
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-primary mt-2'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary w-50 mx-auto d-block my-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Pizza Point? <Link to="/register" className='text-primary text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to="/register" className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
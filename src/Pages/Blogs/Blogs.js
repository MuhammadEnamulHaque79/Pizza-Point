import React from 'react';
import './Blogs.css';



const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h3 className='text-center'>My Blogs Q & A !!</h3>
            <div className='blogs-container1'>

                <h5>13.1 Write difference between authorization and authentication?</h5>

                <p style={{ marginLeft: '15px' }}><i class="fa-solid fa-pen-to-square"></i>
                    Authentication is a process by which you provide proofs that you are who you claim to be. Authorization is granting you valid permissions
                </p>

            </div>

            <div className='blogs-container2'>
                <h5>13.2 Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p style={{ marginLeft: '15px' }}><i class="fa-solid fa-pen-to-square"></i>
                    Firebase help me develop high-quality apps, grow your user base,
                    The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>

            </div>

            <div className='blogs-container3'>

                <h5>13.3 What other services does firebase provide other than authentication?</h5>
                <p style={{ marginLeft: '15px' }}><i class="fa-solid fa-pen-to-square"></i>
                    There are many services which Firebase provides, Most useful of them are:
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li> Cloud Messaging.</li>
                    </ul>
                    
                </p>
                    
            </div>
        </div>
    );
};

export default Blogs;
                    
                    
                    
                    
                    
                   

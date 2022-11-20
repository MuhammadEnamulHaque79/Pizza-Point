import React from 'react';
import './About.css';

const About = () => {
    const targets = [
        { id: 1, name: 'Muhammad Enamul Haque', img: 'https://i.ibb.co/XWPpqpT/7474-n.jpg' }
    ]
    return (
        <div>
            <h4 className='text-center text-secondary mt-3'>Myself</h4>
            <div className='myself-container'>
                {
                    targets.map(target =>
                        <div className='text-center'>
                            
                            <img src={target.img} alt="" />
                            <p style={{ textAlign: 'justify', marginLeft: '10px' }}>{target.goal}</p>
                            <h4 className='mb-3'>{target.name}</h4>

                        </div>

                    )
                }

                <p style={{textAlign: 'justify'}}>My goal is to become a well-known web developer like my best commitment programming hero team,For this reseaon, I will to sacrifice any comport,also no sacrifice hard-work,didecation and promise.No compromise time spending unless any job.I will make any sacrifices necessary to achieve my goal. For example, staying away from social media, chatting unnecessarily with friends and monkeys, enjoying comfort and luxury etc.
                    I will make any sacrifices necessary to achieve my goal. For example, staying away from social media, chatting unnecessarily with friends and monkeys, enjoying comfort and luxury etc.
                    On the other hand, I will hold on to my hard work, dedication, and mental morale, no matter what kind of obstacles come my way.
                    And I believe I can, God willing. Because, commitment like Progami Hero got a platform. I think it is possible to bring changes in the state structure with their cooperation.
                    So I can reach my goal.To achieve my goal I am ready any dedication,hard work and sacrifice;
                </p>
            </div>
        </div>
    );
};

export default About;
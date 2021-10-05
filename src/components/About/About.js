import React from 'react';
import Home from '../Home/Home';

const About = () => {
    return (
        <div>
            <div className="mt-5">
                <div className="d-flex p-1">
                    <div>
                        <img className="img-fluid w-50 rounded" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBzY2hvb2x8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                    <div className="text-start">
                        <h1>Music Office</h1>
                        <p>Happy productive employees mean a successful business. We provide workplace music tuition and experiences to promote wellbeing and collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
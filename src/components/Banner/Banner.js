import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                  <MenuBar></MenuBar>
                  <div className="col-md-6">
                    <h1 className="title">Welcome to Dynamite Music School</h1>
                    <p className="banner-text text-white text-center mt-3">In our institute you can learn instrumental and music with fun.</p>
                    <button className="btn-about mt-3">Know More</button>
                  </div>
                   <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
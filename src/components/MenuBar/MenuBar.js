import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'
const MenuBar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
               <div className="row">
                   <div className="col-md-10">
                       <div className="menubar-container">
                           <div className="d-flex align-items-end justify-content-end">
                              <Link to="/home" className="items">
                                <li>Home</li>
                              </Link>
                              <Link to="/about" className="items">
                                <li>About</li>
                              </Link>
                              <Link to="/services" className="items">
                                <li>Services</li>
                              </Link>
                              <Link to="/features" className="items">
                                <li>Features</li>
                              </Link>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default MenuBar;
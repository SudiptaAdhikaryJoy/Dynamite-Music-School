import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
         fetch(`/public/dataBase.json`)
         .then(res => res.json())
         .then(data => setServices(data))
    },[]);
    console.log(services);

    return (
        <div className="services-container">
            <h1>services</h1>

            <div className="search-box">
                <input type="text" className="p-2" placeholder="Search" />
                <button className="btn btn-danger p-2">Search</button>
            </div>
            
        </div>
    );
};

export default Services;
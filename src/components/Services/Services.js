import React, { useEffect,useState } from 'react';
import Service from '../Service.js/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // useEffect(() => {
    //      fetch('/public/fakeDb.json')
    //      .then(res => res.json())
    //      .then(data => console.log('fakedata',data))
    // },[]);
    // console.log(services);
    useEffect(()=>{
         fetch(`https://sudiptaadhikaryjoy.github.io/gaming-material/Db.JSON`)
         .then(res => res.json())
         .then(data => setServices(data))
    },[]);
 

    return (
        <div>
           <h2>i have: {services.length}</h2>
           {
               services.map(service => <Service 
                key={service.name}
                service={service}></Service>)
           }
           
        </div>
    );
};

export default Services;
import React, { useEffect,useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
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
      // make fake data and push this github and fetch this using url
         fetch(`https://sudiptaadhikaryjoy.github.io/gaming-material/Db.JSON`)
         .then(res => res.json())
         .then(data => setServices(data))
    },[]);
    return (
        
          <Row xs={2} md={3} className="g-1 mt-2">
            {
               services.map(service => <Service 
                key={service.name}
                service={service}></Service>)               
           }
          </Row>     
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Feature from './Feature';

const Features = () => {
    const [features,setFeatures] = useState([])
    useEffect(()=>{
        // make fake data and push this github and fetch this using url
        const url = `https://sudiptaadhikaryjoy.github.io/Football-Dashboard/fakeDb.JSON`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFeatures(data));
    },[])
    return (
        <Row xs={2} md={3} className="g-1 mt-2">
            {
               features.map(feature => <Feature 
                key={feature.name}
                feature={feature}></Feature>)           
               }
         </Row>
    );
};

export default Features;
import React, { useEffect } from 'react';
import Axios from 'axios';
import './LandingPage.css';

function LandingPage() {
  useEffect(() => {
    Axios.get('/api/hello').then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="Landing-container">
      <div className="slider-image">
        <img src={process.env.PUBLIC_URL + '/images/Landing/image1.png'} />
      </div>
    </div>
  );
}

export default LandingPage;

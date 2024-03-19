import React from 'react';
import '../style/propertyView.css';
import AppNavBar from '../components/appNavBar';
import propertyImage from '../images/image.png'; // Import the image

const Property: React.FC = () => {
  return (
    <div>
      <div>
        {' '}
        <AppNavBar />
      </div>

      <div className="property-container">
        <div className="property-header">
          <div className="property_img">
            <img src={propertyImage} alt="Italian Trulli"/>
          </div>
          <div className="tools_box"> Tools</div>
        </div>
        <div className="title-box">
          <h1>Bankgatan 18 Lund</h1>
        </div>
        <div className="description-contatiner">
          <div className="description-header">Property description</div>
          <div className='rental-info'>Rental info</div>
        </div>
        <div>
          <div className='maintenance-box'>maintenance thingy</div>
        </div>
      </div>
    </div>
  );
};

export default Property;

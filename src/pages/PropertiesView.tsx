import React from 'react'
import AppNavBar from '../components/appNavBar'
import PropertyCard from '../components/propertyCard'
import '../style/PropertyPage.css'


const PropertyPage: React.FC = () => {
  return (
    <div>
      
        <AppNavBar>
      <div></div>
      <div className="propBox">
        <PropertyCard
          name="Bankgatan 18"
          property_description="Cool Building to live"
          link="/Property"
        />
        <PropertyCard
          name="Bankgatan 18"
          property_description="Cool Building to live"
          link="/Property"
        />
        <PropertyCard
          name="Bankgatan 18"
          property_description="Cool Building to live"
          link="/Property"
        />
        <PropertyCard
          name="Bankgatan 18"
          property_description="Cool Building to live"
          link="/Property"
        />
        <PropertyCard
          name="Bankgatan 18"
          property_description="Cool Building to live"
          link="/Property"
        />
      </div>
        </AppNavBar>
      </div>
        )
}

export default PropertyPage

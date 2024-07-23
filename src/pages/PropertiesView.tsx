import React, { useState, useEffect } from "react";
import AppNavBar from "../components/appNavBar";
import PropertyCard from "../components/propertyCard";
import "../style/PropertiesView.css";

interface Property {
  _id: string;
  propertyName: string;
  amountApartments: number;
}

const PropertyPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]); // Set initial state as an empty array of Property type

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:3001/properties'); // Adjust the URL to match your backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const propertiesData: Property[] = await response.json(); // Typecast the response to Property[]
      console.log('Properties data:', propertiesData); // Log the fetched data
      setProperties(propertiesData);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div>
      <AppNavBar>
        <div></div>
        <div className="propBox">
          {properties.map((property, index) => (
            <PropertyCard
              key={property._id || index} // Use index as key if propertyID is undefined
              name={property.propertyName}
              property_description={property.amountApartments.toString()} // Convert amountApartments to string if it's a number
              link={`/property/${property._id}`} // Construct link prop for each property
            />
          ))}
        </div>
      </AppNavBar>
    </div>
  );  
};

export default PropertyPage;

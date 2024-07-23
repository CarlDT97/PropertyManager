import React, { useEffect, useState } from 'react';
import '../style/PropertyView.css';
import AppNavBar from '../components/appNavBar';
import propertyImage from '../images/image.png';
import LineChart from '../components/revenueDiagram';
import { Card, List, Typography, Divider, Button } from 'antd';
import { useParams } from 'react-router-dom';

interface Property {
  propertyName: string;
  amountApartments: number;
  adress: string;
}

const { Title } = Typography;

const Property: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Specify type for id using useParams
  const [property, setProperty] = useState<Property | null>(null); // Set initial state as null for single property

  useEffect(() => {
    const getProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3001/properties/${id}`);
        if (!response.ok) {
          throw new Error('Property not found');
        }
        const data: Property = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property data:', error);
        // Handle error state here if needed
      }
    };

    getProperty();
  }, [id]);

  const data = [
    { month: 'January', revenue: 1000 },
    { month: 'February', revenue: 1500 },
    { month: 'March', revenue: 300000 },
  ];

  return (
    <div>
      <div>
        <AppNavBar>
          <div className="property-container">
            <div className="property-header">
              <div className="property_img">
                <img src={propertyImage} alt="Italian Trulli" />
              </div>
              <div className="tools_box">
                <LineChart data={data} />
                <div className="rental-info">
                  <Divider/>
                  <div><h3>Apartments rented out: { id }</h3></div>
                  <Divider />
                  <div><h3>Revenue Per Month:</h3></div>
                  <Divider />
                  <div><h3>Market Value:</h3></div>
                  <Divider />
                </div>
              </div>
            </div>
            {property && (
              <>
                <Divider />
                <div className="title-box">
                  <Title>
                    <h2>{property.propertyName}</h2>
                  </Title>
                  <div></div>
                </div>
                <Divider />
                <div className="description-container">
                  <div className="description-header">
                    <Title>
                      <h3>Description</h3>
                    </Title>
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                      }}
                      dataSource={property ? Object.entries(property) : []} // Use fetched data if available, otherwise empty array
                        renderItem={(item: [string, any]) => (
                        <List.Item>
                        <Card title= "Property Name"> {property.propertyName}</Card>
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </AppNavBar>
      </div>
    </div>
  );
};

export default Property;

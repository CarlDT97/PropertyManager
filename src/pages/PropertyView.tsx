import React from 'react';
import '../style/propertyView.css';
import AppNavBar from '../components/appNavBar';
import propertyImage from '../images/image.png'; 
import LineChart from '../components/revenueDiagram';
import { Card, List, Typography, Avatar } from 'antd';

const { Title } = Typography;

const Property: React.FC = () => {
  // Example data for the chart
  const data = [
    { month: 'January', revenue: 1000 },
    { month: 'February', revenue: 1500 },
    { month: 'March', revenue: 300000 },
  ];

  //Dummy data 
  const descriptionData = [ 
    {
      title: 'Hello 1',
      content: 'This is the content for Hello 1.'
    },
    {
      title: 'Title 2',
      content: '100'
    },
    {
      title: 'Title 3',
      content: 'This is the content for Title 3.'
    },
    {
      title: 'Title 4',
      content: 'This is the content for Title 4.'
    },
    {
      title: 'Title 5',
      content: 'This is the content for Title 5.'
    },
    {
      title: 'Title 6',
      content: 'This is the content for Title 6.'
    },
    {
      title: 'Title 7',
      content: 'This is the content for Title 7.'
    },
    {
      title: 'Title 8',
      content: 'This is the content for Title 8.'
    },
    {
      title: 'Title 9',
      content: 'This is the content for Title 9.'
    },
  ];

  
  return (
    <div>
      <div >
        {' '}
        <AppNavBar>
        <div className="property-container">
        <div className="property-header">
          <div className="property_img">
            <img src={propertyImage} alt="Italian Trulli"/>
          </div>
          <div className="tools_box">
            <LineChart data={data}/>
            <div className='rental-info'>
              <div><h3>Apartments rented out:</h3></div>
              <div><h3>Revenue Per Month:</h3></div>
              <div><h3>Market Value:</h3></div>
            </div>
          </div>
        </div>
        <div className="title-box">
          <Title><h1>Bankgatan 18 Lund</h1></Title>
        </div>
        <div className="description-contatiner">
          <div className="description-header">
            <h3>Description</h3>
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
              dataSource={descriptionData}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>{item.content}</Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
        </AppNavBar>
      </div>
    </div>
  );
};

export default Property;

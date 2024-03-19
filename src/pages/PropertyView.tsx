import React from 'react';
import '../style/propertyView.css';
import AppNavBar from '../components/appNavBar';
import propertyImage from '../images/image.png'; // Import the image
import LineChart from '../components/revenueDiagram'; // Import the LineChart component

const Property: React.FC = () => {
  // Example data for the chart
  const data = [
    { month: 'January', revenue: 1000 },
    { month: 'February', revenue: 1500 },
    { month: 'March', revenue: 300000 },
  ];

  const descriptionData: string[] = [
    'Amenity 1',
    'Amenity 2',
    'Amenity 3',
    'Amenity 4',
    'Amenity 5',
    'Amenity 6',
    'Amenity 7',
    'Amenity 8',
    'Amenity 9',
    'Amenity 10'
  ];

  // Function to chunk the array into multiple arrays of a specified size
  const chunkArray = (arr: string[], size: number): string[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // Chunk the descriptionData array into groups of 3
  const chunkedDescriptionData = chunkArray(descriptionData, 3);

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
          <h1>Bankgatan 18 Lund</h1>
        </div>
        <div className="description-contatiner">
          <div className="description-header">
            <h3>Description</h3>
            <table>
              <tbody>
                {chunkedDescriptionData.map((group: string[], index: number) => (
                  <tr key={index}>
                    {group.map((item: string, subIndex: number) => (
                      <td key={subIndex}>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='maintenance-box'>
            <h3>Maintenance For Property</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

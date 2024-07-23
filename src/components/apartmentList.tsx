import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column } = Table;

interface TableApartmentsProps {
  key: React.Key;
  apartmentNumber: number;
  name: string;
  floor: number;
  address: string;
  tags: string[];
}

const data: TableApartmentsProps[] = [
  {
    key: '1',
    apartmentNumber: 1438,
    name: 'Brown James',
    floor: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['Occupied'],
  },
];

const TableApartments: React.FC = () => {
  return (
    <Table dataSource={data}>
      <Column title="Apartment Number" dataIndex="apartmentNumber" key="apartmentNumber" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Floor Number" dataIndex="floor" key="floor" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => {
              let color = 'green';
              if (tag === 'Occupied') {
                color = 'red'; // Change color to red if tag is 'Occupied'
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: TableApartmentsProps) => (
          <Space size="middle">
            <a>View</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableApartments;

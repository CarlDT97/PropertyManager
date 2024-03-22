import * as React from 'react'
import { Link } from 'react-router-dom' // Import Link from React Router
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface PropertyCardProps {
  name: string
  property_description: string
  link: string
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  property_description,
  link,
}) => {
  return (
    <Link to={link}>
      {' '}
        <Card
            hoverable

        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={name}
          description={property_description}
        />
      </Card>
    </Link>
  )
}

export default PropertyCard

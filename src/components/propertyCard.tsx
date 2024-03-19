import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom' // Import Link from React Router

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
      {/* Wrap with Link */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=""
            alt="Bankgatan 18A"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property_description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default PropertyCard

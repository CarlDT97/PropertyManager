import * as React from 'react'
import '../style/navCard.css'
import { ElementType } from 'react' // Import ElementType
import { Link } from 'react-router-dom' // Import Link from react-router-dom

interface NavCardProps {
  title: string
  link: string
  Icon: ElementType
}

const NavCard: React.FC<NavCardProps> = ({ title, link, Icon }) => {
  return (
    <Link to={link} className="link">
    <div className="card_box">
        {' '}
        <div id="icon_box">
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div id="title_box">
          <p>{title}</p>
        </div>
    </div>
          </Link>

  )
}

export default NavCard

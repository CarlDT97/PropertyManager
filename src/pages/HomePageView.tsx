import React from 'react'
import AppNavBar from '../components/appNavBar'
import NavCard from '../components/navCard'
import ApartmentIcon from '@mui/icons-material/Apartment'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'
import CreateIcon from '@mui/icons-material/Create'
import '../style/homePage.css'
const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <AppNavBar />
      </div>
      <div className="page-container">
        {' '}
        {/* Added class for styling */}
        <div className="navCards-container">
          <NavCard
            title={'Your Buildings'}
            link={'/properties'}
            Icon={ApartmentIcon}
          />
          <NavCard title={'Money'} link={''} Icon={CandlestickChartIcon} />
          <NavCard title={'Edit'} link={''} Icon={CreateIcon} />
        </div>
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import AppNavBar from '../components/appNavBar'
import PropertyCard from '../components/propertyCard'
import '../style/PropertyPage.css'
import TableApartments from '../components/apartmentList'
const ApartmentsView: React.FC = () => {
  return (
    <div>
      <div>
        <AppNavBar />
      </div>
      <div className="table">
        <TableApartments />
      </div>
    </div>
  )
}

export default ApartmentsView

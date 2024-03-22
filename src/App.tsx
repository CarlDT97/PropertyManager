import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PropertyPage from './pages/PropertiesView'
import HomePage from './pages/HomePageView'
import ApartmentsView from './pages/ApartmentsView'
import PropertyView from './pages/PropertyView'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/apartments" element={<ApartmentsView />} />
        <Route path="/Property" element={<PropertyView />} />
      </Routes>
    </Router>
  )
}

export default App

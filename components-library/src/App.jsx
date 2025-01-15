import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'

// Components
import BadgeApp from './components/badge-component/BadgeApp'
import BannerApp from './components/banner-component/BannerApp'
import CardApp from './components/card-component/CardApp'
import TestimonialApp from './components/testimonial-component/TestimonialApp'

function App() {

  return (
    <Router>
      <div>
        {/* Navigation Menu */}
      
        <nav>
          <ul>
            <li><Link to="/badge">Badge</Link></li>
            <li><Link to="/banner">Banner</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/badge" element={<BadgeApp />} />
          <Route path="/banner" element={<BannerApp />} />
          <Route path="/card" element={<CardApp />} />
          <Route path="/testimonial" element={<TestimonialApp />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App

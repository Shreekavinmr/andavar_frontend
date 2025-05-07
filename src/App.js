import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CoursesPage from './pages/CoursesPage';
import TherapeuticAreasPage from './pages/TherapeuticAreasPage';
import CareersPage from './pages/Careers';
import ContactPage from './pages/ContactPage';

// Import styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path='/therapeutic-areas' element={<TherapeuticAreasPage/>}/>
          <Route path='/careers' element={<CareersPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// src/App.tsx
import React from 'react';
import './styles/theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import ContactPage from './pages/ContactPage';
import VerifyCertificatePage from './pages/VerifyCertificatePage';
import NewsAndEvents from './pages/NewsAndEvents'; // Add this import
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify-certificate" element={<VerifyCertificatePage />} />
          <Route path="/register" element={<RegistrationFormPage />} />
          <Route path="/news-and-events" element={<NewsAndEvents />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
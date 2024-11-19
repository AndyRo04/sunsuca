import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import './App.css'; 

function App() {
  // Hook para obtener la ruta actual
  const location = useLocation();

  // Condicional para determinar si estamos en el panel de administración
  const isAdminRoute = location.pathname.startsWith('/admin');

  const isUserRoute = location.pathname.startsWith('/user');

  return (
    <div className="main-container">
      {/* Mostrar Header y Footer solo si no es ruta de admin */}
      {!isAdminRoute && !isUserRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

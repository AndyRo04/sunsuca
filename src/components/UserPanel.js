import React, { useState, useEffect } from 'react';
import './UserPanel.css';
import logo from '../assets/sunsuca.png'; 
import { useNavigate } from 'react-router-dom'; 

function UserPanel() {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate(); 

  // Cargar eventos desde LocalStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  
  const handleLogout = () => {
    
    localStorage.removeItem('userSession'); 
    navigate('/login'); 
  };

  return (
    <>
      {/* Header */}
      <header className="user-header">
        <img src={logo} alt="SUNSUCA Logo" className="header-logo" />
        <nav>
          <ul className="header-nav">
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </header>

      
      <div className="user-panel-container">
        
        <section className="user-panel">
          <h2>Panel de Usuario</h2>
          <p>Visualización de Eventos y Citas</p>

          {/* Lista de eventos */}
          <div className="user-events-list">
            <h3>Eventos</h3>
            {events.filter((e) => e.type === 'event').length > 0 ? (
              events
                .filter((e) => e.type === 'event')
                .map((event, index) => (
                  <div key={index} className="event-card">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <p>📅 Fecha: {event.date}</p>
                  </div>
                ))
            ) : (
              <p>No hay eventos registrados.</p>
            )}

            <h3>Citas</h3>
            {events.filter((e) => e.type === 'cita').length > 0 ? (
              events
                .filter((e) => e.type === 'cita')
                .map((event, index) => (
                  <div key={index} className="event-card">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <p>📅 Fecha: {event.date}</p>
                  </div>
                ))
            ) : (
              <p>No hay citas registradas.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default UserPanel;

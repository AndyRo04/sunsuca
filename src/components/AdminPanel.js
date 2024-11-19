import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import logo from '../assets/sunsuca.png'; 
import { useNavigate } from 'react-router-dom'; 

function AdminPanel() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    type: 'event', // 'evento' o 'cita'
  });
  const [editingEvent, setEditingEvent] = useState(null);

  const navigate = useNavigate(); 

  // Cargar eventos 
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  // Guardar eventos en LocalStorage
  const saveEvents = (newEvents) => {
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.title || !formData.description || !formData.date) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (editingEvent !== null) {
      // Actualizar evento existente
      const updatedEvents = events.map((event, index) =>
        index === editingEvent ? formData : event
      );
      saveEvents(updatedEvents);
      setEditingEvent(null);
    } else {
      // Agregar nuevo evento
      saveEvents([...events, formData]);
    }

    setFormData({ title: '', description: '', date: '', type: 'event' });
  };

  // Manejar la edición de un evento
  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditingEvent(index);
  };

  // Manejar la eliminación de un evento
  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    saveEvents(updatedEvents);
  };

  // Manejar cierre de sesión
  const handleLogout = () => {
    
    localStorage.removeItem('userSession'); 
    navigate('/login'); 
  };

  // Limpiar formulario
  const handleClearForm = () => {
    setFormData({ title: '', description: '', date: '', type: 'event' });
    setEditingEvent(null);
  };

  return (
    <>
      {/* Header */}
      <header className="admin-header">
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

      
      <section className="admin-panel">
        <h2>Panel de Administración</h2>
        <p>Gestión de Eventos y Citas</p>
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            placeholder="Título"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Descripción"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="event">Evento</option>
            <option value="cita">Cita</option>
          </select>
          <div className="form-buttons">
            <button type="submit" className="admin-button">
              {editingEvent !== null ? 'Actualizar' : 'Agregar'}
            </button>
            <button type="button" onClick={handleClearForm} className="clear-button">
              Limpiar
            </button>
          </div>
        </form>

        <div className="admin-events-list">
          <h3>Eventos</h3>
          {events.filter((e) => e.type === 'event').length > 0 ? (
            events
              .filter((e) => e.type === 'event')
              .map((event, index) => (
                <div key={index} className="event-card">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <p>📅 Fecha: {event.date}</p>
                  <div className="event-actions">
                    <button
                      onClick={() => handleEdit(index)}
                      className="edit-button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  </div>
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
                  <div className="event-actions">
                    <button
                      onClick={() => handleEdit(index)}
                      className="edit-button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p>No hay citas registradas.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default AdminPanel;

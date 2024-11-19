import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  // Esto limpia localStorage para evitar conflictos 
  //localStorage.clear();

  // Función para inicializar usuarios en LocalStorage
  const initializeUsers = () => {
    const users = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'usuario', password: 'usuario123', role: 'user' },
    ];
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Verificar si ya están inicializados los usuarios
  if (!localStorage.getItem('users')) {
    initializeUsers();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));

    // Validar credenciales
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError('');
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Aquí hacemo redirección según rol
      if (user.role === 'admin') {
        console.log('Redirigiendo al panel de administración');
        window.location.href = '/admin'; 
      } else {
        console.log('Redirigiendo al área de usuario');
        window.location.href = '/user'; 
      }
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bienvenido a SUNSUCA</h2>
        <p className="login-subtitle">Por favor, ingresa para continuar</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Ingresar</button>
        </form>

        {error && <p className="login-error">{error}</p>}

        <div className="login-footer">
          <p>
            Haz con tus acciones <a href="#">¡Un mundo mejor!</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

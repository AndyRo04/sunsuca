import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
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

        <div className="login-footer">
          <p>Haz con tus acciones<p></p>
          <a href="#">¡Un mundo mejor!</a></p>
        </div>
      </div>
    </section>
  );
}

export default Login;

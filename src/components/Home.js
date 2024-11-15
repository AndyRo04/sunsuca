import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Bienvenido a SUNSUCA</h1>
        <p>La agricultura sustentable al alcance de todos. Descubre cómo podemos ayudarte a cultivar de manera ecológica y eficiente.</p>
        <Link to="/services"><button className="cta-button">Explorar Servicios</button></Link>
      </section>

      <section className="features-section">
        <h2>¿Por qué elegirnos?</h2>
        <div className="feature-card">
          <h3>Siembra Ecológica</h3>
          <p>Nos enfocamos en prácticas agrícolas respetuosas con el medio ambiente.</p>
        </div>
        <div className="feature-card">
          <h3>Riego Inteligente</h3>
          <p>Optimiza el uso del agua con nuestro sistema de riego automatizado y eficiente.</p>
        </div>
        <div className="feature-card">
          <h3>Residuos Biológicos</h3>
          <p>Transformamos residuos orgánicos en recursos valiosos para tus cultivos.</p>
        </div>
      </section>

      <section className="call-to-action-section">
        <h2>Únete a nuestra comunidad</h2>
        <p>Accede a contenido exclusivo, gestiona citas y participa en capacitaciones sobre agricultura sustentable.</p>
        <Link to="/login"><button className="cta-button">Acceder al portal</button></Link>
      </section>

    </div>
  );
}

export default Home;

import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-container">
      <div className="about-us-header">
        <h2>Conoce a SUNSUCA</h2>
        <p className="subheading">Comprometidos con un futuro más verde y sostenible.</p>
      </div>

      <div className="about-us-content">
        <div className="about-us-description">
          <h3>Nuestra Misión</h3>
          <p>
            En SUNSUCA, nos dedicamos a promover prácticas agrícolas responsables con el medio ambiente. Nuestro objetivo es 
            transformar el futuro de la agricultura mediante el uso de métodos sostenibles que respeten la naturaleza y 
            mejoren la calidad de vida de las comunidades rurales.
          </p>
        </div>

        <div className="about-us-description">
          <h3>Nuestros Valores</h3>
          <ul>
            <li>🌱 **Compromiso Ambiental**: Buscamos preservar la biodiversidad y reducir la huella ecológica.</li>
            <li>🌍 **Sostenibilidad**: Adoptamos prácticas que aseguran la salud del planeta para futuras generaciones.</li>
            <li>💚 **Innovación**: Desarrollamos soluciones innovadoras que combinan tecnología y respeto por la naturaleza.</li>
            <li>🤝 **Colaboración**: Trabajamos junto a las comunidades y otros actores para impulsar el cambio.</li>
          </ul>
        </div>
      </div>

      <div className="about-us-vision">
        <h3>Nuestra Visión</h3>
        <p>
          Ser líderes en la agricultura ecológica y sostenible, creando un impacto positivo en el entorno, las comunidades
          y el futuro de la alimentación mundial. Creemos que un cambio global comienza con acciones locales.
        </p>
      </div>

      <div className="about-us-image">
        <img src="https://via.placeholder.com/600x400" alt="Agricultura Sostenible" />
      </div>

      <div className="about-us-footer">
        <p>¡Únete a nosotros en la construcción de un mundo más verde y justo!</p>
      </div>
    </section>
  );
}

export default AboutUs;

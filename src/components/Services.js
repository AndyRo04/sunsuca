import React from 'react';
import './Services.css';  // Asegúrate de tener este archivo de estilos en tu carpeta de estilos

function Services() {
  return (
    <section className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      <p className="services-description">
        Descubre cómo SUNSUCA puede ayudarte a llevar la agricultura sustentable a otro nivel. Ofrecemos soluciones innovadoras y ecológicas.
      </p>

      <div className="services-grid">
        {/* Tarjeta de Siembra Ecológica */}
        <div className="service-card">
          <img src="https://enraizaderechos.org/wp-content/uploads/2023/05/Sembrado-plantas-huerto.jpg" alt="Siembra Ecológica" className="service-img" />
          <h3 className="service-name">Siembra Ecológica</h3>
          <p>Ofrecemos técnicas de siembra amigables con el medio ambiente, fomentando prácticas agrícolas sostenibles y responsables.</p>
        </div>

        {/* Tarjeta de Riego Automático */}
        <div className="service-card">
          <img src="https://www.gob.mx/cms/uploads/image/file/385548/riego_3.jpg" alt="Riego Automático" className="service-img" />
          <h3 className="service-name">Riego Automático</h3>
          <p>Implementamos sistemas de riego inteligente que optimizan el uso del agua, ayudando a preservar este recurso vital.</p>
        </div>

        {/* Tarjeta de Cuidado del Medio Ambiente */}
        <div className="service-card">
          <img src="https://carga.com.co/wp-content/uploads/2020/12/tree-5725540_960_720-thegem-blog-default.jpg" alt="Cuidado del Medio Ambiente" className="service-img" />
          <h3 className="service-name">Cuidado del Medio Ambiente</h3>
          <p>Conservamos la biodiversidad y promovemos prácticas agrícolas que protegen los ecosistemas y el suelo.</p>
        </div>

        {/* Tarjeta de Procesamiento de Residuos */}
        <div className="service-card">
          <img src="https://www.paiscircular.cl/wp-content/uploads/2019/02/New-Recycle-660.jpg" alt="Procesamiento de Residuos" className="service-img" />
          <h3 className="service-name">Procesamiento de Residuos Biológicos</h3>
          <p>Reciclamos residuos biológicos para producir compost y otros productos útiles para la agricultura.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

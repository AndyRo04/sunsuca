import React from 'react';
import Slider from 'react-slick';
import './Gallery.css'; // Asegúrate de tener este archivo de estilos

function Gallery() {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Galería de Proyectos</h2>
      <p className="gallery-description">
        Aquí encontrarás imágenes de nuestros sembrados inteligentes y proyectos sostenibles. ¡Descubre cómo trabajamos por un futuro más verde!
      </p>

      {/* Carrusel de imágenes */}
      <div className="gallery-carousel">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1188603783/es/foto/comunidad-ayudando-al-medio-ambiente.jpg?s=170667a&w=0&k=20&c=e1hzfIvVgxnt38zMqiLIXfH6IV0N4HAfrILWCuw7cME=" alt="Proyecto 1" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFNGc1Uy7tp1Is-sAV0Flyx6Qzljo1gPn8mQX44DHxqadFuUcfEhvMkHr0SNBKVrzTPw&usqp=CAU" alt="Proyecto 2" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn0.ecologiaverde.com/es/posts/2/5/7/acciones_para_cuidar_el_medio_ambiente_en_el_colegio_1752_600.jpg" alt="Proyecto 3" />
          </div>
          <div className="carousel-item">
            <img src="https://agbaragriculture.com/wp-content/uploads/2021/04/5db00ce92553d.jpeg" alt="Proyecto 4" />
          </div>
        </Slider>
      </div>

      {/* Cuadrícula de imágenes (opcional) */}
      <div className="gallery-grid">
        <img src="https://es.habcdn.com/photos/project/medium/programador-para-riego-automatico-3649214.jpg" alt="Imagen 1" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrKK6DtcBsn0g9fIHjTttpZzy0i71LzGOszxjZj7aUirwHhUjhmRvp68WsAM6t10xRA0&usqp=CAU" alt="Imagen 2" />
        <img src="https://blog.agroptima.com/wp-content/uploads/2016/02/ayudas-agricultura-ecologica-1024x768.jpg" alt="Imagen 3" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhvZkUwEKtJWTZ118xNwDrnKPoqUao812ug&s" alt="Imagen 4" />
      </div>
    </section>
  );
}

export default Gallery;

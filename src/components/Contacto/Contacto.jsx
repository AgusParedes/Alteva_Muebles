import './Contacto.scss';

export const Contacto = () => {
  return (
    <section className="contacto">

      {/* ENCABEZADO */}
      <div className="contacto__header">

        <span className="contacto__etiqueta">
          CONTACTO - ASESORAMIENTO
        </span>

        <h1>
          ¡Contáctanos y{' '}
          <span>OBTÉN EL MUEBLE DE TUS SUEÑOS!</span>
        </h1>

        <p>
          Para cualquier consulta o duda, sin compromiso, no dudes en
          contactarnos. Podés hacerlo dándole click en los íconos de nuestras
          redes sociales, mandando un mensaje o llamándonos por teléfono al{' '}
          <strong>+54 3404 417996</strong>, y también visitándonos en{' '}
          <strong>Guillermo Tell 135</strong>. ¡Estamos aquí para ayudarte!
        </p>

      </div>


      {/* REDES SOCIALES */}
      <div className="contacto__redes">

        {/* WHATSAPP */}
        <a
          href="https://api.whatsapp.com/send?phone=5493404417996"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto__tarjeta"
        >
          <div className="contacto__tarjeta-icono">
            <i className="fab fa-whatsapp"></i>
          </div>

          <span className="contacto__tarjeta-badge">
            RESPUESTA RÁPIDA
          </span>

          <div className="contacto__tarjeta-contenido">
            <small>WHATSAPP</small>
            <h3>Mensaje Directo</h3>
            <p>+54 3404 417996</p>
          </div>

          <span className="contacto__tarjeta-link">
            Abrir conversación <i className="fas fa-arrow-right"></i>
          </span>
        </a>


        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/dario.j.p/"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto__tarjeta"
        >
          <div className="contacto__tarjeta-icono">
            <i className="fab fa-instagram"></i>
          </div>

          <span className="contacto__tarjeta-badge">
            GALERÍA
          </span>

          <div className="contacto__tarjeta-contenido">
            <small>INSTAGRAM</small>
            <h3>Instagram</h3>
            <p>
              Inspiración, acabados en melamina y proyectos recientes.
            </p>
          </div>

          <span className="contacto__tarjeta-link">
            Ver perfil <i className="fas fa-arrow-right"></i>
          </span>
        </a>


        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/profile.php?id=100063653134693"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto__tarjeta"
        >
          <div className="contacto__tarjeta-icono">
            <i className="fab fa-facebook-f"></i>
          </div>

          <span className="contacto__tarjeta-badge">
            COMUNIDAD
          </span>

          <div className="contacto__tarjeta-contenido">
            <small>FACEBOOK</small>
            <h3>Facebook</h3>
            <p>
              Novedades y consultas a través de nuestra página.
            </p>
          </div>

          <span className="contacto__tarjeta-link">
            Ir a Facebook <i className="fas fa-arrow-right"></i>
          </span>
        </a>

      </div>


      {/* INFORMACIÓN */}
      <div className="contacto__info">

        <div className="contacto__info-card">

          <div className="contacto__info-icono">
            <i className="fas fa-phone"></i>
          </div>

          <div>
            <small>ATENCIÓN TELEFÓNICA</small>
            <strong>+54 3404 417996</strong>
          </div>

        </div>


        <div className="contacto__info-card">

          <div className="contacto__info-icono">
            <i className="fas fa-map-marker-alt"></i>
          </div>

          <div>
            <small>DIRECCIÓN & TALLER</small>
            <strong>Guillermo Tell 135</strong>
          </div>

        </div>

      </div>


      {/* UBICACIÓN */}
      <div className="contacto__ubicacion">

        <div className="contacto__ubicacion-info">

          <span className="contacto__ubicacion-etiqueta">
            <i className="fas fa-store"></i>
            VISÍTANOS
          </span>

          <h2>Alteva Muebles</h2>

          <p>
            Guillermo Tell 100–198, S3015
          </p>

          <small>
            Guillermo Tell 135
          </small>


          <div className="contacto__mensaje">

            <i className="fas fa-hands-helping"></i>

            <span>
              Para cualquier consulta o duda, sin compromiso.
              ¡Estamos aquí para ayudarte!
            </span>

          </div>


          <a
            href="https://www.google.com/maps/search/?api=1&query=Guillermo+Tell+135"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto__boton contacto__boton--principal"
          >
            <i className="fas fa-directions"></i>
            Cómo llegar
          </a>


          <a
            href="tel:+543404417996"
            className="contacto__boton"
          >
            <i className="fas fa-phone"></i>
            Llamar ahora
          </a>

        </div>


        <div className="contacto__mapa">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010.8454730677462!2d-61.07256998407334!3d-31.549821414140165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b57182f25d8d79%3A0x298f3a0cc6a6754d!2sAlteva%20Muebles!5e0!3m2!1ses!2sar!4v1731593991199!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Alteva Muebles"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contacto;
import './Contacto.scss';

export const Contacto = () => {
  return (
    <>
      <div className='div_containerContacto'>
        <div className='div_containerIzq'>
          <div className='div_containerText'>
            <div className='animate__animated animate__fadeInUp animate__delay-0.3s div_titulo'>
              <p>
                ¡Contáctanos y{' '}
                <span className="colorLetrasTitulo">OBTÉN EL MUEBLE DE TUS SUEÑOS!</span>
              </p>
            </div>
            <div className='animate__animated animate__fadeInUp animate__delay-0.3s div_text'>
              <p>
                Para cualquier consulta o duda, sin compromiso, no dudes en contactarnos. Podés hacerlo dándole click en los íconos de nuestras redes sociales, mandando un mensaje o llamándonos por teléfono al +54 3404 417996, y también visitándonos en Guillermo Tell 135. ¡Estamos aquí para ayudarte!
              </p>
            </div>
          </div>
          <div className='animate__animated animate__fadeInUp animate__delay-0.3s div_containerTarjetasRedes'>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100063653134693" target="_blank" rel="noopener noreferrer" className="icono_redes">
                <i className="fab fa-facebook-f"></i>
              </a>
              <p>Facebook</p>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=%2B5493404417996&data=AWBrttyS9oVC_GaCzsU3SS8WFODgnkWHJz4FdpjBJG_Gg7E1J5Lm_1o4eHd-n6tbdvcKDi8xlg140Kr51LwJmwAZ2AaZ_xUoJKPQ1cKKDxe5FWhsX5u4WwsgFCMj1gLOtB-4ljQ_IAgMClmNzN9t8cgfvrorFUrFp-yeWPc-g2fvsxc0qTSR-rMAyNUhFABSpZAWAdKM1ayHcnOEz3_D4NlL0RjEhElmNRyrxz8qAphq48cVOQb7yf6omZuLkChJPlq7muLrvnSmZoHWz6AySP1Lr4zoc25d7IDZyF0iUhJAsaN8AKA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1WcVThJwP41mPqP2urw7_e2Us64wVNquBq9ZqBYP0N9-AynQxxDv2qyEo"
                target="_blank"
                rel="noopener noreferrer"
                className="icono_redes"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <p>Whatsapp</p>
            </div>
            <div>
              <a href="https://www.instagram.com/dario.j.p/" target="_blank" rel="noopener noreferrer" className="icono_redes">
                <i className="fab fa-instagram"></i>
              </a>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className='div_mapa'>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010.8454730677462!2d-61.07256998407334!3d-31.549821414140165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b57182f25d8d79%3A0x298f3a0cc6a6754d!2sAlteva%20Muebles!5e0!3m2!1ses!2sar!4v1731593991199!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;

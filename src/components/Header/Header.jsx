import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo_alteva from '../../assets/Logo_alteva.png'
import Logo_letras from '../../assets/Logo_letras.png'
import './Header.scss'
import { useState } from 'react';


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <header className="header">
      <a href="#inicio" className="brand">
        <img src={Logo_alteva} alt="Alteva Muebles" />
        <img src={Logo_letras} alt="Alteva Muebles" />
      </a>

      {/* Nav visible solo en desktop */}
      <nav className="nav nav--desktop">
        <Link to="/" className='nav__link'>INICIO</Link>
        <Link to="/Productos" className='nav__link'>PRODUCTOS</Link>
        <Link to="/SobreNosotros" className='nav__link'>SOBRE NOSOTROS</Link>
        <Link to="/Contacto" className='nav__link'>CONTACTO</Link>
      </nav>

      <div className="header__actions">
        <div className="header__socials">
          <a href="https://www.facebook.com/profile.php?id=100063653134693" target="_blank" rel="noreferrer" className="icono_redes">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=%2B5493404417996&data=AWBrttyS9oVC_GaCzsU3SS8WFODgnkWHJz4FdpjBJG_Gg7E1J5Lm_1o4eHd-n6tbdvcKDi8xlg140Kr51LwJmwAZ2AaZ_xUoJKPQ1cKKDxe5FWhsX5u4WwsgFCMj1gLOtB-4ljQ_IAgMClmNzN9t8cgfvrorFUrFp-yeWPc-g2fvsxc0qTSR-rMAyNUhFABSpZAWAdKM1ayHcnOEz3_D4NlL0RjEhElmNRyrxz8qAphq48cVOQb7yf6omZuLkChJPlq7muLrvnSmZoHWz6AySP1Lr4zoc25d7IDZyF0iUhJAsaN8AKA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1WcVThJwP41mPqP2urw7_e2Us64wVNquBq9ZqBYP0N9-AynQxxDv2qyEo" target="_blank" rel="noreferrer" className="icono_redes">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/dario.j.p/" target="_blank" rel="noreferrer" className="icono_redes">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Botón hamburguesa, visible solo en mobile */}
        <button
          type="button"
          className="menu-toggle"
          onClick={handleShow}
          aria-label="Abrir menú"
        >
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
          <span className="menu-toggle__bar"></span>
        </button>
      </div>

      {/* Menú mobile */}
      <Offcanvas show={showMenu} onHide={handleClose} placement="end" className="mobile-menu">
        <Offcanvas.Header closeButton>
          <img src={Logo_alteva} alt="Alteva Muebles" className="mobile-menu__logo" />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav nav--mobile">
            <Link to="/" className='nav__link' onClick={handleClose}>INICIO</Link>
            <Link to="/Productos" className='nav__link' onClick={handleClose}>PRODUCTOS</Link>
            <Link to="/SobreNosotros" className='nav__link' onClick={handleClose}>SOBRE NOSOTROS</Link>
            <Link to="/Contacto" className='nav__link' onClick={handleClose}>CONTACTO</Link>
          </nav>

          <div className="mobile-menu__socials">
            <a href="https://www.facebook.com/profile.php?id=100063653134693" target="_blank" rel="noreferrer" className="icono_redes">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B5493404417996&data=AWBrttyS9oVC_GaCzsU3SS8WFODgnkWHJz4FdpjBJG_Gg7E1J5Lm_1o4eHd-n6tbdvcKDi8xlg140Kr51LwJmwAZ2AaZ_xUoJKPQ1cKKDxe5FWhsX5u4WwsgFCMj1gLOtB-4ljQ_IAgMClmNzN9t8cgfvrorFUrFp-yeWPc-g2fvsxc0qTSR-rMAyNUhFABSpZAWAdKM1ayHcnOEz3_D4NlL0RjEhElmNRyrxz8qAphq48cVOQb7yf6omZuLkChJPlq7muLrvnSmZoHWz6AySP1Lr4zoc25d7IDZyF0iUhJAsaN8AKA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1WcVThJwP41mPqP2urw7_e2Us64wVNquBq9ZqBYP0N9-AynQxxDv2qyEo" target="_blank" rel="noreferrer" className="icono_redes">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/dario.j.p/" target="_blank" rel="noreferrer" className="icono_redes">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}
export default Header
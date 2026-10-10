import './Footer.scss'
import Logo_alteva from '../../assets/Logo_alteva.png'
import { Link } from 'react-router-dom'

export const Footer = () => {

    return(
    <footer className="footer" id="contacto">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={Logo_alteva} alt="Alteva Muebles" />
            <p>
              Curando espacios con alma y diseño orgánico para el hogar
              contemporáneo.
            </p>
          </div>

          <div className="footer__column">
            <h4>NAVEGACIÓN</h4>
                <Link to="/">INICIO</Link>
                <Link to="/Productos">PRODUCTOS</Link>
                <Link to="/SobreNosotros">SOBRE NOSTROS</Link>
                <Link to="/Contacto">CONTACTO</Link>
          </div>

          <div className="footer__column">
            <h4>CONTACTO</h4>
            <p>Guillermo Tell 135, San Jeronimo Norte</p>
            <p>+54 3404 417996</p>
            <a href="mailto:DarioColoParedes@gmail.com">DarioColoParedes@gmail.com</a>
          </div>

          <div className="footer__column footer__social">
            <h4>SÍGUENOS</h4>
            <div>
              <button><i className="fab fa-facebook-f"></i></button>
              <button><i className="fab fa-whatsapp"></i></button>
              <button><i className="fab fa-instagram"></i></button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 ALTEVA MUEBLES. TODOS LOS DERECHOS RESERVADOS.</span>
          <div>
            <a href="#inicio">PRIVACIDAD</a>
            <a href="#inicio">TÉRMINOS</a>
          </div>
        </div>
      </footer>
)
}
export default Footer
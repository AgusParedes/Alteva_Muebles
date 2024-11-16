import { Link } from 'react-router-dom'
import Logo_alteva from '../../assets/Logo_alteva.png'
import Logo_letras from '../../assets/Logo_letras.png'
import './Header.scss'



export const Header = () =>{
   
      return(
   <header className='header'>
      <div className='header__container'>
         <div className='header_img_container'>
            <img src={Logo_alteva} alt="Logo" />
            <img src={Logo_letras} alt="Logo" className='letras_logo'/>
         </div>
         <nav class="NavBar">
            <Link to="/" className='inicio_page_header'>INICIO</Link>
            <Link to="" className='productos_page_header'>PRODUCTOS</Link>
            <Link to="" className='sobreNosotros_page_header'>SOBRE NOSTROS</Link>
            <Link to="/Contacto" className='sobreNosotros_page_header'>CONTACTO</Link>
         </nav>
         <div className='header_redes_container'>
            <a href="https://www.facebook.com/profile.php?id=100063653134693" target="_blank" class="icono_redes"><i class="fab fa-facebook-f"></i></a>
            <a href="https://api.whatsapp.com/send?phone=%2B5493404417996&data=AWBrttyS9oVC_GaCzsU3SS8WFODgnkWHJz4FdpjBJG_Gg7E1J5Lm_1o4eHd-n6tbdvcKDi8xlg140Kr51LwJmwAZ2AaZ_xUoJKPQ1cKKDxe5FWhsX5u4WwsgFCMj1gLOtB-4ljQ_IAgMClmNzN9t8cgfvrorFUrFp-yeWPc-g2fvsxc0qTSR-rMAyNUhFABSpZAWAdKM1ayHcnOEz3_D4NlL0RjEhElmNRyrxz8qAphq48cVOQb7yf6omZuLkChJPlq7muLrvnSmZoHWz6AySP1Lr4zoc25d7IDZyF0iUhJAsaN8AKA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1WcVThJwP41mPqP2urw7_e2Us64wVNquBq9ZqBYP0N9-AynQxxDv2qyEo" target="_blank" class="icono_redes"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/dario.j.p/" target="_blank" class="icono_redes"><i class="fab fa-instagram"></i></a>
         </div>
      </div>
   </header>
      )
}
export default Header
import './Footer.scss'
import Logo_alteva from '../../assets/Logo_alteva.png'
import Logo_alteva_blanco from '../../assets/Logo_alteva_blanco.png'

export const Footer = () => {

    return(
    <footer>
        <div className='div_containerFooter'>
            <div className='div_footerIzq'>
                <p>©Copyright Alteva- 2024. Todos los derechos reservados.</p>
            </div>
            <div className='div_footerMed'>
                <div>
                    <img src={Logo_alteva} alt="logo" />
                </div>
                <p>
                    CONTACTO: 3404417996
                </p>
                <div className='div_redesFooter'>
                    <a href="https://www.facebook.com/profile.php?id=100063653134693" target="_blank" class="icono_redes"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=%2B5493404417996&data=AWBrttyS9oVC_GaCzsU3SS8WFODgnkWHJz4FdpjBJG_Gg7E1J5Lm_1o4eHd-n6tbdvcKDi8xlg140Kr51LwJmwAZ2AaZ_xUoJKPQ1cKKDxe5FWhsX5u4WwsgFCMj1gLOtB-4ljQ_IAgMClmNzN9t8cgfvrorFUrFp-yeWPc-g2fvsxc0qTSR-rMAyNUhFABSpZAWAdKM1ayHcnOEz3_D4NlL0RjEhElmNRyrxz8qAphq48cVOQb7yf6omZuLkChJPlq7muLrvnSmZoHWz6AySP1Lr4zoc25d7IDZyF0iUhJAsaN8AKA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1WcVThJwP41mPqP2urw7_e2Us64wVNquBq9ZqBYP0N9-AynQxxDv2qyEo" target="_blank" class="icono_redes"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/dario.j.p/" target="_blank" class="icono_redes"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className='div_footerDer'>
                
            </div>
        </div>
        
    </footer>
)
}
export default Footer
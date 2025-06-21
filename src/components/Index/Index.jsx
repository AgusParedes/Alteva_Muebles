import './Index.scss';
import { Link } from 'react-router-dom'
import { ColorCarrusel } from '../ColorCarrusel/ColorCarrusel.jsx'
import { UltimosMuebles } from '../UltimosMuebles/UltimosMuebles.jsx'
import 'animate.css';



export const Index = () =>{

   return(
      <>
      <div class="grid_container_foto_index">
         <div class="foto_index_izq"><img src="/public/Foto_index_1.png" alt="" /></div>
            <div class="foto_index_med">
               <div class="div_texto_fotoMed">
                  <div>
                  <p class="animate__animated animate__fadeInUp animate__delay-0.3s text_foto_index">MUEBLES DE MELAMINA</p>
                  <p class="animate__animated animate__fadeInUp animate__delay-0.3s text_foto_index">A MEDIDA</p>
                  </div>
                  <div>
                     <div className='boton_foto_index animate__animated animate__fadeInUp animate__delay-0.3s'>
                        <a href={`https://wa.me/5493404417996?text=${encodeURIComponent(`¡Hola! 👋 Estoy interesado/a en realizar un mueble con ustedes. ¿Podrian ayudarme?`)}`} target="_blank" rel="noopener noreferrer">CONSEGUÍ EL TUYO</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="foto_index_der"><img src="/public/Foto_index_3.png" alt=""/></div>
         </div>
         <div className='div_titulos_index'>
         <h4>CATEGORIAS</h4>
         </div>
         <div className='div_categorias_index_conteiner'>
            <div className='div_categoria'>
               <Link to="/Productos/Cocina" className='div_icono'><img src="/public/icono_cocina.png" alt="" /></Link>
               <p>COCINA</p>
            </div>
            <div className='div_categoria'>
               <Link to="/Productos/Placard y Vestidor" className='div_icono'><img src="/public/icono_vestidor.png" alt="" /></Link>
               <p>PLACARD Y VESTIDOR</p>
            </div>
            <div className='div_categoria'>
               <Link to="/Productos/Mueble y Rack de TV" className='div_icono'><img src="/public/icono_rackDeTv.png" alt="" /></Link>
               <p>MUEBLE Y RACK DE TV</p>
            </div>
            <div className='div_categoria'>
               <Link to="/Productos/Cama" className='div_icono'><img src="/public/icono_cama.png" alt="" /></Link>
               <p>RESPALDAR Y CAMA</p>
            </div>
            <div className='div_categoria'>
               <Link to="/Productos/Escritorio" className='div_icono'><img src="/public/icono_escritorio.png" alt="" /></Link>
               <p>ESCRITORIO</p>
            </div>
            <div className='div_categoria'>
               <Link to="/Productos/Otros" className='div_icono'><img src="/public/icono_pregunta.png" alt="" /></Link>
               <p>OTRO</p>
            </div>
         </div>
         <div className='div_titulos_index'>
            <h4>NUESTROS COLORES</h4>
         </div>
         <ColorCarrusel/>
         <div className='div_botonVerColores'>
            <div>
               <Link to="/Colores">VER TODOS LOS COLORES</Link>
            </div>
         </div> 
         <div className='div_titulos_index'>
            <h4>ULTIMOS MUEBLES</h4>
         </div>
         <div>
            <UltimosMuebles/>
         </div>
        
      </>
   )
}
export default Index
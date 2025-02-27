import './Index.scss';
import { Link } from 'react-router-dom'
import { ColorCarrusel } from '../ColorCarrusel/ColorCarrusel.jsx'
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
                  <div>
                        <button class="boton_foto_index animate__animated animate__fadeInUp animate__delay-0.3s">CONSEGUÍ EL TUYO</button>
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
               <div className='div_icono'><img src="/public/icono_cocina.png" alt="" /></div>
               <p>COCINA</p>
            </div>
            <div className='div_categoria'>
               <div className='div_icono'><img src="/public/icono_vestidor.png" alt="" /></div>
               <p>VESTIDOR</p>
            </div>
            <div className='div_categoria'>
               <div className='div_icono'><img src="/public/icono_rackDeTv.png" alt="" /></div>
               <p>RACK DE TV</p>
            </div>
            <div className='div_categoria'>
               <div className='div_icono'><img src="/public/icono_cama.png" alt="" /></div>
               <p>CAMA</p>
            </div>
            <div className='div_categoria'>
               <div className='div_icono'><img src="/public/icono_escritorio.png" alt="" /></div>
               <p>ESCRITORIO</p>
            </div>
            <div className='div_categoria'>
               <div className='div_icono'><img src="/public/icono_pregunta.png" alt="" /></div>
               <p>OTRO</p>
            </div>
         </div>
         <div className='div_titulos_index'>
            <h4>NUESTROS COLORES</h4>
         </div>
         <ColorCarrusel/>
         <div className='div_botonVerColores'>
            <div>
               <Link>VER TODOS LOS COLORES</Link>
            </div>
         </div>
         <div className='ESPACIO'>
         </div>
      </>
   )
}
export default Index
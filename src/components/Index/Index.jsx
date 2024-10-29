import './Index.scss';
import { ColorCarrusel } from '../ColorCarrusel/ColorCarrusel.jsx'



export const Index = () =>{

   return(
      <>
      <div class="grid_container_foto_index">
         <div class="foto_index_izq"><img src="/public/Foto_index_1.png" alt="" /></div>
            <div class="foto_index_med">
               <div class="div_texto_fotoMed">
                  <div>
                     <p class="text_foto_index">MUEBLES DE MELAMINA</p>
                     <span class="text_foto_index">A MEDIDA</span>
                     <div>
                        <button class="boton_foto_index">CONSEGUÍ EL TUYO</button>
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

      </>
   )
}
export default Index
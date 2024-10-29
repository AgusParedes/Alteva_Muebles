import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import { collection, getDocs,} from 'firebase/firestore'  
import { db } from '../../Firebase/config'
import ColorCard from '../ColorCard/ColorCard.jsx'
import './ColorCarrusel.scss'

export const ColorCarrusel = () =>{
    const [colores, setcolores] = useState([]);

    useEffect(() => {
    
        const coloresRef = collection(db, "Colores")
    
        getDocs(coloresRef)
        .then((resp) => {
            const docs = resp.docs.map((doc) => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setcolores(docs)
            console.log(docs)
        })
        .catch(e => console.log(e))
    },[])

        const obtenerGrupoColores = (Grupo) => {
            return colores.filter((color) => color.grupo === Grupo).slice(0, 4);
        };


    return(
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <div className='div_carousel_container'>
                {obtenerGrupoColores('1').map((color) => (
                    <div className='div_colores' key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores'>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                </div>
                <div className='div_colores'>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                    <div className='div_card-color_container'>
                        <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                        <div className='div_color-title'><p>AMBERES 2</p></div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='div_carousel_container'>
              <div className='div_colores'>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
              </div>
              <div className='div_colores'>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
                 <div className='div_card-color_container'>
                    <div className='div_color-img'><img src="https://www.faplaconline.com.ar/home/medias/AR-058DMT-MEL-base-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTUzNjB8aW1hZ2UvanBlZ3xhR05qTDJneFppODRPREUyT1RJM09EWTJPVEV3TDBGU1h6QTFPRVJOVkY5TlJVeGZZbUZ6WlY4eE1qQXdWM2d4TWpBd1NBfDUyNmM2MzU0OWRmYmYwMGE0N2Q2NzRkMmE2NTY1NTAxNjAzNzY3MTgxMzk0MmM5ZDAxMTdiNWY0NTk3MDg3MzI" alt="AMBERES" /></div>
                    <div className='div_color-title'><p>AMBERES 3</p></div>
                 </div>
              </div>
           </div>
        </Carousel.Item>
     </Carousel>
    )
}
export default ColorCarrusel


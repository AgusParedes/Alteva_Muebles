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
                <div className='div_colores' >
                {obtenerGrupoColores('1').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('2').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('3').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('4').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('5').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('6').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('7').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('8').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('9').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('10').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('11').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('12').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('13').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('14').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('15').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
                <div className='div_colores' >
                {obtenerGrupoColores('16').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className='div_carousel_container'>
                <div className='div_colores' >
                {obtenerGrupoColores('17').map((color) => (
                    <div key={color.id}>
                        <ColorCard item={color} />
                    </div>
                ))}
                </div>
            </div>
        </Carousel.Item>
     </Carousel>
    )
}
export default ColorCarrusel


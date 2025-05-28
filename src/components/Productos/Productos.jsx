import './Productos.scss'
import Logo_alteva from '../../assets/Logo_alteva.png'
import React, { useEffect, useState } from 'react';
import { collection, getDocs,} from 'firebase/firestore'  
import { db } from '../../Firebase/config'

export const Productos = () =>{
   const [muebles, setmuebles] = useState([]);
   
       useEffect(() => {
       
           const mueblesRef = collection(db, "Muebles")
       
           getDocs(mueblesRef)
           .then((resp) => {
               const docs = resp.docs.map((doc) => {
                   return{
                       id: doc.id,
                       ...doc.data()
                   }
               })
               setmuebles(docs)
               console.log(docs)
           })
           .catch(e => console.log(e))
       },[])

    return(
        <>
        <div className='productos_container'>
          <section>
            {muebles.map((muebles) => (
            <div className="productCard-tag">
              <img src={muebles.img1} alt="Mueble" className="productCard-image" />
              <span className="productCard-tag-label">{muebles.categoria}</span>
              <div className="productCard-text">
                <h4 className="productCard-title">{muebles.titulo}</h4>
                <div className="productCard-link">
                  <div>
                    <a href="/mueble/placard-moderno" >VER MAS</a>
                  </div>
                </div>
              </div>
            </div>))}
          </section>
          </div>
        </>
    )
}
export default Productos
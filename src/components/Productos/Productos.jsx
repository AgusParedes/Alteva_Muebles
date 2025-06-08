import './Productos.scss'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ProductCard from '../ProductCard/ProductCard.jsx';

export const Productos = () => {
  const [muebles, setMuebles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const MueblesPorPagina = 12; 

  useEffect(() => {
    const mueblesRef = collection(db, 'Muebles');

    getDocs(mueblesRef)
      .then((resp) => {
        const docs = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMuebles(docs);
      })
      .catch((e) => console.log(e));
  }, []);

 
  const indexDelUltimoMueble = currentPage * MueblesPorPagina; 
  const indexDelPrimerMueble = indexDelUltimoMueble - MueblesPorPagina; 
  const currentItems = muebles.slice(indexDelPrimerMueble, indexDelUltimoMueble);

  const totalPages = Math.ceil(muebles.length / MueblesPorPagina);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="productos_container">
        <section>
          {currentItems.map((mueble) => (
            <ProductCard key={mueble.id} item={mueble} />
          ))}
        </section>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;

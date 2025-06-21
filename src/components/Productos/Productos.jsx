import './Productos.scss';
import React, { useEffect, useState, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { useParams } from 'react-router-dom';
import { CargandoItem } from '../CargandoItem/CargandoItem'; 

export const Productos = () => {
  const [muebles, setMuebles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cargando, setCargando] = useState(true); 
  const MueblesPorPagina = 12;
  const { categoryId } = useParams();
  const productosRef = useRef(null);

  useEffect(() => {
    setCargando(true); // ✅ Antes de cargar datos

    const mueblesRef = collection(db, 'Muebles');
    const q = categoryId
      ? query(mueblesRef, where('categoria', '==', categoryId))
      : mueblesRef;

    getDocs(q)
      .then((resp) => {
        const docs = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMuebles(docs);
        setCurrentPage(1);
      })
      .catch((e) => console.log(e))
      .finally(() => setCargando(false)); 
  }, [categoryId]);

  const indexDelUltimoMueble = currentPage * MueblesPorPagina;
  const indexDelPrimerMueble = indexDelUltimoMueble - MueblesPorPagina;
  const currentItems = muebles.slice(indexDelPrimerMueble, indexDelUltimoMueble);

  const totalPages = Math.ceil(muebles.length / MueblesPorPagina);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [currentPage]);

  return (
    <div className="productos_container" ref={productosRef}>
      {cargando ? (
        <CargandoItem /> 
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Productos;

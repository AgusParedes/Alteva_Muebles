import './Productos.scss';
import React, { useEffect, useState, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import { CargandoItem } from '../CargandoItem/CargandoItem';

export const Productos = () => {
  const [muebles, setMuebles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const MueblesPorPagina = 12;
  const { categoryId } = useParams();
  const productosRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    setCargando(true);

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
      })
      .catch((e) => console.log(e))
      .finally(() => setCargando(false));
  }, [categoryId]);

  const indexDelUltimoMueble = pageParam * MueblesPorPagina;
  const indexDelPrimerMueble = indexDelUltimoMueble - MueblesPorPagina;
  const currentItems = muebles.slice(indexDelPrimerMueble, indexDelUltimoMueble);

  const totalPages = Math.ceil(muebles.length / MueblesPorPagina);

  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pageParam]);

  return (
    <div className="productos_container" ref={productosRef}>
      {cargando ? (
        <CargandoItem />
      ) : (
        <>
          <section>
            {currentItems.map((mueble) => (
              <ProductCard key={mueble.id} item={mueble} pageParam= {pageParam} currentPage={pageParam} />
            ))}
          </section>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={pageParam === index + 1 ? 'active' : ''}
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

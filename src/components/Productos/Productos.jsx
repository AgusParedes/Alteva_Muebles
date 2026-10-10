// Productos.jsx
import './Productos.scss';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import { CargandoItem } from '../CargandoItem/CargandoItem';

const ITEMS_POR_CARGA = 6;

export const Productos = () => {
  const [muebles, setMuebles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [orden, setOrden] = useState('recomendados');
  const { categoryId } = useParams();
  const productosRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;

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

  const cantidadVisible = Math.min(pageParam * ITEMS_POR_CARGA, muebles.length);
  const currentItems = muebles.slice(0, cantidadVisible);
  const hayMas = cantidadVisible < muebles.length;

  const handleCargarMas = () => {
    setSearchParams({ page: pageParam + 1 });
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [categoryId]);

  return (
    <div className="productos_container" ref={productosRef}>
      <div className="productos_header">
        <h1 className="productos_titulo">
          {categoryId ? categoryId : 'Nuestro Catálogo'}
        </h1>
        <p className="productos_descripcion">
          Explora nuestra colección de mobiliario a medida. Cada pieza es
          diseñada para integrarse armónicamente en tu hogar, combinando
          funcionalidad moderna con calidez orgánica.
        </p>
      </div>

      {cargando ? (
        <CargandoItem />
      ) : (
        <>

          <section>
            {currentItems.map((mueble) => (
              <ProductCard key={mueble.id} item={mueble} pageParam={pageParam} />
            ))}
          </section>

          {hayMas && (
            <button className="cargar_mas" onClick={handleCargarMas}>
              Cargar más
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Productos;
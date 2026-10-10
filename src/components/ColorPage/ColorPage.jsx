import './ColorPage.scss';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ColorCard from '../ColorCard/ColorCard'; // ajustá la ruta según donde tengas el archivo

const CATEGORIAS = [
  { key: 'todos', label: 'Todos' },
  { key: 'oscuro', label: 'Colores oscuros' },
  { key: 'claro', label: 'Colores claros' },
  { key: 'maderaO', label: 'Símil madera oscura' },
  { key: 'maderaC', label: 'Símil madera clara' },
];

export const ColorPage = () => {
  const [colores, setColores] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  useEffect(() => {
    const coloresRef = collection(db, 'Colores');

    getDocs(coloresRef)
      .then((resp) => {
        const docs = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setColores(docs);
      })
      .catch((e) => console.log(e));
  }, []);

  const obtenerGrupoColores = (tonalidad) => {
    if (tonalidad === 'todos') return colores;
    return colores.filter((color) => color.tonalidad === tonalidad);
  };

  const grupoActual = obtenerGrupoColores(categoriaSeleccionada);

  return (
    <>
      <div className="div_introduccionCP">
        <div>
          <div className="eyebrow_introduccionCP">Catálogo de materiales</div>
          <div className="titulo_introduccionCP">Colores &amp; Texturas</div>
          <div className="descripcion_introduccionCP">
            Contamos con una selecta gama de tonos lisos y texturas táctiles desarrolladas para
            integrarse en proyectos de arquitectura interior de alta gama. Seleccioná una categoría
            para explorar la paleta.
          </div>
        </div>
      </div>

      {/* Botones de categoría */}
      <div className="categoria-selector">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.key}
            className={`categoria-btn ${categoriaSeleccionada === cat.key ? 'active' : ''}`}
            onClick={() => setCategoriaSeleccionada(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="contador_colores">
        <span className="punto_contador" />
        Mostrando {grupoActual.length} acabado{grupoActual.length === 1 ? '' : 's'} disponible
        {grupoActual.length === 1 ? '' : 's'}
      </div>

      {/* Galería según categoría seleccionada */}
      <div className="colores_container">
        <div className="colorGrupo_container">
          {grupoActual.map((color) => (
            <ColorCard key={color.id} item={color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPage;

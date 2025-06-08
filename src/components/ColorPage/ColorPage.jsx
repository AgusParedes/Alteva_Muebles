import './ColorPage.scss';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { ButtonGroup, Button } from 'react-bootstrap';

export const ColorPage = () => {
  const [colores, setColores] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('oscuro');

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
    return colores.filter((color) => color.tonalidad === tonalidad);
  };

  return (
    <>
      <div className='div_introduccionCP'>
        <div>
          <div className='titulo_introduccionCP'>COLORES</div>
          <div className='descripcion_introduccionCP'>
            Contamos con una extensa gama de tonos, algunos con textura y otros lisos, pensados para adaptarse a todos los estilos.
            Te recomendamos coordinar una reunión para ver nuestro muestrario en persona, donde podrás apreciar con mayor precisión los colores reales y las texturas disponibles.
          </div>
        </div>
      </div>

      {/* Botones de categoría */}
<div className="categoria-selector">
  {[
    { key: 'oscuro', label: 'Colores oscuros' },
    { key: 'claro', label: 'Colores claros' },
    { key: 'maderaO', label: 'Simil madera oscura' },
    { key: 'maderaC', label: 'Simil madera clara' },
  ].map((cat) => (
    <button
      key={cat.key}
      className={`categoria-btn ${categoriaSeleccionada === cat.key ? 'active' : ''}`}
      onClick={() => setCategoriaSeleccionada(cat.key)}
    >
      {cat.label}
    </button>
  ))}
</div>

      {/* Galería según categoría seleccionada */}
      <div className='colores_container'>
        <div className='colorGrupo_container'>
          {obtenerGrupoColores(categoriaSeleccionada).map((color) => (
            <div key={color.id}  className={`colorCard ${color.tonalidad === 'oscuro' ? 'bg-claro' : color.tonalidad === 'claro' ? 'bg-oscuro' : 'bg-madera'}`}>
              <div className='div_color-img'>
                <img src={color.img} alt={color.titulo} />
              </div>
              <div className='div_color-title'>{color.titulo}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPage;

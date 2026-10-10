// ProductCard.jsx
import './ProductCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = React.memo(({ item, pageParam }) => {
  return (
    <Link
      to={`/Producto/${item.id}?page=${pageParam}`}
      className="productCard_container"
    >
      <div className="productCard_imageWrapper">
        {item.nuevo && <span className="productCard_badge">NUEVO</span>}
        <img
          src={item.img1}
          alt={item.titulo}
          className="productCard_image"
          loading="lazy"
        />
      </div>

      <div className="productCard_text">
        {item.categoria && (
          <span className="productCard_category">{item.categoria}</span>
        )}
        <h3 className="productCard_title">{item.titulo}</h3>
        {item.descripcion && (
          <p className="productCard_description">{item.descripcion}</p>
        )}
        
      </div>
        <span className="productCard_button">
          Ver más
          <svg
            className="productCard_arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
    </Link>
  );
});

export default ProductCard;
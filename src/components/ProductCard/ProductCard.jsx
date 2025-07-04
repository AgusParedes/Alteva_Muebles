import './ProductCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = React.memo(({ item, pageParam }) => {
  return (
    <div className="productCard_container">
      <img
        src={item.img1}
        alt="Mueble"
        className="productCard_image"
        loading="lazy"
      />
      <span className="productCard_categoria">{item.categoria}</span>
      <div className="productCard_text">
        <h4 className="productCard_title">{item.titulo}</h4>
        <div className="productCard_link">
          <Link to={`/Producto/${item.id}?page=${pageParam}`}>
            <p>VER MAS</p>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;

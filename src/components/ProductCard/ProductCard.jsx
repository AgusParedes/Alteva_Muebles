import './ProductCard.scss';
import React from 'react';

const ProductCard = React.memo(({ item }) => {
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
          <a href={`/Producto/${item.id}`}>
            <p>VER MAS</p>
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;

import './ProductCard.scss';
import React from 'react';

const ProductCard = React.memo(({ item }) => {
  return (
    <div className="productCard-tag">
      <img
        src={item.img1}
        alt="Mueble"
        className="productCard-image"
        loading="lazy"
      />
      <span className="productCard-tag-label">{item.categoria}</span>
      <div className="productCard-text">
        <h4 className="productCard-title">{item.titulo}</h4>
        <div className="productCard-link">
          <div>
            <a href={`/mueble/${item.id}`}>VER MAS</a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;

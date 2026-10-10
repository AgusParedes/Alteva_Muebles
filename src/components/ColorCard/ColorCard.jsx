import './ColorCard.scss';

const ColorCard = ({ item }) => {
  return (
    <div className="div_card-color_container">
      <div className="div_color-img">
        <img src={item.img} alt={item.titulo} />
      </div>
      <div className="div_color-info">
        <p className="color-titulo">{item.titulo}</p>
        {(item.codigo || item.descripcion) && (
          <p className="color-detalle">
            {item.codigo}
            {item.codigo && item.descripcion ? ' • ' : ''}
            {item.descripcion}
          </p>
        )}
      </div>
    </div>
  );
};

export default ColorCard;

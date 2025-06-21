import { useNavigate } from "react-router-dom";
import CarruselSimple from "../CarruselSimple/CarruselSimple.jsx"; // asegurate de que el path sea correcto

export const ProductDetail = ({ Product }) => {
  const imagenes = [];
  const navigate = useNavigate();

  if (Product) {
    for (let i = 1; i <= 6; i++) {
      if (Product[`img${i}`]) {
        imagenes.push(Product[`img${i}`]);
      }
    }
  }

  return (<>
    <div className="div_botonVolver">
      <button className="volver-btn" onClick={() => navigate(-1)}>← Volver</button>
    </div>
    <div className="detalle-container">
      <div className="detail_texto">
        <h2 className="detalle-titulo">{Product.titulo}</h2>
        <div className="detalle-categoria-codigo">
          <span className="detalle-categoria">📁 {Product.categoria}</span>
          <span className="detalle-codigo">🆔 {Product.code}</span>
        </div>
        <p className="detalle-descripcion">{Product.descripcion}</p>
        <div className="div_buttonDetail">
          <a href={`https://wa.me/5493404417996?text=${encodeURIComponent(`¡Hola! 👋 Estoy interesado/a en uno de sus muebles el cual tiene ID: ${Product.code} y me gustaría recibir más información. `)}`} target="_blank" rel="noopener noreferrer">
            Si quierés algo con este estilo o parecido, hacé clic acá
          </a>
        </div>
      </div>
      <div className="detail_imagenes">
        {imagenes.length > 0 && <CarruselSimple images={imagenes} />}
      </div>
    </div>
  </>
    
  );
};

export default ProductDetail;

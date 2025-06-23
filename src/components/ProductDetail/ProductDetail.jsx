import { useNavigate, useLocation } from "react-router-dom";
import CarruselSimple from "../CarruselSimple/CarruselSimple.jsx";

export const ProductDetail = ({ Product }) => {
  const imagenes = [];
  const navigate = useNavigate();
  const location = useLocation();

  // Leer el número de página desde la URL (ej: ?page=2)
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  if (Product) {
    for (let i = 1; i <= 6; i++) {
      if (Product[`img${i}`]) {
        imagenes.push(Product[`img${i}`]);
      }
    }
  }

  return (
    <>
      <div className="div_botonVolver">
        <button
          className="volver-btn"
          onClick={() => {
            if (page) {
              navigate(`/Productos?page=${page}`);
            } else {
              navigate(-1);
            }
          }}
        >
          ← Volver
        </button>
      </div>

      <div className="detail_container">
        <div className="detail_texto">
          <h2 className="detail_titulo">{Product.titulo}</h2>
          <div className="detail_info">
            <span className="detail-categoria">📁 {Product.categoria}</span>
            <span className="detail-codigo">🆔 {Product.code}</span>
          </div>
          <p className="detail_descripcion">{Product.descripcion}</p>
          <div className="div_buttonDetail">
            <a
              href={`https://wa.me/5493404417996?text=${encodeURIComponent(
                `¡Hola! 👋 Estoy interesado/a en uno de sus muebles el cual tiene ID: ${Product.code} y me gustaría recibir más información. `
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Si querés algo con este estilo o parecido, hacé clic acá
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

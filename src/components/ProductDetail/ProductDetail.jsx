import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export const ProductDetail = ({ Product, relatedProducts = [] }) => {
  const imagenes = [];
  const navigate = useNavigate();
  const location = useLocation();

  const [imagenActiva, setImagenActiva] = useState(0);

  // NUEVO: controla si el modal está abierto
  const [imagenGrande, setImagenGrande] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  if (Product) {
    for (let i = 1; i <= 6; i++) {
      if (Product[`img${i}`]) {
        imagenes.push(Product[`img${i}`]);
      }
    }
  }

  const whatsappHref = `https://wa.me/5493404417996?text=${encodeURIComponent(
    `¡Hola! 👋 Estoy interesado/a en uno de sus muebles el cual tiene ID: ${Product.code} y me gustaría recibir más información. `
  )}`;

  return (
    <>
      <div className="detail_container">
        <div className="detail_imagenes">

          <div
            className="detail_imagen_principal"
            onClick={() => setImagenGrande(true)}
          >
            {Product.nuevo && <span className="badge_nuevo">Nuevo</span>}

            {imagenes.length > 0 && (
              <img
                src={imagenes[imagenActiva]}
                alt={Product.titulo}
              />
            )}
          </div>

          {imagenes.length > 1 && (
            <div className="detail_miniaturas">
              {imagenes.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`miniatura_btn ${
                    index === imagenActiva ? "activa" : ""
                  }`}
                  onClick={() => setImagenActiva(index)}
                  aria-label={`Ver imagen ${index + 1} de ${Product.titulo}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail_texto">
          <div className="detail_meta">
            <span className="detail_categoria">
              {Product.categoria}
            </span>

            <span className="detail_dot">•</span>

            <span className="detail_codigo">
              REF: {Product.code}
            </span>
          </div>

          <h2 className="detail_titulo">
            {Product.titulo}
          </h2>

          <div className="div_buttonDetail">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn_vermas"
              title="Contactanos por WhatsApp para más información sobre este mueble"
            >
              PARA ALGO PARECIDO, HAZ CLICK AQUÍ
            </a>
          </div>

          <p className="detail_descripcion">
            {Product.descripcion}
          </p>

          <hr className="detail_divider" />
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="otros_muebles">
          <div className="otros_muebles_container">

            <div className="otros_muebles_header">
              <div>
                <h3 className="otros_muebles_titulo">
                  Mas muebles de {Product.categoria}
                </h3>

                <p className="otros_muebles_subtitulo">
                  Explora otras piezas y soluciones a medida diseñadas para
                  complementar tu espacio de{" "}
                  {Product.categoria?.toLowerCase()}.
                </p>
              </div>

              <Link
                to={`/Productos/${encodeURIComponent(Product.categoria)}`}
                className="ver_todo_link"
              >
                Ver todo en {Product.categoria} →
              </Link>
            </div>

            <div className="otros_muebles_grid">
              {relatedProducts.map((item) => (
                <div
                  className="otros_muebles_card"
                  key={item.id}
                >
                  <div className="otros_muebles_img">
                    <img
                      src={item.img1}
                      alt={item.titulo}
                    />
                  </div>

                  <div className="div_titulo_otros_muebles">  
                    <h4 className="otros_muebles_card_titulo">
                      {item.titulo}
                    </h4>
                  </div>

                  <Link
                    to={`/producto/${item.id}`}
                    className="ver_mas_card"
                  >
                    Ver más 
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==============================
          MODAL / IMAGEN GRANDE
         ============================== */}

      {imagenGrande && (
        <div
          className="imagen_modal"
          onClick={() => setImagenGrande(false)}
        >
          <button
            type="button"
            className="imagen_modal_cerrar"
            onClick={() => setImagenGrande(false)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <img
            src={imagenes[imagenActiva]}
            alt={Product.titulo}
            className="imagen_modal_img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
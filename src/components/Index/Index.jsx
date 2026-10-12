import "./Index.scss";
import {
  ArrowRight,
  Truck,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import otros from "../../assets/Otros.jpg";
import living from "../../assets/escritorio10_1-2_ihdyq7.jpg";
import dormitorio from "../../assets/Dormitorio.jpeg";
import cocina from "../../../public/Foto_index_1.png";
import ColorOscuro from "../../assets/ColorOscuro.jpg";
import ColorClaro from "../../assets/ColorClaro.jpg";
import SimilMaderaOscuro from "../../assets/SimilMaderaOscuro.jpg";
import SimilMaderaClaro from "../../assets/SimilMaderaClaro.jpg";

const categories = [
  {
    title: "Cocinas",
    description: "Funcionalidad y estética",
    image: cocina,
    className: "category-card",
    link: "/Productos/Cocina"
  },
  {
    title: "Dormitorios",
    description: "Descanso diseñado",
    image: dormitorio,
    className: "category-card",
    link: "/Productos/Dormitorio"
  },
  {
    title: "Living/Oficina",
    description: "Diseño y confort",
    image: living,
    className: "category-card",
    link: "/Productos/Living-Oficina"
  },
  {
    title: "Otros",
    description: "Variedad de soluciones",
    image: otros,
    className: "category-card",
    link: "/Productos/Otros"
  },
];

const materials = [
  {
    title: "COLORES OSCUROS",
    description: "Tono elegante y sofisticado",
    image: ColorOscuro,
  },
  {
    title: "COLORES CLAROS",
    description: "Tono suave y luminoso",
    image: ColorClaro,
  },
  {
    title: "SÍMIL MADERA OSCURO",
    description: "Calidez profunda y natural",
    image: SimilMaderaOscuro,
  },
  {
    title: "SÍMIL MADERA CLARO",
    description: "Calidez suave y natural",
    image: SimilMaderaClaro,
  },
];

function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <div className="feature__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function Index() {
  return (
    <div className="home">
      <main>
        <section className="hero" id="inicio">
          <h1>Diseño que transforma tu hogar.</h1>
          <p className="hero__text">Diseñamos muebles que combinan estética, funcionalidad y calidad para cada ambiente de tu hogar.
          </p>

          <div className="hero__buttons">
            <a href="/Productos" className="button button--primary">
              EXPLORAR CATÁLOGO
            </a>
            <a href="https://wa.me/5493404417996?text=%C2%A1Hola!%20%F0%9F%91%8B%20Estoy%20interesado%2Fa%20en%20realizar%20un%20mueble%20con%20ustedes.%20%C2%BFPodrian%20ayudarme%3F" className="button button--outline">
              SOLICITAR ASESORÍA
            </a>
          </div>
        </section>

        <section className="features" id="nosotros">
          <Feature
            icon={<Wrench size={19} />}
            title="Diseño a medida"
            text="Adaptamos cada pieza a tu espacio y estilo de vida con precisión artesanal."
          />
          <Feature
            icon={<BadgeCheck size={19} />}
            title="Calidad Garantizada"
            text="Materiales seleccionados y procesos rigurosos para muebles que perduran."
          />
          <Feature
            icon={<Truck size={19} />}
            title="Transporte e Instalación"
            text="Los servicios incluyen el transporte e instalación del mueble."
          />
        </section>
    
        <section className="categories section" id="productos">
          <div className="section__heading">
            <div>
              <p className="eyebrow">ESPACIOS</p>
              <h2>Explora por categoría</h2>
            </div>
            <a href="/Productos" className="section__link">
              Ver todos los Productos <ArrowRight size={14} />
            </a>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article
                className={category.className}
                key={category.title}
                style={
                  category.image
                    ? { backgroundImage: `url(${category.image})` }
                    : undefined
                }
              >
                {category.className.includes("--empty") && (
                  <div className="category-card__placeholder">
                    <span>▧</span>
                  </div>
                )}
  
                <a className="category-card__overlay" href={category.link} />
                <div className="category-card__content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="materials section">
          <div className="materials__heading">
            <p className="eyebrow">MATERIALES NOBLES</p>
            <h2>Nuestros Acabados</h2>
          </div>

          <div className="materials-grid">
            {materials.map((material) => (
              <article className="material" key={material.title}>
                <img src={material.image} alt={material.title} />
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </article>
            ))}
          </div>

          <a href="/Colores" className="button button--outline materials__button">
            VER TODOS LOS COLORES
          </a>
        </section>
      </main>

    </div>
  );
}
export default Index;
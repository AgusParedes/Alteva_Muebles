import React from 'react';
import './SobreNosotros.scss';

/* ---------- Iconos inline (sin dependencias externas) ---------- */

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M6.5 10.2l2.3 2.3 4.7-5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <rect x="4.5" y="9" width="11" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <path
      d="M2.5 9.3l3-2.6c.6-.5 1.5-.5 2.1 0l.9.9 2-1.7c.6-.5 1.5-.5 2.1 0l3.4 3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10.2l3 3.1c.6.6 1.6.6 2.2 0l.2-.3M17 10.6l-2.8 3a1.6 1.6 0 0 1-2.3 0l-2.4-2.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
    <rect x="2.5" y="5" width="15" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2.5 8.3h15" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

/* ---------- Datos de contenido ---------- */

const VALUES = [
  {
    number: '01',
    title: 'Funcionalidad',
    text: 'Aprovechamiento milimétrico de cada rincón útil.',
  },
  {
    number: '02',
    title: 'Estética',
    text: 'Líneas puras, texturas cálidas y acabados armónicos.',
  },
  {
    number: '03',
    title: 'Durabilidad',
    text: 'Estructuras sólidas, melamina de calidad y herrajes premium.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Relevamiento & Diseño',
    text: 'Escuchamos tus requerimientos, tomamos medidas exactas y planificamos la disposición funcional.',
    tag: 'Paso inicial',
  },
  {
    number: '02',
    title: 'Selección de Materiales',
    text: 'Elegimos juntos las texturas de melamina, herrajes de amortiguación y detalles arquitectónicos.',
    tag: 'Definición técnica',
  },
  {
    number: '03',
    title: 'Fabricación en Taller',
    text: 'Cortes precisos, terminaciones cuidadas y prearmado de prueba para un calce perfecto.',
    tag: 'Manufactura de precisión',
  },
  {
    number: '04',
    title: 'Instalación Impecable',
    text: 'Montaje limpio, rápido y cuidadoso a cargo de nuestro propio equipo técnico en tu domicilio.',
    tag: 'Entrega & Conformidad',
  },
];

/* ---------- Subcomponente: tarjeta de etapa de pago ---------- */

function StageCard({ tag, step, percent, label, text, items, footerIcon, footerText }) {
  return (
    <article className="stage-card">
      <div className="stage-card__top">
        <span className="stage-card__tag">
          <span className="dot" />
          {tag}
        </span>
        <span className="stage-card__step">{step}</span>
      </div>

      <div className="stage-card__headline">
        <span className="stage-card__percent">{percent}</span>
        <span className="stage-card__label">{label}</span>
      </div>

      <p className="stage-card__text">{text}</p>

      <ul className="stage-card__checklist">
        {items.map((item) => (
          <li key={item}>
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="stage-card__footer">
        {footerIcon}
        <span>{footerText}</span>
      </div>
    </article>
  );
}


export function SobreNosotros() {
  return (
    <div className="alteva-page">
      {/* ---------- Sección: ¿Quiénes somos? ---------- */}
      <section className="about">
        <div className="about__inner">
          <div className="about__content">
            <p className="eyebrow">Nuestros valores</p>
            <h1 className="about__title">¿Quiénes somos?</h1>
            <p className="about__lead">
              Alteva es una empresa familiar especializada en la creación de muebles a medida
              que combinan funcionalidad, estética y durabilidad. Con años de experiencia en
              carpintería, contamos con un amplio conocimiento que nos permite ofrecer
              soluciones únicas y creativas para cada cliente. Cuidamos cada detalle y nos
              comprometemos a entender tus necesidades para diseñar piezas que se adapten
              perfectamente a tu espacio y estilo de vida. Nuestro objetivo es transformar tus
              ideas en muebles que se destaquen por su calidad y diseño personalizado.
            </p>

            <div className="value-cards">
              {VALUES.map((v) => (
                <div className="value-card" key={v.number}>
                  <p className="value-card__eyebrow">{v.number} • Eje</p>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__text">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__media">
            {/* Reemplazá el src por la imagen real del taller */}
            <img
              className="about__image"
              src="/images/taller-alteva.jpg"
              alt="Carpinteros trabajando en el taller de Alteva"
            />
          </div>
        </div>
      </section>

      {/* ---------- Sección: Metodología de trabajo ---------- */}
      <section className="methodology">
        <div className="methodology__header">
          <p className="eyebrow">Metodología de trabajo</p>
          <h2 className="methodology__title">Cómo hacemos realidad tu proyecto</h2>
        </div>

        <div className="methodology__grid">
          {STEPS.map((s) => (
            <div className="step-card" key={s.number}>
              <span className="step-card__number">{s.number}</span>
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__text">{s.text}</p>
              <div className="step-card__footer">{s.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Sección: Pagos ---------- */}
      <section className="payments">
        <div className="payments__header">
          <p className="eyebrow">Transparencia & claridad</p>
          <h2 className="payments__title">Pagos</h2>
          <p className="payments__lead">
            Para comenzar con la fabricación del mueble, se solicita un adelanto del 70% del
            valor total, que se destina a la compra de materiales. El 30% restante se abona al
            momento de la entrega del mueble terminado.
          </p>
        </div>

        <div className="payments__grid">
          <StageCard
            tag="Etapa 1 • Inicio de proyecto"
            step="Paso 01/02"
            percent="70%"
            label="Adelanto inicial"
            text="Se destina a la compra de materiales para iniciar la fabricación."
            items={[
              'Compra inmediata de placas de melamina de primera línea',
              'Reserva y acopio de herrajes específicos y perfiles de aluminio',
              'Planificación y corte en banco de carpintería',
            ]}
            footerIcon={<LockIcon />}
            footerText="Garantiza el congelamiento de precio de materiales"
          />

          <StageCard
            tag="Etapa 2 • Conformidad & entrega"
            step="Paso 02/02"
            percent="30%"
            label="Entrega final"
            text="Se abona al momento de la entrega del mueble terminado."
            items={[
              'Revisión final de ajustes, bisagras y correderas con el cliente',
              'Entrega o instalación completa en el lugar asignado',
              'Activación directa de garantía de fabricación y ensamblado',
            ]}
            footerIcon={<HandshakeIcon />}
            footerText="Pago contra satisfacción y revisión presencial"
          />
        </div>

        <div className="payment-methods">
          <div className="payment-methods__label">
            <CardIcon />
            <span>Medios de pago aceptados</span>
          </div>
          <div className="payment-methods__badges">
            <span className="badge">
              Transferencia
              <br />
              bancaria
            </span>
            <span className="badge">
              Efectivo en
              <br />
              taller
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SobreNosotros;
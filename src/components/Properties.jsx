import { useState } from 'react';
import properties from '../data/properties';

function Properties() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = [
    'Todos',
    'Terrenos',
    'Casas',
    'Departamentos',
    'Locales',
    'Inmuebles saneados',
    'Oportunidades de inversión',
  ];

  const filteredProperties =
    activeFilter === 'Todos'
      ? properties
      : properties.filter(
          (property) => property.type === activeFilter
        );

  return (
    <section id="propiedades" className="properties section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            PROPIEDADES EN VENTA
          </p>

          <h2>
            Encuentra una propiedad
            <br />
            para tu próximo proyecto.
          </h2>

          <p>
            Explora nuestras propiedades disponibles y encuentra
            oportunidades para vivir o invertir.
          </p>
        </div>

        <div className="property-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? 'filter-button active'
                  : 'filter-button'
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="properties-grid">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="property-card"
            >
              <div className="property-image">

                <img
                  src={property.image}
                  alt={property.title}
                />

                <span className="property-type">
                  {property.type}
                </span>

              </div>

              <div className="property-content">

                <p className="property-location">
                  {property.location}
                </p>

                <h3>{property.title}</h3>

                <div className="property-details">

                  <div>
                    <span>Área</span>
                    <strong>{property.area}</strong>
                  </div>

                  <div>
                    <span>Precio</span>
                    <strong>{property.price}</strong>
                  </div>

                </div>

                <div className="property-legal">
                  <span>Situación legal</span>
                  <strong>{property.legalStatus}</strong>
                </div>

                <a
                  href="https://wa.me/"
                  className="whatsapp-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por WhatsApp
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Properties;
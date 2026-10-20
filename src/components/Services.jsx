import services from '../data/services';

function Services() {
  return (
    <section id="servicios" className="services section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            NUESTROS SERVICIOS
          </p>

          <h2>
            Soluciones inmobiliarias
            <br />
            de principio a fin.
          </h2>

          <p>
            Integramos servicios técnicos, legales y comerciales
            para acompañarte durante todo el proceso inmobiliario.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (
            <article
              key={service.id}
              className="service-card"
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contacto" className="service-link">
                Solicitar asesoría →
              </a>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
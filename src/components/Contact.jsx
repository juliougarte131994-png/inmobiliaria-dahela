function Contact() {
  return (
    <section id="contacto" className="contact section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            CONTACTO
          </p>

          <h2>
            Conversemos sobre
            <br />
            tu próximo proyecto.
          </h2>

          <p>
            Cuéntanos qué necesitas y nuestro equipo evaluará tu
            solicitud para orientarte hacia la solución inmobiliaria
            más adecuada.
          </p>
        </div>

        <div className="contact-layout">

          <div className="contact-info">

            <div className="contact-intro">
              <h3>
                Estamos para ayudarte.
              </h3>

              <p>
                Ya sea que quieras comprar, vender, sanear una
                propiedad, desarrollar un proyecto o construir,
                podemos acompañarte durante el proceso.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-detail">
                <span className="contact-detail-number">
                  01
                </span>

                <div>
                  <span>WhatsApp</span>
                  <strong>Solicitar atención</strong>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-number">
                  02
                </span>

                <div>
                  <span>Asesoría</span>
                  <strong>Agendar una consulta</strong>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-number">
                  03
                </span>

                <div>
                  <span>Propiedades</span>
                  <strong>Enviar propiedad para evaluación</strong>
                </div>
              </div>

            </div>

          </div>

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Nombre completo
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Celular
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ingresa tu celular"
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                Tipo de servicio
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>

                <option value="compra-venta">
                  Compra y venta de propiedades
                </option>

                <option value="saneamiento">
                  Saneamiento físico legal
                </option>

                <option value="habilitacion">
                  Habilitación urbana
                </option>

                <option value="proyectos">
                  Proyectos inmobiliarios
                </option>

                <option value="construccion">
                  Construcción
                </option>

                <option value="asesoria">
                  Asesoría inmobiliaria integral
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">
                Ubicación del inmueble
              </label>

              <input
                type="text"
                id="location"
                name="location"
                placeholder="Distrito, provincia y departamento"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Cuéntanos brevemente qué necesitas"
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Enviar solicitud
            </button>

            <p className="form-note">
              Al enviar este formulario, nuestro equipo podrá
              comunicarse contigo para brindarte mayor información.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
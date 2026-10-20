function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-eyebrow">
        GRUPO INMOBILIARIA DAHELA
        <br />
        TIERRA PROMETIDA
        </p>

        <h1>
          Construimos hogares,
          <br />
          unimos familias
          <br />
          y forjamos patrimonio.
        </h1>

        <p className="hero-description">
          Grupo Inmobiliaria Dahela: Tierra Prometida brinda soluciones integrales
          en compra, venta, saneamiento, habilitación urbana,
          construcción y desarrollo de proyectos inmobiliarios.
        </p>

        <div className="hero-buttons">
          <a href="#servicios" className="button button-primary">
            Ver servicios
          </a>

          <a href="#contacto" className="button button-secondary">
            Solicitar asesoría
          </a>

          <a href="#contacto" className="button button-outline">
            Publicar mi propiedad
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;
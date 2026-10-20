function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-logo">
        <span className="navbar-logo-main">
            GRUPO INMOBILIARIA DAHELA <br />
            TIERRA PROMETIDA
        </span>
        </a>

        <nav className="navbar-menu">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#propiedades">Propiedades</a>
          <a href="#metodo">Método Dahela</a>
          <a href="#blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="navbar-button">
          Solicitar asesoría
        </a>

      </div>
    </header>
  );
}

export default Navbar;
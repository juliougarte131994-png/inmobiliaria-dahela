import projects from '../data/projects';

function Projects() {
  return (
    <section id="proyectos" className="projects section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            PROYECTOS INMOBILIARIOS
          </p>

          <h2>
            Espacios pensados para
            <br />
            construir patrimonio.
          </h2>

          <p>
            Conoce nuestros proyectos y oportunidades de desarrollo
            inmobiliario.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-content">

                <p className="project-location">
                  {project.location}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-meta">
                  <span>
                    <strong>Área</strong>
                    {project.area}
                  </span>
                </div>

                <div className="project-benefits">
                  {project.benefits.map((benefit) => (
                    <span key={benefit}>
                      {benefit}
                    </span>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="project-button"
                >
                  Solicitar información
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
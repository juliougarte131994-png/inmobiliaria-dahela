import blogPosts from '../data/blog';

function Blog() {
  return (
    <section id="blog" className="blog section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            ESCUELA INMOBILIARIA DAHELA
          </p>

          <h2>
            Información para tomar
            <br />
            mejores decisiones.
          </h2>

          <p>
            Compartimos información práctica sobre propiedades,
            saneamiento, proyectos inmobiliarios y desarrollo urbano
            para ayudarte a tomar decisiones con mayor seguridad.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
            >
              <div className="blog-card-top">

                <span className="blog-category">
                  {post.category}
                </span>

                <span className="blog-number">
                  0{post.id}
                </span>

              </div>

              <div className="blog-card-content">

                <p className="blog-date">
                  {post.date}
                </p>

                <h3>{post.title}</h3>

                <p className="blog-excerpt">
                  {post.excerpt}
                </p>

                <a
                  href="#contacto"
                  className="blog-link"
                >
                  Solicitar asesoría →
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;
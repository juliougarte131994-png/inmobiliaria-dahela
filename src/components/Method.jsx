function Method() {
  const steps = [
    {
      number: '01',
      title: 'Evaluamos la propiedad',
      description:
        'Analizamos la situación técnica, legal y comercial del inmueble para identificar sus condiciones, oportunidades y posibles aspectos por regularizar.',
    },
    {
      number: '02',
      title: 'Diseñamos la solución',
      description:
        'Definimos la alternativa más adecuada según las necesidades del propietario, comprador o inversionista, ya sea compra, venta, saneamiento, habilitación o construcción.',
    },
    {
      number: '03',
      title: 'Gestionamos con seguridad',
      description:
        'Acompañamos el proceso documental, técnico y administrativo, procurando que cada etapa se desarrolle con orden, transparencia y respaldo profesional.',
    },
    {
      number: '04',
      title: 'Construimos valor',
      description:
        'Buscamos transformar terrenos e inmuebles en oportunidades de desarrollo y patrimonio, con una visión orientada a las familias y a la generación de valor sostenible.',
    },
  ];

  return (
    <section id="metodo" className="method section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-eyebrow">
            MÉTODO DAHELA
          </p>

          <h2>
            Un proceso pensado para
            <br />
            construir confianza.
          </h2>

          <p>
            Acompañamos cada decisión inmobiliaria mediante un proceso
            ordenado que integra evaluación, planificación, gestión y
            generación de valor.
          </p>
        </div>

        <div className="method-grid">
          {steps.map((step) => (
            <article
              key={step.number}
              className="method-card"
            >
              <span className="method-number">
                {step.number}
              </span>

              <div className="method-line"></div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Method;
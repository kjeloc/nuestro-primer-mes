import React, { useEffect, useRef } from 'react';

/**
 * Sección 2: Carta Principal "Para mi amor ❤️"
 * Diseñada como una carta íntima, con papiro oscuro, borde dorado sutil,
 * aparición suave por scroll y frases clave destacadas visualmente.
 */
export default function MainLetter() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = containerRef.current?.querySelectorAll('.letter-paragraph');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="carta-principal"
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic">
        {/* Encabezado de la carta */}
        <div
          className="letter-paragraph reveal-on-scroll"
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '0.85rem',
              color: 'var(--gold-accent)',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            Nuestra Historia
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: 'var(--text-pure)'
            }}
          >
            Para mi amor <span className="heart-pulsing">❤️</span>
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Cuerpo de la carta */}
        <div
          className="romantic-card"
          style={{
            padding: 'clamp(28px, 5vw, 56px)',
            background: 'linear-gradient(180deg, rgba(18, 14, 22, 0.85) 0%, rgba(10, 11, 18, 0.9) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(92, 15, 32, 0.12)'
          }}
        >
          {/* Párrafo 1 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-creme)', fontWeight: 400 }}>
              Mi amor, feliz primer mes juntos.
            </p>
          </div>

          {/* Párrafo 2 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Mi vida, este tiempo contigo ha sido muy bonito.
            </p>
          </div>

          {/* Párrafo 3 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Sé que no nos hemos podido ver como hubiésemos querido, pero hemos estado presentes a nuestra manera.
              Y eso también me hace valorar mucho más cada momento contigo.
            </p>
          </div>

          {/* Frase Destacada 1 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ margin: '32px 0' }}>
            <div className="quote-highlight" style={{ width: '100%' }}>
              “Soy muy feliz a tu lado, mi amor.”
            </div>
          </div>

          {/* Párrafo 4 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Me hace feliz seguirte conociendo, apoyándote y compartiendo contigo.
              Y estoy muy agradecido por siempre seguirme eligiendo.
            </p>
          </div>

          {/* Párrafo 5 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Mi amor, quiero seguir mejorando como hombre. No porque quiera ser perfecto,
              sino porque quiero seguir creciendo y aprendiendo para poder construir una bonita historia de amor a tu lado.
            </p>
          </div>

          {/* Frase Destacada 2 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ margin: '32px 0' }}>
            <div className="quote-highlight" style={{ width: '100%' }}>
              “Quiero seguir construyendo una bonita historia de amor a tu lado.”
            </div>
          </div>

          {/* Párrafo 6 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Este mes ha pasado volando. Parece que fue ayer que me estaba declarando en tu casita
              y que me hiciste muy feliz con tu respuesta mientras me besabas de la felicidad.
              Ese momento lo tengo muy presente, mi amor.
            </p>
          </div>

          {/* Párrafo 7 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              A veces las cosas no suceden como uno esperaría o como uno quisiera.
              Pero creo que lo importante es que las cosas han sido hechas de corazón.
              Y que siempre hemos tratado de priorizarnos y estar presentes a nuestra manera.
              Eso significa muchísimo para mí.
            </p>
          </div>

          {/* Frase Destacada 3 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ margin: '32px 0' }}>
            <div className="quote-highlight" style={{ width: '100%' }}>
              “Gracias por dejarme ser tu novio.”
            </div>
          </div>

          {/* Párrafo 8 */}
          <div className="letter-paragraph reveal-on-scroll" style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Gracias por elegirme, mi amor. Gracias por estar conmigo durante este primer mes.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '16px' }}>
              Quiero seguir conociéndote, seguir apoyándote, seguir creciendo y seguir construyendo nuestra historia juntos.
              No sé exactamente qué nos espera en los próximos meses, pero sí sé que quiero descubrirlo contigo.
            </p>
          </div>

          {/* Frase Destacada 4 y Despedida */}
          <div
            className="letter-paragraph reveal-on-scroll"
            style={{
              marginTop: '40px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'right'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)',
                color: 'var(--gold-accent)',
                fontStyle: 'italic',
                marginBottom: '8px'
              }}
            >
              Te quiero mucho, mi amor.
            </p>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
              Siempre tuyo ❤️
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

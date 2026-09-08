import React, { useEffect, useRef } from 'react';

/**
 * Sección 7: "Quiero seguir creciendo contigo."
 * Tono maduro, reflexivo y de compromiso sincero.
 */
export default function GrowthSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="crecer-juntos"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic">
        {/* Título de la sección */}
        <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            Un compromiso sincero
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--text-pure)'
            }}
          >
            Quiero seguir creciendo contigo.
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Tarjeta de contenido */}
        <div
          className="romantic-card reveal-on-scroll"
          style={{
            padding: 'clamp(28px, 5vw, 52px)',
            maxWidth: '720px',
            margin: '0 auto',
            border: '1px solid rgba(136, 19, 55, 0.35)'
          }}
        >
          <p
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-creme)',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}
          >
            Mi amor, sé que todavía tengo mucho que aprender.
            Sé que no soy perfecto y que tengo cosas que mejorar.
            Pero quiero hacerlo.
          </p>

          <p
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '28px'
            }}
          >
            Quiero seguir mejorando como hombre.
            Quiero aprender a escucharte mejor.
            Quiero apoyarte.
            Quiero cuidarte.
            Quiero seguir creciendo contigo.
          </p>

          <div
            style={{
              margin: '32px 0',
              padding: '20px 24px',
              background: 'linear-gradient(90deg, rgba(92, 15, 32, 0.4) 0%, rgba(14, 15, 23, 0.2) 100%)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--gold-accent)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                color: 'var(--text-pure)',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}
            >
              “No quiero que nuestra historia sea perfecta. Quiero que sea nuestra.
              Una historia en la que los dos podamos seguir aprendiendo, mejorando y eligiéndonos.”
            </p>
          </div>

          <div
            style={{
              paddingTop: '20px',
              textAlign: 'center'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                color: 'var(--gold-accent)',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              “Porque quiero seguir construyendo una bonita historia contigo, mi amor.”
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

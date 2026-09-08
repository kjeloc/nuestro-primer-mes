import React, { useEffect, useRef } from 'react';
import SpecialPhoto from './SpecialPhoto';

/**
 * Sección 3: El recuerdo de nuestra declaración
 * Título: "Parece que fue ayer..."
 * Contiene la narración del día en su casita y la única fotografía.
 */
export default function ProposalMemory() {
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="declaracion"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic" style={{ textAlign: 'center' }}>
        {/* Título de la sección */}
        <div className="reveal-on-scroll" style={{ marginBottom: '40px' }}>
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
            Aquel día especial
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: 'var(--text-pure)'
            }}
          >
            Parece que fue ayer...
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Secuencia progresiva de momentos */}
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <div className="reveal-on-scroll">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}
            >
              Mi declaración...
            </p>
          </div>

          <div className="reveal-on-scroll">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}
            >
              Tu respuesta...
            </p>
          </div>

          <div className="reveal-on-scroll">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}
            >
              Tu felicidad...
            </p>
          </div>

          <div className="reveal-on-scroll">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.3rem, 2.8vw, 1.65rem)',
                color: 'var(--text-creme)',
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              Y ese beso mientras celebrabas conmigo.
            </p>
          </div>
        </div>

        {/* ÚNICA Fotografía real de toda la experiencia */}
        <div className="reveal-on-scroll">
          <SpecialPhoto />
        </div>

        {/* Reflexiones finales de la declaración */}
        <div
          style={{
            maxWidth: '640px',
            margin: '40px auto 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <div className="reveal-on-scroll">
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.25rem, 2.6vw, 1.6rem)',
                color: 'var(--gold-accent)',
                fontStyle: 'italic',
                lineHeight: 1.5
              }}
            >
              “Mi amor, nunca voy a olvidar lo feliz que me hiciste ese día.”
            </p>
          </div>

          <div className="reveal-on-scroll">
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6
              }}
            >
              Ese es uno de esos momentos que quiero guardar para siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

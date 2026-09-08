import React, { useEffect, useRef } from 'react';

/**
 * Sección 12: Gran Final fullscreen.
 * Conmovedor, poético y culminante, con corazón luminoso sutil y botón para volver arriba.
 */
export default function GrandFinale({ onReturnToTop }) {
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
      id="gran-final"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 80px',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, rgba(92, 15, 32, 0.45) 0%, rgba(7, 8, 12, 0.98) 80%)',
        zIndex: 1
      }}
    >
      <div
        className="container-romantic"
        style={{
          maxWidth: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        {/* Corazón Luminoso Sutil */}
        <div
          className="reveal-on-scroll"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(225, 29, 72, 0.3) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            filter: 'drop-shadow(0 0 15px rgba(225, 29, 72, 0.6))'
          }}
        >
          <span className="heart-pulsing" style={{ fontSize: '2.6rem' }}>
            ❤️
          </span>
        </div>

        {/* Mi amor... */}
        <div className="reveal-on-scroll">
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--gold-accent)',
              fontStyle: 'italic'
            }}
          >
            Mi amor...
          </span>
        </div>

        {/* Feliz primer mes juntos ❤️ */}
        <div className="reveal-on-scroll">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
              color: 'var(--text-pure)',
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Feliz primer mes juntos <span className="heart-pulsing">❤️</span>
          </h2>
        </div>

        {/* Bloque de agradecimientos */}
        <div
          className="reveal-on-scroll"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            margin: '12px 0'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              color: 'var(--text-creme)',
              fontStyle: 'italic'
            }}
          >
            Gracias por dejarme ser tu novio.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              color: 'var(--text-creme)',
              fontStyle: 'italic'
            }}
          >
            Gracias por seguirme eligiendo.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
              color: 'var(--text-creme)',
              fontStyle: 'italic'
            }}
          >
            Gracias por estar conmigo.
          </p>
        </div>

        {/* Y gracias por hacerme tan feliz */}
        <div className="reveal-on-scroll">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 3.2vw, 1.7rem)',
              color: 'var(--gold-accent)',
              fontStyle: 'italic',
              fontWeight: 500
            }}
          >
            Y gracias por hacerme tan feliz.
          </p>
        </div>

        <div className="romantic-divider" style={{ margin: '16px auto' }}>
          <span>❦</span>
        </div>

        {/* Te quiero mucho, mi amor */}
        <div className="reveal-on-scroll">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: '#ffccd5',
              fontWeight: 600,
              textShadow: '0 0 35px rgba(225, 29, 72, 0.45)'
            }}
          >
            Te quiero mucho, mi amor.
          </h2>
        </div>

        {/* Esto recién comienza... ❤️ */}
        <div className="reveal-on-scroll">
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              fontWeight: 400
            }}
          >
            Esto recién comienza... <span className="heart-pulsing">❤️</span>
          </h3>
        </div>

        {/* Botón: Volver a nuestra historia ❤️ */}
        <div className="reveal-on-scroll" style={{ marginTop: '24px' }}>
          <button
            onClick={onReturnToTop}
            className="btn-romantic"
            id="btn-volver-historia"
          >
            <span>Volver a nuestra historia</span>
            <span>❤️</span>
          </button>
        </div>
      </div>
    </section>
  );
}

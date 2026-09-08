import React, { useEffect, useRef } from 'react';

/**
 * Sección 10: Momento Emocional a pantalla completa.
 * Profundo, íntimo y cinematográfico con revelación por scroll.
 */
export default function EmotionalBreak() {
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
      id="momento-emocional"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        background: 'radial-gradient(ellipse at center, rgba(59, 8, 19, 0.45) 0%, rgba(7, 8, 12, 0.95) 75%)',
        zIndex: 1
      }}
    >
      <div
        className="container-romantic"
        style={{
          textAlign: 'center',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        {/* Mi amor... */}
        <div className="reveal-on-scroll">
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--gold-accent)',
              fontStyle: 'italic',
              letterSpacing: '0.04em'
            }}
          >
            Mi amor...
          </span>
        </div>

        {/* A veces las cosas no salen como las imaginamos */}
        <div className="reveal-on-scroll">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            A veces las cosas no salen como las imaginamos.
          </p>
        </div>

        {/* A veces no podemos hacer todo lo que quisiéramos */}
        <div className="reveal-on-scroll">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}
          >
            A veces no podemos hacer todo lo que quisiéramos.
          </p>
        </div>

        {/* Pero hay algo que para mí siempre importa */}
        <div className="reveal-on-scroll">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 3.2vw, 1.7rem)',
              color: 'var(--text-creme)',
              fontStyle: 'italic'
            }}
          >
            Pero hay algo que para mí siempre importa:
          </p>
        </div>

        {/* Que las cosas se hagan de corazón */}
        <div className="reveal-on-scroll" style={{ margin: '8px 0' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4.8vw, 3rem)',
              color: 'var(--text-pure)',
              fontWeight: 600,
              textShadow: '0 0 30px rgba(255, 255, 255, 0.25)'
            }}
          >
            Que las cosas se hagan de corazón.
          </h2>
        </div>

        {/* Y que sigamos priorizándonos */}
        <div className="reveal-on-scroll">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4.8vw, 3rem)',
              color: 'var(--gold-accent)',
              fontWeight: 600,
              textShadow: '0 0 30px var(--gold-glow)'
            }}
          >
            Y que sigamos priorizándonos.
          </h2>
        </div>

        <div className="romantic-divider">
          <span>❦</span>
        </div>

        {/* Eso es lo que quiero seguir construyendo contigo, mi amor */}
        <div className="reveal-on-scroll">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 3.2vw, 1.8rem)',
              color: '#ffccd5',
              fontStyle: 'italic',
              lineHeight: 1.5
            }}
          >
            Eso es lo que quiero seguir construyendo contigo, mi amor.
          </p>
        </div>
      </div>
    </section>
  );
}

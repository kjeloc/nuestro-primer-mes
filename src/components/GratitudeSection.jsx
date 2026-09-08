import React, { useEffect, useRef } from 'react';

/**
 * Sección 6: Minimalista "Gracias, mi amor."
 * Gratitud sincera paso a paso con revelación suave al hacer scroll.
 */
export default function GratitudeSection() {
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

  const gratitudeList = [
    'Gracias por elegirme.',
    'Gracias por confiar en mí.',
    'Gracias por estar.',
    'Gracias por dejarme entrar en tu vida.',
    'Gracias por dejarme ser tu novio.'
  ];

  return (
    <section
      id="gracias"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '100px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic" style={{ textAlign: 'center', maxWidth: '640px' }}>
        {/* Título de la sección */}
        <div className="reveal-on-scroll" style={{ marginBottom: '48px' }}>
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
            De todo corazón
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: 'var(--text-pure)'
            }}
          >
            Gracias, mi amor.
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Lista minimalista y elegante */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '48px'
          }}
        >
          {gratitudeList.map((text, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll"
              style={{
                padding: '16px 24px',
                background: 'rgba(18, 20, 30, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <span style={{ color: 'var(--gold-accent)', fontSize: '0.75rem' }}>✧</span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
                  color: 'var(--text-creme)',
                  fontStyle: 'italic',
                  margin: 0
                }}
              >
                {text}
              </p>
              <span style={{ color: 'var(--gold-accent)', fontSize: '0.75rem' }}>✧</span>
            </div>
          ))}
        </div>

        {/* Cierre culminante */}
        <div className="reveal-on-scroll" style={{ marginTop: '20px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 3.2vw, 1.85rem)',
              color: 'var(--gold-accent)',
              lineHeight: 1.4,
              textShadow: '0 0 25px var(--gold-glow)'
            }}
          >
            Gracias por seguir construyendo esto conmigo, mi amor.
          </h3>
        </div>
      </div>
    </section>
  );
}

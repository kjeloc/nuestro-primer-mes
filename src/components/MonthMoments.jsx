import React, { useEffect, useRef } from 'react';

/**
 * Sección 8: "Un mes contigo ❤️"
 * Momentos simbólicos progresivos al hacer scroll (sin asumir "30 días").
 */
export default function MonthMoments() {
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

  const moments = [
    { title: 'Un mes de conocerte un poquito más.', icon: '✨' },
    { title: 'Un mes de sonrisas.', icon: '😊' },
    { title: 'Un mes de conversaciones.', icon: '🌙' },
    { title: 'Un mes de recuerdos.', icon: '📸' },
    { title: 'Un mes de seguir eligiéndonos.', icon: '❤️' }
  ];

  return (
    <section
      id="un-mes-contigo"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic" style={{ textAlign: 'center' }}>
        {/* Título */}
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
            Nuestros Primeros Pasos
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: 'var(--text-pure)'
            }}
          >
            Un mes contigo <span className="heart-pulsing">❤️</span>
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Lista de momentos simbólicos en timeline suave */}
        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto 48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {moments.map((m, index) => (
            <div
              key={index}
              className="reveal-on-scroll romantic-card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                textAlign: 'left',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(92, 15, 32, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                  border: '1px solid rgba(212, 175, 55, 0.25)'
                }}
              >
                {m.icon}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  color: 'var(--text-creme)',
                  margin: 0,
                  fontWeight: 500
                }}
              >
                {m.title}
              </p>
            </div>
          ))}
        </div>

        {/* Última frase culminante */}
        <div className="reveal-on-scroll">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              color: 'var(--gold-accent)',
              textShadow: '0 0 25px var(--gold-glow)',
              lineHeight: 1.4
            }}
          >
            Y quiero muchos meses más contigo, mi amor.
          </h3>
        </div>
      </div>
    </section>
  );
}

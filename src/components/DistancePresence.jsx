import React, { useEffect, useRef } from 'react';

/**
 * Sección 5: "Aunque no siempre podamos estar juntos..."
 * Tono esperanzador, maduro y cálido sobre la presencia y la distancia.
 */
export default function DistancePresence() {
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

  const presenceItems = [
    { title: 'En una conversación', icon: '💬' },
    { title: 'En un mensaje', icon: '✨' },
    { title: 'En una llamada', icon: '🌙' },
    { title: 'En un detalle', icon: '🌹' },
    { title: 'En saber que estás ahí', icon: '❤️' }
  ];

  return (
    <section
      id="distancia-presencia"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic">
        {/* Encabezado */}
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
            Nuestra forma de estar
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--text-pure)',
              lineHeight: 1.2
            }}
          >
            Aunque no siempre podamos estar juntos...
          </h2>
          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Tarjeta de reflexión cálida */}
        <div
          className="romantic-card reveal-on-scroll"
          style={{
            padding: 'clamp(28px, 5vw, 48px)',
            maxWidth: '720px',
            margin: '0 auto',
            border: '1px solid rgba(212, 175, 55, 0.2)'
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
            Mi amor, sé que no siempre hemos podido vernos como hubiésemos querido.
            A veces quisiera poder compartir contigo mucho más tiempo en persona.
          </p>

          <p
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}
          >
            Pero incluso así, hemos encontrado nuestra manera de estar presentes:
          </p>

          {/* Maneras de estar presentes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '14px',
              marginBottom: '36px'
            }}
          >
            {presenceItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-creme)',
                    fontWeight: 500,
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic'
                  }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-creme)',
              lineHeight: 1.8,
              marginBottom: '28px'
            }}
          >
            Y eso también forma parte de nuestra historia, mi amor.
          </p>

          {/* Clímax de la sección */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.25rem, 3vw, 1.65rem)',
                color: 'var(--gold-accent)',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              “Porque aunque no siempre podamos estar cerca, seguimos eligiéndonos.”
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

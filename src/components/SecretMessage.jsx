import React, { useState, useRef } from 'react';

/**
 * Sección 11: Mensaje Oculto interactivo.
 * Botón "Una última cosa, mi amor..." que despliega suavemente
 * la confesión y promesa íntima.
 */
export default function SecretMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const messageRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 250);
    }
  };

  return (
    <section
      id="mensaje-oculto"
      style={{
        position: 'relative',
        padding: '90px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic" style={{ textAlign: 'center', maxWidth: '680px' }}>
        {/* Botón interactivo para abrir */}
        {!isOpen && (
          <div style={{ padding: '20px 0' }}>
            <button
              onClick={handleToggle}
              className="btn-romantic"
              style={{
                fontSize: '1.1rem',
                padding: '18px 40px',
                border: '1px solid var(--gold-accent)'
              }}
            >
              <span>Una última cosa, mi amor...</span>
              <span style={{ fontSize: '1.3rem' }}>💌</span>
            </button>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-dim)',
                marginTop: '14px',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)'
              }}
            >
              Toca para abrir este mensaje especial
            </p>
          </div>
        )}

        {/* Mensaje revelado con animación elegante */}
        <div
          ref={messageRef}
          style={{
            maxHeight: isOpen ? '1000px' : '0px',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'scale(1)' : 'scale(0.96)',
            overflow: 'hidden',
            transition: 'max-height 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease, transform 0.8s ease'
          }}
        >
          {isOpen && (
            <div
              className="romantic-card"
              style={{
                padding: 'clamp(28px, 5vw, 52px)',
                background: 'linear-gradient(160deg, rgba(26, 16, 25, 0.9) 0%, rgba(12, 13, 22, 0.95) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(92, 15, 32, 0.25)',
                textAlign: 'center',
                margin: '20px auto'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '2rem' }}>❦</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.15rem, 2.6vw, 1.45rem)',
                  color: 'var(--text-creme)',
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                <p>
                  Si pudiera volver al día en que comenzó todo, volvería a elegir ese momento.
                </p>

                <p style={{ color: 'var(--gold-accent)' }}>
                  Volvería a declararme.
                </p>

                <p>
                  Volvería a esperar nervioso tu respuesta.
                </p>

                <p style={{ color: 'var(--text-pure)' }}>
                  Y volvería a sentir la misma felicidad cuando me dijiste que sí.
                </p>

                <p style={{ marginTop: '10px' }}>
                  Porque ese día comenzó algo que hoy significa muchísimo para mí.
                </p>

                <div className="romantic-divider" style={{ margin: '20px auto' }}>
                  <span>❦</span>
                </div>

                <p style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.6rem)', color: '#ffccd5' }}>
                  Gracias por este primer mes, mi amor.
                </p>

                <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--gold-accent)' }}>
                  Y espero que este sea solamente el comienzo.
                </p>
              </div>

              <div style={{ marginTop: '32px' }}>
                <button
                  onClick={handleToggle}
                  className="btn-romantic-outline"
                  style={{ fontSize: '0.85rem', padding: '8px 20px' }}
                >
                  Guardar mensaje
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import couplePhoto from '../assets/images/image.png';

/**
 * Componente para la ÚNICA fotografía real de la experiencia.
 * Carga la fotografía especial 'image.png' colocada por el usuario.
 */
export default function SpecialPhoto() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Imagen real importada
  const photoUrl = couplePhoto;

  return (
    <div
      style={{
        margin: '40px auto',
        maxWidth: '460px',
        width: '100%',
        position: 'relative'
      }}
    >
      <div
        className="romantic-card"
        style={{
          padding: '12px',
          background: 'linear-gradient(145deg, rgba(22, 18, 28, 0.9), rgba(12, 13, 22, 0.95))',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.12)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}
      >
        {!imageError ? (
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              backgroundColor: 'rgba(10, 11, 16, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '320px'
            }}
          >
            <img
              src={photoUrl}
              alt="Nuestro momento especial juntos"
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '520px',
                objectFit: 'cover',
                borderRadius: '12px',
                display: imageLoaded ? 'block' : 'none',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />

            {/* Mientras carga o si aún no está lista */}
            {!imageLoaded && (
              <div
                style={{
                  padding: '40px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div className="heart-pulsing" style={{ fontSize: '2.5rem' }}>
                  ❤️
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    color: 'var(--text-creme)'
                  }}
                >
                  Nuestro momento ❤️
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '300px' }}>
                  Cargando nuestro recuerdo...
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Placeholder elegante cuando aún no se ha colocado el archivo */
          <div
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: '14px',
              background: 'radial-gradient(circle at center, rgba(92, 15, 32, 0.25) 0%, rgba(10, 11, 18, 0.9) 100%)',
              border: '1px dashed rgba(212, 175, 55, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(92, 15, 32, 0.4)',
                border: '1px solid var(--gold-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 0 20px var(--gold-glow)'
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold-accent)' }}>
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--text-pure)',
                marginBottom: '8px'
              }}
            >
              Nuestro momento <span className="heart-pulsing">❤️</span>
            </h4>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                maxWidth: '320px',
                lineHeight: 1.5,
                marginBottom: '14px'
              }}
            >
              El espacio reservado para el recuerdo de ese instante en tu casita.
            </p>

            <span
              style={{
                fontSize: '0.78rem',
                color: 'var(--gold-accent)',
                letterSpacing: '0.04em',
                background: 'rgba(212, 175, 55, 0.08)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              foto-nuestro-momento.jpg
            </span>
          </div>
        )}

        {/* Leyenda sutil al pie de la foto */}
        <div
          style={{
            padding: '12px 16px 8px',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.92rem',
              color: 'var(--text-dim)'
            }}
          >
            El día me diste la mejor sopresa, mi amor ❤️
          </span>
        </div>
      </div>
    </div>
  );
}

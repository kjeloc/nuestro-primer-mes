import React, { useState, useEffect } from 'react';

/**
 * Sección 1: Introducción cinematográfica a pantalla completa.
 * Muestra las frases con pausas sutiles y el botón para iniciar la carta.
 */
export default function HeroIntro({ onOpenLetter }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Revelación progresiva con pausas cinematográficas
    const timers = [
      setTimeout(() => setStep(1), 600),   // "Yamis..."
      setTimeout(() => setStep(2), 2400),  // "Mi amor..."
      setTimeout(() => setStep(3), 4400),  // "Hoy cumplimos nuestro primer mes ❤️"
      setTimeout(() => setStep(4), 6600),  // "Y quería hacerte algo especial..."
    ];

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section
      id="intro"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        textAlign: 'center',
        zIndex: 1
      }}
    >
      <div
        className="container-romantic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '680px'
        }}
      >
        {/* Frase 1: Yamis... */}
        <div
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
            marginBottom: '16px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              color: 'var(--gold-accent)',
              letterSpacing: '0.08em',
              fontStyle: 'italic',
              textShadow: '0 0 20px var(--gold-glow)'
            }}
          >
            Yamis...
          </span>
        </div>

        {/* Frase 2: Mi amor... */}
        <div
          style={{
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
            marginBottom: '24px'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
              fontWeight: 600,
              color: 'var(--text-pure)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}
          >
            Mi amor...
          </h2>
        </div>

        {/* Frase 3: Hoy cumplimos nuestro primer mes ❤️ */}
        <div
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
            marginBottom: '20px'
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3.8vw, 2.2rem)',
              color: '#fdf2f4',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Hoy cumplimos nuestro primer mes <span className="heart-pulsing">❤️</span>
          </h1>
        </div>

        {/* Frase 4: Y quería hacerte algo especial para celebrar este momento */}
        <div
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
            marginBottom: '44px',
            maxWidth: '520px'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.6
            }}
          >
            Y quería hacerte algo especial para celebrar este momento.
          </p>
        </div>

        {/* Botón: Abrir mi carta ❤️ */}
        <div
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
            transition: 'opacity 1.2s ease 0.3s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
          }}
        >
          <button
            onClick={onOpenLetter}
            className="btn-romantic"
            id="btn-abrir-carta"
          >
            <span>Abrir mi carta</span>
            <span style={{ fontSize: '1.2rem' }}>❤️</span>
          </button>
        </div>
      </div>

      {/* Indicador sutil de scroll hacia abajo */}
      {step >= 4 && (
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0.5,
            animation: 'heartPulse 2.5s ease-in-out infinite',
            cursor: 'pointer'
          }}
          onClick={onOpenLetter}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      )}
    </section>
  );
}

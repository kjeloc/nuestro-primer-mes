import React, { useState, useEffect } from 'react';
import {
  isValidConfigDate,
  calculateElapsedTime,
  getFormattedStartDate
} from '../utils/timeCalculations';

/**
 * Sección 9: Contador en tiempo real
 * Lee exclusivamente de src/config.js y actualiza cada segundo.
 */
export default function RelationshipCounter() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isReady: false,
    isFuture: false
  });

  const validation = isValidConfigDate();
  const formattedDate = getFormattedStartDate();

  useEffect(() => {
    // Cálculo inicial inmediato
    setTime(calculateElapsedTime());

    // Actualización cada segundo
    const timer = setInterval(() => {
      setTime(calculateElapsedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num) => String(num).padStart(2, '0');

  return (
    <section
      id="contador"
      style={{
        position: 'relative',
        padding: '100px 20px',
        zIndex: 1
      }}
    >
      <div className="container-romantic" style={{ textAlign: 'center' }}>
        {/* Encabezado del contador */}
        <div style={{ marginBottom: '28px' }}>
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
            Cada Instante a Tu Lado
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: 'var(--text-pure)',
              marginBottom: '12px'
            }}
          >
            Desde que comenzó nuestra historia...
          </h2>

          {/* Fecha formateada en español */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.8vw, 1.55rem)',
              color: 'var(--gold-accent)',
              fontStyle: 'italic',
              margin: '0 auto 24px'
            }}
          >
            {formattedDate}
          </p>

          <div className="romantic-divider">
            <span>❦</span>
          </div>
        </div>

        {/* Mensaje de configuración si todavía tiene el placeholder */}
        {validation.isPlaceholder && (
          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto 36px',
              padding: '16px 20px',
              background: 'rgba(92, 15, 32, 0.4)',
              border: '1px dashed var(--gold-accent)',
              borderRadius: 'var(--radius-md)',
              backdropFilter: 'blur(8px)',
              textAlign: 'center'
            }}
          >
            <p style={{ fontSize: '0.92rem', color: 'var(--text-creme)', marginBottom: '6px' }}>
              💡 <strong>Configuración de fecha:</strong> Abre <code>src/config.js</code> y reemplaza <code>YYYY-MM-DD</code> por la fecha real en que comenzó su relación.
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
              El contador se actualizará automáticamente en tiempo real.
            </span>
          </div>
        )}

        {/* Indicadores del Contador */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(10px, 2.5vw, 24px)',
            maxWidth: '680px',
            margin: '0 auto 40px'
          }}
        >
          {/* DÍAS */}
          <div
            className="romantic-card"
            style={{
              padding: 'clamp(16px, 3vw, 28px) 8px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: 'var(--text-pure)',
                lineHeight: 1.1,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              {validation.isValid ? time.days : '--'}
            </span>
            <span
              style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--gold-accent)',
                marginTop: '8px',
                fontWeight: 600
              }}
            >
              Días
            </span>
          </div>

          {/* HORAS */}
          <div
            className="romantic-card"
            style={{
              padding: 'clamp(16px, 3vw, 28px) 8px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: 'var(--text-pure)',
                lineHeight: 1.1,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              {validation.isValid ? formatUnit(time.hours) : '--'}
            </span>
            <span
              style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--gold-accent)',
                marginTop: '8px',
                fontWeight: 600
              }}
            >
              Horas
            </span>
          </div>

          {/* MINUTOS */}
          <div
            className="romantic-card"
            style={{
              padding: 'clamp(16px, 3vw, 28px) 8px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: 'var(--text-pure)',
                lineHeight: 1.1,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              {validation.isValid ? formatUnit(time.minutes) : '--'}
            </span>
            <span
              style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--gold-accent)',
                marginTop: '8px',
                fontWeight: 600
              }}
            >
              Minutos
            </span>
          </div>

          {/* SEGUNDOS */}
          <div
            className="romantic-card"
            style={{
              padding: 'clamp(16px, 3vw, 28px) 8px',
              border: '1px solid rgba(136, 19, 55, 0.5)',
              background: 'radial-gradient(circle at center, rgba(92, 15, 32, 0.35) 0%, rgba(16, 18, 27, 0.8) 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: '#ffccd5',
                lineHeight: 1.1,
                textShadow: '0 0 25px rgba(225, 29, 72, 0.5)'
              }}
            >
              {validation.isValid ? formatUnit(time.seconds) : '--'}
            </span>
            <span
              style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#ff99aa',
                marginTop: '8px',
                fontWeight: 600
              }}
            >
              Segundos
            </span>
          </div>
        </div>

        {/* Cierre del contador */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.25rem, 2.8vw, 1.6rem)',
            color: 'var(--text-creme)',
            fontStyle: 'italic'
          }}
        >
          Y cada segundo contigo cuenta, mi amor. <span className="heart-pulsing">❤️</span>
        </p>
      </div>
    </section>
  );
}

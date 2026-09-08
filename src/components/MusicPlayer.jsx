import React, { useState, useEffect, useRef } from 'react';

/**
 * Reproductor de música romántica flotante.
 * Soporta 'src/assets/audio/romantica.mp3'.
 * Si el archivo aún no ha sido colocado, ofrece una melodía suave de piano
 * mediante Web Audio API para asegurar que la experiencia siempre sea emocionante.
 */
export default function MusicPlayer({ isAudioPlaying, setIsAudioPlaying }) {
  const [hasAudioFile, setHasAudioFile] = useState(true);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Intentar cargar el archivo real romantica.mp3
  useEffect(() => {
    const audio = new Audio('/src/assets/audio/romantica.mp3');
    audio.loop = true;
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => {
      setHasAudioFile(true);
    });

    audio.addEventListener('error', () => {
      // Si no existe romantica.mp3, usamos el sintetizador ambiental
      setHasAudioFile(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      stopSynth();
    };
  }, []);

  // Control de reproducción
  useEffect(() => {
    if (isAudioPlaying) {
      if (hasAudioFile && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Si el navegador bloquea o falla el archivo, iniciar melodía ambiental
          startSynth();
        });
      } else {
        startSynth();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynth();
    }
  }, [isAudioPlaying, hasAudioFile]);

  // Melodía romántica ambiental de respaldo con Web Audio API (notas cálidas de piano/luz)
  const startSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Progresión romántica relajante (Frequencies: C, E, G, B, D cálidas)
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 392.00]  // G6
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          setTimeout(() => {
            if (!audioCtxRef.current) return;
            const osc = audioCtxRef.current.createOscillator();
            const gain = audioCtxRef.current.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

            // Envolvente suave estilo piano/arpa
            gain.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
            gain.gain.linearRampToValueAtTime(0.04, audioCtxRef.current.currentTime + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 3.2);

            osc.connect(gain);
            gain.connect(audioCtxRef.current.destination);

            osc.start();
            osc.stop(audioCtxRef.current.currentTime + 3.3);
          }, i * 180);
        });
      };

      playChord();
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = setInterval(playChord, 3600);
    } catch (e) {
      console.log('Audio init notice:', e);
    }
  };

  const stopSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
    }
  };

  const toggleMusic = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <button
        onClick={toggleMusic}
        className="btn-romantic-outline"
        aria-label={isAudioPlaying ? 'Pausar música' : 'Reproducir música'}
        style={{
          width: '48px',
          height: '48px',
          padding: 0,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isAudioPlaying
            ? '0 0 20px rgba(225, 29, 72, 0.45)'
            : '0 4px 14px rgba(0, 0, 0, 0.4)',
          borderColor: isAudioPlaying ? 'var(--gold-accent)' : 'rgba(255, 255, 255, 0.2)'
        }}
        title={isAudioPlaying ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
      >
        {isAudioPlaying ? (
          // Icono ecualizador / notas sonando
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--gold-accent)' }}
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" fill="currentColor" />
            <circle cx="18" cy="16" r="3" fill="currentColor" />
          </svg>
        ) : (
          // Icono música pausada
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--text-muted)' }}
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        )}
      </button>
    </div>
  );
}

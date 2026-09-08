import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import MusicPlayer from './components/MusicPlayer';
import HeroIntro from './components/HeroIntro';
import MainLetter from './components/MainLetter';
import ProposalMemory from './components/ProposalMemory';
import DistancePresence from './components/DistancePresence';
import GratitudeSection from './components/GratitudeSection';
import GrowthSection from './components/GrowthSection';
import MonthMoments from './components/MonthMoments';
import RelationshipCounter from './components/RelationshipCounter';
import EmotionalBreak from './components/EmotionalBreak';
import SecretMessage from './components/SecretMessage';
import GrandFinale from './components/GrandFinale';

export default function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Iniciar experiencia al presionar "Abrir mi carta ❤️"
  const handleOpenLetter = () => {
    setIsAudioPlaying(true);
    const letterSection = document.getElementById('carta-principal');
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Volver suavemente al inicio
  const handleReturnToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-romantic-wrapper">
      {/* Fondo cinematográfico interactivo con estrellas y partículas */}
      <BackgroundCanvas />

      {/* Reproductor de música flotante */}
      <MusicPlayer
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* 1. Introducción Fullscreen */}
        <HeroIntro onOpenLetter={handleOpenLetter} />

        {/* 2. Carta Principal: Para mi amor ❤️ */}
        <MainLetter />

        {/* 3 y 4. Recuerdo de la Declaración + Única Fotografía */}
        <ProposalMemory />

        {/* 5. Aunque no siempre podamos estar juntos... */}
        <DistancePresence />

        {/* 6. Gracias, mi amor. */}
        <GratitudeSection />

        {/* 7. Quiero seguir creciendo contigo. */}
        <GrowthSection />

        {/* 8. Un mes contigo ❤️ */}
        <MonthMoments />

        {/* 9. Contador en tiempo real (exclusivo desde src/config.js) */}
        <RelationshipCounter />

        {/* 10. Momento Emocional Fullscreen */}
        <EmotionalBreak />

        {/* 11. Mensaje Oculto: Una última cosa, mi amor... */}
        <SecretMessage />

        {/* 12. Gran Final Fullscreen */}
        <GrandFinale onReturnToTop={handleReturnToTop} />
      </main>

      {/* Pie de página discreto y lleno de amor */}
      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--text-dim)',
          fontSize: '0.85rem'
        }}
      >
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          Hecho con todo mi amor para ti ❤️
        </p>
      </footer>
    </div>
  );
}

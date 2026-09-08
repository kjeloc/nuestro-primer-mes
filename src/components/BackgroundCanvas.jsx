import React, { useEffect, useRef } from 'react';

/**
 * Fondo cinematográfico con estrellas tenues y partículas luminosas flotantes.
 * Altamente optimizado, con pausa automática al perder foco.
 */
export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('resize', handleResize);

    // Cantidad moderada para elegancia y rendimiento móvil
    const isMobile = width < 768;
    const starCount = isMobile ? 45 : 90;
    const particleCount = isMobile ? 25 : 45;

    let stars = [];
    let particles = [];

    function initElements() {
      stars = [];
      particles = [];

      // Estrellas fijas con brillo tenue
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.012 + 0.004,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }

      // Partículas cálidas flotantes (polvo de estrellas / ascuas sutiles)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.8,
          speedY: -(Math.random() * 0.35 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.3 ? '212, 175, 55' : '225, 29, 72' // oro o vino sutil
        });
      }
    }

    initElements();

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    function render() {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Dibujar estrellas sutiles
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.speed * star.direction;
        if (star.alpha > 0.85) {
          star.alpha = 0.85;
          star.direction = -1;
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.direction = 1;
        }

        ctx.fillStyle = `rgba(255, 250, 240, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Dibujar partículas flotantes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        // Reubicar cuando suben arriba
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}

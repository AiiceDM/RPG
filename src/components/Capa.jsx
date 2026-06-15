import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 28;

function criarParticula(container) {
  const dot = document.createElement('div');
  const tamanho = Math.random() > 0.5 ? 3 : 2;
  const dur = 6 + Math.random() * 10;
  const delay = Math.random() * 8;

  dot.style.cssText = `
    position: absolute;
    width: ${tamanho}px;
    height: ${tamanho}px;
    border-radius: 50%;
    background: rgba(139,10,80,${0.5 + Math.random() * 0.4});
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    --dur: ${dur}s;
    --delay: ${delay}s;
    animation: float var(--dur) ease-in-out var(--delay) infinite;
    pointer-events: none;
  `;
  container.appendChild(dot);
}

export default function Capa() {
  const particulasRef = useRef(null);

  useEffect(() => {
    const container = particulasRef.current;
    if (!container) return;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      criarParticula(container);
    }
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <main className="pagina-site capa-site" aria-label="Página inicial de Tyria">
      {/* Camadas de fundo */}
      <div className="capa-bg-img" aria-hidden="true" />
      <div className="capa-dot-grid" aria-hidden="true" />
      <div className="capa-radial-glow" aria-hidden="true" />

      {/* Partículas flutuantes */}
      <div className="capa-particulas" ref={particulasRef} aria-hidden="true" />

      {/* Teias decorativas nos cantos */}
      <svg className="capa-teia tl" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <g stroke="#8b0a50" strokeWidth="1.2">
          <line x1="8" y1="8" x2="110" y2="110" />
          <line x1="45" y1="4" x2="110" y2="110" />
          <line x1="88" y1="6" x2="110" y2="110" />
          <line x1="4" y1="45" x2="110" y2="110" />
          <line x1="6" y1="88" x2="110" y2="110" />
          <path d="M 28,28 Q 40,34 46,44 T 58,58 T 70,72" fill="none" />
          <path d="M 48,22 Q 62,26 72,36 T 88,55 T 100,78" fill="none" />
          <path d="M 72,18 Q 88,24 100,36 T 118,58 T 126,85" fill="none" />
          <path d="M 22,48 Q 28,66 40,78 T 62,94 T 84,104" fill="none" />
          <path d="M 18,72 Q 26,88 38,98 T 60,110 T 80,118" fill="none" />
        </g>
      </svg>

      <svg className="capa-teia tr" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <g stroke="#8b0a50" strokeWidth="1.2">
          <line x1="8" y1="8" x2="110" y2="110" />
          <line x1="45" y1="4" x2="110" y2="110" />
          <line x1="88" y1="6" x2="110" y2="110" />
          <line x1="4" y1="45" x2="110" y2="110" />
          <line x1="6" y1="88" x2="110" y2="110" />
          <path d="M 28,28 Q 40,34 46,44 T 58,58 T 70,72" fill="none" />
          <path d="M 48,22 Q 62,26 72,36 T 88,55 T 100,78" fill="none" />
          <path d="M 22,48 Q 28,66 40,78 T 62,94 T 84,104" fill="none" />
        </g>
      </svg>

      {/* Conteúdo central */}
      <div className="conteudo-capa">
        <span className="capa-eyebrow">✦ Repositório do Cenário ✦</span>

        <h1>Tyria</h1>

        <div className="capa-ornamento" aria-hidden="true">
          <div className="capa-ornamento-linha" />
          <span className="capa-ornamento-simbolo">✧</span>
          <div className="capa-ornamento-linha" />
        </div>

        <p>
          Entre regiões devastadas e cidades reluzentes, os povos de Tyria
          escrevem seu destino a cada escolha.
        </p>

      </div>
    </main>
  );
}

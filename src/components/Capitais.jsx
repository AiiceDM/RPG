import React, { useState } from 'react';

const capitais = [
  {
    id: 'divinity',
    nome: "Divinity's Reach",
    regiao: 'Kryta',
    x: 44.2,
    y: 43.6,
    pagina: 'capital-divinity',
    cor: '#c8a800',
    icone: '🏛️'
  },
  {
    id: 'lions-arch',
    nome: "Lion's Arch",
    regiao: 'Sea of Sorrows',
    x: 48.8,
    y: 56.5,
    pagina: 'capital-lions-arch',
    cor: '#2980b9',
    icone: '⚓'
  },
  {
    id: 'black-citadel',
    nome: 'Black Citadel',
    regiao: 'Ascalon',
    x: 79.7,
    y: 44.1,
    pagina: 'capital-black-citadel',
    cor: '#c0392b',
    icone: '🔩'
  },
  {
    id: 'hoelbrak',
    nome: 'Hoelbrak',
    regiao: 'Shiverpeak Mountains',
    x: 61.3,
    y: 56.0,
    pagina: 'capital-hoelbrak',
    cor: '#7fb3d3',
    icone: '🐺'
  },
  {
    id: 'sanctuary',
    nome: 'The Sanctuary',
    regiao: 'Shiverpeak Mountains',
    x: 64.0,
    y: 50.0,
    pagina: 'capital-sanctuary',
    cor: '#85c1e9',
    icone: '🏔️'
  },
  {
    id: 'rata-sum',
    nome: 'Rata Sum',
    regiao: 'Tarnished Coast',
    x: 29.5,
    y: 52.5,
    pagina: 'capital-rata-sum',
    cor: '#1e8449',
    icone: '⚙️'
  },
  {
    id: 'the-grove',
    nome: 'The Grove',
    regiao: 'Tarnished Coast',
    x: 31.5,
    y: 58.5,
    pagina: 'capital-the-grove',
    cor: '#27ae60',
    icone: '🌿'
  },
  {
    id: 'drakan',
    nome: 'Drakan',
    regiao: 'Zanarkland',
    x: 48.2,
    y: 33.1,
    pagina: 'capital-drakan',
    cor: '#8e44ad',
    icone: '🏰'
  }
];

export default function Capitais({ setPaginaAtual }) {
  const [coords, setCoords] = useState(null);
  const mapaRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const rect = mapaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    setCoords({ x, y });
  };

  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Capitais de Tyria</h1>

      <p>
        As capitais de Tyria são mais do que simples centros administrativos:
        são o coração pulsante de cada civilização, forjadas ao longo de séculos
        por guerras, alianças e o peso dos Dragões Primordiais. Cada uma reflete
        os valores e a história do povo que a ergueu.
      </p>

      <div
        className="mapa-capitais"
        ref={mapaRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCoords(null)}
      >
        <img
          src="https://i.imgur.com/GZs4YwZ.png"
          alt="Mapa de Tyria"
          className="imagem-geografia"
        />

        {coords && (
          <div className="debug-coords">
            {coords.x}% , {coords.y}%
          </div>
        )}

        {capitais.map((capital) => (
          <div
            key={capital.id}
            className="icone-capital"
            style={{ left: `${capital.x}%`, top: `${capital.y}%`, '--cor-capital': capital.cor }}
            onClick={() => setPaginaAtual(capital.pagina)}
          >
            <div className="pin-capital">{capital.icone}</div>
            <div className="popout-capital">{capital.nome}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

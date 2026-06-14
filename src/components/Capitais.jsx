import React, { useState } from 'react';

const capitais = [
  {
    id: 'divinity',
    nome: "Divinity's Reach",
    regiao: 'Kryta',
    x: 43.3,
    y: 42.7,
    pagina: 'capital-divinity',
    cor: '#c8a800',
    icone: '🏛️'
  },
  {
    id: 'lions-arch',
    nome: "Lion's Arch",
    regiao: 'Sea of Sorrows',
    x: 50.0,
    y: 63.0,
    pagina: 'capital-lions-arch',
    cor: '#2980b9',
    icone: '⚓'
  },
  {
    id: 'black-citadel',
    nome: 'Black Citadel',
    regiao: 'Ascalon',
    x: 70.0,
    y: 46.1,
    pagina: 'capital-black-citadel',
    cor: '#c0392b',
    icone: '🔩'
  },
  {
    id: 'hoelbrak',
    nome: 'Hoelbrak',
    regiao: 'Shiverpeak Mountains',
    x: 61.4,
    y: 51.0,
    pagina: 'capital-hoelbrak',
    cor: '#7fb3d3',
    icone: '🐺'
  },
  {
    id: 'sanctuary',
    nome: 'The Sanctuary',
    regiao: 'Shiverpeak Mountains',
    x: 65.7,
    y: 34.4,
    pagina: 'capital-sanctuary',
    cor: '#85c1e9',
    icone: '🏔️'
  },
  {
    id: 'rata-sum',
    nome: 'Rata Sum',
    regiao: 'Tarnished Coast',
    x: 41.0,
    y: 53.9,
    pagina: 'capital-rata-sum',
    cor: '#1e8449',
    icone: '⚙️'
  },
  {
    id: 'the-grove',
    nome: 'The Grove',
    regiao: 'Tarnished Coast',
    x: 36.2,
    y: 58.3,
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
  },
  {
    id: 'micholt-grounds',
    nome: 'Micholt Grounds',
    regiao: 'Woodland Cascades',
    x: 26.0,
    y: 54.8,
    pagina: 'capital-micholt-grounds',
    cor: '#4caf50',
    icone: '🐸'
  },
  {
    id: 'skrittsburgh',
    nome: 'Skrittsburgh',
    regiao: 'Zanarkland',
    x: 50.6,
    y: 40.6,
    pagina: 'capital-skrittsburgh',
    cor: '#a0785a',
    icone: '🐀'
  },
  {
    id: 'moorookoo',
    nome: 'Moorookoo',
    regiao: 'Sea of Sorrows',
    x: 51.8,
    y: 57.2,
    pagina: 'capital-moorookoo',
    cor: '#00acc1',
    icone: '🫧'
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

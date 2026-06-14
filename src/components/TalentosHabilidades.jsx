import React from 'react';

const POVOS = [
  { slug: 'humano', nome: 'Humano', desc: 'Versatilidade extrema: um bônus de talento extra, atributos maleáveis e heranças especializadas em elementos, sombras ou divindade.' },
  { slug: 'asura', nome: 'Asura', desc: 'Maestria arcana e golemancia. Penalidade de Força compensada por inteligência superior e acesso a tecnologia de ponta.' },
  { slug: 'charr', nome: 'Charr', desc: 'Máquina de guerra com armamento natural. Quatro braços, velocidade de ataque aumentada e resistência à dor elevada.' },
  { slug: 'animus', nome: 'Animus', desc: 'Construtos conscientes com modos de funcionamento únicos. Imunes a condições biológicas, mas vulneráveis a dano de relâmpago.' },
  { slug: 'kodan', nome: 'Kodan', desc: 'Criaturas LARGE com PV elevado e resistência ao frio. Bênçãos dos Espíritos da Natureza conferem poderes únicos.' },
  { slug: 'sylvari', nome: 'Sylvari', desc: 'Conexão com o Sonho Coletivo e resistência ao veneno. Heranças ligadas ao ciclo solar determinam perícia e poder elemental.' },
  { slug: 'norn', nome: 'Norn', desc: 'Metamorfose em forma bestial, tamanho Large e bênçãos dos Espíritos que concedem poderes de caça e sobrevivência.' },
  { slug: 'skritt', nome: 'Skritt', desc: 'Velocidade extraordinária e inteligência coletiva. Individualmente fracos, mas potencialmente letais em grupo.' },
  { slug: 'drakan', nome: 'Drakan', desc: 'Resistências elementais e ataques de mordida ou garras. Heranças Elementais e Primordiais com poderes radicalmente distintos.' },
  { slug: 'quaggan', nome: 'Quaggan', desc: 'Criatura SMALL com PV base 6. Nadar veloz e 13 heranças com poderes elementais únicos. Fúria devastadora em situações extremas.' },
  { slug: 'hylek', nome: 'Hylek', desc: 'Alquimia biológica e venenos naturais. Quatro sub-raças com estilos de combate distintos, do furtivo ao colossal.' },
  { slug: 'magnus', nome: 'Magnus', desc: 'Em breve.' },
  { slug: 'oficiais', nome: 'Oficiais', desc: 'Ancestralidades do Pathfinder 2e: Anão, Gnomo, Goblin, Halfling, Orc, Kitsune, Kobold e Leshy com adaptações para Tyria.' },
];

export default function TalentosHabilidades({ setPaginaAtual }) {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Talentos e Habilidades</h1>
      <p>
        Cada ancestralidade de Tyria possui mecânicas únicas que definem como o personagem interage com o sistema de
        jogo. Selecione uma ancestralidade para ver seus atributos, habilidades base, heranças mecânicas e talentos
        disponíveis.
      </p>

      <div className="grade-ancestralidades">
        {POVOS.map(p => (
          <div
            key={p.slug}
            className="card-ancestralidade"
            onClick={() => setPaginaAtual(`talento-${p.slug}`)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{p.nome}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

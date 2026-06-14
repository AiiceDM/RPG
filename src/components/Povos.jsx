import React from 'react';

const POVOS = [
  { slug: 'humano', nome: 'Humano', desc: 'Versáteis e imprevisíveis, os Humanos são o segundo povo mais numeroso de Tyria. Onde há caminho, há pegadas humanas.' },
  { slug: 'asura', nome: 'Asura', desc: 'Gênios diminutos oriundos das profundezas. Compensam o tamanho com intelecto superior e uma arrogância cultural profunda.' },
  { slug: 'charr', nome: 'Charr', desc: 'Guerreiros felinos que não dobram o joelho para deuses. Sua filosofia é a Vontade Ardente: o destino se conquista com as próprias garras.' },
  { slug: 'animus', nome: 'Animus', desc: 'Construtos que acordaram por milagre, buscando provar que a centelha da consciência basta para ser chamado de vivo.' },
  { slug: 'kodan', nome: 'Kodan', desc: 'Guardiões ursos do equilíbrio. Consideram-se a raça mais antiga de Tyria e velam pela vontade do deus criador Koda.' },
  { slug: 'sylvari', nome: 'Sylvari', desc: 'Nascidos de vagens de uma Árvore Pálida sagrada, emergem adultos de um Sonho coletivo carregando inocência e propósito.' },
  { slug: 'norn', nome: 'Norn', desc: 'Caçadores gigantes das Shiverpeaks. Vivem para acumular feitos épicos que serão cantados pelos skalds por gerações.' },
  { slug: 'skritt', nome: 'Skritt', desc: 'Ratos humanoides pequenos e frenéticos. Individualmente simples, em grupo formam redes neurais orgânicas de inteligência coletiva.' },
  { slug: 'drakan', nome: 'Drakan', desc: 'Bípedes de origem dracônica que manifestam em seu corpo o poder elemental ou a corrupção ancestral dos Dragões Anciões.' },
  { slug: 'quaggan', nome: 'Quaggan', desc: 'Nascidos das lágrimas de Melandru, os Quaggans são amados por todas as raças, mas guardam uma besta aterrorizante dentro de si.' },
  { slug: 'hylek', nome: 'Hylek', desc: 'Sapos humanoides mestres da alquimia e do veneno. Dominam as regiões úmidas de Tyria com sua biologia singular e seu deus do rio.' },
  { slug: 'magnus', nome: 'Magnus', desc: 'Em breve.' },
  { slug: 'oficiais', nome: 'Oficiais', desc: 'Ancestralidades do Pathfinder 2e também disponíveis em Tyria: Anão, Gnomo, Goblin, Halfling, Orc, Kitsune, Kobold e Leshy.' },
];

export default function Povos({ setPaginaAtual }) {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Povos de Tyria</h1>
      <p>
        Tyria é habitada por povos de origens, culturas e biologias radicalmente distintas. Cada ancestralidade carrega
        sua própria história, seus valores e seu lugar no equilíbrio do mundo. Selecione um povo para conhecer sua
        história e cultura.
      </p>

      <div className="grade-ancestralidades">
        {POVOS.map(p => (
          <div
            key={p.slug}
            className="card-ancestralidade"
            onClick={() => setPaginaAtual(`povo-${p.slug}`)}
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

import React from 'react';

const POVOS = [
  { slug: 'humano', nome: 'Humano', desc: 'Versatilidade extrema: um bônus de talento extra, atributos maleáveis e heranças especializadas em elementos, sombras ou divindade.', img: 'https://64.media.tumblr.com/dd320efe455712f092ebbe8fcd027908/tumblr_oqbkz5phCO1sazby5o1_1280.jpg' },
  { slug: 'asura', nome: 'Asura', desc: 'Maestria arcana e golemancia. Penalidade de Força compensada por inteligência superior e acesso a tecnologia de ponta.', img: 'https://s-media-cache-ak0.pinimg.com/originals/55/78/29/557829ef4e51f4e5e8ea1aec8b059c64.jpg' },
  { slug: 'charr', nome: 'Charr', desc: 'Máquina de guerra com armamento natural. Quatro braços, velocidade de ataque aumentada e resistência à dor elevada.', img: 'https://i.pinimg.com/736x/e2/26/99/e226993b52449c46d0ad7e130b1a62bd.jpg' },
  { slug: 'animus', nome: 'Animus', desc: 'Construtos conscientes com modos de funcionamento únicos. Imunes a condições biológicas, mas vulneráveis a dano de relâmpago.', img: 'https://i.pinimg.com/564x/d8/8b/48/d88b48b5a302d6fac666e095c73d8e3c.jpg' },
  { slug: 'kodan', nome: 'Kodan', desc: 'Criaturas LARGE com PV elevado e resistência ao frio. Bênçãos dos Espíritos da Natureza conferem poderes únicos.', img: 'https://i.pinimg.com/736x/23/39/fe/2339fe8d444cfd37dd32f2d84e6d7ffd.jpg' },
  { slug: 'sylvari', nome: 'Sylvari', desc: 'Conexão com o Sonho Coletivo e resistência ao veneno. Heranças ligadas ao ciclo solar determinam perícia e poder elemental.', img: 'https://files.mastodon.social/media_attachments/files/110/675/597/670/120/891/original/67220009977659a8.jpg' },
  { slug: 'norn', nome: 'Norn', desc: 'Metamorfose em forma bestial, tamanho Large e bênçãos dos Espíritos que concedem poderes de caça e sobrevivência.', img: 'https://www.writeups.org/wp-content/uploads/Eir-Stegalkin-Guild-Wars-2.jpg' },
  { slug: 'skritt', nome: 'Skritt', desc: 'Velocidade extraordinária e inteligência coletiva. Individualmente fracos, mas potencialmente letais em grupo.', img: 'https://static.wikia.nocookie.net/aurea/images/7/73/Ratfolk.png/revision/latest?cb=20200427094328' },
  { slug: 'drakan', nome: 'Drakan', desc: 'Resistências elementais e ataques de mordida ou garras. Heranças Elementais e Primordiais com poderes radicalmente distintos.', img: 'https://i.pinimg.com/236x/b8/e3/0f/b8e30f7c5005012526b04f550d3a416f.jpg' },
  { slug: 'quaggan', nome: 'Quaggan', desc: 'Criatura SMALL com PV base 6. Nadar veloz e 13 heranças com poderes elementais únicos. Fúria devastadora em situações extremas.', img: 'https://i.pinimg.com/originals/42/90/8f/42908fcd24848dbf56bcb5df1c837b90.png' },
  { slug: 'hylek', nome: 'Hylek', desc: 'Alquimia biológica e venenos naturais. Quatro sub-raças com estilos de combate distintos, do furtivo ao colossal.', img: 'https://images-platform.99static.com/Tazo_50GpTbwCpDS5o-eO7BWpEU=/28x204:960x1136/500x500/top/smart/99designs-contests-attachments/99/99905/attachment_99905462' },
  { slug: 'magnus', nome: 'Magnus', desc: 'Em breve.', img: 'https://img.magnific.com/vetores-gratis/ilustracao-do-icone-de-doodle-de-engrenagem_53876-5596.jpg?semt=ais_hybrid&w=740&q=80' },
  { slug: 'oficiais', nome: 'Oficiais', desc: 'Ancestralidades do Pathfinder 2e: Anão, Gnomo, Goblin, Halfling, Orc, Kitsune, Kobold e Leshy com adaptações para Tyria.', img: 'https://placehold.co/400x600/1a1520/8b0a50?text=Oficiais' },
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
            <div className="card-arte" style={{ backgroundImage: `url(${p.img})` }} />
            <span className="card-nome">{p.nome}</span>
            <div className="card-popout"><p>{p.desc}</p></div>
          </div>
        ))}
      </div>
    </main>
  );
}

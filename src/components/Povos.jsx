import React from 'react';

const POVOS = [
  { slug: 'humano', nome: 'Humano', desc: 'Versáteis e imprevisíveis, os Humanos são o segundo povo mais numeroso de Tyria. Onde há caminho, há pegadas humanas.', img: 'https://64.media.tumblr.com/dd320efe455712f092ebbe8fcd027908/tumblr_oqbkz5phCO1sazby5o1_1280.jpg' },
  { slug: 'asura', nome: 'Asura', desc: 'Gênios diminutos oriundos das profundezas. Compensam o tamanho com intelecto superior e uma arrogância cultural profunda.', img: 'https://s-media-cache-ak0.pinimg.com/originals/55/78/29/557829ef4e51f4e5e8ea1aec8b059c64.jpg' },
  { slug: 'charr', nome: 'Charr', desc: 'Guerreiros felinos que não dobram o joelho para deuses. Sua filosofia é a Vontade Ardente: o destino se conquista com as próprias garras.', img: 'https://i.pinimg.com/736x/e2/26/99/e226993b52449c46d0ad7e130b1a62bd.jpg' },
  { slug: 'animus', nome: 'Animus', desc: 'Construtos que acordaram por milagre, buscando provar que a centelha da consciência basta para ser chamado de vivo.', img: 'https://i.pinimg.com/564x/d8/8b/48/d88b48b5a302d6fac666e095c73d8e3c.jpg' },
  { slug: 'kodan', nome: 'Kodan', desc: 'Guardiões ursos do equilíbrio. Consideram-se a raça mais antiga de Tyria e velam pela vontade do deus criador Koda.', img: 'https://i.pinimg.com/736x/23/39/fe/2339fe8d444cfd37dd32f2d84e6d7ffd.jpg' },
  { slug: 'sylvari', nome: 'Sylvari', desc: 'Nascidos de vagens de uma Árvore Pálida sagrada, emergem adultos de um Sonho coletivo carregando inocência e propósito.', img: 'https://files.mastodon.social/media_attachments/files/110/675/597/670/120/891/original/67220009977659a8.jpg' },
  { slug: 'norn', nome: 'Norn', desc: 'Caçadores gigantes das Shiverpeaks. Vivem para acumular feitos épicos que serão cantados pelos skalds por gerações.', img: 'https://www.writeups.org/wp-content/uploads/Eir-Stegalkin-Guild-Wars-2.jpg' },
  { slug: 'skritt', nome: 'Skritt', desc: 'Ratos humanoides pequenos e frenéticos. Individualmente simples, em grupo formam redes neurais orgânicas de inteligência coletiva.', img: 'https://static.wikia.nocookie.net/aurea/images/7/73/Ratfolk.png/revision/latest?cb=20200427094328' },
  { slug: 'drakan', nome: 'Drakan', desc: 'Bípedes de origem dracônica que manifestam em seu corpo o poder elemental ou a corrupção ancestral dos Dragões Anciões.', img: 'https://i.pinimg.com/236x/b8/e3/0f/b8e30f7c5005012526b04f550d3a416f.jpg' },
  { slug: 'quaggan', nome: 'Quaggan', desc: 'Nascidos das lágrimas de Melandru, os Quaggans são amados por todas as raças, mas guardam uma besta aterrorizante dentro de si.', img: 'https://i.pinimg.com/originals/42/90/8f/42908fcd24848dbf56bcb5df1c837b90.png' },
  { slug: 'hylek', nome: 'Hylek', desc: 'Sapos humanoides mestres da alquimia e do veneno. Dominam as regiões úmidas de Tyria com sua biologia singular e seu deus do rio.', img: 'https://images-platform.99static.com/Tazo_50GpTbwCpDS5o-eO7BWpEU=/28x204:960x1136/500x500/top/smart/99designs-contests-attachments/99/99905/attachment_99905462' },
  { slug: 'magnus', nome: 'Magnus', desc: 'Em produção.', img: 'https://img.magnific.com/vetores-gratis/ilustracao-do-icone-de-doodle-de-engrenagem_53876-5596.jpg?semt=ais_hybrid&w=740&q=80' },
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
          >
            <div
              className="card-arte"
              style={p.img ? { backgroundImage: `url(${p.img})` } : undefined}
            />
            <span className="card-nome">{p.nome}</span>
            <div className="card-popout">
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

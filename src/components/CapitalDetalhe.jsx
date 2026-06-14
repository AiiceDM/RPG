import React from 'react';

const dadosCapitais = {
  'capital-divinity': {
    nome: "Divinity's Reach",
    regiao: 'Kryta',
    imagem: 'https://wiki.guildwars2.com/images/thumb/d/de/Queensdale_loading_screen.jpg/240px-Queensdale_loading_screen.jpg',
    descricao: 'Em construção.'
  },
  'capital-lions-arch': {
    nome: "Lion's Arch",
    regiao: 'Sea of Sorrows',
    imagem: 'https://d3qqidoz8mm2hm.cloudfront.net/wp-content/uploads/wallpapers/lost-shores-1920x1200.jpg',
    descricao: 'Em construção.'
  },
  'capital-black-citadel': {
    nome: 'Black Citadel',
    regiao: 'Ascalon',
    imagem: 'https://img.freepik.com/premium-photo/fantastic-epic-magica-landscape-mountains-summer-nature-mystic-forest-gaming-rpg-background_636456-305.jpg',
    descricao: 'Em construção.'
  },
  'capital-hoelbrak': {
    nome: 'Hoelbrak',
    regiao: 'Shiverpeak Mountains',
    imagem: 'https://d3qqidoz8mm2hm.cloudfront.net/wp-content/uploads/wallpapers/Feb_Wallpaper-1920x1200.jpg',
    descricao: 'Em construção.'
  },
  'capital-sanctuary': {
    nome: 'The Sanctuary',
    regiao: 'Shiverpeak Mountains',
    imagem: 'https://d3qqidoz8mm2hm.cloudfront.net/wp-content/uploads/wallpapers/Feb_Wallpaper-1920x1200.jpg',
    descricao: 'Em construção.'
  },
  'capital-rata-sum': {
    nome: 'Rata Sum',
    regiao: 'Tarnished Coast',
    imagem: 'https://wiki.guildwars2.com/images/thumb/6/60/Waterfall.jpg/1200px-Waterfall.jpg',
    descricao: 'Em construção.'
  },
  'capital-the-grove': {
    nome: 'The Grove',
    regiao: 'Tarnished Coast',
    imagem: 'https://wiki.guildwars2.com/images/thumb/6/60/Waterfall.jpg/1200px-Waterfall.jpg',
    descricao: 'Em construção.'
  },
  'capital-micholt-grounds': {
    nome: 'Micholt Grounds',
    regiao: 'Woodland Cascades',
    imagem: '',
    descricao: 'Em construção.'
  },
  'capital-skrittsburgh': {
    nome: 'Skrittsburgh',
    regiao: 'Zanarkland',
    imagem: '',
    descricao: 'Em construção.'
  },
  'capital-moorookoo': {
    nome: 'Moorookoo',
    regiao: 'Sea of Sorrows',
    imagem: '',
    descricao: 'Em construção.'
  }
};

export default function CapitalDetalhe({ capitalId, setPaginaAtual }) {
  const capital = dadosCapitais[capitalId];

  if (!capital) return null;

  return (
    <main className="pagina-site pagina-conteudo">
      <button className="botao-voltar" onClick={() => setPaginaAtual('capitais')}>
        ← Voltar às Capitais
      </button>

      <h1>{capital.nome}</h1>
      <p className="subtitulo-capital">Região: {capital.regiao}</p>

      {capital.imagem && (
        <img
          src={capital.imagem}
          alt={capital.nome}
          className="imagem-capital-detalhe"
        />
      )}

      <p>{capital.descricao}</p>
    </main>
  );
}

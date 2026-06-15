import React from 'react';

const DIVINDADES = [
  {
    slug: 'all-mer',
    nome: 'All-mer',
    titulo: 'A Abundância',
    tags: ['Cura', 'Compaixão', 'Esperança'],
    alinhamento: 'Neutro e Bom',
    img: null, // símbolo pendente
  },
  {
    slug: 'franchesca',
    nome: 'Franchesca',
    titulo: 'O Descanso',
    tags: ['Morte', 'Passagem de Almas', 'Luto'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/waQh2Ef.jpeg',
  },
  {
    slug: 'menestad',
    nome: 'Menestad',
    titulo: 'O Mistério',
    tags: ['Segredos', 'Conhecimento Oculto', 'Exploração'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/9wBImjP.jpeg',
  },
  {
    slug: 'balthazar',
    nome: 'Balthazar',
    titulo: 'A Caça',
    tags: ['Guerra', 'Fogo Purificador', 'Conflito'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://i.imgur.com/PQt6hia.jpeg',
  },
  {
    slug: 'lyssa',
    nome: 'Lyssa',
    titulo: 'A Musa',
    tags: ['Beleza', 'Ilusão', 'Profundezas'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://i.imgur.com/srPdMPn.jpeg',
  },
  {
    slug: 'koda',
    nome: 'Koda',
    titulo: 'O Início',
    tags: ['Equilíbrio', 'Origens', 'Vigilância'],
    alinhamento: 'Leal e Neutro',
    img: 'https://i.imgur.com/kXFW5Ek.jpeg',
  },
  {
    slug: 'dwayna',
    nome: 'Dwayna',
    titulo: 'A Alvorada',
    tags: ['Cura Ativa', 'Iluminação', 'Proteção'],
    alinhamento: 'Neutro e Bom',
    img: 'https://i.imgur.com/hvbYpdo.jpeg',
  },
  {
    slug: 'kormyr',
    nome: 'Kormyr',
    titulo: 'A Harmonia',
    tags: ['Justiça', 'Leis Civis', 'Autoridade'],
    alinhamento: 'Leal e Neutro',
    img: 'https://i.imgur.com/JWHCGal.jpeg',
  },
  {
    slug: 'nana',
    nome: 'Nana',
    titulo: 'A Inocência',
    tags: ['Proteção Infantil', 'Barreiras', 'Punição'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/Y7Z5uIp.png',
  },
  {
    slug: 'melandru',
    nome: 'Melandru',
    titulo: 'A Fertilidade',
    tags: ['Natureza', 'Terra', 'Preservação'],
    alinhamento: 'Neutro e Bom',
    img: 'https://i.imgur.com/S8kuihR.png',
  },
  {
    slug: 'grenth',
    nome: 'Grenth',
    titulo: 'A Melancolia',
    tags: ['Morte', 'Necromancia', 'Gelo'],
    alinhamento: 'Leal e Mau',
    img: 'https://i.imgur.com/TCc6Fhb.png',
  },
  {
    slug: 'irori',
    nome: 'Irori',
    titulo: 'A Perfeição',
    tags: ['Sabedoria', 'Autodisciplina', 'Iluminação'],
    alinhamento: 'Leal e Bom',
    img: 'https://i.imgur.com/0y4Xaiw.png',
  },
  {
    slug: 'caligura',
    nome: 'Calígura',
    titulo: 'A Depravação',
    tags: ['Crueldade', 'Sacrifício', 'Ambição'],
    alinhamento: 'Caótico e Mau',
    img: 'https://i.imgur.com/5pG4Wac.png',
  },
];

export default function Divindades({ setPaginaAtual }) {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Divindades de Tyria</h1>
      <p>
        Tyria é um mundo onde os deuses deixaram pegadas visíveis na história e no cotidiano dos povos.
        Cada divindade carrega um portfólio de domínios que moldou civilizações, guerras e filosofias ao
        longo dos séculos. Selecione uma divindade para conhecer seu dogma e sua influência no mundo.
      </p>

      <div className="grade-divindades">
        {DIVINDADES.map(d => (
          <div
            key={d.slug}
            className="card-divindade"
            onClick={() => setPaginaAtual(`divindade-${d.slug}`)}
          >
            <div className="card-divindade-img-wrap">
              <div
                className="card-divindade-img"
                style={d.img ? { backgroundImage: `url(${d.img})` } : undefined}
              />
            </div>
            <div className="card-divindade-info">
              <p className="card-divindade-subtitulo">{d.titulo}</p>
              <h2 className="card-divindade-nome">{d.nome}</h2>
              <div className="card-divindade-tags">
                {d.tags.map(t => (
                  <span key={t} className="card-divindade-tag">{t}</span>
                ))}
                <span className="card-divindade-tag card-divindade-tag--alinhamento">{d.alinhamento}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

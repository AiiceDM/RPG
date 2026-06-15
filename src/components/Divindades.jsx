import React from 'react';

const DIVINDADES = [
  {
    slug: 'all-mer',
    nome: 'All-mer',
    titulo: 'A Abundância',
    tags: ['Cura', 'Compaixão', 'Esperança'],
    alinhamento: 'Neutro e Bom',
    img: 'https://i.imgur.com/I5vF3FU.jpeg',
    cor: '#7A4F1A',
  },
  {
    slug: 'franchesca',
    nome: 'Franchesca',
    titulo: 'O Descanso',
    tags: ['Morte', 'Passagem de Almas', 'Luto'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/waQh2Ef.jpeg',
    cor: '#1E6B5C',
  },
  {
    slug: 'menestad',
    nome: 'Menestad',
    titulo: 'O Mistério',
    tags: ['Segredos', 'Conhecimento Oculto', 'Exploração'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/9wBImjP.jpeg',
    cor: '#4A2070',
  },
  {
    slug: 'balthazar',
    nome: 'Balthazar',
    titulo: 'A Caça',
    tags: ['Guerra', 'Fogo Purificador', 'Conflito'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://i.imgur.com/PQt6hia.jpeg',
    cor: '#8C2810',
  },
  {
    slug: 'lyssa',
    nome: 'Lyssa',
    titulo: 'A Musa',
    tags: ['Beleza', 'Ilusão', 'Profundezas'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://i.imgur.com/srPdMPn.jpeg',
    cor: '#1A5878',
  },
  {
    slug: 'koda',
    nome: 'Koda',
    titulo: 'O Início',
    tags: ['Equilíbrio', 'Origens', 'Vigilância'],
    alinhamento: 'Leal e Neutro',
    img: 'https://i.imgur.com/kXFW5Ek.jpeg',
    cor: '#14385E',
  },
  {
    slug: 'dwayna',
    nome: 'Dwayna',
    titulo: 'A Alvorada',
    tags: ['Cura Ativa', 'Iluminação', 'Proteção'],
    alinhamento: 'Neutro e Bom',
    img: 'https://i.imgur.com/hvbYpdo.jpeg',
    cor: '#A87010',
  },
  {
    slug: 'kormyr',
    nome: 'Kormyr',
    titulo: 'A Harmonia',
    tags: ['Justiça', 'Leis Civis', 'Autoridade'],
    alinhamento: 'Leal e Neutro',
    img: 'https://i.imgur.com/JWHCGal.jpeg',
    cor: '#5E4410',
  },
  {
    slug: 'nana',
    nome: 'Nana',
    titulo: 'A Inocência',
    tags: ['Proteção Infantil', 'Barreiras', 'Punição'],
    alinhamento: 'Neutro',
    img: 'https://i.imgur.com/Y7Z5uIp.png',
    cor: '#4A1030',
  },
  {
    slug: 'melandru',
    nome: 'Melandru',
    titulo: 'A Fertilidade',
    tags: ['Natureza', 'Terra', 'Preservação'],
    alinhamento: 'Neutro e Bom',
    img: 'https://i.imgur.com/S8kuihR.png',
    cor: '#1E5828',
  },
  {
    slug: 'grenth',
    nome: 'Grenth',
    titulo: 'A Melancolia',
    tags: ['Morte', 'Necromancia', 'Gelo'],
    alinhamento: 'Leal e Mau',
    img: 'https://i.imgur.com/TCc6Fhb.png',
    cor: '#0E2E46',
  },
  {
    slug: 'irori',
    nome: 'Irori',
    titulo: 'A Perfeição',
    tags: ['Sabedoria', 'Autodisciplina', 'Iluminação'],
    alinhamento: 'Leal e Bom',
    img: 'https://i.imgur.com/0y4Xaiw.png',
    cor: '#8C6010',
  },
  {
    slug: 'caligura',
    nome: 'Calígura',
    titulo: 'A Depravação',
    tags: ['Crueldade', 'Sacrifício', 'Ambição'],
    alinhamento: 'Caótico e Mau',
    img: 'https://i.imgur.com/5pG4Wac.png',
    cor: '#580A0E',
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
            style={{ '--cor-tema': d.cor }}
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

import React from 'react';

const DADOS = {
  'all-mer':    { nome: 'All-mer',    titulo: 'A Abundância',  alinhamento: 'Neutro e Bom',     portfolio: 'Abundância, Compaixão, Cura, Partilha, Oprimidos, Esperança.' },
  'franchesca': { nome: 'Franchesca', titulo: 'O Descanso',    alinhamento: 'Neutro',            portfolio: 'Morte, Funerais, Passagem de Almas, Sono Eterno, Luto.' },
  'menestad':   { nome: 'Menestad',   titulo: 'O Mistério',    alinhamento: 'Neutro',            portfolio: 'Segredos, Conhecimento Oculto, Exploração, Investigação, Conexão Mental.' },
  'balthazar':  { nome: 'Balthazar',  titulo: 'A Caça',        alinhamento: 'Caótico e Neutro',  portfolio: 'Guerra Ininterrupta, O Calor da Batalha, Fogo Purificador, Conflito, Vitória.' },
  'lyssa':      { nome: 'Lyssa',      titulo: 'A Musa',        alinhamento: 'Caótico e Neutro',  portfolio: 'Beleza, Ilusão, Água, Profundezas, Espelhos e Dualidade.' },
  'koda':       { nome: 'Koda',       titulo: 'O Início',      alinhamento: 'Leal e Neutro',     portfolio: 'Equilíbrio, Origens, Geada e Tempestades, Vigilância, Julgamento Divino.' },
  'dwayna':     { nome: 'Dwayna',     titulo: 'A Alvorada',    alinhamento: 'Neutro e Bom',      portfolio: 'Cura Ativa, Iluminação, Restauração de Doenças.' },
  'kormyr':     { nome: 'Kormyr',     titulo: 'A Harmonia',    alinhamento: 'Leal e Neutro',     portfolio: 'Leis Civis, Justiça Penal, Combate ao Crime, Autoridade Institucional.' },
  'nana':       { nome: 'Nana',       titulo: 'A Inocência',   alinhamento: 'Neutro',            portfolio: 'Proteção da Infância, Preservação da Inocência, Barreiras Mágicas, Punição de Profanadores.' },
  'melandru':   { nome: 'Melandru',   titulo: 'A Fertilidade', alinhamento: 'Neutro e Bom',      portfolio: 'Natureza, Terra, Crescimento, Preservação, Compaixão.' },
  'grenth':     { nome: 'Grenth',     titulo: 'A Melancolia',  alinhamento: 'Leal e Mau',        portfolio: 'Morte, Gelo, Julgamento, Necromancia, Aqueles que burlam a morte.' },
  'irori':      { nome: 'Irori',      titulo: 'A Perfeição',   alinhamento: 'Leal e Bom',        portfolio: 'Sabedoria, Conhecimento, Perfeição, Equilíbrio, Autodisciplina, Artes Marciais.' },
  'caligura':   { nome: 'Calígura',   titulo: 'A Depravação',  alinhamento: 'Caótico e Mau',     portfolio: 'Crueldade Pura, Sacrifício, Ambição, Tortura, Depravação.' },
};

export default function DivindadesDetalhe({ divindadeId, setPaginaAtual }) {
  const d = DADOS[divindadeId];

  if (!d) {
    return (
      <main className="pagina-site pagina-conteudo">
        <button className="botao-voltar" onClick={() => setPaginaAtual('divindades')}>← Voltar</button>
        <h1>Divindade não encontrada</h1>
      </main>
    );
  }

  return (
    <main className="pagina-site pagina-conteudo">
      <button className="botao-voltar" onClick={() => setPaginaAtual('divindades')}>← Voltar</button>
      <h1>{d.nome}</h1>
      <h2 style={{ color: 'var(--cor-texto-secundario, #888)', fontWeight: 400, marginTop: 4 }}>{d.titulo}</h2>

      <div className="caixa-info" style={{ marginTop: 32 }}>
        <p><strong>Alinhamento:</strong> {d.alinhamento}</p>
        <p><strong>Portfólio:</strong> {d.portfolio}</p>
      </div>

      <p style={{ marginTop: 40, opacity: 0.5, fontStyle: 'italic' }}>Página em construção — conteúdo completo em breve.</p>
    </main>
  );
}

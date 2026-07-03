import React from 'react';

export default function AlteracoesOficiais() {
  return (
    <main className="pagina-site pagina-conteudo pagina-alteracoes">
      <h1>Alterações Oficiais</h1>
      <p>Modificações e restrições aplicadas ao conteúdo oficial de Pathfinder 2e neste cenário.</p>

      <details className="alteracoes-secao">
        <summary>
          <span className="alteracoes-secao-icone">🚫</span>
          Banimentos
        </summary>
        <div className="alteracoes-secao-corpo">
          <h3>Classes</h3>
          <p className="alteracoes-placeholder">Nenhum banimento de classe registrado.</p>

          <h3>Talentos</h3>
          <p className="alteracoes-placeholder">Nenhum banimento de talento registrado.</p>
        </div>
      </details>

      <details className="alteracoes-secao">
        <summary>
          <span className="alteracoes-secao-icone">🛠️</span>
          Alterações
        </summary>
        <div className="alteracoes-secao-corpo">
          <p className="alteracoes-ongoing">⏳ On Going — Esta seção está em construção.</p>
        </div>
      </details>
    </main>
  );
}

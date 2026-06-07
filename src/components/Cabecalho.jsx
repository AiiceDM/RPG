import React from 'react';

export default function Cabecalho({ tema, alternarTema, setPaginaAtual }) {
  const navegarPara = (e, pagina) => {
    e.preventDefault();
    setPaginaAtual(pagina);
  };

  return (
    <header className="cabecalho">
      <div className="container-avatar">
        <div className="avatar"></div>
        <div className="menu-avatar">
          <a href="#" className="item-contato" onClick={(e) => e.preventDefault()}>🎮 Discord: SeuUsuario#1234</a>
          <button onClick={alternarTema} className="item-tema">
            {tema === 'escuro' ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </div>
      </div>

      <nav className="navegacao">
        <a href="#" className="link-nav" onClick={(e) => navegarPara(e, 'inicio')}>Início</a>

        <div className="dropdown">
          <button className="botao-menu">Cenário ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => navegarPara(e, 'geografia')}>Geografia</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Capitais</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Idiomas</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Calendário</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Curiosidades</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="botao-menu">Sociedade ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => e.preventDefault()}>Povos</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Facções</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Divindades</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Vilões</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="botao-menu">Mecânicas ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => e.preventDefault()}>Alterações Oficiais</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Experiência</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Inspiração</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Descanso</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="botao-menu">Personagem ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => e.preventDefault()}>Talentos e Habilidades</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Rituais</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Vitalidade</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Sanidade</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="botao-menu">Jornada ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => e.preventDefault()}>Exploração</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Masmorras</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Downtime</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Renome</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Vínculos</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Aliados</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="botao-menu">Campanhas ▾</button>
          <div className="dropdown-conteudo">
            <a href="#" onClick={(e) => e.preventDefault()}>Campanha 1</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Campanha 2</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Campanha 3</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Campanha 4</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Campanha 5</a>
          </div>
        </div>

        <a href="#" className="link-epitafio" onClick={(e) => e.preventDefault()}>Epitáfio 🗝️</a>
      </nav>
    </header>
  );
}
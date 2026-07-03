import React from 'react';

const MENUS = [
  {
    id: 'cenario',
    label: 'Cenário',
    itens: [
      { label: 'Geografia',    pagina: 'geografia' },
      { label: 'Capitais',     pagina: 'capitais' },
      { label: 'Idiomas',      pagina: 'idiomas' },
      { label: 'Calendário',   pagina: 'calendario' },
      { label: 'Curiosidades', pagina: null },
    ],
  },
  {
    id: 'sociedade',
    label: 'Sociedade',
    itens: [
      { label: 'Povos',      pagina: 'povos' },
      { label: 'Facções',    pagina: null },
      { label: 'Divindades', pagina: 'divindades' },
      { label: 'Vilões',     pagina: null },
    ],
  },
  {
    id: 'mecanicas',
    label: 'Mecânicas',
    itens: [
      { label: 'Alterações Oficiais', pagina: 'alteracoes-oficiais' },
      { label: 'Experiência',         pagina: 'experiencia' },
      { label: 'Inspiração',          pagina: 'inspiracao' },
      { label: 'Descanso',            pagina: 'descanso' },
    ],
  },
  {
    id: 'personagem',
    label: 'Personagem',
    itens: [
      { label: 'Talentos e Habilidades', pagina: 'talentos-habilidades' },
      { label: 'Rituais',                pagina: null },
      { label: 'Vitalidade',             pagina: 'vitalidade' },
      { label: 'Sanidade',               pagina: 'sanidade' },
    ],
  },
  {
    id: 'jornada',
    label: 'Jornada',
    itens: [
      { label: 'Exploração', pagina: 'exploracao' },
      { label: 'Masmorras',  pagina: 'masmorras' },
      { label: 'Downtime',   pagina: 'downtime' },
      { label: 'Renome',     pagina: 'renome' },
      { label: 'Vínculos',   pagina: 'vinculos' },
      { label: 'Aliados',    pagina: 'aliados' },
    ],
  },
  {
    id: 'campanhas',
    label: 'Campanhas',
    itens: [
      { label: 'Campanha 1', pagina: null },
      { label: 'Campanha 2', pagina: null },
      { label: 'Campanha 3', pagina: null },
      { label: 'Campanha 4', pagina: null },
      { label: 'Campanha 5', pagina: null },
    ],
  },
];

export default function Cabecalho({ setPaginaAtual, paginaAtual = 'inicio' }) {
  const navegar = (e, pagina) => {
    e.preventDefault();
    if (pagina) setPaginaAtual(pagina);
  };

  const estaAtivo = (menu) =>
    menu.itens.some((i) => i.pagina && paginaAtual.startsWith(i.pagina));

  return (
    <header className="cabecalho" role="banner">
      <div className="container-avatar">
        <div className="avatar" role="img" aria-label="Menu do usuário" />
        <div className="menu-avatar" role="menu">
          <a
            href="#"
            className="item-contato"
            role="menuitem"
            onClick={(e) => e.preventDefault()}
          >
            🎮 Discord: Aiice
          </a>
        </div>
      </div>

      <nav className="navegacao" role="navigation" aria-label="Navegação principal">
        <a
          href="#"
          className={`link-nav${paginaAtual === 'inicio' ? ' ativo' : ''}`}
          onClick={(e) => navegar(e, 'inicio')}
        >
          Início
        </a>

        {MENUS.map((menu) => (
          <div key={menu.id} className="dropdown">
            <button
              className={`botao-menu${estaAtivo(menu) ? ' botao-menu--ativo' : ''}`}
              aria-haspopup="true"
            >
              {menu.label}
              <span className="botao-menu-seta">▾</span>
            </button>

            <div className="dropdown-conteudo" role="menu">
              {menu.itens.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  role="menuitem"
                  className={!item.pagina ? 'desabilitado' : ''}
                  onClick={(e) => navegar(e, item.pagina)}
                >
                  {item.label}
                  {!item.pagina && (
                    <span className="item-em-breve">em breve</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}

        <a
          href="#"
          className="link-epitafio"
          onClick={(e) => e.preventDefault()}
        >
          Epitáfio 🗝️
        </a>
      </nav>
    </header>
  );
}

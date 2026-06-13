import React, { useState, useEffect } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Capa from './components/Capa';
import Geografia from './components/Geografia';
import Capitais from './components/Capitais';
import CapitalDetalhe from './components/CapitalDetalhe';

export default function App() {
  const [tema, setTema] = useState('escuro');
  const [paginaAtual, setPaginaAtual] = useState('inicio');

  useEffect(() => {
    if (tema === 'claro') {
      document.documentElement.setAttribute('data-tema', 'claro');
    } else {
      document.documentElement.removeAttribute('data-tema');
    }
  }, [tema]);

  const alternarTema = () => {
    setTema(tema === 'escuro' ? 'claro' : 'escuro');
  };

  return (
    <>
      <Cabecalho 
        tema={tema} 
        alternarTema={alternarTema} 
        setPaginaAtual={setPaginaAtual} 
      />
      {paginaAtual === 'inicio' && <Capa />}
      {paginaAtual === 'geografia' && <Geografia />}
      {paginaAtual === 'capitais' && <Capitais setPaginaAtual={setPaginaAtual} />}
      {paginaAtual.startsWith('capital-') && <CapitalDetalhe capitalId={paginaAtual} setPaginaAtual={setPaginaAtual} />}
    </>
  );
}
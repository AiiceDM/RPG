import React, { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Capa from './components/Capa';
import Geografia from './components/Geografia';
import Capitais from './components/Capitais';
import CapitalDetalhe from './components/CapitalDetalhe';
import Calendario from './components/Calendario';
import Idiomas from './components/Idiomas';
import Vitalidade from './components/Vitalidade';
import Sanidade from './components/Sanidade';
import Inspiracao from './components/Inspiracao';
import Renome from './components/Renome';
import Vinculos from './components/Vinculos';
import Experiencia from './components/Experiencia';
import Descanso from './components/Descanso';
import Masmorras from './components/Masmorras';
import Aliados from './components/Aliados';
import Exploracao from './components/Exploracao';
import Downtime from './components/Downtime';
import Povos from './components/Povos';
import PovosDetalhe from './components/PovosDetalhe';
import Divindades from './components/Divindades';
import DivindadesDetalhe from './components/DivindadesDetalhe';
import TalentosHabilidades from './components/TalentosHabilidades';
import TalentosDetalhe from './components/TalentosDetalhe';

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicio');

  return (
    <>
      <Cabecalho
        setPaginaAtual={setPaginaAtual}
        paginaAtual={paginaAtual}
      />
      {paginaAtual === 'inicio' && <Capa />}
      {paginaAtual === 'geografia' && <Geografia />}
      {paginaAtual === 'capitais' && <Capitais setPaginaAtual={setPaginaAtual} />}
      {paginaAtual.startsWith('capital-') && <CapitalDetalhe capitalId={paginaAtual} setPaginaAtual={setPaginaAtual} />}
      {paginaAtual === 'calendario' && <Calendario />}
      {paginaAtual === 'idiomas' && <Idiomas />}
      {paginaAtual === 'vitalidade' && <Vitalidade />}
      {paginaAtual === 'sanidade' && <Sanidade />}
      {paginaAtual === 'inspiracao' && <Inspiracao />}
      {paginaAtual === 'renome' && <Renome />}
      {paginaAtual === 'vinculos' && <Vinculos />}
      {paginaAtual === 'experiencia' && <Experiencia />}
      {paginaAtual === 'descanso' && <Descanso />}
      {paginaAtual === 'masmorras' && <Masmorras />}
      {paginaAtual === 'aliados' && <Aliados />}
      {paginaAtual === 'exploracao' && <Exploracao />}
      {paginaAtual === 'downtime' && <Downtime />}
      {paginaAtual === 'povos' && <Povos setPaginaAtual={setPaginaAtual} />}
      {paginaAtual.startsWith('povo-') && <PovosDetalhe ancestralId={paginaAtual.replace('povo-', '')} setPaginaAtual={setPaginaAtual} />}
      {paginaAtual === 'divindades' && <Divindades setPaginaAtual={setPaginaAtual} />}
      {paginaAtual.startsWith('divindade-') && <DivindadesDetalhe divindadeId={paginaAtual.replace('divindade-', '')} setPaginaAtual={setPaginaAtual} />}
      {paginaAtual === 'talentos-habilidades' && <TalentosHabilidades setPaginaAtual={setPaginaAtual} />}
      {paginaAtual.startsWith('talento-') && <TalentosDetalhe ancestralId={paginaAtual.replace('talento-', '')} setPaginaAtual={setPaginaAtual} />}
    </>
  );
}

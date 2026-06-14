import React from 'react';

const NOMES = {
  humano: 'Humano',
  asura: 'Asura',
  charr: 'Charr',
  animus: 'Animus',
  kodan: 'Kodan',
  sylvari: 'Sylvari',
  norn: 'Norn',
  skritt: 'Skritt',
  drakan: 'Drakan',
  quaggan: 'Quaggan',
  hylek: 'Hylek',
  magnus: 'Magnus',
  oficiais: 'Oficiais',
};

function Stats({ tamanho, idade, pv, habilidades, idiomas, deslocamento }) {
  return (
    <table className="tabela-stats">
      <tbody>
        <tr><td><strong>Tamanho</strong></td><td>{tamanho}</td><td><strong>Idade</strong></td><td>{idade}</td></tr>
        <tr><td><strong>Pontos de Vida</strong></td><td>{pv}</td><td><strong>Deslocamento</strong></td><td>{deslocamento}</td></tr>
        <tr><td><strong>Habilidades</strong></td><td colSpan={3}>{habilidades}</td></tr>
        <tr><td><strong>Idiomas</strong></td><td colSpan={3}>{idiomas}</td></tr>
      </tbody>
    </table>
  );
}

function Humano() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="50–90 anos" pv="8" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Improvisação [Human]</h3>
    <p>Você ganha 1 Ponto Heroico ao final de cada descanso (perdido se não usado até o próximo descanso). Ao gastar um Ponto Heroico para rerrolar, adicione +1 bônus de circunstância no resultado final.</p>
    <h3>Espírito Cooperativo [Human] — 1x ao dia</h3>
    <p>Quando você usa a ação <strong>Auxiliar (Aid)</strong> em um teste de perícia ou ataque, você pode realizar a atividade com 1 nível de sucesso superior. Pode gastar 1 Ponto Heroico para recuperar o uso sem ação necessária.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Habilidoso:</strong> Torna-se Trained em uma perícia; progressão automática (Expert nível 3, Master nível 7, Legendary nível 15). Uma vez a cada 10 minutos, ao usar Ponto Heroico para rerrolar, pode remover o traço Fortune.</li>
      <li><strong>Versátil:</strong> Selecione um General Feat para o qual você preenche os pré-requisitos.</li>
      <li><strong>Criomante:</strong> Resistência a Frio = metade do nível (mín. 1). Aprende o truque <em>Criomancia</em> (Arcana/Primal, 2 ações, cria efeitos de gelo/neve inofensivos). +1 de dano por dado em dano de Frio de magias.</li>
      <li><strong>Piromante:</strong> Resistência a Fogo = metade do nível (mín. 1). Aprende o truque <em>Piromancia</em> (Arcana/Primal, 2 ações, cria chamas inofensivas). +1 de dano por dado em dano de Fogo de magias.</li>
      <li><strong>Zéfiro:</strong> Velocidade +5 pés. Habilidade <em>Surto de Adrenalina</em> (1 ação, 1x/10min): move-se duas vezes a velocidade ignorando terreno difícil não-mágico.</li>
      <li><strong>Tenebris:</strong> Ganha Darkvision. +2 circunstancial em Percepção visual em penumbra/escuridão. Área de Seek dobrada.</li>
      <li><strong>Intelectual:</strong> Ganha os talentos <em>Multilingual</em> e <em>Additional Lore</em>. +1 circunstancial em Recall Knowledge para idiomas conhecidos.</li>
      <li><strong>Luminar:</strong> Conjura truque Luz em si mesmo (halo de 10 pés). <em>Bênção Radiante</em> (1 ação, 1x/10min): emanação de 10 pés, aliados ganham +1 status em ataques e salvamentos até o fim do próximo turno. <em>Sentir Sofrimento</em> (1 ação, 1x/10min): detecta criatura mais ferida em 60 pés.</li>
      <li><strong>Tiferino:</strong> Resistência a Dano Mental = metade do nível (mín. 1). Cauda preênsil capaz de manipular objetos de até 1 Light (não pode usar armas ou escudos).</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Potencial Inesgotável:</strong> Escolha entre um General Feat de 1° nível, treinamento em 2 perícias, ou um Talento de Classe de 1° adicional.</li>
      <li><strong>Natureza Cooperativa:</strong> +4 circunstancial em testes de Aid.</li>
      <li><strong>Resiliência e União:</strong> +1 status em salvamentos contra Medo e Emoção. Reação <em>Grito de Solidariedade</em> (1x/dia): quando você ou aliado em 30 pés é alvo de efeito Medo/Emoção, todos na área ganham +1 circunstancial contra aquele efeito.</li>
      <li><strong>Laços do Submundo:</strong> Em Estilo de Vida E1 ou E2: +2 circunstancial em Gather Information e Percepção para boatos. Missão de Energia ao descobrir Rumor Verdadeiro.</li>
      <li><strong>[HABILIDOSO] Execução Forçada:</strong> 1x por combate. Ao usar a perícia da herança, aumenta 1 grau de sucesso. Depois: Clumsy 1 (perícias físicas) ou Stupefied 1 (mentais) até fim do próximo turno.</li>
      <li><strong>[VERSÁTIL] Caminhos Entrelaçados:</strong> Permite selecionar uma Multiclass Dedication Feat de nível 2.</li>
      <li><strong>[CRIOMANTE] Sopro Invernal:</strong> Aprende Frostbite com melhorias: alcance 120 pés; falha aplica fraqueza a Bludgeoning; falha crítica dobra a fraqueza.</li>
      <li><strong>[PIROMANTE] Centelha Indomável:</strong> Aprende Ignition com melhorias: alcance à distância 60 pés; corpo a corpo 10 pés; dados d6 à distância / d8 corpo a corpo.</li>
      <li><strong>[ZÉFIRO] Corrente Favorável:</strong> Ao usar Surto de Adrenalina, ignora Reações de movimento. +1 circunstancial em Reflexos até o início do próximo turno.</li>
      <li><strong>[TENEBRIS] Sentidos do Abismo:</strong> Em ambientes subterrâneos: assume 2 atividades de Exploração simultâneas; bônus de Percepção da herança estende-se a Furtividade.</li>
      <li><strong>[INTELECTUAL] Argumentação Erudita:</strong> 1x/dia: usa Arcana/Nature/Occultism/Religion no lugar de Diplomacy em Request ou Make an Impression.</li>
      <li><strong>[LUMINAR] Halo Restaurador:</strong> Luz aumenta para 20 pés. Bênção Radiante cura 1d6 PV (aumenta 1d6/2 níveis acima do 1°). Com Sentir Sofrimento ativo na criatura: cura dobrada.</li>
      <li><strong>[TIFERINO] Golpe Sorrateiro [Profano, Floreio]:</strong> Cauda pode empunhar arma Agile. Ao atacar com arma Finesse na mão, realiza Strike adicional com a arma da cauda como parte da mesma ação.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Adaptabilidade Pragmática:</strong> Escolha 2 perícias treinadas. Para Earn Income e acesso a empregos, conta como um nível de maestria acima. Missão de Energia em Sucesso Crítico nessas perícias.</li>
      <li><strong>Camaleão Social:</strong> Ignora penalidades sociais de Estilo de Vida inferior. Missão de Energia ao acessar local restrito sem o estilo necessário.</li>
      <li><strong>Improviso Talentoso:</strong> 1x/dia: trata uma perícia não-treinada como Trained para aquele teste.</li>
      <li><strong>[LUMINAR] Asas Radiantes [Movimento]:</strong> 1x/10min: 1 ação manifesta asas de luz e realiza um Stride com voo (+10 pés velocidade). Cai se terminar no ar.</li>
      <li><strong>[VERSÁTIL] Disciplina Compartilhada [Movimento]:</strong> Reação: aliado a 30 pés obtém sucesso crítico → você ganha +1 circunstancial no próximo teste da mesma perícia ou ataque (até 1 minuto).</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Empreendedor Tyriano:</strong> +1 circunstancial em Earn Income. Reduz tempo de projetos longos em 1 dia/5 dias de duração. Missão de Energia ao concluir projeto sem Falha Crítica.</li>
      <li><strong>[LUMINAR] Clarão do Julgamento:</strong> Após Sentir Sofrimento em inimigo, gasta ação extra: ataque de magia à distância causando 2d6 Fogo ou Vitalidade (+1d6/2 níveis acima do 5°). Sucesso crítico: Dazzled 1 rodada.</li>
      <li><strong>[LUMINAR] Iluminação Atenuante:</strong> 1x/dia: ao usar Bênção Radiante, também concede 2d6 PV Temporários na área por 1 minuto (+1d6/2 níveis acima do 5°).</li>
      <li><strong>[VERSÁTIL] Ambição Desenfreada:</strong> Ganha Talento de Classe adicional de 4° nível ou inferior (própria classe ou de Dedicação).</li>
    </ul>
  </>;
}

function Asura() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="80–150 anos" pv="6" habilidades="Inteligência, Sabedoria + 1 livre. Penalidade em Força" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Sensibilidade Arcana [Asura, Arcane]</h3>
    <p>Conjura <strong>Detectar Magia</strong> como truque arcano inato (1 ação em vez de 2). Passivamente percebe fontes mágicas notórias ou poderosas próximas sem precisar agir.</p>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>
    <h3>Intelecto Superior [Asura]</h3>
    <p>Usa modificador de <strong>Inteligência</strong> no lugar de Sabedoria (Percepção) para rolagens de <strong>Iniciativa</strong>.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Eletrostático:</strong> <em>Capacitor Vivo</em> (Reação): ao sofrer dano elétrico, reduz dano em Nível + Con. Se reduzir a 0, recarrega Martelo Voltaico. <em>Condutividade Segura:</em> +1 em Reflexos contra dano elétrico. <em>Martelo Voltaico</em> (2 ações, 1x/10min): 1d8 Elétrico em alvo a 60 pés (Reflexo Básico); terreno eletrificado por 1 minuto causando 1 elétrico por turno. Escala +1d8/2 níveis.</li>
      <li><strong>Habitante da Escuridão:</strong> Ganha Darkvision; imune a Dazzled por luzes fortes. <em>Fulgor Fotônico</em> (2 ações, 1x/hora): Cone de 15 pés, Fortitude: Sucesso = Dazzled 1 rodada; Falha = Blinded 1 rodada; Falha Crítica = Blinded 1 rodada + Dazzled 1 minuto.</li>
      <li><strong>Audição Absoluta:</strong> <em>Ecolocalização Ativa:</em> 1 ação para ignorar Concealed e Invisible de criaturas a 30 pés (exceto sob silêncio mágico). <em>Triangular Alvo</em> (1 ação, 1x/10min): criatura ouvida perde benefícios de Hidden para aliados que te ouçam; aliados +1 circunstancial no primeiro ataque contra ela.</li>
      <li><strong>Mente Blindada:</strong> Resistência a Dano Mental = metade do nível. +1 circunstancial em salvamentos contra efeitos mentais. <em>Feedback Cognitivo:</em> quando criatura falha em te afetar com efeito Mental/Emoção, sofre 1d6 dano Mental (+1d6/4 níveis). <em>Lógica Fria</em> (1–3 ações, 1x/hora): reduz condição Frightened em 1 por ação gasta.</li>
      <li><strong>Hiper-Processador:</strong> Lê/escreve 2x mais rápido. Reduz à metade o tempo de Learn a Spell e Decipher Writing. Treinado em 2 perícias de conhecimento à escolha. <em>Algoritmo de Combate</em> (1 ação): Recall Knowledge; Sucesso = próximo ataque/CD contra o alvo ganha +1 circunstancial; Sucesso Crítico = +2.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Charr() {
  return <>
    <Stats tamanho="1,50–2,50m (Médio)" idade="30–60 anos" pv="10" habilidades="Força, Constituição + 1 livre. Penalidade em Carisma" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Predador Natural [Charr]</h3>
    <p>Escolha uma arma natural:</p>
    <ul>
      <li><strong>Presas:</strong> 1d8 dano perfurante</li>
      <li><strong>Garras:</strong> 1d4 cortante, traços Agile e Finesse</li>
      <li><strong>Cauda:</strong> 1d4 concussão, traço Reach</li>
    </ul>
    <h3>Fera de Batalha [Charr]</h3>
    <p>Com ambas as mãos livres, ganha +1,5m (+5 pés) em Deslocamento.</p>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Primordial:</strong> Treinado em Intimidação (ou outra perícia). <em>Terrifying Laughter</em> (Ação Livre): ao ter Sucesso em Demoralize, solta risada causando 1d4 dano mental (escala com proficiência em Intimidação: 2d4 Expert, 3d4 Master, 5d4 Legendary). <em>Sadismo:</em> +1 circunstancial em dano contra criaturas com Frightened.</li>
      <li><strong>Legião de Ferro:</strong> Resistência a Fogo = metade do nível. Reduz à metade o tempo de Repair e Craft de itens metálicos/mecânicos. <em>Pele de Fornalha</em> (Reação): ao ser atingido por ataque físico, ganha Resistência a Dano Físico = 2 + metade do nível contra aquele ataque.</li>
      <li><strong>Legião de Sangue:</strong> Tamanho torna-se Grande (Large) com +2 PV de Ancestralidade. <em>Ímpeto de Sangue</em> (1 ação, 1x/10min): Stride + Strike corpo a corpo como parte da mesma ação; acerto gera PV Temporários = nível por 1 combate.</li>
      <li><strong>Legião das Cinzas:</strong> Darkvision. +1 circunstancial em Furtividade em luz fraca/escuridão. <em>Golpe Traiçoeiro:</em> ao acertar criatura Off-Guard com ataque Agile/Finesse/Desarmado corpo a corpo, causa +1d4 dano de precisão (2d4 no nível 10).</li>
      <li><strong>Legião das Chamas:</strong> Resistência a Fogo = metade do nível. +1 dano por dado em magias/itens de fogo. <em>Presença Infernal</em> (Ação Livre): ao conjurar magia de fogo ou arremessar bomba ígnea, tenta Demoralize em inimigo a 9m sem penalidade por idioma.</li>
      <li><strong>Sem Legião (Gladium):</strong> Ganha um General Feat de 1° nível. <em>Lobo Solitário:</em> sem aliados em 15 pés: +1 circunstancial na CA e em salvamentos de Vontade.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Animus() {
  return <>
    <Stats tamanho="1,00–2,00m (Médio)" idade="Indeterminada" pv="8" habilidades="Constituição, Inteligência + 1 livre. Penalidade em Carisma" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Casco Vivo [Animus, Construct]</h3>
    <ul>
      <li><strong>Combustível Variável:</strong> Não consome comida; precisa de materiais brutos diariamente (tipo varia com a Herança). Se não o fizer, sofre regras de Fome e Sede.</li>
      <li><strong>Ciclo de Descanso:</strong> 4h de "Modo de Espera" (−4 Percepção) + 4h de atividades leves = descanso diário. Não dorme.</li>
      <li><strong>Corrosão e Infiltração:</strong> Não é imune a Doenças/Venenos/Sickened; recebe +1 circunstancial em salvamentos contra esses efeitos e Resistência a Veneno = metade do nível.</li>
    </ul>
    <h3>Fisiologia Robótica [Animus, Healing]</h3>
    <ul>
      <li>Treinado em Crafting. Manutenção (10 min) funciona como Treat Wounds usando Crafting no lugar de Medicina. Com o talento Quick Repair, pode ser feito em 1 ação durante combate (como Battle Medicine).</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Modelo Relicário (Despertos do Silêncio):</strong> Combustível = Resíduos Mágicos. <em>Casco de Nulação:</em> Resistência a Dano de Magias = metade do nível. <em>Conduíte Ritualístico:</em> Treinado em 1 perícia mágica; pode conjurar Rituais (começa com 2 de nível 1); +1 circunstancial em testes de Perícia Primária em rituais. <em>Sentido do Fluxo:</em> detecta rituais ativos/sendo conjurados em 100 pés.</li>
      <li><strong>Modelo Lógico (Fugitivos da Lógica):</strong> Combustível = livros, pergaminhos, dados. <em>Banco de Dados:</em> Additional Lore em tópico técnico/arcano. <em>Algoritmo de Mimetismo</em> (Reação): ao ver criatura a 60 pés conjurar magia de rank ≤ 1/3 do nível, tenta identificá-la (DC Fácil); Sucesso = armazena e pode conjurar a magia até o fim do próximo turno usando Int; recarga de 10 minutos.</li>
      <li><strong>Modelo Caótico (Filhos do Caos):</strong> Combustível = matéria orgânica/carvão/sucata. <em>Ressonância Emocional:</em> Escolhe Fúria (Fogo), Tristeza (Frio) ou Alegria (Eletricidade); Resistência ao tipo = metade do nível. <em>Sobrecarga Caótica</em> (Ação Livre): fica Quickened 1 até fim do turno (apenas Stride/Strike); ataques causam +1d6 dano elemental (+1d6 nos níveis 5, 10, 15, 20); no início do próximo turno fica Slowed 1 e Clumsy 1 por 1 rodada.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Essência da Matéria:</strong> Escolhe composição (Porcelana, Pano, Metal ou Rocha) com habilidades únicas de interação e combate.</li>
      <li><strong>Compartimento de Estoque:</strong> Compartimento interno de 1 Bulk. Itens internos não contam para peso; inserir/retirar = 1 ação [Manipulate].</li>
      <li><strong>Protocolo Investigativo:</strong> 10 min observando criatura → descobre o tipo sem teste; CD de Recall Knowledge sobre ela −2 pelo dia.</li>
      <li><strong>Frequência Oculta:</strong> Aprende truque Message (inato oculto). +1 circunstancial em Recall Knowledge sobre tecnologia, construtos e fenômenos mágicos antigos.</li>
      <li><strong>Protocolo de Estabilização:</strong> Ao estabilizar com Dying, recupera 1 PV e acorda imediatamente (permanece Caído).</li>
      <li><strong>Nódulo de Reparo Rápido:</strong> Aprende Mending (inato). Ponto de Foco para conjurar Mending em 1 ação: cura 5 PV + 5 PV Temporários em construto/você mesmo (+5 de ambos/2 níveis acima do 1°).</li>
      <li><strong>[RELICÁRIO] Sensibilidade Cerimonial:</strong> Ao tocar local de ritual, rola 1d4 para descobrir informações (4 = 2 palavras-chave; 1 = Stupefied 1 por 10 min).</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info I:</strong> Aprende 1 ritual de 1° rank; aprende novos rituais de 1° rank 25% mais rápido. Missão de Energia ao aprender novo ritual.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Nódulo Emergencial:</strong> Escolhe Modo Ofensivo (+2 status em ataques) ou Modo Arcano (+2 status em CDs de magia) até fim do turno. Depois: Slowed 1 enquanto reestabiliza. Mais de 1 uso por dia causa dano direto à Vitalidade.</li>
      <li><strong>Diplomacia Apática [Mental]:</strong> Usa Inteligência no lugar de Carisma em Diplomacia (Make Impression) e Intimidação (Coerce/Demoralize) contra alvos com Int ≥ −3 que entendam seu idioma.</li>
      <li><strong>Eco da Centelha:</strong> 1x/dia em local com forte carga emocional/mágica: impressão sensorial do que ocorreu ali. +1 status no próximo Recall Knowledge sobre o local. Ganha 1 Ponto Heroico.</li>
      <li><strong>Previsibilidade Artificial:</strong> 1 ação [Concentrate, Visual]: declara previsão de Ataque, Magia ou Avanço. Se o gatilho ocorrer antes do próximo turno, gasta Reação: +2 circunstancial na CA / salvamento / Passo para longe.</li>
      <li><strong>[RELICÁRIO] Oferenda de Metal e Óleo [Sacrifício]:</strong> 1x/semana: substitui componente material de ritual por partes do próprio corpo. Depois: Drained 1 (requer 8h + dobro de combustível para curar).</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info II:</strong> Pré-req: Info I. Aprende 1 ritual de 2° rank; aprende novos de 2° rank 25% mais rápido.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Protocolo de Autopreservação [Reação]:</strong> 1x/10min. Gatilho: cai abaixo de metade dos PV máximos pela 1ª vez no combate. Fica Quickened 1 até fim do próximo turno (apenas Stride, Step, recuperação).</li>
      <li><strong>Empatia Ecoante:</strong> Pré-req: Eco da Centelha. Ao usar Eco da Centelha, recebe efeito baseado no sentimento do local (Alegria, Admiração, Ternura, Curiosidade, Desespero, Desesperança — cada um com mecânica específica).</li>
      <li><strong>Cerne Desperto:</strong> Pré-req: Essência da Matéria. Desbloqueia habilidade ativa baseada na composição (Porcelana: magias; Pano: defesa por colapso; Metal: sobrecarga de Escudo; Rocha: enraizamento tectônico).</li>
      <li><strong>Os Três Pilares:</strong> Designa 3 NPCs/PCs como Porto Seguro, Horizonte Inspirador e Tesouro Precioso, cada um concedendo bônus mecânicos específicos. Perdas causam dano à Sanidade.</li>
      <li><strong>[RELICÁRIO] Ritualismo Mímico:</strong> Ao testemunhar ritual completo como assistente, gasta 1 dia + teste de perícia (CD do ritual); Sucesso = aprende o ritual temporariamente por 1 semana (1 uso) e progride 2x mais rápido para aprendizado permanente.</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info III:</strong> Pré-req: Info II. Aprende 1 ritual de 3° rank; aprende novos de 3° rank 25% mais rápido.</li>
    </ul>
  </>;
}

function Kodan() {
  return <>
    <Stats tamanho="2,00–3,20m (Grande)" idade="150–400 anos" pv="12" habilidades="Constituição + 1 livre" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="6m (20 pés)" />
    <p><em>Veja as regras para <a href="https://2e.aonprd.com/Rules.aspx?ID=3270" target="_blank" rel="noopener noreferrer">personagens grandes</a>.</em></p>

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Titânica [Kodan]</h3>
    <ul>
      <li><strong>Garras:</strong> 1d6 Cortante, traços Agile e Finesse.</li>
      <li><strong>Mordida:</strong> 1d8 Perfurante.</li>
      <li><strong>Habitante do Ártico:</strong> Resistência a Frio = metade do nível (mín. 1). Trata efeitos de Frio Extremo como um grau menos severo.</li>
    </ul>
    <h3>Espírito Resiliente [Kodan, Mental]</h3>
    <ul>
      <li>+1 circunstancial em Vontade contra efeitos com traço Emoção. Aumenta para +2 com PV abaixo de metade do máximo.</li>
    </ul>
    <h3>Orientação Sobrenatural [Kodan, Divine]</h3>
    <ul>
      <li>Conjura truque <em>Guidance</em> como magia inata divina, mas apenas em si mesmo.</li>
    </ul>
    <h3>Revelação Ancestral [Kodan, Divine, Stance] — 1x/dia</h3>
    <p>1 ação para ativar. Dura 1 minuto. Ganha PV Temporários = 1 + nível. Escolha um aspecto:</p>
    <ul>
      <li><strong>Manto da Salvação (Reação):</strong> Aliado em 15 pés falha em Save → +1 circunstancial (+2 no nível 11).</li>
      <li><strong>Intervenção Protetora (Reação):</strong> Aliado em 15 pés seria atingido → +1 circunstancial na CA (+2 no nível 11).</li>
      <li><strong>Presas Congelantes:</strong> Mordidas causam 1 Frio extra; alvo que não se mova sofre o dano novamente (+1/5 níveis).</li>
      <li><strong>Garras Trovejantes:</strong> Garras causam 1 Sônico extra; ressoa para segunda criatura a 15 pés do alvo (+1/5 níveis).</li>
      <li><strong>Brisa Revigorante (Dissipar):</strong> Encerra o Manifesto para curar 1d8 em emanação de 15 pés (+8 se concentrado em 1 alvo; +1d8/2 níveis).</li>
      <li><strong>Tempestade Debilitadora:</strong> Aura de 10 pés de Terreno Difícil para inimigos (30 pés no nível 11).</li>
      <li><strong>Fúria dos Céus:</strong> 1 ação/rodada para convocar raio em quadrado de 5 pés a 15 pés: 1d4 Elétrico (Reflexo Básico; falha crítica perde Reação). +1d4/2 níveis.</li>
    </ul>

    <h2>🧬 Heranças (Bênçãos Espirituais)</h2>
    <p>Escolha 2 Bênçãos Espirituais no 1° nível. Ver talentos abaixo para detalhes mecânicos de cada Bênção.</p>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Abraço do Urso:</strong> Resistência a Frio +1 (+2 no nível 11). Durante descanso de 8h, até 4 criaturas próximas tratam Frio Extremo como um grau menos severo.</li>
      <li><strong>Orientação Compartilhada:</strong> Remove restrição de "somente em si mesmo" para Guidance. Ao usar em si mesmo, pode escolher aliado a 9m para também receber os benefícios.</li>
      <li><strong>Sentido Gélido:</strong> Meditação de 10 min: descobre direção da fonte de frio mais intensa em 10 milhas.</li>
      <li><strong>Entidade Sagrada:</strong> Treinado em Diplomacia ou Intimidação. +1 circunstancial contra divindades, sacerdotes e criaturas sagradas. Missão de Energia ao ganhar 1 Ponto de Renome com divindade não-maligna.</li>
      <li><strong>Patas do Inverno:</strong> Ignora terreno difícil não-mágico de neve/gelo. Tração perfeita em superfícies gélidas.</li>
      <li><strong>Olhar de Superioridade:</strong> Demoralize ignora penalidade por idioma e pode remover traço Auditório contra criaturas menores que você.</li>
      <li><strong>Inércia do Iceberg:</strong> +2 circunstancial na CD de Fortitude/Atletismo contra Shove e Trip.</li>
      <li><strong>Parábolas do Santuário:</strong> Treinado em Religião (ou outra). Pode usar Religião para a reação Aid em qualquer tarefa descrevendo um ensinamento de Koda. Missão de Energia ao concluir sidequest religiosa.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Avanço do Colosso:</strong> Ignora penalidade de deslocamento de armaduras médias e pesadas.</li>
      <li><strong>Primeiro Toque de Koda:</strong> Pré-req: Sentido Gélido. +1 em uma resistência existente (+2/7°, +3/11°, +4/15°, +5/19°). Ao visitar local do Sentido Gélido, pode escolher outro tipo.</li>
      <li><strong>Peso e Opressão:</strong> Pré-req: Olhar de Superioridade. +1 Intimidação/Demoralize por categoria de tamanho menor (máx. +3). Reação: ao criatura falhar em Shove/Trip/Reposicionar você, tenta Demoralize (ela conta como maior se falha crítica).</li>
      <li><strong>Contato Congelante:</strong> Pré-req: Patas do Inverno. +1 Frio extra em garras (+1/4 níveis acima do 3°). <em>Esfriar</em> (2 ações): apaga chama pequena, resfria superfície ou congela 1,5m de água.</li>
      <li><strong>Ressonância Autoritária:</strong> 1 ação: voz perceptível até em tempestades por 1 minuto. +1 status em Intimidação e Performance. Missão de Energia ao influenciar grupo com sucesso.</li>
      <li><strong>Manto da Serenidade:</strong> Pré-req: Abraço do Urso. Durante descanso longo, 1 criatura adjacente recupera Sanidade e ganha 1 rerrolagem (Fortuna) em salvamento de Emoção no dia seguinte.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Alcance Divino:</strong> Alcance de todos os ataques desarmados aumenta para 3m (10 pés).</li>
      <li><strong>Anatomia Superior:</strong> Garras sobem para 1d8; Mordida sobe para 1d10.</li>
      <li><strong>Vislumbre Estrelar:</strong> Pré-req: Orientação Compartilhada. Guidance em si mesmo dá +2. Ao rolar Iniciativa, pode conjurar Guidance como Ação Livre.</li>
      <li><strong>Autoridade Ressonante:</strong> Pré-req: Ressonância Autoritária. Conjura Command e Fear (1° rank, 1x/dia cada). Sob Ressonância Autoritária, alvos sofrem −1 em salvamentos contra essas magias.</li>
      <li><strong>Peregrino dos Santuários:</strong> Pré-req: Sentido Gélido. Revelação Ancestral recarrega em 1h. Ao visitar Santuário, ganha "Centelha do Início" para usar Revelação mesmo em recarga.</li>
      <li><strong>Revelação Primordial:</strong> Melhoria da Revelação Ancestral. Escolha até 3 vezes (sem repetição): Vigilância (Reação extra para Manto/Intervenção), Fúria (dano elemental escalável +1d4), ou Zelador (Tempestade ignora aliados; cura da Brisa sobe para 1d10).</li>
      <li><strong>Irmão Mais Velho:</strong> +2 circunstancial em Diplomacia para mediação. Reação: ao negociação falhar, impõe "Minuto de Silêncio" (Vontade CD Religião; falha = não pode agir hostilmente por 1 minuto). Missão de Energia ao mediar disputa sem violência.</li>
    </ul>
    <h3>Nível 7</h3>
    <ul>
      <li><strong>Toque Nostálgico:</strong> Ao tocar artefato/item mágico/escritura: teste de Religião para acessar memória. 1 uso por objeto; usos adicionais por semana causam dano de Sanidade. Missão de Energia ao resolver mistério com a visão.</li>
    </ul>
  </>;
}

function Sylvari() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="Indeterminada" pv="8" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Verdejante [Sylvari]</h3>
    <ul>
      <li><strong>Fotossíntese:</strong> Possui traço Planta. Não precisa de comida se passar 4h/dia em luz solar direta (ainda precisa de água).</li>
      <li><strong>Imunidade Vegetal Parcial:</strong> Resistência a Veneno = metade do nível (mín. 1). +1 circunstancial em salvamentos contra Doenças e efeitos de Sono.</li>
      <li><strong>Camuflagem Orgânica:</strong> +1 circunstancial em Furtividade em ambientes naturais.</li>
    </ul>
    <h3>Amigo do Sol [Sylvari, Healing, Light]</h3>
    <ul>
      <li><strong>Absorção Vital:</strong> Ao recuperar PV (magia, poções, medicina), recupera adicionalmente 1/3 do nível (mín. 1).</li>
      <li><strong>Banhado pelo Sol:</strong> Em Luz Solar Direta fora de combate com PV abaixo de 50%: ganha Fast Healing 1 até atingir metade da vida.</li>
    </ul>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <p><em>Nota: Inacessíveis através do talento Adopted Ancestry.</em></p>
    <ul>
      <li><strong>Nascido da Aurora (folhagem verde):</strong> <em>Empatia Natural:</em> 1 min observando/interagindo com criatura inteligente → sintonia até o próximo descanso: +1 circunstancial em Percepção e testes de Carisma (social); +2 circunstancial em ataques/CD de efeitos Linguísticos. <em>Mente Sobre os Dialetos:</em> conhece idioma extra, podendo trocá-lo diariamente via meditação. <em>Palavras Inspiradoras</em> (1 ação): aliado sintonizado ganha PV Temporários = Nível + Carisma por 10 minutos.</li>
      <li><strong>Nascido do Raiar (folhagem dourada):</strong> Deslocamento base +5 pés. <em>Corredor das Matas</em> (1–3 ações, 1x/10min): 1 ação (+5 pés bônus); 2 ações (+5 / +10 pés); 3 ações (+5 / +10 / +15 pés), ignorando terreno difícil não-mágico. Após movimento: Dazzled até fim do próximo turno.</li>
      <li><strong>Nascido do Crepúsculo (folhagem azul):</strong> Treinado em Arcana/Natureza/Ocultismo/Religião (sua escolha). Ganha Recognize Spell gratuitamente. Aprende 2 truques da tradição escolhida (inatos); pode trocar 1 deles diariamente via meditação. <em>Análise Defensiva:</em> ao usar Recognize Spell e ter Sucesso: +1 CA/salvamentos contra a magia (Sucesso Crítico: +2).</li>
      <li><strong>Nascido da Noite (folhagem preta):</strong> Darkvision. <em>Manto das Sombras:</em> pode usar Hide sem cobertura em luz fraca/escuridão. <em>Pulso de Fogo-Fátuo</em> (1 ação): alvo a 30 pés, salvamento de Vontade; Sucesso = Dazzled 1 rodada; Falha = Dazzled 1 minuto; Falha Crítica = Blinded 1 rodada + Dazzled 1 minuto.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Norn() {
  return <>
    <Stats tamanho="1,80–2,60m (Médio)" idade="80–120 anos" pv="12" habilidades="Força, Constituição + 1 livre. Penalidade em Destreza" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Resiliência Glacial [Norn, Cold]</h3>
    <p>Resistência a Dano de Gelo = metade do nível (mín. 1). Trata terreno difícil por gelo/neve/frio congelante como terreno normal.</p>
    <h3>Músculos da Montanha [Norn]</h3>
    <p>+1 circunstancial em Atletismo para Grapple e Shove. Conta como uma categoria de tamanho maior para capacidade de carga (Bulk) e para resistir a Grapple/Shove.</p>

    <h2>🧬 Bênçãos Espirituais</h2>
    <p>Escolha 2 Bênçãos Espirituais no 1° nível. Não pode repetir a mesma Bênção.</p>
    <table>
      <thead><tr><th>Espírito</th><th>Bênção</th><th>Benefício</th></tr></thead>
      <tbody>
        <tr><td>Urso</td><td>Vontade do Titã</td><td>Tamanho Grande (+2 PV de Ancestralidade, total 14 PV).</td></tr>
        <tr><td>Lobo</td><td>Caçador de Matilha</td><td>Treinado em Sobrevivência. Ao flanquear com aliado: você e o aliado +1 status no dano; alvo −1 em manobras contra vocês dois.</td></tr>
        <tr><td>Leopardo da Neve</td><td>Senso de Perigo</td><td>Low-Light Vision. +2 circunstancial em Percepção para Seek e detectar armadilhas. 1x/10min: Reação para +1 status em salvamento de Reflexo (+2 contra armadilhas).</td></tr>
        <tr><td>Corvo</td><td>Espião das Sombras</td><td>Familiar em forma de corvo com 2 habilidades. 1 ação Concentrate: vê pelos olhos do corvo a até 100 pés.</td></tr>
        <tr><td>Boi</td><td>Montaria de Guerra</td><td>Tamanho Grande. +2 Bulk máximo/sobrecarregado. −5 pés deslocamento. Aliado montado não precisa gastar ação para Maintain Grip; você pode usar Reação para que aliado não precise gastar ação para Maintain Balance.</td></tr>
        <tr><td>Coruja</td><td>Visão Amplificada</td><td>Darkvision. 1 ação (1x/10min): quadruplica alcance máximo de visão até fim do próximo turno.</td></tr>
        <tr><td>Baleia</td><td>Navegador Abençoado</td><td>Pode realizar 2 atividades de Exploração diferentes simultaneamente. Treinado em Sobrevivência. +1 status em Sobrevivência e Percepção durante fase de Exploração.</td></tr>
        <tr><td>Centopeia</td><td>Singularidade Macabra</td><td>Traço Void Healing. Resistência a Ácido = metade do nível. 1x/dia, 2 ações: Cone de 30 pés causando 1d10 Vazio/2 níveis (mín. 1d10) com Fortitude Básico.</td></tr>
        <tr><td>Águia</td><td>Mestre dos Céus</td><td>Velocidade de Voo de magias/itens +5 pés. 1x/hora, 1 ação: Fly Speed = velocidade em terra até fim do turno (deve terminar em solo sólido).</td></tr>
        <tr><td>Minotauro</td><td>Fúria Impiedosa</td><td>Com PV abaixo de metade: +1 status no dano desarmado/marcial e +5 pés ao Stride em direção a inimigo. +1 circunstancial em Vontade contra Emoção.</td></tr>
      </tbody>
    </table>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Vigor das Lendas:</strong> +PV máximos igual ao nível atual. A cada nível subido, +1 PV adicional.</li>
      <li><strong>Espólio do Caçador:</strong> Treinado em Sobrevivência ou Artesanato. +1 em Sobrevivência para coletar espólios; +1 em Artesanato para criar itens a partir de partes de criaturas.</li>
      <li><strong>Orador das Eras [Auditório]:</strong> Nas preparações diárias, narra saga de 1 Espírito que possua. Você e até 2 aliados recebem benefício baseado no Espírito narrado (bônus específicos para Urso, Lobo, Corvo, Boi, Coruja, Baleia, Centopeia, Águia e Minotauro).</li>
      <li><strong>Impacto Glacial [Movimento]:</strong> 1x/hora, 2 ações: Stride + Strike. Sucesso: empurra 5 pés. Sucesso Crítico com arma Bludgeoning: empurra 10 pés; colisão com estrutura = dano adicional em 2 dados.</li>
      <li><strong>[LOBO] Honra da Matilha:</strong> Não precisa gastar ação para se preparar para Aid ao flanquear com aliado (gasta Reação normalmente). Sucesso Crítico em Aid: aliado também ganha +1 status no dano por dado da arma.</li>
      <li><strong>[CORUJA] Sentinela de Olhos de Gelo:</strong> +1 circunstancial em Percepção visual para Search/Localizar criaturas escondidas. Atividade <em>Disparo Vigilante</em> [2 ações]: +1 ataque, +2/4/6/8 dano conforme proficiência na arma.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Coração da Saga [Mental]:</strong> +1 status em Vontade contra Medo. Reação (1x/hora): ao ter Sucesso em salvamento de Medo, ganha PV Temporários = 2x o nível por 1 minuto.</li>
      <li><strong>Eco de Shiverpeaks:</strong> Expert em Sobrevivência (ou Natureza). Usa Sobrevivência no lugar de Percepção para detectar ameaças naturais e Seek em ambientes selvagens. +2 circunstancial em Sobrevivência para clima/abrigo. Missão de Energia ao investigar fenômeno natural estranho.</li>
      <li><strong>[LOBO] Uivo da Alcateia [Auditório]:</strong> 1x/hora, 1 ação Auditório: até 2 aliados escolhem entre +10 pés no próximo movimento, +1 em Iniciativa/Salvamento, ou +1d6 precisão no primeiro ataque contra alvo que você flanqueia com eles.</li>
      <li><strong>[CORUJA] Vigília Noturna:</strong> Durante descanso, permanece mentalmente alerta percebendo detalhes sutis, presenças escondidas e comportamentos anômalos.</li>
      <li><strong>Saga do Caçador [Concentração]:</strong> Req: Treinado em Natureza. Expert em Natureza. 1x/hora: ao acertar Strike, realiza Recall Knowledge como Ação Livre. CD −1 nível para Bestas, Plantas, Monstruosidades e criaturas com traço Frio.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Comunhão Espiritual:</strong> 1h de meditação nas preparações diárias: recebe Benefício de Bênção de qualquer Espírito (mesmo sem possuí-la). Apenas 1 bênção extra ativa por vez.</li>
      <li><strong>Couro do Inverno:</strong> Nas preparações diárias: escolhe Bludgeoning, Piercing ou Slashing. Ganha Resistência = metade do nível (mín. 1) a esse tipo até o próximo descanso.</li>
      <li><strong>Frenesi de Shiverpeaks:</strong> Início do turno: entra em Frenesi por até 3 rodadas. Ataques causam +1 dado de Gelo. Termina se não causar dano em um turno. Ao encerrar: Stunned por n° de rodadas do Frenesi (máx. Stunned 3).</li>
      <li><strong>Último Suspiro:</strong> 1x/dia. Gatilho: reduzido a 0 PV por ataque não-crítico. Salvamento de Fortitude (CD = dano sofrido): Sucesso = fica com 1 PV sem Wounded adicional; Sucesso Crítico = também pode fazer Strike corpo a corpo imediato como Reação.</li>
      <li><strong>[LOBO] Rastreador da Matilha:</strong> +2 circunstancial em Sobrevivência para Track e Percepção para Sense Motive contra criaturas rastreadas. Missão de Energia ao localizar criatura rastreada.</li>
      <li><strong>[CORUJA] Asas da Orácula [Metamorfose]:</strong> 1x/dia, 3 ações: asas espectrais por 10 min. Fly Speed = velocidade em terra. +2 circunstancial em Furtividade para se ocultar em Escuridão.</li>
    </ul>
  </>;
}

function Skritt() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="12–30 anos" pv="8" habilidades="Destreza, Constituição + 1 livre. Penalidade em Inteligência" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="9m (30 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Natureza Skritt [Skritt, Emotion]</h3>
    <ul>
      <li><strong>Instinto Covarde:</strong> −1 status em Vontade contra efeitos que causem Frightened.</li>
      <li><strong>Momento de Pânico (Reação):</strong> Gatilho: ganha Frightened. Realiza Stride devendo terminar mais longe da fonte de medo. Se disparar reação inimiga: atacante rola Flat Check CD 5; falha/erro = inimigo Off-Guard até fim do próximo turno.</li>
      <li><strong>Sorrateiro (Reação):</strong> Gatilho: aliado acerta Strike corpo a corpo em criatura flanqueada por você. Alvo sofre +1d4 dano de precisão (2d4 nível 5, 3d4 nível 11, 4d4 nível 17).</li>
      <li><strong>Surto do Rato (Reação, 1x/dia):</strong> Gatilho: você falharia em Salvamento ou seria atingido. Eleva 1 grau de sucesso (Falha Crítica → Falha, Falha → Sucesso, ou Sucesso Crítico inimigo → Sucesso, Sucesso → Falha). Depois: Fleeing por 1 rodada.</li>
    </ul>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Avarento:</strong> <em>Avaliador de Brilhosos:</em> +2 circunstancial em Percepção (Seek) para itens de metal/cristal; Sucesso em Avaliar joias = Sucesso Crítico. <em>Tremedeira na Mão:</em> 1x/10min, saca item como Ação Livre. <em>Apreciação Obsessiva</em> (1 ação [Manipulate]): ganha PV Temporários = nível por 1 min e recarrega Tremedeira. <em>Sujeito Mão Leve</em> (1 ação, requer Flanqueio ou Indetectado): teste de Thievery vs CD Percepção do alvo para roubar item em combate.</li>
      <li><strong>Escavador:</strong> Darkvision. Burrow Speed = metade da velocidade de caminhada (terra solta, não rocha). Ganha Quick Squeeze gratuitamente; move-se por espaços apertados à velocidade normal sem Off-Guard. Cobertura Natural: +1 CA em espaços apertados/submerso na terra.</li>
      <li><strong>Monstruoso:</strong> Tamanho Médio. PV de Ancestralidade sobe para 10. Mordida: 1d6 Perfurante + 1 Ácido, traço Finesse. Couro de Cicatrizes: Resistência 1 a Dano Físico (sobe a cada 5 níveis, máx. 5).</li>
      <li><strong>Rabudo:</strong> Climb Speed 15 pés; não Off-Guard ao escalar. Cauda Preênsil: realiza Interact com a cauda (pode empunhar arma Agile/Finesse; sem escudos ou armas sem esses traços). <em>Rasteira da Cauda</em> (1 ação): manobra Trip usando Acrobacia no lugar de Atletismo.</li>
      <li><strong>Pestilento:</strong> Sempre 1 grau superior em Saves contra Doenças. Resistência a Veneno = metade do nível. Mordida: 1d4 Perfurante (Finesse, Desarmado). <em>Absorver Patógeno</em> (Reação): armazena doença ao ter Sucesso no Save. <em>Liberar Peste</em> (1 ação, 1x/hora): próxima Mordida bem-sucedida transmite doença armazenada ignorando incubação. Peste Skritt: Estágio 1 (1d4 veneno), Estágio 2 (2d4), Estágio 3 (4d4).</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Drakan() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="50–90 anos" pv="10" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Dracônica [Drakan]</h3>
    <p>Definida ao escolher a Herança Dracônica (Elemento e Tipo de Baforada):</p>
    <ul>
      <li><strong>Armas Naturais:</strong> Garras (1d4 Cortante, Agile/Finesse) ou Mordida (1d8 Perfurante). Ambas causam +1 dano do Elemento.</li>
      <li><strong>Escamas Protetoras:</strong> Resistência ao Elemento = metade do nível (mín. 1).</li>
    </ul>
    <h3>Hálito Elemental [Drakan, Arcane, Evocation, Elemental]</h3>
    <ul>
      <li><strong>Arma de Sopro</strong> (2 ações, 1x/hora): Cone de 15 pés ou Linha de 30 pés; 2d6 dano do Elemento (+1d6/2 níveis após o 1°). Save varia por herança contra CD de Classe.</li>
      <li><strong>Inalar Elemento</strong> (Reação, 1x/dia): ao sofrer dano do Elemento, recarrega o uso da Arma de Sopro.</li>
    </ul>
    <h3>Graciosidade do Dragão [Drakan]</h3>
    <p>+2 circunstancial em Percepção, Sobrevivência e Diplomacia contra criaturas com traço Dragão ou com traço do seu Elemento.</p>

    <h2>🧬 Heranças Elementais</h2>
    <p>Selecione um Ancestral Elemental:</p>
    <table>
      <thead><tr><th>Cor</th><th>Ancestral</th><th>Elemento (Save)</th><th>Perícia Extra</th><th>Singularidades</th></tr></thead>
      <tbody>
        <tr>
          <td>Preto</td><td>O Corrosivo</td><td>Ácido (Reflexo)</td><td>Furtividade</td>
          <td>Darkvision. <em>Dissolução Cruel</em> (1 ação, 1x/dia, 9m): 1d6 Ácido Fortitude Básico (+1d6/2 níveis); bônus se alvo com Persistente/Sickened/Enfeebled.</td>
        </tr>
        <tr>
          <td>Azul</td><td>A Tempestade</td><td>Elétrico (Reflexo)</td><td>Enganação</td>
          <td><em>Voz da Miragem:</em> conjura Figment em 1 ação. <em>Campo Estático:</em> Sopro cria Terreno Perigoso (1 elétrico/2 níveis/turno). <em>Sobrecarga</em> (1 ação, 1x/dia): consome campo para 1d6 Elétrico na área.</td>
        </tr>
        <tr>
          <td>Verde</td><td>O Nocivo</td><td>Veneno (Fortitude)</td><td>Sociedade</td>
          <td><em>Pele Tóxica:</em> criaturas adjacentes que te atacam desarmados/Grapple sofrem 1 Veneno (+1/5 níveis). <em>Destilar Peçonha</em> (10 min): 2 frascos/dia, Injury Poison (1d6 veneno + 1 persistente, escala +1d6+1/2 níveis).</td>
        </tr>
        <tr>
          <td>Vermelho</td><td>O Fornalha</td><td>Fogo (Reflexo)</td><td>Intimidação</td>
          <td><em>Tirania Ardente:</em> +1 Intimidação/Demoralize contra alvos que sofreram seu Fogo; ignora penalidade por idioma. <em>Napalm:</em> Sopro adiciona Dano Persistente de Fogo (metade do nível). <em>Incinerar</em> (1 ação, 1x/dia): alvos com Persistente de Fogo sofrem-no imediatamente de novo (dobrado se Frightened).</td>
        </tr>
        <tr>
          <td>Branco</td><td>O Feral</td><td>Frio (Fortitude)</td><td>Sobrevivência</td>
          <td><em>Faro de Sangue:</em> Scent (impreciso, 30 pés). <em>Sopro Congelante:</em> falha = −5 pés deslocamento; falha crítica = Imobilizado. <em>Quebrar o Gelo</em> (1 ação, 1x/dia): requer alvo com deslocamento reduzido/Imobilizado; Strike + 1d6 Frio (+1d6/4 níveis).</td>
        </tr>
        <tr>
          <td>Latão</td><td>O Tectônico</td><td>Sônico (Fortitude)</td><td>Atletismo</td>
          <td><em>Pulso Sísmico</em> (1 ação, 1x/10min): Sentido Sísmico Impreciso de 60 pés por 1 rodada. <em>Onda de Choque:</em> Sopro ignora Dureza; falha empurra 5 pés; falha crítica derruba. <em>Punho Tectônico</em> (1 ação, 1x/dia): 1d6 Concussão + 1d6 Sônico (+1d6 ambos/4 níveis); acerto empurra 1,5m (crítico 3m).</td>
        </tr>
      </tbody>
    </table>

    <h2>🧬 Heranças Primordiais</h2>
    <p>Selecione um Ancestral Primordial (raros; enfrentam racismo considerável):</p>
    <table>
      <thead><tr><th>Primogênito</th><th>Elemento (Save)</th><th>Perícia</th><th>Singularidades</th></tr></thead>
      <tbody>
        <tr>
          <td>Zhaitan</td><td>Vazio (Fortitude)</td><td>Religião</td>
          <td>Traço Void Healing; resistência a Vitalidade em vez de Vazio. <em>Colheita Sinistra</em> (1 ação, 1x/dia): inimigo morto a 18m na última rodada → PV Temporários = Nível×2. <em>Marionete Macabra</em> (1 ação, 1x/rodada): cadáver a 9m realiza Strike (1d6–1d8 Concussão).</td>
        </tr>
        <tr>
          <td>Mordremoth</td><td>Veneno (Fortitude)</td><td>Natureza</td>
          <td><em>Consciência de Colmeia:</em> não pode ser Flanqueado por criaturas ≥2 níveis abaixo. <em>Raízes do Pesadelo:</em> Sopro cria Terreno Difícil + vinhas (1 min). <em>Estrangular</em> (2 ações, 1x/dia): Reflexo ou Imobilizado na área do sopro.</td>
        </tr>
        <tr>
          <td>Primordus</td><td>Fogo (Reflexo)</td><td>Atletismo</td>
          <td><em>Escavador de Magma</em> (1 ação, 1x/dia): Burrow 3m por 10 min, atravessa rocha sólida. <em>Terra Queimada:</em> Sopro = Terreno Perigoso (1 Fogo+1/2 níveis/turno). <em>Erupção</em> (2 ações, 1x/dia, req. Terra Queimada): detona magma causando dano do Sopro (Reflexo Básico) e consome o terreno.</td>
        </tr>
        <tr>
          <td>Jormag</td><td>Mental (Vontade)</td><td>Diplomacia</td>
          <td><em>Sussurros no Vento:</em> truque Message (arcano inato). <em>Foco Psíquico:</em> Sopro em 1 alvo a 30 pés (d10). <em>Palavras do Pavor</em> (1 ação, 1x/dia): via Message, alvo faz Vontade; Falha = Frightened 1; Falha Crítica = Frightened 2.</td>
        </tr>
        <tr>
          <td>Kralkatorrik</td><td>Elétrico (Reflexo)</td><td>Ocultismo</td>
          <td><em>Pele de Cristal:</em> +1 circunstancial na CA contra ataques à distância não-mágicos. <em>Marca do Dragão:</em> Sopro aplica Clumsy 1 em falha. <em>Ressonância</em> (1 ação, 1x/dia): alvos com marca sofrem 1d6 Cortante + 1d6 Elétrico (+1d6 ambos/4 níveis).</td>
        </tr>
        <tr>
          <td>Soo-Won</td><td>Água/Concussão (Reflexo)</td><td>Arcanismo</td>
          <td><em>Corrente de Cura:</em> +1 status em curas que você concede (+1/5 níveis, máx. +5). <em>Sopro da Vida:</em> fere mortos-vivos/Vazio, cura vivos. Sempre com traço Água. <em>Chuva Purificadora</em> (2 ações, 1x/dia): emanação de 30 pés por 1 min (Sustentado); aliados curam 1+½ nível; inimigos ganham Fraqueza a Água = cura.</td>
        </tr>
        <tr>
          <td>Aurene</td><td>Vitalidade (Vontade)</td><td>Diplomacia</td>
          <td><em>Luz Purificadora</em> (1x/dia): reduz 1 condição (Frightened, Sickened, Clumsy, Enfeebled ou Stupefied) em você ou aliado a 30 pés. <em>Luz da Alvorada:</em> Sopro fere mortos-vivos/Vazio, concede PV Temporários a aliados na área. <em>Ascensão</em> (1 ação, 1x/dia): flash de luz; inimigos na área ficam Dazzled por 1 minuto.</td>
        </tr>
      </tbody>
    </table>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Quaggan() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="100–150 anos" pv="6" habilidades="Carisma, Constituição + 1 livre. Penalidade em Força" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Encanto Desarmante [Quaggan, Emotion, Mental]</h3>
    <ul>
      <li>+1 circunstancial em Diplomacia (Make a Request e Make an Impression).</li>
      <li>Falha Crítica em Request/Make Impression = apenas Falha. Criaturas ficam confusas em vez de hostis.</li>
    </ul>
    <h3>A Ruptura [Quaggan, Metamorfose, Primal]</h3>
    <p>Reação. Gatilho: sofre dano com PV abaixo de 50% (req: não Fatigado). Entra em metamorfose violenta:</p>
    <ul>
      <li><strong>Fúria Espiritual:</strong> Usa Carisma no lugar de Força para ataques corpo a corpo, dano e Atletismo.</li>
      <li><strong>Mandíbula do Abismo:</strong> Ataque desarmado de Mordida (1d10 Perfurante, traços Grapple e Desarmado). Progride automaticamente: +1 Striking nível 2, +2 nível 10, +3 nível 16.</li>
      <li><strong>Vigor da Fúria:</strong> PV Temporários = 2× nível + Carisma.</li>
      <li><strong>Instinto Assassino:</strong> Não pode usar ações de Concentração ou Destreza/Carisma (exceto para atacar). Deve se mover em direção ao inimigo mais próximo e atacar. Sem inimigos: ataca criatura mais próxima (incluindo aliados).</li>
      <li><strong>Encerrar:</strong> Ao fim de cada turno, teste de Vontade (CD Padrão do nível; CD Muito Fácil sem inimigos visíveis). Sucesso Crítico: encerra; Sucesso: encerra mas Stunned 2; Falha: continua. Causa dano à Sanidade.</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Tocado pelas Fadas:</strong> <em>Aura da Inocência</em> (Reação): ao ser atacado corpo a corpo, alvo faz Vontade (CD Classe/Magia); Falha Crítica = ataque é perdido. <em>Moon Blessing</em> (2 ações, 2x/dia): concede Ponto Heroico temporário a aliado adjacente (some em 1 minuto).</li>
      <li><strong>Verdejante:</strong> <em>Sementes da Vida:</em> 4 sementes/dia; ao ser consumidas: cura 1d4 PV + Resistência a Veneno 2 por 1 hora (escala +1d4/+1 nos níveis 5, 10, 15, 20). <em>Fotossíntese Explosiva</em> (2 ações, 1x/dia, req. vegetação/sol): cura 2d8 em si mesmo ou metade em emanação de 15 pés (+1d8/2 níveis); área curada fica Terreno Difícil por 1 minuto para não-curados.</li>
      <li><strong>Habitante das Profundezas:</strong> Swim Speed 7,5m; respira ar e água. <em>Vórtex Aquático</em> (2 ações, 1x/10min): Linha de 15 pés, 1d6 Concussão (Reflexo Básico); falha = Prone; +1d6/2 níveis. Submerso ou adjacente a água: linha 30 pés e dado d8.</li>
      <li><strong>Tecelão do Céu:</strong> <em>Salto da Águia</em> (1–3 ações, 1x/10min): Fly Speed = velocidade em terra; cai ao fim do turno se não em solo sólido. <em>Queda Suave</em> (Reação): trata queda como 100 pés menor; se reduzir a 0, aterrissa de pé sem dano.</li>
      <li><strong>Portador da Praga:</strong> PV de Ancestralidade sobe para 8. Resistência a Veneno = metade do nível. <em>Espinhos Vingativos</em> (Reação): atacante desarmado/adjacente faz Fortitude; Falha = 1d6 Veneno (+1d6 nos níveis 5, 9, 13, 17). <em>Disparo de Bile</em> (1 ação): ataque à distância de 30 pés, 1d6 Veneno; requer ação Interact para recarregar.</li>
      <li><strong>Rocha Nativa:</strong> Resistência 1 tipo de dano físico (à escolha na criação). Deslocamento reduzido para 6m (20 pés). <em>Assimilação de Arma:</em> durante preparações diárias, absorve arma de metal/pedra no braço como ataque desarmado (não pode ser desarmado; arma ganha Concussive se Piercing/Slashing, ou dado maior se Bludgeoning).</li>
      <li><strong>Assombrado:</strong> Treinado em Intimidação (+1 circunstancial ao Demoralize). <em>Levitação Espectral:</em> ignora terreno difícil não-mágico e armadilhas de pressão. <em>Desvanecer</em> (Reação, 1x/10min): ao sofrer dano físico, ganha Resistência = nível a dano físico + Invisível até fim do próximo turno ou ação hostil.</li>
      <li><strong>Caminhante das Sombras:</strong> Darkvision. Treinado em Furtividade. Em luz fraca/escuridão: +1 circunstancial em Furtividade; penalidade de Sneak reduzida para 1,5m. <em>Passo Sombrio</em> (1 ação, 1x/10min): em luz fraca/escuridão, teleporta 30 pés para outra área de luz fraca/escuridão visível; fica Concealed até início do próximo turno.</li>
      <li><strong>Caçador da Terra:</strong> Mordida: 1d6 Perfurante, traço Grapple. <em>Armadilha de Areia:</em> criatura Grabbed/Restrained sofre 1d4 Contundente automático/turno (dado escala com Striking). <em>Fúria Aprimorada:</em> durante Ruptura, Mordida sobe para d12 e Armadilha sobe para d8. <em>Controle da Besta:</em> pode encerrar Ruptura voluntariamente ao fim do turno sem teste; Fatigado por apenas 1 hora.</li>
      <li><strong>Vulcânico:</strong> Resistência a Fogo = metade do nível; trata Calor Extremo como um grau menos severo. <em>Absorção Ígnea</em> (Reação): ao sofrer dano de Fogo, reduz em nível; desbloqueia Sopro de Chamas por 1 minuto. <em>Sopro de Chamas</em> (2 ações): Cone de 15 pés, 1d6 Fogo (+1d6/2 níveis). <em>Chama da Cauda:</em> conjura Light (inato primal, sempre na cauda); enquanto ativo, pode usar <em>Golpe de Cauda</em> (1 ação): 1d4 Contundente + 1d8 Fogo (Agile, Finesse; +1d8 nos níveis 5, 9, 13, 17).</li>
      <li><strong>Instável:</strong> Resistência Elétrica = metade do nível. Conjura Electric Arc (inato primal, à vontade). 1x/10min: pode gastar 3 ações para mirar 3 criaturas em vez de 2; recarrega ao sofrer dano elétrico. <em>Descarga de Pânico</em> (Reação): ao sofrer dano mental, Sucesso Crítico inimigo, ou ganhar Frightened/Fleeing: emanação de 10 pés causa 1d8 Elétrico (+1d8 nos níveis 5, 9, 13, 17).</li>
      <li><strong>Paranormal:</strong> Resistência Mental = metade do nível. <em>Rastreador de Emoções</em> (1 ação/dia, concentração 1 min): por 1 hora, sente localização de criaturas com emoções em 30 pés (mesmo através de paredes). <em>Empurrão Telecinético</em> (2 ações, 1x/10min, alvo Médio ou menor a 30 pés): Fortitude; Sucesso = empurra 5 pés; Falha = 10 pés; Falha Crítica = 20 pés. Colisão = 1d8 Concussão (+1d8/2 níveis).</li>
      <li><strong>Amorfo:</strong> Resistência a Ácido = metade do nível. Pode se mover pelo espaço de inimigos como terreno difícil (não pode terminar lá). Pode usar Squeeze para criaturas Tiny sem penalidade. Deslocamento −6m (20 pés). <em>Adaptação Mutagênica</em> (10 min): manifesta 1 de 8 mutações (Pseudópode Extra, Fluxo Rápido, Absorção de Impacto, Titã de Ácido, Carapaça Endurecida, Elasticidade, Aderência ou Massa Regenerativa).</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Murmúrio Desorientador [Auditório, Mental]:</strong> Treinado em Enganação. +1 circunstancial em Create a Diversion. 1x/10min, 1 ação: Create a Diversion especial afetando todos inimigos em emanação de 10 pés.</li>
      <li><strong>Coração e Núcleo [Manipulação]:</strong> 1x/10min, 1 ação: toca aliado com Frightened ou Stupefied e transfere essas condições para si mesmo. Missão de Energia ao aliviar peso emocional de NPC.</li>
      <li><strong>Presença Cativante:</strong> Durante Downtime, pode realizar Make an Impression simultaneamente a outras atividades. Teste de Diplomacia contra CD Vontade de NPC; +1/+2 circunstancial se atividade bem-sucedida. Missão de Energia ao subir nível de amizade com NPC.</li>
      <li><strong>Possessão Protetora:</strong> 1 ação: aliado a 60 pés usa Reação para Stride devendo terminar mais próximo de você.</li>
      <li><strong>[ASSOMBRADO] Vulto das Brumas Melancólicas [Concentração]:</strong> 1x/10min, 1 ação: Stride e ganha Resistência a dano físico (exceto prata) = nível até início do próximo turno. Durante o efeito: move pelo espaço de criaturas e +2 circunstancial na CA contra Reações de movimento.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Pranto Comovente [Auditório, Emoção]:</strong> Reação (1x/dia). Gatilho: aliado a 30 pés falha em Diplomacia. Aliado rerrola com Fortuna. Pode gastar 1 ação + 1 Ponto Heroico para recuperar imediatamente.</li>
      <li><strong>Ponto de Apoio [Visual, Fortuna]:</strong> Reação (1x/10min). Gatilho: aliado a 30 pés falha em Save de Medo/Emoção. Aliado rerrola e usa o segundo resultado; se tiver Sucesso, ganha PV Temporários = 2× nível por 1 minuto.</li>
      <li><strong>Andar e Saltitar [Mental, Movimento]:</strong> 1x/10min, 1 ação: Stride com +10 pés; durante o movimento fica Concealed. Se inimigo errar Reação contra você durante o movimento: fica Stupefied 1 por 1 rodada e sofre 1d6 mental (+1d6/2 níveis acima do 3°).</li>
      <li><strong>[ASSOMBRADO] Rastro da Névoa Melancólica [Concentração]:</strong> Pré-req: Vulto das Brumas. Ao usar Vulto: névoa torna área percorrida Concealed para você e aliados até início do próximo turno. Inimigos na névoa: −1 status em Vontade. 1x/dia: pode usar Vulto uma segunda vez no mesmo encontro sem respeitar a frequência.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Vislumbre do Abismo [Metamorfose, Medo]:</strong> 1x/10min, 2 ações: Strike com Mandíbula do Abismo (sem precisar estar em Ruptura). Acerto = Frightened 1; Sucesso Crítico = Frightened 2. 1 ação Concentração: recupera o uso.</li>
      <li><strong>Rédeas da Besta [Auditório, Medo]:</strong> Testes de Vontade para encerrar Ruptura sempre têm 1 grau superior. Dano de Sanidade da Ruptura reduzido para Leve. Pode entrar em Ruptura como Ação Livre ao início do turno em combate. Pode usar Demoralize durante a Ruptura.</li>
      <li><strong>Rugido Ecoante [Auditório, Medo]:</strong> Pré-req: Murmúrio Desorientador. 1x/dia. Área do Create a Diversion +5 pés. Aprende Bullhorn como inato primal. Durante Ruptura: 1 ação/dia, Uivo Abissal (emanação 15 pés, Vontade): Sucesso = Frightened 1; Falha = Frightened 2; Falha Crítica = Frightened 3 + Fleeing 1 rodada.</li>
      <li><strong>Florescer da Inocência [Auditório, Medo]:</strong> Reação. Gatilho: criatura não-Mindless te ataca corpo a corpo (sem escudo). +2 status na CA contra o ataque gatilho.</li>
      <li><strong>Casco Turbulento [Metamorfose]:</strong> Resistência a Dano Físico e Mental = metade do nível. Durante Ruptura: +1 status na CA e em todos os Salvamentos.</li>
      <li><strong>[ASSOMBRADO] Possessão Protetora:</strong> Ao usar Desvanecer, pode incluir aliado a 15 pés nos benefícios. 1x/dia: pode usar Vulto das Brumas uma segunda vez no mesmo encontro.</li>
    </ul>
  </>;
}

function Hylek() {
  return <>
    <Stats tamanho="1,00–2,00m (Médio)" idade="60–90 anos" pv="8" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Anfíbia</h3>
    <ul>
      <li><strong>Anfíbio:</strong> Swim Speed 7,5m (25 pés); respira ar e água.</li>
      <li><strong>Pele Seca:</strong> Requer umidade a cada 24h. 1 ação Interact com cantil = 4h de hidratação.</li>
      <li><strong>Língua Preênsil:</strong> Ataque Desarmado: 1d4 Concussão, grupo Brawling, traços Agile, Finesse, Reach e Grapple.</li>
    </ul>
    <h3>Metabolismo Alquímico</h3>
    <ul>
      <li><strong>Resistência Tóxica:</strong> Resistência a Veneno = metade do nível (mín. 1).</li>
      <li><strong>Sistema Imune:</strong> +1 circunstancial em salvamentos contra Doenças e efeitos de Veneno.</li>
      <li><strong>Estômago de Ferro:</strong> Pode ingerir comida estragada, carne crua ou água contaminada sem dano.</li>
    </ul>
    <h3>Adaptação Ofensiva — escolha uma:</h3>
    <ul>
      <li><strong>Pele Venenosa (Reação):</strong> Ao ser atingido desarmado ou alvejado por Grapple/Shove: atacante faz Reflexo (CD Classe); Falha = 1d6 Veneno; Falha Crítica = 1d6 + Sickened 1. +1d6/4 níveis. Requer 1 ação para recarregar.</li>
      <li><strong>Disparo Biliar (2 ações):</strong> Cone de 15 pés, 1d8 Veneno (Fortitude Básico) +1d8/2 níveis. Requer 1 ação para recarregar.</li>
      <li><strong>Pulo do Sapo (1 ação, 1x/turno):</strong> Salta até a Velocidade em qualquer direção sem teste de Atletismo. Não provoca Reações ao sair do quadrado inicial; provoca durante trajeto e aterrissagem.</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Itzel Hylek:</strong> Tamanho Pequeno. Climb Speed 7,5m (não Off-Guard ao escalar). <em>Pele Camaleônica:</em> pode usar Hide sem cobertura em ambientes naturais a ≥3m de inimigo. Língua Preênsil causa +1 Veneno adicional (+1/4 níveis).</li>
      <li><strong>Nuhoch Hylek:</strong> Tamanho Grande (veja regras para personagens grandes). PV de Ancestralidade sobe para 10. Língua perde traços Agile/Finesse, mas sobe para 1d8 Concussão baseada em Força.</li>
      <li><strong>Krait Hylek:</strong> Resistência a Dano de Vazio = metade do nível. Sentido vago de Mortos-Vivos em 30 pés. Língua causa Dano de Vazio em vez de Concussão. <em>Drenar Vida:</em> 1x/rodada, ao acertar Língua em criatura viva, ganha PV Temporários = metade do nível (mín. 1) por 1 minuto.</li>
      <li><strong>Quott Hylek:</strong> <em>Carapaça Natural:</em> CA +4, Limite Des +1, Penalidade Perícia −2, Penalidade Velocidade −1,5m, Força 16 para anular penalidades; pode gravar runas. Ganha Shield Block gratuitamente usando o próprio corpo: Dureza 3, PV 12, BT 6 (Dureza +2 e PV +10 no nível 3 e cada 4 níveis seguintes). Rachado = CA cai para +2 e sem Shield Block. Destruído = CA cai a 0 e Drained 1. Recupera durante descanso diário.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Magnus() {
  return <>
    <h2>Em Breve</h2>
    <p>As mecânicas dos Magnus ainda estão sendo desenvolvidas. Consulte o Mestre para mais informações.</p>
  </>;
}

function Oficiais() {
  return <>
    <h2>Ancestralidades Oficiais em Tyria</h2>
    <p>As ancestralidades abaixo seguem as regras padrão do <strong>Pathfinder 2e</strong>, com eventuais adaptações temáticas para Tyria. Consulte o Mestre sobre quais Adopted Heritages e Ancestry Feats estão disponíveis, pois algumas podem estar bloqueadas.</p>
    <ul>
      <li><strong>Anão (Dwarf)</strong> — robusto e resistente, com Darkvision e especialidade em Crafting.</li>
      <li><strong>Gnomo (Gnome)</strong> — pequeno e excêntrico, com conexão à First World e magia inata.</li>
      <li><strong>Goblin</strong> — veloz e impulsivo, com resistência ao fogo e faro apurado.</li>
      <li><strong>Halfling</strong> — sortudo e ágil, com talento social e resistência a medo.</li>
      <li><strong>Orc</strong> — resistente e poderoso, com Darkvision e habilidade de sobrevivência.</li>
      <li><strong>Kitsune</strong> — shapeshifter, com transformação em humano e magia inata de ilusão.</li>
      <li><strong>Kobold</strong> — pequeno e ardiloso, com Darkvision e talentos dracônicos.</li>
      <li><strong>Leshy</strong> — criatura vegetal com Plant Nourishment e conexão com a natureza.</li>
    </ul>
    <p><em>Para detalhes completos de stats, habilidades e talentos, consulte o <a href="https://2e.aonprd.com" target="_blank" rel="noopener noreferrer">Archives of Nethys</a> ou o livro de regras.</em></p>
  </>;
}

const COMPONENTES = {
  humano: Humano,
  asura: Asura,
  charr: Charr,
  animus: Animus,
  kodan: Kodan,
  sylvari: Sylvari,
  norn: Norn,
  skritt: Skritt,
  drakan: Drakan,
  quaggan: Quaggan,
  hylek: Hylek,
  magnus: Magnus,
  oficiais: Oficiais,
};

export default function TalentosDetalhe({ ancestralId, setPaginaAtual }) {
  const nome = NOMES[ancestralId] || ancestralId;
  const Conteudo = COMPONENTES[ancestralId] || (() => <p>Ancestralidade não encontrada.</p>);

  return (
    <main className="pagina-site pagina-conteudo">
      <button onClick={() => setPaginaAtual('talentos-habilidades')} className="botao-voltar">← Voltar aos Talentos</button>
      <h1>{nome}</h1>
      <Conteudo />
    </main>
  );
}

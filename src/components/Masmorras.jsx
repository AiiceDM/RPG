import React from 'react';

export default function Masmorras() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Masmorras</h1>

      <p>Esta mecânica tem o objetivo de tornar a exploração de masmorras mais interessante, criando um senso de urgência e mergulhando os jogadores em um mundo de perigo constante.</p>

      <h2>Os Ciclos</h2>
      <p>O conceito básico é contabilizar o tempo de exploração para introduzir vida e dinamicidade às masmorras. Para facilitar, utilizamos o conceito de Ciclos. Um Ciclo representa aproximadamente <strong>10 minutos</strong> de tempo dentro do jogo. Sempre que o grupo realiza uma tarefa significativa, um Ciclo se passa. Ao fim de cada Ciclo, a masmorra reage à presença dos aventureiros, trazendo consequências ou eventos aleatórios.</p>
      <p>A exploração é composta por diversas atividades, como andar pelos corredores, procurar passagens secretas ou realizar rituais mágicos. Sempre que realizarem uma dessas atividades, eles gastam 1 Ciclo. Durante um Ciclo, cada personagem declara uma atividade, seja individualmente ou em cooperação com o grupo. O narrador resolve as ações normalmente e, em seguida, considera o Ciclo encerrado, dando início ao Turno da Masmorra.</p>

      <h2>Lista de Atividades</h2>

      <h3>Percorrer a Masmorra</h3>
      <p>O <strong>grupo</strong> se desloca em velocidade normal, cobrindo uma distância maior de território durante o Ciclo, mas sem os benefícios da furtividade.</p>

      <h3>Mover-se Silenciosamente</h3>
      <p>O <strong>grupo</strong> avança com cautela, percorrendo apenas metade do deslocamento normal. Permite realizar testes de Furtividade para evitar encontros ou surpreender inimigos. Todo o grupo recebe +1 de bônus circunstancial em Furtividade, mas o contador da Sina avança adicionalmente em 1.</p>

      <h3>Fazer Reconhecimento</h3>
      <p>Um personagem avança à frente do grupo para mapear o terreno e detectar perigos antes que o restante da equipe se aproxime.</p>

      <h3>Montar Guarda</h3>
      <p>O personagem foca exclusivamente em vigiar os arredores. Aumenta o DC para emboscadas em 2 e concede +1 de bônus de circunstância em rolagens de iniciativa para o grupo neste Ciclo.</p>

      <h3>Procurar em uma Área</h3>
      <p>O Ciclo é dedicado a vasculhar minuciosamente uma sala ou região em busca de passagens secretas, armadilhas, fundos falsos em baús ou pistas ocultas.</p>

      <h3>Auxiliar um Companheiro</h3>
      <p>O personagem dedica seu tempo para auxiliar um aliado em sua tarefa <strong>(Aid)</strong>.</p>

      <h3>Conjurar Magia</h3>
      <p>O personagem conjura repetidamente uma magia ao longo do Ciclo (como detectar magia, escudo, etc.).</p>

      <h3>Proteção</h3>
      <p>O personagem passa o Ciclo empunhando suas armas/escudo. Caso o grupo seja surpreendido por um combate, o personagem ficará <strong>Acelerado</strong>, podendo usar a ação adicional apenas para mover-se (Stride).</p>

      <h3>Recolher Recompensas</h3>
      <p>O ato de saquear corpos, extrair componentes de monstros abatidos ou recolher moedas espalhadas pelo cenário normalmente requer um Ciclo.</p>

      <h3>Retomar o Fôlego</h3>
      <p>O personagem usa este período para se recuperar, podendo recuperar pontos de foco ou se curando (Treat Wounds).</p>

      <h3>Deixar o Tempo Passar</h3>
      <p>O personagem opta por não agir, simplesmente aguardando o Ciclo terminar.</p>

      <h3>Interagir com a Masmorra</h3>
      <p>Cobre qualquer ação não listada acima. Exemplos incluem: tentar abrir uma fechadura difícil, remover escombros de uma passagem, decifrar runas antigas em uma parede ou desarmar uma armadilha complexa.</p>

      <h2>O Turno da Masmorra</h2>
      <p>Imediatamente após a resolução das atividades dos jogadores, inicia-se o Turno da Masmorra. Esta é a fase de gestão do Narrador, o momento em que o cenário "respira" e reage à presença dos aventureiros. Esta fase consiste em três passos:</p>
      <ul>
        <li><strong>Marcar o Tempo:</strong> Registrar a passagem de 1 Ciclo.</li>
        <li><strong>Verificar a Sina:</strong> Avançar o contador da Sina e checar sua ativação.</li>
        <li><strong>Rolar Acontecimentos:</strong> Rolar o d12 na Tabela de Acontecimentos e aplicar o resultado.</li>
      </ul>

      <h2>Acontecimentos e a Sina</h2>
      <p>Para que a gestão do tempo durante os Ciclos seja relevante, a masmorra precisa reagir, demonstrando ter vida própria. Para isso, utilizamos duas ferramentas principais: as Tabelas de Acontecimentos e o conceito de Sina.</p>
      <p>As <strong>Tabelas de Acontecimentos</strong> funcionam como os clássicos encontros aleatórios. Utilizamos um d12 ao final de cada Ciclo para determinar o que ocorre. Os resultados podem variar desde momentos de calmaria e vantagens até perigos imediatos.</p>
      <p>A <strong>Sina</strong> representa um evento transformador e inevitável, atrelado à temática da masmorra. Ela funciona como um "relógio" que avança independentemente das ações dos jogadores. Cabe ao narrador definir quantos Ciclos são necessários até que a Sina seja disparada.</p>
      <p>Para extrair o máximo desse sistema, serão preparadas Tabelas e Sinas específicas para cada masmorra, garantindo que cada local tenha uma identidade única e que a passagem do tempo gere uma tensão narrativa evocativa e perigosa.</p>
    </main>
  );
}

import React from 'react';

export default function Exploracao() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Viagem e Exploração</h1>

      <p>Viajar não é apenas deslocar-se de um ponto a outro. A estrada consome tempo, recursos e energia. O clima muda, o terreno impõe dificuldades e a forma como o grupo escolhe avançar influencia diretamente o que acontece durante o percurso. Por isso, toda viagem <strong>significativa</strong> deve considerar <strong>ritmo, tempo, velocidade e a função exercida por cada personagem</strong>.</p>

      <h2>Velocidade de Viagem</h2>
      <p>A <strong>velocidade de viagem</strong> é determinada pelo membro mais lento do grupo, considerando deslocamento base, montarias ou veículos utilizados. Terrenos difíceis, condições climáticas adversas ou carga excessiva podem reduzir essa velocidade a critério do Mestre.</p>

      <table>
        <thead>
          <tr>
            <th>Velocidade de Viagem (Pés)</th>
            <th>Milhas Percorridas por Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10</td><td>1</td></tr>
          <tr><td>15</td><td>1,5</td></tr>
          <tr><td>20</td><td>2</td></tr>
          <tr><td>25</td><td>2,5</td></tr>
          <tr><td>30</td><td>3</td></tr>
          <tr><td>35</td><td>3,5</td></tr>
          <tr><td>40</td><td>4</td></tr>
          <tr><td>50</td><td>5</td></tr>
        </tbody>
      </table>

      <h2>Tempo de Viagem</h2>
      <p>O tempo prolongado na estrada cobra seu preço. Após <strong>6 horas contínuas de viagem</strong>, todos os membros do grupo sofrem <strong>–2 de penalidade de status em testes de perícia</strong>. Se a jornada alcançar <strong>8 horas</strong>, essa penalidade aumenta para <strong>–4</strong>. Caso o grupo viaje por <strong>12 horas ou mais no mesmo dia</strong>, todos sofrem dano na <strong>Saúde</strong> e se tornam <strong>Fatigados</strong> até o final do dia seguinte, podendo viajar apenas em ritmo lento e apenas com a Função de Guia.</p>

      <h2>Ritmo de Viagem</h2>
      <p>O grupo deve declarar o <strong>ritmo de viagem</strong> antes de iniciar o deslocamento:</p>
      <ul>
        <li><strong>Ritmo Lento:</strong> Avanço cuidadoso, maior atenção a tarefas paralelas. Reduz a velocidade pela metade.</li>
        <li><strong>Ritmo Normal:</strong> Passo constante, equilibrando deslocamento e atenção ao ambiente.</li>
        <li><strong>Ritmo Acelerado:</strong> Foco em chegar rápido ao destino, sacrificando concentração e segurança. Dobra a velocidade do grupo.</li>
      </ul>

      <h2>Funções de Viagem</h2>
      <p>Durante a viagem, cada personagem pode assumir <strong>uma</strong> Função de Viagem. A cada <strong>2 horas de viagem (Turno de Viagem)</strong>, o grupo pode remanejar as funções.</p>

      <h3>Guia</h3>
      <p>O <strong>Guia</strong> carrega o mapa, consulta a bússola, observa marcos naturais e decide qual rota o grupo seguirá. É a <strong>única função que pode ser exercida em ritmo acelerado</strong>. O teste pode variar entre <strong>Percepção, Natureza, Sobrevivência ou Sociedade</strong>.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> O grupo segue corretamente e todos recebem +1 em testes de Funções de Viagem neste turno.</li>
        <li><strong>Sucesso:</strong> O grupo procede na direção desejada em velocidade normal.</li>
        <li><strong>Falha:</strong> O grupo anda em círculos; velocidade reduzida à metade neste turno.</li>
        <li><strong>Falha Crítica:</strong> O grupo é deslocado para uma direção aleatória e recebe –1 em testes de Funções de Viagem neste turno.</li>
      </ul>

      <h3>Arquivista</h3>
      <p>O Arquivista dedica a viagem ao estudo de documentos, mapas ou pergaminhos. Sofre –2 de penalidade na iniciativa em encontros. Precisa estar em uma <strong>carroça ou carruagem confortável</strong>. Não pode ser realizado em ritmo acelerado.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> Recebe a informação e pode fazer uma pergunta adicional ao Mestre. Concede +1 no próximo Recall Knowledge do grupo sobre o tema.</li>
        <li><strong>Sucesso:</strong> Recebe a informação e pode fazer uma pergunta ao Mestre.</li>
        <li><strong>Falha:</strong> Falha em extrair informação.</li>
        <li><strong>Falha Crítica:</strong> Interpreta a bibliografia de maneira errônea.</li>
      </ul>

      <h3>Batedor</h3>
      <p>O <strong>Batedor</strong> viaja à frente do grupo para observar o terreno, identificar emboscadas e perceber movimentações suspeitas. Usa <strong>Percepção, Sobrevivência ou Stealth</strong>. Sofre –2 em ritmo normal. Não pode ser realizado em ritmo acelerado.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> Bônus de iniciativa/Stealth aumenta para +2. O Batedor fica Quickened no primeiro turno de combate.</li>
        <li><strong>Sucesso:</strong> O grupo recebe +1 de bônus de circunstância na iniciativa ou em Stealth.</li>
        <li><strong>Falha:</strong> O encontro ocorre normalmente.</li>
        <li><strong>Falha Crítica:</strong> O grupo sofre –1 na iniciativa e o Batedor inicia com Slowed 1.</li>
      </ul>

      <h3>Repetidor</h3>
      <p>O <strong>Repetidor</strong> transforma a viagem em rotina disciplinada. <strong>Não exige teste de perícia.</strong> O personagem declara qual ação simples, postura ou truque está repetindo durante o turno. Não pode ser realizado em ritmo acelerado.</p>

      <h3>Diplomata</h3>
      <p>O <strong>Diplomata</strong> observa sinais de presença civilizada e conduz as primeiras interações com outros viajantes, caravanas ou assentamentos. Usa <strong>Diplomacia</strong>. Não pode ser exercido em ritmo acelerado.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> +2 de circunstância em Make an Impression e em Request durante a interação.</li>
        <li><strong>Sucesso:</strong> +1 de circunstância em Make an Impression durante a interação.</li>
        <li><strong>Falha:</strong> O encontro social é perdido.</li>
      </ul>

      <h3>Cronista</h3>
      <p>O <strong>Cronista</strong> dedica a viagem a observar o mundo e registrar maravilhas — ruínas, templos ocultos, cavernas misteriosas. Usa <strong>Percepção</strong>. Sofre –2 em ritmo normal. Não pode ser realizado em ritmo acelerado.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> O Mestre revela um detalhe marcante. +2 de bônus no próximo Recall Knowledge sobre o local.</li>
        <li><strong>Sucesso:</strong> Identifica o ponto de interesse e recebe +1 no próximo Recall Knowledge.</li>
        <li><strong>Falha:</strong> O ponto de interesse passa despercebido.</li>
      </ul>

      <h3>Cultista</h3>
      <p>O <strong>Cultista</strong> dedica a viagem à execução de um ritual. Requer <strong>carroça ou carruagem confortável</strong>. Sofre –2 em ritmo lento e –4 em ritmo normal. Não pode ser realizado em ritmo acelerado.</p>

      <h3>Forrageador</h3>
      <p>O <strong>Forrageador</strong> busca recursos naturais — ervas medicinais, caça, raízes — e identifica locais adequados para descanso. Usa <strong>Sobrevivência</strong>. Sofre –2 em ritmo normal. Não pode ser realizado em ritmo acelerado.</p>
      <ul>
        <li><strong>Sucesso Crítico:</strong> Encontra os recursos e descobre um item ou pequeno tesouro extra.</li>
        <li><strong>Sucesso:</strong> Encontra os itens naturais disponíveis no local.</li>
        <li><strong>Falha:</strong> Não encontra recursos úteis neste turno.</li>
      </ul>

      <h3>Protetor</h3>
      <p>O <strong>Protetor</strong> assume a linha de frente. <strong>Não exige teste de perícia.</strong> Caso um encontro de combate se inicie, pode reposicionar o grupo em uma área de até 15 pés e deve se posicionar à frente de todos. Assume o impacto de armadilhas e ataques surpresa direcionados a um único membro. Não pode ser realizado em ritmo acelerado.</p>

      <h3>Médico</h3>
      <p>O <strong>Médico</strong> cuida dos ferimentos durante a viagem, podendo realizar a ação <strong>Treat Wounds 2 vezes por turno de viagem</strong>. Requer <strong>carroça ou carruagem adequada</strong>. Sofre –2 em ritmo lento e –4 em ritmo normal. Não pode ser realizado em ritmo acelerado.</p>
    </main>
  );
}

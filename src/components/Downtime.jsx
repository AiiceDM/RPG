import React from 'react';

export default function Downtime() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Downtime</h1>

      <p>Com o arco finalizado e os perigos imediatos superados, chega o momento em que os caminhos dos aventureiros se separam temporariamente para que cada um busque seu próprio fôlego. O período de <strong>Downtime</strong> consiste em uma etapa vital da campanha que ocorre predominantemente por texto, representando os dias ou semanas de calmaria entre as grandes provações. Durante este intervalo, os personagens gozam de total liberdade para explorar, interagir e investigar qualquer assunto de seu interesse pessoal na capital onde estão inseridos.</p>

      <p>Este é o tempo de olhar para dentro e para o futuro. É no Downtime que o personagem pode buscar um emprego para reforçar suas economias, dedicar-se a estudos profundos ou realizar treinamentos rigorosos. O tempo de Downtime será sempre contabilizado em dias, e cada amanhecer permite a escolha de uma atividade principal.</p>

      <p>Além das tarefas rotineiras, o Downtime abre as portas para interações no formato de RPG por texto <strong>opcional</strong> — conversas francas com NPCs influentes, investigações silenciosas, visitas a comércios e bairros da capital. Essas interações permitem que a história de cada herói continue pulsando entre os arcos.</p>

      <h2>Rotinas</h2>
      <p>Cada jogador deve escolher uma das três <strong>Rotinas de Interação</strong> ao início do Downtime:</p>

      <h3>Rotina Passiva</h3>
      <p>Ideal para jogadores com pouco tempo extraclasse ou que preferem focar na progressão numérica. Não há interações narrativas diretas. O jogador define com o Mestre apenas as atividades estruturadas que o personagem realizará em segundo plano.</p>
      <p><em>Exemplo:</em> "Meu personagem passará os 10 dias de Downtime trabalhando como escriba na biblioteca real (Earn Income) e praticando sua caligrafia."</p>

      <h3>Rotina Intermediária</h3>
      <p>Equilibra a progressão passiva com momentos de destaque interpretativo. Além das atividades passivas, o jogador participa de <strong>1 a 4 cenas curtas (20 a 40 min)</strong> conduzidas por voz com o Mestre, focadas em eventos específicos de interesse do personagem ou ganchos da trama.</p>
      <p><em>Exemplo:</em> Uma audiência com um nobre local, uma conversa tensa com um rival em uma taverna ou a entrega de um item importante a um aliado.</p>

      <h3>Rotina Ativa</h3>
      <p>Para jogadores que desejam explorar cada detalhe da capital e influenciar o mundo de forma dinâmica através do RPG por texto. O jogador recebe uma quantidade de <strong>Energia</strong> (variável a cada Downtime) para gastar em ações criativas e imersivas.</p>
      <p>Exemplos de uso da Energia:</p>
      <ul>
        <li><strong>Exploração Urbana:</strong> Visitar um bairro específico ou procurar uma loja temática rara.</li>
        <li><strong>Investigação e Social:</strong> Procurar um NPC para uma conversa profunda, investigar rumores ou passar a noite em uma taverna coletando informações.</li>
        <li><strong>Iniciativa Própria:</strong> Qualquer ação criativa que exija uma resposta narrativa detalhada do Mestre.</li>
      </ul>

      <h2>Estilo de Vida</h2>
      <p>Ao início de cada período de Downtime, cada aventureiro deve escolher seu <strong>Estilo de Vida</strong>. Esta escolha define onde o personagem dorme, o que come e como a sociedade o enxerga. Estilos mais elevados garantem <strong>buffs exclusivos</strong> de Vitalidade, Sanidade ou bônus em interações sociais.</p>
      <p>O custo é calculado multiplicando o <strong>Valor Diário</strong> pelo <strong>Número de Dias</strong> de Downtime:</p>

      <table>
        <thead>
          <tr>
            <th>Estilo de Vida</th>
            <th>Descrição</th>
            <th>Custo Diário</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>E1: Subsistência</strong></td><td>Dormitórios comuns em tavernas barulhentas ou acampamentos improvisados. Refeições básicas e pouca privacidade.</td><td>0.1 gp (1 sp)</td></tr>
          <tr><td><strong>E2: Confortável</strong></td><td>Quartos privativos em estalagens decentes. Refeições quentes e nutritivas. O padrão para um aventureiro respeitado.</td><td>1 gp</td></tr>
          <tr><td><strong>E3: Distinto</strong></td><td>Estadia em bairros nobres ou casas de hóspedes de luxo. Acesso a banhos quentes, vinhos finos e segurança.</td><td>5 gp</td></tr>
          <tr><td><strong>E4: Aristocrático</strong></td><td>Aluguel de pequenas mansões ou suítes reais. Criados à disposição e banquetes privativos.</td><td>25 gp</td></tr>
          <tr><td><strong>E5: Magnífico</strong></td><td>Residências em palácios ou distritos exclusivos da elite. Luxo absoluto que atrai olhares de admiração e inveja.</td><td>150 gp</td></tr>
          <tr><td><strong>E6: Lendário</strong></td><td>Propriedades monumentais ou sustento digno de regentes. O ápice do conforto humano e material.</td><td>600 gp</td></tr>
        </tbody>
      </table>

      <p>Lembre-se que o seu Estilo de Vida influencia diretamente o seu <strong>Renome</strong> e a facilidade com que você acessa certas figuras de poder na capital. Personagens em estilos superiores (E4+) podem receber convites para eventos exclusivos, enquanto aqueles em subsistência podem ter mais facilidade em ouvir boatos das ruas.</p>
    </main>
  );
}

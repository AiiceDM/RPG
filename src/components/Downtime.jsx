import React from 'react';

export default function Downtime() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Downtime</h1>

      <p>Com o arco finalizado e os perigos imediatos superados, os aventureiros se separam temporariamente para buscar seu próprio fôlego. O <strong>Downtime</strong> é o período de calmaria entre as grandes provações — o momento de olhar para dentro, reforçar laços, investigar segredos e cuidar do que ficou em segundo plano durante a urgência do combate.</p>

      <p><strong>Como funciona:</strong></p>
      <ul>
        <li>A duração é definida pelo Mestre conforme o momento da campanha</li>
        <li>O tempo é contado em dias; cada dia permite uma <strong>atividade principal</strong></li>
        <li>O Downtime ocorre predominantemente por texto, com interações individuais entre jogador e Mestre</li>
      </ul>

      <hr />

      <h2>🧭 Rotinas</h2>
      <p>Ao início do Downtime, cada jogador escolhe uma das três <strong>Rotinas de Interação</strong> conforme sua disponibilidade e interesse.</p>

      <h3>Rotina Passiva</h3>
      <p><em>Para jogadores com pouco tempo disponível ou que preferem focar na progressão do personagem.</em></p>
      <p><strong>Dinâmica:</strong> Não há interações narrativas diretas. O jogador define com o Mestre as atividades que o personagem realizará em segundo plano ao longo do período.</p>
      <p><strong>Exemplos:</strong></p>
      <ul>
        <li><em>"Vou passar os 10 dias trabalhando como assistente de um ferreiro no distrito dos artesãos (Earn Income) e à noite pratico meu manejo com a espada curta."</em></li>
        <li><em>"Meu personagem se dedica à pesquisa na biblioteca da guilda de magos, estudando runas antigas."</em></li>
      </ul>

      <hr />

      <h3>Rotina Intermediária</h3>
      <p><em>Para jogadores que querem equilibrar progressão passiva com momentos de destaque interpretativo.</em></p>
      <p><strong>Dinâmica:</strong> Além das atividades passivas, o jogador participa de <strong>1 a 4 cenas curtas (20 a 40 min)</strong> conduzidas por voz com o Mestre. Essas cenas são agendadas e focam em eventos específicos de interesse do personagem ou ganchos da trama.</p>
      <p><strong>Exemplos:</strong></p>
      <ul>
        <li>Uma audiência agendada com um contato da guilda para negociar informações</li>
        <li>Um encontro tenso com um rival numa taverna do porto</li>
        <li>A entrega de um artefato recuperado para o familiar de um NPC importante</li>
      </ul>

      <hr />

      <h3>Rotina Ativa</h3>
      <p><em>Para jogadores que desejam explorar cada detalhe da capital e influenciar o mundo de forma dinâmica pelo RPG por texto.</em></p>
      <p><strong>Dinâmica:</strong> O jogador mantém as atividades passivas e a possibilidade de sessões por voz, e ganha acesso à exploração livre da capital através de pontos de <strong>Energia</strong>. A quantidade de Energia é definida pelo Mestre ao início de cada Downtime. Cada ação de exploração custa <strong>1 ponto de Energia</strong> — seja investigar um rumor, visitar um local ou abordar um NPC.</p>
      <p><strong>Exemplos:</strong></p>
      <ul>
        <li><strong>Exploração:</strong> <em>"Quero visitar o bairro das Lanternas para sentir o clima depois do toque de recolher."</em> — Gasta 1 Energia. O Mestre descreve o ambiente e eventuais eventos.</li>
        <li><strong>Investigação:</strong> <em>"Quero procurar informações sobre o comerciante que desapareceu na semana passada."</em> — Gasta 1 Energia, rola Sociedade ou Furtividade, recebe pistas conforme o resultado.</li>
        <li><strong>Iniciativa Própria:</strong> <em>"Quero abordar o capitão da guarda que vimos no arco anterior e tentar uma conversa informal."</em> — Gasta 1 Energia, o Mestre decide como o NPC reage.</li>
      </ul>

      <hr />

      <h2>🛋️ Estilo de Vida</h2>
      <p>Ao início de cada período de Downtime, cada aventureiro deve escolher seu <strong>Estilo de Vida</strong>. Esta escolha define não apenas onde o personagem dorme e o que ele come, mas também como a sociedade da capital o enxerga. Estilos de vida mais elevados refletem maior conforto e prestígio, garantindo <strong>bônus exclusivos</strong> de acordo com o contexto da campanha.</p>
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
          <tr><td><strong>E1: Subsistência</strong></td><td>Dormitórios comuns em tavernas barulhentas ou acampamentos improvisados. Refeições básicas e pouca privacidade.</td><td><strong>1 sp</strong></td></tr>
          <tr><td><strong>E2: Confortável</strong></td><td>Quartos privativos em estalagens decentes. Refeições quentes e nutritivas. O padrão para um aventureiro respeitado.</td><td><strong>1 gp</strong></td></tr>
          <tr><td><strong>E3: Distinto</strong></td><td>Estadia em bairros nobres ou casas de hóspedes de luxo. Acesso a banhos quentes, vinhos finos e segurança.</td><td><strong>5 gp</strong></td></tr>
          <tr><td><strong>E4: Aristocrático</strong></td><td>Aluguel de pequenas mansões ou suítes reais. Criados à disposição e banquetes privativos.</td><td><strong>25 gp</strong></td></tr>
          <tr><td><strong>E5: Magnífico</strong></td><td>Residências em palácios ou distritos exclusivos da elite. Luxo absoluto que atrai olhares de admiração e inveja.</td><td><strong>150 gp</strong></td></tr>
          <tr><td><strong>E6: Lendário</strong></td><td>Propriedades monumentais ou sustento digno de regentes. O ápice do conforto humano e material.</td><td><strong>600 gp</strong></td></tr>
        </tbody>
      </table>

      <blockquote>
        <p>💡 Lembre-se que o seu Estilo de Vida influencia diretamente o seu <strong>Renome</strong> e a facilidade com que você acessa certas figuras de poder na capital. Personagens em estilos superiores (E4+) podem receber convites para eventos exclusivos, enquanto aqueles em subsistência podem ter mais facilidade em ouvir boatos das ruas.</p>
      </blockquote>
    </main>
  );
}

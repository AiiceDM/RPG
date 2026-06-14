import React from 'react';

export default function Aliados() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>NPC's Aliados</h1>

      <p>NPCs aliados utilizam uma <strong>ficha reduzida</strong>, focada em suporte tático. Eles não funcionam como personagens completos e <strong>não realizam ataques próprios nem forçam testes de resistência</strong>. O objetivo é oferecer apoio estratégico sem aumentar a complexidade do combate.</p>

      <hr />

      <h2>⚙️ Mecânica Geral</h2>
      <ul>
        <li>Um NPC aliado pode ser utilizado <strong>apenas 1 vez por rodada</strong>.</li>
        <li>O jogador deve <strong>declarar no início de seu turno</strong> que usará o NPC — isso <strong>não custa ações</strong> do personagem.</li>
        <li>O NPC possui <strong>3 ações</strong> a distribuir entre as habilidades de sua ficha.</li>
      </ul>

      <hr />

      <h2>🧩 Ações dos NPCs</h2>
      <p>As habilidades na ficha do NPC são marcadas com seu custo de ação:</p>

      <h3>◆ Ação Rápida — 1 ação</h3>
      <p>Habilidades menores e opções de movimento.</p>
      <p>Exemplos:</p>
      <ul>
        <li><strong>Stride</strong> — o NPC se move até sua velocidade</li>
        <li><strong>Step</strong> — o NPC se move 1,5 m sem provocar ataques de oportunidade</li>
        <li>Ajustes posicionais</li>
        <li>Pequenos bônus temporários</li>
        <li>Interações simples</li>
      </ul>

      <h3>◆◆ Ação Comum — 2 ações</h3>
      <p>Habilidade padrão do NPC, descrita em sua ficha.</p>
      <p>Exemplos:</p>
      <ul>
        <li>Conceder +1 ou +2 em ataques</li>
        <li>Aumentar dano</li>
        <li>Conceder deslocamento extra</li>
        <li>Cura leve</li>
        <li>Aplicar condição leve</li>
      </ul>
      <p><em>Algumas Ações Comuns possuem limite de uso por combate. Isso estará indicado na ficha.</em></p>

      <h3>◆◆◆ Ação Complexa — 3 ações</h3>
      <p>Habilidade mais poderosa do NPC.</p>
      <ul>
        <li>Pode ser usada <strong>apenas 1 vez por combate</strong>.</li>
        <li>Ao utilizá-la, o NPC <strong>não realiza nenhuma outra ação</strong> naquele turno.</li>
      </ul>

      <h3>✦ Singularidade</h3>
      <p>Traço especial permanente ou de ativação automática.</p>
      <ul>
        <li><strong>Não consome ações.</strong></li>
        <li>É uma habilidade narrativa ou passiva única do NPC, sempre ativa ou acionada por uma condição específica.</li>
      </ul>

      <hr />

      <h2>🎯 Turno do NPC</h2>
      <p>A cada rodada, o jogador escolhe entre:</p>
      <p>🔹 <strong>1 Ação Rápida + 1 Ação Comum</strong> (3 ações no total)</p>
      <p><strong>OU</strong></p>
      <p>🔹 <strong>1 Ação Complexa</strong> (3 ações no total)</p>
      <p>O NPC nunca excede isso por rodada.</p>

      <hr />

      <h2>❤️ Vida dos NPCs</h2>
      <p>Cada NPC possui uma <strong>Vida simplificada</strong>, variando de 1 a 10. Eles não utilizam HP tradicional.</p>

      <hr />

      <h2>🛡️ Dano Recebido</h2>
      <p>NPCs aliados não sofrem dano direto. No início de cada rodada, o Mestre realiza:</p>
      <ol>
        <li>Uma rolagem de <strong>d20</strong></li>
        <li>Define um <strong>DC</strong></li>
        <li>Determina o tipo de rolagem conforme o grau de exposição do NPC ao perigo:</li>
      </ol>

      <table>
        <thead>
          <tr><th>Classificação</th><th>Efeito</th></tr>
        </thead>
        <tbody>
          <tr><td>🟢 <strong>Seguro</strong></td><td>Considera um grau de sucesso acima</td></tr>
          <tr><td>🟡 <strong>Padrão</strong></td><td>Resultado normal</td></tr>
          <tr><td>🔴 <strong>Perigoso</strong></td><td>Considera um grau de sucesso abaixo</td></tr>
        </tbody>
      </table>

      <hr />

      <h2>📉 Resultado da Rolagem</h2>

      <table>
        <thead>
          <tr><th>Resultado</th><th>Vida Perdida</th></tr>
        </thead>
        <tbody>
          <tr><td>Sucesso</td><td>−1 Vida</td></tr>
          <tr><td>Falha</td><td>−2 Vida</td></tr>
          <tr><td>Falha Crítica</td><td>−3 Vida</td></tr>
        </tbody>
      </table>

      <p>Quando a Vida chega a <strong>0</strong>, o NPC fica inconsciente. Se receber dano enquanto inconsciente, <strong>morre</strong>.</p>

      <hr />

      <h2>🧠 Intenção da Mecânica</h2>
      <p>Essa regra existe para:</p>
      <ul>
        <li>Manter o combate fluido</li>
        <li>Evitar múltiplos turnos extras</li>
        <li>Preservar a matemática do Pathfinder 2e</li>
        <li>Valorizar posicionamento e proteção dos aliados</li>
        <li>Transformar NPCs em recursos estratégicos, não combatentes completos</li>
      </ul>
    </main>
  );
}

import React from 'react';

export default function Aliados() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>NPC's Aliados</h1>

      <p>NPCs aliados utilizam uma <strong>ficha reduzida</strong>, focada em suporte tático. Eles não funcionam como personagens completos e <strong>não realizam ataques próprios nem forçam testes de resistência</strong>. O objetivo é oferecer apoio estratégico sem aumentar a complexidade do combate.</p>

      <h2>Mecânica Geral</h2>
      <ul>
        <li>Um NPC aliado pode ser utilizado <strong>apenas 1 vez por rodada</strong>.</li>
        <li>Um jogador deve <strong>declarar no início de seu turno</strong> que utilizará o NPC (não custa ações).</li>
        <li>Ao usar o NPC, o jogador escolhe quais ações ele realizará naquele turno.</li>
      </ul>
      <p>As habilidades do NPC serão majoritariamente: concessão de bônus de acerto, aumento de dano, aplicação de debuffs, concessão de deslocamento extra, cura ou mitigação. NPCs aliados <strong>não realizam Strikes próprios</strong> nem exigem saves de inimigos.</p>

      <h2>Ações dos NPCs</h2>

      <h3>1 — Ação de Movimento</h3>
      <p>O NPC pode realizar <strong>Stride</strong> ou <strong>Step</strong>.</p>

      <h3>2 — Ação Comum</h3>
      <p>São as habilidades padrão do NPC (descritas em sua ficha). Exemplos:</p>
      <ul>
        <li>Conceder +1 ou +2 em ataques.</li>
        <li>Aumentar dano.</li>
        <li>Conceder deslocamento.</li>
        <li>Cura leve.</li>
        <li>Aplicar condição leve.</li>
      </ul>
      <p>Algumas ações comuns possuem limite de uso por combate.</p>

      <h3>3 — Ação Rápida</h3>
      <p>São habilidades menores, geralmente ajustes posicionais, pequenos bônus temporários ou interações simples. (Se o NPC possuir Ação Rápida, ela estará descrita na ficha.)</p>

      <h3>4 — Ação Complexa</h3>
      <p>Habilidade mais poderosa que uma Ação Comum. Pode ser usada <strong>apenas 1 vez por combate</strong>. Ao escolher utilizá-la, o NPC não pode realizar Ação Comum ou Movimento no mesmo turno.</p>

      <h3>5 — Singularidade</h3>
      <p>Habilidade narrativa ou passiva única do NPC. Não consome ações. É um traço especial permanente ou ativação automática sob certas condições.</p>

      <h2>Usando o NPC no Turno</h2>
      <p>Ao declarar o uso do NPC, o jogador pode escolher:</p>
      <ul>
        <li>1 Ação de Movimento + 1 Ação Comum + 1 Ação Rápida</li>
        <li><strong>OU</strong> 1 Ação Complexa</li>
      </ul>
      <p>O NPC nunca executa mais do que isso por rodada.</p>

      <h2>Vida dos NPCs</h2>
      <p>Cada NPC possui uma <strong>Vida simplificada</strong>, variando de 1 a 10. Eles não utilizam HP tradicionais.</p>

      <h2>Dano Recebido</h2>
      <p>NPCs aliados não sofrem dano direto. Em vez disso, no início da rodada, o Mestre realiza 1 rolagem de d20, define um DC e determina o tipo de rolagem: <strong>Seguro, Padrão ou Perigoso</strong>.</p>

      <h3>Classificações da Rolagem</h3>
      <ul>
        <li><strong>Seguro:</strong> Considera um nível de sucesso acima.</li>
        <li><strong>Padrão:</strong> Resultado normal.</li>
        <li><strong>Perigoso:</strong> Considera um nível de sucesso abaixo.</li>
      </ul>
      <p>O DC e o tipo de rolagem dependem de quão exposto o NPC esteve ao perigo.</p>

      <h3>Resultado</h3>
      <ul>
        <li><strong>Sucesso:</strong> perde 1 Vida.</li>
        <li><strong>Falha:</strong> perde 2 Vida.</li>
        <li><strong>Falha crítica:</strong> perde 3 Vida.</li>
      </ul>
      <p>Quando a Vida chega a 0, o NPC cai inconsciente. Caso receba dano enquanto inconsciente, ele morre.</p>

      <h2>Intenção da Mecânica</h2>
      <p>Essa regra existe para manter o combate fluido, evitar múltiplos turnos extras, preservar a matemática de Pathfinder 2e, valorizar posicionamento e proteção, e transformar NPCs em recursos estratégicos — não em combatentes completos.</p>
    </main>
  );
}

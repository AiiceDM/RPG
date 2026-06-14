import React from 'react';

export default function Experiencia() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Experiência</h1>

      <p>O crescimento de um personagem não é medido apenas pelo sangue em sua lâmina, mas pela sua resiliência mental, sua capacidade de solucionar mistérios e sua fidelidade aos próprios ideais. O sistema de Experiência oficial foi substituído por uma métrica personalizada que valoriza a <strong>proatividade</strong> e a <strong>interpretação</strong>.</p>

      <h2>A Lógica do 70</h2>
      <p>Para avançar para o próximo nível, são necessários exatamente <strong>70 XP</strong>. Diferente do padrão, os Pontos de Experiência por criatura são ignorados. O que importa é o desfecho das situações e a qualidade das ações.</p>

      <h2>Pilares da Evolução</h2>
      <ul>
        <li><strong>Mérito sobre Dados:</strong> Em Puzzles e Interações Sociais, as rolagens de dados não servem como "botão de vitória". Elas calibram o sucesso, mas a solução real deve vir do raciocínio e dos argumentos dos jogadores.</li>
        <li><strong>O Peso das Escolhas:</strong> Interpretar as condições de Insanidade, Saúde e Escuridão, ou tomar decisões que prejudicam o personagem mecanicamente em favor da história, são as formas mais nobres de progredir.</li>
        <li><strong>Presença e Consistência:</strong> A jornada é árdua. Estar presente e atento a cada sessão é a base da sua evolução.</li>
      </ul>

      <h2>Tabela de XP</h2>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Ação / Evento</th>
            <th>Recompensa (XP)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td rowSpan={4}><strong>Combate</strong></td><td>Encontro Mortal</td><td>15</td></tr>
          <tr><td>Encontro Difícil</td><td>8</td></tr>
          <tr><td>Encontro Mediano</td><td>4</td></tr>
          <tr><td>Interpretação/Descrição em Luta</td><td>1 a 2</td></tr>
          <tr><td rowSpan={3}><strong>Investigação</strong></td><td>Solucionar Puzzle Difícil</td><td>15</td></tr>
          <tr><td>Solucionar Puzzle Mediano</td><td>8</td></tr>
          <tr><td>Conectar Informações Coletadas</td><td>4</td></tr>
          <tr><td rowSpan={3}><strong>Interação</strong></td><td>Evitar Combate (Estratégia/Diplomacia)</td><td>Valor do Combate</td></tr>
          <tr><td>Convencimento Complexo</td><td>10</td></tr>
          <tr><td>Convencimento Mediano</td><td>5</td></tr>
          <tr><td rowSpan={4}><strong>Atuação</strong></td><td>Interação Narrativa Interessante</td><td>1 a 4</td></tr>
          <tr><td>Escolha Fiel (Prejudicial ao Player)</td><td>2 a 10</td></tr>
          <tr><td>Escolha Fiel (Arriscada)</td><td>1 a 5</td></tr>
          <tr><td>Interpretação (Insanidade/Escuridão/Condição)</td><td>1 a 4</td></tr>
          <tr><td rowSpan={4}><strong>Downtime</strong></td><td>Proatividade e Iniciativa</td><td>1 a 4</td></tr>
          <tr><td>Atividades de Estudo / Craft / Investigação</td><td>1 a 5</td></tr>
          <tr><td>Exploração de Regiões</td><td>1 a 10</td></tr>
          <tr><td>Interações Sociais ou Lutas em Downtime</td><td>1 a 20</td></tr>
          <tr><td rowSpan={2}><strong>Sessão</strong></td><td>Presença Integral (Padrão por Jogador)</td><td>5 a 10</td></tr>
          <tr><td>Falta Avisada com Antecedência</td><td>Metade do Valor</td></tr>
        </tbody>
      </table>
    </main>
  );
}

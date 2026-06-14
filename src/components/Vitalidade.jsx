import React from 'react';

export default function Vitalidade() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Vitalidade</h1>

      <p>A Vitalidade é um sistema que rastreia o estado físico e mental de longo prazo do seu personagem. Ao contrário dos Pontos de Vida, que se recuperam rapidamente, a Vitalidade representa o desgaste acumulado das suas aventuras.</p>

      <h2>A Escala de Vitalidade</h2>
      <p>A sua Vitalidade é medida em uma escala de 0 a 70 pontos, dividida em 7 zonas. Todos os personagens começam na Zona 4 (Equilíbrio) com 40 pontos.</p>

      <table>
        <thead>
          <tr>
            <th>Pontos</th>
            <th>Zona</th>
            <th>Estado</th>
            <th>Impacto Mecânico (Exemplos)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>61–70</td><td>Z7</td><td><strong>Ápice</strong></td><td>Buffs Épicos (Ações extras, resistências altas).</td></tr>
          <tr><td>51–60</td><td>Z6</td><td><strong>Vigorosa</strong></td><td>Buffs Médios (+1 em Ataques/CA, mais movimento).</td></tr>
          <tr><td>41–50</td><td>Z5</td><td><strong>Estímulo</strong></td><td>Buffs Leves (+1 em Perícias, bônus de reação).</td></tr>
          <tr><td>31–40</td><td>Z4</td><td><strong>Equilíbrio</strong></td><td>Neutro. Sem bônus ou penalidades.</td></tr>
          <tr><td>21–30</td><td>Z3</td><td><strong>Fadiga</strong></td><td>Debuffs Leves (-1 em Perícias, "Manco").</td></tr>
          <tr><td>11–20</td><td>Z2</td><td><strong>Comprometida</strong></td><td>Debuffs Médios (-1 em Ataques/CA, "Trauma").</td></tr>
          <tr><td>0–10</td><td>Z1</td><td><strong>Crítica</strong></td><td>Debuffs Severos (Lento 1, Vulnerabilidades).</td></tr>
        </tbody>
      </table>

      <p><strong>O Definhamento:</strong> Se sua Vitalidade chegar a 0 e você falhar em um novo teste de Vitalidade (Fortitude), o personagem morre por colapso físico.</p>

      <h2>Como Perder Vitalidade (Regressão)</h2>
      <p>Sempre que o personagem sofrer um trauma físico significativo, o Mestre solicitará um Teste de Resistência de Fortitude (CD de Vitalidade).</p>

      <h3>Gatilhos Comuns</h3>
      <ul>
        <li>Sofrer um acerto crítico de uma criatura poderosa.</li>
        <li>Terminar um combate com menos de 25% de HP ou com a condição <em>Ferido</em>.</li>
        <li>Contrair doenças, venenos ou sofrer quedas brutais.</li>
        <li>Exposição prolongada a climas extremos sem proteção.</li>
      </ul>

      <h3>Resultados do Teste</h3>
      <ul>
        <li><strong>Sucesso:</strong> Você resiste ao trauma. Não perde pontos.</li>
        <li><strong>Falha:</strong> 1 a 5 de Vitalidade.</li>
        <li><strong>Falha Crítica:</strong> Dobro da regressão da falha.</li>
      </ul>

      <h2>Como Ganhar Vitalidade (Progressão)</h2>
      <p>Recuperar a saúde plena é um processo lento e exige cuidados. Seguem alguns exemplos:</p>
      <ul>
        <li><strong>Descanso de 8h (Local Seguro e Confortável):</strong> +1 a 2 pontos.</li>
        <li><strong>Cuidados Médicos (Medicina):</strong> Uma vez por dia, um aliado pode tentar um teste de Medicina (CD Alta). Sucesso: +2 a 4 pontos.</li>
        <li><strong>Descanso Prolongado (24h):</strong> Repouso absoluto sem atividades físicas. +3 a 5 pontos.</li>
      </ul>
      <p>A maioria das atividades de progressão de vitalidade não tem efeito se usadas de maneira frequente.</p>

      <h2>A Natureza dos Efeitos</h2>
      <p>Os bônus e penalidades da Vitalidade não são fixos. Eles variam de acordo com o contexto do que causou a mudança.</p>
      <p><em>Exemplo:</em> Se você caiu para a Zona 3 (Fadiga) devido a uma lesão nas pernas, pode receber o debuff Manco (penalidade em Stride). Se caiu devido a um ataque venenoso de uma criatura pestilenta, pode receber o debuff Infectado (fraqueza contra veneno e/ou doenças).</p>

      <p><em>Mantenha seu fluxo constante, ou o sangue parará de correr.</em></p>
    </main>
  );
}

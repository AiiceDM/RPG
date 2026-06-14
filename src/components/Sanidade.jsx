import React from 'react';

export default function Sanidade() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Sanidade</h1>

      <p>A <strong>Sanidade</strong> mede a resiliência psicológica e a clareza mental do seu personagem diante dos horrores de <em>Into the Doom</em>. Ela representa o quão firme está o "fio" que prende sua consciência à realidade.</p>

      <h2>A Escala de Sanidade</h2>
      <p>A sua Sanidade é medida em uma escala de 0 a 70 pontos, dividida em 7 zonas. Todos os personagens começam na Zona 4 (Equilíbrio) com 40 pontos.</p>

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
          <tr><td>61–70</td><td>Z7</td><td><strong>Transcendente</strong></td><td>Buffs Épicos (Imunidade a Medo, Clarividência).</td></tr>
          <tr><td>51–60</td><td>Z6</td><td><strong>Lúcida</strong></td><td>Buffs Médios (+1 em Vontade/Percepção, Foco).</td></tr>
          <tr><td>41–50</td><td>Z5</td><td><strong>Serena</strong></td><td>Buffs Leves (+1 em Recall Knowledge, Calma).</td></tr>
          <tr><td>31–40</td><td>Z4</td><td><strong>Estável</strong></td><td>Neutro. O estado mental comum.</td></tr>
          <tr><td>21–30</td><td>Z3</td><td><strong>Inquieta</strong></td><td>Debuffs Leves (-1 em Vontade, "Distraído", "Paranoia").</td></tr>
          <tr><td>11–20</td><td>Z2</td><td><strong>Fraturada</strong></td><td>Debuffs Médios (-1 em Percepção/CA, "Alucinações").</td></tr>
          <tr><td>0–10</td><td>Z1</td><td><strong>Estilhaçada</strong></td><td>Debuffs Severos (Confuso, Estupefato, Catatonia).</td></tr>
        </tbody>
      </table>

      <p><strong>O Surto:</strong> Se sua Sanidade chegar a 0, o personagem sofre um surto psicótico irreversível ou se torna uma casca vazia (NPC sob controle do Mestre).</p>

      <h2>Como Perder Sanidade (Regressão)</h2>
      <p>Sempre que presenciar algo que desafie a lógica, a moral ou a segurança mental, o Mestre solicitará um Teste de Resistência de Vontade (CD de Sanidade).</p>

      <h3>Gatilhos Comuns</h3>
      <ul>
        <li>Ver um aliado cair a 0 HP ou morrer.</li>
        <li>Encarar criaturas de origem sobrenatural ou cósmica pela primeira vez.</li>
        <li>Falha Crítica em testes de Conhecimento sobre algo proibido/arcano.</li>
        <li>Ser alvo de magias de medo ou manipulação mental severa.</li>
      </ul>

      <h3>Resultados do Teste</h3>
      <ul>
        <li><strong>Sucesso:</strong> Você resiste ao trauma. Não perde pontos.</li>
        <li><strong>Falha:</strong> 1 a 5 de Sanidade.</li>
        <li><strong>Falha Crítica:</strong> Dobro da regressão da falha.</li>
      </ul>

      <h2>Como Ganhar Sanidade (Progressão)</h2>
      <p>Curar a mente é mais sutil do que curar o corpo. Exige segurança, conforto e conexões humanas. Seguem alguns exemplos:</p>
      <ul>
        <li><strong>Descanso de 8h (Local Seguro e Confortável):</strong> +1 a 2 pontos.</li>
        <li><strong>Interação Social Positiva (Diplomacia/Performance):</strong> Uma cena de Roleplay de qualidade ou um momento de "alívio cômico/emocional" pode garantir +1 ou +2 pontos (a critério do Mestre).</li>
        <li><strong>Terapia/Aconselhamento (Religião/Medicina):</strong> Um aliado gasta tempo conversando e acalmando você. Sucesso na perícia: +1 a 2 pontos.</li>
      </ul>
      <p>A maioria das atividades de progressão de sanidade não tem efeito se usadas de maneira frequente.</p>

      <h2>A Natureza dos Efeitos</h2>
      <p>Os bônus e penalidades da Sanidade não são fixos. Eles variam de acordo com o contexto do que causou a mudança.</p>
      <p><em>Exemplo:</em> Se você caiu para a Zona 3 (Inquieta) devido a um susto ou aliados em sofrimento, pode receber o debuff Acuado (penalidade em saves contra medo). Se caiu devido a uma visão traumatizante causada por uma criatura horripilante, pode ficar Paranóico (fraqueza à dano psíquico).</p>

      <p><em>A mente é a maior presa do Mundo.</em></p>
    </main>
  );
}

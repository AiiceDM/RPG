import React from 'react';

export default function Vinculos() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Vínculos</h1>

      <p>Representa a profundidade do relacionamento entre o seu personagem e um NPC (Personagem do Mestre) específico. Diferente do Renome, que é público e geral, o Vínculo é privado, íntimo e construído através de momentos compartilhados, segredos revelados e sacrifícios mútuos.</p>

      <h2>A Escala de Relacionamento</h2>
      <p>O Vínculo utiliza a escala de <strong>-70 a 70</strong>. A maioria dos NPCs começa como <strong>Indiferente (0)</strong>, a menos que o seu <em>backstory</em> dite o contrário.</p>

      <table>
        <thead>
          <tr>
            <th>Pontos</th>
            <th>Título</th>
            <th>Atitude do NPC e Benefícios</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>50 a 70</td><td><strong>Vinculado</strong></td><td>Conexão inquebrável. O NPC daria a vida por você, compartilha segredos fatais e oferece lealdade absoluta.</td></tr>
          <tr><td>30 a 49</td><td><strong>Aliado</strong></td><td>Parceiro de confiança. Oferece ajuda ativa, descontos pesados e coloca a própria reputação em risco por você.</td></tr>
          <tr><td>10 a 29</td><td><strong>Amigo</strong></td><td>Relação amistosa. Oferece hospitalidade, informações úteis e pequenos favores de bom grado.</td></tr>
          <tr><td>-9 a 9</td><td><strong>Indiferente</strong></td><td>Neutro. O NPC te trata com a cortesia (ou falta dela) comum a um estranho.</td></tr>
          <tr><td>-10 a -29</td><td><strong>Indisposto</strong></td><td>Atrito inicial. O NPC evita falar com você, é ríspido e não oferece qualquer ajuda ou informação.</td></tr>
          <tr><td>-30 a -49</td><td><strong>Inimigo</strong></td><td>Hostilidade declarada. O NPC trabalha ativamente para prejudicar seus planos ou sua reputação.</td></tr>
          <tr><td>-50 a -70</td><td><strong>Nemesis</strong></td><td>Obsessão fatal. O NPC dedica seus recursos e vida para ver a sua ruína completa ou sua morte.</td></tr>
        </tbody>
      </table>

      <h2>Construindo e Quebrando Laços</h2>
      <p>Diferente das capitais, os indivíduos são movidos por emoções.</p>
      <ul>
        <li><strong>Atos de Vínculo:</strong> Presentear com algo significativo, ajudar em uma tarefa pessoal do NPC ou salvar alguém que ele ama gera grandes saltos positivos.</li>
        <li><strong>A Traição:</strong> Revelar um segredo confiado por um NPC ou abandoná-lo em um momento de necessidade pode transformar um <strong>Aliado</strong> em um <strong>Nemesis</strong> instantaneamente.</li>
        <li><strong>O Tempo:</strong> Vínculos muito altos ou muito baixos exigem manutenção. Ficar muito tempo sem interagir com um NPC pode fazer o Vínculo tender lentamente de volta para o <strong>Indiferente</strong>.</li>
      </ul>
    </main>
  );
}

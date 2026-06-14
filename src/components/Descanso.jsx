import React from 'react';

export default function Descanso() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Descanso</h1>

      <p>Recuperar as forças exige mais do que apenas fechar os olhos. O ambiente, a nutrição e o estado de espírito determinam se você acordará pronto para a batalha ou mais perto do colapso.</p>

      <h2>Os Pilares do Repouso</h2>
      <p>O resultado de qualquer descanso é determinado por quatro fatores que você deve descrever ao Mestre:</p>
      <ol>
        <li><strong>Ambiente:</strong> O local é seguro? É silencioso? A temperatura é agradável?</li>
        <li><strong>Conforto:</strong> Onde você está dormindo? No chão batido, em um saco de dormir ou em uma cama quente?</li>
        <li><strong>Alimentação:</strong> O que você comeu? Rações secas e água, ou uma refeição quente e nutritiva?</li>
        <li><strong>Entretenimento (Opcional):</strong> Há música? Uma conversa descontraída? Um livro ou um jogo de cartas?</li>
      </ol>

      <h2>1. Descanso Comum (8 Horas)</h2>
      <p>É a pausa padrão entre os dias de aventura. Dependendo da descrição e das condições, o Mestre classificará o descanso em:</p>
      <ul>
        <li><strong>Insuficiente:</strong> O ambiente é hostil ou o desconforto é extremo. O Mestre avisará previamente que não é possível descansar ali.</li>
        <li><strong>Básico:</strong> Condições mínimas aceitáveis. Concede a recuperação de recursos padrão do sistema.</li>
        <li><strong>Revigorante:</strong> Condições excepcionais de conforto e descrição. Além da recuperação padrão, o personagem ganha 1 Ponto Heroico (que expira ao final do próximo descanso se não for usado) e pode recuperar um pouco de Sanidade ou Saúde (à escolha do mestre).</li>
      </ul>

      <h2>2. Dia de Folga (24 Horas)</h2>
      <p>Um período de repouso total e dedicação à recuperação física e mental. Este descanso exige um <strong>Ambiente Adequado</strong> (geralmente uma estalagem, um santuário ou um acampamento muito bem estabelecido).</p>
      <h3>Benefícios do Dia de Folga</h3>
      <ul>
        <li><strong>Recuperação Acelerada:</strong> Recuperação garantida de Sanidade e Saúde com um intervalo de 6 dias.</li>
        <li><strong>Purificação:</strong> Condições que normalmente reduzem em 1 por descanso (como <em>Drained</em>) são <strong>removidas por completo</strong>.</li>
        <li><strong>Pré-requisito Médico:</strong> Necessário para realizar tratamentos médicos complexos, cirurgias ou terapias psicológicas profundas que visam subir zonas de Vitalidade/Sanidade.</li>
        <li><strong>Conforto Absoluto:</strong> Personagens devem estar bem alimentados e em repouso absoluto (sem combates ou viagens).</li>
      </ul>

      <h2>O Ritual do Descanso (Roleplay)</h2>
      <p>Para que o descanso seja concluído, os jogadores devem fazer uma <strong>breve descrição.</strong></p>
      <p><em>Exemplo Simples:</em> "Vou forrar meu saco de dormir perto da fogueira, comer as rações de viagem e polir minha espada em silêncio."</p>
      <p><em>Exemplo Detalhado:</em> "Aproveito que encontramos esse sótão seco para cozinhar um pouco de carne fresca que compramos. Divido o peso das cobertas com o guerreiro e passo uma hora contando histórias do meu vilarejo para distrair o grupo do barulho da chuva lá fora."</p>
      <p>Nota do Mestre: Descrições detalhadas e que envolvam o grupo têm muito mais chance de tornar o descanso Revigorante.</p>

      <h2>Resumo</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo de Descanso</th>
            <th>Tempo</th>
            <th>HP / Condições</th>
            <th>Vitalidade / Sanidade</th>
            <th>Bônus Especial</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Básico</strong></td><td>8h</td><td>Padrão PF2e</td><td>Nenhum</td><td>Nenhum</td></tr>
          <tr><td><strong>Revigorante</strong></td><td>8h</td><td>Padrão PF2e</td><td>+1 a 2 Pontos cada</td><td>+1 Ponto Heroico</td></tr>
          <tr><td><strong>Dia de Folga</strong></td><td>24h</td><td>Remove Drained total</td><td>+3 a 6 Pontos cada</td><td>Permite Terapias Médicas</td></tr>
        </tbody>
      </table>
    </main>
  );
}

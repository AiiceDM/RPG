import React from 'react';

export default function Inspiracao() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Inspiração</h1>

      <p>O sucesso não depende apenas dos dados, mas da vontade, do mérito e da atenção dos deuses. A Inspiração é dividida em três categorias distintas, cada uma com sua fonte e propósito.</p>

      <h2>Ponto Heroico</h2>
      <p><strong>O Efeito:</strong> Você gasta 1 Ponto Heroico para <strong>rolar novamente</strong> um teste de perícia, salvamento ou ataque. Você deve usar o novo resultado.</p>
      <p><strong>O Traço:</strong> Possui o traço <strong>Fortune</strong> (Fortuna), o que significa que você não pode usar mais de um Ponto Heroico na mesma rolagem, nem combiná-lo com outros efeitos de "reroll".</p>
      <h3>Como Adquirir</h3>
      <ul>
        <li>Através de certas habilidades de Ancestralidade.</li>
        <li>Ao realizar um <strong>Descanso Bem Feito</strong> (conforme as regras de Descanso da campanha).</li>
        <li><strong>Estilo de Vida</strong> escolhido durante o Downtime.</li>
      </ul>
      <p>O número máximo de Pontos Heroicos que um personagem pode acumular é 3. Todavia, existem efeitos que aumentam este limite.</p>

      <h2>Inspiração do Mestre</h2>
      <p>Diferente do Ponto Heroico, a Inspiração do Mestre é um recurso técnico e progressivo, recompensando a criatividade e o <em>roleplay</em> em tempo real.</p>
      <p><strong>O Efeito:</strong> Concede um <strong>+1 de bônus circunstância</strong> para uma rolagem de Perícia, Salvamento, Ataque ou Dano.</p>
      <p><strong>Poder Ofensivo:</strong> Se utilizada em uma rolagem de <strong>Dano</strong>, o bônus é dobrado.</p>
      <p><strong>Progressão e Árvores:</strong> Estes pontos estão atrelados a diversas <strong>Árvores de Habilidade</strong> exclusivas. Ao combinar 1 ou mais pontos, você poderá desbloquear usos especiais e manobras únicas conforme evolui.</p>
      <p><strong>Como Adquirir:</strong> Concedido pelo Mestre sempre que um jogador realizar uma ação narrativa interessante, uma solução criativa para um problema ou um momento de interpretação marcante.</p>
      <p><strong>Limitação:</strong> De início, a Inspiração do Mestre pode ser utilizada apenas <strong>uma vez por rolagem</strong>.</p>

      <h2>Intervenção Divina</h2>
      <p>A forma mais rara e poderosa de inspiração. É o momento em que as entidades que regem o mundo voltam seus olhos para os mortais.</p>
      <p><strong>O Efeito:</strong> Possui um <strong>efeito variável</strong> e extremamente poderoso, definido pelo Mestre de acordo com a divindade em questão. Pode salvar um grupo do colapso ou permitir um feito improvável/impossível.</p>
      <p><strong>Como Adquirir:</strong> Um personagem deve realizar uma ação (ou um conjunto delas) que avance diretamente a vontade ou os dogmas de uma Divindade específica.</p>
      <p><strong>O Preço da Fé:</strong> Divindades raramente dão algo de graça. Elas costumam cobrar um preço por suas bênçãos — seja um juramento, uma tarefa futura ou um sacrifício — especialmente se o indivíduo não for um seguidor devoto.</p>
    </main>
  );
}

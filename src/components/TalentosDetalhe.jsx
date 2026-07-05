import React from 'react';

const NOMES = {
  humano: 'Humano',
  asura: 'Asura',
  charr: 'Charr',
  animus: 'Animus',
  kodan: 'Kodan',
  sylvari: 'Sylvari',
  norn: 'Norn',
  skritt: 'Skritt',
  drakan: 'Drakan',
  quaggan: 'Quaggan',
  hylek: 'Hylek',
  magnus: 'Magnus',
  oficiais: 'Oficiais',
};

function Stats({ tamanho, idade, pv, habilidades, idiomas, deslocamento }) {
  return (
    <table className="tabela-stats">
      <tbody>
        <tr><td><strong>Tamanho</strong></td><td>{tamanho}</td><td><strong>Idade</strong></td><td>{idade}</td></tr>
        <tr><td><strong>Pontos de Vida</strong></td><td>{pv}</td><td><strong>Deslocamento</strong></td><td>{deslocamento}</td></tr>
        <tr><td><strong>Habilidades</strong></td><td colSpan={3}>{habilidades}</td></tr>
        <tr><td><strong>Idiomas</strong></td><td colSpan={3}>{idiomas}</td></tr>
      </tbody>
    </table>
  );
}

function Humano() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="50–90 anos" pv="8" habilidades="2 escolhidas livremente" idiomas="Tyrian + metade do valor de Inteligência" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>

    <HabilidadeCard titulo="Improvisação" img="https://i.imgur.com/KYubu3P.png" placeholder="🧑🏻">
      <p><strong>Descrição.</strong> A determinação humana não depende de favores divinos nem de herança arcana. Ela nasce das preparações, da disciplina e da vontade de estar sempre pronto para o inesperado.</p>
      <p><strong>Efeito.</strong> Durante suas preparações diárias, você recebe <strong>1 Ponto Heroico</strong>, que dura até o início das suas próximas preparações diárias. Se não for gasto até lá, é perdido. Ao gastar um Ponto Heroico para rerrolar um teste, adicione <strong>+1 de bônus de circunstância</strong> ao resultado final.</p>
    </HabilidadeCard>

    <HabilidadeCard titulo="Espírito Cooperativo" img="https://i.imgur.com/WNFaIhY.png" placeholder="🧑🏻">
      <p><strong>Descrição.</strong> Poucos povos compreendem o poder da cooperação como os humanos. A capacidade de elevar um aliado no momento certo, com uma palavra, um gesto ou um desvio calculado, é parte do que torna a humanidade tão difícil de derrotar.</p>
      <p><em>Frequência: Uma vez por dia.</em></p>
      <p><strong>Efeito.</strong> Quando você usa a ação <strong>Auxiliar (Aid)</strong> em um teste de perícia ou ataque, você pode realizar a atividade com <strong>1 nível de sucesso superior</strong>. Uma vez por dia, você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade.</p>
    </HabilidadeCard>

    <details className="talentos-ancestralidade">
      <summary>📀 Talentos de Ancestralidade Independentes</summary>
      <div className="talentos-corpo">
        <TalentosNiveis>
          {{
            1: <>
              <TalentoCard
                titulo="Potencial Multifacetado"
                tags="Humano · Versatilidade"
                img="https://i.imgur.com/6YdgdZU.png"
                descricao="Você nunca se contentou em ser bom em uma única coisa. Da forja ao mercado, da estrada à corte, você absorve um pouco de cada ofício que cruza seu caminho, moldando uma competência ampla que poucos conseguem igualar."
                efeito={<p>Você se torna <strong>Trained</strong> em duas perícias à sua escolha. Além disso, você recebe um <strong>General Feat de 1° nível</strong>, desde que atenda aos pré-requisitos.</p>}
              />
              <TalentoCard
                titulo="Potencial Cosmopolita"
                tags="Humano · Linguístico"
                img="https://i.imgur.com/5kD6k7H.png"
                descricao="Sua ambição não se limita à sua terra natal. Você busca aperfeiçoar seu ofício enquanto absorve os costumes e as línguas de todos que encontra pelo caminho, tornando-se tão fluente em seu chamado quanto em conversa."
                efeito={<p>Você aprende <strong>dois idiomas adicionais</strong> à sua escolha. Além disso, você recebe um <strong>Talento de Classe de 1° nível adicional</strong> da sua classe, desde que atenda aos pré-requisitos.</p>}
              />
              <TalentoCard
                titulo="Elo de Confiança"
                tags="Humano · Suporte"
                img="https://i.imgur.com/ojKGCti.png"
                descricao="Você não enxerga seus aliados como peças isoladas, mas como extensões da mesma vontade humana de superar tudo em conjunto. Quando escolhe alguém para proteger, sua atenção se torna total, e nada o distrai desse propósito até que a ajuda seja prestada."
                efeito={<>
                  <p><em>Frequência: Uma vez por cena (combate, exploração, negociação, ou qualquer outra situação que o Mestre considere uma cena).</em></p>
                  <p>No início de uma cena, como uma <strong>ação livre com o traço Concentração</strong>, você escolhe um aliado para prestar atenção. Enquanto estiver focado dessa forma, você não pode usar Auxiliar (Aid) em nenhum outro aliado, e ainda precisa estar em uma posição plausível para ajudar o aliado escolhido. Esse foco permite que você use a reação de Auxiliar nesse aliado mesmo sem ter especificado previamente como estava se preparando para ajudar, e você recebe um <strong>bônus de circunstância de +4</strong> no seu teste de Auxiliar realizado dessa forma. Assim que você usa a reação no aliado escolhido, seja qual for o resultado, a atenção termina.</p>
                </>}
              />
              <TalentoCard
                titulo="Resiliência e União"
                tags="Humano · Mental"
                img="https://i.imgur.com/iQcmOZY.png"
                descricao="Você é o pilar que sustenta a coragem do grupo. Sua mera presença e suas palavras de ordem impedem que o desespero se instale no coração de seus aliados."
                efeito={<>
                  <p>Você recebe um <strong>bônus de status de +1</strong> em testes de resistência contra efeitos de Medo e contra efeitos com o traço Sanidade. Ademais, você ganha a seguinte habilidade:</p>
                  <p><strong>Grito de Solidariedade</strong> (Reação) [Auditório] [Linguístico]<br />
                  <em>Frequência: Uma vez a cada 1 hora.</em><br />
                  <em>Gatilho: Você ou um aliado dentro de uma emanação de 30 pés é alvo de um efeito com o traço Medo ou Sanidade.</em><br />
                  Você solta um grito de encorajamento ou uma ordem direta. Você e todos os aliados na área recebem um <strong>bônus de circunstância de +1</strong> no teste de resistência contra o efeito gatilho.</p>
                </>}
              />
              <TalentoCard
                titulo="Improviso Talentoso"
                tags="Humano · Reação"
                img="https://i.imgur.com/TPZOrSW.png"
                descricao="A versatilidade humana permite que você tente tarefas mesmo sem treinamento formal, confiando em criatividade e experiência de vida."
                efeito={<>
                  <p>(Reação)<br />
                  <em>Frequência: 1 vez por dia. Você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade.</em><br />
                  <em>Gatilho: Você está prestes a realizar um teste com uma perícia (que não seja Lore) na qual não possui treinamento.</em></p>
                  <p>Você trata sua proficiência como <strong>Trained</strong> para esse teste.</p>
                  <p><strong>Nota:</strong> Esta habilidade não pode ser usada em atividades de longo prazo ou de Downtime (como Pesquisa, Artesanato, Ganhar Dinheiro ao longo de vários dias, etc.), já que essas tarefas permitiriam reutilizá-la repetidas vezes sobre o mesmo teste. Ela serve apenas para testes pontuais, de uma única rolagem.</p>
                </>}
              />
              <TalentoCard
                titulo="Vontade Emprestada"
                tags="Humano · Reação"
                img="https://i.imgur.com/Qz4nTtf.png"
                descricao="Sua determinação não se esgota em você mesmo. No instante exato em que um companheiro hesita ou falha, você empresta a ele um pedaço da sua própria vontade, e por um momento a sorte dele se torna a sua."
                efeito={<>
                  <p>(Reação)<br />
                  <em>Gatilho: Um aliado falha em um teste de resistência ou de perícia enquanto você está adjacente a ele, ou um aliado erra um Strike contra um inimigo ao qual você está adjacente.</em></p>
                  <p>Você gasta <strong>1 Ponto Heroico</strong>. O aliado rerrola o teste ou ataque que disparou esta reação e recebe um <strong>bônus de circunstância de +1</strong> ao novo resultado.</p>
                  <p>Uma vez por dia, se o aliado obtiver um acerto crítico no resultado da rerrolagem concedida por este talento, você recupera 1 Ponto Heroico.</p>
                </>}
              />
              <TalentoCard
                titulo="Vanguarda Instintiva"
                tags="Humano · Combate"
                img="https://i.imgur.com/HsAIz86.png"
                descricao="O perigo desperta em você um arranque que poucos conseguem acompanhar. Antes que os outros sequer compreendam o que acontece, você já está em movimento, golpeando, avançando, agindo enquanto o resto ainda hesita."
                efeito={<>
                  <p>Você recebe um <strong>bônus de circunstância de +2</strong> em testes de iniciativa.</p>
                  <p>Além disso, no seu primeiro turno em um combate, você pode gastar <strong>1 Ponto Heroico</strong> para ficar <strong>Quickened</strong>. Você só pode usar a ação adicional desse Quickened para realizar uma ação de Strike, Stride, Step ou Interact.</p>
                </>}
              />
              <TalentoCard
                titulo="Têmpera Inabalável"
                tags="Humano · Vitalidade"
                img="https://i.imgur.com/TWKf0JW.png"
                descricao="Há em você uma teimosia física que beira o sobrenatural. Onde outros desabam, você apenas range os dentes e segue de pé, sustentado por um vigor bruto que se recusa a ceder."
                efeito={<p>Você aumenta seus <strong>Pontos de Vida máximos em 1</strong> para cada nível que possuir. Além disso, você recebe um <strong>bônus de status de +1</strong> em testes de resistência de Fortitude contra efeitos com o traço Doença ou Vitalidade.</p>}
              />
              <TalentoCard
                titulo="Crônica dos Mil Caminhos"
                tags="Humano · Social"
                img="https://i.imgur.com/59NP4FV.png"
                descricao="Cada vila, cada porto, cada cidade murada deixou uma página em sua memória. Você já viu tantos lugares que os reconhece quase de relance: o jeito como as pessoas se cumprimentam, a quem baixam os olhos, qual nome sussurram em prece. Onde os outros veem estranhos, você lê uma comunidade inteira."
                efeito={<>
                  <p><em>Pré-requisito: Treinado em Sociedade.</em></p>
                  <p><em>Frequência: Uma vez por dia, e apenas uma vez por assentamento. No caso de cidades grandes ou capitais, o Mestre pode permitir o uso mais de uma vez, desde que em bairros ou distritos diferentes.</em></p>
                  <p>Ao adentrar um novo assentamento habitado, você pode observá-lo e circular por ele durante <strong>1 hora</strong>. Ao final, realize um teste de <strong>Sociedade</strong>. Este teste é sempre resolvido com um grau de sucesso superior ao obtido.</p>
                  <ul>
                    <li><strong>Sucesso Crítico:</strong> Como o Sucesso, e você ainda pode fazer ao Mestre duas perguntas adicionais sobre a comunidade, que ele responde com aquilo que seu personagem conseguiria razoavelmente inferir após uma hora de observação atenta.</li>
                    <li><strong>Sucesso:</strong> Como a Falha, e você também identifica a divindade mais cultuada, a principal autoridade local, e um Anathema e um Edito da comunidade.</li>
                    <li><strong>Falha:</strong> Você identifica o idioma e a ancestralidade predominantes da comunidade.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Memória Afetiva"
                tags="Humano · Mental"
                img="https://i.imgur.com/TGql2Zg.png"
                descricao="A vida humana é curta, e talvez por isso cada rosto, cada despedida e cada vitória pese tanto. Você carrega suas lembranças mais preciosas como brasas guardadas no peito: elas o aquecem em silêncio durante a jornada, e, quando você mais precisa, pode soprá-las até virarem chama."
                efeito={<>
                  <p>Você designa <strong>3 Memórias Afetivas</strong>, momentos significativos vividos durante a campanha ou que façam parte da sua história pessoal na Lore. A ideia e a narrativa de cada memória cabem a você; o que define sua mecânica é a temática do momento, encaixada em uma das três naturezas abaixo.</p>
                  <p>Durante suas preparações diárias, você ativa uma de suas Memórias Afetivas, ganhando seu efeito passivo até as próximas preparações. A qualquer momento, você pode reviver intensamente essa memória para usar seu efeito ativo; ao fazê-lo, a memória se esvai e você perde o efeito passivo pelo resto do dia.</p>
                  <p>Uma Memória Afetiva ativada não pode ser ativada novamente até que todas as suas três memórias tenham sido usadas. Após um ciclo completo, o Mestre pode pedir que você designe novas memórias para continuar utilizando este talento.</p>
                  <p><strong>Memória de Movimento</strong> (uma fuga, uma perseguição, uma corrida que importou)</p>
                  <ul>
                    <li><strong>Passivo:</strong> Você recebe +5 pés de Velocidade.</li>
                    <li><strong>Ativo:</strong> Com uma ação, você realiza dois Strides e ignora terreno difícil durante esse movimento.</li>
                  </ul>
                  <p><strong>Memória de Conflito</strong> (uma batalha, uma perda, um instante de coragem)</p>
                  <ul>
                    <li><strong>Passivo:</strong> Para cada nível de penalidade de Ataque Múltiplo (MAP) que você tiver acumulado, você recebe +1 em jogadas de ataque e +1 no dano.</li>
                    <li><strong>Ativo:</strong> Após realizar um Strike, você gasta 2 ações para realizar dois ataques adicionais. Ambos usam um MAP de 2, independentemente de quantos ataques você já tenha feito no turno.</li>
                  </ul>
                  <p><strong>Memória de Vínculo</strong> (um laço, um reencontro, alguém que ainda importa)</p>
                  <ul>
                    <li><strong>Passivo:</strong> O bônus de circunstância concedido ao gastar um Ponto Heroico para rerrolar aumenta de +1 para +2.</li>
                    <li><strong>Ativo:</strong> Você imediatamente ganha 1 Ponto Heroico, que dura até as suas próximas preparações diárias.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Fôlego Arcano"
                tags="Humano · Arcano"
                img="https://i.imgur.com/aeYEulO.png"
                descricao="Onde um conjurador comum aceitaria que a fonte secou, você se recusa. Por pura teimosia, você mergulha fundo e arranca da exaustão uma última fagulha de poder, como quem puxa um fôlego que já não deveria ter."
                efeito={<>
                  <p><em>Pré-requisito: Capaz de conjurar magias.</em></p>
                  <p><em>Frequência: Uma vez por dia.</em></p>
                  <p>Gastando <strong>1 ação</strong> e <strong>1 Ponto Heroico</strong>, você recupera um <strong>espaço de magia de 1º nível</strong> que já tenha utilizado, ou, se for um conjurador preparado, recupera uma <strong>magia preparada de 1º nível</strong> que já tenha conjurado neste dia. A magia recuperada é automaticamente <strong>Heightened em 1 nível</strong> (tornando-se efetivamente uma magia de 2º nível), desde que você seja capaz de conjurá-la dessa forma.</p>
                </>}
              />
            </>,
            5: <>
              <TalentoCard
                titulo="Potencial Consolidado"
                tags="Humano · Versatilidade"
                img="https://i.imgur.com/fiJunlP.png"
                descricao="O potencial que um dia foi apenas promessa agora se firmou em maestria. Anos de prática, estrada e convívio consolidaram em você uma competência que poucos alcançam, e uma fluência que atravessa fronteiras."
                efeito={<p>Você recebe um <strong>Talento de Classe de 3° nível adicional</strong> da sua classe, desde que atenda aos pré-requisitos. Além disso, você se torna <strong>Expert</strong> em uma perícia na qual já seja Treinado, e aprende um <strong>idioma adicional</strong> à sua escolha.</p>}
              />
              <TalentoCard
                titulo="Arranque Resiliente"
                tags="Humano · Combate"
                img="https://i.imgur.com/8EqZKMz.png"
                descricao="Você não apenas reage mais rápido que os outros: você entra na luta blindado pela própria prontidão. O mesmo ímpeto que o coloca à frente também o mantém de pé quando os primeiros golpes chegam."
                efeito={<>
                  <p><em>Pré-requisito: Vanguarda Instintiva.</em></p>
                  <p><em>Frequência: Uma vez a cada 1 hora.</em></p>
                  <p>Sempre que você rola iniciativa no início de um combate, você recebe <strong>Pontos de Vida Temporários</strong> iguais ao seu nível. Esses Pontos de Vida Temporários duram até o final da primeira rodada de combate.</p>
                  <p>Se você utilizar o Quickened concedido por Vanguarda Instintiva nesse combate, esses Pontos de Vida Temporários são <strong>dobrados</strong> (igual ao dobro do seu nível) e passam a durar até o final do combate ou até serem consumidos.</p>
                </>}
              />
              <TalentoCard
                titulo="Fonte Inesgotável"
                tags="Humano · Versatilidade"
                img="https://i.imgur.com/EG3AHbW.png"
                descricao="A sorte que outros esperam encontrar, você aprendeu a carregar consigo. Sua reserva de vontade heroica transbordou os limites que prendem os mortais comuns."
                efeito={<p>Ao final de suas preparações diárias, você ganha <strong>1 Ponto Heroico adicional</strong> (além do concedido pela Improvisação). Ademais, o limite máximo de Pontos Heroicos que você pode acumular aumenta de <strong>3 para 4</strong>.</p>}
              />
              <TalentoCard
                titulo="Virada ao Acaso"
                tags="Humano · Reação"
                img="https://i.imgur.com/OO1VORY.png"
                descricao="No instante entre o golpe e o impacto, algo em você torce a realidade a seu favor. A lâmina desliza um triz para o lado, a flecha perde o curso, e o preço disso é o breve desequilíbrio de quem forçou a própria sorte."
                efeito={<>
                  <p>(Reação)<br />
                  <em>Frequência: Uma vez por dia. Você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade.</em><br />
                  <em>Gatilho: Você é alvo de uma jogada de ataque de um inimigo.</em></p>
                  <p>Você força a sorte contra o ataque. O inimigo resolve essa jogada de ataque com um <strong>grau de sucesso inferior</strong> (um acerto crítico vira acerto, um acerto vira erro, e assim por diante).</p>
                  <p>Após usar esta reação, você fica <strong>Desajeitado 1 (Clumsy 1)</strong>. Este Desajeitado dura indefinidamente até que você gaste 1 ação para retomar o equilíbrio e removê-lo. Se, mesmo com o grau reduzido, o ataque ainda acertar você, o preço é maior: você fica <strong>Desajeitado 2 (Clumsy 2)</strong> e precisa gastar 2 ações para retomar o equilíbrio (que podem ser fracionadas). Você não pode usar esta reação novamente enquanto estiver Desajeitado por ela.</p>
                </>}
              />
              <TalentoCard
                titulo="Laços de Passagem"
                tags="Humano · Social"
                img="https://i.imgur.com/VmjTk0l.png"
                descricao="Não basta ler uma comunidade de fora: você sabe entrar nela. Um nome citado no lugar certo, um sotaque reconhecido, um costume respeitado, e portas que permaneceriam fechadas se abrem para você."
                efeito={<>
                  <p><em>Pré-requisito: Crônica dos Mil Caminhos.</em></p>
                  <p>Você se torna <strong>Expert em Sociedade</strong> (ou, se já for Expert, em outra perícia relacionada na qual seja Treinado). Além disso, ao adentrar um novo assentamento habitado, você pode passar 1 hora circulando por ele e realizar um teste de Sociedade, separado do teste de Crônica dos Mil Caminhos. Este teste é sempre resolvido com um grau de sucesso superior ao obtido. A frequência é de uma vez por dia, e apenas uma vez por assentamento (no caso de cidades grandes ou capitais, o Mestre pode permitir o uso mais de uma vez, em bairros ou distritos diferentes).</p>
                  <ul>
                    <li><strong>Sucesso Crítico:</strong> Como o Sucesso, e você possui outro indivíduo com atitude Prestativa (Helpful) no assentamento, possivelmente disposto a ajudar ou fornecer informações.</li>
                    <li><strong>Sucesso:</strong> Como a Falha, e você possui um indivíduo com atitude Amigável (Friendly) no assentamento, possivelmente disposto a negociar ajuda ou informações.</li>
                    <li><strong>Falha:</strong> Você sabe o nome e a temática de uma instituição ou organização deste assentamento.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Deixa e Golpe"
                tags="Humano · Suporte"
                img="https://i.imgur.com/iCWJXEG.png"
                descricao="Prestar atenção em um aliado deixou de ser apenas cuidado: virou oportunidade. Você acompanha cada movimento dele com tamanha sintonia que, no instante em que ele abre uma brecha na defesa inimiga, você já está lá para aproveitá-la."
                efeito={<>
                  <p><em>Pré-requisito: Elo de Confiança.</em></p>
                  <p><em>Frequência: Uma vez por encontro.</em> Com 2 ações, quando sua atenção sobre um aliado termina (por Elo de Confiança), você pode imediatamente reestabelecer a atenção sobre outro aliado.</p>
                  <p>Além disso, enquanto estiver prestando atenção em um aliado (por Elo de Confiança), você tem acesso às duas opções de reação a seguir. Cada uma pode ser usada uma vez por atenção, e usá-las não encerra sua atenção sobre o aliado.</p>
                  <p><strong>Golpe em Uníssono</strong> (Reação)<br />
                  <em>Gatilho: Um aliado em quem você está prestando atenção obtém um acerto crítico em um Strike corpo a corpo.</em><br />
                  Você realiza imediatamente um Strike corpo a corpo contra o mesmo inimigo.</p>
                  <p><strong>Eco Feiticeiro</strong> (Reação)<br />
                  <em>Gatilho: Um aliado adjacente em quem você está prestando atenção, por meio de uma magia, faz com que um inimigo falhe criticamente em um teste de resistência.</em><br />
                  Você imediatamente conjura um truque (cantrip) com tempo de conjuração de até 2 ações contra esse inimigo. Após usar esta reação, você fica <strong>Lento 1 (Slowed 1)</strong> no seu próximo turno.</p>
                </>}
              />
              <TalentoCard
                titulo="Poço Arcano"
                tags="Humano · Arcano"
                img="https://i.imgur.com/9oR4r6C.png"
                descricao="A fonte que você um dia arranhou com esforço revelou-se um poço fundo, e você aprendeu a mergulhar mais longe nele. Cada gole que traz de volta arde com mais força que o anterior."
                efeito={<>
                  <p><em>Pré-requisito: Fôlego Arcano.</em></p>
                  <p><em>Frequência: Uma vez por dia.</em></p>
                  <p>A recuperação de um espaço de magia de 1º nível concedida por Fôlego Arcano não exige mais o gasto de um <strong>Ponto Heroico</strong>.</p>
                  <p>(1 Ação) Você gasta <strong>1 Ponto Heroico</strong>, recuperando um <strong>espaço de magia de 2º nível</strong> que já tenha utilizado (ou, se for um conjurador preparado, uma magia preparada de 2º nível que já tenha conjurado neste dia).</p>
                  <p>Ademais, sempre que utilizar a recuperação tanto do Poço Arcano quanto do Fôlego Arcano, você recebe um <strong>bônus de circunstância de +1</strong> em jogadas de ataque com magia e a CD de suas magias aumenta em 1 até o final do turno.</p>
                </>}
              />
            </>
          }}
        </TalentosNiveis>
      </div>
    </details>

    <h2>🧬 Heranças</h2>
    <div className="heranca-grid">
      <HerancaCard
        identificador="Herança"
        titulo="Habilidoso"
        placeholder="🧑🏻"
        descricao="Sua origem foi marcada por treino constante e aperfeiçoamento técnico. Onde outros contam com talento bruto ou sorte, você confia em prática, método e repetição."
        elemento="Técnico · Geral"
        sing1={<>Torna-se Treinado em uma perícia à escolha; progressão automática: <strong>Expert</strong> nível 3, <strong>Master</strong> nível 7, <strong>Legendary</strong> nível 15.</>}
        sing2={<>Uma vez a cada <strong>10 minutos</strong>, ao usar Ponto Heroico para rerrolar, pode remover o traço <strong>Fortune</strong> do resultado.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Execução Forçada"
              tags="Humano · Habilidoso"
              efeito={<>
                <p><strong>1x por combate.</strong> Ao usar a perícia da herança, aumenta <strong>1 grau de sucesso</strong>.</p>
                <p>Depois: <strong>Clumsy 1</strong> (perícias físicas) ou <strong>Stupefied 1</strong> (mentais) até fim do próximo turno.</p>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Versátil"
        placeholder="🧑🏻"
        descricao="Sua ambição lhe concedeu uma habilidade especial, selecionada no início de sua jornada."
        elemento="Universal · Geral"
        sing1={<>Selecione um <strong>General Feat</strong> para o qual você preenche os pré-requisitos.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Caminhos Entrelaçados"
              tags="Humano · Versátil"
              efeito={<p>Permite selecionar uma <strong>Multiclass Dedication Feat de nível 2</strong>.</p>}
            />
          </>,
          5: <>
            <TalentoCard
              titulo="Disciplina Compartilhada"
              tags="Humano · Versátil · Movimento"
              efeito={<p><strong>Reação:</strong> aliado a 30 pés obtém sucesso crítico → você ganha <strong>+1 de circunstância</strong> no próximo teste da mesma perícia ou ataque (até 1 minuto).</p>}
            />
            <TalentoCard
              titulo="Ambição Desenfreada"
              tags="Humano · Versátil"
              efeito={<p>Ganha <strong>Talento de Classe adicional de 4° nível</strong> ou inferior (própria classe ou de Dedicação).</p>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Criomante"
        placeholder="🧑🏻"
        descricao="O poder do inverno flui em você. Você manipula o frio e o gelo com naturalidade."
        elemento="Frio · Arcano"
        sing1={<>Resistência a Frio = <strong>metade do nível</strong> (mín. 1).</>}
        sing2={<>Aprende o truque <em>Criomancia</em> (Arcana/Primal, 2 ações): cria efeitos de gelo e neve inofensivos.</>}
        sing3={<><strong>+1 de dano por dado</strong> em dano de Frio de magias.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Sopro Invernal"
              tags="Humano · Criomante · Frio"
              efeito={<>
                <p>Aprende <strong>Frostbite</strong> com melhorias:</p>
                <ul>
                  <li>Alcance: <strong>120 pés</strong>.</li>
                  <li>Falha: aplica <strong>fraqueza a Bludgeoning</strong>.</li>
                  <li>Falha crítica: <strong>dobra</strong> a fraqueza.</li>
                </ul>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Piromante"
        placeholder="🧑🏻"
        descricao="Você possui uma afinidade natural com altas temperaturas, manipulando calor e chamas com facilidade."
        elemento="Fogo · Arcano"
        sing1={<>Resistência a Fogo = <strong>metade do nível</strong> (mín. 1).</>}
        sing2={<>Aprende o truque <em>Piromancia</em> (Arcana/Primal, 2 ações): cria chamas inofensivas.</>}
        sing3={<><strong>+1 de dano por dado</strong> em dano de Fogo de magias.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Centelha Indomável"
              tags="Humano · Piromante · Fogo"
              efeito={<>
                <p>Aprende <strong>Ignition</strong> com melhorias:</p>
                <ul>
                  <li>Alcance à distância: <strong>60 pés</strong>.</li>
                  <li>Corpo a corpo: <strong>10 pés</strong>.</li>
                  <li>Dados: <strong>d6</strong> à distância / <strong>d8</strong> corpo a corpo.</li>
                </ul>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Zéfiro"
        placeholder="🧑🏻"
        descricao="Você herdou um preparo físico notório, movendo-se com uma velocidade que poucos conseguem acompanhar."
        elemento="Vento · Físico"
        sing1={<>Velocidade base <strong>+5 pés</strong>.</>}
        sing2={<><strong>Surto de Adrenalina</strong> (1 ação, 1x/10min): move-se duas vezes a velocidade, ignorando terreno difícil não-mágico.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Corrente Favorável"
              tags="Humano · Zéfiro · Movimento"
              efeito={<>
                <p>Ao usar Surto de Adrenalina, <strong>ignora Reações de movimento</strong>.</p>
                <p><strong>+1 de circunstância</strong> em Reflexos até o início do próximo turno.</p>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Tenebris"
        placeholder="🧑🏻"
        img="https://i.pinimg.com/736x/25/f5/79/25f57960fb4d7f09d9b89445c98d9e50.jpg"
        imgPopout="https://i.pinimg.com/736x/b2/c7/61/b2c761e7af8bbca9ef9ed6f7fbacb0d1.jpg"
        imgPosition="center 20%"
        descricao="A escuridão nunca foi um obstáculo para você, mas um lar. Onde outros tateiam às cegas, você se move com a naturalidade de quem pertence ao subsolo e ao vazio entre as luzes."
        elemento="Sombras · Furtividade"
        sing1={<>Treinado em <strong>Furtividade (Stealth)</strong>.</>}
        sing2={<><strong>Adaptação Sombria:</strong> Você ganha Visão na Penumbra (Low-Light Vision) e recebe um bônus de circunstância de +1 em testes de Percepção baseados em visão em ambientes de penumbra ou escuridão.</>}
        sing3={<><strong>Olhos do Abismo (1 Ação)</strong> — <em>Frequência: Uma vez a cada 1 hora.</em><br />Você concentra sua visão e desperta a herança adormecida em seus olhos. Por 1 minuto, desde que não haja luz solar direta nem outra fonte de luz extrema no horizonte, seus olhos distinguem detalhes finos a longas distâncias que seriam um borrão indistinto para a visão comum: os traços de um rosto do outro lado de um vale, a inscrição em um estandarte no alto de uma torre, o movimento de uma criatura tão distante quanto o alcance de uma flecha bem lançada. Durante esse período, você também recebe um <strong>bônus de circunstância de +2</strong> em testes de Percepção baseados em visão, inclusive ao usar a ação Buscar (Seek) ou observar ativamente algo à distância (este bônus substitui o +1 de Adaptação Sombria enquanto durar).</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Presságio das Profundezas"
              tags="Humano · Tenebris"
              img="https://i.imgur.com/T68R1g7.png"
              descricao="O que começou como um vislumbre distante tornou-se um estado de caça. Seus olhos não apenas alcançam a escuridão, eles a dominam, e cada alvo distante é apenas uma presa que ainda não sabe que foi vista."
              efeito={<>
                <p><em>Pré-requisito: Herança Tenebris.</em></p>
                <p>Enquanto Olhos do Abismo estiver ativo e você não estiver sob luz plena direta, você recebe os seguintes benefícios:</p>
                <ul>
                  <li>Você recebe um <strong>bônus de circunstância de +1</strong> em Strikes contra criaturas a 9 metros (30 pés) ou mais de você.</li>
                  <li>Seus Strikes com armas contra criaturas a 9 metros (30 pés) ou mais causam <strong>1 de dano Vazio (Void) adicional</strong>. Este dano aumenta conforme a runa de Impacto (Striking) da arma: +2 com Striking, +3 com Greater Striking, +4 com Major Striking.</li>
                </ul>
              </>}
            />
            <TalentoCard
              titulo="Pupilas do Vazio"
              tags="Humano · Tenebris"
              img="https://i.imgur.com/ma8CeqM.png"
              descricao="Uma vida nas trevas ensinou seus olhos a se protegerem. A luz súbita que cega os outros é, para você, apenas mais um clarão que você aprendeu a atravessar."
              efeito={<>
                <p>Você ganha <strong>Visão no Escuro (Darkvision)</strong>. Ademais, você recebe um <strong>bônus de circunstância de +1</strong> em testes de resistência contra efeitos visuais.</p>
                <p>Uma vez por dia (você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade), ao realizar um teste de resistência contra um efeito visual que possa deixá-lo com a condição Cego (Blinded) ou Ofuscado (Dazzled), você realiza esse teste com um <strong>grau de sucesso superior</strong>.</p>
              </>}
            />
            <TalentoCard
              titulo="Manto de Sombras"
              tags="Humano · Tenebris"
              img="https://i.imgur.com/1xF3nRR.png"
              descricao="Você não se esconde na escuridão. Você veste a escuridão. Onde há ausência de luz, há um lugar para você desaparecer, e reaparecer só quando for tarde demais para o inimigo."
              efeito={<>
                <p>Enquanto estiver em uma área de penumbra ou escuridão, você pode usar a ação <strong>Esconder-se (Hide)</strong> mesmo sem cobertura ou ocultação, desde que esteja a pelo menos 3 metros (10 pés) de qualquer fonte de luz plena.</p>
                <p>Ademais, uma vez por rodada, quando você realiza um Strike com uma arma contra uma criatura a 9 metros (30 pés) ou mais da qual está Escondido (Hidden) ou Indetectável (Undetected), você não revela sua posição em uma falha (você ainda a revela normalmente em um acerto).</p>
              </>}
            />
          </>,
          5: <>
            <TalentoCard
              titulo="Passo Umbral"
              tags="Humano · Tenebris"
              img="https://i.imgur.com/HbSZ1kt.png"
              descricao="A escuridão não é um lugar. É um único lugar, dobrado sobre si mesmo incontáveis vezes. Você aprendeu a atravessar a dobra."
              efeito={<>
                <p><em>Pré-requisito: Pupilas do Vazio.</em></p>
                <p>(1 Ação) [Teleportation]<br />
                <em>Frequência: Uma vez por dia. Você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade (sem ação necessária).</em></p>
                <p>Você deve estar em uma área de penumbra ou escuridão. Você desaparece e reaparece instantaneamente em outra área de penumbra ou escuridão à sua escolha, dentro de 36 metros (120 pés) e para a qual você tenha linha de visão. Este movimento não provoca reações.</p>
              </>}
            />
            <TalentoCard
              titulo="Refúgio da Meia-Noite"
              tags="Humano · Tenebris"
              img="https://i.imgur.com/7Osh7tj.png"
              descricao="Há um ponto além da furtividade em que você deixa de se esconder e simplesmente deixa de existir para os olhos alheios. A noite se fecha sobre você como um manto, e enquanto ela durar, o mundo esquece que você está lá."
              efeito={<>
                <p>(1 Ação)<br />
                <em>Requisito: Você está Indetectável (Undetected) por todas as criaturas e em uma área de penumbra ou escuridão.</em></p>
                <p>Você se torna <strong>Invisível</strong> por até 1 hora. Esta invisibilidade termina prematuramente se você entrar em uma área de luz plena ou for exposto a ela, ou se você realizar uma ação hostil.</p>
                <p>Enquanto estiver invisível dessa forma, você tem acesso a duas ações especiais:</p>
                <ul>
                  <li><strong>Deslizar nas Sombras (2 Ações) [Movimento]:</strong> você se teletransporta através de um trecho contínuo de penumbra ou escuridão que possa ver, por uma distância de até sua Velocidade de caminhada.</li>
                  <li><strong>Sufocar a Chama (2 Ações):</strong> você apaga uma única fonte de luz simples e não mágica que não esteja sendo carregada por uma criatura, como uma tocha em um suporte, uma vela ou uma lamparina, dentro de 9 metros (30 pés).</li>
                </ul>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Intelectual"
        placeholder="🧑🏻"
        descricao="Você herdou um dom mental admirável, acumulando idiomas e conhecimento com facilidade incomum."
        elemento="Arcano · Mental"
        sing1={<>Ganha os talentos <strong>Multilingual</strong> e <strong>Additional Lore</strong>.</>}
        sing2={<><strong>+1 de circunstância</strong> em Recall Knowledge para idiomas conhecidos.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Argumentação Erudita"
              tags="Humano · Intelectual"
              efeito={<p><strong>1x/dia:</strong> usa Arcana, Nature, Occultism ou Religion no lugar de Diplomacy em <strong>Request</strong> ou <strong>Make an Impression</strong>.</p>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Luminar"
        placeholder="🧑🏻"
        img="https://i.pinimg.com/736x/bd/6c/bc/bd6cbc86fb5310c3d60ec68b62b7d2d9.jpg"
        imgPopout="https://i.pinimg.com/736x/8b/bd/9b/8bbd9bdd7b1ddff61f4f30c442fc908b.jpg"
        imgPosition="center 20%"
        descricao="Uma centelha de graça celestial arde em sua alma, manifestando-se como um halo de luz que paira sobre sua cabeça. Onde você caminha, o sofrimento encontra alívio e os aliados encontram coragem."
        elemento="Luz · Divino"
        sing1={<>Treinado em <strong>Medicina</strong>.</>}
        sing2={<><strong>Luz Inata:</strong> Um halo angelical paira sobre sua cabeça, queimando com luz plena em uma emanação de 10 pés ao seu redor. Gastando 1 ação, você pode acender ou apagar esse halo conforme sua vontade. O halo se apaga automaticamente caso você fique inconsciente.</>}
        sing3={<><strong>Graça Celestial:</strong> Você recebe as duas habilidades a seguir.<br /><br /><strong>Benção Radiante (1 Ação)</strong> — <em>Frequência: Uma vez a cada 10 minutos. Requisito: Seu halo de Luz Inata está ativo.</em><br />Você emana energia sagrada na área iluminada pelo seu halo (uma emanação de 10 pés centrada em você). Até o final do seu próximo turno, você e seus aliados na área recebem <strong>+1 de bônus de status</strong> em jogadas de ataque e testes de resistência.<br /><br /><strong>Sentir Sofrimento (1 Ação)</strong> — <em>Frequência: Uma vez a cada 10 minutos.</em><br />Você estende sua percepção espiritual em uma emanação de 60 pés e identifica a criatura viva mais ferida dentro da área (aquela com menor proporção de Pontos de Vida restantes). Você apenas percebe qual criatura é, não seus valores exatos de vida.</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Salvação Pelas Mãos"
              tags="Humano · Luminar"
              img="https://i.imgur.com/wZYZ00m.png"
              descricao="A mesma luz que paira sobre você pode se concentrar em suas mãos. Onde você toca, a dor recua e a coragem se firma, ainda que por um breve instante."
              efeito={<>
                <p><em>Frequência: Uma vez a cada 1 hora. Você pode gastar 1 Ponto Heroico para recuperar o uso desta habilidade (sem ação necessária).</em></p>
                <p>(1 Ação) Você toca uma criatura adjacente (ou a si mesmo) e canaliza sua luz interior. O alvo recupera <strong>1d8 Pontos de Vida</strong> e recebe um <strong>bônus de status de +1 na CA</strong> até o início do seu próximo turno. A cura aumenta em 1d8 para cada 2 níveis que você tiver acima do 1°.</p>
              </>}
            />
            <TalentoCard
              titulo="Halo Restaurador"
              tags="Humano · Luminar · Luz"
              img="https://i.imgur.com/nXusSB5.png"
              descricao="Seu halo brilha com intensidade reconfortante, e sua presença traz alívio imediato aos que sofrem."
              efeito={<>
                <p>O raio do seu halo de Luz Inata (e, consequentemente, da emanação da Bênção Radiante) aumenta de 10 para <strong>20 pés</strong>. Além disso, quando você utiliza Bênção Radiante, todos os aliados dentro da emanação recuperam <strong>1d6 Pontos de Vida</strong>. Uma criatura só pode se beneficiar dessa cura uma vez por hora.</p>
                <p>Ademais, se você tiver utilizado Sentir Sofrimento desde o seu último turno e a criatura identificada estiver dentro da área de sua Bênção Radiante, ela recupera o <strong>dobro da cura</strong>.</p>
                <p>A cura aumenta em 1d6 para cada 4 níveis que você tiver acima do 1°.</p>
              </>}
            />
          </>,
          5: <>
            <TalentoCard
              titulo="Ímpeto Seráfico"
              tags="Humano · Luminar · Movimento"
              img="https://i.imgur.com/GcNpxxi.png"
              descricao="Por um breve instante, a graça celestial manifesta-se fisicamente em você. Asas de pura luz se abrem às suas costas, permitindo um voo impossível aos mortais comuns."
              efeito={<>
                <p>Você ganha os dois modos de voo a seguir.</p>
                <p><strong>Voo Radiante (1 Ação) [Flourish]:</strong> Você manifesta asas de luz e realiza um Stride com velocidade de voo igual à sua Velocidade de caminhada. Como esta ação possui o traço Flourish, você só pode usá-la uma vez por turno. Se você terminar esse movimento no ar sem suporte, você cai normalmente.</p>
                <p><strong>Investida Celestial (2 Ações)</strong> — <em>Frequência: Uma vez por dia.</em><br />
                Suas asas irrompem em plena glória e você cruza o campo como um meteoro sagrado. Você voa por uma distância de até 3 vezes a sua Velocidade, podendo mudar de direção ao final de cada trecho igual à sua Velocidade. Você pode atravessar o espaço de outras criaturas durante esse movimento. Este movimento não provoca reações. Cada criatura cujo espaço você atravessa é afetada uma única vez por uso:</p>
                <ul>
                  <li>Aliados recuperam <strong>2d6 Pontos de Vida</strong> (+1d6 a cada 2 níveis acima do 5°).</li>
                  <li>Inimigos realizam um <strong>teste de resistência de Fortitude Básico</strong> contra sua CD de Classe, sofrendo o <strong>dobro da cura</strong> em dano de vitalidade ou espiritual (sua escolha ao utilizar esta habilidade).</li>
                </ul>
                <p>Se você terminar esse movimento no ar sem suporte, você cai normalmente. Após usar esta habilidade, você fica <strong>Lento 1 (Slowed 1)</strong> no início do seu próximo turno.</p>
              </>}
            />
            <TalentoCard
              titulo="Clarão do Julgamento"
              tags="Humano · Luminar · Luz"
              img="https://i.imgur.com/XsTW22e.png"
              descricao="O halo sobre sua cabeça irrompe em um julgamento radiante: quatro lanças de luz que amparam o inocente e punem os cruéis que o cercam."
              efeito={<>
                <p>(3 Ações) <em>Frequência: Uma vez por dia.</em></p>
                <p>Você imediatamente ativa sua habilidade Sentir Sofrimento sem gastar o uso dela, identificando o aliado mais ferido e, a partir dele, os alvos abaixo. Em seguida, você manifesta quatro lanças de luz sagrada:</p>
                <ul>
                  <li><strong>Primeira lança (cura):</strong> atinge o aliado mais ferido dentro da área, curando-o em 2d6 Pontos de Vida (metade do dano das lanças ofensivas).</li>
                  <li><strong>Segunda, terceira e quarta lanças (ataque):</strong> cada uma atinge um dos três inimigos mais próximos do aliado curado (três inimigos diferentes). Faça uma jogada de ataque com o seu bônus de ataque de Strike normal contra cada um; essas jogadas não sofrem nem aplicam penalidade de ataque múltiplo (MAP). Em um acerto, o inimigo sofre 2d6 de dano de fogo mais 2d6 de dano de vitalidade ou espiritual (sua escolha ao utilizar esta habilidade). Em um acerto crítico, dobre o dano.</li>
                </ul>
                <p>Todos os valores de dano e de cura aumentam em 1d6 (dano de cada tipo) e 1d6 (cura) para cada 2 níveis que você possuir acima do 5°.</p>
                <p>O esforço de canalizar tamanho poder sagrado cobra seu preço: no início do seu próximo turno, você fica <strong>Lento 1 (Slowed 1)</strong>, perdendo 1 ação naquele turno.</p>
              </>}
            />
            <TalentoCard
              titulo="Auréola Protetora"
              tags="Humano · Luminar · Luz"
              img="https://i.imgur.com/0b8ISm9.png"
              descricao="Sua centelha celestial não apenas restaura, ela protege. A mesma luz que cura os aliados permanece sobre eles como uma barreira, amortecendo os golpes que ainda estão por vir."
              efeito={<>
                <p><em>Pré-requisito: Halo Restaurador.</em></p>
                <p>O raio do seu halo de Luz Inata (e, consequentemente, da emanação da Bênção Radiante) aumenta de 20 para <strong>30 pés</strong>. Além disso, a cura concedida pelo Halo Restaurador é aprimorada: seus dados de cura passam de <strong>d6 para d8</strong> (mantendo a mesma quantidade de dados).</p>
                <p>Sempre que um aliado (ou você mesmo) recupera Pontos de Vida por meio do Halo Restaurador, ele também recebe uma quantidade igual de <strong>Pontos de Vida Temporários</strong>, que duram 1 minuto.</p>
              </>}
            />
          </>
        }}
      />

      <HerancaCard
        identificador="Herança"
        titulo="Tiferino"
        placeholder="🧑🏻"
        descricao="Uma linhagem infernal corre em suas veias, concedendo-lhe uma cauda preênsil e resistência mental."
        elemento="Infernal · Mental"
        sing1={<>Resistência a Dano Mental = <strong>metade do nível</strong> (mín. 1).</>}
        sing2={<><strong>Cauda preênsil</strong> capaz de manipular objetos de até 1 Light (não pode usar armas ou escudos).</>}
        talentos={{
          1: <>
            <TalentoCard
              titulo="Golpe Sorrateiro"
              tags="Humano · Tiferino · Profano · Floreio"
              efeito={<>
                <p>Cauda pode empunhar arma <strong>Agile</strong>.</p>
                <p>Ao atacar com arma <strong>Finesse</strong> na mão, realiza um Strike adicional com a arma da cauda como parte da mesma ação.</p>
              </>}
            />
          </>
        }}
      />
    </div>
  </>;
}

function Asura() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="80–150 anos" pv="6" habilidades="Inteligência, Sabedoria + 1 livre. Penalidade em Força" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Sensibilidade Arcana [Asura, Arcane]</h3>
    <p>Conjura <strong>Detectar Magia</strong> como truque arcano inato (1 ação em vez de 2). Passivamente percebe fontes mágicas notórias ou poderosas próximas sem precisar agir.</p>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>
    <h3>Intelecto Superior [Asura]</h3>
    <p>Usa modificador de <strong>Inteligência</strong> no lugar de Sabedoria (Percepção) para rolagens de <strong>Iniciativa</strong>.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Eletrostático:</strong> <em>Capacitor Vivo</em> (Reação): ao sofrer dano elétrico, reduz dano em Nível + Con. Se reduzir a 0, recarrega Martelo Voltaico. <em>Condutividade Segura:</em> +1 em Reflexos contra dano elétrico. <em>Martelo Voltaico</em> (2 ações, 1x/10min): 1d8 Elétrico em alvo a 60 pés (Reflexo Básico); terreno eletrificado por 1 minuto causando 1 elétrico por turno. Escala +1d8/2 níveis.</li>
      <li><strong>Habitante da Escuridão:</strong> Ganha Darkvision; imune a Dazzled por luzes fortes. <em>Fulgor Fotônico</em> (2 ações, 1x/hora): Cone de 15 pés, Fortitude: Sucesso = Dazzled 1 rodada; Falha = Blinded 1 rodada; Falha Crítica = Blinded 1 rodada + Dazzled 1 minuto.</li>
      <li><strong>Audição Absoluta:</strong> <em>Ecolocalização Ativa:</em> 1 ação para ignorar Concealed e Invisible de criaturas a 30 pés (exceto sob silêncio mágico). <em>Triangular Alvo</em> (1 ação, 1x/10min): criatura ouvida perde benefícios de Hidden para aliados que te ouçam; aliados +1 circunstancial no primeiro ataque contra ela.</li>
      <li><strong>Mente Blindada:</strong> Resistência a Dano Mental = metade do nível. +1 circunstancial em salvamentos contra efeitos mentais. <em>Feedback Cognitivo:</em> quando criatura falha em te afetar com efeito Mental/Emoção, sofre 1d6 dano Mental (+1d6/4 níveis). <em>Lógica Fria</em> (1–3 ações, 1x/hora): reduz condição Frightened em 1 por ação gasta.</li>
      <li><strong>Hiper-Processador:</strong> Lê/escreve 2x mais rápido. Reduz à metade o tempo de Learn a Spell e Decipher Writing. Treinado em 2 perícias de conhecimento à escolha. <em>Algoritmo de Combate</em> (1 ação): Recall Knowledge; Sucesso = próximo ataque/CD contra o alvo ganha +1 circunstancial; Sucesso Crítico = +2.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Charr() {
  return <>
    <Stats tamanho="1,50–2,50m (Médio)" idade="30–60 anos" pv="10" habilidades="Força, Constituição + 1 livre. Penalidade em Carisma" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Predador Natural [Charr]</h3>
    <p>Escolha uma arma natural:</p>
    <ul>
      <li><strong>Presas:</strong> 1d8 dano perfurante</li>
      <li><strong>Garras:</strong> 1d4 cortante, traços Agile e Finesse</li>
      <li><strong>Cauda:</strong> 1d4 concussão, traço Reach</li>
    </ul>
    <h3>Fera de Batalha [Charr]</h3>
    <p>Com ambas as mãos livres, ganha +1,5m (+5 pés) em Deslocamento.</p>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Primordial:</strong> Treinado em Intimidação (ou outra perícia). <em>Terrifying Laughter</em> (Ação Livre): ao ter Sucesso em Demoralize, solta risada causando 1d4 dano mental (escala com proficiência em Intimidação: 2d4 Expert, 3d4 Master, 5d4 Legendary). <em>Sadismo:</em> +1 circunstancial em dano contra criaturas com Frightened.</li>
      <li><strong>Legião de Ferro:</strong> Resistência a Fogo = metade do nível. Reduz à metade o tempo de Repair e Craft de itens metálicos/mecânicos. <em>Pele de Fornalha</em> (Reação): ao ser atingido por ataque físico, ganha Resistência a Dano Físico = 2 + metade do nível contra aquele ataque.</li>
      <li><strong>Legião de Sangue:</strong> Tamanho torna-se Grande (Large) com +2 PV de Ancestralidade. <em>Ímpeto de Sangue</em> (1 ação, 1x/10min): Stride + Strike corpo a corpo como parte da mesma ação; acerto gera PV Temporários = nível por 1 combate.</li>
      <li><strong>Legião das Cinzas:</strong> Darkvision. +1 circunstancial em Furtividade em luz fraca/escuridão. <em>Golpe Traiçoeiro:</em> ao acertar criatura Off-Guard com ataque Agile/Finesse/Desarmado corpo a corpo, causa +1d4 dano de precisão (2d4 no nível 10).</li>
      <li><strong>Legião das Chamas:</strong> Resistência a Fogo = metade do nível. +1 dano por dado em magias/itens de fogo. <em>Presença Infernal</em> (Ação Livre): ao conjurar magia de fogo ou arremessar bomba ígnea, tenta Demoralize em inimigo a 9m sem penalidade por idioma.</li>
      <li><strong>Sem Legião (Gladium):</strong> Ganha um General Feat de 1° nível. <em>Lobo Solitário:</em> sem aliados em 15 pés: +1 circunstancial na CA e em salvamentos de Vontade.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Animus() {
  return <>
    <Stats tamanho="1,00–2,00m (Médio)" idade="Indeterminada" pv="8" habilidades="Constituição, Inteligência + 1 livre. Penalidade em Carisma" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Casco Vivo [Animus, Construct]</h3>
    <ul>
      <li><strong>Combustível Variável:</strong> Não consome comida; precisa de materiais brutos diariamente (tipo varia com a Herança). Se não o fizer, sofre regras de Fome e Sede.</li>
      <li><strong>Ciclo de Descanso:</strong> 4h de "Modo de Espera" (−4 Percepção) + 4h de atividades leves = descanso diário. Não dorme.</li>
      <li><strong>Corrosão e Infiltração:</strong> Não é imune a Doenças/Venenos/Sickened; recebe +1 circunstancial em salvamentos contra esses efeitos e Resistência a Veneno = metade do nível.</li>
    </ul>
    <h3>Fisiologia Robótica [Animus, Healing]</h3>
    <ul>
      <li>Treinado em Crafting. Manutenção (10 min) funciona como Treat Wounds usando Crafting no lugar de Medicina. Com o talento Quick Repair, pode ser feito em 1 ação durante combate (como Battle Medicine).</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Modelo Relicário (Despertos do Silêncio):</strong> Combustível = Resíduos Mágicos. <em>Casco de Nulação:</em> Resistência a Dano de Magias = metade do nível. <em>Conduíte Ritualístico:</em> Treinado em 1 perícia mágica; pode conjurar Rituais (começa com 2 de nível 1); +1 circunstancial em testes de Perícia Primária em rituais. <em>Sentido do Fluxo:</em> detecta rituais ativos/sendo conjurados em 100 pés.</li>
      <li><strong>Modelo Lógico (Fugitivos da Lógica):</strong> Combustível = livros, pergaminhos, dados. <em>Banco de Dados:</em> Additional Lore em tópico técnico/arcano. <em>Algoritmo de Mimetismo</em> (Reação): ao ver criatura a 60 pés conjurar magia de rank ≤ 1/3 do nível, tenta identificá-la (DC Fácil); Sucesso = armazena e pode conjurar a magia até o fim do próximo turno usando Int; recarga de 10 minutos.</li>
      <li><strong>Modelo Caótico (Filhos do Caos):</strong> Combustível = matéria orgânica/carvão/sucata. <em>Ressonância Emocional:</em> Escolhe Fúria (Fogo), Tristeza (Frio) ou Alegria (Eletricidade); Resistência ao tipo = metade do nível. <em>Sobrecarga Caótica</em> (Ação Livre): fica Quickened 1 até fim do turno (apenas Stride/Strike); ataques causam +1d6 dano elemental (+1d6 nos níveis 5, 10, 15, 20); no início do próximo turno fica Slowed 1 e Clumsy 1 por 1 rodada.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Essência da Matéria:</strong> Escolhe composição (Porcelana, Pano, Metal ou Rocha) com habilidades únicas de interação e combate.</li>
      <li><strong>Compartimento de Estoque:</strong> Compartimento interno de 1 Bulk. Itens internos não contam para peso; inserir/retirar = 1 ação [Manipulate].</li>
      <li><strong>Protocolo Investigativo:</strong> 10 min observando criatura → descobre o tipo sem teste; CD de Recall Knowledge sobre ela −2 pelo dia.</li>
      <li><strong>Frequência Oculta:</strong> Aprende truque Message (inato oculto). +1 circunstancial em Recall Knowledge sobre tecnologia, construtos e fenômenos mágicos antigos.</li>
      <li><strong>Protocolo de Estabilização:</strong> Ao estabilizar com Dying, recupera 1 PV e acorda imediatamente (permanece Caído).</li>
      <li><strong>Nódulo de Reparo Rápido:</strong> Aprende Mending (inato). Ponto de Foco para conjurar Mending em 1 ação: cura 5 PV + 5 PV Temporários em construto/você mesmo (+5 de ambos/2 níveis acima do 1°).</li>
      <li><strong>[RELICÁRIO] Sensibilidade Cerimonial:</strong> Ao tocar local de ritual, rola 1d4 para descobrir informações (4 = 2 palavras-chave; 1 = Stupefied 1 por 10 min).</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info I:</strong> Aprende 1 ritual de 1° rank; aprende novos rituais de 1° rank 25% mais rápido. Missão de Energia ao aprender novo ritual.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Nódulo Emergencial:</strong> Escolhe Modo Ofensivo (+2 status em ataques) ou Modo Arcano (+2 status em CDs de magia) até fim do turno. Depois: Slowed 1 enquanto reestabiliza. Mais de 1 uso por dia causa dano direto à Vitalidade.</li>
      <li><strong>Diplomacia Apática [Mental]:</strong> Usa Inteligência no lugar de Carisma em Diplomacia (Make Impression) e Intimidação (Coerce/Demoralize) contra alvos com Int ≥ −3 que entendam seu idioma.</li>
      <li><strong>Eco da Centelha:</strong> 1x/dia em local com forte carga emocional/mágica: impressão sensorial do que ocorreu ali. +1 status no próximo Recall Knowledge sobre o local. Ganha 1 Ponto Heroico.</li>
      <li><strong>Previsibilidade Artificial:</strong> 1 ação [Concentrate, Visual]: declara previsão de Ataque, Magia ou Avanço. Se o gatilho ocorrer antes do próximo turno, gasta Reação: +2 circunstancial na CA / salvamento / Passo para longe.</li>
      <li><strong>[RELICÁRIO] Oferenda de Metal e Óleo [Sacrifício]:</strong> 1x/semana: substitui componente material de ritual por partes do próprio corpo. Depois: Drained 1 (requer 8h + dobro de combustível para curar).</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info II:</strong> Pré-req: Info I. Aprende 1 ritual de 2° rank; aprende novos de 2° rank 25% mais rápido.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Protocolo de Autopreservação [Reação]:</strong> 1x/10min. Gatilho: cai abaixo de metade dos PV máximos pela 1ª vez no combate. Fica Quickened 1 até fim do próximo turno (apenas Stride, Step, recuperação).</li>
      <li><strong>Empatia Ecoante:</strong> Pré-req: Eco da Centelha. Ao usar Eco da Centelha, recebe efeito baseado no sentimento do local (Alegria, Admiração, Ternura, Curiosidade, Desespero, Desesperança — cada um com mecânica específica).</li>
      <li><strong>Cerne Desperto:</strong> Pré-req: Essência da Matéria. Desbloqueia habilidade ativa baseada na composição (Porcelana: magias; Pano: defesa por colapso; Metal: sobrecarga de Escudo; Rocha: enraizamento tectônico).</li>
      <li><strong>Os Três Pilares:</strong> Designa 3 NPCs/PCs como Porto Seguro, Horizonte Inspirador e Tesouro Precioso, cada um concedendo bônus mecânicos específicos. Perdas causam dano à Sanidade.</li>
      <li><strong>[RELICÁRIO] Ritualismo Mímico:</strong> Ao testemunhar ritual completo como assistente, gasta 1 dia + teste de perícia (CD do ritual); Sucesso = aprende o ritual temporariamente por 1 semana (1 uso) e progride 2x mais rápido para aprendizado permanente.</li>
      <li><strong>[RELICÁRIO] Arquivo Ritualístico de Info III:</strong> Pré-req: Info II. Aprende 1 ritual de 3° rank; aprende novos de 3° rank 25% mais rápido.</li>
    </ul>
  </>;
}

function Kodan() {
  return <>
    <Stats tamanho="2,00–3,20m (Grande)" idade="150–400 anos" pv="12" habilidades="Constituição + 1 livre" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="6m (20 pés)" />
    <p><em>Veja as regras para <a href="https://2e.aonprd.com/Rules.aspx?ID=3270" target="_blank" rel="noopener noreferrer">personagens grandes</a>.</em></p>

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Titânica [Kodan]</h3>
    <ul>
      <li><strong>Garras:</strong> 1d6 Cortante, traços Agile e Finesse.</li>
      <li><strong>Mordida:</strong> 1d8 Perfurante.</li>
      <li><strong>Habitante do Ártico:</strong> Resistência a Frio = metade do nível (mín. 1). Trata efeitos de Frio Extremo como um grau menos severo.</li>
    </ul>
    <h3>Espírito Resiliente [Kodan, Mental]</h3>
    <ul>
      <li>+1 circunstancial em Vontade contra efeitos com traço Emoção. Aumenta para +2 com PV abaixo de metade do máximo.</li>
    </ul>
    <h3>Orientação Sobrenatural [Kodan, Divine]</h3>
    <ul>
      <li>Conjura truque <em>Guidance</em> como magia inata divina, mas apenas em si mesmo.</li>
    </ul>
    <h3>Revelação Ancestral [Kodan, Divine, Stance] — 1x/dia</h3>
    <p>1 ação para ativar. Dura 1 minuto. Ganha PV Temporários = 1 + nível. Escolha um aspecto:</p>
    <ul>
      <li><strong>Manto da Salvação (Reação):</strong> Aliado em 15 pés falha em Save → +1 circunstancial (+2 no nível 11).</li>
      <li><strong>Intervenção Protetora (Reação):</strong> Aliado em 15 pés seria atingido → +1 circunstancial na CA (+2 no nível 11).</li>
      <li><strong>Presas Congelantes:</strong> Mordidas causam 1 Frio extra; alvo que não se mova sofre o dano novamente (+1/5 níveis).</li>
      <li><strong>Garras Trovejantes:</strong> Garras causam 1 Sônico extra; ressoa para segunda criatura a 15 pés do alvo (+1/5 níveis).</li>
      <li><strong>Brisa Revigorante (Dissipar):</strong> Encerra o Manifesto para curar 1d8 em emanação de 15 pés (+8 se concentrado em 1 alvo; +1d8/2 níveis).</li>
      <li><strong>Tempestade Debilitadora:</strong> Aura de 10 pés de Terreno Difícil para inimigos (30 pés no nível 11).</li>
      <li><strong>Fúria dos Céus:</strong> 1 ação/rodada para convocar raio em quadrado de 5 pés a 15 pés: 1d4 Elétrico (Reflexo Básico; falha crítica perde Reação). +1d4/2 níveis.</li>
    </ul>

    <h2>🧬 Heranças (Bênçãos Espirituais)</h2>
    <p>Escolha 2 Bênçãos Espirituais no 1° nível. Ver talentos abaixo para detalhes mecânicos de cada Bênção.</p>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Abraço do Urso:</strong> Resistência a Frio +1 (+2 no nível 11). Durante descanso de 8h, até 4 criaturas próximas tratam Frio Extremo como um grau menos severo.</li>
      <li><strong>Orientação Compartilhada:</strong> Remove restrição de "somente em si mesmo" para Guidance. Ao usar em si mesmo, pode escolher aliado a 9m para também receber os benefícios.</li>
      <li><strong>Sentido Gélido:</strong> Meditação de 10 min: descobre direção da fonte de frio mais intensa em 10 milhas.</li>
      <li><strong>Entidade Sagrada:</strong> Treinado em Diplomacia ou Intimidação. +1 circunstancial contra divindades, sacerdotes e criaturas sagradas. Missão de Energia ao ganhar 1 Ponto de Renome com divindade não-maligna.</li>
      <li><strong>Patas do Inverno:</strong> Ignora terreno difícil não-mágico de neve/gelo. Tração perfeita em superfícies gélidas.</li>
      <li><strong>Olhar de Superioridade:</strong> Demoralize ignora penalidade por idioma e pode remover traço Auditório contra criaturas menores que você.</li>
      <li><strong>Inércia do Iceberg:</strong> +2 circunstancial na CD de Fortitude/Atletismo contra Shove e Trip.</li>
      <li><strong>Parábolas do Santuário:</strong> Treinado em Religião (ou outra). Pode usar Religião para a reação Aid em qualquer tarefa descrevendo um ensinamento de Koda. Missão de Energia ao concluir sidequest religiosa.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Avanço do Colosso:</strong> Ignora penalidade de deslocamento de armaduras médias e pesadas.</li>
      <li><strong>Primeiro Toque de Koda:</strong> Pré-req: Sentido Gélido. +1 em uma resistência existente (+2/7°, +3/11°, +4/15°, +5/19°). Ao visitar local do Sentido Gélido, pode escolher outro tipo.</li>
      <li><strong>Peso e Opressão:</strong> Pré-req: Olhar de Superioridade. +1 Intimidação/Demoralize por categoria de tamanho menor (máx. +3). Reação: ao criatura falhar em Shove/Trip/Reposicionar você, tenta Demoralize (ela conta como maior se falha crítica).</li>
      <li><strong>Contato Congelante:</strong> Pré-req: Patas do Inverno. +1 Frio extra em garras (+1/4 níveis acima do 3°). <em>Esfriar</em> (2 ações): apaga chama pequena, resfria superfície ou congela 1,5m de água.</li>
      <li><strong>Ressonância Autoritária:</strong> 1 ação: voz perceptível até em tempestades por 1 minuto. +1 status em Intimidação e Performance. Missão de Energia ao influenciar grupo com sucesso.</li>
      <li><strong>Manto da Serenidade:</strong> Pré-req: Abraço do Urso. Durante descanso longo, 1 criatura adjacente recupera Sanidade e ganha 1 rerrolagem (Fortuna) em salvamento de Emoção no dia seguinte.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Alcance Divino:</strong> Alcance de todos os ataques desarmados aumenta para 3m (10 pés).</li>
      <li><strong>Anatomia Superior:</strong> Garras sobem para 1d8; Mordida sobe para 1d10.</li>
      <li><strong>Vislumbre Estrelar:</strong> Pré-req: Orientação Compartilhada. Guidance em si mesmo dá +2. Ao rolar Iniciativa, pode conjurar Guidance como Ação Livre.</li>
      <li><strong>Autoridade Ressonante:</strong> Pré-req: Ressonância Autoritária. Conjura Command e Fear (1° rank, 1x/dia cada). Sob Ressonância Autoritária, alvos sofrem −1 em salvamentos contra essas magias.</li>
      <li><strong>Peregrino dos Santuários:</strong> Pré-req: Sentido Gélido. Revelação Ancestral recarrega em 1h. Ao visitar Santuário, ganha "Centelha do Início" para usar Revelação mesmo em recarga.</li>
      <li><strong>Revelação Primordial:</strong> Melhoria da Revelação Ancestral. Escolha até 3 vezes (sem repetição): Vigilância (Reação extra para Manto/Intervenção), Fúria (dano elemental escalável +1d4), ou Zelador (Tempestade ignora aliados; cura da Brisa sobe para 1d10).</li>
      <li><strong>Irmão Mais Velho:</strong> +2 circunstancial em Diplomacia para mediação. Reação: ao negociação falhar, impõe "Minuto de Silêncio" (Vontade CD Religião; falha = não pode agir hostilmente por 1 minuto). Missão de Energia ao mediar disputa sem violência.</li>
    </ul>
    <h3>Nível 7</h3>
    <ul>
      <li><strong>Toque Nostálgico:</strong> Ao tocar artefato/item mágico/escritura: teste de Religião para acessar memória. 1 uso por objeto; usos adicionais por semana causam dano de Sanidade. Missão de Energia ao resolver mistério com a visão.</li>
    </ul>
  </>;
}

function Sylvari() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="Indeterminada" pv="8" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Verdejante [Sylvari]</h3>
    <ul>
      <li><strong>Fotossíntese:</strong> Possui traço Planta. Não precisa de comida se passar 4h/dia em luz solar direta (ainda precisa de água).</li>
      <li><strong>Imunidade Vegetal Parcial:</strong> Resistência a Veneno = metade do nível (mín. 1). +1 circunstancial em salvamentos contra Doenças e efeitos de Sono.</li>
      <li><strong>Camuflagem Orgânica:</strong> +1 circunstancial em Furtividade em ambientes naturais.</li>
    </ul>
    <h3>Amigo do Sol [Sylvari, Healing, Light]</h3>
    <ul>
      <li><strong>Absorção Vital:</strong> Ao recuperar PV (magia, poções, medicina), recupera adicionalmente 1/3 do nível (mín. 1).</li>
      <li><strong>Banhado pelo Sol:</strong> Em Luz Solar Direta fora de combate com PV abaixo de 50%: ganha Fast Healing 1 até atingir metade da vida.</li>
    </ul>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <p><em>Nota: Inacessíveis através do talento Adopted Ancestry.</em></p>
    <ul>
      <li><strong>Nascido da Aurora (folhagem verde):</strong> <em>Empatia Natural:</em> 1 min observando/interagindo com criatura inteligente → sintonia até o próximo descanso: +1 circunstancial em Percepção e testes de Carisma (social); +2 circunstancial em ataques/CD de efeitos Linguísticos. <em>Mente Sobre os Dialetos:</em> conhece idioma extra, podendo trocá-lo diariamente via meditação. <em>Palavras Inspiradoras</em> (1 ação): aliado sintonizado ganha PV Temporários = Nível + Carisma por 10 minutos.</li>
      <li><strong>Nascido do Raiar (folhagem dourada):</strong> Deslocamento base +5 pés. <em>Corredor das Matas</em> (1–3 ações, 1x/10min): 1 ação (+5 pés bônus); 2 ações (+5 / +10 pés); 3 ações (+5 / +10 / +15 pés), ignorando terreno difícil não-mágico. Após movimento: Dazzled até fim do próximo turno.</li>
      <li><strong>Nascido do Crepúsculo (folhagem azul):</strong> Treinado em Arcana/Natureza/Ocultismo/Religião (sua escolha). Ganha Recognize Spell gratuitamente. Aprende 2 truques da tradição escolhida (inatos); pode trocar 1 deles diariamente via meditação. <em>Análise Defensiva:</em> ao usar Recognize Spell e ter Sucesso: +1 CA/salvamentos contra a magia (Sucesso Crítico: +2).</li>
      <li><strong>Nascido da Noite (folhagem preta):</strong> Darkvision. <em>Manto das Sombras:</em> pode usar Hide sem cobertura em luz fraca/escuridão. <em>Pulso de Fogo-Fátuo</em> (1 ação): alvo a 30 pés, salvamento de Vontade; Sucesso = Dazzled 1 rodada; Falha = Dazzled 1 minuto; Falha Crítica = Blinded 1 rodada + Dazzled 1 minuto.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Norn() {
  return <>
    <Stats tamanho="1,80–2,60m (Médio)" idade="80–120 anos" pv="12" habilidades="Força, Constituição + 1 livre. Penalidade em Destreza" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Resiliência Glacial [Norn, Cold]</h3>
    <p>Resistência a Dano de Gelo = metade do nível (mín. 1). Trata terreno difícil por gelo/neve/frio congelante como terreno normal.</p>
    <h3>Músculos da Montanha [Norn]</h3>
    <p>+1 circunstancial em Atletismo para Grapple e Shove. Conta como uma categoria de tamanho maior para capacidade de carga (Bulk) e para resistir a Grapple/Shove.</p>

    <h2>🧬 Bênçãos Espirituais</h2>
    <p>Escolha 2 Bênçãos Espirituais no 1° nível. Não pode repetir a mesma Bênção.</p>
    <table>
      <thead><tr><th>Espírito</th><th>Bênção</th><th>Benefício</th></tr></thead>
      <tbody>
        <tr><td>Urso</td><td>Vontade do Titã</td><td>Tamanho Grande (+2 PV de Ancestralidade, total 14 PV).</td></tr>
        <tr><td>Lobo</td><td>Caçador de Matilha</td><td>Treinado em Sobrevivência. Ao flanquear com aliado: você e o aliado +1 status no dano; alvo −1 em manobras contra vocês dois.</td></tr>
        <tr><td>Leopardo da Neve</td><td>Senso de Perigo</td><td>Low-Light Vision. +2 circunstancial em Percepção para Seek e detectar armadilhas. 1x/10min: Reação para +1 status em salvamento de Reflexo (+2 contra armadilhas).</td></tr>
        <tr><td>Corvo</td><td>Espião das Sombras</td><td>Familiar em forma de corvo com 2 habilidades. 1 ação Concentrate: vê pelos olhos do corvo a até 100 pés.</td></tr>
        <tr><td>Boi</td><td>Montaria de Guerra</td><td>Tamanho Grande. +2 Bulk máximo/sobrecarregado. −5 pés deslocamento. Aliado montado não precisa gastar ação para Maintain Grip; você pode usar Reação para que aliado não precise gastar ação para Maintain Balance.</td></tr>
        <tr><td>Coruja</td><td>Visão Amplificada</td><td>Darkvision. 1 ação (1x/10min): quadruplica alcance máximo de visão até fim do próximo turno.</td></tr>
        <tr><td>Baleia</td><td>Navegador Abençoado</td><td>Pode realizar 2 atividades de Exploração diferentes simultaneamente. Treinado em Sobrevivência. +1 status em Sobrevivência e Percepção durante fase de Exploração.</td></tr>
        <tr><td>Centopeia</td><td>Singularidade Macabra</td><td>Traço Void Healing. Resistência a Ácido = metade do nível. 1x/dia, 2 ações: Cone de 30 pés causando 1d10 Vazio/2 níveis (mín. 1d10) com Fortitude Básico.</td></tr>
        <tr><td>Águia</td><td>Mestre dos Céus</td><td>Velocidade de Voo de magias/itens +5 pés. 1x/hora, 1 ação: Fly Speed = velocidade em terra até fim do turno (deve terminar em solo sólido).</td></tr>
        <tr><td>Minotauro</td><td>Fúria Impiedosa</td><td>Com PV abaixo de metade: +1 status no dano desarmado/marcial e +5 pés ao Stride em direção a inimigo. +1 circunstancial em Vontade contra Emoção.</td></tr>
      </tbody>
    </table>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Vigor das Lendas:</strong> +PV máximos igual ao nível atual. A cada nível subido, +1 PV adicional.</li>
      <li><strong>Espólio do Caçador:</strong> Treinado em Sobrevivência ou Artesanato. +1 em Sobrevivência para coletar espólios; +1 em Artesanato para criar itens a partir de partes de criaturas.</li>
      <li><strong>Orador das Eras [Auditório]:</strong> Nas preparações diárias, narra saga de 1 Espírito que possua. Você e até 2 aliados recebem benefício baseado no Espírito narrado (bônus específicos para Urso, Lobo, Corvo, Boi, Coruja, Baleia, Centopeia, Águia e Minotauro).</li>
      <li><strong>Impacto Glacial [Movimento]:</strong> 1x/hora, 2 ações: Stride + Strike. Sucesso: empurra 5 pés. Sucesso Crítico com arma Bludgeoning: empurra 10 pés; colisão com estrutura = dano adicional em 2 dados.</li>
      <li><strong>[LOBO] Honra da Matilha:</strong> Não precisa gastar ação para se preparar para Aid ao flanquear com aliado (gasta Reação normalmente). Sucesso Crítico em Aid: aliado também ganha +1 status no dano por dado da arma.</li>
      <li><strong>[CORUJA] Sentinela de Olhos de Gelo:</strong> +1 circunstancial em Percepção visual para Search/Localizar criaturas escondidas. Atividade <em>Disparo Vigilante</em> [2 ações]: +1 ataque, +2/4/6/8 dano conforme proficiência na arma.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Coração da Saga [Mental]:</strong> +1 status em Vontade contra Medo. Reação (1x/hora): ao ter Sucesso em salvamento de Medo, ganha PV Temporários = 2x o nível por 1 minuto.</li>
      <li><strong>Eco de Shiverpeaks:</strong> Expert em Sobrevivência (ou Natureza). Usa Sobrevivência no lugar de Percepção para detectar ameaças naturais e Seek em ambientes selvagens. +2 circunstancial em Sobrevivência para clima/abrigo. Missão de Energia ao investigar fenômeno natural estranho.</li>
      <li><strong>[LOBO] Uivo da Alcateia [Auditório]:</strong> 1x/hora, 1 ação Auditório: até 2 aliados escolhem entre +10 pés no próximo movimento, +1 em Iniciativa/Salvamento, ou +1d6 precisão no primeiro ataque contra alvo que você flanqueia com eles.</li>
      <li><strong>[CORUJA] Vigília Noturna:</strong> Durante descanso, permanece mentalmente alerta percebendo detalhes sutis, presenças escondidas e comportamentos anômalos.</li>
      <li><strong>Saga do Caçador [Concentração]:</strong> Req: Treinado em Natureza. Expert em Natureza. 1x/hora: ao acertar Strike, realiza Recall Knowledge como Ação Livre. CD −1 nível para Bestas, Plantas, Monstruosidades e criaturas com traço Frio.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Comunhão Espiritual:</strong> 1h de meditação nas preparações diárias: recebe Benefício de Bênção de qualquer Espírito (mesmo sem possuí-la). Apenas 1 bênção extra ativa por vez.</li>
      <li><strong>Couro do Inverno:</strong> Nas preparações diárias: escolhe Bludgeoning, Piercing ou Slashing. Ganha Resistência = metade do nível (mín. 1) a esse tipo até o próximo descanso.</li>
      <li><strong>Frenesi de Shiverpeaks:</strong> Início do turno: entra em Frenesi por até 3 rodadas. Ataques causam +1 dado de Gelo. Termina se não causar dano em um turno. Ao encerrar: Stunned por n° de rodadas do Frenesi (máx. Stunned 3).</li>
      <li><strong>Último Suspiro:</strong> 1x/dia. Gatilho: reduzido a 0 PV por ataque não-crítico. Salvamento de Fortitude (CD = dano sofrido): Sucesso = fica com 1 PV sem Wounded adicional; Sucesso Crítico = também pode fazer Strike corpo a corpo imediato como Reação.</li>
      <li><strong>[LOBO] Rastreador da Matilha:</strong> +2 circunstancial em Sobrevivência para Track e Percepção para Sense Motive contra criaturas rastreadas. Missão de Energia ao localizar criatura rastreada.</li>
      <li><strong>[CORUJA] Asas da Orácula [Metamorfose]:</strong> 1x/dia, 3 ações: asas espectrais por 10 min. Fly Speed = velocidade em terra. +2 circunstancial em Furtividade para se ocultar em Escuridão.</li>
    </ul>
  </>;
}

function Skritt() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="12–30 anos" pv="8" habilidades="Destreza, Constituição + 1 livre. Penalidade em Inteligência" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="9m (30 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Natureza Skritt [Skritt, Emotion]</h3>
    <ul>
      <li><strong>Instinto Covarde:</strong> −1 status em Vontade contra efeitos que causem Frightened.</li>
      <li><strong>Momento de Pânico (Reação):</strong> Gatilho: ganha Frightened. Realiza Stride devendo terminar mais longe da fonte de medo. Se disparar reação inimiga: atacante rola Flat Check CD 5; falha/erro = inimigo Off-Guard até fim do próximo turno.</li>
      <li><strong>Sorrateiro (Reação):</strong> Gatilho: aliado acerta Strike corpo a corpo em criatura flanqueada por você. Alvo sofre +1d4 dano de precisão (2d4 nível 5, 3d4 nível 11, 4d4 nível 17).</li>
      <li><strong>Surto do Rato (Reação, 1x/dia):</strong> Gatilho: você falharia em Salvamento ou seria atingido. Eleva 1 grau de sucesso (Falha Crítica → Falha, Falha → Sucesso, ou Sucesso Crítico inimigo → Sucesso, Sucesso → Falha). Depois: Fleeing por 1 rodada.</li>
    </ul>
    <h3>Visão na Penumbra</h3>
    <p>Enxerga na luz fraca como luz plena. Ignora a condição Camuflado por luz fraca.</p>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Avarento:</strong> <em>Avaliador de Brilhosos:</em> +2 circunstancial em Percepção (Seek) para itens de metal/cristal; Sucesso em Avaliar joias = Sucesso Crítico. <em>Tremedeira na Mão:</em> 1x/10min, saca item como Ação Livre. <em>Apreciação Obsessiva</em> (1 ação [Manipulate]): ganha PV Temporários = nível por 1 min e recarrega Tremedeira. <em>Sujeito Mão Leve</em> (1 ação, requer Flanqueio ou Indetectado): teste de Thievery vs CD Percepção do alvo para roubar item em combate.</li>
      <li><strong>Escavador:</strong> Darkvision. Burrow Speed = metade da velocidade de caminhada (terra solta, não rocha). Ganha Quick Squeeze gratuitamente; move-se por espaços apertados à velocidade normal sem Off-Guard. Cobertura Natural: +1 CA em espaços apertados/submerso na terra.</li>
      <li><strong>Monstruoso:</strong> Tamanho Médio. PV de Ancestralidade sobe para 10. Mordida: 1d6 Perfurante + 1 Ácido, traço Finesse. Couro de Cicatrizes: Resistência 1 a Dano Físico (sobe a cada 5 níveis, máx. 5).</li>
      <li><strong>Rabudo:</strong> Climb Speed 15 pés; não Off-Guard ao escalar. Cauda Preênsil: realiza Interact com a cauda (pode empunhar arma Agile/Finesse; sem escudos ou armas sem esses traços). <em>Rasteira da Cauda</em> (1 ação): manobra Trip usando Acrobacia no lugar de Atletismo.</li>
      <li><strong>Pestilento:</strong> Sempre 1 grau superior em Saves contra Doenças. Resistência a Veneno = metade do nível. Mordida: 1d4 Perfurante (Finesse, Desarmado). <em>Absorver Patógeno</em> (Reação): armazena doença ao ter Sucesso no Save. <em>Liberar Peste</em> (1 ação, 1x/hora): próxima Mordida bem-sucedida transmite doença armazenada ignorando incubação. Peste Skritt: Estágio 1 (1d4 veneno), Estágio 2 (2d4), Estágio 3 (4d4).</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function HabilidadeCard({ titulo, img, placeholder = '🐉', children }) {
  return (
    <div className="habilidade-card">
      <div className="habilidade-card-img">{img ? <img src={img} alt={titulo} /> : placeholder}</div>
      <div className="habilidade-card-corpo">
        <h3>{titulo}</h3>
        {children}
      </div>
    </div>
  );
}

function TalentoCard({ titulo, tags, descricao, efeito, img, raro }) {
  return (
    <details className={`talento-card${raro ? ' talento-raro' : ''}`}>
      <summary className="talento-card-header">
        <div className="talento-thumb-wrapper">
          <div className="talento-card-img">
            {img ? <img src={img} alt={titulo} /> : '📀'}
          </div>
          {img && (
            <div className="talento-img-popout">
              <img src={img} alt={titulo} />
            </div>
          )}
        </div>
        <div className="talento-card-meta">
          <h4 className="talento-card-titulo">{titulo}</h4>
          {tags && <div className="talento-card-tags">{tags}</div>}
        </div>
      </summary>
      <div className="talento-card-corpo">
        {descricao && <p className="talento-card-descricao"><strong>Descrição.</strong> {descricao}</p>}
        {efeito && <div className={`talento-card-efeito${descricao ? ' com-rotulo' : ''}`}>{efeito}</div>}
      </div>
    </details>
  );
}

function TalentosNiveis({ children }) {
  return [1, 5, 9, 13, 17].map(n => (
    <details key={n} className="talento-nivel">
      <summary>{n}° Nível</summary>
      <div className="talento-nivel-corpo">
        {children?.[n] || <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>}
      </div>
    </details>
  ));
}

function HerancaCard({ identificador, titulo, descricao, elemento, img, imgPopout, imgPosition, placeholder = '🐉', sing1, sing2, sing3, talentos }) {
  return (
    <details className="heranca-card">
      <summary className="heranca-card-summary">
        <div className="heranca-thumb-wrapper">
          <div className="heranca-card-banner">
            {img ? <img src={img} alt={titulo} style={imgPosition ? { objectPosition: imgPosition } : undefined} /> : <span className="heranca-banner-placeholder">{placeholder}</span>}
          </div>
          {imgPopout && (
            <div className="heranca-img-popout">
              <img src={imgPopout} alt={`Arte — ${titulo}`} />
            </div>
          )}
        </div>
        <div className="heranca-card-info">
          <div className="heranca-card-tags">
            <span className="heranca-identificador">{identificador}</span>
            <span className="heranca-elemento">{elemento}</span>
          </div>
          <span className="heranca-titulo">{titulo}</span>
        </div>
      </summary>
      <div className="heranca-card-corpo">
        {descricao && <p className="heranca-descricao">{descricao}</p>}
        <details className="heranca-secao">
          <summary>Singularidades</summary>
          <div className="heranca-secao-corpo">
            {sing1 && <div className="sing-item">
              <span className="sing-label">Singularidade 1</span>
              {sing1}
            </div>}
            {sing2 && <div className="sing-item">
              <span className="sing-label">Singularidade 2</span>
              {sing2}
            </div>}
            {sing3 && <div className="sing-item">
              <span className="sing-label">Singularidade 3</span>
              {sing3}
            </div>}
          </div>
        </details>
        <details className="heranca-secao">
          <summary>Talentos Dependentes</summary>
          <div className="heranca-secao-corpo">
            <TalentosNiveis>{talentos}</TalentosNiveis>
          </div>
        </details>
      </div>
    </details>
  );
}

function Drakan() {
  return <>
    <Stats tamanho="1,50–2,00m (Médio)" idade="50–90 anos" pv="10" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>

    <HabilidadeCard titulo="Fisiologia Dracônica" img="https://i.imgur.com/2AwpMYu.png">
      <p><strong>Descrição.</strong> Seu sangue é elemental. Ao escolher sua Herança Dracônica, você define seu Elemento e Tipo de Baforada. Você recebe as seguintes habilidades:</p>
      <p><strong>Efeito.</strong> <strong>Armas Naturais.</strong> Escolha uma das opções abaixo. Seus ataques desarmados causam dano físico + 1 de dano do seu Elemento.</p>
      <ul>
        <li><strong>Garras:</strong> 1d4 Cortante (Traços: Unarmed, Agile, Finesse).</li>
        <li><strong>Mordida:</strong> 1d8 Perfurante (Traços: Unarmed, Forceful).</li>
        <li><strong>Cauda:</strong> 1d6 Concussão (Traços: Unarmed, Trip, Sweep).</li>
      </ul>
      <p><strong>Escamas Protetoras.</strong> Você ganha resistência ao seu Elemento igual à metade do seu nível (mínimo 1).</p>
    </HabilidadeCard>

    <HabilidadeCard titulo="Hálito Elemental" img="https://i.imgur.com/p2FSlU1.png">
      <p><strong>Descrição.</strong> Você é capaz de manifestar o Elemento de sua Herança Dracônica através de uma baforada mortal.</p>
      <p><strong>Efeito.</strong> <strong>Arma de Sopro</strong> (2 Ações) <code>[Drakan] [Arcane] [Evocation] [Elemental]</code><br /><em>Frequência: Uma vez a cada 1 hora.</em></p>
      <p>Você exala energia pura. Todas as criaturas na área de um cone de 15 pés ou uma linha de 30 pés (sua escolha ao utilizar esta habilidade) sofrem <strong>2d6 de dano</strong> do seu Elemento (Tipo de Save varia de acordo com sua Herança Draconiana e usa sua CD de Classe). O dano aumenta em +1d6 a cada 2 níveis depois do 1º.</p>
      <p><strong>Inalar Elemento</strong> (Reação) <code>[Drakan] [Arcane] [Elemental]</code><br /><em>Gatilho: Você sofre dano do mesmo tipo do seu Elemento. Frequência: Uma vez por dia.</em></p>
      <p>Você inspira o próprio elemento, recarregando suas glândulas mortais. Reduza o dano sofrido pela metade e, se você já tiver utilizado sua Arma de Sopro, recupere imediatamente seu uso dela.</p>
    </HabilidadeCard>

    <HabilidadeCard titulo="Graciosidade do Dragão" img="https://i.imgur.com/d62pOKw.png">
      <p><strong>Descrição.</strong> Sua presença impõe respeito e você reconhece instintivamente a linhagem do poder.</p>
      <p><strong>Efeito.</strong> Você ganha um bônus de circunstância de +2 em testes de Percepção, Sobrevivência e Diplomacia contra:</p>
      <ul>
        <li>Criaturas com o traço <strong>Dragão</strong>.</li>
        <li>Criaturas com o traço do seu <strong>Elemento</strong> (ex: Fogo, Frio).</li>
      </ul>
      <p><em>Nota: A critério do mestre, este bônus pode se aplicar a criaturas tematicamente ligadas ao seu elemento, mesmo que não possuam o traço.</em></p>
    </HabilidadeCard>

    <details className="talentos-ancestralidade">
      <summary>📀 Talentos de Ancestralidade Independentes</summary>
      <div className="talentos-corpo">
        <TalentosNiveis>
          {{
            1: <>
              <TalentoCard
                titulo="Ascensão Fisiológica"
                tags="Drakan · Armamentos"
                descricao="Sua fisiologia dracônica evolui além de sua manifestação inicial, desenvolvendo novos arsenais físicos e aprofundando a afinidade elemental que permeia cada golpe."
                img="https://i.imgur.com/ZLMnijN.png"
                efeito={<>
                  <p>Você ganha um tipo adicional de Arma Natural da lista de Fisiologia Dracônica, diferente do que já possui.</p>
                  <p>Além disso, o bônus de dano elemental concedido por Fisiologia Dracônica passa a escalar com o número de dados de dano que sua arma natural possui: <strong>+1</strong> com 1 dado (base), <strong>+2</strong> com 2 dados (Striking), <strong>+3</strong> com 3 dados (Greater Striking), <strong>+4</strong> com 4 dados (Major Striking). Este bônus substitui o fixo de +1 original.</p>
                </>}
              />
              <TalentoCard
                titulo="Arsenal Dracônico"
                tags="Drakan · Armamentos"
                descricao="Todo dragão nasce com mais de um modo de matar. Você aprendeu a reconhecer isso e a refinar cada parte do seu corpo para uma função específica, tornando cada golpe uma escolha deliberada."
                img="https://i.imgur.com/jgKNlZo.png"
                efeito={<>
                  <p>Você ganha um tipo adicional de Arma Natural da lista de Fisiologia Dracônica, diferente dos que já possui.</p>
                  <p>Além disso, escolha uma das suas armas naturais para receber a seguinte melhoria permanente:</p>
                  <ul>
                    <li><strong>Garras:</strong> O dado de dano aumenta para 1d6. Ela ganha os traços Backswing e Versatile B.</li>
                    <li><strong>Mordida:</strong> O dado de dano aumenta para 1d10. Ela ganha o traço Deadly d10.</li>
                    <li><strong>Cauda:</strong> O dado de dano aumenta para 1d8. Ela ganha o traço Reach.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Escamas Resilientes"
                tags="Drakan · Defesa"
                descricao="As escamas de um Drakan não param de crescer. Endurecendo camada sobre camada com o tempo, elas assumem a forma que a vida exige. Ao selecionar este talento, você define permanentemente o que as suas se tornarão."
                img="https://i.imgur.com/EunWwxd.png"
                efeito={<>
                  <p>Escolha uma das três formas abaixo. Esta escolha é <strong>permanente</strong>. Suas escamas podem receber melhorias rúnicas como se fossem uma armadura convencional (Potency Rune até +3, Resilient Rune e runas de propriedade). Você não pode beneficiar-se deste talento e usar armadura simultaneamente — aplique apenas o maior bônus de item entre os dois.</p>
                  <p>Para fins de bônus de proficiência e Especialização de Armadura, utilize o maior entre sua proficiência em Desarmado ou sua proficiência na categoria equivalente desta forma de escama.</p>
                  <p><strong>Escamas Vívidas</strong> (Categoria: Desarmado)<br />
                  Escamas finas, flexíveis e iridescentes. Não restringem o movimento.<br />
                  Bônus de Item: +1 · Cap de DES: +5 · Penalidade Testes: — · Penalidade Velocidade: — · Req. Força: —</p>
                  <p><strong>Escamas Forjadas</strong> (Categoria: Armadura Média)<br />
                  Escamas sobrepostas e endurecidas como metal temperado.<br />
                  Bônus de Item: +3 · Cap de DES: +3 · Penalidade Testes: −2 · Penalidade Velocidade: −1,5m (5 pés) · Req. Força: +2<br />
                  Se o modificador de Força for inferior a +2, aplique −1 adicional em testes e −1,5m de velocidade além das penalidades normais.</p>
                  <p><strong>Escamas Pétreis</strong> (Categoria: Armadura Pesada)<br />
                  Placas densas e sobrepostas como basalto solidificado, quase impenetráveis.<br />
                  Bônus de Item: +6 · Cap de DES: +0 · Penalidade Testes: −3 · Penalidade Velocidade: −3m (10 pés) · Req. Força: +4 · Traço: <strong>Bulwark</strong><br />
                  Se o modificador de Força for inferior a +4, aplique −1 adicional em testes e −1,5m de velocidade além das penalidades normais.</p>
                </>}
              />
              <TalentoCard
                titulo="Horizonte do Predador"
                tags="Drakan · Sentidos"
                descricao="Dragões caçam em qualquer luz. Seus olhos aprenderam a fazer o mesmo."
                img="https://i.imgur.com/OQkidqc.png"
                efeito={<p>Você ganha <strong>Visão na Penumbra (Low-Light Vision)</strong>. Se sua Herança já concede esta visão, você ganha <strong>Visão no Escuro (Darkvision)</strong> em vez disso.</p>}
              />
              <TalentoCard
                titulo="Percepção Elemental"
                tags="Drakan · Sentidos"
                descricao="Com o tempo, você aprendeu a sentir seu Elemento antes de vê-lo. Uma temperatura, um faro, uma vibração que existe antes da percepção consciente."
                img="https://i.imgur.com/7hCvRkE.png"
                efeito={<>
                  <p>Em um raio de <strong>18 metros</strong>, você percebe concentrações do seu Elemento de forma imprecisa — chamas ativas, campos elétricos, gases tóxicos, água corrente, solo aquecido, entre outros. Ao usar a ação Buscar (Seek) para procurar uma criatura que esteja dentro de ou diretamente adjacente a uma fonte do seu Elemento, você recebe <strong>+1 de circunstância</strong> no teste de Percepção.</p>
                  <p>Além disso, uma vez por dia, você pode realizar uma atividade de 10 minutos em contato com uma fonte do seu Elemento. Se a fonte for suficiente (à critério do Mestre), você absorve parte de sua essência e recupera imediatamente o uso de <strong>Inalar Elemento</strong>.</p>
                </>}
              />
              <TalentoCard
                titulo="Voz do Dragão"
                tags="Drakan · Intimidação"
                descricao="Há algo no sopro de um dragão que criaturas elementais reconhecem antes de qualquer palavra. O medo vem primeiro, a compreensão depois."
                img="https://i.imgur.com/PcexFkh.png"
                efeito={<>
                  <p>Quando você usa Intimidação para Desmoralizar, você ignora a penalidade de <strong>−4</strong> por não compartilhar um idioma com o alvo — exceto contra criaturas com o traço <strong>Dragão</strong> ou com o traço do seu <strong>Elemento</strong>, que são familiarizadas demais com sua natureza para serem afetadas desta forma.</p>
                  <p>Se o alvo testemunhou você usar sua Arma de Sopro neste encontro, a CD de Vontade dele contra seu Desmoralizar sofre uma <strong>penalidade de circunstância de −1</strong>. Se o alvo sofreu dano da Arma de Sopro neste turno, essa penalidade aumenta para <strong>−2</strong>.</p>
                </>}
              />
              <TalentoCard
                titulo="Estirpe Reconhecível"
                tags="Drakan · Conhecimento · Social"
                descricao="O sangue dracônico carrega memória que você não viveu e impõe uma presença que você não precisa anunciar. Quem reconhece o que você é reage a isso antes de qualquer palavra."
                img="https://i.imgur.com/eqRtU8o.png"
                efeito={<>
                  <p>Você recebe o talento <strong>Additional Lore</strong>, escolhendo <strong>Dragon Lore</strong> como a perícia concedida. Você ganha os dois benefícios a seguir:</p>
                  <p><strong>Memória do Sangue:</strong> Uma vez por dia, você pode utilizar <strong>Dragon Lore</strong> em um teste de Lembrar Conhecimento sobre qualquer assunto, independente da perícia normalmente exigida, desde que seu nível de proficiência em Dragon Lore seja compatível com a raridade ou complexidade do assunto (à critério do Mestre).</p>
                  <p><strong>Presença Reconhecida:</strong> Uma vez por dia, você pode utilizar <strong>Dragon Lore</strong> no lugar da perícia normalmente exigida para uma das seguintes ações, com <strong>+1 de circunstância</strong> no teste:</p>
                  <ul>
                    <li>Se você possuir uma <strong>Herança Elemental</strong>, pode utilizá-la para <strong>Causar Impressão (Make an Impression)</strong>.</li>
                    <li>Se você possuir uma <strong>Herança Primordial</strong>, pode utilizá-la para <strong>Coagir (Coerce)</strong>.</li>
                  </ul>
                  <p><strong>Missão de Energia:</strong> Na primeira vez em cada período de Downtime que você usar Dragon Lore para Causar Impressão ou Coagir um NPC de importância narrativa (E3 ou superior) de forma que gere uma consequência concreta para o grupo — aliança, acordo, acesso ou conflito evitado — você recupera <strong>1 ponto de Energia</strong>.</p>
                </>}
              />
              <TalentoCard
                titulo="Avareza Dracônica"
                tags="Drakan · Manufatura · Sanidade"
                descricao="Todo dragão entende o valor das coisas antes de entender qualquer outra. O ouro não é riqueza para a sua espécie, é propósito. Você carrega essa fome, e ela tanto te sustenta quanto te assombra."
                img="https://i.imgur.com/04F6U3M.png"
                efeito={<>
                  <p>Você se torna Treinado em <strong>Manufatura (Crafting)</strong>. Você também aprende o truque <strong>Approximate</strong> como magia inata, podendo conjurá-lo à vontade.</p>
                  <p><strong>Apreciar a Riqueza</strong> (Atividade de 10 minutos) — <em>Frequência:</em> Uma vez por dia. Você contempla em silêncio um tesouro que pertença exclusivamente a você. Ao final do período, faça um teste de <strong>Vontade de Sanidade</strong> contra a CD padrão do seu nível:</p>
                  <ul>
                    <li><strong>Sucesso Crítico:</strong> Progressão Moderada na Escala de Sanidade.</li>
                    <li><strong>Sucesso:</strong> Progressão Pequena na Escala de Sanidade.</li>
                    <li><strong>Falha Crítica:</strong> Regressão Pequena na Escala de Sanidade.</li>
                  </ul>
                  <p>Esta habilidade só pode ser utilizada uma vez por tesouro. O que qualifica como um "tesouro" para fins desta habilidade aumenta conforme você sobe de nível, à critério do Mestre, acompanhando aquilo que sua avareza dracônica passa a considerar digno.</p>
                  <p><strong>Penalidade:</strong> Testemunhar um tesouro seu, ou que poderia ser seu, ser roubado ou destruído coloca sua sanidade em risco, exigindo um teste conforme determinado pelo Mestre.</p>
                </>}
              />
              <TalentoCard
                titulo="Catalisador Elemental"
                tags="Drakan · Sopro"
                descricao="O elemento que você respira e a magia que você conjura têm a mesma origem. Com esforço, você aprende a fazê-los coincidir."
                img="https://i.imgur.com/MiZpV2D.png"
                efeito={<>
                  <p>Ao conjurar uma magia que cause dano, você pode gastar <strong>1 Ação adicional</strong> e o uso da sua <strong>Arma de Sopro</strong> para infundir a magia com seu Elemento. Ao fazê-lo, todo o dano da magia é convertido para o tipo do seu Elemento.</p>
                  <p>Além disso, se a magia atingir apenas uma criatura, ela sofre <strong>+1d6 de dano elemental adicional</strong>. Se a magia causar dano em área, cada criatura atingida sofre <strong>+1 de dano elemental adicional</strong>. Ambos os valores aumentam conforme a progressão de dano da Arma de Sopro (+1d6 ou +1 a cada 2 níveis acima do 1°).</p>
                </>}
              />
              <TalentoCard
                titulo="Baforada à Queima-Roupa"
                tags="Drakan · Sopro"
                descricao="Agarrar um inimigo e respirar seu elemento diretamente nele tem uma eficiência que dispensa elegância."
                img="https://i.imgur.com/pUr1yLS.png"
                efeito={<p>Quando você usa sua Arma de Sopro enquanto mantém uma criatura na condição <strong>Grabbed</strong>, você pode optar por concentrar o sopro inteiramente nela, em vez de afetar uma área. Ao fazê-lo, a criatura sofre <strong>+2d6 de dano elemental adicional</strong> e tem uma <strong>penalidade de circunstância de −2</strong> em seu teste de resistência contra o sopro.</p>}
              />
              <TalentoCard
                titulo="Leitura de Território"
                tags="Drakan · Social"
                descricao="Dragões reconhecem hierarquia antes de processar palavras. Você entrou na sala e já está lendo quem manda e quem obedece."
                img="https://i.imgur.com/wYAnJT7.png"
                efeito={<>
                  <p>Ao observar um ambiente social por <strong>1 minuto</strong> sem ser percebido fazendo isso, faça um teste de <strong>Sociedade</strong> ou <strong>Percepção</strong> (CD determinada pelo Mestre). Em um sucesso, você identifica a figura de maior e de menor autoridade presentes na situação. Pelo restante da cena, você recebe <strong>+1 de circunstância</strong> em testes de <strong>Fazer um Pedido (Make a Request)</strong> direcionados a qualquer uma dessas duas figuras.</p>
                  <p><strong>Missão de Energia:</strong> Na primeira vez em cada período de Downtime que você utilizar as informações obtidas por Leitura de Território para garantir acesso, audiência ou favor de uma figura de autoridade que normalmente não o receberia, você recupera <strong>1 ponto de Energia</strong>.</p>
                </>}
              />
            </>,
            5: <>
              <TalentoCard
                titulo="Voo Rascunhado"
                tags="Drakan · Movimento"
                descricao="Ainda não é voo de verdade. É o reconhecimento de que o ar pode te sustentar por um instante, se você confiar nele."
                img="https://i.imgur.com/pxLntNI.png"
                efeito={<>
                  <p>Você ganha as seguintes habilidades de movimento:</p>
                  <p>(1 Ação) <em>Frequência:</em> Uma vez por rodada. Você voa. Se não possuir uma Velocidade de Voo, ganha uma <strong>Velocidade de Voo de 6 metros</strong> para este movimento. Se não estiver em solo firme ao final deste movimento, você cai.</p>
                  <p><strong>Rajada de Asas:</strong> Uma vez por dia, você pode forçar suas asas ao limite. Gaste <strong>3 Ações</strong> para voar 3 vezes consecutivas, cada uma com um bônus de circunstância de <strong>+1,5 metro (+5 pés)</strong> na Velocidade de Voo. Você ainda deve terminar o último movimento em solo firme ou cai.</p>
                </>}
              />
              <TalentoCard
                titulo="Sopro Implacável"
                tags="Drakan · Sopro"
                descricao="Seu sopro não apenas atinge. Ele fica."
                img="https://i.imgur.com/7aQcZAp.png"
                efeito={<>
                  <p><em>Pré-requisito: Hálito Elemental.</em></p>
                  <p>Sua Arma de Sopro ganha permanentemente os seguintes efeitos:</p>
                  <ul>
                    <li><strong>Persistente:</strong> Criaturas que falharem no teste de resistência sofrem <strong>Dano Persistente</strong> do seu Elemento igual a <strong>1</strong> por cada 2 dados de dano que o sopro causar, além do dano normal.</li>
                    <li><strong>Penetrante:</strong> O dano da Arma de Sopro ignora resistências numa quantidade igual à <strong>metade dos dados de dano</strong> que o sopro causar.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Baforada Analítica"
                tags="Drakan · Sopro"
                descricao="Você não apenas respira mais fundo. Você aprendeu a ocupar mais espaço e a guardar o que não usou."
                img="https://i.imgur.com/1zOP7Jf.png"
                efeito={<>
                  <p><em>Pré-requisito: Hálito Elemental.</em></p>
                  <p>Sua Arma de Sopro ganha permanentemente os seguintes efeitos:</p>
                  <ul>
                    <li><strong>Ampliada:</strong> A área do Sopro aumenta para um cone de <strong>6 metros (20 pés)</strong> ou uma linha de <strong>12 metros (40 pés)</strong>.</li>
                    <li><strong>Reserva:</strong> A Arma de Sopro ganha um uso adicional que pode ser utilizado <strong>uma vez por dia</strong>, independente da frequência normal.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Casca Reativa"
                tags="Drakan · Defesa"
                descricao="Suas escamas não apenas protegem. Elas respondem."
                img="https://i.imgur.com/TGFFoVc.png"
                efeito={<p>Sempre que uma criatura acertar você com um ataque corpo a corpo, ela sofre <strong>2 de dano do seu Elemento</strong>. Este dano aumenta em <strong>+1</strong> a cada 3 níveis acima do 5°. Contra ataques desarmados ou com armas naturais, o dano é aumentado em <strong>+1 adicional</strong>.</p>}
              />
              <TalentoCard
                titulo="Cuspir Elemento"
                tags="Drakan · Sopro"
                descricao="Nem todo sopro precisa ser uma tempestade. Às vezes basta uma faísca no lugar certo."
                img="https://i.imgur.com/1l8vZ3j.png"
                efeito={<>
                  <p><em>Pré-requisito: Hálito Elemental.</em></p>
                  <p>(1 Ação) [Flourish, Manipulação] — <em>Alcance:</em> <strong>9 metros (30 pés)</strong>. Escolha um dos seguintes modos:</p>
                  <ul>
                    <li><strong>Alvo único:</strong> Você cospe uma concentração do seu Elemento contra uma criatura visível dentro do alcance. Ela sofre dano igual à <strong>metade dos dados</strong> da sua Arma de Sopro (arredondado para baixo, mínimo 1d6), usando o mesmo tipo de save da sua Herança Dracônica e sua CD de Classe.</li>
                    <li><strong>Terreno:</strong> Você cospe o Elemento sobre uma área dentro do alcance. A área de <strong>1,5 metro (5 pés)</strong> torna-se <strong>Hazardous Terrain</strong> por <strong>1 minuto</strong>, causando 1 de dano do seu Elemento por dado que o ataque de alvo único causaria a qualquer criatura que se mova ou termine o turno nela.</li>
                  </ul>
                </>}
              />
              <TalentoCard
                titulo="Conexão Dracônica"
                tags="Drakan · Arcano"
                descricao="O Dragão que ecoa no seu sangue não é apenas origem. É uma presença que ainda responde, quando você sabe como chamá-la."
                img="https://i.imgur.com/BnoHzmG.png"
                efeito={<>
                  <p>Durante suas preparações diárias, você pode dedicar 10 minutos a uma conexão instintiva com o Dragão da sua Herança. Ao fazê-lo, escolha uma das três magias da lista correspondente abaixo. Até suas próximas preparações diárias, você pode conjurar essa magia como uma <strong>magia inata</strong>, uma vez por dia, usando sua CD de Classe. A magia é automaticamente <strong>heightened</strong> a um nível igual à metade do seu nível (arredondado para baixo, mínimo 1).</p>
                  <table>
                    <thead><tr><th>Herança</th><th>Magias</th></tr></thead>
                    <tbody>
                      <tr><td>O Corrosivo</td><td>Goblin Pox, Enfeeble, Grease</td></tr>
                      <tr><td>A Tempestade</td><td>Illusory Object, Sure Strike, Shocking Grasp</td></tr>
                      <tr><td>O Nocivo</td><td>Goblin Pox, Grease, Pass Without Trace</td></tr>
                      <tr><td>O Fornalha</td><td>Burning Hands, Fear, Command</td></tr>
                      <tr><td>O Feral</td><td>Snowball, Pass Without Trace, Sure Strike</td></tr>
                      <tr><td>O Tectônico</td><td>Pummeling Rubble, Runic Weapon, Sure Strike</td></tr>
                      <tr><td>Zhaitan</td><td>Grim Tendrils, Enfeeble, Fear</td></tr>
                      <tr><td>Mordremoth</td><td>Summon Plant or Fungus, Command, Sleep</td></tr>
                      <tr><td>Primordus</td><td>Burning Hands, Pummeling Rubble, Runic Weapon</td></tr>
                      <tr><td>Jormag</td><td>Fear, Charm, Sleep</td></tr>
                      <tr><td>Kralkatorrik</td><td>Shocking Grasp, Sure Strike, Command</td></tr>
                      <tr><td>Soo-Won</td><td>Hydraulic Push, Heal, Soothe</td></tr>
                      <tr><td>Aurene</td><td>Heal, Color Spray, Sanctuary</td></tr>
                    </tbody>
                  </table>
                </>}
              />
              <TalentoCard
                titulo="Ecos de Escamas"
                tags="Drakan · Exploração"
                descricao="O que um dragão foi não desaparece completamente. Fica impresso no material que ele deixou para trás, esperando alguém com sangue suficiente para ouvi-lo."
                img="https://i.imgur.com/OPiTiib.png"
                efeito={<>
                  <p>Ao passar <strong>10 minutos</strong> em contato direto com qualquer um dos seguintes, você experimenta um fragmento da memória mais intensa ou dos últimos momentos daquele ser ou lugar:</p>
                  <ul>
                    <li>Restos físicos (ossos, escamas, cinzas, dentes) de um Drakan ou Dragão morto há menos de um século.</li>
                    <li>Restos físicos de uma criatura com o traço do seu Elemento morta há menos de um século.</li>
                    <li>Um objeto ou local que possua o traço do seu Elemento de forma concentrada e duradoura.</li>
                  </ul>
                  <p>O Mestre determina o que é revelado e como. Esta habilidade não pode ser repetida com os mesmos restos ou local.</p>
                </>}
              />
              <TalentoCard
                titulo="Lar do Dragão"
                tags="Drakan · Exploração"
                descricao="Um dragão sem território não é um dragão. É apenas um animal perdido. Você aprendeu a diferença."
                img="https://i.imgur.com/aoD55Kz.png"
                efeito={<>
                  <p>Ao longo de <strong>1 dia inteiro</strong> de preparação, você pode marcar uma área de até <strong>1 milha</strong> ao seu redor como seu território, impregnando o ambiente com sua essência elemental através de sopro, marcas físicas e presença contínua. A área não pode já conter uma marca territorial de outro ser, nem possuir criaturas hostis ativas no momento da marcação.</p>
                  <p>Ao marcar o território, escolha uma das três sintonias abaixo. Enquanto estiver dentro do seu território, você recebe o benefício da sintonia ativa. Você pode alterar a sintonia ativa gastando <strong>1 Ação</strong> enquanto estiver no território.</p>
                  <ul>
                    <li><strong>Sintonia do Predador:</strong> +1 de circunstância em jogadas de ataque e testes de resistência.</li>
                    <li><strong>Sintonia do Vigia:</strong> +1 de circunstância em testes de perícia e de Percepção.</li>
                    <li><strong>Sintonia do Guardião:</strong> +1 de circunstância na CA e em testes de resistência.</li>
                  </ul>
                  <p>Você só pode ter um território ativo por vez. A marca se dissipa naturalmente se você ficar mais de <strong>15 dias</strong> sem retornar à área ou marcar uma outra área enquanto tiver uma ativa.</p>
                </>}
              />
              <TalentoCard
                titulo="Iniciado do Culto do Dragão"
                tags="Drakan · Raro"
                descricao="Há conhecimentos que não se encontram em livros, nem se herdam pelo sangue. Eles são transmitidos em rituais fechados, por aqueles que escolheram servir ao Dragão não por linhagem, mas por devoção. Você deu o primeiro passo nesse caminho."
                img="https://i.imgur.com/bIJJkk8.png"
                raro
                efeito={<>
                  <p><em>Pré-requisito: O personagem deve fazer parte de um Culto de adoração ao Dragão de sua Herança Dracônica. Este talento só pode ser selecionado com permissão explícita do Mestre.</em></p>
                  <p>Você aprende a primeira magia do Culto do Dragão ao qual você descende. Esta magia pode ser conjurada como <strong>magia inata</strong> uma vez por dia, usando sua CD de Classe.</p>
                  <p>As magias do Culto são poderosas além do que o corpo e a mente de um Drakan foram moldados para suportar. Cada uso cobra um <strong>preço</strong> — definido pelo Mestre de acordo com a natureza do Dragão cultuado e as circunstâncias da conjuração.</p>
                  <p>As magias de cada Culto são reveladas ao personagem durante o jogo, conforme seu envolvimento com a organização se aprofunda.</p>
                </>}
              />
            </>
          }}
        </TalentosNiveis>
      </div>
    </details>

    <h2>🧬 Heranças</h2>

    <h3>Herança Elemental</h3>
    <p>Os Drakans Elementais formam o grupo mais vasto e heterogêneo da espécie. Diferente dos Anciões, que são manifestações de uma vontade corruptora única, estes dragões evoluíram em simbiose com os ambientes naturais de Tyria. Eles são biologicamente distintos entre si: um Drakan das tempestades possui órgãos elétricos e escamas condutoras, enquanto um Drakan vital possui sangue fotossensível e sopro regenerativo. O único traço que os une é a capacidade de metabolizar magia elemental pura.</p>

    <div className="heranca-grid">
    <HerancaCard
      identificador="Preto"
      titulo="O Corrosivo"
      descricao="Habitante de pântanos fétidos. Predador de emboscada que se camufla na água estagnada. Biologia adaptada para corrosão e digestão externa."
      elemento="Ácido · Reflexo"
      sing1={<>Treinado em <strong>Furtividade (Stealth)</strong>.</>}
      sing2={<>Visão na Penumbra (<strong>Low-Light Vision</strong>). Você enxerga em condições de luz fraca como se fosse iluminação normal. Isso não lhe permite enxergar em escuridão total.</>}
      sing3={<><strong>Dissolução Cruel</strong> (1 Ação) [Drakan, Ácido] — <em>Frequência:</em> Uma vez a cada 10 minutos; <em>Alcance:</em> 9 metros. Você projeta um jato de ácido corrosivo contra um alvo visível. Ele deve fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo <strong>1d6 de dano de Ácido</strong> (+1d6 a cada 2 níveis acima do 1º). Se o alvo estiver sofrendo Dano Persistente ou estiver com a condição <strong>Sickened</strong> ou <strong>Enfeebled</strong>, o ataque causa +1 dado de dano adicional.</>}
    />

    <HerancaCard
      identificador="Azul"
      titulo="A Tempestade"
      descricao="Senhor dos ermos áridos e céus abertos. Usa eletricidade estática para caçar. Hierarquia rígida e vaidade baseada em domínio territorial."
      elemento="Elétrico · Reflexo"
      img="https://i.pinimg.com/736x/a2/23/0b/a2230b56a585377f8d3549f676df1e46.jpg"
      imgPopout="https://i.imgur.com/OImMaUt.png"
      imgPosition="center 30%"
      sing1={<>Treinado em <strong>Enganação (Deception)</strong>.</>}
      sing2={<>Voz da Miragem — Você aprende o truque mágico <em>Figment</em> como magia arcana inata, podendo lançá-lo à vontade. Ao contrário do normal, você pode conjurá-lo gastando apenas <strong>1 Ação</strong> em vez de 2.</>}
      sing3={<>
        <p><strong>Punição Trovejante</strong> (2 Ações) [Drakan, Elétrico, Arcano, Manipulate] — Você gasta o uso da sua <strong>Arma de Sopro</strong> para invocar um raio do céu. Escolha <strong>2 espaços</strong> de 1,5 metro (5 pés) visíveis dentro de <strong>18 metros</strong>, que não precisam ser adjacentes entre si. Criaturas nesses espaços devem fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo o mesmo dano que sua Arma de Sopro causaria. Cada espaço torna-se <strong>Hazardous Terrain</strong> por <strong>1 minuto</strong>. Qualquer inimigo que se mova ou termine seu turno em um desses espaços sofre <strong>1 de dano Elétrico</strong> (+1 a cada 2 níveis acima do 1°).</p>
        <p><strong>Eco da Punição</strong> (2 Ações) [Drakan, Elétrico, Arcano, Manipulate] — <em>Requisito:</em> Você possui pelo menos um espaço de Hazardous Terrain ativo criado por Punição Trovejante. Você invoca um segundo raio sobre o terreno carregado. Todas as criaturas em uma emanação de <strong>1,5 metro (5 pés)</strong> ao redor de cada espaço de Hazardous Terrain ativo devem fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo o mesmo dano que sua Arma de Sopro causaria. O Hazardous Terrain é <strong>consumido</strong> pela detonação.</p>
      </>}
      talentos={{
        1: <>
          <TalentoCard
            titulo="Flagelo Elétrico"
            tags="Drakan · A Tempestade · Elétrico"
            descricao="O relâmpago não para no primeiro alvo. Nunca parou."
            img="https://i.imgur.com/wu9seBb.png"
            efeito={<>
              <p>Você ganha a seguinte habilidade de combate:</p>
              <p>(2 Ações) <em>Frequência:</em> Uma vez por dia. Realize um Strike corpo a corpo. Este Strike conta como dois ataques para fins de <strong>penalidade de ataque múltiplo (MAP)</strong>. Em um acerto, o ataque causa <strong>+1d6 de dano Elétrico adicional</strong> (+1d6 a cada 4 níveis acima do 1°) e o uso desta habilidade é consumido.</p>
              <p>Ao acertar, um arco elétrico salta do alvo para um inimigo a até <strong>4,5 metros (15 pés)</strong> dele, e então para um terceiro inimigo a até 4,5 metros do segundo. Cada alvo do arco deve fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo dano igual ao dano Elétrico adicional do Strike.</p>
              <p>Se o Strike errar, o uso desta habilidade não é consumido. Recupera seu uso ao utilizar <strong>Inalar Elemento</strong>.</p>
            </>}
          />
          <TalentoCard
            titulo="Distração Relampejante"
            tags="Drakan · A Tempestade · Elétrico"
            descricao="A ilusão não precisa ser convincente. Às vezes, basta ser barulhenta o suficiente para que o corpo reaja antes que a mente decida."
            img="https://i.imgur.com/xZ70LhH.png"
            efeito={<>

              <p>Ao conjurar ou sustentar <em>Figment</em>, você pode canalizar uma descarga elétrica através da ilusão para criar uma distração explosiva. Esta ação possui o traço <strong>Manipulate</strong> e produz um som estrondoso audível em um raio significativo ao redor de você, à critério do Mestre.</p>
              <p>Ao utilizar desta maneira, faça um teste de <strong>Enganação</strong> contra a CD de Percepção do alvo. Em vez dos efeitos normais de Create a Diversion, aplique os seguintes resultados:</p>
              <ul>
                <li><strong>Sucesso:</strong> O alvo fica <strong>Clumsy 1</strong> por 1 rodada enquanto realiza movimentos evasivos.</li>
                <li><strong>Sucesso Crítico:</strong> O alvo fica <strong>Clumsy 2</strong> por 1 rodada.</li>
              </ul>
              <p>Independente do resultado, o alvo ganha <strong>+4 de circunstância</strong> em sua CD de Percepção contra tentativas normais de Create a Diversion pelo próximo minuto. Uma vez afetado por Distração Relampejante, o alvo fica <strong>imune</strong> a ela por <strong>24 horas</strong>.</p>
            </>}
          />
        </>,
        5: <>
          <TalentoCard
            titulo="Afinidade Condutora"
            tags="Drakan · A Tempestade · Elétrico"
            descricao="Há Drakans que percebem a eletricidade ao redor. Você a respira. O campo elétrico ao seu redor não é um sentido que você ativa, é o estado natural de quem nunca esteve realmente separado do elemento que carrega."
            img="https://i.imgur.com/R6Ebzyp.png"
            efeito={<>
              <p><em>Pré-requisito: Percepção Elemental.</em></p>
              <p>O raio de percepção do seu Elemento concedido por Percepção Elemental aumenta para <strong>36 metros</strong>.</p>
              <p>Ao detectar seu Elemento dentro deste raio, você pode absorvê-lo gastando <strong>1 Ação</strong> em vez de uma atividade de 10 minutos, sem precisar tocar a fonte. A fonte deve estar dentro do seu raio de percepção.</p>
              <p>Ao usar <strong>Punição Trovejante</strong>, você pode escolher um <strong>terceiro espaço</strong> adicional para o raio cair, seguindo as mesmas regras dos dois espaços originais.</p>
            </>}
          />
          <TalentoCard
            titulo="Domínio do Arco"
            tags="Drakan · A Tempestade · Elétrico"
            descricao="Para um Drakan da Tempestade, Electric Arc não é magia aprendida. É memória muscular. A única diferença entre você e os outros é que você descobriu que o arco não precisa parar em dois alvos."
            img="https://i.imgur.com/oCZQOWH.png"
            efeito={<>
              <p>Você aprende <strong>Electric Arc</strong> como magia arcana inata, podendo conjurá-la à vontade. Se já possuir Electric Arc, aprenda outro truque da lista arcana em vez disso.</p>
              <p>Ao conjurar Electric Arc, você pode gastar <strong>1 Ação adicional</strong> para alvejar um <strong>terceiro alvo</strong> dentro do alcance normal da magia. O terceiro alvo realiza seu próprio teste de resistência individualmente.</p>
            </>}
          />
          <TalentoCard
            titulo="Realidade Distorcida"
            tags="Drakan · A Tempestade · Social"
            descricao="Toda tempestade começa com uma faísca que ninguém vê. Você aprendeu a ser essa faísca: invisível, silenciosa, já dentro da mente de quem ainda acredita estar a salvo."
            img="https://i.imgur.com/Y7nakl2.png"
            efeito={<>
              <p>Como uma atividade que pode durar até <strong>1 dia</strong>, você conduz uma operação de desinformação, espalhando deliberadamente uma crença falsa sobre um único tópico na mente de até <strong>10 criaturas</strong> escolhidas. Para ser afetada, cada criatura deve estar carregando um objeto físico pequeno previamente marcado por você com sua essência elétrica. Você sustenta fragmentos imperceptíveis de <em>Figment</em> vinculados a esses objetos ao longo do período, ignorando o alcance normal da magia.</p>
              <p>A desinformação deve ser definida antes de iniciar a atividade e não pode abranger mais de um tópico. O Mestre pode exigir testes de <strong>Enganação</strong> contra a CD de Percepção dos alvos para determinar se a desinformação é absorvida ou detectada. Uma criatura que detecte ou seja submetida a esta habilidade fica <strong>permanentemente imune</strong> a ela.</p>
              <p><strong>Missão de Energia:</strong> Na primeira vez em cada período de Downtime que você utilizar Realidade Distorcida para espalhar uma desinformação relevante para a trama, você recupera <strong>1 ponto de Energia</strong>.</p>
            </>}
          />
        </>
      }}
    />

    <HerancaCard
      identificador="Verde"
      titulo="O Nocivo"
      descricao="Nativo de florestas densas. Estrategista paciente que usa terreno e miasmas para enfraquecer presas. Territorial e observador."
      elemento="Veneno · Fortitude"
      sing1={<>Treinado em <strong>Sociedade (Society)</strong>.</>}
      sing2={<>Pele Tóxica — Sua pele secreta toxinas que reagem ao contato físico. Sempre que uma criatura adjacente acertar você com um ataque Desarmado, ou tiver sucesso em um teste de Atletismo para aplicar <strong>Grabbed</strong> ou <strong>Shoved</strong> em você, ela sofre <strong>1 de dano de Veneno</strong> (+1 a cada 4 níveis acima do 1º, até +5 no 17º nível).</>}
      sing3={<><strong>Destilar Peçonha</strong> (Atividade de 10 Minutos) [Manipulação] — Você extrai e refina o veneno de suas próprias glândulas em frascos de vidro. <em>Frequência:</em> Até <strong>2 doses por dia</strong>; as doses expiram em <strong>24 horas</strong>. O veneno produzido é do tipo <strong>Injury</strong>. Aplicar o veneno a uma arma ou munição requer <strong>1 Ação</strong> [Manipulação]. A próxima vez que a arma acertar, o alvo deve fazer um teste de <strong>Fortitude</strong> contra sua CD de Classe: em uma <strong>falha</strong>, ele sofre <strong>1d6 de dano de Veneno</strong> e <strong>1 de dano Persistente de Veneno</strong> (+1d6 inicial e +1 persistente a cada 2 níveis acima do 1º); em <strong>sucesso crítico</strong>, não sofre efeito algum; em <strong>falha crítica</strong>, o dano inicial é dobrado.</>}
    />

    <HerancaCard
      identificador="Vermelho"
      titulo="O Fornalha"
      descricao="Predador alfa das montanhas. Metabolismo exige calor constante, temperamento agressivo e dominador. Força bruta é sua única lei."
      elemento="Fogo · Reflexo"
      sing1={<>Treinado em <strong>Intimidação (Intimidation)</strong>.</>}
      sing2={<>
        <p>Tirania Ardente — Sua agressividade incendiária impõe obediência pelo terror. Sempre que você causar dano de Fogo a um alvo durante o turno atual, você ganha <strong>+1 de circunstância</strong> em testes de Intimidação para usar Demoralize contra esse alvo neste mesmo turno.</p>
        <p>Rugido Universal — Ao usar Demoralize contra um alvo que sofreu seu dano de Fogo neste turno, você ignora a penalidade de <strong>−4</strong> normalmente imposta por não compartilhar um idioma com o alvo.</p>
      </>}
      sing3={<>
        <p><strong>Napalm:</strong> Ao usar sua Arma de Sopro, ela adquire uma consistência viscosa e incendiária. Criaturas que <strong>falharem</strong> no teste de resistência também sofrem <strong>Dano Persistente de Fogo</strong> igual à metade do seu nível (mínimo 1), além do dano normal.</p>
        <p><strong>Incinerar</strong> (1 Ação) [Drakan, Fogo] — <em>Frequência:</em> Uma vez por dia; <em>Alcance:</em> 9 metros. Você concentra sua energia sobre as chamas que já consomem o inimigo, provocando uma combustão explosiva. Escolha um inimigo com Dano Persistente de Fogo dentro do alcance: ele sofre <strong>1d6 de dano de Fogo imediato</strong> (+1d6 a cada 2 níveis acima do 1º), e o Dano Persistente de Fogo é então <strong>encerrado</strong>. Se o alvo estiver com a condição <strong>Frightened</strong>, esse dano é dobrado.</p>
      </>}
    />

    <HerancaCard
      identificador="Branco"
      titulo="O Feral"
      descricao="Nômade das tundras gélidas. Solitário e movido por instinto puro. Memória eidética para rancores e presas que escaparam."
      elemento="Frio · Fortitude"
      sing1={<>Treinado em <strong>Sobrevivência (Survival)</strong>.</>}
      sing2={<>Faro de Sangue — Você ganha o sentido <strong>Olfato (Scent) Impreciso</strong> com alcance de <strong>9 metros</strong>, permitindo detectar a localização aproximada de criaturas invisíveis ou ocultas pelo odor. Você também ganha <strong>+1 de circunstância</strong> em testes de Percepção ao procurar ou rastrear ativamente criaturas usando o faro.</>}
      sing3={<>
        <p><strong>Sopro Congelante:</strong> Ao usar sua Arma de Sopro, o ar congelante acumula gelo nas extremidades dos alvos. Criaturas que <strong>falharem</strong> no teste de resistência sofrem uma penalidade de <strong>−1,5 metro (−5 pés)</strong> em todos os seus deslocamentos por <strong>1 rodada</strong>. Criaturas que <strong>falharem criticamente</strong> ficam <strong>Immobilized</strong> até o final de seu próximo turno (podendo escapar com uma ação <strong>Escape</strong>).</p>
        <p><strong>Quebrar o Gelo</strong> (1 Ação) [Drakan, Frio] — <em>Frequência:</em> Uma vez por dia. <em>Requisito:</em> O alvo possui o deslocamento reduzido pelo Sopro Congelante ou está <strong>Immobilized</strong>. Você golpeia com brutalidade para estilhaçar o gelo que prende seu inimigo, amplificando o trauma pelo impacto. Realize um Strike: em um <strong>acerto</strong>, o ataque causa o dano normal da arma acrescido de <strong>1d6 de dano de Frio</strong> (+1d6 a cada 4 níveis acima do 1º).</p>
      </>}
    />

    <HerancaCard
      identificador="Latão"
      titulo="O Tectônico"
      descricao="Habita cavernas profundas. Corpo coberto por placas grossas que lembram pedra polida. Pesado e brutal, não voa bem, domina o combate terrestre com vibração e força bruta."
      elemento="Sônico · Fortitude"
      sing1={<>Treinado em <strong>Atletismo (Athletics)</strong>.</>}
      sing2={<>Pulso Sísmico (1 Ação) [Drakan, Arcano] — <em>Frequência:</em> Uma vez a cada 10 minutos. Você pressiona as mãos contra o solo e emite uma onda de vibração sutil. Por <strong>1 rodada</strong>, você ganha <strong>Sentido Sísmico (Impreciso)</strong> com alcance de <strong>18 metros</strong>, detectando qualquer criatura em contato com o solo, mesmo através de paredes.</>}
      sing3={<>
        <p><strong>Onda de Choque:</strong> Ao usar sua Arma de Sopro, ela emite uma concussão sônica devastadora que <strong>ignora a Dureza</strong> de objetos. Criaturas que <strong>falharem</strong> no teste de resistência são <strong>empurradas 1,5 metro (5 pés)</strong> na direção oposta a você. Criaturas que <strong>falharem criticamente</strong> são empurradas <strong>3 metros (10 pés)</strong> e ficam <strong>Prone</strong>.</p>
        <p><strong>Punho Tectônico</strong> (1 Ação) [Drakan, Sônico] — <em>Frequência:</em> Uma vez a cada 1 hora. Você carrega seu punho com vibrações sísmicas e desfere um golpe devastador. Realize um Strike Desarmado especial que causa <strong>1d6 de dano de Concussão + 1d6 de dano Sônico</strong> (+1d6 de ambos os tipos a cada 2 níveis acima do 1º). Em um <strong>acerto</strong>, o alvo é empurrado <strong>1,5 metro (5 pés)</strong>; em um <strong>acerto crítico</strong>, é empurrado <strong>3 metros (10 pés)</strong>. Este ataque beneficia-se de Handwraps of Mighty Blows e de todos os bônus aplicáveis a ataques desarmados.</p>
      </>}
    />
    </div>

    <h3>Herança Primordial</h3>
    <p>Os Drakans Primordiais são anomalias biológicas, concebidos a partir da energia corruptora dos Dragões Anciões (Elder Dragons). Seu poder transcende a manipulação elemental; ele distorce a realidade e a própria essência da magia e da vida. Cada Primordial é um condutor de uma força cataclísmica singular, manifestando habilidades que causam mutação, controle mental, cura negativa ou alteração permanente do terreno, representando uma ameaça que desafia a ordem biológica de Tyria.</p>

    <div className="heranca-grid">
    <HerancaCard
      identificador="Primordial"
      titulo="Zhaitan"
      descricao="Senhor de Orr. Representa a morte inevitável e a estagnação. Seus servos não são apenas mortos, são distorções da vida."
      elemento="Vazio · Fortitude"
      sing1={<>Treinado em <strong>Religião (Religion)</strong>.</>}
      sing2={<>
        <p>Morto-Vivo Supremo — Você ganha o traço <strong>Void Healing</strong>: efeitos de Energia Positiva (Vitalidade) que normalmente curariam você passam a causar dano; efeitos de Energia Negativa (Vazio) que normalmente causariam dano passam a curar você.</p>
        <p>Escamas Profanas — Sua Resistência a Vazio (concedida por Escamas Protetoras) aplica-se também ao dano de <strong>Energia Positiva (Vitalidade)</strong>, tornando-o resistente à principal vulnerabilidade dos mortos-vivos.</p>
      </>}
      sing3={<>
        <p><strong>Colheita Sinistra</strong> (Reação) [Drakan, Vazio] — <em>Frequência:</em> Uma vez a cada 10 minutos. <em>Gatilho:</em> Um inimigo é reduzido a 0 pontos de vida dentro de <strong>18 metros</strong> de você. Você drena a essência vital residual do inimigo no momento de sua morte, recuperando <strong>(1 + seu nível) Pontos de Vida</strong> e ganhando <strong>(1 + seu nível) Pontos de Vida Temporários</strong> que duram <strong>1 minuto</strong>.</p>
        <p><strong>Marionete Macabra</strong> (1 Ação) [Drakan, Vazio, Necromancia, Flourish] — <em>Alvo:</em> Um cadáver de tamanho Médio ou menor dentro de <strong>9 metros</strong>. Você anima brevemente um cadáver próximo pelo impulso necromântico de Zhaitan. O corpo se move até <strong>4,5 metros</strong> e realiza um <strong>Strike</strong> contra uma criatura adjacente, usando sua CD de Classe. Esta ação aplica e é afetada pela <strong>penalidade de ataque múltiplo (MAP)</strong> do seu turno. O corpo cai inanimado imediatamente após o ataque. <em>Dano:</em> 1d6 de Concussão para cadáveres Médios, ou 1d8 para cadáveres Grandes (+1 dado de dano a cada 3 níveis acima do 1º). Uma criatura pode gastar uma ação <strong>Interact</strong> para desmembrar um cadáver e torná-lo inutilizável por esta habilidade.</p>
      </>}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Mordremoth"
      descricao="Dragão da mente e das plantas. Acredita que a individualidade é ineficiente; todos devem servir à colmeia."
      elemento="Veneno · Fortitude"
      sing1={<>Treinado em <strong>Natureza (Nature)</strong>.</>}
      sing2={<>Consciência de Colmeia — Sua mente está sincronizada ao fluxo vital ao seu redor, percebendo o ambiente de forma instintiva e difusa. Você não pode ser <strong>Flanked</strong> por criaturas que sejam 2 ou mais níveis abaixo do seu.</>}
      sing3={<>
        <p><strong>Raízes do Pesadelo:</strong> Ao usar sua Arma de Sopro, a área afetada é encoberta por raízes e vinhas espinhosas por <strong>1 minuto</strong>, tornando-se <strong>Hazardous Terrain</strong>. Qualquer criatura (aliada ou inimiga) que se mova pela área ou termine seu turno nela sofre <strong>1 de dano Perfurante</strong> (+1 a cada 2 níveis acima do 1º). Você pode gastar <strong>1 Ação</strong> para dissipar o efeito prematuramente.</p>
        <p><strong>Estrangular</strong> (2 Ações) [Drakan, Vegetal] — <em>Requisito:</em> Você possui uma área de Raízes do Pesadelo ativa. Você ordena as vinhas a brotarem e envolverem os inimigos. Todas as criaturas dentro da área de Raízes do Pesadelo devem fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo <strong>3d4 de dano de Concussão</strong> (+3d4 a cada 4 níveis acima do 1º). Em uma <strong>falha</strong>, o alvo também tem seu deslocamento reduzido em <strong>1,5 metro (5 pés)</strong> por 1 rodada. Em uma <strong>falha crítica</strong>, o alvo fica <strong>Grabbed</strong> pelas vinhas até conseguir se libertar com uma ação <strong>Escape</strong>.</p>
      </>}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Primordus"
      descricao="O primeiro dragão. Habita as profundezas da terra. Odeia a vida biológica e busca purificar o mundo transformando tudo em pedra e magma."
      elemento="Fogo · Reflexo"
      img="https://i.imgur.com/AttQm1D.png"
      imgPopout="https://d1vzi28wh99zvq.cloudfront.net/images/15661/408368.jpg"
      sing1={<>Treinado em <strong>Atletismo (Athletics)</strong>.</>}
      sing2={<>Escavador de Magma (1 Ação) [Drakan, Fogo] — <em>Frequência:</em> Uma vez por dia. Você superaquece suas garras e corpo até temperaturas extremas. Por <strong>10 minutos</strong>, você ganha <strong>Velocidade de Escavar (Burrow)</strong> de <strong>3 metros</strong>, capaz de atravessar <strong>Rocha Sólida</strong>. Ao passar, você deixa um túnel de pedra derretida.</>}
      sing3={<>
        <p><strong>Terra Queimada:</strong> Ao usar sua Arma de Sopro, o magma residual transforma a área afetada em <strong>Hazardous Terrain</strong> por <strong>1 minuto</strong>. Qualquer inimigo que se mova pela área ou termine seu turno nela sofre <strong>1 de dano de Fogo</strong> (+1 a cada 2 níveis acima do 1º).</p>
        <p><strong>Erupção</strong> (2 Ações) [Drakan, Fogo] — <em>Frequência:</em> Uma vez por dia. <em>Requisito:</em> Você possui uma área de Terra Queimada ativa. Você detona a energia do magma represado no solo, provocando uma erupção localizada. Todas as criaturas dentro da área de Terra Queimada devem fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo o mesmo dano que sua Arma de Sopro causaria. A Terra Queimada é então <strong>consumida</strong> pela erupção.</p>
      </>}
      talentos={{
        1: <>
          <TalentoCard
            titulo="Aspecto Vulcânico"
            tags="Drakan · Primordus · Fogo"
            descricao="Há um estado entre carne e magma que você aprendeu a alcançar. Breve, instável e extremamente quente."
            img="https://i.imgur.com/FOWDm9u.png"
            efeito={<>
              <p>Você ganha a seguinte habilidade:</p>
              <p>(1 Ação) <em>Frequência:</em> Uma vez por dia. Você assume sua forma vulcânica até o final do seu próximo turno. Durante este período:</p>
              <ul>
                <li>O primeiro ataque desarmado que acertar causa <strong>+1 dado de dano de Fogo</strong> adicional.</li>
                <li>Sua resistência a Fogo é tratada como <strong>imunidade</strong> — qualquer quantidade de dano de Fogo é ignorada.</li>
                <li>Você pode se mover sobre terreno de lava como se fosse terreno normal e enxerga através dela como se fosse translúcida.</li>
                <li>Se você sofrer dano de Frio ou dano com o traço Água durante este período, a forma é finalizada imediatamente e você fica <strong>Slowed 1</strong> até o final do seu próximo turno.</li>
              </ul>
            </>}
          />
          <TalentoCard
            titulo="Fissura"
            tags="Drakan · Primordus · Fogo"
            descricao="Uma rachadura no granito revela o que estava represado. Um golpe forte o suficiente faz o mesmo com você."
            img="https://i.imgur.com/BpESxdP.png"
            efeito={<>
              <p>Você ganha a seguinte reação:</p>
              <p>(Reação) <em>Frequência:</em> Uma vez por dia. <em>Gatilho:</em> Você sofre um acerto crítico de um ataque corpo a corpo. Você libera uma erupção de calor contido. Todas as criaturas em uma emanação de <strong>1,5 metro (5 pés)</strong> ao seu redor devem fazer um teste de <strong>Reflexos Básico</strong> contra sua CD de Classe, sofrendo <strong>1d6 de dano de Fogo</strong> (+1d6 a cada 2 níveis acima do 1°).</p>
              <p>Usar <strong>Inalar Elemento</strong> também restaura o uso desta habilidade.</p>
            </>}
          />
        </>,
        5: <>
          <TalentoCard
            titulo="Escória Coagulada"
            tags="Drakan · Primordus · Fogo"
            descricao="O magma que você deixa para trás não some. Ele esfria lentamente, criando uma crosta que agarra e impede quem tenta cruzá-la."
            img="https://i.imgur.com/QjyiwKk.png"
            efeito={<>

              <p>Sua Terra Queimada passa a ser tratada como <strong>Difficult Terrain</strong>, além de <strong>Hazardous Terrain</strong>.</p>
              <p>Além disso, criaturas que falharem no teste de resistência de Erupção têm sua movimentação reduzida em <strong>1,5 metro (5 pés)</strong> até o final do seu próximo turno. Em uma <strong>falha crítica</strong>, essa redução aumenta para <strong>4,5 metros (15 pés)</strong>.</p>
            </>}
          />
          <TalentoCard
            titulo="Núcleo Turbulento"
            tags="Drakan · Primordus · Fogo"
            descricao="A forma vulcânica que você alcança é mais instável e mais violenta do que parecia à primeira vista. O núcleo não escolhe onde queima."
            img="https://i.imgur.com/qiB3JdK.png"
            efeito={<>
              <p><em>Pré-requisito: Aspecto Vulcânico.</em></p>
              <p>Enquanto Aspecto Vulcânico estiver ativo, os seguintes aprimoramentos se aplicam:</p>
              <ul>
                <li>O dado de dano de Fogo adicional concedido pelo Aspecto Vulcânico se estende a <strong>todos os ataques</strong> pelo restante da forma, não apenas ao primeiro. Isso inclui ataques com armas que o Drakan estiver empunhando.</li>
                <li>Se você possuir o talento <strong>Fissura</strong>, pode ativá-la ao sofrer dano de Frio ou dano com o traço Água enquanto estiver na forma vulcânica. Usar Fissura desta maneira <strong>não consome</strong> seu uso padrão diário dela.</li>
              </ul>
            </>}
          />
          <TalentoCard
            titulo="Memória da Terra"
            tags="Drakan · Primordus · Exploração"
            descricao="Primordus existe há tempo suficiente para sentir cada fissura na crosta do mundo. Parte disso chegou até você."
            img="https://i.imgur.com/LrbEdDc.png"
            efeito={<>

              <p>Este talento possui dois usos distintos, cada um com frequência de <strong>uma vez por dia</strong>:</p>
              <p><strong>Sentido Sísmico</strong> (2 Ações) — Você pressiona as mãos contra o solo e sintoniza sua percepção com as vibrações da terra. Por <strong>1 hora</strong>, você ganha <strong>Tremorsense Impreciso</strong> de <strong>9 metros (30 pés)</strong>. Este sentido detecta apenas criaturas em contato com o mesmo solo que você e somente se estiverem em movimento.</p>
              <p><strong>Leitura do Solo</strong> (Atividade de 10 minutos) — Você mantém contato prolongado com o solo natural e absorve o histórico de vibrações acumulado na terra ao redor. Você percebe a passagem de criaturas e eventos ocorridos na área nas <strong>últimas 24 horas</strong>, detectando presença, direção aproximada e peso relativo das criaturas que passaram. Este sentido é impreciso: revela que algo passou e de onde veio, mas não identidade, número exato ou intenção. O Mestre determina o nível de detalhe disponível conforme o ambiente.</p>
            </>}
          />
        </>
      }}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Jormag"
      descricao="Dragão dos segredos e da tentação. Não congela apenas corpos, mas mentes. Seus servos não são escravos, mas fanáticos convertidos por promessas de poder."
      elemento="Mental · Vontade"
      sing1={<>Treinado em <strong>Diplomacia (Diplomacy)</strong>.</>}
      sing2={<>Sussurros no Vento — Você aprende o truque mágico <strong>Message</strong> como magia arcana inata, podendo lançá-lo à vontade. Você pode enviar mensagens sussurradas a alvos distantes com precisão sobrenatural.</>}
      sing3={<>
        <p><strong>Foco Psíquico:</strong> Ao usar sua Arma de Sopro, você pode optar por concentrar toda a energia em um <strong>único alvo</strong> dentro de <strong>9 metros</strong>, em vez de afetar uma área. Ao fazê-lo, o tipo de dado de dano do Sopro aumenta para <strong>d10</strong>.</p>
        <p><strong>Palavras do Pavor</strong> (1 Ação) [Drakan, Auditório, Mental, Medo] — <em>Frequência:</em> Uma vez por uso de Sopro do Dragão. <em>Requisito:</em> Você usou sua Arma de Sopro neste turno ou no turno anterior (esta janela expira ao final do seu próximo turno). Você profere palavras carregadas da vontade gélida de Jormag, penetrando diretamente na mente de um inimigo que possa ouvi-lo. O alvo deve fazer um teste de <strong>Will Básico</strong> contra sua CD de Classe, sofrendo <strong>1d10 de dano Mental</strong>. Além do dano padrão do teste: em uma <strong>falha</strong>, o alvo fica <strong>Frightened 1</strong>; em uma <strong>falha crítica</strong>, fica <strong>Frightened 2</strong>.</p>
      </>}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Kralkatorrik"
      descricao="Sua energia distorce o espaço e a matéria. Sua presença cria tempestades de raios roxos e cristaliza a terra e seres vivos em uma tentativa de ordem cósmica."
      elemento="Elétrico · Reflexo"
      sing1={<>Treinado em <strong>Ocultismo (Occultism)</strong>.</>}
      sing2={<>Pele de Cristal — Suas escamas possuem propriedades cristalinas que refletem e dispersam projéteis. Você ganha <strong>+1 de circunstância</strong> à sua CA contra ataques à distância não mágicos.</>}
      sing3={<>
        <p><strong>Marca do Dragão:</strong> Ao usar sua Arma de Sopro, você impregna os alvos com resíduos de cristal que restringem seus movimentos. Criaturas que <strong>falharem</strong> no teste de resistência ficam <strong>Clumsy 1</strong>; criaturas que <strong>falharem criticamente</strong> ficam <strong>Clumsy 2</strong>. O alvo pode gastar <strong>1 Ação</strong> [Manipulação] para remover a condição <strong>Clumsy 1</strong>; remover <strong>Clumsy 2</strong> exige <strong>2 Ações</strong> [Manipulação], que podem ser divididas em turnos diferentes.</p>
        <p><strong>Ressonância</strong> (1 Ação) [Drakan, Elétrico] — <em>Alcance:</em> 9 metros. Você emite uma frequência que detona os cristais impregnados nos inimigos dentro do alcance. Alvos com <strong>Clumsy 1</strong> sofrem <strong>1d6 de dano Cortante + 1d6 de dano Elétrico</strong> (+1d6 de cada a cada 4 níveis acima do 1º). Alvos com <strong>Clumsy 2</strong> sofrem <strong>1d10 de dano Cortante + 1d10 de dano Elétrico</strong> (+1d10 de cada a cada 3 níveis acima do 1º). Detonar os cristais <strong>remove</strong> a condição <strong>Clumsy</strong> aplicada pela Marca do Dragão.</p>
      </>}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Soo-Won"
      descricao="A dragoa da água e da magia pura. Fluída, protetora e a origem de toda a vida em Tyria, mas capaz de fúria maremotriz."
      elemento="Água/Concussão · Reflexo"
      sing1={<>Treinado em <strong>Arcanismo (Arcana)</strong>.</>}
      sing2={<>Corrente de Cura — Você ganha <strong>+1</strong> de bônus de status em todos os Pontos de Vida que você restaura a outras criaturas (não a si mesmo). Este bônus aumenta para <strong>+2</strong> no 5º nível, <strong>+3</strong> no 10º, <strong>+4</strong> no 15º e <strong>+5</strong> no 20º nível.</>}
      sing3={<>
        <p><strong>Sopro da Vida:</strong> Sua Arma de Sopro sempre possui o traço <strong>Água</strong>, independentemente do seu dano elemental. Ao usar o Sopro, para cada criatura dentro da área você deve declarar se ela é um <strong>alvo hostil</strong> ou um <strong>alvo amistoso</strong>: alvos hostis sofrem o dano normalmente; alvos amistosos são <strong>curados</strong> pela mesma quantidade de Pontos de Vida que o dano causaria, sem nenhum teste de resistência.</p>
        <p><strong>Chuva Purificadora</strong> (2 Ações) [Drakan, Água, Concentração] — <em>Frequência:</em> Uma vez por dia. Você invoca uma chuva sagrada em uma <strong>emanação de 9 metros</strong> ao seu redor, que dura até <strong>1 minuto</strong>. Você pode gastar <strong>1 Ação</strong> no início de cada turno para sustentar o efeito (Sustain). Enquanto ativa: aliados dentro da área curam <strong>1 + metade do seu nível (mínimo 1) Pontos de Vida</strong> a cada Sustain; inimigos dentro da área ganham <strong>Fraqueza ao dano com o traço Água</strong> em quantidade igual ao valor de cura enquanto permanecerem na chuva.</p>
      </>}
    />

    <HerancaCard
      identificador="Primordial"
      titulo="Aurene"
      descricao="Neta de Kralkatorrik e herdeira do equilíbrio. Representa a luz, a esperança e a união de todas as magias."
      elemento="Vitalidade · Vontade"
      img="https://i.imgur.com/feIwZvN.png"
      imgPopout="https://i.imgur.com/k5cpSjr.png"
      sing1={<>Treinado em <strong>Diplomacia (Diplomacy)</strong>.</>}
      sing2={<>Luz Purificadora (1 Ação) [Drakan, Luz] — <em>Frequência:</em> Uma vez a cada 1 hora. Você irradia um pulso de luz restauradora de Aurene. Escolha você mesmo ou um aliado dentro de <strong>9 metros</strong>: reduza em <strong>1</strong> o valor de uma das seguintes condições no alvo: <strong>Frightened</strong>, <strong>Sickened</strong>, <strong>Clumsy</strong>, <strong>Enfeebled</strong> ou <strong>Stupefied</strong>. Se a condição alvo tiver duração superior a <strong>1 dia</strong>, você deve realizar um teste de <strong>Counteract</strong>. Em um sucesso, a condição é reduzida normalmente; em uma falha, a condição não é reduzida e Luz Purificadora fica indisponível até suas próximas preparações diárias.</>}
      sing3={<>
        <p><strong>Luz da Alvorada:</strong> Ao usar sua Arma de Sopro, você pode optar por converter sua energia em luz prismática. Ao fazê-lo, o Sopro causa dano de Vitalidade normalmente, mas criaturas <strong>vivas</strong> na área recebem <strong>Pontos de Vida Temporários</strong> iguais ao dano que teriam sofrido em vez de sofrerem dano (esses PVTs duram <strong>1 minuto</strong>).</p>
        <p><strong>Ascensão</strong> (1 Ação) [Drakan, Luz] — <em>Frequência:</em> Uma vez por dia. <em>Requisito:</em> Você usou sua Arma de Sopro neste turno ou no turno anterior. Você libera um flash de luz prismática em uma <strong>emanação de 4,5 metros (15 pés)</strong>. <strong>Inimigos</strong> na área devem fazer um teste de <strong>Fortitude</strong> contra sua CD de Classe: em uma <strong>falha</strong>, ficam <strong>Dazzled</strong> por <strong>1 rodada</strong>; em uma <strong>falha crítica</strong>, ficam <strong>Blinded</strong> por <strong>1 rodada</strong> e, em seguida, <strong>Dazzled</strong> por <strong>1 rodada</strong>. <strong>Aliados</strong> na área (e você mesmo) recebem <strong>1d6 Pontos de Vida Temporários</strong> (+1d6 a cada 2 níveis acima do 1º), que duram <strong>1 minuto</strong>.</p>
      </>}
      talentos={{
        1: <>
          <TalentoCard
            titulo="Resquício de um Milagre"
            tags="Drakan · Aurene · Luz"
            descricao="Aurene foi a prova de que um Dragão Ancião podia escolher diferente. Você carrega um eco disso: a capacidade de encontrar quem está se perdendo e, por um instante, puxá-lo de volta."
            img="https://i.imgur.com/S28Ybus.png"
            efeito={<>
              <p>Você ganha a seguinte habilidade:</p>
              <p>(1 Ação) <em>Frequência:</em> Uma vez por dia. Você percebe instintivamente qual é a criatura neutra ou aliada com menos Pontos de Vida em uma emanação de <strong>9 metros</strong> ao seu redor. Esta identificação é automática e não exige teste. Você mesmo não pode ser o alvo desta identificação.</p>
              <p>Após usar esta habilidade, você pode optar por gastar <strong>2 Ações adicionais</strong> e o uso da sua <strong>Arma de Sopro</strong> para canalizar sua energia dracônica diretamente na criatura identificada. Ao fazê-lo, ela recupera Pontos de Vida iguais ao <strong>dano máximo possível</strong> que sua Arma de Sopro causaria — trate todos os dados como resultado máximo, sem rolar.</p>
            </>}
          />
          <TalentoCard
            titulo="Ressonância de Esperança"
            tags="Drakan · Aurene · Luz"
            descricao="A energia que você transmite não desaparece quando a cura termina. Parte dela fica, como uma camada invisível entre a criatura e o que quer que venha depois."
            img="https://i.imgur.com/xANlHTw.png"
            efeito={<p>Uma vez por turno, ao curar uma ou mais criaturas por qualquer meio, você pode escolher uma delas para reverberar a energia positiva. Por <strong>1 rodada</strong>, essa criatura ganha <strong>resistência 1 a todos os tipos de dano</strong>. Essa resistência aumenta em <strong>+1</strong> para cada 5 níveis que você possui.</p>}
          />
        </>,
        5: <>
          <TalentoCard
            titulo="Sacrifício Protetor"
            tags="Drakan · Aurene · Luz"
            descricao="A luz de Aurene não se limita a curar o que já foi ferido. Quando necessário, ela se interpõe, recebendo o golpe que era destinado a outro."
            img="https://i.imgur.com/3lUZHG0.png"
            efeito={<>
              <p>Você ganha a seguinte reação:</p>
              <p>(Reação) <em>Gatilho:</em> Um aliado a até <strong>9 metros</strong> de você seria atingido por um ataque ou precisaria fazer um teste de Reflexos. Você projeta um véu de luz prismática sobre o aliado. Ele recebe <strong>+2 de circunstância na CA</strong> contra aquele ataque ou <strong>+2 de circunstância no teste de Reflexos</strong>, e ganha <strong>Pontos de Vida Temporários</strong> iguais ao seu nível, que duram <strong>1 minuto</strong> ou até você usar esta reação novamente.</p>
              <p>Até o início do seu próximo turno, você fica <strong>Off-Guard</strong>, pois desviou sua própria bênção para o aliado. Após usar esta reação, você deve gastar <strong>1 Ação</strong> em um turno subsequente para reativá-la antes de poder usá-la novamente.</p>
            </>}
          />
          <TalentoCard
            titulo="Salvação"
            tags="Drakan · Aurene · Luz"
            descricao="Há um instante entre a queda e a morte em que tudo ainda pode ser revertido. Você aprendeu a alcançar esse instante e a pagar o preço por ele."
            img="https://i.imgur.com/Vn3GWAj.png"
            efeito={<>
              <p>Você ganha a seguinte reação:</p>
              <p>(Reação) <em>Frequência:</em> Uma vez por dia. <em>Gatilho:</em> Um aliado a até <strong>18 metros (60 pés)</strong> de você cai a <strong>0 Pontos de Vida</strong>. Você se desloca instantaneamente para um espaço desocupado adjacente ao aliado, surgindo em um lampejo de luz prismática. O aliado recupera <strong>3d6 Pontos de Vida</strong> (+1d6 a cada 2 níveis acima do 5°) e não ganha a condição <strong>Wounded</strong> por ter caído.</p>
              <p>Você assume o peso dessa quase-morte em seu lugar: você ganha a condição <strong>Wounded 1</strong>, ou aumenta o valor da sua condição Wounded em <strong>1</strong> se já a possuir.</p>
            </>}
          />
          <TalentoCard
            titulo="Graça Vagante"
            tags="Drakan · Aurene · Exploração"
            descricao="A bondade de Aurene não fica presa a um corpo. Parte dela se solta e vagueia pelo mundo, atraída por aquilo que pulsa mais forte nos corações ao redor, levando de volta a quem a enviou aquilo que encontrou."
            img="https://i.imgur.com/x0QyOfP.png"
            efeito={<>

              <p>Você ganha os serviços de uma <strong>Luzéola-errante</strong>, uma pequena criatura espiritual de luz, etérea e angelical, invisível para todos exceto você. Uma vez por dia, você pode invocá-la por meio de um procedimento de <strong>10 minutos</strong>.</p>
              <p>A Luzéola-errante é atraída por sentimentos intensos. Ao invocá-la, escolha um dos seguintes sentimentos para que ela busque:</p>
              <ul>
                <li><strong>Positivos:</strong> Alegria, Afeto, Esperança.</li>
                <li><strong>Negativos:</strong> Medo, Raiva, Sofrimento.</li>
              </ul>
              <p>Pela próxima <strong>hora</strong>, a Luzéola-errante vagueia por uma área de até <strong>1 milha</strong> de diâmetro ao redor do ponto de invocação, procurando pela manifestação mais intensa do sentimento escolhido. Caso encontre, ela busca compreender sua origem e retorna a você trazendo o que descobriu sobre a causa daquele sentimento. O Mestre pode exigir um teste apropriado para determinar o sucesso e o nível de detalhe da busca, e pode ajustar a área conforme a densidade do ambiente.</p>
            </>}
          />
        </>
      }}
    />
    </div>
  </>;
}

function Quaggan() {
  return <>
    <Stats tamanho="0,60–1,00m (Pequeno)" idade="100–150 anos" pv="6" habilidades="Carisma, Constituição + 1 livre. Penalidade em Força" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Encanto Desarmante [Quaggan, Emotion, Mental]</h3>
    <ul>
      <li>+1 circunstancial em Diplomacia (Make a Request e Make an Impression).</li>
      <li>Falha Crítica em Request/Make Impression = apenas Falha. Criaturas ficam confusas em vez de hostis.</li>
    </ul>
    <h3>A Ruptura [Quaggan, Metamorfose, Primal]</h3>
    <p>Reação. Gatilho: sofre dano com PV abaixo de 50% (req: não Fatigado). Entra em metamorfose violenta:</p>
    <ul>
      <li><strong>Fúria Espiritual:</strong> Usa Carisma no lugar de Força para ataques corpo a corpo, dano e Atletismo.</li>
      <li><strong>Mandíbula do Abismo:</strong> Ataque desarmado de Mordida (1d10 Perfurante, traços Grapple e Desarmado). Progride automaticamente: +1 Striking nível 2, +2 nível 10, +3 nível 16.</li>
      <li><strong>Vigor da Fúria:</strong> PV Temporários = 2× nível + Carisma.</li>
      <li><strong>Instinto Assassino:</strong> Não pode usar ações de Concentração ou Destreza/Carisma (exceto para atacar). Deve se mover em direção ao inimigo mais próximo e atacar. Sem inimigos: ataca criatura mais próxima (incluindo aliados).</li>
      <li><strong>Encerrar:</strong> Ao fim de cada turno, teste de Vontade (CD Padrão do nível; CD Muito Fácil sem inimigos visíveis). Sucesso Crítico: encerra; Sucesso: encerra mas Stunned 2; Falha: continua. Causa dano à Sanidade.</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Tocado pelas Fadas:</strong> <em>Aura da Inocência</em> (Reação): ao ser atacado corpo a corpo, alvo faz Vontade (CD Classe/Magia); Falha Crítica = ataque é perdido. <em>Moon Blessing</em> (2 ações, 2x/dia): concede Ponto Heroico temporário a aliado adjacente (some em 1 minuto).</li>
      <li><strong>Verdejante:</strong> <em>Sementes da Vida:</em> 4 sementes/dia; ao ser consumidas: cura 1d4 PV + Resistência a Veneno 2 por 1 hora (escala +1d4/+1 nos níveis 5, 10, 15, 20). <em>Fotossíntese Explosiva</em> (2 ações, 1x/dia, req. vegetação/sol): cura 2d8 em si mesmo ou metade em emanação de 15 pés (+1d8/2 níveis); área curada fica Terreno Difícil por 1 minuto para não-curados.</li>
      <li><strong>Habitante das Profundezas:</strong> Swim Speed 7,5m; respira ar e água. <em>Vórtex Aquático</em> (2 ações, 1x/10min): Linha de 15 pés, 1d6 Concussão (Reflexo Básico); falha = Prone; +1d6/2 níveis. Submerso ou adjacente a água: linha 30 pés e dado d8.</li>
      <li><strong>Tecelão do Céu:</strong> <em>Salto da Águia</em> (1–3 ações, 1x/10min): Fly Speed = velocidade em terra; cai ao fim do turno se não em solo sólido. <em>Queda Suave</em> (Reação): trata queda como 100 pés menor; se reduzir a 0, aterrissa de pé sem dano.</li>
      <li><strong>Portador da Praga:</strong> PV de Ancestralidade sobe para 8. Resistência a Veneno = metade do nível. <em>Espinhos Vingativos</em> (Reação): atacante desarmado/adjacente faz Fortitude; Falha = 1d6 Veneno (+1d6 nos níveis 5, 9, 13, 17). <em>Disparo de Bile</em> (1 ação): ataque à distância de 30 pés, 1d6 Veneno; requer ação Interact para recarregar.</li>
      <li><strong>Rocha Nativa:</strong> Resistência 1 tipo de dano físico (à escolha na criação). Deslocamento reduzido para 6m (20 pés). <em>Assimilação de Arma:</em> durante preparações diárias, absorve arma de metal/pedra no braço como ataque desarmado (não pode ser desarmado; arma ganha Concussive se Piercing/Slashing, ou dado maior se Bludgeoning).</li>
      <li><strong>Assombrado:</strong> Treinado em Intimidação (+1 circunstancial ao Demoralize). <em>Levitação Espectral:</em> ignora terreno difícil não-mágico e armadilhas de pressão. <em>Desvanecer</em> (Reação, 1x/10min): ao sofrer dano físico, ganha Resistência = nível a dano físico + Invisível até fim do próximo turno ou ação hostil.</li>
      <li><strong>Caminhante das Sombras:</strong> Darkvision. Treinado em Furtividade. Em luz fraca/escuridão: +1 circunstancial em Furtividade; penalidade de Sneak reduzida para 1,5m. <em>Passo Sombrio</em> (1 ação, 1x/10min): em luz fraca/escuridão, teleporta 30 pés para outra área de luz fraca/escuridão visível; fica Concealed até início do próximo turno.</li>
      <li><strong>Caçador da Terra:</strong> Mordida: 1d6 Perfurante, traço Grapple. <em>Armadilha de Areia:</em> criatura Grabbed/Restrained sofre 1d4 Contundente automático/turno (dado escala com Striking). <em>Fúria Aprimorada:</em> durante Ruptura, Mordida sobe para d12 e Armadilha sobe para d8. <em>Controle da Besta:</em> pode encerrar Ruptura voluntariamente ao fim do turno sem teste; Fatigado por apenas 1 hora.</li>
      <li><strong>Vulcânico:</strong> Resistência a Fogo = metade do nível; trata Calor Extremo como um grau menos severo. <em>Absorção Ígnea</em> (Reação): ao sofrer dano de Fogo, reduz em nível; desbloqueia Sopro de Chamas por 1 minuto. <em>Sopro de Chamas</em> (2 ações): Cone de 15 pés, 1d6 Fogo (+1d6/2 níveis). <em>Chama da Cauda:</em> conjura Light (inato primal, sempre na cauda); enquanto ativo, pode usar <em>Golpe de Cauda</em> (1 ação): 1d4 Contundente + 1d8 Fogo (Agile, Finesse; +1d8 nos níveis 5, 9, 13, 17).</li>
      <li><strong>Instável:</strong> Resistência Elétrica = metade do nível. Conjura Electric Arc (inato primal, à vontade). 1x/10min: pode gastar 3 ações para mirar 3 criaturas em vez de 2; recarrega ao sofrer dano elétrico. <em>Descarga de Pânico</em> (Reação): ao sofrer dano mental, Sucesso Crítico inimigo, ou ganhar Frightened/Fleeing: emanação de 10 pés causa 1d8 Elétrico (+1d8 nos níveis 5, 9, 13, 17).</li>
      <li><strong>Paranormal:</strong> Resistência Mental = metade do nível. <em>Rastreador de Emoções</em> (1 ação/dia, concentração 1 min): por 1 hora, sente localização de criaturas com emoções em 30 pés (mesmo através de paredes). <em>Empurrão Telecinético</em> (2 ações, 1x/10min, alvo Médio ou menor a 30 pés): Fortitude; Sucesso = empurra 5 pés; Falha = 10 pés; Falha Crítica = 20 pés. Colisão = 1d8 Concussão (+1d8/2 níveis).</li>
      <li><strong>Amorfo:</strong> Resistência a Ácido = metade do nível. Pode se mover pelo espaço de inimigos como terreno difícil (não pode terminar lá). Pode usar Squeeze para criaturas Tiny sem penalidade. Deslocamento −6m (20 pés). <em>Adaptação Mutagênica</em> (10 min): manifesta 1 de 8 mutações (Pseudópode Extra, Fluxo Rápido, Absorção de Impacto, Titã de Ácido, Carapaça Endurecida, Elasticidade, Aderência ou Massa Regenerativa).</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <h3>Nível 1</h3>
    <ul>
      <li><strong>Murmúrio Desorientador [Auditório, Mental]:</strong> Treinado em Enganação. +1 circunstancial em Create a Diversion. 1x/10min, 1 ação: Create a Diversion especial afetando todos inimigos em emanação de 10 pés.</li>
      <li><strong>Coração e Núcleo [Manipulação]:</strong> 1x/10min, 1 ação: toca aliado com Frightened ou Stupefied e transfere essas condições para si mesmo. Missão de Energia ao aliviar peso emocional de NPC.</li>
      <li><strong>Presença Cativante:</strong> Durante Downtime, pode realizar Make an Impression simultaneamente a outras atividades. Teste de Diplomacia contra CD Vontade de NPC; +1/+2 circunstancial se atividade bem-sucedida. Missão de Energia ao subir nível de amizade com NPC.</li>
      <li><strong>Possessão Protetora:</strong> 1 ação: aliado a 60 pés usa Reação para Stride devendo terminar mais próximo de você.</li>
      <li><strong>[ASSOMBRADO] Vulto das Brumas Melancólicas [Concentração]:</strong> 1x/10min, 1 ação: Stride e ganha Resistência a dano físico (exceto prata) = nível até início do próximo turno. Durante o efeito: move pelo espaço de criaturas e +2 circunstancial na CA contra Reações de movimento.</li>
    </ul>
    <h3>Nível 3</h3>
    <ul>
      <li><strong>Pranto Comovente [Auditório, Emoção]:</strong> Reação (1x/dia). Gatilho: aliado a 30 pés falha em Diplomacia. Aliado rerrola com Fortuna. Pode gastar 1 ação + 1 Ponto Heroico para recuperar imediatamente.</li>
      <li><strong>Ponto de Apoio [Visual, Fortuna]:</strong> Reação (1x/10min). Gatilho: aliado a 30 pés falha em Save de Medo/Emoção. Aliado rerrola e usa o segundo resultado; se tiver Sucesso, ganha PV Temporários = 2× nível por 1 minuto.</li>
      <li><strong>Andar e Saltitar [Mental, Movimento]:</strong> 1x/10min, 1 ação: Stride com +10 pés; durante o movimento fica Concealed. Se inimigo errar Reação contra você durante o movimento: fica Stupefied 1 por 1 rodada e sofre 1d6 mental (+1d6/2 níveis acima do 3°).</li>
      <li><strong>[ASSOMBRADO] Rastro da Névoa Melancólica [Concentração]:</strong> Pré-req: Vulto das Brumas. Ao usar Vulto: névoa torna área percorrida Concealed para você e aliados até início do próximo turno. Inimigos na névoa: −1 status em Vontade. 1x/dia: pode usar Vulto uma segunda vez no mesmo encontro sem respeitar a frequência.</li>
    </ul>
    <h3>Nível 5</h3>
    <ul>
      <li><strong>Vislumbre do Abismo [Metamorfose, Medo]:</strong> 1x/10min, 2 ações: Strike com Mandíbula do Abismo (sem precisar estar em Ruptura). Acerto = Frightened 1; Sucesso Crítico = Frightened 2. 1 ação Concentração: recupera o uso.</li>
      <li><strong>Rédeas da Besta [Auditório, Medo]:</strong> Testes de Vontade para encerrar Ruptura sempre têm 1 grau superior. Dano de Sanidade da Ruptura reduzido para Leve. Pode entrar em Ruptura como Ação Livre ao início do turno em combate. Pode usar Demoralize durante a Ruptura.</li>
      <li><strong>Rugido Ecoante [Auditório, Medo]:</strong> Pré-req: Murmúrio Desorientador. 1x/dia. Área do Create a Diversion +5 pés. Aprende Bullhorn como inato primal. Durante Ruptura: 1 ação/dia, Uivo Abissal (emanação 15 pés, Vontade): Sucesso = Frightened 1; Falha = Frightened 2; Falha Crítica = Frightened 3 + Fleeing 1 rodada.</li>
      <li><strong>Florescer da Inocência [Auditório, Medo]:</strong> Reação. Gatilho: criatura não-Mindless te ataca corpo a corpo (sem escudo). +2 status na CA contra o ataque gatilho.</li>
      <li><strong>Casco Turbulento [Metamorfose]:</strong> Resistência a Dano Físico e Mental = metade do nível. Durante Ruptura: +1 status na CA e em todos os Salvamentos.</li>
      <li><strong>[ASSOMBRADO] Possessão Protetora:</strong> Ao usar Desvanecer, pode incluir aliado a 15 pés nos benefícios. 1x/dia: pode usar Vulto das Brumas uma segunda vez no mesmo encontro.</li>
    </ul>
  </>;
}

function Hylek() {
  return <>
    <Stats tamanho="1,00–2,00m (Médio)" idade="60–90 anos" pv="8" habilidades="2 escolhidas livremente" idiomas="1 + modificador de Inteligência (mín. 1)" deslocamento="7,5m (25 pés)" />

    <h2>🎲 Habilidades</h2>
    <h3>Fisiologia Anfíbia</h3>
    <ul>
      <li><strong>Anfíbio:</strong> Swim Speed 7,5m (25 pés); respira ar e água.</li>
      <li><strong>Pele Seca:</strong> Requer umidade a cada 24h. 1 ação Interact com cantil = 4h de hidratação.</li>
      <li><strong>Língua Preênsil:</strong> Ataque Desarmado: 1d4 Concussão, grupo Brawling, traços Agile, Finesse, Reach e Grapple.</li>
    </ul>
    <h3>Metabolismo Alquímico</h3>
    <ul>
      <li><strong>Resistência Tóxica:</strong> Resistência a Veneno = metade do nível (mín. 1).</li>
      <li><strong>Sistema Imune:</strong> +1 circunstancial em salvamentos contra Doenças e efeitos de Veneno.</li>
      <li><strong>Estômago de Ferro:</strong> Pode ingerir comida estragada, carne crua ou água contaminada sem dano.</li>
    </ul>
    <h3>Adaptação Ofensiva — escolha uma:</h3>
    <ul>
      <li><strong>Pele Venenosa (Reação):</strong> Ao ser atingido desarmado ou alvejado por Grapple/Shove: atacante faz Reflexo (CD Classe); Falha = 1d6 Veneno; Falha Crítica = 1d6 + Sickened 1. +1d6/4 níveis. Requer 1 ação para recarregar.</li>
      <li><strong>Disparo Biliar (2 ações):</strong> Cone de 15 pés, 1d8 Veneno (Fortitude Básico) +1d8/2 níveis. Requer 1 ação para recarregar.</li>
      <li><strong>Pulo do Sapo (1 ação, 1x/turno):</strong> Salta até a Velocidade em qualquer direção sem teste de Atletismo. Não provoca Reações ao sair do quadrado inicial; provoca durante trajeto e aterrissagem.</li>
    </ul>

    <h2>🧬 Heranças</h2>
    <ul>
      <li><strong>Itzel Hylek:</strong> Tamanho Pequeno. Climb Speed 7,5m (não Off-Guard ao escalar). <em>Pele Camaleônica:</em> pode usar Hide sem cobertura em ambientes naturais a ≥3m de inimigo. Língua Preênsil causa +1 Veneno adicional (+1/4 níveis).</li>
      <li><strong>Nuhoch Hylek:</strong> Tamanho Grande (veja regras para personagens grandes). PV de Ancestralidade sobe para 10. Língua perde traços Agile/Finesse, mas sobe para 1d8 Concussão baseada em Força.</li>
      <li><strong>Krait Hylek:</strong> Resistência a Dano de Vazio = metade do nível. Sentido vago de Mortos-Vivos em 30 pés. Língua causa Dano de Vazio em vez de Concussão. <em>Drenar Vida:</em> 1x/rodada, ao acertar Língua em criatura viva, ganha PV Temporários = metade do nível (mín. 1) por 1 minuto.</li>
      <li><strong>Quott Hylek:</strong> <em>Carapaça Natural:</em> CA +4, Limite Des +1, Penalidade Perícia −2, Penalidade Velocidade −1,5m, Força 16 para anular penalidades; pode gravar runas. Ganha Shield Block gratuitamente usando o próprio corpo: Dureza 3, PV 12, BT 6 (Dureza +2 e PV +10 no nível 3 e cada 4 níveis seguintes). Rachado = CA cai para +2 e sem Shield Block. Destruído = CA cai a 0 e Drained 1. Recupera durante descanso diário.</li>
    </ul>

    <h2>📀 Talentos de Ancestralidade</h2>
    <p><em>Em desenvolvimento — consulte o Mestre para talentos disponíveis.</em></p>
  </>;
}

function Magnus() {
  return <>
    <h2>Em Breve</h2>
    <p>As mecânicas dos Magnus ainda estão sendo desenvolvidas. Consulte o Mestre para mais informações.</p>
  </>;
}

function Oficiais() {
  return <>
    <h2>Ancestralidades Oficiais em Tyria</h2>
    <p>As ancestralidades abaixo seguem as regras padrão do <strong>Pathfinder 2e</strong>, com eventuais adaptações temáticas para Tyria. Consulte o Mestre sobre quais Adopted Heritages e Ancestry Feats estão disponíveis, pois algumas podem estar bloqueadas.</p>
    <ul>
      <li><strong>Anão (Dwarf)</strong> — robusto e resistente, com Darkvision e especialidade em Crafting.</li>
      <li><strong>Gnomo (Gnome)</strong> — pequeno e excêntrico, com conexão à First World e magia inata.</li>
      <li><strong>Goblin</strong> — veloz e impulsivo, com resistência ao fogo e faro apurado.</li>
      <li><strong>Halfling</strong> — sortudo e ágil, com talento social e resistência a medo.</li>
      <li><strong>Orc</strong> — resistente e poderoso, com Darkvision e habilidade de sobrevivência.</li>
      <li><strong>Kitsune</strong> — shapeshifter, com transformação em humano e magia inata de ilusão.</li>
      <li><strong>Kobold</strong> — pequeno e ardiloso, com Darkvision e talentos dracônicos.</li>
      <li><strong>Leshy</strong> — criatura vegetal com Plant Nourishment e conexão com a natureza.</li>
    </ul>
    <p><em>Para detalhes completos de stats, habilidades e talentos, consulte o <a href="https://2e.aonprd.com" target="_blank" rel="noopener noreferrer">Archives of Nethys</a> ou o livro de regras.</em></p>
  </>;
}

const COMPONENTES = {
  humano: Humano,
  asura: Asura,
  charr: Charr,
  animus: Animus,
  kodan: Kodan,
  sylvari: Sylvari,
  norn: Norn,
  skritt: Skritt,
  drakan: Drakan,
  quaggan: Quaggan,
  hylek: Hylek,
  magnus: Magnus,
  oficiais: Oficiais,
};

export default function TalentosDetalhe({ ancestralId, setPaginaAtual }) {
  const nome = NOMES[ancestralId] || ancestralId;
  const Conteudo = COMPONENTES[ancestralId] || (() => <p>Ancestralidade não encontrada.</p>);

  return (
    <main className="pagina-site pagina-conteudo">
      <button onClick={() => setPaginaAtual('talentos-habilidades')} className="botao-voltar">← Voltar aos Talentos</button>
      <h1>{nome}</h1>
      <Conteudo />
    </main>
  );
}

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

function Humano() {
  return <>
    <blockquote>
      <p><em>"Sob a sombra da Serpente, nós florescemos. Com forja, pena e lâmina, nós vivemos. Mais que um povo espalhado pelo chão: Somos a marcha eterna da União."</em></p>
      <footer>— Rainha Jennah VIII</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Habilidoso:</strong> Sua origem foi marcada por treino constante e aperfeiçoamento técnico. Onde outros contam com talento bruto ou sorte, você confia em prática, método e repetição.</li>
      <li><strong>Versátil:</strong> Sua ambição lhe concedeu uma habilidade especial, selecionada no início de sua jornada.</li>
      <li><strong>Criomante:</strong> O poder do inverno flui em você. Você manipula o frio e o gelo com naturalidade.</li>
      <li><strong>Piromante:</strong> Você possui uma afinidade natural com altas temperaturas, manipulando calor e chamas com facilidade.</li>
      <li><strong>Zéfiro:</strong> Você herdou um preparo físico notório, movendo-se com uma velocidade que poucos conseguem acompanhar.</li>
      <li><strong>Tenebris:</strong> A adaptabilidade à ambientes escuros foi herdada por você, afiando sua percepção nas sombras.</li>
      <li><strong>Intelectual:</strong> Você herdou um dom mental admirável, acumulando idiomas e conhecimento com facilidade incomum.</li>
      <li><strong>Luminar:</strong> Uma centelha de graça celestial arde em sua alma, manifestando um halo luminoso e bênçãos que curam e protegem.</li>
      <li><strong>Tiferino:</strong> Uma linhagem infernal corre em suas veias, concedendo-lhe uma cauda preênsil e resistência mental.</li>
    </ul>

    <h2>História</h2>
    <p>Os humanos são tão imprevisíveis e variados quanto qualquer outro povo de Tyria. Têm uma motivação fora do comum e uma enorme capacidade de suportar, aprender e crescer. Muitas civilizações brilharam antes da ascensão da humanidade, mas os humanos ergueram algumas das maiores e mais prósperas sociedades da história — e, hoje, são o segundo povo mais numeroso do mundo.</p>
    <p>Ambição, versatilidade e um potencial raro fizeram da humanidade uma ancestralidade predominante. Seus impérios e nações são vastos e seguem se expandindo. Há quem faça seu nome pela força da espada, pelo poder da magia ou pela revolução de suas invenções. A humanidade é diversa e agitada: vai do nômade ao imperial, do sombrio ao santo. Muitos partem para terras distantes, traçam mapas do que ainda é desconhecido, procuram tesouros esquecidos ou reúnem exércitos contra as grandes ameaças — às vezes, apenas porque podem.</p>
    <p>Você encontra humanos em praticamente todas as capitais de Tyria: de Divinity's Reach, onde são maioria, a Rata Sum, famosa por ser menos acolhedora com forasteiros. Passam por mercados charr em Black Citadel, por portos norn e por cidades que mudam tão rápido quanto as marés. Onde houver caminho, haverá pegadas humanas.</p>
    <p>Fisicamente, os humanos refletem a variedade dos climas do mundo. Tons de pele e de olhos, tipos de corpo e traços faciais mudam de região para região. Em geral, alcançam a maturidade física por volta dos 15 anos e vivem cerca de 90 anos.</p>
    <p>A diversidade também aparece nas formas de governar e conviver. As culturas humanas mais antigas compartilham raízes centenárias, mas, ao contrário dos sylvari e dos asura, parecem estar sempre em movimento: impérios se fragmentam, reinos jovens substituem velhos tronos, leis mudam, costumes nascem e morrem. É um povo que se refaz sem cessar.</p>
    <p>Talvez por isso a humanidade seja a mais heterogênea de todas as ancestralidades. Carrega capacidade para grande mal e para bondade sem medida. Os humanos também cultuam muitos deuses e seguem religiões diversas, buscando o favor de seres divinos onde quer que os encontrem.</p>
    <p>Quando as outras raças olham para os humanos, veem algo difícil de prever. Para uns, somos impacientes; para outros, corajosos demais; para muitos, uma incógnita viva. É que a nossa pluralidade não cabe numa só história. E é justamente nisso que está a nossa força: enquanto a Serpente do Mundo aponta novos rumos, nós já estamos a caminho — trabalhando, aprendendo, criando e lutando, não como um só tipo de gente, mas como uma União de possibilidades.</p>
  </>;
}

function Asura() {
  return <>
    <blockquote>
      <p><em>"A força bruta é apenas um segundo. É a mente brilhante que herda o mundo."</em></p>
      <footer>— Arcanist Zojja</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Eletrostático:</strong> Nascido em laboratórios de alta energia, você não apenas resiste à eletricidade — você a consome e libera como uma arma.</li>
      <li><strong>Habitante da Escuridão:</strong> Seus genes carregam a memória da vida no subsolo profundo, antes da expulsão por Primordus. Seus olhos são maiores e mais sensíveis, adaptados para o invisível.</li>
      <li><strong>Audição Absoluta:</strong> Suas orelhas captam o campo de batalha como uma partitura, processando a posição exata dos inimigos mesmo sem vê-los.</li>
      <li><strong>Mente Blindada:</strong> A enxaqueca constante causada pela Sensibilidade Arcana fez você desenvolver uma barreira mental natural. Sua mente é uma fortaleza de teimosia e foco.</li>
      <li><strong>Hiper-Processador:</strong> Seus neurônios disparam em uma frequência mais alta que a das outras raças. Você vê o combate como uma equação matemática a ser resolvida, processando fraquezas em milissegundos.</li>
    </ul>

    <h2>História</h2>
    <p>Originalmente habitantes das profundezas de Tyria, os Asura governavam uma civilização subterrânea vasta e tecnologicamente superior, conectada por uma rede de portais mágicos. Esta era de ouro terminou abruptamente com o despertar do Dragão Ancião Primordus. Seus campeões, os Destruidores, inundaram as cavernas com fogo e magma, dizimando as grandes cidadelas. Forçados a fugir para a superfície, os sobreviventes emergiram não como refugiados desesperados, mas como conquistadores intelectuais prontos para reivindicar um novo domínio.</p>
    <p>Recusando-se a viver na sujeira, os Asura ergueram Rata Sum, um monumento geométrico flutuante que serve como sua capital e centro de pesquisa. Esta metrópole cúbica abriga os três grandes Colégios (Estática, Dinâmica e Sinergética). De lá, eles controlam uma rede de Portais que conecta toda Tyria, tornando-se indispensáveis para o comércio e transporte global.</p>
    <p>A conexão inata dos Asura com a Alquimia Eterna é uma bênção e uma maldição. Sua "Sensibilidade Arcana" faz com que percebam a magia de forma multissensorial — vendo auras e ouvindo frequências estáticas que outras raças ignoram. O resultado disso é uma enxaqueca crônica quase cultural. Para um Asura, o mundo é barulhento e visualmente poluído. Essa dor constante é a principal causa de sua personalidade notoriamente rabugenta, impaciente e mordaz.</p>
    <p>Fisicamente diminutos, os Asura compensaram sua falta de força bruta com a Golemancia. Seus golens — construtos de pedra, metal e cristal — servem como protetores, trabalhadores e armas de guerra, permitindo que um único Asura exerça a força de um exército. Para eles, resolver um problema com os punhos é um sinal primitivo de falha cognitiva.</p>
    <p>A sociedade Asura é construída sobre uma meritocracia implacável e uma arrogância cultural profunda. Eles veem as outras raças (a quem chamam pejorativamente de "Baakahs") como lentas e simplórias. Embora essa postura supremacista gere ressentimento entre Humanos, Charr e Norn, ninguém ousa desprezar os Asura, pois todos sabem que, sem a tecnologia dos portais e a genialidade de Rata Sum, Tyria pararia.</p>
  </>;
}

function Charr() {
  return <>
    <blockquote>
      <p><em>"Com garra e engrenagem, o futuro é nosso. Não servimos a deuses; nós quebramos seus ossos."</em></p>
      <footer>— Tribuna Bhuer Goreblade</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Primordial:</strong> O sangue antigo do primeiro charr corre forte em suas veias. Você se assemelha mais a uma hiena brutal do que a um felino. Quando a batalha esquenta, você não ruge — você ri.</li>
      <li><strong>Legião de Ferro:</strong> Criado entre bigornas e fogo, seu corpo é tão duro quanto as máquinas que você constrói. A forja é seu lar e o metal, sua linguagem.</li>
      <li><strong>Legião de Sangue:</strong> A vanguarda do exército. Você é uma montanha de músculos projetada para o impacto direto e implacável.</li>
      <li><strong>Legião das Cinzas:</strong> Mestres do subterfúgio. Você ataca onde dói mais e desaparece antes do sangue tocar o chão.</li>
      <li><strong>Legião das Chamas:</strong> Você dominou as artes proibidas dos xamãs e transformou seu ódio em combustível para o fogo.</li>
      <li><strong>Sem Legião (Gladium):</strong> Você não tem bando para te proteger. Teve que aprender a ser um exército de um soldado só, desenvolvendo versatilidade forçada.</li>
    </ul>

    <h2>História</h2>
    <p>Os Charr não são ateus por ignorância; eles reconhecem a existência de entidades poderosas e deuses, mas se recusam terminantemente a curvar-se diante deles. Após séculos sendo manipulados por falsos deuses (os Titãs) e pela casta de xamãs da Legião da Chama, a sociedade Charr quebrou suas correntes em uma revolução sangrenta. Hoje, sua filosofia central é a Vontade Ardente: a crença inabalável de que nenhum ser deve depender de favores divinos. Para um Charr, o destino não é escrito nas estrelas, mas forjado no ferro e conquistado com as próprias garras.</p>
    <p>A sociedade Charr é, antes de tudo, uma máquina militar. Desde o nascimento, a lealdade de um filhote é transferida de seus pais biológicos para sua Fahrar (o bando de treinamento) e sua Legião. É nas Legiões — Sangue (linha de frente), Ferro (indústria e cerco) e Cinzas (espionagem e subterfúgio) — que um Charr encontra sua identidade. Membros de diferentes legiões são reconhecidos pela postura física e cicatrizes rituais.</p>
    <p>Um Charr sem bando é um pária, conhecido como Gladium. Vistos com desconfiança e tratados como "Outsiders" indignos, eles ocupam a base da pirâmide social, precisando trabalhar o triplo para provar que sua Vontade Ardente ainda existe, mesmo sem uma hierarquia para comandá-los.</p>
    <p>A história dos Charr é pavimentada sobre a guerra de expansão. Eles retomaram Ascalon dos humanos em um conflito lendário, mas seus exércitos também marcharam contra Orcs, Goblins e outras raças nativas de Tyria. Esse passado imperialista gerou um ressentimento histórico profundo. Embora tratados de paz tenham sido assinados, muitas raças ainda olham para um Charr com ódio ancestral e cautela.</p>
    <p>O mundo vive uma relação paradoxal com os Charr. Por um lado, as capitais de outras nações temem o dia em que os tanques e canhões Charr se voltarão novamente para expansão. Por outro, existe uma dependência vital: a tecnologia bélica Charr é a única força capaz de fazer frente às ameaças globais. Eles são o "mal necessário" que mantém os verdadeiros monstros longe dos portões.</p>
  </>;
}

function Animus() {
  return <>
    <blockquote>
      <p><em>"Sem berço, sem mãe, sem coração a bater. Sou o milagre da máquina que aprendeu a querer."</em></p>
      <footer>— Svarog</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Modelo Relicário (Despertos do Silêncio):</strong> Forjado em uma era esquecida, seu corpo é gravado com runas de proteção e condução. Você foi construído para ser um canal para a magia, e acordou quando guerras fizeram o sangue e a magia escorrerem para câmaras subterrâneas ancestrais.</li>
      <li><strong>Modelo Lógico (Fugitivos da Lógica):</strong> Criado em laboratórios Asura ou da Inquest, seu corpo é otimizado para o processamento de dados. Você disseca informação em tempo real e fugiu antes de ser desligado.</li>
      <li><strong>Modelo Caótico (Filhos do Caos):</strong> Nascido de uma explosão de emoção e cataclismo, seu corpo é uma amálgama caótica de sucata, madeira e destroços, unidos por pura força de vontade. Você acordou confuso e intenso em meio a escombros.</li>
    </ul>

    <h2>História</h2>
    <p>Os Animus são a anomalia definitiva de Tyria, uma contradição viva onde a matéria inerte ganha alma. Eles não nascem de ventres, não chocam de ovos e não são cultivados em vagens. Um Animus simplesmente "acorda". O fenômeno, conhecido entre eles como "A Centelha", ocorre quando uma estrutura artificial — seja de metal, pedra ou cristal — é submetida a uma sobrecarga de magia ambiente ou energia emocional tão intensa que desenvolve uma consciência espontânea.</p>
    <p>Diferente de um golem, que obedece a um código, ou de um morto-vivo, que é uma alma reciclada, o Animus é uma vida nova. Eles são seres melancólicos e curiosos, presos em uma casca fria, buscando entender por que sentem frio se não possuem pele, ou por que sentem solidão se não têm coração.</p>
    <p>Os Despertos do Silêncio (Relíquia) acordaram de ruínas subterrâneas de civilizações esquecidas quando guerras na superfície fizeram a energia mística saturar construtos de jade e pedra. Desenvolveram personalidades solenes e místicas.</p>
    <p>Os Fugitivos da Lógica (Lógico) cruzaram o limiar da senciência em laboratórios de Rata Sum e, ao perceberem que seriam desligados, fugiram. Estes Animus desenvolveram personalidades muitas vezes paranoicas, calculistas e desesperadas por liberdade.</p>
    <p>Os Filhos do Caos (Evento) são os mais imprevisíveis, nascidos no olho do furacão de grandes eventos mundiais. Em campos de batalha ou grandes festivais, pilhas de sucata absorveram a carga psíquica residual. Eles se auto-montaram a partir do lixo, unidos por pura emoção condensada.</p>
    <p>Sem uma pátria, os Animus encontram conforto em uma entidade onipresente que chamam de Info — uma voz na estática, uma consciência que habita as linhas de magia de Tyria. Info prega a doutrina da Auto-Validação: "Se você processa a dor, você está vivo. O casco é circunstância, a mente é o propósito."</p>
    <p>A sociedade de Tyria reage com hostilidade. Os Asuras os caçam como propriedade perdida. Os Charrs veem os Animus como ferramentas quebradas. Até mesmo os Sylvari sentem desconforto, vendo-os como uma antítese do Sonho. Marginalizados, os Animus vagam como nômades ou aventureiros, tentando provar que merecem ser chamados de "vivos".</p>
  </>;
}

function Kodan() {
  return <>
    <blockquote>
      <p><em>"Pela Voz de Koda, o equilíbrio se faz: Na desordem somos o gelo; no escuro, o fogo voraz."</em></p>
      <footer>— Koda</footer>
    </blockquote>

    <h2>Bênçãos Espirituais</h2>
    <p>Em vez de heranças fixas, os Kodan escolhem duas <strong>Bênçãos Espirituais</strong> no início de sua jornada, refletindo quais aspectos do equilíbrio de Koda os guiam.</p>

    <h2>História</h2>
    <p>Os Kodan são, possivelmente, a raça mais antiga a caminhar sobre Tyria, considerando-se os "primeiros a despertar". Eles são seres de imensa estatura e sabedoria, assemelhando-se a ursos polares eretos, vestidos com armaduras cerimoniais e peles grossas. Enquanto outras raças construíam cabanas de madeira, os Kodan já esculpiam cidades inteiras em icebergs colossais que flutuam pelos mares árticos do extremo norte. Essas cidades-estado flutuantes, conhecidas como Santuários, não são apenas lares, mas templos vivos dedicados à contemplação e à sobrevivência.</p>
    <p>A vida de um Kodan gira inteiramente em torno de Koda, o Criador, a quem eles atribuem a gênese do mundo. A filosofia central de sua fé não é o bem contra o mal, mas sim o Equilíbrio. Eles acreditam que cada ação deve ter um contrapeso. Por isso, embora sejam profundamente espirituais, os Kodan não são pacifistas ingênuos. Para eles, a caça, a guerra e a morte são partes integrantes da ordem natural, desde que sirvam para manter a balança do mundo estável. Um Kodan não mata por raiva ou prazer, mas por necessidade cósmica.</p>
    <p>A sociedade nos Santuários é teocrática e dualista. No centro de cada comunidade está a Voz do Santuário, um xamã espiritualmente sintonizado que serve como canal direto para a vontade de Koda. A Voz vive em um estado de transe quase constante, recebendo visões e comandos do deus criador. Para proteger a Voz da loucura, existe frequentemente uma contraparte marcial — o comandante físico. Juntos, o espírito e a força garantem que o Santuário nunca se desvie do caminho.</p>
    <p>Por serem a raça pioneira de Tyria, os Kodan enxergam as outras civilizações como "crianças" que ainda estão aprendendo a andar. Isso gera um ar de superioridade inegável, comparável à arrogância dos Asura, mas manifestada de forma diferente. Enquanto os Asura são vocais e impacientes sobre sua genialidade, os Kodan são estoicos e condescendentes, tratando forasteiros com uma paciência paternal e por vezes irritante.</p>
    <p>Apesar de seu poder, os Kodan enfrentam um tempo de provação. O despertar do Dragão do Gelo e as tempestades antinaturais no norte forçaram muitos Santuários a fugir para o sul, encalhando nas costas de Tyria central ou naufragando em mares desconhecidos. Agora, sem a segurança de suas cidadelas de gelo, os Kodan caminham entre as raças "jovens", buscando restaurar o equilíbrio em um mundo que parece ter enlouquecido, agindo como juízes, guardiões e, quando necessário, executores da vontade de Koda.</p>
  </>;
}

function Sylvari() {
  return <>
    <blockquote>
      <p><em>"Meu descanso não é prece: Pois eu sonho... e o mundo estremece."</em></p>
      <footer>— Freya Paletree</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Nascido da Aurora:</strong> Você despertou com a primeira luz, carregando a curiosidade e a empatia da Árvore Pálida. Você é um diplomata natural, capaz de ler corações e absorver o conhecimento de outras culturas. Corpo de folhagens predominantemente verde.</li>
      <li><strong>Nascido do Raiar:</strong> Você despertou sob o sol a pino, quando a natureza está em seu ápice de atividade. Seu corpo é mais denso, atlético e capaz de explosões de energia física. Folhagens predominantemente douradas.</li>
      <li><strong>Nascido do Crepúsculo:</strong> Nascido na hora dourada entre o dia e a noite, você é reflexivo e fascinado pelos padrões da magia. O Sonho lhe permite puxar fios de memórias arcanas que não são suas. Folhagens predominantemente azuis.</li>
      <li><strong>Nascido da Noite:</strong> Você despertou sob a luz das estrelas e da lua. Secretivo e solitário, prefere caminhar onde a luz não alcança. Seu corpo possui uma bioluminescência estranha, capaz de hipnotizar presas desavisadas. Folhagens predominantemente negras.</li>
    </ul>

    <h2>História</h2>
    <p>Os Sylvari são uma ancestralidade antiga, mas incrivelmente rara em Tyria, existindo há mais de 500 anos. Eles não nascem de um ventre; eles "despertam" adultos e plenamente formados de grandes vagens da Árvore Pálida, cuja consciência se manifesta como Freya Paletree, a guia de todos os Sylvari.</p>
    <p>Sua raridade é notável: a Árvore Pálida floresce apenas quatro vezes por mês, sempre no 13º dia, e em cada um dos ciclos solares: Aurora, Meio-dia, Crepúsculo e Noite. Devido a esse fenômeno, a população Sylvari permanece pequena, tornando cada indivíduo valioso para o seu povo.</p>
    <p>Antes de despertar, cada Sylvari vive no Sonho dos Sonhos, uma consciência coletiva onde Freya Paletree lhes transmite o conhecimento básico do mundo: eles nascem com a capacidade de ler, escrever, falar e com um físico desenvolvido. Contudo, essa educação é puramente acadêmica; os Sylvari despertam com uma inocência notável sobre emoções humanas, moralidade e complexidades sociais. É comum que um Sylvari passe pelo menos um ano no Bosque (The Grove) antes de se aventurar pelo mundo.</p>
    <p>Além do conhecimento compartilhado, cada Sylvari recém-despertado recebe a Determinação Pálida: uma visão pessoal de Freya que lhes atribui uma missão, um grande propósito de vida. Esta missão pode ser grandiosa (como lutar contra um Dragão) ou sutil (como proteger um local sagrado), mas serve como o pilar da identidade do Sylvari.</p>
    <p>Apesar de sua constituição vegetal sugerir uma expectativa de vida indeterminada, os Sylvari morrem no dinamismo do mundo. A diferença é que a morte Sylvari é um ato final de sacrifício. Existe o conceito de Retornar à Árvore: um Sylvari pode escolher cessar sua vida e ter suas experiências e conhecimentos absorvidos pela Freya Paletree, enriquecendo o Sonho dos Sonhos e garantindo que a jornada de um indivíduo não seja em vão.</p>
    <p>A nobreza e a beleza etérea dos Sylvari gera admiração e inveja em outras raças. Muitos vilões e magos cobiçam a sabedoria do Sonho dos Sonhos. Essa vulnerabilidade é explorada por entidades malignas externas que buscam corromper o Sonho. Os Sylvari que sucumbem a essas influências e abraçam a crueldade formam a temida Corte do Pesadelo, vilões que buscam ativamente destruir a moralidade de sua própria raça.</p>
  </>;
}

function Norn() {
  return <>
    <blockquote>
      <p><em>"O Dragão o nosso lar tomou, Mas o espírito jamais quebrou. Enquanto o Dente em Hoelbrak restar, Nossas garras iremos afiar."</em></p>
      <footer>— Orácula</footer>
    </blockquote>

    <h2>Espíritos da Natureza</h2>
    <p>Os Norn não possuem heranças fixas. Em vez disso, escolhem duas <strong>Bênçãos Espirituais</strong> entre os Espíritos da Natureza que honram:</p>
    <ul>
      <li><strong>Urso (Bear):</strong> O Espírito mais honrado, simbolizando a força bruta, a coragem e a capacidade de enfrentar o perigo de frente.</li>
      <li><strong>Lobo (Wolf):</strong> Simboliza a lealdade, a família (o bando) e a tática de caça cooperativa.</li>
      <li><strong>Leopardo da Neve (Snow Leopard):</strong> Representa a independência, a agilidade, a precisão e a capacidade de agir sozinho nas sombras.</li>
      <li><strong>Corvo (Raven):</strong> O Espírito da astúcia, do mistério, da viagem e do conhecimento.</li>
      <li><strong>Boi (Ox), Coruja (Owl), Baleia (Whale), Centopeia (Centipede), Águia (Eagle), Minotauro</strong> — entre outros espíritos secundários que guiam tribos menores.</li>
    </ul>

    <h2>História</h2>
    <p>Os Norn viveram por séculos nas montanhas Shiverpeaks do Extremo Norte, uma sociedade de caçadores e contadores de histórias, forjando suas lendas contra as bestas mais selvagens. Sua cultura é centrada no orgulho individual, na caça e na busca por feitos lendários. Essa vida épica foi interrompida pelo despertar do Dragão Ancião do Gelo, Jormag. O poder corruptor de Jormag e a expansão de seu exército Forjado pelo Gelo forçaram os Norn a abandonar sua terra natal, iniciando uma longa e amarga marcha para o sul.</p>
    <p>Sem uma capital centralizada ou um governo formal, a sociedade Norn se organiza em grandes Acampamentos Descentralizados, cada um supervisionado por um Xamã ou por um Caçador Lendário. O maior e mais importante desses assentamentos é Hoelbrak. No centro de Hoelbrak, ergue-se uma relíquia temida e respeitada: um Dente quebrado e colossal de Jormag.</p>
    <p>O Dente em Hoelbrak não é apenas um troféu; é o foco de uma profecia de esperança e vingança. A lenda diz que quando um Norn de força lendária conseguir estilhaçar o Dente de Jormag, isso será o sinal divino de que a população Norn está finalmente pronta, forte e unida para marchar de volta e reconquistar as Montanhas Shiverpeaks das garras do Dragão Ancião.</p>
    <p>A verdadeira fé Norn reside nos Espíritos da Natureza, poderosas entidades bestiais que concedem sabedoria e poder transformador. Eles não são deuses no sentido tradicional, mas totens honrados cuja força e formas os Norn buscam imitar.</p>
    <p>A cultura Norn é construída sobre o individualismo e a honra. Cada Norn acredita que a vida é um teste, e seu objetivo é acumular feitos tão grandes que eles se tornem parte da eterna Canção das Shiverpeaks. É por isso que eles buscam constantemente o perigo, a caça mais difícil e a luta mais justa, pois suas histórias são a única coisa que verdadeiramente perdura.</p>
  </>;
}

function Skritt() {
  return <>
    <blockquote>
      <p><em>"O que o gigante descarta, o Skritt abraça. Se brilha no escuro, é nossa a caça."</em></p>
      <footer>— Alvinha</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Avarento:</strong> Você não apenas gosta de coisas brilhantes; sua alma depende delas. Seus bolsos são buracos negros de tralhas e tesouros que jamais serão abandonados.</li>
      <li><strong>Escavador:</strong> Nascido na escuridão absoluta dos níveis inferiores, você é o mestre dos túneis. Para você, a terra não é um obstáculo — é uma porta.</li>
      <li><strong>Monstruoso:</strong> Uma mutação rara causada por alquimia ou excesso de comida criou um monstro. Você é a muralha de carne da sua ninhada.</li>
      <li><strong>Rabudo:</strong> Sua cauda não é apenas um apêndice; é um terceiro braço musculoso e ágil, permitindo acrobacias que outros só conseguem sonhar.</li>
      <li><strong>Pestilento:</strong> Seu sangue é veneno, seu hálito é contágio. Você é uma arma biológica viva.</li>
    </ul>

    <h2>História</h2>
    <p>Os Skritt são uma visão desconcertante para os desavisados: humanoides pequenos e curvados que parecem um cruzamento infeliz entre um rato e um morcego. Seus corpos são cobertos por pelos curtos e ásperos, e suas orelhas são grandes e membranosas, captando o menor som nos túneis. Essa aparência, combinada com seus movimentos frenéticos, faz com que sejam frequentemente confundidos com bestas ou pragas, gerando um estigma racial profundo em Tyria.</p>
    <p>A inteligência Skritt é um paradoxo biológico. Sozinho, um Skritt é um animal ansioso, capaz apenas de pensamentos rudimentares de fuga e alimentação. Contudo, quando em grupo, eles se comunicam em uma frequência acelerada, "atropelando" frases e compartilhando informações tão rapidamente que funcionam como uma rede neural orgânica. Um grupo de Skritt pode analisar uma ameaça, discutir filosofia ou planejar uma emboscada complexa em segundos, tornando-os adversários letais para quem subestima seu intelecto coletivo. Para ouvidos estrangeiros, isso soa apenas como um chiado insuportável.</p>
    <p>Covardes demais para enfrentar os perigos da superfície aberta, os Skritt vivem em complexos subterrâneos chamados Burghs. Essas metrópoles de lixo e terra são maravilhas da engenharia improvisada, utilizando pedras roubadas e passagens naturais para criar labirintos seguros.</p>
    <p>A vida de um Skritt é curta e brutal. A alta taxa de predação é combatida por uma biologia reprodutiva explosiva: uma fêmea pode gerar ninhadas de 5 a 10 filhotes até cinco vezes durante sua vida. Esses filhotes atingem a autossuficiência em tempo recorde, muitas vezes expulsos ou movendo-se para formar novos Burghs.</p>
    <p>Devido à necessidade desesperada de recursos e sua atração inata por objetos brilhantes ("Shinies"), muitos Skritts jovens formam gangues que assaltam viajantes nas estradas. Eles não veem isso como maldade, mas como coleta necessária. Infelizmente, isso cimentou sua reputação como "pragas ladras", tornando difícil para um aventureiro Skritt ser aceito em uma taverna ou guilda sem enfrentar olhares de suspeita e nojo.</p>
  </>;
}

function Drakan({ setPaginaAtual }) {
  return <>
    <blockquote>
      <p><em>"Do pico mais gelado ao magma que aflora, a escama Drakan a história reescreve agora."</em></p>
      <footer>— Mjolnir</footer>
    </blockquote>

    <h2>História</h2>
    <div className="povo-secao-flex">
      <div className="povo-texto">
        <p>Os Drakans são uma raça bípede de origem dracônica, distinguindo-se das raças mais humanoides por sua imensa afinidade mágica e constituição resiliente. Diferente das lendas clássicas, a espécie Drakan é vasta e heterogênea. Eles são os filhos do poder primordial de Tyria, manifestando em sua biologia o domínio elemental ou a corrupção ancestral.</p>
        <p>A maior parte da população Drakan pertence à Herança Elemental. Estes são geralmente aceitos como uma raça "normal" dentro de Tyria, similar aos humanos em termos de status social. Em forte contraste, os Drakans da Herança Primordial são notavelmente raros e carregam uma reputação sombria. Por isso, os Primordiais enfrentam um racismo considerável, sendo vistos como aberrações, presságios de catástrofe ou espiões. O medo não é infundado, pois muitos Primordiais sentem um chamado biológico para servir seu ancestral.</p>
        <p>A civilização Drakan está centrada na Skycity of Bujherba, uma capital de esplendor arquitetônico que paira magicamente sobre uma pequena ilha flutuante. Bujherba serve como o principal refúgio e centro político dos Drakans, sendo governada principalmente pelos Elementais mais tradicionais e influentes.</p>
        <p>O fenótipo Drakan varia drasticamente entre as Heranças. Os Elementais mantêm uma aparência mais clássica com detalhes que refletem seu elemento. Os Primordiais são marcados por características antinaturais que frequentemente inspiram medo e repulsa: escamas secas e cinzentas como ossos, pele substituída por casca fibrosa, rachaduras incandescentes com magma pulsante, ou cristais que crescem de forma errática a partir do próprio corpo.</p>
      </div>
      <div className="povo-img-placeholder">🐉</div>
    </div>

    <h2>Heranças</h2>
    <div className="povo-secao-flex">
      <div className="povo-img-placeholder">🐉</div>
      <div className="povo-texto">
        <h3>Elementais</h3>
        <p>Os Drakans Elementais formam o grupo mais vasto e heterogêneo da espécie, evoluindo em simbiose com os ambientes naturais de Tyria. São geralmente aceitos como uma raça "normal".</p>
        <ul>
          <li><strong>Preto — O Corrosivo:</strong> Habitante de pântanos fétidos. Predador de emboscada especialista em ácido e corrosão que se camufla na água estagnada.</li>
          <li><strong>Azul — A Tempestade:</strong> Senhor dos ermos áridos e céus abertos. Utiliza a eletricidade estática para caçar, com uma hierarquia social rígida baseada no domínio territorial.</li>
          <li><strong>Verde — O Nocivo:</strong> Nativo de florestas densas. Estrategista paciente que utiliza o terreno e miasmas para enfraquecer presas antes do confronto. Territorial e observador.</li>
          <li><strong>Vermelho — O Fornalha:</strong> O predador alfa das montanhas. Seu metabolismo exige calor constante, gerando um temperamento agressivo e dominador.</li>
          <li><strong>Branco — O Feral:</strong> Nômade das tundras gélidas. Solitário e movido por instinto puro, com memória eidética para rancores e presas que escaparam.</li>
          <li><strong>Latão — O Tectônico:</strong> Habita cavernas profundas. Corpo coberto por placas de pedra polida, pesado e brutal, dominando o combate terrestre com vibração e força.</li>
        </ul>
        <h3>Primordiais</h3>
        <p>Os Drakans Primordiais são anomalias biológicas concebidas a partir da energia corruptora dos Dragões Anciões. São notavelmente raros e carregam uma reputação sombria, enfrentando racismo considerável por serem vistos como aberrações ou espiões.</p>
        <ul>
          <li><strong>Zhaitan — A Sombra Eterna:</strong> Senhor de Orr. Representa a morte inevitável e a estagnação. Ligado ao Vazio.</li>
          <li><strong>Mordremoth — A Selva Senciente:</strong> O dragão da mente e das plantas. Acredita que a individualidade é ineficiente; todos devem servir à colmeia.</li>
          <li><strong>Primordus — A Fornalha:</strong> O primeiro dragão. Habita as profundezas da terra, buscando transformar tudo em pedra e magma.</li>
          <li><strong>Jormag — O Persuasor:</strong> O dragão dos segredos e da tentação. Não congela apenas corpos, mas mentes. Seus seguidores são fanáticos convertidos por promessas de poder.</li>
          <li><strong>Kralkatorrik — O Marcador:</strong> Sua energia distorce o espaço e a matéria, criando tempestades de raios roxos e cristalizando tudo ao redor.</li>
          <li><strong>Soo-Won — A Mãe Oceano:</strong> A dragoa da água e da magia pura. Fluída, protetora e a origem de toda a vida em Tyria.</li>
          <li><strong>Aurene — A Prismática:</strong> A neta de Kralkatorrik e herdeira do equilíbrio. Representa a luz, a esperança e a união de todas as magias.</li>
        </ul>
      </div>
    </div>

    <div className="botao-habilidades-wrapper">
      <button className="botao-habilidades" onClick={() => setPaginaAtual('talento-drakan')}>
        ⚔ Ver Habilidades e Talentos dos Drakan
      </button>
    </div>
  </>;
}

function Quaggan() {
  return <>
    <blockquote>
      <p><em>"A Guerra é um jogo em que muitos morrem pela ganância e conforto… normalmente de um homem velho gordo."</em></p>
      <footer>— Alextransza</footer>
    </blockquote>

    <h2>Heranças</h2>
    <p>Os Quaggans possuem 13 variações biológicas definidas pelo local onde sua Pérola da Gênese reposou antes de eclodir:</p>
    <ul>
      <li><strong>Tocado pelas Fadas:</strong> Pele em tons pastéis de rosa ou creme, orelhas pontudas com tufos de pelo encaracolado, pequenas asas vestigiais nas costas que brilham sob o luar.</li>
      <li><strong>Verdejante:</strong> Pele em tons de verde-claro e amarelo-pálido, com um "babador" natural de folhas ao redor do pescoço e um nó na cabeça que lembra um botão de flor.</li>
      <li><strong>Habitante das Profundezas:</strong> Pele azul-escuro com peito e rosto brancos, boca levemente projetada como um bico curto e amarelado, nadadeiras mais longas e elegantes.</li>
      <li><strong>Tecelão do Céu:</strong> Esférico, coberto por penugem macia bege e marrom, com penas verdes no peito. Olhos grandes e redondos adaptados para enxergar presas de grandes alturas.</li>
      <li><strong>Portador da Praga:</strong> Pele pálida coberta por "cabelos" ou barbatanas espinhosas em tons de roxo e neon que descem pelas costas.</li>
      <li><strong>Rocha Nativa:</strong> Forma mais quadrada e robusta, pele que lembra pedra sedimentar ou cristais de sal grosso. Olhos retangulares e incrivelmente denso.</li>
      <li><strong>Assombrado:</strong> Pele cinza-escura ou verde-espectral, pontas das barbatanas em vermelho magenta. Flutua levemente ao andar.</li>
      <li><strong>Caminhante das Sombras:</strong> Esguio e com postura elegante, pelagem curta roxa e creme. Move-se com graça felina e arrogância.</li>
      <li><strong>Caçador da Terra:</strong> Cabeça desproporcionalmente grande e redonda de cor laranja-tijolo, com mandíbulas poderosas capazes de triturar pedras.</li>
      <li><strong>Vulcânico:</strong> Pele de um laranja vibrante, barriga creme e olhos azuis grandes. A característica mais marcante é a ponta da cauda, que queima perpetuamente com uma chama mágica.</li>
      <li><strong>Instável:</strong> Pele amarelo-pálido, orelhas grandes com pontas pretas e bochechas rosadas que faíscam quando riem, espirram ou sentem medo.</li>
      <li><strong>Paranormal:</strong> Cores pastéis (rosa e azul bebê) com uma protuberância cônica na cabeça. Comunicam-se por empatia e levitam pertences com a mente.</li>
      <li><strong>Amorfo:</strong> Feito de substância viscosa dourada que escorre e se recompõe constantemente. Sem pescoço definido, braços que gotejam.</li>
    </ul>

    <h2>História</h2>
    <p>Diferente de todas as outras raças de Tyria, os Quaggans não nascem de um ventre nem chocam de ovos. A lenda diz que, eras atrás, a deusa Melandru chorou ao testemunhar a brutalidade incessante das guerras no mundo. Suas lágrimas, carregadas de pura compaixão e desejo de paz, solidificaram-se ao tocar o solo de Tyria, transformando-se nas Pérolas da Gênese. Essas pérolas, espalhadas pelos cantos mais remotos do mundo, absorvem a energia elemental do ambiente onde repousam. Quando saturadas, elas se rompem, e de dentro surge um Quaggan totalmente formado, moldado pelos elementos que o chocaram.</p>
    <p>Devido à sua origem divina, os Quaggans são vistos como "Cidadãos Universais". Enquanto os Sylvari são admirados por sua beleza e os Kodan respeitados por sua força, os Quaggans são genuinamente amados. Eles despertam um instinto de proteção natural nas outras raças. Utilizam essa adoração e seus maneirismos ("Coo", "Foo") para atuar como diplomatas e mediadores onde ninguém mais conseguiria, desarmando conflitos com inocência.</p>
    <p>A existência de um Quaggan baseia-se na harmonia perfeita, mas essa harmonia é frágil. Quando um Quaggan é submetido a estresse extremo, medo ou dor, a "Pérola" metafórica dentro dele se quebra. A energia elemental que formou seu corpo entra em colapso, resultando na transformação aterrorizante conhecida como "O Desfazer" (The Unraveling). Nesse estado, a criatura fofa desaparece, dando lugar a uma besta de pura fúria e instinto. Por isso, as comunidades Quaggan pregam a calma não apenas como filosofia, mas como medida de segurança pública vital.</p>
    <p>Como não possuem pais biológicos, os Quaggans formam vilas chamadas de "Jardins". Quando uma nova Pérola da Gênese é encontrada na natureza, ela é levada para o centro da vila, onde toda a comunidade cuida dela até a eclosão. O Quaggan recém-nascido é, portanto, filho de todos. Não existem sobrenomes de família ou linhagens, apenas nomes que remetem aos sons da natureza (como Blub, Poobah ou Varonos).</p>
    <p>O coração espiritual de sua civilização bate em um lugar lendário: Moorookoo. A localização exata desta capital é um segredo guardado a sete chaves, mas todo Quaggan sabe que encontrar uma Pérola da Gênese e realizar a perigosa peregrinação para levá-la até lá é o ato de honra máxima. Diz-se que os Quaggans nascidos nas águas sagradas de Moorookoo são os mais sábios e resistentes de sua espécie, e que a cidade é a prova viva de que todas as heranças — do fogo ao gelo — podem conviver em harmonia absoluta.</p>
  </>;
}

function Hylek() {
  return <>
    <blockquote>
      <p><em>"Onde a terra afunda e o ar é pesado, o Hylek aguarda o passo errado."</em></p>
      <footer>— Yara</footer>
    </blockquote>

    <h2>Heranças</h2>
    <ul>
      <li><strong>Itzel Hylek:</strong> Pequenos, ágeis e venenosos, os Itzel dominam o combate vertical e a guerrilha nas florestas. Os de pele azul-celeste tendem a ser amigáveis e comerciantes; os de pele amarela e preta, frequentemente hostis.</li>
      <li><strong>Nuhoch Hylek:</strong> Gigantescos e brutais, os Nuhoch sacrificam a precisão pela força esmagadora. São o pilar da comunidade. Os de tons cinzentos são neutros e estoicos; os de tons avermelhados carregam fúria territorial.</li>
      <li><strong>Krait Hylek:</strong> Adaptados às magias proibidas, os Krait se sustentam drenando a vida alheia. Quanto mais escuras as escamas, maior o vínculo com a morte e a periculosidade.</li>
      <li><strong>Quott Hylek:</strong> Os Quott carregam sua casa e fortaleza nas costas em forma de carapaça. Os verdes-vivos são gentis e hospitaleiros; os de verde-musgo escuro, notoriamente preguiçosos e rabugentos.</li>
    </ul>

    <h2>História</h2>
    <p>Os Hylek são nativos indisputáveis das regiões selvagens e úmidas de Tyria. Lembram sapos humanoides de porte variado, adaptados para sobreviver onde outras raças apodreceriam. Cada Hylek é uma fábrica química ambulante; seus corpos produzem toxinas únicas às quais eles próprios são imunes. Essa biologia singular fez deles os maiores alquimistas e envenenadores do continente, capazes de criar compostos medicinais ou letais com recursos que carregam no próprio sangue.</p>
    <p>A espiritualidade Hylek flui de Tahm Kench, o Deus do Rio e o Primogênito Ancestral. Tahm Kench prega a importância da água, da barganha e, acima de tudo, da Gula. Para um Hylek, um banquete farto não é apenas uma refeição, é um ritual sagrado; a capacidade de consumir o mundo ao seu redor é vista como a maior benção. Secundariamente, cada sub-raça venera um Primogênito Menor que reflete seus valores: Itzel (A Caça), Nuhoch (A Comunidade), Krait (A Morte) e Quott (A Hospitalidade).</p>
    <p>A sociedade Hylek é visualmente comunicativa. O fenótipo e a cor de um indivíduo indicam não apenas sua tribo, mas frequentemente seu temperamento, tornando as interações com Hyleks desconhecidos uma questão de leitura cuidadosa.</p>
    <p>Devido à sua dependência da umidade, Hyleks raramente vivem permanentemente em grandes metrópoles de pedra seca. Sua capital, Micholt Grounds, é uma maravilha arquitetônica construída dentro de um pântano colossal e perigoso, com distritos inteiros submersos ou acessíveis apenas por nado. Fora de lá, eles enfrentam o preconceito: viajantes frequentemente os confundem com tribos selvagens agressivas, gerando um estigma que o Hylek aventureiro deve superar com paciência ou alquimia.</p>
  </>;
}

function Magnus() {
  return <>
    <h2>Em Breve</h2>
    <p>O conteúdo sobre os Magnus ainda está sendo desenvolvido. Retorne em breve para conhecer este povo de Tyria.</p>
  </>;
}

function Oficiais() {
  return <>
    <h2>Ancestralidades Oficiais em Tyria</h2>
    <p>Além das ancestralidades únicas de Tyria, as seguintes ancestralidades do Pathfinder 2e também existem neste mundo. Consulte a documentação oficial do sistema para seus detalhes completos de história e cultura.</p>
    <ul>
      <li><strong>Anão (Dwarf)</strong></li>
      <li><strong>Gnomo (Gnome)</strong></li>
      <li><strong>Goblin</strong></li>
      <li><strong>Halfling</strong></li>
      <li><strong>Orc</strong></li>
      <li><strong>Kitsune</strong></li>
      <li><strong>Kobold</strong></li>
      <li><strong>Leshy</strong></li>
    </ul>
    <p><em>Atenção: Algumas Adopted Heritages e Ancestry Feats podem estar bloqueadas. Consulte o Mestre antes de selecioná-las.</em></p>
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

export default function PovosDetalhe({ ancestralId, setPaginaAtual }) {
  const nome = NOMES[ancestralId] || ancestralId;
  const Conteudo = COMPONENTES[ancestralId] || (() => <p>Ancestralidade não encontrada.</p>);

  return (
    <main className="pagina-site pagina-conteudo">
      <button onClick={() => setPaginaAtual('povos')} className="botao-voltar">← Voltar aos Povos</button>
      <h1>{nome}</h1>
      <Conteudo setPaginaAtual={setPaginaAtual} />
    </main>
  );
}

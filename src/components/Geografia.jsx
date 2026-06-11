import React, { useRef, useState } from 'react';

const TOOLTIP_OFFSET = 12;
const TOOLTIP_FALLBACK_WIDTH = 320;
const TOOLTIP_FALLBACK_HEIGHT = 180;

const regioes = [
  {
    id: 1,
    pontos: '100,972 201,1030 399,982 354,824 180,771 79,895',
    nome: 'Arquipélago de Cinzas',
    resumo: 'Ilhas de magma exposto e ar denso de fuligem. Altamente perigoso.',
    imagem: ''
  },
  {
    id: 2,
    pontos: '769,982 926,771 737,645 634,704 703,953',
    nome: 'Estepes Áridas',
    resumo: 'Um deserto impiedoso e hostil esculpido pelos ventos do sudeste.',
    imagem: ''
  },
  {
    id: 3,
    pontos: '538,432 325,438 359,525 547,525',
    nome: 'Kryta',
    resumo: 'Uma das regiões mais seguras de Tyria, abrigando Divinity\'s Reach, a imponente capital dos humanos. A área é cercada por uma rede de fortes que fornecem proteção constante a viajantes e comerciantes. Graças a essa estabilidade, Kryta atrai um elevado contingente populacional de diversas ancestralidades, sendo o destino mais procurado por aqueles que buscam se estabelecer.',
    imagem: 'https://wiki.guildwars2.com/images/thumb/d/de/Queensdale_loading_screen.jpg/240px-Queensdale_loading_screen.jpg'
  },
  {
    id: 22,
    pontos: '547,525 550,559 569,704 413,703 359,525',
    nome: 'Sea of Sorrows',
    resumo: 'Uma rica e próspera região litorânea. É uma área fortemente civilizada e segura, abrigando a capital ancestral dos Quaggan e a grande cidade costeira miscigenada de Lion\'s Arch. A região acumula imensa riqueza devido ao intenso tráfego de navios e comerciantes. Nas extensões além do mar, o terreno é recortado por rios e afluentes frequentes, criando um ambiente de elevada umidade.',
    imagem: 'https://d3qqidoz8mm2hm.cloudfront.net/wp-content/uploads/wallpapers/lost-shores-1920x1200.jpg'
  },
  {
    id: 4,
    pontos: '451,982 602,1083 751,1083 703,953 434,824 391,889',
    nome: 'Península Desolada',
    resumo: 'Uma extensão de terra marrom e escassa de recursos.',
    imagem: ''
  },
  {
    id: 5,
    pontos: '737,645 883,569 910,481 883,432 817,381 703,381 647,505',
    nome: 'A Grande Cratera',
    resumo: 'Uma depressão massiva e inóspita de terra morta, cicatriz de um evento ancestral.',
    imagem: ''
  },
  {
    id: 6,
    pontos: '883,432 982,456 982,175 883,74 788,74 804,198 848,208 883,260 883,365',
    nome: 'Nethyl Glimra',
    resumo: 'Uma floresta feérica de vegetação bioluminescente em tons de rosa, roxo e azul. Embora magnífica, abriga fadas e bestas letais exclusivas deste ecossistema. Conjuradores encontram aqui manifestações mágicas únicas, tornando a região um destino tão cobiçado quanto mortal.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs8SSPB6AvCn-nUZOwvCrs0lT_wwznTFfUQ&s'
  },
  {
    id: 7,
    pontos: '926,771 972,848 982,456 883,432 910,481 883,569 737,645',
    nome: 'Costa Leste',
    resumo: 'As penínsulas verdes que sobrevivem ao lado da grande cratera.',
    imagem: ''
  },
  {
    id: 8,
    pontos: '434,824 703,953 634,704 569,704 413,703',
    nome: 'Planícies do Crepúsculo',
    resumo: 'Terras de transição entre a floresta e os ermos desertificados.',
    imagem: ''
  },
  {
    id: 9,
    pontos: '450,324 434,203 391,74 290,145 250,297 321,390',
    nome: 'Thalas Von',
    resumo: 'Um arquipélago brutal, acessível apenas a aventureiros veteranos. Viagens marítimas são impossibilitadas por criaturas colossais, resultando na ausência de civilizações. Expedições bem-sucedidas retornam com fortunas em minérios raros, relíquias antigas e flora milagrosa.',
    imagem: 'https://images.gamewatcherstatic.com/news/image/6/5a/47576/Icarus-Dangerous-Horizons-Expansion-1.jpg'
  },
  {
    id: 10,
    pontos: '713,321 727,246 804,198 593,117 508,125 490,165 526,203 526,272 593,324',
    nome: 'Vaelkyr',
    resumo: 'Uma massa de terra congelada incapaz de abrigar civilizações. Em seu coração repousa o ninho de Jormag, o Dragão Primordial do gelo e da persuasão. A área é infestada por suas crias, que aguardam o despertar de seu mestre.',
    imagem: 'https://readytorole.com/wp-content/uploads/2018/04/mountain_pass_by_sabin_boykinov-d5fgno9.jpg'
  },
  {
    id: 11,
    pontos: '926,771 769,982 761,1018 788,1073 949,1073 972,848',
    nome: 'Ilhas Tropicais',
    resumo: 'Um refúgio verdejante isolado no mar do sudeste.',
    imagem: ''
  },
  {
    id: 12,
    pontos: '250,297 290,145 150,175 64,343 150,431',
    nome: 'Colinas Escarlates',
    resumo: 'Cadeias montanhosas de rochas avermelhadas e ricas em minérios brutos. O terreno acidentado é lar de tribos nômades e feras territoriais agressivas.',
    imagem: ''
  },
  {
    id: 13,
    pontos: '634,704 737,645 647,505 538,432 550,559 569,704',
    nome: 'Shiverpeak Mountains',
    resumo: 'Uma vasta cordilheira civilizada e relativamente segura, porém marcada por um frio cortante e altitudes desconfortáveis para a maioria da população de Tyria. Este território gélido é o lar de Hoelbrak, a capital dos Norn, e de The Sanctuary, a morada dos Kodan. A região é pontilhada por vilarejos nevados e fortes robustos que protegem os corajosos viajantes e comerciantes locais.',
    imagem: 'https://d3qqidoz8mm2hm.cloudfront.net/wp-content/uploads/wallpapers/Feb_Wallpaper-1920x1200.jpg'
  },
  {
    id: 14,
    pontos: '538,432 620,365 593,324 526,272 450,324 321,390 325,438',
    nome: 'Zanarkland',
    resumo: 'Uma vasta planície rasteira que sedia a capital Drakan e diversos vilarejos multirraciais. É considerada uma das regiões mais seguras e pacíficas de Tyria, embora as viagens por suas longas estradas ainda exijam preparo e cautela básica.',
    imagem: 'https://wiki.guildwars2.com/images/7/74/Gendarran_Fields_loading_screen.jpg'
  },
  {
    id: 15,
    pontos: '703,381 817,381 883,432 883,365 883,260 848,208 804,198 727,246 713,321',
    nome: 'Nebreus Deadlands',
    resumo: 'Uma floresta rasteira e alagada, perpetuamente submersa em uma neblina fina. Este ambiente pantanoso e lúgubre é o habitat de aberrações e monstruosidades letais.',
    imagem: 'https://i.ytimg.com/vi/jsnSPFWwChM/maxresdefault.jpg'
  },
  {
    id: 16,
    pontos: '150,431 64,343 79,444 77,525 191,563 255,644 281,509',
    nome: 'Maguuma Wastes',
    resumo: 'A porção central da grande selva vermelha. Um território letal dominado pelo ninho de Mordremoth, o Dragão dos Espinhos, e infestado por suas criaturas corruptoras.',
    imagem: 'https://cdna.artstation.com/p/assets/images/images/013/881/386/large/yanli-wang-painting-149-uplox.jpg?1541505162'
  },
  {
    id: 17,
    pontos: '359,525 325,438 281,509 255,644 413,703',
    nome: 'Planície dos Ecos',
    resumo: 'Uma área plana e serena, caracterizada por campos abertos e pequenos bosques. Costuma ser uma rota de viagem segura para as caravanas que se dirigem à capital.',
    imagem: ''
  },
  {
    id: 18,
    pontos: '321,390 250,297 150,431 281,509 325,438',
    nome: 'Platô Árido',
    resumo: 'Uma região rochosa e seca, marcada por fendas profundas e ventos fortes. É um local inóspito, servindo de transição entre as densas selvas e as planícies centrais.',
    imagem: ''
  },
  {
    id: 19,
    pontos: '490,165 508,125 593,117 593,42 391,18 391,74',
    nome: 'Cerobbi Steppe',
    resumo: 'Uma vasta zona de transição onde florestas verdejantes encontram o frio rigoroso. Rica em minas e ruínas desconhecidas, sua exploração é dificultada pela presença de feras letais e sociedades hostis a visitantes.',
    imagem: 'https://images.squarespace-cdn.com/content/v1/670447eeba89c103beabb9a5/9c330af7-31bc-4b84-bab2-45bb7874fe01/Snowy+Ruins.jpg?format=1000w'
  },
  {
    id: 20,
    pontos: '647,505 703,381 713,321 593,324 620,365 538,432',
    nome: 'Região Central',
    resumo: 'Região a ser nomeada e descrita.',
    imagem: ''
  },
  {
    id: 21,
    pontos: '526,272 526,203 490,165 391,74 434,203 450,324',
    nome: 'Cume Gélido',
    resumo: 'A extremidade norte da grande cordilheira. O frio aqui é letal e as tempestades de neve são constantes, tornando a sobrevivência impossível para os despreparados.',
    imagem: ''
  },
  {
    id: 23,
    pontos: '255,644 413,703 434,824 354,824 180,771',
    nome: 'Selva Costeira',
    resumo: 'Região a ser nomeada e descrita.',
    imagem: ''
  },
  {
    id: 24,
    pontos: '77,525 191,563 255,644 180,771 78,698',
    nome: 'Região Sul-Ocidental',
    resumo: 'Região a ser nomeada e descrita.',
    imagem: ''
  }
];

export default function Geografia() {
  const tooltipRef = useRef(null);

  const [tooltip, setTooltip] = useState({
    visivel: false,
    x: 0,
    y: 0,
    titulo: '',
    resumo: '',
    imagem: ''
  });

  const calcularPosicaoTooltip = (event) => {
    const tooltipElement = tooltipRef.current;

    const tooltipWidth = tooltipElement?.offsetWidth || TOOLTIP_FALLBACK_WIDTH;
    const tooltipHeight = tooltipElement?.offsetHeight || TOOLTIP_FALLBACK_HEIGHT;

    let x = event.clientX + TOOLTIP_OFFSET;
    let y = event.clientY + TOOLTIP_OFFSET;

    if (x + tooltipWidth > window.innerWidth) {
      x = event.clientX - tooltipWidth - TOOLTIP_OFFSET;
    }

    if (y + tooltipHeight > window.innerHeight) {
      y = event.clientY - tooltipHeight - TOOLTIP_OFFSET;
    }

    x = Math.max(TOOLTIP_OFFSET, x);
    y = Math.max(TOOLTIP_OFFSET, y);

    return { x, y };
  };

  const mostrarTooltip = (event, regiao) => {
    const { x, y } = calcularPosicaoTooltip(event);

    setTooltip({
      visivel: true,
      x,
      y,
      titulo: regiao.nome,
      resumo: regiao.resumo,
      imagem: regiao.imagem
    });
  };

  const moverTooltip = (event) => {
    const { x, y } = calcularPosicaoTooltip(event);

    setTooltip((prev) => ({
      ...prev,
      x,
      y
    }));
  };

  const esconderTooltip = () => {
    setTooltip((prev) => ({
      ...prev,
      visivel: false
    }));
  };

  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Geografia de Tyria</h1>

      <p>
        O mundo de Tyria é marcado por contrastes geográficos extremos e uma
        natureza implacável. O continente central é fraturado por uma colossal
        cordilheira de picos gélidos, que atua como uma barreira natural
        dividindo climas drasticamente distintos. A oeste dessa fronteira de
        gelo, estendem-se vastas planícies férteis e platôs rochosos de tons
        avermelhados, enquanto o leste e o sul abrigam desertos áridos e
        depressões desoladas, esculpidas pela escassez de chuvas e ventos
        cortantes.
      </p>

      <p>
        A vegetação do cenário molda-se de forma rústica a cada bioma.
        Florestas densas e vibrantes dominam as costas ocidentais e as ilhas
        adjacentes, contrastando com as estepes secas das terras ermas. Ao
        sudoeste, o ambiente atinge seu ápice de hostilidade em um arquipélago
        vulcânico de rochas escuras, onde a terra expele magma e o ar é espesso
        com cinzas, evidenciando a instabilidade geológica deste mundo.
      </p>

      <div className="mapa-interativo">
        <img
          src="https://i.imgur.com/GZs4YwZ.png"
          alt="Mapa de Tyria"
          className="imagem-geografia"
        />

        <svg
          className="camada-svg"
          viewBox="0 0 1000 1100"
          preserveAspectRatio="none"
        >
          {regioes.map((regiao) => (
            <polygon
              key={regiao.id}
              points={regiao.pontos}
              className="regiao-mapa"
              onMouseEnter={(event) => mostrarTooltip(event, regiao)}
              onMouseMove={moverTooltip}
              onMouseLeave={esconderTooltip}
            />
          ))}
        </svg>
      </div>

      <div
        ref={tooltipRef}
        className="tooltip-mapa"
        style={{
          opacity: tooltip.visivel ? 1 : 0,
          left: `${tooltip.x}px`,
          top: `${tooltip.y}px`
        }}
      >
        {tooltip.imagem && (
          <img
            id="tooltip-imagem"
            src={tooltip.imagem}
            alt={tooltip.titulo}
          />
        )}

        <div className="tooltip-conteudo">
          <h3>{tooltip.titulo}</h3>
          <p>{tooltip.resumo}</p>
        </div>
      </div>
    </main>
  );
}
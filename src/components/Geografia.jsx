import React, { useRef, useState } from 'react';

const TOOLTIP_OFFSET = 12;
const TOOLTIP_FALLBACK_WIDTH = 320;
const TOOLTIP_FALLBACK_HEIGHT = 180;

const regioes = [
  {
    id: 1,
    pontos: '90,340 190,190 450,45 520,160 470,320 380,345',
    nome: 'Thalas Von',
    resumo: 'Um arquipélago brutal, acessível apenas a aventureiros veteranos. Viagens marítimas são impossibilitadas por criaturas colossais, resultando na ausência de civilizações. Expedições bem-sucedidas retornam com fortunas em minérios raros, relíquias antigas e flora milagrosa.',
    imagem: 'https://images.gamewatcherstatic.com/news/image/6/5a/47576/Icarus-Dangerous-Horizons-Expansion-1.jpg'
  },
  {
    id: 2,
    pontos: '450,45 610,45 610,120 520,310 470,320 520,160',
    nome: 'Cerobbi Steppe',
    resumo: 'Uma vasta zona de transição onde florestas verdejantes encontram o frio rigoroso. Rica em minas e ruínas desconhecidas, sua exploração é dificultada pela presença de feras letais e sociedades hostis a visitantes.',
    imagem: 'https://images.squarespace-cdn.com/content/v1/670447eeba89c103beabb9a5/9c330af7-31bc-4b84-bab2-45bb7874fe01/Snowy+Ruins.jpg?format=1000w'
  },
  {
    id: 3,
    pontos: '610,45 800,85 840,225 720,265 720,380 540,435 520,310 610,120',
    nome: 'Vaelkyr',
    resumo: 'Uma massa de terra congelada incapaz de abrigar civilizações. Em seu coração repousa o ninho de Jormag, o Dragão Primordial do gelo e da persuasão. A área é infestada por suas crias, que aguardam o despertar de seu mestre.',
    imagem: 'https://readytorole.com/wp-content/uploads/2018/04/mountain_pass_by_sabin_boykinov-d5fgno9.jpg'
  },
  {
    id: 4,
    pontos: '800,85 980,85 970,470 860,420 840,225',
    nome: 'Nethyl Glimra',
    resumo: 'Uma floresta feérica de vegetação bioluminescente em tons de rosa, roxo e azul. Embora magnífica, abriga fadas e bestas letais exclusivas deste ecossistema. Conjuradores encontram aqui manifestações mágicas únicas, tornando a região um destino tão cobiçado quanto mortal.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs8SSPB6AvCn-nUZOwvCrs0lT_wwznTFfUQ&s'
  },
  {
    id: 5,
    pontos: '90,340 380,345 380,460 270,640 140,610 65,490',
    nome: 'Maguuma Wastes',
    resumo: 'Uma selva densa dividida em dois extremos territoriais. O norte é um território letal dominado pelo ninho de Mordremoth, o Dragão dos Espinhos. O sul abriga as capitais Sylvari, Asura e Hylek, servindo como uma zona civilizada e moderadamente segura para o comércio livre.',
    imagem: 'https://cdna.artstation.com/p/assets/images/images/013/881/386/large/yanli-wang-painting-149-uplox.jpg?1541505162'
  },
  {
    id: 6,
    pontos: '380,345 470,320 520,310 540,435 555,460 400,460 380,460',
    nome: 'Zanarkland',
    resumo: 'Uma vasta planície rasteira que sedia a capital Drakan e diversos vilarejos multirraciais. É considerada uma das regiões mais seguras e pacíficas de Tyria, embora as viagens por suas longas estradas ainda exijam preparo e cautela básica.',
    imagem: 'https://wiki.guildwars2.com/images/7/74/Gendarran_Fields_loading_screen.jpg'
  },
  {
    id: 7,
    pontos: '400,460 555,460 555,530 400,530',
    nome: 'O Refúgio',
    resumo: 'Uma zona restrita e misteriosa encravada na floresta.',
    imagem: ''
  },
  {
    id: 8,
    pontos: '270,640 380,460 400,460 400,530 555,530 555,685 410,685',
    nome: 'Selva Meridional',
    resumo: 'Matas densas que se estendem até a fronteira sul.',
    imagem: ''
  },
  {
    id: 9,
    pontos: '540,435 720,380 635,530 710,650 555,685 555,460',
    nome: 'Picos Gélidos (Sul)',
    resumo: 'As montanhas congeladas que descem até o centro do mundo.',
    imagem: ''
  },
  {
    id: 10,
    pontos: '720,380 720,265 840,225 860,420',
    nome: 'Região Provisória (Norte da Cratera)',
    resumo: 'Uma área de transição que separa os picos gélidos da terra morta mais ao sul. Aguardando registros dos exploradores.',
    imagem: ''
  },
  {
    id: 11,
    pontos: '720,380 860,420 970,470 900,600 710,650 635,530',
    nome: 'A Grande Cratera',
    resumo: 'Uma depressão massiva e inóspita de terra morta, cicatriz de um evento ancestral.',
    imagem: ''
  },
  {
    id: 12,
    pontos: '970,470 980,810 880,720 900,600',
    nome: 'Costa Leste',
    resumo: 'As penínsulas verdes que sobrevivem ao lado da grande cratera.',
    imagem: ''
  },
  {
    id: 13,
    pontos: '710,650 900,600 880,720 760,890 690,810 630,690',
    nome: 'Estepes Áridas',
    resumo: 'Um deserto impiedoso e hostil esculpido pelos ventos do sudeste.',
    imagem: ''
  },
  {
    id: 14,
    pontos: '410,685 555,685 630,690 690,810 500,810 460,780',
    nome: 'Planícies do Crepúsculo',
    resumo: 'Terras de transição entre a floresta e os ermos desertificados.',
    imagem: ''
  },
  {
    id: 15,
    pontos: '80,800 240,750 380,800 400,980 200,1050 50,1020',
    nome: 'Arquipélago de Cinzas',
    resumo: 'Ilhas de magma exposto e ar denso de fuligem. Altamente perigoso.',
    imagem: ''
  },
  {
    id: 16,
    pontos: '270,640 410,685 460,780 290,750',
    nome: 'Ilhas Fragmentadas',
    resumo: 'Pequenos pedaços de terra estilhaçados pela força do oceano.',
    imagem: ''
  },
  {
    id: 17,
    pontos: '410,870 500,810 690,810 760,890 720,950 730,1060 550,1080',
    nome: 'Península Desolada',
    resumo: 'Uma extensão de terra marrom e escassa de recursos.',
    imagem: ''
  },
  {
    id: 18,
    pontos: '760,890 880,720 980,810 950,1030 760,1050',
    nome: 'Ilhas Tropicais',
    resumo: 'Um refúgio verdejante isolado no mar do sudeste.',
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
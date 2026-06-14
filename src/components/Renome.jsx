import React from 'react';

export default function Renome() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Renome</h1>

      <blockquote>
        <p>O <strong>Renome</strong> representa o prestígio, a influência e a fama (ou infâmia) que o seu personagem possui dentro de uma capital ou metrópole específica. O Renome é <strong>localizado</strong> — suas conquistas em uma cidade podem não ter o mesmo peso em outra, embora sua fama possa viajar através de fronteiras aliadas.</p>
      </blockquote>

      <hr />

      <h2>📊 A Escala de Influência</h2>
      <p>O Renome utiliza uma escala de <strong>-70 a 70</strong>. Você começa em 0.</p>

      <table>
        <thead>
          <tr>
            <th>Pontos</th>
            <th>Título</th>
            <th>Atitude da Cidade e Benefícios</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>50 a 70</strong></td><td><strong>Herói</strong></td><td>Reverência total. Regalias de governante, mobilização de tropas e acesso aos Monólitos (ver seção correspondente).</td></tr>
          <tr><td><strong>30 a 49</strong></td><td><strong>Benfeitor</strong></td><td>Reconhecimento de elite. Acesso a estoques excêntricos, treinos de elite e abrigos de luxo.</td></tr>
          <tr><td><strong>10 a 29</strong></td><td><strong>Cidadão</strong></td><td>Amistoso. Membro da comunidade com permissão total de trânsito e descontos em vendas.</td></tr>
          <tr><td><strong>-9 a 9</strong></td><td><strong>Forasteiro</strong></td><td>Neutro. Visto com indiferença ou curiosidade cautelosa.</td></tr>
          <tr><td><strong>-10 a -29</strong></td><td><strong>Má Influência</strong></td><td>Hostilidade passiva. Visto como prejudicial; entrada na cidade pode ser negada.</td></tr>
          <tr><td><strong>-30 a -49</strong></td><td><strong>Malfeitor</strong></td><td>Hostilidade ativa. Visto como bandido; entrada proibida. Ser pego pode resultar em morte.</td></tr>
          <tr><td><strong>-50 a -70</strong></td><td><strong>Vilão</strong></td><td>Caçado. A cidade mobiliza batedores e heróis para trazer o seu fim.</td></tr>
        </tbody>
      </table>

      <hr />

      <h2>📈 Ascensão e Queda</h2>
      <p>Construir um nome exige tempo e esforço, mas destruí-lo exige apenas um segundo de erro.</p>
      <ul>
        <li><strong>Progressão Dificultada:</strong> Quanto maior o seu Renome, mais difícil se torna subir. Atos comuns que rendem pontos para um <em>Cidadão</em> podem ser vistos como "apenas obrigação" para um <em>Herói</em>. A magnitude do ganho fica a critério do Mestre conforme a importância do feito.</li>
        <li><strong>O Desmoronamento:</strong> Atitudes extremas — como assassinatos de inocentes, traição pública ou roubo de tesouros nacionais — podem zerar ou negativar seu Renome instantaneamente, independente de quanto tempo você levou para construí-lo.</li>
      </ul>

      <hr />

      <h2>🤝 O Efeito Cascata</h2>
      <p>Seu Renome não afeta apenas você, mas todos ao seu redor.</p>
      <ul>
        <li><strong>A Sombra do Herói:</strong> Se você é um <strong>Herói</strong>, seus companheiros diretos são automaticamente vistos como <strong>Benfeitores</strong> pela população local.</li>
        <li><strong>Geopolítica:</strong> Cidades aliadas a uma metrópole onde você é <strong>Herói</strong> também passarão a te considerar um <strong>Benfeitor</strong>. O inverso também vale: se você é <strong>Vilão</strong> em uma capital, cidades aliadas a ela te enxergarão como <strong>Malfeitor</strong>.</li>
        <li><strong>A Mancha do Vilão:</strong> Se você é um <strong>Vilão</strong>, pessoas amistosas a você passam a ser vistas como <strong>Má Influência</strong> ou <strong>Malfeitores</strong> pela mesma metrópole.</li>
      </ul>
    </main>
  );
}

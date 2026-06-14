import React from 'react';

export default function Calendario() {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Calendário</h1>

      <h2>Meses do Ano</h2>
      <table>
        <thead>
          <tr>
            <th>Estação</th>
            <th>Mês</th>
            <th>Nome do Mês</th>
            <th>Clima / Sensação Típica</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Primavera</td><td>1</td><td>Sopro do Despertar</td><td>Ventos fortes, início do degelo.</td></tr>
          <tr><td></td><td>2</td><td>Raiz Verdejante</td><td>Explosão de vida na selva, polinização.</td></tr>
          <tr><td></td><td>3</td><td>Céu de Tempestade</td><td>Chuvas rápidas e trovões (eletricidade estática alta).</td></tr>
          <tr><td>Verão</td><td>4</td><td>Sol da Ascensão</td><td>O calor começa a apertar.</td></tr>
          <tr><td></td><td>5</td><td>Alta Forja</td><td>O pico do calor, seco e intenso.</td></tr>
          <tr><td></td><td>6</td><td>Brasa Final</td><td>Calor abafado, queimadas naturais.</td></tr>
          <tr><td>Outono</td><td>7</td><td>Queda das Águas</td><td>Início das chuvas torrenciais.</td></tr>
          <tr><td></td><td>8</td><td>Maré do Éter</td><td>Auroras mágicas no céu, anomalias arcanas.</td></tr>
          <tr><td></td><td>9</td><td>Véu da Névoa</td><td>Neblina densa, dias cinzentos e místicos.</td></tr>
          <tr><td>Inverno</td><td>10</td><td>Passo de Pedra</td><td>O solo endurece, as folhas caem.</td></tr>
          <tr><td></td><td>11</td><td>Garra Gélida</td><td>Neve pesada, lagos congelam.</td></tr>
          <tr><td></td><td>12</td><td>Grande Silêncio</td><td>Dias curtos, a natureza "dorme".</td></tr>
        </tbody>
      </table>

      <p>Cada mês possui 28 dias (4 semanas).</p>

      <h2>Dias da Semana</h2>
      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Nome</th>
            <th>Significado / Associação</th>
            <th>Mecânica Sugerida</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1º</td><td>Primordia</td><td>O Começo, Fogo, Dragões.</td><td>Dia do empenho e vontade resoluta.</td></tr>
          <tr><td>2º</td><td>Mecanaria</td><td>Tecnologia, Magia, Criatividade.</td><td>Dia para inovações num âmbito geral.</td></tr>
          <tr><td>3º</td><td>Verdania</td><td>Natureza, Vida, Selva.</td><td>Dia da agricultura, trato com animais e natureza.</td></tr>
          <tr><td>4º</td><td>Arcana</td><td>Magia, Cristal, Éter.</td><td>Dia de estudos. Testes de Arcana ou Occultism facilitados.</td></tr>
          <tr><td>5º</td><td>Aeria</td><td>Ar, Vento, Viagem.</td><td>Dia tradicional de comércio e viagens longas.</td></tr>
          <tr><td>6º</td><td>Umbra</td><td>Escuridão, Morte, Gelo.</td><td>Dia de descanso, luto e atividades ilícitas.</td></tr>
          <tr><td>7º</td><td>Aeterna</td><td>A União, O Espírito, Luz.</td><td>Dia para festejos em comunidade.</td></tr>
        </tbody>
      </table>
    </main>
  );
}

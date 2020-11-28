import React from 'react';
import { ButtonPage, ButtonURL } from '@components/button';
import './rules.page.styles.css';
import CanastraSuja from '@assets/images/canastra-suja.jpg';
import CanastraLimpa from '@assets/images/canastra-limpa.jpg';

export function Rules() {
  return (
    <div className="container-rules">
      <h1 className="title-rules">Regras</h1>
      <h2 className="topic-rules">Formatação</h2>
      <p className="paragraph-rules">
        Pode ser jogado com dois ou quatro jogadores.
        <br />
        <br />
        No jogo com dois participantes, você jogará contra a única pessoa presente na mesa. A contagem de pontos é
        individual.
        <br />
        Quando quatro pessoas participam, duas duplas são formadas, e uma joga contra a outra. O seu parceiro de jogo
        será a pessoa que estiver posicionada na sua frente, a contagem de ponto é em dupla.
        <br />
        <br />
        A distribuição das cartas é feita em ordem horária.
        <br />
        <br />
        Jogadores: 2 ou 4<br />
        Número de cartas: 108 (2 baralhos sem Joker)
        <br />
        Distribuição: 11 cartas para cada participante e dois mortos com 11 cartas cada um
        <br />
        Objetivo: O jogador ou a dupla que atingir 3000 pontos primeiro, ganha a partida.
      </p>
      <br />

      <h2 className="topic-rules">Como funciona</h2>
      <p className="paragraph-rules">
        O primeiro jogador compra uma carta do monte ou do lixo, verifica quais são as combinações que pode fazer com
        essa carta e joga fora uma que não lhe interesse. Essa carta vai para a lixeira. Após o descarte, é a vez do
        jogador à esquerda daquele que começou a rodada, e assim por diante. Do segundo jogador em diante, existe a
        opção de comprar uma carta do monte ou todas as cartas da lixeira.
        <br />
        <br />
        No jogo de Tranca, apenas a última carta jogada na lixeira é exibida e as demais cartas ficam ocultas. O jogador
        só poderá comprar o lixo se a carta que estiver no topo do lixo puder ser utilizada em algum jogo que ele tenha
        baixado, ou que possa ser combinada com as cartas da própria mão, formando um novo a ser baixado.
        <br />
        <br />
        Caso a última carta jogada na lixeira seja um 3 preto, o jogador necessariamente terá de comprar do monte.
        <br />
        Após cada compra, o jogador poderá baixar um jogo antes de descartar uma carta da sua mão. O descarte significa
        que ele terminou sua jogada e está passando a vez para o próximo jogador. Uma vez feito o descarte, não é
        possível alterar a carta descartada ou modificar o seu jogo.
        <br />
        <br />O jogador que bater com as onze cartas iniciais, pegará o morto e o jogo continuará como antes. Se um
        jogador que já pegou um morto tornar a bater, terminará a partida. Se outra dupla ou o outro jogador não pegar o
        morto, serão descontados 100 pontos correspondentes ao morto, além das cartas que o jogador tiver em mãos.
      </p>

      <h2 className="topic-rules">Convenções</h2>
      <p className="paragraph-rules">
        Pode trinca (também chamada de "lavadeira")
        <br />
        Não tem Joker (também chamado de "curingão")
        <br />
        Tem morto
        <br />
        Pode bater com canastra suja
      </p>

      <h2 className="topic-rules">Convenções</h2>
      <p className="paragraph-rules">
        <b>Baixar um jogo –</b> Um jogo é formado por 3 ou mais cartas do mesmo naipe, ordenadas em sequência numérica
        ou três ou mais cartas do mesmo valor, independente do naipe (trinca). No decorrer da partida podem-se
        acrescentar mais cartas ao jogo.
        <br />
        <br />
        Comprar o lixo - Você só poderá comprar o lixo se a carta que estiver no topo do lixo puder ser utilizada em
        algum jogo já baixado ou se puder ser combinada com as cartas que você já possui na mão e formando assim um novo
        jogo, que deverá ser obrigatoriamente baixado.
        <br />
        <br />
        <b>3 de naipe preto (3 de espadas ♠ e 3 de paus ♣) -</b> Não podem ser utilizados em jogos, ou seja, você não
        poderá formar nenhuma sequência utilizando estas cartas. Quando um 3 preto é jogado na lixeira, ele "tranca" o
        lixo, ou seja, impede que o próximo jogador compre o lixo, sendo obrigado a comprar uma carta do monte.
        <br />
        <br />
        <b>3 de naipe vermelho (3 de copas ♥ e 3 de ouros ♦) -</b> Podem ser utilizados apenas se forem baixados
        sozinhos, não podendo ser utilizados em outros jogos. No final da partida, cada jogador ou dupla ganhará 100
        pontos por 3 vermelho baixado, caso tenha feito alguma canastra (limpa ou suja), ou perderá 100 pontos por 3
        vermelho baixado, caso não tenha feito canastra.
        <br />
        <br />
        Curingas - Não há no Joker no jogo de Tranca. Isso quer dizer que apenas o "2" poderá ser utilizado como
        curinga, podendo substituir qualquer carta. Entretanto, como os "3" vermelhos e os "3" pretos não podem ser
        utilizados na formação de jogos, não é possível limpar uma canastra suja, no jogo de Tranca.
        <br />
        <br />
        <b>Morto -</b> É o montante de 11 cartas que um jogador recebe quando acabam todas as cartas da mão. Se o jogo
        for de 4 jogadores, cada morto corresponde a uma dupla. Só pode pegar o morto, o primeiro jogador da dupla a
        acabar com as cartas da própria mão. Não é possível que a mesma dupla, ou o mesmo jogador, pegue os dois mortos.
        Caso as cartas do monte acabem, e haja algum morto na mesa, este será automaticamente utilizado como o monte.
        <br />
        <br />
        <b>Batida –</b> É quando acabam as cartas de um jogador, sendo que este ou sua dupla já tenha pegado o morto. No
        caso de um jogo em que nenhum jogador tenha pegado o morto, só é possível bater quando os dois mortos virarem
        monte e as cartas da mão do jogador tenham acabado.
        <br />
        <br />
        <b>Batida Direta –</b> É aquela em que o jogador acaba com as cartas da mão sem jogar nenhuma fora, ou seja,
        todas as cartas vão para jogos na mesa. Caso haja morto, o jogador irá pegá-lo e então continuará a jogar, sem
        comprar carta.
        <br />
        <br />
        Batida Indireta – É aquela em que o jogador acaba com as cartas da mão após jogar a última fora. Caso haja
        morto, o jogador irá pegá-lo, mas só poderá jogar na próxima rodada.
        <br />
        <br />
        <b>Trinca -</b> A trinca é formada por 3 ou mais cartas do mesmo valor, independente do naipe.
        <br />
        <br />
        <b>Canastra -</b> Jogo de sete cartas ou mais do mesmo valor de qualquer naipe, ou jogo de sete cartas em
        sequência, do mesmo naipe. Existem dois tipos de canastra, a suja que tem coringa e a limpa que não tem:
      </p>
      <img className="image-rules" src={CanastraSuja} alt="Canastra Limpa" />
      <img className="image-rules" src={CanastraLimpa} alt="Canastra Suja" />
      <br />

      <h2 className="topic-rules">Contagem dos pontos</h2>
      <p className="paragraph-rules">
        Ao término da partida, somam-se os pontos na mesa, ou seja, os valores das cartas baixadas e o valor extra das
        canastras. Descontam-se os valores das cartas que sobraram nas mãos de cada jogador.
        <br />
        <br />
        Para o jogador ou dupla que bateu, somam-se 100 pontos da batida. Caso o outro jogador ou dupla não tenha pegado
        o morto, diminui-se 100 pontos como penalidade. Se um jogador comprar o morto por batida indireta, e o
        adversário terminar a partida antes de chegar a sua vez, o morto deverá ser pago, como se não tivesse sido
        comprado.
      </p>
      <br />
      <h2 className="topic-rules">Outras Regras</h2>
      <ButtonURL site="Jogatina" url="https://www.jogatina.com/regras-como-jogar-tranca.html" />
      <ButtonURL site="Jogos do Rei" url="http://www.jogosdorei.com.br/regras-tranca.php" />
      <ButtonURL site="Net Cartas" url="https://netcartas.com.br/tranca/regras.jsp" />
      <br />
      <ButtonPage title="Inicio" icon="clubs" />
    </div>
  );
}

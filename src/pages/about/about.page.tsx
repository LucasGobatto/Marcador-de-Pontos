import React from 'react';
import { ButtonPage } from '@components';
import './about.page.styles.css';

export function About() {
  return (
    <div>
      <h1>De onde veio a ideia de fazer o app?</h1>
      <p>
        Na nossa família, todo mundo gosta de jogar tranca. E quando nos reunimos, vamos longe. 1h, 2h às vezes até 3h
        da manhã jogando. Pensa num monte de velhinho que costuma acordar 5h30 indo dormir às 3h. Enfim, sempre que
        jogamos acontece a mesma coisa: acaba a partida e precisamos anotar os pontos. Junto com o baralho já deixamos o
        caderninho para anotar, mas quando estamos num ambiente diferente, sempre vira um problema achar um caderno ou
        uma folha para anotar, e ninguém lembra de carregar junto com o baralho. Fora isso, ainda tem a questão da
        caneta. A primeira caneta que você encontrar muito provavelmente não vai estar funcionando e você vai ter que
        achar outra. Só quem joga muito e passa por essa situação com certa frequência que sabe o quão irritante isso
        pode ser. Com essa questão em mente, eu resolvi achar uma solução melhor, e para isso pensei em usar um
        instrumento que nunca sai do nosso lado: o celular. Procurei alguns apps prontos, mas no geral eram complexos
        demais pro que eu procurava, tentei usar planilha no Google drive, bloco de notas, mas nada funcionou muito bem,
        porque marcar pontos de tranca tem algumas especificidades que fazem diferença quanto a manipulação das
        informações. Foi então que resolvi partir pra criar um app próprio, bem simples e direto. Parece meio exagerado
        partir para a criação de um app para resolver um problema tão simples né? Mas a verdade é que eu sou um
        entusiasta da programação, e pra mim isso foi um grande momento de aprendizado e prática sobre o assunto.
        Apresento-lhes então, o Marcador de Pontos. Espero que possam aproveitá-lo tanto quanto eu estou aproveitando :)
      </p>
      <p className="Criadores">
        Criadores:
        <br />
        Rodrigo Gobatto e Lucas Gobatto
      </p>
      <br />
      <ButtonPage title="Inicio" icon="home" />
    </div>
  );
}

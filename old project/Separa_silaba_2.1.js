'use strict';

var _random = require('random');

var _pj;
function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === 'string') {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }
  container['in_es6'] = in_es6;
  return container;
}
_pj = {};
_pj_snippets(_pj);
function main() {
  var lista, nome1, nome2, nome_final;
  lista = le_arquivo();
  nome1 = input('Digite um nome: ');
  nome2 = input('Digite outro nome: ');
  nome1 = nome1.lower();
  nome2 = nome2.lower();
  nome1 = separa_silaba(nome1, lista);
  nome2 = separa_silaba(nome2, lista);
  nome_final = aleatorio(nome1, nome2);
  console.log(nome_final);
}
function aleatorio(N1, N2) {
  var L, esta_N1, esta_N2, i, nome, num, numeros, quant, silabas, terminou;
  L = [];
  for (var i, _pj_c = 0, _pj_a = N1, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    i = _pj_a[_pj_c];
    L.append(i);
  }
  for (var i, _pj_c = 0, _pj_a = N2, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    i = _pj_a[_pj_c];
    L.append(i);
  }
  nome = '';
  numeros = [];
  silabas = [];
  i = 0;
  quant = 4;
  terminou = false;
  esta_N1 = 0;
  esta_N2 = 0;
  while (i < quant && !terminou) {
    num = (0, _random.randint)(0, L.length - 1);
    if (!_pj.in_es6(num, numeros)) {
      if (i === 0) {
        nome += L[num].lower().capitalize();
        silabas.append(L[num]);
      } else {
        nome += L[num];
        silabas.append(L[num]);
      }
      numeros.append(num);
      i += 1;
    }
    if (i === quant) {
      for (var i = 0, _pj_a = silabas.length; i < _pj_a; i += 1) {
        if (_pj.in_es6(silabas[i], N1)) {
          esta_N1 += 1;
        } else {
          esta_N2 += 1;
        }
      }
      if (esta_N1 === esta_N2) {
        terminou = true;
      } else {
        esta_N1 = 0;
        esta_N2 = 0;
        i = 0;
        nome = '';
        numeros = [];
        silabas = [];
      }
    }
  }
  return nome;
}
function separa_silaba(N, L) {
  /*
    C+V+R+S: se R for C, com C != L = ['l', 'r', 'n', 'm', 's', 'z', 'x'] cortar
    em V. Se C e L, continuar lendo. Se R == C, CeL e S == V, formar duas silabas, C+V
    e R+S, caso contrario formar C+V e ler a partir de R.
     V+C+R+S: se C != L, cortar em V, caso contrário, continuar lendo. Se R == V,
    cortar em R, se R == C, continuar lendo, se S==V, cortar em R e formar as sila-
    bas V e C+R+S (c+c+v). Se R == V
      Exemplo: palhaço - Formato C+V+C+C+V+C+V
    Leitura: C + V, R = CeL -> continua lendo. S = C, forma C+V -> Le a partir de R.
    Silaba formada: 'pa-'
    */
  var E, V, palavra, silaba;
  V = ['a', 'e', 'i', 'o', 'u'];
  silaba = '';
  palavra = [];
  if (_pj.in_es6(N[0], V)) {
    for (var i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (_pj.in_es6(silaba + N[i], L)) {
        console.log(N[i], silaba);
        silaba += N[i];
        if (i === N.length - 1) {
          console.log('entrou', 1);
          palavra.append(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !_pj.in_es6(silaba + N[i], L)) {
          if (_pj.in_es6(silaba[0], V) && _pj.in_es6(silaba[1] + N[i], L)) {
            palavra.append(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              console.log('entrou', 2);
              palavra.append(silaba);
            }
          } else {
            if (_pj.in_es6(silaba[0], L) && !_pj.in_es6(silaba[1] + N[i], L)) {
              palavra.append(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                console.log('entrou', 3);
                palavra.append(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (_pj.in_es6(silaba[0] + silaba[1], L) && _pj.in_es6(silaba[2] + N[i], L)) {
              palavra.append(silaba[0] + silaba[1]);
              silaba = silaba[2] + N[i];
              if (i === N.length - 1) {
                console.log('entrou', 4);
                palavra.append(silaba);
              }
            } else {
              if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                palavra.append(silaba);
                silaba = N[i];
                if (i === N.length - 1) {
                  console.log('entrou', 5);
                  palavra.append(silaba);
                }
              }
            }
          } else {
            if ((silaba + N[i]).length === 5) {
              if (_pj.in_es6(silaba[0] + silaba[1] + silaba[2], L) && _pj.in_es6(silaba[3] + N[i], L)) {
                palavra.append(silaba[0] + silaba[1] + silaba[2]);
                silaba = silaba[3] + N[i];
                if (i === N.length - 1) {
                  console.log('entrou', 6);
                  palavra.append(silaba);
                }
              }
            } else {
              palavra.append(silaba);
              silaba = '';
              silaba += N[i];
            }
          }
        }
      }
    }
  } else {
    for (var i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (_pj.in_es6(silaba + N[i], L)) {
        silaba += N[i];
        if (i === N.length - 1) {
          console.log('entrou', 7);
          palavra.append(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !_pj.in_es6(silaba + N[i], L)) {
          if (_pj.in_es6(silaba[0], V) && _pj.in_es6(silaba[1] + N[i], L)) {
            palavra.append(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              console.log('entrou', 8);
              palavra.append(silaba);
            }
          } else {
            if (_pj.in_es6(silaba[0], L) && !_pj.in_es6(silaba[1] + N[i], L)) {
              palavra.append(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                console.log('entrou', 9);
                palavra.append(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (i < N.length - 2) {
              if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i] + N[i + 1] + N[i + 2], L)) {
                console.log('entrou', 10);
                palavra.append(silaba);
                silaba = N[i];
              } else {
                if (_pj.in_es6(silaba[0] + silaba[1], L) && _pj.in_es6(silaba[2] + N[i], L)) {
                  palavra.append(silaba[0] + silaba[1]);
                  silaba = silaba[2] + N[i];
                  if (i === N.length - 1) {
                    console.log('entrou', 11);
                    palavra.append(silaba);
                  }
                } else {
                  if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                    palavra.append(silaba);
                    silaba = N[i];
                    if (i === N.length - 1) {
                      console.log('entrou', 12);
                      palavra.append(silaba);
                    }
                  }
                }
              }
            } else {
              if (_pj.in_es6(silaba[0] + silaba[1], L) && _pj.in_es6(silaba[2] + N[i], L)) {
                palavra.append(silaba[0] + silaba[1]);
                silaba = silaba[2] + N[i];
                if (i === N.length - 1) {
                  console.log('entrou', 13);
                  palavra.append(silaba);
                }
              } else {
                if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                  palavra.append(silaba);
                  silaba = N[i];
                  if (i === N.length - 1) {
                    console.log('entrou', 14);
                    palavra.append(silaba);
                  }
                }
              }
            }
          } else {
            palavra.append(silaba);
            silaba = '';
            silaba += N[i];
            if (i === N.length - 1) {
              console.log('entrou', 15);
              palavra.append(silaba);
            }
          }
        }
      }
    }
  }
  return palavra;
}
function le_arquivo() {
  var a, arquivo, lista;
  lista = [];
  arquivo = open('SILABAS_FINAL.txt', 'r');
  a = arquivo.readline();
  lista = a.split();
  arquivo.close();
  console.log(lista.length);
  return lista;
}
main();
//# sourceMappingURL=Separa_silaba_2.1.js.map

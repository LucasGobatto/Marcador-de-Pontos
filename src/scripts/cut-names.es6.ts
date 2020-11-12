import { silabas } from './silabas';

interface SnippertsReturn {
  [_in: string]: (left: any, right: any) => boolean;
}

const method = {} as SnippertsReturn;

function _pj_snippets(container: SnippertsReturn): SnippertsReturn {
  function _in(left: any, right: any): boolean {
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
  container['_in'] = _in;
  return container;
}
_pj_snippets(method);

export function cutName(nome: string): Array<string> {
  const L = silabas;
  const N = nome.toLowerCase();
  const V = ['a', 'e', 'i', 'o', 'u'];
  let silaba = '';
  const palavra = [];
  if (method._in(N[0], V)) {
    for (let i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (method._in(silaba + N[i], L)) {
        silaba += N[i];
        if (i === N.length - 1) {
          palavra.push(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !method._in(silaba + N[i], L)) {
          if (method._in(silaba[0], V) && method._in(silaba[1] + N[i], L)) {
            palavra.push(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          } else {
            if (method._in(silaba[0], L) && !method._in(silaba[1] + N[i], L)) {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (method._in(silaba[0] + silaba[1], L) && method._in(silaba[2] + N[i], L)) {
              palavra.push(silaba[0] + silaba[1]);
              silaba = silaba[2] + N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            } else {
              if (method._in(silaba, L) && method._in(N[i], L)) {
                palavra.push(silaba);
                silaba = N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              }
            }
          } else {
            if ((silaba + N[i]).length === 5) {
              if (method._in(silaba[0] + silaba[1] + silaba[2], L) && method._in(silaba[3] + N[i], L)) {
                palavra.push(silaba[0] + silaba[1] + silaba[2]);
                silaba = silaba[3] + N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              }
            } else {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
            }
          }
        }
      }
    }
  } else {
    for (let i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (method._in(silaba + N[i], L)) {
        silaba += N[i];
        if (i === N.length - 1) {
          palavra.push(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !method._in(silaba + N[i], L)) {
          if (method._in(silaba[0], V) && method._in(silaba[1] + N[i], L)) {
            palavra.push(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          } else {
            if (method._in(silaba[0], L) && !method._in(silaba[1] + N[i], L)) {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (i < N.length - 2) {
              if (method._in(silaba, L) && method._in(N[i] + N[i + 1] + N[i + 2], L)) {
                palavra.push(silaba);
                silaba = N[i];
              } else {
                if (method._in(silaba[0] + silaba[1], L) && method._in(silaba[2] + N[i], L)) {
                  palavra.push(silaba[0] + silaba[1]);
                  silaba = silaba[2] + N[i];
                  if (i === N.length - 1) {
                    palavra.push(silaba);
                  }
                } else {
                  if (method._in(silaba, L) && method._in(N[i], L)) {
                    palavra.push(silaba);
                    silaba = N[i];
                    if (i === N.length - 1) {
                      palavra.push(silaba);
                    }
                  }
                }
              }
            } else {
              if (method._in(silaba[0] + silaba[1], L) && method._in(silaba[2] + N[i], L)) {
                palavra.push(silaba[0] + silaba[1]);
                silaba = silaba[2] + N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              } else {
                if (method._in(silaba, L) && method._in(N[i], L)) {
                  palavra.push(silaba);
                  silaba = N[i];
                  if (i === N.length - 1) {
                    palavra.push(silaba);
                  }
                }
              }
            }
          } else {
            palavra.push(silaba);
            silaba = '';
            silaba += N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          }
        }
      }
    }
  }
  return palavra;
}

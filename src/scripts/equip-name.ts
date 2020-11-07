import { cutName } from './cut-names.es6';

export function equipName(name1: string, name2: string): string {
  const player1 = cutName(name1) as string[];
  const player2 = cutName(name2) as string[];
  const randomName = makeRandomName(player1, player2)
  return randomName;
}

function makeRandomName(name1: string[], name2:string[]): string {
  const randomList: string[] = [];
  let randomName = '';
  const maxValue = 3;

  name1.map((i: string) => randomList.push(i));
  name2.map((i: string) => randomList.push(i));
  console.log(name1, randomList.length);
  console.log(name2, randomList.length);

  let i = 0;
  let initial = 0;
  while (i < maxValue) {
    var index = getRandomInt(initial, randomList.length);
    if (randomName.indexOf(randomList[index]) === -1) {
      randomName += randomList[index];
      if (i === initial + 1) {
        initial++;
      }
      i++;
    }
  }
  randomName = randomName.charAt(0).toUpperCase() + randomName.slice(1);
  return randomName;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function onlyLetter(text: string): boolean {
  // false for just letters and true for else;
  if (text === '') {
    return true;
  } else {
    const regex = /[0-9]|\W|_/;
    return regex.test(text);
  }
}

export function onlyNumber(text: string): boolean {
  // false for just number and true for else;
  if (text === '') {
    return true;
  } else {
    return isNaN(Number(text));
  }
}

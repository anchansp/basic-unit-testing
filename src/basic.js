export function sumAndPlusTen(a, b) {
  return a + b + 10;
}

export function maxNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Masukin angka gblg");

  if (b > a) return b;
  else if (a > b) return a;
  else if (a === b) return a;
}

export function faqTorial(n) {
  if (typeof n !== "number") throw new Error("Masukin angka gblg");
  if (n < 0) throw new Error("Jangan masukin minus kocak");
  if (n === 0 || n === 1) return 1;
  return n * faqTorial(n - 1);
}

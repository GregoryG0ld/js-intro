// Naudokite KMI pavyzdį iš 1 iššūkio ir kodą, kurį jau parašėte, ir pagerinti jį.

// Jūsų užduotys:

// 1. Išspausdinkite gražią išvestį į konsole ar terminalą, nurodydami, kas turi didesnį KMI. Žinutė yra arba "Marko KMI didesnis nei Jono!" arba "Jono KMI yra didesnis nei Marko!"

// 2. Naudokite Template literals, kad įtrauktumėte KMI reikšmes į išvestis. Pavyzdys: „Marko KMI (28,3) yra didesnis nei Jono (23,9)!

console.clear();

// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
const markoMaseKg = 78;
const markoUgisM = 1.69;

const jonoMaseKg = 92;
const jonoUgisM = 1.95;

// 2. Apskaičiuokite abiejų jų KMI naudodami formulę
const markoKmi = markoMaseKg / (markoUgisM ** 2);
const jonoKmi = jonoMaseKg / (jonoUgisM ** 2);

// 3. Patikrinkite, kieno KMI yra didesnis ir išspausdinkite atitinkamą pranešimą.
if (markoKmi > jonoKmi) {
   console.log(`Marko KMI (${markoKmi.toFixed(1)}) yra didesnis nei Jono (${jonoKmi.toFixed(1)})!`);
} else if (jonoKmi > markoKmi) {
   console.log(`Jono KMI (${jonoKmi.toFixed(1)}) yra didesnis nei Marko (${markoKmi.toFixed(1)})!`);
} else {
   console.log(`Marko KMI (${markoKmi.toFixed(1)}) ir Jono KMI (${jonoKmi.toFixed(1)}) yra vienodi!`);
}
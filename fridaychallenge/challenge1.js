// 1 Užduotis

// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra apskaičiuojamas pagal formulę:

// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).

// Jūsų užduotys:

// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 
// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.

// Bandymo duomenys:

// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio m aukščio.

// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio m aukščio.

console.clear();

// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
const markoMaseKg = 78;
const markoUgisM = 1.69;

const jonoMaseKg = 92;
const jonoUgisM = 1.95;

// 2. Apskaičiuokite abiejų jų KMI naudodami formulę
const markoKmi = markoMaseKg / (markoUgisM ** 2);
const jonoKmi = jonoMaseKg / (jonoUgisM ** 2);

// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.
const markHigherBMI = markoKmi > jonoKmi;

// Rezultatų spausdinimas
console.log("Marko KMI:", markoKmi);
console.log("Jono KMI:", jonoKmi);

if (markHigherBMI) {
   console.log("Marko KMI didesnis nei Jono.");
} else {
   console.log("Jono KMI didesnis nei Marko.");
}

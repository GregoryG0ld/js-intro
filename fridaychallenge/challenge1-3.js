// Yra dvi gimnastikos komandos – delfinai ir koalos. Jie varžosi viena prieš kitą 3 kartus. Nugalėtojas, surinkęs didžiausią balų vidurkį, laimi trofėjų!

// Jūsų užduotys:

// 1. Apskaičiuokite kiekvienos komandos taškų vidurkį, naudodami toliau pateiktus testo duomenis

// 2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)

// 3.  bonus užduotis: įtraukite reikalavimą turėti mažiausiai 100 balų. Pagal šią taisyklę komanda laimi tik tuo atveju, jei ji turi didesnį balą nei kita komanda, ir tuo pačiu surinkti ne mažiau kaip 100 taškų. 

// 4. bonus užduotis  Minimalus rezultatas taip pat taikomas lygiosioms! Taigi lygiosios įvyksta tik tada, kai abi komandos turi vienodą rezultatą ir abi turi didesnį arba lygų 100 balų taškų. Priešingu atveju jokia komanda nelaimės trofėjaus

// Bandymo duomenys:

// § 1 duomenys: delfinai surinko 96, 108 ir 89 balus. Koalos balai 88, 91 ir 110

// § Duomenų bonus užduočiai 1: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 123

//§ 2 duomenų bonus užduočiai: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 106

console.clear();

// Duomenys
// Duomenys
const delfinai1 = [96, 108, 89];
const koalos1 = [88, 91, 110];

const delfinaiBonus1 = [97, 112, 101];
const koalosBonus1 = [109, 95, 123];

const delfinaiBonus2 = [97, 112, 101];
const koalosBonus2 = [109, 95, 106];

// Funkcija, kuri skaičiuoja vidurkį
const skaiciuotiVidurki = (balai) => {
   let suma = 0;
   for (let i = 0; i < balai.length; i++) {
      suma += balai[i];
   }
   return suma / balai.length;
};

// Bonus užduotis: Tikriname balus
const tikrinameBalus = (delfinuBalai, koaluBalai) => {
   if (delfinuBalai >= 100 && koaluBalai >= 100) {
      if (delfinuBalai > koaluBalai) {
         console.log(`Delfinai laimėjo su ${delfinuBalai} taškais!`);
      } else if (koaluBalai > delfinuBalai) {
         console.log(`Koalos laimėjo su ${koaluBalai} taškais!`);
      } else {
         console.log("Lygiosios!");
      }
   } else {
      console.log("Nėra laimėtojo, nes bent viena komanda neturi 100 balų.");
   }
};

// Funkcija, kuri vykdo užduotis ir bonusus
const atliktiUzduotis = (delfinai, koalos) => {
   const delfinuVidurkis = skaiciuotiVidurki(delfinai);
   const koaluVidurkis = skaiciuotiVidurki(koalos);

   console.log("Delfinai:", delfinai);
   console.log("Koalos:", koalos);

   console.log(`Delfinų vidurkis: ${delfinuVidurkis.toFixed(1)}`);
   console.log(`Koalų vidurkis: ${koaluVidurkis.toFixed(1)}`);

   if (delfinuVidurkis > koaluVidurkis) {
      console.log(`Delfinai laimėjo su vidurkiu ${delfinuVidurkis.toFixed(1)}!`);
   } else if (koaluVidurkis > delfinuVidurkis) {
      console.log(`Koalos laimėjo su vidurkiu ${koaluVidurkis.toFixed(1)}!`);
   } else {
      console.log("Lygiosios!");
   }

   tikrinameBalus(delfinuVidurkis, koaluVidurkis);
};

console.log("1 duomenys:");
atliktiUzduotis(delfinai1, koalos1);
console.log(' ');
console.log("Duomenų bonus užduočiai 1:");
atliktiUzduotis(delfinaiBonus1, koalosBonus1);
console.log(' ');
console.log("Duomenų bonus užduočiai 2:");
atliktiUzduotis(delfinaiBonus2, koalosBonus2);

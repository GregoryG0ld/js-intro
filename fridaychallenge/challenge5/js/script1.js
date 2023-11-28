
//1. Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".

document.write("1 Užduotis. <br>")

function sveikinimas(name) {
   const sveikinimoTekstas = "Labas, " + name;
   document.write(sveikinimoTekstas);
}

sveikinimas("Elena");


//2.Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.
document.write("<br><br>2 Užduotis. <br>")

function skaiciuotiSimbolius(tekstas) {
   const simboliai = tekstas.length;
   return simboliai;
}

const ivestasTekstas = "Tai yra pavyzdinis tekstas."; // Čia įveskite norimą tekstą
const simboliuSkaicius = skaiciuotiSimbolius(ivestasTekstas);

document.write("Tekste yra " + simboliuSkaicius + " simboliai.");

//3.Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.
document.write("<br><br>3 Užduotis. <br>")

function sujungtiVardaIrPavarde(name, last_name) {
   const pilnasVardas = name.charAt(0).toUpperCase() + name.slice(1) + " " + last_name.charAt(0).toUpperCase() + last_name.slice(1);
   return pilnasVardas;
}

const vardas = "john";
const pavarde = "doe";

const pilnasVardas = sujungtiVardaIrPavarde(vardas, pavarde);
document.write("Pilnas vardas: " + pilnasVardas);


//4.Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.
document.write("<br><br>4 Užduotis. <br>")

function generuotiRandomSkaicius() {
   const randomSkaiciai = [];

   for (i = 0; i < 3; i++) {
      const atsitiktinisSkaicius = Math.floor(Math.random() * 6); // Generuojame atsitiktinį skaičių nuo 0 iki 5
      randomSkaiciai.push(atsitiktinisSkaicius);
   }

   const rezultatas = randomSkaiciai.join(", ");
   document.write(rezultatas);
}

generuotiRandomSkaicius();

//5. Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". Patikrinkite ar šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

document.write("<br><br>5 Užduotis. <br>")

function generuotiAtsitiktiniusSkaicius(from, to, limit) {
   if (typeof from !== 'number' || typeof to !== 'number' || typeof limit !== 'number') {
      document.write("Visi trys parametrai turi būti skaičiai.");
      return;
   }

   const atsitiktiniaiSkaiciai = [];

   for (i = 0; i < limit; i++) {
      const atsitiktinisSkaicius = Math.floor(Math.random() * (to - from + 1)) + from;
      atsitiktiniaiSkaiciai.push(atsitiktinisSkaicius);
   }

   document.write(atsitiktiniaiSkaiciai.join(", "));
}

const from = 1; // Pradinis rėžis
const to = 10; // Galutinis rėžis
const limit = 5; // Skaičių kiekis, kurį norime sugeneruoti

generuotiAtsitiktiniusSkaicius(from, to, limit);

//6. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)

document.write("<br><br>6 Užduotis. <br>")

function pakeltiLaipsniu(skaičius, laipsnis) {
   return Math.pow(skaičius, laipsnis);
}

const skaičius = 2; // Skaičius, kurį norime pakelti laipsniu
const laipsnis = 3; // Laipsnis, į kurį norime pakelti skaičių

const rezultatas = pakeltiLaipsniu(skaičius, laipsnis);
document.write("Rezultatas: " + rezultatas);


function calculateTip(billAmount) {
   const tip = (billAmount >= 50 && billAmount <= 300) ? billAmount * 0.15 : billAmount * 0.20;
   const totalAmount = billAmount + tip;
   return `Sąskaita buvo ${billAmount}, arbatpinigiai ${tip}, o bendra vertė ${totalAmount}`;
}

const bill1 = 275; // Pakeiskite sąskaitos vertę čia
const bill2 = 40;  // Kitas pavyzdys
const bill3 = 430; // Kitas pavyzdys

console.log(calculateTip(bill1));
console.log(calculateTip(bill2));
console.log(calculateTip(bill3));
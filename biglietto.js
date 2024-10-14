console.log("Esercizio Biglietto del treno")
/*
do{
    userAge = parseInt(prompt("Inserisci la tua età: "))
    if(isNaN(userAge)|| userAge === 0)
    {
        alert("Attenzione, non hai inserito un numero valido!")
    }

} while(isNaN(userAge) || userAge === 0 )
//console.log(userAge)

do{
    totalKm = parseInt(prompt("Inserisci il numero di chilometri del tuo viaggio: "))
    if(isNaN(totalKm) || totalKm === 0){
        alert("Attenzione, non hai inserito un numero valido!")
    }
}while(isNaN(totalKm) || totalKm === 0 )
//console.log(totalKm)

let priceKm = 0.21
let basePrice = totalKm * priceKm
let discount = 0
//console.log(basePrice)

if (userAge < 18){
    discount = (basePrice*20) /100
} else if (userAge > 65){
    discount = (basePrice*40) /100
}

let finalPrice = (basePrice-discount).toFixed(2)
let message = `Il prezzo finale della corsa costa ${finalPrice} €`

console.log(message)
*/

console.log("BONUS")
//replica in sole 3 righe di codice (senza il controllo sulle variabili in ingresso)

let userAge=parseInt(prompt("Inserisci la tua età: "))
let totalKm=parseInt(prompt("Inserisci il numero di chilometri totali: "))
console.log(`Il costo totale del biglietto è: ${(userAge < 18 ? (totalKm*0.21-((totalKm*0.21*20)/100)) : userAge > 65 ? (totalKm*0.21-((totalKm*0.21*40)/100)) : ((totalKm*0.21))).toFixed(2)}`)

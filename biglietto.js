console.log("Esercizio Biglietto del treno")

let userAge = parseInt(prompt("Inserisci la tua età: "))

while(isNaN(userAge) || userAge === 0 )
{
    alert("Attenzione, non hai inserito un numero valido!")
    userAge = parseInt(prompt("Inserisci la tua età: "))
}
//console.log(userAge)

let totalKm = parseInt(prompt("Inserisci il numero di chilometri del tuo viaggio: "))
while(isNaN(totalKm) || totalKm === 0 )
    {
        alert("Attenzione, non hai inserito un numero valido!")
        totalKm = parseInt(prompt("Inserisci il numero di chilometri del tuo viaggio: "))
    }
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


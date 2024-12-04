/*
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y 
deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y 
devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

*/

function main() {
    const gifts1 = [3, 1, 2, 3, 4, 2, 5]
    const preparedGifts1 = prepareGifts(gifts1)

    console.log(preparedGifts1)
}

function prepareGifts(gifts) {
    //Eliminar els duplicats
    gifts.forEach((gift) => {
        let index = gifts.indexOf(gift)
        while (index != gifts.lastIndexOf(gift)) {
            gifts.splice(gifts.lastIndexOf(gift), 1)
        }
    })
    //Ordenar els regals
    gifts.sort((a, b) => a - b);
    return gifts;
}

main();

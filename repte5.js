/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
*/

function main() {
    const shoes = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 }
    ]

    console.log(organizeShoes(shoes));

}

function organizeShoes(shoes) {
    let organizedShoes = [];
    let usedShoes = [];

    for (let i = 0; i < shoes.length; i++) {
        if (usedShoes.includes(i)) {
            continue;
        }

        for (let j = i + 1; j < shoes.length; j++) {
            if (!usedShoes.includes(j) && shoes[i].size === shoes[j].size && shoes[i].type !== shoes[j].type) {
                organizedShoes.push(shoes[i].size);
                usedShoes.push(i);
                usedShoes.push(j);
                break;
            }
        }
    }
    return organizedShoes;
}


main();
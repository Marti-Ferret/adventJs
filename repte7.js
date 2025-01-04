/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
*/

function main() {
    const paquets = "a(cb)de";


    console.log(fixPackages(paquets));

}

function fixPackages(packages) {
    let resultat = [];
    let temporal = [];

    for (let i = 0; i < packages.length; i++) {
        const caracter = packages[i];

        if (caracter === '(') {
            temporal.push(resultat);
            resultat = [];
        } else if (caracter === ')') {
            const girarCadena = resultat.reverse();
            const ultim = temporal[temporal.length - 1];
            temporal.length--;
            resultat = ultim.concat(girarCadena);
        } else {
            resultat.push(caracter);
        }
    }
    return resultat.join('');
}


main();
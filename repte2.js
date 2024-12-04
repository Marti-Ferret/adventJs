/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. 
Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:
Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

function main() {
    console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
}

function createFrame(names) {
    let frame = '';

    // Calcular la longitud
    let maxlength = 0;
    names.forEach(name => {
        if (name.length > maxlength) {
            maxlength = name.length;
        }
    });
    maxlength += 4;

    // Construir el marc
    frame += '*'.repeat(maxlength) + '\n';
    names.forEach(name => {
        frame += '* ' + name + ' '.repeat(maxlength - name.length - 3) + '*\n';
    });
    frame += '*'.repeat(maxlength);

    return frame;
}


main();
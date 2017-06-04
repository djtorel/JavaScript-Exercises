var min = Number(process.argv[2]);
var max = Number(process.argv[3]);
var space = (max - min) + 2;

printGrid(min, max);

function printGrid(min, max) {
    for (let x = min; x <= max; x++) {
        let output = '';
        if (x === min) {
            output += spacers(space);
            output += '\n';
            output += '|';
            for (let y = min; y <= max + 1; y++) {
                if (y === min) {
                    output += padding((min + ' to ' + max));
                } else {
                    output += padding((y - 1));
                }
                if (y === max + 1) {
                    output += '\n';
                    output += spacers(space);
                }
            }
            output += '\n';
        }
        output += '|'
        output += padding(x);
        for (let y = min; y <= max; y++) {
            let product = x * y;
            output += padding(product);
            if (y === max) {
                output += '\n';
                output += spacers(space);
            }
        }

        console.log(output);
    }
}

function padding(num) {
    let padSpace = Math.round(7 - num.toString().length / 2);
    let padFormatted = '';

    padFormatted += '' + setPadSpace(padSpace) + num + '\t|';

    function setPadSpace(padSpace) {
        let padding = '';
        for (let i = 0; i < padSpace; i++) {
            padding += ' ';
        }
        return padding;
    }

    return padFormatted;
}

function spacers(num) {
    let spacing = '';
    for (let i = 0; i < num; i++) {
        spacing += ' ---------------';
    }
    return spacing;
}
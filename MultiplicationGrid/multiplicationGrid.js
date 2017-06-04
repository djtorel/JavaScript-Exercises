/**
 * Take in 2 arguments from node command line and set to min and max
 * Spacing for the spacers will always be max - min + 2
 */
var min = Number(process.argv[2]);
var max = Number(process.argv[3]);
var space = (max - min) + 2;

printGrid(min, max);

/**
 * Function uses min and max variables provided by arguments on node command
 * line to dynamically print a multiplication grid to console.log
 * 
 * Doesn't work if max is negative, not sure I want to build logic for that.
 * 
 * @param {any} min 
 * @param {any} max 
 */
function printGrid(min, max) {
    for (let x = min; x <= max; x++) {
        let output = '';
        /**
         * Setting up first row here because it is special
         * First sets up spacers for top line, then puts the
         * "from min to max" part in first column, then prints y to max
         */
        if (x === min) {
            output += spacers(space);
            output += '\n|';
            for (let y = min; y <= max + 1; y++) {
                if (y === min) {
                    output += padding((min + ' to ' + max));
                } else {
                    output += padding((y - 1));
                }
                if (y === max + 1) {
                    output += '\n' + spacers(space);
                }
            }
            output += '\n';
        }
        /**
         * This is necessary for first | on left of every x row
         */
        output += '|' + padding(x);

        /**
         * This loops through y to produce x * y and prints it to console.log
         */
        for (let y = min; y <= max; y++) {
            let product = x * y;
            output += padding(product);
            if (y === max) {
                output += '\n' + spacers(space);
            }
        }

        console.log(output);
    }
}


/**
 * Dynamically generates padding for linux terminal with 8 spaces per tab
 * Converts num to string and gets length, then subtracts that from 7 to
 * set left side spacing. Uses tab for right side spacing
 * 
 * @param {any} num 
 * @returns padFormatted
 */
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


/**
 * Sets the spacers on the bottom of each row to give it a grid look
 * 
 * @param {any} num 
 * @returns spacing
 */
function spacers(num) {
    let spacing = '';
    for (let i = 0; i < num; i++) {
        spacing += ' ---------------';
    }
    return spacing;
}
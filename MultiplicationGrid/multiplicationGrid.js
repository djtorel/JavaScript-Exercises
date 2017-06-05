/**
 * This program takes 2 arguments from the node console and dynamically creates
 * a multiplication table. It generates the minimum amount of spacing to leave
 * at least 1 space of padding at the max number
 */
var min = Number(process.argv[2]);
var max = Number(process.argv[3]);
/**
 * Check if arges are NaN, if so return an error message
 */
if (isNaN(min) || isNaN(max)) {
    console.log('Error: You must only enter numbers as arguments');
}
/**
 * Check if min is less than max, if so switch them.
 */
if (max < min) {
    let switchNum1 = min;
    let switchNum2 = max;
    max = switchNum1;
    min = switchNum2;
}
/**
 * Setting up variables:
 * numLines is the number of columns total per row, hence how many lines to make
 * spaceOffset is the length of the maximum calculated number + 2 for padding
 */
var numLines = (max - min) + 2;
var spaceOffset = (max * max).toString().length + 2;
/**
 * Here if spaceOffset is even, we're making it odd, so each cell has a perfect
 * center space.
 */
if (spaceOffset % 2 === 0) {
    spaceOffset++;
}

/**
 * Running the function to print grid to console
 */
printGrid(min, max);


/**
 * This function prints the grid using the min and max entered as arugments
 * It uses the padding() function to calculate padding in each cell, and uses
 * spacers() to create the lines at bottom of each cell
 * @param {any} min 
 * @param {any} max 
 */
function printGrid(min, max) {
    for (let x = min; x <= max; x++) {
        let output = '';
        /**
         * Creating first row:
         */
        if (x === min) {
            /**
             * Creating spacers/lines on top of first row
             */
            output += spacers(numLines, spaceOffset);
            output += '\n|';
            for (let y = min; y <= max + 1; y++) {
                if (y === min) {
                    /**
                     * Top first column, first row is empty space
                     */
                    output += padding(' ', spaceOffset);
                } else {
                    /**
                     * Creating rest of first row with value of y - 1 because
                     * first column is empty, so it is offset.
                     */
                    output += padding((y - 1), spaceOffset);
                }
                /**
                 * At the end of the first row, create a new line, then the
                 * spacers at the bottom of the row
                 */
                if (y === max + 1) {
                    output += '\n' + spacers(numLines, spaceOffset);
                }
            }
            /**
             * First row completed
             */
            output += '\n';
        }
        /**
         * Creating the initial | and printing x values, one per row
         */
        output += '|' + padding(x, spaceOffset);
        /**
         * Printing the rest of the columns after the 'x' column
         */
        for (let y = min; y <= max; y++) {
            let product = x * y;
            /**
             * Creating the cells of x*y with padding
             */
            output += padding(product, spaceOffset);
            if (y === max) {
                /**
                 * End of row, creating new line and then spacers for bottom
                 * of cells
                 */
                output += '\n' + spacers(numLines, spaceOffset);
            }
        }

        console.log(output);
    }
}


/**
 * This function creates the padding of each cell.
 * Padding is spaceOffset minus length of num divided 2 and rounded this
 * ensures the number is added nearest the center of the cell as can be
 * 
 * IsEven is used to see if the lenth of num is even, because if it is, it has
 * the padding on the right side offset by -1 to keep it centered.
 * 
 * Then it returns the string created for the cell like '  4 |'
 * 
 * @param {any} num 
 * @param {any} spaceOffset 
 * @returns padFormatted
 */
function padding(num, spaceOffset) {
    let padSpace = Math.round((spaceOffset - num.toString().length) / 2);
    let isEven = (num.toString().length % 2 === 0);
    let padFormatted = '';

    padFormatted +=
        setPadSpace(padSpace) +
        num +
        setPadSpace((isEven ? padSpace - 1 : padSpace)) +
        '|';

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
 * Creates the "spacers" at the bottom of each cell, creates the lines for
 * each column and spaces it to keep centered.
 * 
 * Returns a string linke ' ----'
 * 
 * @param {any} num 
 * @param {any} offset 
 * @returns spacing
 */
function spacers(num, offset) {
    let spacing = '';
    for (let i = 0; i < num; i++) {
        spacing += ' ';
        for (let a = 0; a < offset; a++) {
            spacing += '-';
        }
    }
    return spacing;
}
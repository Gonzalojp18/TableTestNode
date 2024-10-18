import Table from 'cli-table3';
import chalk from 'chalk';

const table = new Table({
        head: [
            chalk.blue('id'),
            chalk.blue('name'),
            chalk.blue('description'),
            chalk.blue('price'),
        ],
        colWidths: [10,20,40,10]
});


export default table;
















// const product = {
//     "id": 27,
//         "name": "Deluxe",
//             "description": "Lechuga, tomates cherrys confitados, palta, aceitunas negras, pollo rebozado con panko, mix de semillas.",
//             "description": 8.200
// }
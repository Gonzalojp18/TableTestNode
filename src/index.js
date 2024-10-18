import chalk from 'chalk'
import ensaladas from './product.js'
import table from './table.js'

// table.push(ensaladas)

function checkPrice(price){
    return price <= 8.5 ? chalk.bgRed.white(price) : chalk.green(price)
}

const productList = ensaladas.map(salad => {
    // return Object.values(salad)
    return[
        salad.id,
        salad.name,
        salad.description,
        checkPrice(salad.price),
    ]
})

table.push(...productList)

console.log(table.toString(9))


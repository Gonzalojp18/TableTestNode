import fs from 'fs'

const data = JSON.parse(fs.readFileSync("./files/productList.json", "utf8"));


export default data.Ensaladas
/*import app from "./src/app.js";

const http = require("http")
const port = process.env.PORT || 6000;

// estas linhas não serão mais utilizadas - pois o app.js tem as novas rotas
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
})


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
*/

import app from './src/app.js'

const port = process.env.PORT || 6000;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
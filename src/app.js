import express from "express";

const app = express();

//que é um recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular.
app.use(express.json())

//criação da variavel com dois arrays (constante)
const sftp = [
  {id: 1, "usuario": "raco"},
  {id: 2, "usuario": "bernardo"}
]

//declaração das rotas
app.get('/', (req, res) => {
  res.status(200).send('Bem vindo ao sftp-local');
}) 

app.get('/sftp', (req, res) => {
  res.status(200).json(sftp)
})

app.get('/sftp/:id', (req, res) => {
  let index = buscaUsuario(req.params.id);
  res.json(sftp[index]);
})

//incluir um novo usuario
app.post('/sftp', (req, res) => {
  sftp.push(req.body); //inclui um novo item no array que vira do corpo da requisição body do postman
  res.status(201).send('Usuario foi cadastrado com sucesso')
})

app.put('/sftp/:id', (req, res) => {
  let index = buscaUsuario(req.params.id);//variavel index criada para receber o indice que acabamos de programar
  sftp[index].usuario = req.body.usuario;
  res.json(sftp);
})

//Foi introduzido um outro conceito de atribuição via desestruturação que é um recurso interessante do JavaScript que atribui para uma outra variável valores retirados de um array ou de um objeto. Por exemplo, a requisição é um objeto se declarar uma variável Id entre chaves, 
app.delete('/sftp/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaUsuario(id);
  sftp.splice(index, 1);
  res.send(`Usuario ${id} removido com sucesso`);
})

//criação da função buscaUsuario passando um parametro id 
//esta função vai retornar a posição do id dentro do array
function buscaUsuario(id) {
  return sftp.findIndex(usuario => usuario.id == id) //findIndex método que temos para manipular array - passando algum parâmetro eu localizo: em que índice, em que posição está o elemento que quero alterar, manipular ou visualizar.
}

export default app
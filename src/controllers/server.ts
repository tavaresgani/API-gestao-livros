import express, { Request, Response } from 'express';
import livroController from './livroController'
import autorController from './autorController';
const app = express();
app.use(express.json())
const PORT = 3000;

//rota para criar um livro
app.post('/livros', (req:Request, res:Response) => {
livroController.criar(req.body, res)
.then((result: any) => res.json(result))
.catch((error: any) => res.status(400).json(error));
});

//rota para listar todos os livros
app.get('/livros', (req, res) => {
livroController.listarTodos()
.then((result: any) => res.json(result))
.catch((error: any) => res.status(400).json(error));
});

//listar livros por id
app.get('/livros/:id', (req, res) => {
livroController.listarUm(req.params.id)
.then((result: any) => res.json(result))
.catch((error: any) => res.status(400).json(error));
});

//listar livro por autor
app.get('/autores/:autorId/livros :', async (req, res) =>{
    try {
        const {autorId} = req.params;
        const livrosDoAutor = await livroController.listarLivrosPorAutor(autorId);
        res.json(livrosDoAutor);
    } catch (error) {
        res.status(500).json({erro: 'Erro ao buscar livros por Autor'});
    }
});

//editar livros por id (id=isbn)
app.put('/livros/:id', (req, res) => {
livroController.editar(req.params.id, req.body)
.then((result: any) => res.json(result))
.catch((error: any) => res.status(400).json(error));
});

//deletar livros por id
app.delete('/livros/:id', (req, res) => {
livroController.deletar(req.params.id)
.then((result: any) => res.json(result))
.catch((error: any) => res.status(400).json(error));
});

//criar autor 
app.post('/autores', (req: Request, res: Response) => {
    autorController.criarAutor(req.body)
      .then((result: any) => res.json(result))
      .catch((error: any) => res.status(400).json(error));
  });

//listar autores

app.get('/autores', (req, res) => {
    autorController.listarTodosAutores()
      .then((result: any) => res.json(result))
      .catch((error: any) => res.status(400).json(error));
  });

//listar autor por id
app.get('/autores/:id', (req, res) => {
    autorController.listarUmAutorPorId(req.params.id)
      .then((result: any) => res.json(result))
      .catch((error: any) => res.status(400).json(error));
  });

//editar autor por id
app.put('/autores/:id', (req, res) => {
    autorController.editarAutorPorId(req.params.id, req.body)
      .then((result: any) => res.json(result))
      .catch((error: any) => res.status(400).json(error));
  });

// deletar autor
app.delete('/autores/:id', (req, res) => {
    autorController.deletarAutorPorId(req.params.id)
      .then((result: any) => res.json(result))
      .catch((error: any) => res.status(400).json(error));
  });
app.listen(PORT,() => {console.log(`servidor rodando na porta = ${PORT}`,)})
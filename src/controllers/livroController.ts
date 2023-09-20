import { livroSchema } from "./validationLivroSchema";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função para criar um novo livro
const { validationResult } = require('express-validator');
const Livro = require('./models/Livro');


const livroController = {
  // Função para criar um novo livro
  criar: async (req:any, res: any) => {
    // Verifica se houve erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { titulo, descricao, dataPublicacao, isbn, preco, autorId } = req.body;
  
      // Validação personalizada para garantir que o preço seja positivo
      if (preco <= 0) {
        return res.status(400).json({ erro: 'O preço deve ser um valor positivo.' });
      }
  
      // Cria um novo livro
      const novoLivro = await Livro.create({
        titulo,
        descricao,
        dataPublicacao,
        isbn,
        preco,
        autorId,
      });
  
      return res.status(201).json(novoLivro);
    } catch (error) {
      return res.status(500).json({ erro: 'Não foi possível adicionar o livro.' });
    }
  },
  
  // Função para listar todos os livros
   listarTodos: async () => {
    try {
      const livros = await Livro.listarTodos();
      return livros;
    } catch (error) {
      throw error;
    }
  },
  
  // Função para buscar um livro por ID
  listarUm: async (livroId: any) => {
    try {
      const livro = await Livro.listarUm(livroId);
      if (!livro) {
        throw new Error('Livro não encontrado');
      }
      return livro;
    } catch (error) {
      throw error;
    }
  },
  // Função para listar livros por autor
  listarLivrosPorAutor: async (autorId: any) =>{
      try{
          const livrosDoAutor = await Livro.listarLivrosPorAutor({autorId});
          return livrosDoAutor;
      } catch (error){
          throw error;
      }
      
  },
  
  // Função para atualizar um livro por ID
  editar: async (livroId: any, novoLivroData: any) => {
    try {
      const livro = await Livro.editar(livroId, novoLivroData, { new: true });
      if (!livro) {
        throw new Error('Livro não encontrado');
      }
      return livro;
    } catch (error) {
      throw error;
    }
  },
  
  // Função para deletar um livro por ID
   deletar: async (livroId: any) => {
    try {
      const livro = await Livro.deletar(livroId);
      if (!livro) {
        throw new Error('Livro não encontrado');
      }
      return livro;
    } catch (error) {
      throw error;
    }
  },
}
  
  export default livroController;

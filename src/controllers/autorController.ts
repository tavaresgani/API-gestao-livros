import { autorSchema } from "./validationAutorSchema";
const Autor = require('./models/Autor');

const autorController = {
  // Função para criar um novo autor
  criarAutor: async (autorData: any) => {
  try {
    const novoAutor = await Autor.criarAutor(autorData);
    return novoAutor;
  } catch (error) {
    throw error;
  }
},

// Função para listar todos os autores
listarTodosAutores: async () => {
  try {
    const autores = await Autor.listarTodosAutores();
    return autores;
  } catch (error) {
    throw error;
  }
},

// Função para buscar um autor por ID
listarUmAutorPorId: async (autorId: any) => {
  try {
    const autor = await Autor.listarUmAutorPorId(autorId);
    if (!autor) {
      throw new Error('Autor não encontrado');
    }
    return autor;
  } catch (error) {
    throw error;
  }
},

// Função para atualizar um autor por ID
editarAutorPorId: async (autorId: any, novoAutorData: any) => {
  try {
    const autor = await Autor.editarAutorPorId(autorId, novoAutorData, { new: true });
    if (!autor) {
      throw new Error('Autor não encontrado');
    }
    return autor;
  } catch (error) {
    throw error;
  }
},

// Função para deletar um autor por ID
 deletarAutorPorId: async (autorId: any) => {
  try {
    const autor = await Autor.deletarAutorPorId(autorId);
    if (!autor) {
      throw new Error('Autor não encontrado');
    }
    return autor;
  } catch (error) {
    throw error;
  }
},
}
export default autorController;

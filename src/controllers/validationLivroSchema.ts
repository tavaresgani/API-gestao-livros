import * as yup from 'yup';

export const livroSchema = yup.object().shape({
  titulo: yup.string().required('O título é obrigatório').max(255, 'O título deve ter no máximo 255 caracteres'),
  descricao: yup.string(),
  dataPublicacao: yup.date().required('A data de publicação é obrigatória'),
  isbn: yup.string().required('O ISBN é obrigatório').matches(/^\d{10,13}$/, 'O ISBN deve ter 10 ou 13 dígitos'),
  preco: yup.number().required('O preço é obrigatório').positive('O preço deve ser um valor positivo'),
  autorId: yup.string().required('O ID do autor é obrigatório'),
});

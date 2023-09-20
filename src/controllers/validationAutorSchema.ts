import * as yup from 'yup';

export const autorSchema = yup.object().shape({
  nome: yup.string().required('O nome do autor é obrigatório').min(255, 'O nome deve ter no máximo 255 caracteres'),
  nacionalidade: yup.string().required('A nacionalidade do autor é obrigatória'),
  dataNascimento: yup.date().required('A data de nascimento do autor é obrigatória'),
  biografia: yup.string(),
});

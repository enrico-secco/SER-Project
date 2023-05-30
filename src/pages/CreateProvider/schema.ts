import * as yup from "yup";

export const form_validation = yup.object().shape({
  profilePhoto: yup.string(),
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("O email deve ser válido")
    .required("O email é obrigatório"),
  phone: yup.string().required("O telefone é obrigatório"),
  cpf: yup.string().required("O cpf é obrigatório"),
  bio: yup.string().required("A bio é obrigatória"),
});

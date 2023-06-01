import * as yup from "yup";

export const form_validation = yup.object().shape({
  profilePhoto: yup.string(),
  name: yup
    .string()
    .required("O nome e obrigatorio")
    .min(3, "Minimo de 3 caracteres"),
  email: yup
    .string()
    .email("O email deve ser valido")
    .required("O email e obrigatorio"),
  phone: yup
    .string()
    .required("O telefone e obrigatorio")
    .min(8, "Minimo de 8 caracteres"),
  cpf: yup
    .string()
    .required("O cpf e obrigatorio")
    .min(3, "Minimo de 9 caracteres"),
  bio: yup
    .string()
    .required("A bio e obrigatoria")
    .min(3, "Minimo de 20 caracteres"),
});

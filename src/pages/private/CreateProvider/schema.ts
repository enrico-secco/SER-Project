import * as yup from "yup";

export const form_validation = yup.object().shape({
  profilePic: yup
    .mixed<FileList>()
    .test(
      "fileSize",
      "Only documents up to 2MB are permitted.",
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 2_000_000)
    ),
  name: yup
    .string()
    .required("O nome e obrigatorio")
    .min(3, "Minimo de 3 caracteres"),
  email: yup
    .string()
    .email("O email deve ser valido")
    .required("O email e obrigatorio"),
  phone: yup
    .number()
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

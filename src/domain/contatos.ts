import { z } from "zod";

export const contatosSchema = z.object({
  whatsapp: z
    .string()
    .regex(/^55\d{10,11}$/, "Formato esperado: 55 + DDD + número"),
  instagram: z.url(),
  email: z.email(),
  endereco: z.object({
    logradouro: z.string().min(1),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    uf: z.string().length(2),
  }),
});

export type Contatos = z.infer<typeof contatosSchema>;

// Dados confirmados como oficiais e públicos pela dona do projeto (DECISOES D09).
export const contatos: Contatos = contatosSchema.parse({
  whatsapp: "5532988747651",
  instagram: "https://www.instagram.com/dramariaeline/",
  email: "mariaelinemuniz@gmail.com",
  endereco: {
    logradouro: "Av. Barão do Rio Branco, 2872",
    bairro: "Centro",
    cidade: "Juiz de Fora",
    uf: "MG",
  },
});

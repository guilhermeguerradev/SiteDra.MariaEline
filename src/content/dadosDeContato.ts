import { z } from "@/src/content/zod";

export const dadosDeContatoSchema = z.object({
  whatsapp: z
    .string()
    .regex(/^55\d{10,11}$/, "Formato esperado: 55 + DDD + número"),
  instagram: z.url(),
  email: z.email(),
  endereco: z.object({
    logradouro: z.string().min(1),
    complemento: z.string().min(1).optional(),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    uf: z.string().length(2),
  }),
});

export type DadosDeContato = z.infer<typeof dadosDeContatoSchema>;

// Dados confirmados como oficiais e públicos pela dona do projeto (DECISOES D09).
export const dadosDeContato: DadosDeContato = dadosDeContatoSchema.parse({
  whatsapp: "5532988747651",
  instagram: "https://www.instagram.com/dramariaeline/",
  email: "mariaelinemuniz@gmail.com",
  endereco: {
    logradouro: "Av. Barão do Rio Branco, 2872",
    complemento: "Sl 1007",
    bairro: "Centro",
    cidade: "Juiz de Fora",
    uf: "MG",
  },
});

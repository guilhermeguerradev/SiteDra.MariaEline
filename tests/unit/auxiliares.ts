// Caminho de um arquivo de public/ a partir do endereço usado no site
// (por exemplo, "/images/sobre.jpg" vira "public/images/sobre.jpg").
export function caminhoPublico(endereco: string): string {
  return `public${endereco}`;
}

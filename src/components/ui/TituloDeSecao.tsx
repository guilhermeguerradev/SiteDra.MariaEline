type Props = {
  /** Identificador do título, usado pela seção em aria-labelledby. */
  id: string;
  /** Cor do fundo onde o título aparece. */
  fundo?: "claro" | "escuro";
  children: React.ReactNode;
};

// Título (h2) de uma seção.
export function TituloDeSecao({ id, fundo = "claro", children }: Props) {
  const cor = fundo === "claro" ? "text-petroleo" : "text-creme";
  return (
    <h2 id={id} className={`titulo-secao ${cor}`}>
      {children}
    </h2>
  );
}

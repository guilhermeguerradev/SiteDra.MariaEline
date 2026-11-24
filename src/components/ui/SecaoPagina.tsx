type Props = {
  id: string;
  /** Identificador do título da seção (aria-labelledby). */
  idTitulo: string;
  /** Classes do fundo e do recorte da seção (cor, relative, overflow-clip). */
  className?: string;
  /**
   * Versão da seção para telas menores que 1180 px. Quando existe, o conteúdo
   * de `children` só aparece nas telas grandes e `compacta` só nas pequenas.
   */
  compacta?: React.ReactNode;
  children: React.ReactNode;
};

// Casca de toda seção da página: o elemento <section>, a margem de rolagem sob
// o cabeçalho fixo e o espaço interno. Guarda num só lugar o padrão de "duas
// versões de cada seção" (ver README).
export function SecaoPagina({
  id,
  idTitulo,
  className = "",
  compacta,
  children,
}: Props) {
  const aparencia = compacta ? "hidden largo:block" : "";
  return (
    <section
      id={id}
      aria-labelledby={idTitulo}
      className={`scroll-mt-(--altura-cabecalho) ${className}`}
    >
      {compacta}
      <div className={`secao-px secao-py relative ${aparencia}`}>
        {children}
      </div>
    </section>
  );
}

type Props = {
  credenciais: readonly string[];
  /** Classes de cada item da lista (as duas versões da seção diferem só nelas). */
  className: string;
};

// Os <li> das credenciais da seção Sobre. Fica dentro de um <ul> do chamador.
export function ItensDeCredencial({ credenciais, className }: Props) {
  return credenciais.map((credencial) => (
    <li key={credencial} className={className}>
      {credencial}
    </li>
  ));
}

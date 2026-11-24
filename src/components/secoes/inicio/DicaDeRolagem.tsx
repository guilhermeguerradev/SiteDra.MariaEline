// Convite para descer a página, que leva à seção Sobre. Só aparece no desktop.
export function DicaDeRolagem() {
  return (
    <a
      href="#sobre"
      className="animar-aparecer absolute bottom-7 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2.5 text-xs tracking-[.18em] text-creme/70 uppercase hover:text-menta nav:flex"
    >
      Role para conhecer
      <span
        aria-hidden="true"
        className="relative block h-11 w-px overflow-hidden bg-menta/25"
      >
        <span className="animar-dica absolute top-0 left-0 block h-4 w-px bg-menta" />
      </span>
    </a>
  );
}

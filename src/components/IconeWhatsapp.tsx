type Props = { tamanho?: number };

export function IconeWhatsapp({ tamanho = 20 }: Props) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8L4 20z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.4-1.8-.9-.8.8c-1-.4-2-1.4-2.4-2.4l.8-.8-.9-1.8L9 9.5z" />
    </svg>
  );
}

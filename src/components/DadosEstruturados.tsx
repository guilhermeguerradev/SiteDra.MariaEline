import { serializarDadosEstruturados } from "@/src/domain/seo";

export function DadosEstruturados() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializarDadosEstruturados() }}
    />
  );
}

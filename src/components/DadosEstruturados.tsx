import { serializarDadosEstruturados } from "@/src/domain/seo";
import { obterUrlSite } from "@/src/domain/site";

export function DadosEstruturados() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializarDadosEstruturados(obterUrlSite()),
      }}
    />
  );
}

import { serializarDadosEstruturados } from "@/src/lib/seo";
import { obterUrlSite } from "@/src/lib/site";

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

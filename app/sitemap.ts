import type { MetadataRoute } from "next";
import { montarUrl, obterUrlSite } from "@/src/domain/site";

export const dynamic = "force-static";

// Sitemap só faz sentido com URLs absolutas; sem NEXT_PUBLIC_SITE_URL fica vazio.
export default function sitemap(): MetadataRoute.Sitemap {
  const urlSite = obterUrlSite();
  if (!urlSite) return [];
  return [{ url: montarUrl(urlSite, "/") }];
}

import type { MetadataRoute } from "next";
import { montarUrl, obterUrlSite } from "@/src/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const urlSite = obterUrlSite();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(urlSite && { sitemap: montarUrl(urlSite, "sitemap.xml") }),
  };
}

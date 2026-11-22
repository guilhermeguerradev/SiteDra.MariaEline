import { defineConfig } from "@playwright/test";

const porta = 3100;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["github"]] : "list",
  use: {
    baseURL: `http://localhost:${porta}`,
    // Localmente usa o Edge já instalado; no CI usa o Chromium do Playwright.
    channel: process.env.CI ? undefined : "msedge",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile-360", use: { viewport: { width: 360, height: 740 } } },
  ],
  // Exige `npm run build` antes (o CI já faz).
  webServer: {
    command: `npx next start -p ${porta}`,
    url: `http://localhost:${porta}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});

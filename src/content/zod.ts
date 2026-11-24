import { z } from "zod";

// O Zod, por padrão, tenta compilar os esquemas com `Function(...)` (modo JIT).
// Numa Content-Security-Policy sem 'unsafe-eval' isso é bloqueado e o navegador
// registra uma violação no console, embora o Zod volte sozinho ao modo comum.
// Os esquemas do site são poucos e pequenos: desligar o JIT não custa nada e
// deixa a política mais restrita (D32).
z.config({ jitless: true });

export { z };

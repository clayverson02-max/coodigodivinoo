# Impulso Social

Landing page mobile-first para serviço de crescimento de presença no Instagram.

## Configuração antes de publicar

Edite as constantes no início de `src/pages/Index.tsx`:

- `WHATSAPP_NUMBER`: WhatsApp real com DDI e DDD, somente números.
- `PIX_KEY`: sua chave Pix real.

Os depoimentos incluídos são textos de preenchimento. Troque-os por feedbacks reais e autorizados antes de publicar.

## Autenticação, credenciais e tokens

Este projeto não possui login próprio para visitantes; o fluxo público é uma página React.

- `src/integrations/supabase/client.ts` cria o cliente Supabase usando `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.
- A chave publicável/anon pode aparecer no frontend. Ela não deve ser confundida com uma service-role key.
- `src/lib/tracking.ts` dispara o Meta Pixel no navegador e chama a Edge Function `meta-capi`.
- `supabase/functions/meta-capi/index.ts` lê `META_CAPI_ACCESS_TOKEN` com `Deno.env.get`; esse token privado nunca deve ir para `src/`, para o `.env` publicado ou para o navegador.
- O `event_id` é gerado no navegador e enviado às duas camadas para deduplicar o evento.
- A autenticação usada para editar este repositório é externa à aplicação: o token OAuth/App fica no conector do GitHub e não é armazenado no código.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
```

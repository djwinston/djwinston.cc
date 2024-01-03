/// <reference types="astro/client" />

declare function onloadTurnstileCallback(): void;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly PUBLIC_CF_SITE_KEY: string;
  readonly PUBLIC_CF_SECRET_KEY: string;
}
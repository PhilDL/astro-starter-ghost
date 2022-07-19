/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GHOST_URL: string;
  readonly PUBLIC_GHOST_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

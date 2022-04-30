/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TESTS: boolean;
  // more env variables ...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

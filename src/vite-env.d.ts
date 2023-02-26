/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIRESTORE_API_KEY: string;
  readonly VITE_FIRESTORE_AUTH_DOMAIN: string;
  readonly VITE_FIRESTORE_PROJECT_ID: string;
  readonly VITE_FIRESTORE_STORAGE_BUCKET: string;
  readonly VITE_FIRESTORE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIRESTORE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

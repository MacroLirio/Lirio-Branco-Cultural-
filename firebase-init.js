// Configuração do Firebase
// 👉 Substitua cada valor abaixo pelo que o Firebase gerar para você
const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "COLE_AQUI_SEU_AUTH_DOMAIN",
  projectId: "COLE_AQUI_SEU_PROJECT_ID",
  storageBucket: "COLE_AQUI_SEU_STORAGE_BUCKET",
  messagingSenderId: "COLE_AQUI_SEU_SENDER_ID",
  appId: "COLE_AQUI_SEU_APP_ID",
  measurementId: "COLE_AQUI_SEU_MEASUREMENT_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Atalhos para autenticação e banco de dados
const auth = firebase.auth();
const db = firebase.firestore();

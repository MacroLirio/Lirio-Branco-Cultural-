// Configuração do Firebase
// 👉 Substitua cada valor abaixo pelo que o Firebase gerar para você
const firebaseConfig = {
  apiKey: "AIzaSyBAEo4byMMQCgfn0SMSbbRV48EfwYM3d_4",
  authDomain:"sistema-lirio-branco.firebaseapp.com",
  projectId: "sistema-lirio-branco",
  storageBucket: "sistema-lirio-branco.firebasestorage.app",
  messagingSenderId: "137857061244",
  appId: "1:137857061244:web:704b4792acb662a53a54f9",
  measurementId: "G-M972BJ7DRT"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Atalhos para autenticação e banco de dados
const auth = firebase.auth();
const db = firebase.firestore();

// Cole aqui seu config do Firebase (Console > Configurações do projeto > Apps > Web).
// Exemplo de estrutura (substitua pelos seus valores):
const firebaseConfig = {
  apiKey: "AIzSyXXXXXXX",
  authDomain: "sistema-lirio-branco.firebaseapp.com",
  projectId: "sistema-lirio-branco",
  storageBucket: "sistema-lirio-branco.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
  measurementId: "G-XXXXXXX"
};


// Inicialização
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

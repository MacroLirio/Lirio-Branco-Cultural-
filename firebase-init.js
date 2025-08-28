// Configuração do Firebase
const firebaseConfig = {
  apiKey: "cole aqui",
  authDomain: "cole aqui",
  projectId: "cole aqui",
  storageBucket: "cole aqui",
  messagingSenderId: "cole aqui",
  appId: "cole aqui",
  measurementId: "cole aqui"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

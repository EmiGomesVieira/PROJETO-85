import firebase from "firebase"; // Importa o módulo firebase
require("@firebase/firestore"); // Requer o módulo Firestore do Firebase

// Configuração do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM", // Chave da API
  authDomain: "e-ride-549e4.firebaseapp.com", // Domínio de autenticação
  projectId: "e-ride-549e4", // ID do projeto
  storageBucket: "e-ride-549e4.appspot.com", // Bucket de armazenamento
  messagingSenderId: "588298110700", // ID do remetente de mensagens
  appId: "1:588298110700:web:34e3df331c6b1fc95047c9", // ID do aplicativo
  measurementId: "G-G3K7BWL5LH" // ID de medição
};

firebase.initializeApp(firebaseConfig); // Inicializa o Firebase com a configuração fornecida

export default firebase.firestore(); // Exporta o Firestore inicializado para ser utilizado em outros lugares do código


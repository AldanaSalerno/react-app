import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDNjN0yldEzQLwwmrX6Qaz7GcYqO_h-6N0",
  authDomain: "app-react-58b81.firebaseapp.com",
  projectId: "app-react-58b81",
  storageBucket: "app-react-58b81.appspot.com",
  messagingSenderId: "309524038536",
  appId: "1:309524038536:web:96c840d5365c8f55b7703d"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}
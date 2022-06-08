import { initializeApp, getApps } from "firebase/app";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1T5D47CuF1wa70NwQTyAP672A3rJYvJ8",
  authDomain: "mealstogo-b266e.firebaseapp.com",
  projectId: "mealstogo-b266e",
  storageBucket: "mealstogo-b266e.appspot.com",
  messagingSenderId: "133203250116",
  appId: "1:133203250116:web:195a6ee7be55ee29603291",
};

let app;

if (!getApps()?.length) {
  app = initializeApp(firebaseConfig);
}

const auth = initializeAuth(app);

export { auth };

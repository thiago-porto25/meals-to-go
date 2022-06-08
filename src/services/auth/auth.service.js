import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../utils/firebase";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

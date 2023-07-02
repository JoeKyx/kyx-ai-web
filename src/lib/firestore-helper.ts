import app from "./firebase-connection";
import { httpsCallable } from "firebase/functions";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

export async function getUserTokens(userId: string) {
  try {
    const firestore = getFirestore(app);
    const userRef = collection(firestore, "users");
    const userDoc = doc(userRef, userId);
    const userDocSnap = await getDoc(userDoc);
    if (userDocSnap.exists()) {
      const userTokens = userDocSnap.data()?.tokens;
      return userTokens;
    }
    // else create new user
    else {
     const functions = getFunctions(app);
     const createUser = httpsCallable(functions, "createUserDocument");
     const result = await createUser({ userId: userId, wayOfCreation: "web/tokens" });
     return 1000;
    }   
  } catch (error: any) {
    console.log("ERROR: ", error);
    return null;
  }
}

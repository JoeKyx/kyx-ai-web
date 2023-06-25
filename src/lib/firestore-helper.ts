import app from "./firebase-connection";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

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
    return null;
  } catch (error: any) {
    console.log("ERROR: ", error);
    return null;
  }
}

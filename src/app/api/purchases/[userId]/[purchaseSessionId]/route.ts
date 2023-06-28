import firebase from "@/lib/firebase-connection";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  getDoc,
  query,
  doc,
} from "firebase/firestore";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { userId: string, purchaseSessionId: string } 
}) {
  const firestore = getFirestore(firebase);
  const docRef = doc(firestore, 'users', params.userId, 'purchases', params.purchaseSessionId);
  // Check whether doc exists
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return NextResponse.json({ purchase: docSnap.data() }, { status: 200 });
  }
  else {
    return  NextResponse.json({ error: "No such document!" }, { status: 404 });

  }
}
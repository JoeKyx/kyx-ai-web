import firebase from "@/lib/firebase-connection";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const firestore = getFirestore(firebase);
    const collectionRef = collection(
      firestore,
      "users",
      params.userId,
      "used_voices"
    );
    const docs = getDocs(collectionRef);

    const usedVoices = await docs.then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      return data;
    });

    return NextResponse.json({ usedVoices }, { status: 200 });
  } catch (error: any) {
    console.log("ERROR: ", error);
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}

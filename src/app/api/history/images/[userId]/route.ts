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
  console.log(params.userId);

  const firestore = getFirestore(firebase);
  const collectionRef = collection(firestore, "ImageGenerations");
  // Get all image generations where userID is equal to the userID in the query
  const q = query(collectionRef, where("userId", "==", params.userId));
  const getImages = async () => {
    const querySnapshot = await getDocs(q);

    const images = querySnapshot.docs.map((doc) => doc.data());
    return images;
  };
  try {
    const images = await getImages();
    console.log(images);
    return NextResponse.json({ images }, { status: 200 });
  } catch (error: any) {
    console.log("ERROR: ", error);
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}

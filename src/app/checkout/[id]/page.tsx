"use client"
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSpring, animated } from 'react-spring';
import LargeHeading from '@/components/ui/LargeHeading';
import app from '@/lib/firebase-connection';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import PageLoader from '@/components/ui/PageLoader';
import { fetchData } from 'next-auth/client/_utils';
import TokenCounter from '@/components/ui/TokenCounter';
import Paragraph from '@/components/ui/Paragraph';


interface pageProps {
  params: {
    id: string
  }

}

const Page: FC<pageProps> = ({ params }: { params: { id: string } }) => {


  const { data: session } = useSession();

  const [purchaseFound, setPurchaseFound] = useState(false);
  const [oldTokens, setOldTokens] = useState(0);
  const [newTokens, setNewTokens] = useState(0);

  const props = useSpring({
    from: { number: oldTokens, color: 'white' },
    to: { number: newTokens, color: 'gold' },
    config: { duration: 3000 },
    immediate: !purchaseFound,
  });

  const id = params.id;
  const firestore = getFirestore(app);

  // Listen to user purchaseHistory whether it has an entry with the id of the current purchase
  // If found set oldTokens and newTokens from the purchaseHistory entry
  useEffect(() => {
    console.log(params.id)
    if (session?.user.id) {
      // Check every 2 seconds if purchase has been found (fetch data at /api/purchases/USERID/PURCHASESESSIONID
      const fetchData = async () => {
        await fetch(`/api/purchases/${session.user.id}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (response.status === 200) {
            const data = await response.json();

            setOldTokens(data.purchase.oldTokens);
            setNewTokens(data.purchase.newTokens);
            setPurchaseFound(true);
          }
        }
        ).catch((error) => {
          console.log("Error fetching data:", error);
        }
        );
      };
      // Call fetchData every 2 seconds or purchaseFound is true
      const interval = setInterval(() => {
        if (!purchaseFound) {
          fetchData();
        }
      }, 2000);

      return () => clearInterval(interval);
    };
  }, [firestore, id, params.id, purchaseFound, session?.user.id]);




  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {!purchaseFound ? (
        <><LargeHeading size={"sm"}>Processing your purchase...</LargeHeading>
          <PageLoader />
        </>
      ) : (
        <>
          <LargeHeading size={"sm"}>Thank You For Your Purchase</LargeHeading>
          <LargeHeading size={"xxs"}>Your tokens have been successfully added to your account</LargeHeading>

          <LargeHeading size={"lg"} className='font-bold pt-10'>You have <TokenCounter oldTokens={oldTokens} newTokens={newTokens} /> Tokens!</LargeHeading>
        </>
      )}
    </div>
  );
}

export default Page
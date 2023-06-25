import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";
import Chat from "@/components/Chat";
export const metadata: Metadata = {
  title: "Kyx AI | Home",
  description: "Your personal Discord AI assistant",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <div className="flex items-center">
            <div className="relative inline-block items-center h-20 w-20 rounded-full overflow-hidden me-8 border-2 dark:border-light-gold border-black hover:animate-bounce">
              <Image
                priority
                className="image-shadow"
                quality={100}
                fill
                style={{ objectFit: "cover" }}
                src="/kyxAi.jpeg"
                alt="Kyx AI Logo"
              />
            </div>
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-light-gold"
            >
              <span>Kyx AI</span>
              <br />
              Your all in one Discord AI assistant
            </LargeHeading>
          </div>
          <Paragraph className="max-w-xl lg:text-left">
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              Login
            </Link>{" "}
            to manage all your Kyx AI creations and to subscribe to our awesome{" "}
            <Link
              href="/premium"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              premium
            </Link>{" "}
            features.
          </Paragraph>
        </div>
      </div>
      {/*  <Chat /> */}
    </div>
  );
}

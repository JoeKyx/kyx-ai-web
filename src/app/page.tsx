import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";
import Chat from "@/components/main/chat/Chat";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton";
import Button, { buttonVariants } from "@/components/ui/Button";
import ScrollButton from "@/components/ui/ScrollButton";
import SignInButton from "@/components/SignInButton";
import HomeAnimation from "@/components/main/HomeAnimation";
import Footer from "@/components/main/Footer";
export const metadata: Metadata = {
  title: "Kyx AI | Home",
  description: "Your personal Discord AI assistant",
};


export default function Home() {

  const screenshots = [
    "/screenshots/1.jpeg"
  ]

  return (
    <>    <div className="snap-y snap-always h-screen overflow-auto">
      <div className="snap-center relative min-h-screen flex items-start justify-center overflow-x-hidden" id="section-1">
        <div className="container max-w-7xl mx-auto w-full">
          <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-start lg:items-start mt-24">
            <div className="flex-col items-center">
              <LargeHeading
                size="lg"
                className="three-d text-black dark:text-light-gold"
              >
                Kyx AI
              </LargeHeading>
              <LargeHeading
                size="sm"
                className="three-d text-black dark:text-light-gold"
              >
                Your all in one Discord AI assistant
              </LargeHeading>
            </div>
          </div>
          <div className="flex flex-col w-full p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 mt-4">
            <HomeAnimation />
          </div>
        </div>
        <Chat />
      </div>
      <div className="snap-start snap-mandatory relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden md-pt-20 pt-20" id="section-2">
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4 lg:px-0 w-full max-w-6xl">
          <div className="md:w-1/2 relative ">
            <div className="relative h-0 overflow-hidden max-w-full justify-center items-center" style={{ paddingBottom: "56.25%" }}>
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/Khl-cflasyY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            <div className="mt-8 text-center">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=1109484717981573131&permissions=397287746624&scope=bot" className={buttonVariants({ variant: "premium" })} target="_blank">
                Add Kyx AI to my server!
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 dark:text-light-gold three-d">Explore what you can do with Kyx AI</h2>
            <Paragraph className='text-left'>Unlock the power of AI for your Discord server with Kyx AI, the free and versatile Discord bot. Discover the capabilities of AI with the following features:</Paragraph>
            <ul className="list-disc ml-5 space-y-2 text-lg font-medium leading-7 dark:text-slate-100">
              <li className="pl-2"><b>Generate stunning images</b> from text prompts! Kyx AI allows you to control the image creation process with easily adjustable settings.</li>
              <li className="pl-2">Bring life to your voice channel! Kyx AI can join your voice channel and mimic the <b>voice of a any person</b>. Plus, you can save and download the spoken audio.</li>
              <li className="pl-2">Get ready for an interactive experience! Engage with Kyx AI, get your questions answered, and enjoy the fluent conversation just <b>like chatting with a real human.</b></li>
              <li className="pl-2"><b>Completely FREE!</b> As we are just launching, every user gets 250 tokens for free usage. Enough to generate about 250 images!</li>
              <li className="pl-2">Stay tuned for more! We are constantly innovating and bringing new features to enhance your Kyx AI experience.</li>
            </ul>
          </div>
        </div>

      </div>



      {/* <div className="snap-center snap-mandatory relative h-screen flex items-center justify-center overflow-x-hidden" id="section-3">
        <Paragraph className="max-w-xl lg:text-left">
          <SignInButton variant={"text"} className="text-black dark:text-light-gold p-0 underline underline-offset-2 text-base sm:text-lg pr-2" />
          with your Discord Account to view and download all of your Kyx AI creations! Or click <Link href="https://discord.com/api/oauth2/authorize?client_id=1109484717981573131&permissions=397287746624&scope=bot" className="underline underline-offset-2 text-black dark:text-light-gold">here</Link> to add Kyx AI to your discord server.
          You don&apos;t know what Kyx AI is?{" "}
          <ScrollButton targetId="section-2" className="underline underline-offset-2 text-black dark:text-light-gold">Scroll down</ScrollButton>
          {" "}to find out!
        </Paragraph>
      </div> */}
      <div className="snap-start snap-mandatory relative min-h-screen flex flex-col justify-between md-pt-24 pt-24" id="section-3">
        <div className="flex items-center justify-center">
          <LargeHeading size="lg" className="text-center three-d text-black dark:text-light-gold">Get started with Kyx AI today!</LargeHeading>
        </div>
        <Footer />
      </div>
    </div>

    </>

  );
}
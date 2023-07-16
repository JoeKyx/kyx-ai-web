
import SignInButton from "@/components/SignInButton";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Card } from "@material-tailwind/react";
import { get } from "lodash";
import type { Metadata } from "next";
import type { GetServerSideProps } from 'next';
import { FC } from "react";

interface pageProps {
  destination?: string;

}


const page: FC<pageProps> = ({ }) => {



  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col gap-6 justify-center">
        <LargeHeading size="sm" className="text-black dark:text-light-gold lg:text-center">
          Login to Discord to access this part of the site!
        </LargeHeading>

        <SignInButton className="mx-auto" />


        {/* <Card className="w-full sm:w-1/2">
          <LargeHeading
            size="sm"
            className="text-black dark:text-light-gold lg:text-center"
          >
            Login
          </LargeHeading>
          <LargeHeading
            size="xs"
            className="text-black dark:text-light-gold lg:text-center pb-5"
          >
            to your Discord account
          </LargeHeading>
          <Paragraph className="max-w-xl text-left">
            Login to your Discord account to access {destinationName}!
          </Paragraph>
        </Card> */}
      </div>
    </div >)

}

export default page;
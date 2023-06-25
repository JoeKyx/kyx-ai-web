import { FC } from "react";

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Card from "@/components/ui/Card";
import { Check } from "lucide-react";
import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";

interface pageProps {}

// export metadata
export const metadata: Metadata = {
  title: "Kyx AI | Free vs. Premium",
  description: "Informations about the free and premium plan of Kyx AI",
};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="container  mx-auto mt-12">
      <div className="flex flex-col sm:flex-row gap-6">
        <Card className="w-full sm:w-1/2">
          <LargeHeading
            size="sm"
            className="text-black dark:text-light-gold lg:text-center"
          >
            Free
          </LargeHeading>
          <LargeHeading
            size="xs"
            className="text-black dark:text-light-gold lg:text-center pb-5"
          >
            free to use
          </LargeHeading>

          <Paragraph className="max-w-xl text-left">
            Our free plan includes the following features:
          </Paragraph>
          <div className="flex flex-col gap-6">
            <FreeFeatures />
            <Paragraph className="text-black dark:text-light-gold lg:text-center flex-grow">
              All users get a free 1000 tokens to use on all our features!
            </Paragraph>
          </div>
        </Card>
        <Card className="w-full sm:w-1/2">
          <LargeHeading
            size="sm"
            className="text-black dark:text-light-gold lg:text-center"
          >
            Premium
          </LargeHeading>
          <LargeHeading
            size="xs"
            className="text-black dark:text-light-gold lg:text-center pb-5"
          >
            only 9€ per month
          </LargeHeading>
          <Paragraph className="max-w-xl text-left">
            Our premium plan includes the following features:
          </Paragraph>
          <div className="flex flex-col gap-6">
            <FreeFeatures />
            <PremiumFeatures />
            <Paragraph className="text-black dark:text-light-gold">
              Premium comes with 10.000 tokens to use on all our features per
              month!
            </Paragraph>
            <Button variant="premium">Purchase Now!</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const FreeFeatures: FC = () => {
  return (
    <div className="border p-3 rounded-xl">
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Generate Images from text
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Let the AI join a voice channel and speak for you{" "}
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Chat with the AI
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
    </div>
  );
};

const PremiumFeatures: FC = () => {
  return (
    <div className="border p-3 rounded-xl dark:border-light-gold ">
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Upload Mp3 files to generate a new AI voice
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Share your voice with others
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
      <div className="flex items-center">
        <Paragraph className="text-black dark:text-white text-left flex-grow">
          Advanced image generation options
        </Paragraph>
        <Icons.Check color="green" className="ml-2" />
      </div>
    </div>
  );
};

export default page;

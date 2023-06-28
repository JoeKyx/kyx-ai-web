import VoiceGenerations from "@/components/dashboard/VoiceGenerations";
import { Metadata } from "next";
import { FC } from "react";

interface pageProps { }
export const metadata: Metadata = {
  title: "Kyx AI | Voices",
  description: "Information about your voice generations",
};

const page: FC<pageProps> = ({ }) => {
  return (
    <div className="flex justify-center">
      <VoiceGenerations />
    </div>
  );
};

export default page;

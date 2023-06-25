import VoiceGenerations from "@/components/dashboard/VoiceGenerations";
import { FC } from "react";

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return (
    <div className="flex justify-center">
      <VoiceGenerations />
    </div>
  );
};

export default page;

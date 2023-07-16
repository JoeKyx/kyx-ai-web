import ImageGenerations from "@/components/dashboard/ImageGenerations";
import { set } from "lodash";
import { fetchData } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { imageDataArray } from "@/lib/validators/imageData";
import { Loader2 } from "lucide-react";
import PageLoader from "@/components/ui/PageLoader";
import { Metadata } from "next";

interface pageProps { }

export interface ImageData {
  guildId: string;
  userId: string;
  url: string;
  generationId: string;
  messageId: string;
  prompt: string;
  interactionId: string;
  timestamp: string;
  upscaledUrl?: string;
  upscaledVariationId?: string;
  upscaled?: boolean;
}
export const metadata: Metadata = {
  title: "Kyx AI | Images",
  description: "Information about your image generations",
};

const page: FC<pageProps> = ({ }) => {
  return (
    <div>
      <ImageGenerations />
    </div>
  );
};



export default page;

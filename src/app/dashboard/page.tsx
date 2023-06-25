import { FC } from "react";
import Button from "@/components/ui/Button";
import DashboardCart from "@/components/dashboard/DashboardCart";
import Link from "next/link";

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return (
    <div className="flex gap-10 justify-center">
      <DashboardCart
        title="AI Image Generation"
        text="See your previously generated images and download them. You can also see the paramters used to generate the image."
        button={<Link href={"/dashboard/images"}>AI Image Generation</Link>}
        imageSrc="/category_images_v2.jpeg"
      />
      <DashboardCart
        title="AI Voice Generation"
        text="See and listen to the voices that are available to you. You can also download previously generated MP3 files."
        button={<Link href={"/dashboard/voices"}>AI Voice Generation</Link>}
        imageSrc="/category_voice_v2.jpeg"
      />
    </div>
  );
};

export default page;

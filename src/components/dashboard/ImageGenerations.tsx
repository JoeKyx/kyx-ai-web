"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { fetchData } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ImageData } from "@/app/dashboard/images/page";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import LargeHeading from "../ui/LargeHeading";
import { Button as MButton, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon, SearchIcon } from "lucide-react";
import PageLoader from "../ui/PageLoader";
import Pagination from "../ui/Pagination";
import SearchBar from "../ui/SearchBar";

interface ImageGenerationsProps { }

const ImageGenerations: FC<ImageGenerationsProps> = () => {
  const { data: session, status } = useSession();
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState<Boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (status === "loading") {
      return; // Do nothing while loading
    }

    if (!session) {
      router.push("/login"); // If not authenticated, force log in
    }

    const fetchData = async () => {
      if (session) {
        console.log("Fetching data");
        try {
          const response = await fetch(
            `/api/history/images/${session.user?.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // Check if code 200

          const data = await response.json();
          if (data.images) {
            setImageData(data.images); // Update the state with the fetched data
            setLoading(false);
          }
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
    };

    if (session) {
      fetchData();
    }
  }, [session, status, router]);

  const groupedImages: { [interactionId: string]: ImageData[] } =
    imageData.reduce((acc, image) => {
      if (!acc[image.interactionId]) {
        acc[image.interactionId] = [];
      }
      acc[image.interactionId].push(image);
      return acc;
    }, {} as { [interactionId: string]: ImageData[] });

  const groupedImagesLength = Object.keys(groupedImages).length;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexofLastRow = currentPage * rowsPerPage;
  const indexofFirstRow = indexofLastRow - rowsPerPage;

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    // Adjust number of pages
  };

  const filteredImages = Object.entries(groupedImages)
    .filter(([messageId, imageList]) =>
      imageList[0].prompt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort(([, a], [, b]) => {
      const timestampA = new Date(a[0].timestamp);
      const timestampB = new Date(b[0].timestamp);
      return timestampB.getTime() - timestampA.getTime();
    })
    .slice(indexofFirstRow, indexofLastRow);

  const totalPages = Math.ceil(
    Object.entries(groupedImages).filter(([messageId, imageList]) =>
      imageList[0].prompt.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / rowsPerPage
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PageLoader />
        </div>
      ) : (

        imageData.length == 0 ? (
          <div className="flex justify-center items-center">
            <Paragraph>You haven&apos;t generated any images yet.</Paragraph>
          </div>
        ) : (

          <div className="flex-col items-center gap-4 justify-center">

            <div className="flex items-center gap-4 justify-center">
              <SearchBar
                containerClassName="relative flex items-center gap-2 pb-10"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                value={searchTerm}
              />
            </div>
            {totalPages > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                prev={prev}
                next={next}
                handlePageClick={handlePageClick}
              />
            ) : null}
            {filteredImages.map(([messageId, imageList]) => (
              <div key={messageId} className="flex justify-center">
                <div className="flex flex-col items-start gap-2">
                  <LargeHeading size="xs">{imageList[0].prompt}</LargeHeading>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {imageList.map((image) => (
                      <div
                        className="flex flex-col gap-2 sm:py-2 py-0"
                        key={image.url}
                      >
                        <Image
                          src={image.url}
                          width={256}
                          height={256}
                          alt="an AI generated image"
                          className="hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer rounded-md shadow-sm sm:w-64 w-48"
                          onClick={() => {
                            window.open(image.url, "_blank");
                          }}
                        />
                        {image.upscaledUrl && (
                          <Button onClick={() => window.open(image.upscaledUrl)}>
                            Upscaled Version
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {totalPages > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                prev={prev}
                next={next}
                handlePageClick={handlePageClick}
              />
            ) : null}
          </div>
        )


      )}

    </>
  );
};

export default ImageGenerations;

"use client";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PageLoader from "../ui/PageLoader";
import Paragraph from "@/components/ui/Paragraph";
import SearchBar from "@/ui/SearchBar";
import Pagination from "@/ui//Pagination";
import Button from "@/ui/Button";
import { VoiceGeneration } from "@/types/VoiceGeneration";
import VoiceGenerationMessage from "@/components/VoiceGenerationMessage";

interface VoiceGenerationsProps { }

const VoiceGenerations: FC<VoiceGenerationsProps> = () => {
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  const [voiceGenerations, setVoiceGenerations] = useState<VoiceGeneration[]>(
    []
  );
  const [filteredGenerations, setFilteredGenerations] = useState<
    VoiceGeneration[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenerations, setCurrentGenerations] = useState<
    VoiceGeneration[]
  >([]);
  const [totalPages, setTotalPages] = useState(0);
  const generationsPerPage = 5;
  const [loading, setLoading] = useState<Boolean>(true);

  // State to track whether a message should be shown in full
  const [showFullMessage, setShowFullMessage] = useState<Boolean[]>([]);

  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) router.push("/login");

    const fetchData = async () => {
      if (session) {
        try {
          const response = await fetch(
            `/api/history/voices/${session.user?.id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = await response.json();
          if (data.usedVoices) {
            const formattedGenerations = data.usedVoices.map(
              (voiceGeneration: VoiceGeneration) => ({
                ...voiceGeneration,
                timestamp: new Date(voiceGeneration.timestamp),
                formattedDate: new Date(
                  voiceGeneration.timestamp
                ).toLocaleString(),
              })
            );
            console.log("FGL: " + formattedGenerations.length);
            setVoiceGenerations(formattedGenerations);
            setFilteredGenerations(formattedGenerations);
            setShowFullMessage(
              new Array(formattedGenerations.length).fill(false)
            );

            setTotalPages(
              Math.ceil(formattedGenerations.length / generationsPerPage)
            );
            setCurrentGenerations(
              formattedGenerations.slice(
                (currentPage - 1) * generationsPerPage,
                currentPage * generationsPerPage
              )
            );
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    console.log("Fetching...");
    fetchData();
  }, [session]);

  useEffect(() => {
    //slice the generations into pages whenever currentPage or filteredGenerations changes
    setCurrentGenerations(
      filteredGenerations.slice(
        (currentPage - 1) * generationsPerPage,
        currentPage * generationsPerPage
      )
    );
  }, [currentPage, filteredGenerations]);

  const handleReadMoreClick = (index: number) => {
    const newShowFullMessage = [...showFullMessage];
    newShowFullMessage[index] = !newShowFullMessage[index];
    setShowFullMessage(newShowFullMessage);

    // Scroll the message into view in the middle of the screen
    messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
    const filtered = voiceGenerations.filter((generation) =>
      generation.message
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    setFilteredGenerations(filtered);
    setShowFullMessage(new Array(filtered.length).fill(false));

    setTotalPages(Math.ceil(filtered.length / generationsPerPage));
  };

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    setShowFullMessage(new Array(filteredGenerations.length).fill(false));
  };

  const next = () => {
    console.log("current page: ", currentPage);
    console.log("total pages: ", totalPages);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);

      setShowFullMessage(new Array(filteredGenerations.length).fill(false));
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);

      setShowFullMessage(new Array(filteredGenerations.length).fill(false));
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PageLoader />
        </div>
      ) : (
        <div className="flex-col items-center gap-4 justify-center">
          <div className="flex-col items-center justify-center pb-4">
            <div className="flex items-center gap-4 justify-center">
              <SearchBar
                containerClassName="relative flex items-center gap-2 pb-10"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            {filteredGenerations.length > generationsPerPage && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                prev={prev}
                next={next}
                handlePageClick={changePage}
              />
            )}
          </div>

          {currentGenerations.length > 0 ? (
            currentGenerations.map((voiceGeneration, index) => (
              <div
                key={voiceGeneration.message + voiceGeneration.id}
                className="flex-col border-2 rounded-sm mb-2 p-3 dark:bg-slate-800 bg-gray-200 dark:border-slate-500 border-slate-gray-300"
              >
                <Paragraph className="text-left">
                  <span>Date: </span>
                  <span>{voiceGeneration.formattedDate}</span>
                </Paragraph>
                <Paragraph className="text-left">
                  <span>Voice: </span>
                  <span>{voiceGeneration.voice_name}</span>
                </Paragraph>

                <VoiceGenerationMessage
                  voiceGeneration={voiceGeneration}
                  index={index}
                  showFullMessage={showFullMessage}
                  handleReadMoreClick={handleReadMoreClick}
                />
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}

          {filteredGenerations.length > generationsPerPage && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              prev={prev}
              next={next}
              handlePageClick={changePage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default VoiceGenerations;

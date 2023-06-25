"use client";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { VoiceGeneration } from "@/types/VoiceGeneration";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";

interface VoiceGenerationMessageProps {
  voiceGeneration: VoiceGeneration;
  index: number;
  showFullMessage: Boolean[];
  handleReadMoreClick: (index: number) => void;
}

const VoiceGenerationMessage: FC<VoiceGenerationMessageProps> = ({
  voiceGeneration,
  index,
  showFullMessage,
  handleReadMoreClick,
}) => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showFullMessage[index]) {
      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showFullMessage[index]]); // Only re-run the effect if the state for this particular message changes

  return (
    <div ref={messageRef}>
      <Paragraph className="text-left">
        <span>Message: </span>
        <div>
          {showFullMessage[index] ||
          voiceGeneration.message.split(" ").length < 11
            ? voiceGeneration.message
            : `${voiceGeneration.message.split(" ").slice(0, 10).join(" ")}...`}
        </div>
        {voiceGeneration.message.split(" ").length > 11 && (
          <div className="flex justify-between items-center pt-2">
            <audio controls src={voiceGeneration.mp3_link}></audio>
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => handleReadMoreClick(index)}
            >
              {showFullMessage[index] ? "Read Less" : "Read More"}
            </Button>
          </div>
        )}
      </Paragraph>
    </div>
  );
};

export default VoiceGenerationMessage;

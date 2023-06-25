import { Message } from "@/lib/validators/message";
import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";

const defaultValue = [
  {
    id: nanoid(),
    text: "Hello, how can I help you?",
    isUserMessage: false,
  },
];

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  addMessages: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isMessageUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  addMessages: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(defaultValue);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  const addMessages = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === id) {
          return {
            ...message,
            text: updateFn(message.text),
          };
        }
        return message;
      })
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        addMessages,
        removeMessage,
        isMessageUpdating,
        setIsMessageUpdating,
        updateMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

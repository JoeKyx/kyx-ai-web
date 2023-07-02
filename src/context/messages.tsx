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
  addMessages: () => { },
  removeMessage: () => { },
  updateMessage: () => { },
  setIsMessageUpdating: () => { },
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  useEffect(() => {
    if (!isHydrated) {
      setMessages(defaultValue);
      setIsHydrated(true);
    }
  }, [isHydrated]);

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

  if (!isHydrated) {
    return null;
  }

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

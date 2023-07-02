"use client";
import { MessagesProvider } from "@/context/messages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <MessagesProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
        </MessagesProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;

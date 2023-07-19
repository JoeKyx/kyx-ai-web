import Chat from "@/components/main/chat/Chat";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/toast";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          <Navbar />
          <Toaster position="bottom-left" />
          <main>{children}</main>
        </Providers>
        <Analytics />


      </body>
    </html>
  );
}

"use client";
import { useSession } from "next-auth/react";
import { FC, HTMLAttributes, forwardRef } from "react";
import Icons from "@/components/Icons";
import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import Button, { buttonVariants } from "@/ui/Button";
import Link from "next/link";


interface TokenDisplayProps extends HTMLAttributes<HTMLDivElement> { }

const TokenDisplay = forwardRef<HTMLDivElement, TokenDisplayProps>(
  ({ className, ...props }, ref) => {
    const { data: session, status } = useSession();
    return (

      <div ref={ref} className={className} {...props}>
        <Link href={'/tokens'} className={buttonVariants({ variant: "ghost" })}>
          <Icons.Gem className="h-4 w-4 pr-1" />
          {status === "loading" ? "Loading..." : session?.user?.tokens}
          <span className="invisible sm:visible pl-1 w-0 sm:w-max">Tokens</span>
        </Link>
      </div>
    );
  }
);

TokenDisplay.displayName = "TokenDisplay";


export default TokenDisplay;

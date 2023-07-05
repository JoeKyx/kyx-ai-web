"use client";
import { useSession } from "next-auth/react";
import { FC, HTMLAttributes, forwardRef, useState, useEffect } from "react";
import Icons from "@/components/Icons";
import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import Button, { buttonVariants } from "@/ui/Button";
import Link from "next/link";
import { Loader2 } from "lucide-react";



interface TokenDisplayProps extends HTMLAttributes<HTMLDivElement> { }

const TokenDisplay = forwardRef<HTMLDivElement, TokenDisplayProps>(
  ({ className, ...props }, ref) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
      setIsHydrated(true);
    }, []);

    if (!isHydrated) {
      return null;
    }


    return (

      <div ref={ref} className={className} {...props}>
        <Link href={'/tokens'} className={buttonVariants({ variant: "ghost" })}>
          <Icons.Gem className="h-4 w-4 pr-1" />
          {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>{session?.user?.tokens}<span className="invisible sm:visible pl-1 w-0 sm:w-max">Tokens</span></span>}

        </Link>
      </div>
    );
  }
);

TokenDisplay.displayName = "TokenDisplay";


export default TokenDisplay;

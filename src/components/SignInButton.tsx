"use client";
import { FC, useState, useEffect } from "react";
import Button from "@/components/ui/Button";

import { signIn } from "next-auth/react";
import { toast } from "./ui/toast";
import LoginModal from "@/components/LoginModal";
import { buttonVariants } from "@/components/ui/Button";
import { size } from "lodash";
import { VariantProps } from "class-variance-authority";
import { sign } from "crypto";

interface SignInButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  text?: string;
  callbackUrl?: string;
}

const SignInButton: FC<SignInButtonProps> = ({ className, variant, size, text, callbackUrl }) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }
    , []);

  if (!isHydrated) {
    return null;
  }

  const signInWithDiscord = async () => {
    setIsLoading(true);
    try {
      // Get the current base URL so the callbackURL works anywhere

      const baseUrl = window.location.origin;
      // If goBack go back to the previous page (prev page) 

      if (callbackUrl) {
        await signIn("discord", { callbackUrl: `${baseUrl}/${callbackUrl}` });
      }
      else {
        await signIn("discord");
      }
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };



  return (
    <Button
      onClick={signInWithDiscord}
      isLoading={isLoading}
      variant={variant}
      size={size}
      className={className}
    >
      {text ? text : "Sign in"}
    </Button>
  );
};

export default SignInButton;

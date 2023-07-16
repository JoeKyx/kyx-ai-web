"use client";
import { FC, useState, useEffect } from "react";
import Button from "@/components/ui/Button";

import { signIn } from "next-auth/react";
import { toast } from "./ui/toast";
import LoginModal from "@/components/LoginModal";
import { buttonVariants } from "@/components/ui/Button";
import { size } from "lodash";
import { VariantProps } from "class-variance-authority";

interface SignInButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}

const SignInButton: FC<SignInButtonProps> = ({ className, variant, size }) => {
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


      await signIn("discord", { callbackUrl: `${baseUrl}/dashboard` });
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
      Sign In
    </Button>
  );
};

export default SignInButton;

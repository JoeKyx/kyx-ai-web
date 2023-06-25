"use client";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";

import { signIn } from "next-auth/react";
import { toast } from "./ui/toast";
import LoginModal from "@/components/LoginModal";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      // await signIn("google", { callbackUrl: "http://localhost:3000/" });
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  const signInWithDiscord = async () => {
    setIsLoading(true);
    try {
      await signIn("discord");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithDiscord} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;

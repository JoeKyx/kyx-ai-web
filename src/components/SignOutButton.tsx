"use client";
import { FC, useState, useEffect } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/toast";
import { signOut } from "next-auth/react";

interface SignOutButtonProps { }

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {

  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }
    , []);

  if (!isHydrated) {
    return null;
  }

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      const baseUrl = window.location.origin;

      await signOut({ callbackUrl: baseUrl });
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;

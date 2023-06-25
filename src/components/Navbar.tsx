import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC, useState } from "react";
import SignInButton from "@/components/SignInButton";
import { buttonVariants } from "@/components/ui/Button";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "./ThemeToggle";
import LoginModal from "./LoginModal";
import { Session } from "next-auth";
import TokenDisplay from "./navbar/TokenDisplay";
import Image from "next/image";

interface NavbarProps { }

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            Kyx AI
          </Link>
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="User Avatar"
              className="w-10 h-10 rounded-full inline-block ml-2"
            />
          ) : (
            <></>
          )}
          {session?.user?.name ? (
            <span className="text-slate-900 dark:text-slate-100 invisible md:visible pl-4">
              Signed in as {session.user.name}
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="flex md:gap-4 gap-1 pr-4">
          {session ? (
            <TokenDisplay className="flex pl-4 items-center justify-center" />
          ) : (
            <></>
          )}
          <ThemeToggle />
          <SignInOutButtons currentSession={session} />
        </div>
      </div>
    </div>
  );
};

interface SignInOutButtonsProps {
  currentSession: Session | null;
}

const SignInOutButtons: FC<SignInOutButtonsProps> = ({ currentSession }) => {
  return (
    <>
      {currentSession ? (
        <>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

export default Navbar;

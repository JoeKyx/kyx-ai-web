"use client"
import { FC, HTMLAttributes, forwardRef } from 'react'
import { useSession } from 'next-auth/react'
import Icons from './Icons';
import { cn } from '@/lib/utils';

interface TokenTextProps extends HTMLAttributes<HTMLSpanElement> { }

const TokenText = forwardRef<HTMLSpanElement, TokenTextProps>(
  ({ className, ...props }, ref) => {
    const { data: session, status } = useSession();
    return status === "loading" ? (
      <></>
    ) : (
      <span className={cn(className)} {...props}>
        {session?.user?.tokens} Tokens
      </span>
    );
  }
);
export default TokenText
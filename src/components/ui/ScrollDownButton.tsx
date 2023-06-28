"use client"
import React, { FC } from 'react';
import Button from '@/components/ui/Button';


interface ScrollDownButtonProps {
  target: string;
}

export const ScrollDownButton: FC<ScrollDownButtonProps> = ({ target }) => {
  return (
    <Button className="my-4 p-2 w-full text-center text-white cursor-pointer"
      onClick={() =>
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      &#x25BC;
    </Button>
  );
}

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, forwardRef } from "react";

interface CardProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof CardVariants> {}

const CardVariants = cva(
  "dark:border-light-gold border-black border-2 rounded-xl p-6 overflow-hidden realtive transition-all duration-300  shadow-md bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Card = forwardRef<HTMLParagraphElement, CardProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(CardVariants({ size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;

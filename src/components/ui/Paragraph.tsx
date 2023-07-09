import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof paragraphVariants> { }

const paragraphVariants = cva(
  "mb-2",
  {
    variants: {
      size: {
        lg: "text-lg sm:text-2xl",
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
      textColor: {
        default: "text-slate-700 dark:text-slate-300",
        gold: "dark:text-light-gold text-dark-gold",
      }
    },
    defaultVariants: {
      size: "default",
      textColor: "default",
    },
  }
);

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, textColor, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, textColor, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;

import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface LargeHeadingProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof LargeHeadingVariants> {}

const LargeHeadingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        xs: "text-xl md:text-xl lg:text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const LargeHeading = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(LargeHeadingVariants({ size, className }))}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = "Paragraph";

export default LargeHeading;

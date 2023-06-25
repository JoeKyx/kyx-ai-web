import { VariantProps, cva } from "class-variance-authority";
import { SearchIcon } from "lucide-react";
import {
  FC,
  ChangeEvent,
  HtmlHTMLAttributes,
  forwardRef,
  FormEventHandler,
} from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchBarVariants> {
  containerClassName?: string;
}

const searchBarVariants = cva(
  "py-2 pl-8 pr-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
  {
    variants: {
      size2: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size2: "default",
    },
  }
);
const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    { className, size2, value, onChange, containerClassName, ...props },
    ref
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={containerClassName}>
        <SearchIcon className="text-gray-400" size={20} />
        <input
          ref={ref}
          className={cn(searchBarVariants({ size2, className }))}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
export default SearchBar;

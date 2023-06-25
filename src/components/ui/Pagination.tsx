import { FC, HTMLAttributes, forwardRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  prev: () => void;
  next: () => void;
  handlePageClick: (page: number) => void;
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      prev,
      next,
      handlePageClick,
      className,
      ...props
    },
    ref
  ) => {
    const pages = Array.from(Array(totalPages).keys());

    return (
      <div
        className={cn(className, "flex items-center gap-4 justify-center")}
        {...props}
      >
        <Button
          className="flex items-center gap-2 rounded-full"
          onClick={prev}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page + 1)}
              disabled={currentPage === page + 1}
            >
              {page + 1}
            </Button>
          ))}
        </div>
        <Button
          color="blue-gray"
          className="flex items-center gap-2 rounded-full"
          onClick={next}
          disabled={currentPage >= totalPages}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    );
  }
);

export default Pagination;

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
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
      <div
        className={cn(className, "flex items-center gap-4 justify-center")}
        {...props}
      >
        <Button
          className="flex items-center gap-2 rounded-full"
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
        >
          First
        </Button>
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
              onClick={() => handlePageClick(page)}
              disabled={currentPage === page}
            >
              {page}
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
        <Button
          className="flex items-center gap-2 rounded-full"
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </Button>
      </div>
    );
  }
);

Pagination.displayName = "Pagination";

export default Pagination;

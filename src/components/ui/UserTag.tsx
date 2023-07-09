import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";



interface UserTagProps extends HTMLAttributes<HTMLSpanElement> { }

const UserTag = forwardRef<HTMLSpanElement, UserTagProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-blue-700 bg-gray-300 dark:text-slate-100 hover:bg-gray-600 hover:text-blue-100 dark:bg-slate-700 hover:dark:text-white hover:dark:bg-slate-400 pl-1 pr-1", className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

UserTag.displayName = "UserTag";

export default UserTag;
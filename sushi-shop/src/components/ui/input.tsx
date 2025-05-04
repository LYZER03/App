import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input component for collecting user input
 * Fully accessible with aria-attributes and proper focus states
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error state of the input
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          aria-invalid={error}
          aria-errormessage={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {error && errorMessage && (
          <p 
            id={`${props.id}-error`}
            className="mt-1 text-sm text-red-500"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

/**
 * Select option interface
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Select component props
 */
export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  /**
   * Options for the select dropdown
   */
  options: SelectOption[];
  /**
   * Label for the select
   */
  label?: string;
  /**
   * Error state of the select
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * onChange handler with typed value
   */
  onChange?: (value: string) => void;
}

/**
 * Select component for dropdown selections
 * Fully accessible with aria-attributes and proper focus states
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, label, error, errorMessage, onChange, ...props }, ref) => {
    const id = props.id || React.useId();
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
    
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={id}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            className={cn(
              "flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            ref={ref}
            onChange={handleChange}
            aria-invalid={error}
            aria-errormessage={error ? `${id}-error` : undefined}
            {...props}
          >
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value} 
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
        {error && errorMessage && (
          <p 
            id={`${id}-error`}
            className="text-sm text-red-500"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };

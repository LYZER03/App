import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/**
 * Checkbox component props
 */
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Description for additional context
   */
  description?: string;
  /**
   * Error state of the checkbox
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
}

/**
 * Checkbox component with accessible label and optional description
 * Follows WAI-ARIA best practices for checkboxes
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, errorMessage, ...props }, ref) => {
    const id = props.id || React.useId();
    const descriptionId = description ? `${id}-description` : undefined;
    const errorId = error && errorMessage ? `${id}-error` : undefined;
    
    return (
      <div className="space-y-1">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <div className="relative flex items-center justify-center">
              <input
                id={id}
                type="checkbox"
                className="sr-only"
                ref={ref}
                aria-invalid={error}
                aria-describedby={cn(descriptionId, errorId)}
                {...props}
              />
              <div
                className={cn(
                  "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                  props.disabled && "opacity-50 cursor-not-allowed",
                  error && "border-red-500",
                  className
                )}
              >
                {props.checked && (
                  <Check className="h-3 w-3 text-primary" />
                )}
              </div>
            </div>
          </div>
          {(label || description) && (
            <div className="ml-2 text-sm">
              {label && (
                <label
                  htmlFor={id}
                  className={cn(
                    "font-medium text-foreground",
                    props.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {label}
                </label>
              )}
              {description && (
                <p
                  id={descriptionId}
                  className={cn(
                    "text-muted-foreground",
                    props.disabled && "opacity-50"
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p id={errorId} className="text-sm text-red-500 mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

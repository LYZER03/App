import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dialog/Modal component props
 */
export interface DialogProps {
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Function to call when the dialog should be closed
   */
  onClose: () => void;
  /**
   * Dialog title
   */
  title?: React.ReactNode;
  /**
   * Dialog description/subtitle
   */
  description?: React.ReactNode;
  /**
   * Dialog content
   */
  children: React.ReactNode;
  /**
   * Dialog footer content, typically actions
   */
  footer?: React.ReactNode;
  /**
   * Maximum width of the dialog
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

/**
 * Dialog/Modal component for displaying content in an overlay
 * Follows WAI-ARIA guidelines for modals
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "md",
}: DialogProps) {
  // Focus trap management
  const dialogRef = React.useRef<HTMLDivElement>(null);
  
  // Close on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  
  // Prevent body scroll when dialog is open
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);
  
  // Dialog doesn't render anything if not open
  if (!open) return null;
  
  // Size classes based on maxWidth prop
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full mx-4",
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        // Close when clicking backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
      aria-describedby={description ? "dialog-description" : undefined}
    >
      <div
        ref={dialogRef}
        className={cn(
          "bg-background rounded-lg shadow-lg w-full relative overflow-hidden",
          sizeClasses[maxWidth]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          {(title || description) && (
            <div className="mb-6">
              {title && (
                <h2 
                  id="dialog-title"
                  className="text-xl font-bold font-heading"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p 
                  id="dialog-description"
                  className="text-sm text-muted-foreground mt-1"
                >
                  {description}
                </p>
              )}
            </div>
          )}
          
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
          
          {/* Content */}
          <div className="overflow-y-auto">
            {children}
          </div>
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="border-t p-4 bg-muted/30 flex justify-end space-x-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * DialogTrigger component that opens a dialog when clicked
 * Convenient wrapper for common dialog trigger pattern
 */
export function DialogTrigger({
  children,
  dialog,
  open,
  onOpenChange,
}: {
  children: React.ReactElement;
  dialog: Omit<DialogProps, "open" | "onClose">;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <>
      {React.cloneElement(children, {
        onClick: () => onOpenChange(true),
      } as React.HTMLAttributes<HTMLElement>)}
      <Dialog 
        {...dialog} 
        open={open} 
        onClose={() => onOpenChange(false)} 
      />
    </>
  );
}

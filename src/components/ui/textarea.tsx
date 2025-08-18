import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Optional custom class name for the textarea container
   */
  containerClassName?: string;
  /**
   * Whether the textarea should automatically resize based on content
   */
  autoResize?: boolean;
  /**
   * Maximum number of rows for auto-resize
   */
  maxRows?: number;
  /**
   * Minimum number of rows for auto-resize
   */
  minRows?: number;
  /**
   * Whether the textarea is in an error state
   */
  error?: boolean;
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    containerClassName, 
    autoResize = false, 
    maxRows = 5, 
    minRows = 3, 
    error, 
    helperText, 
    ...props 
  }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        
        const computed = window.getComputedStyle(textarea);
        const lineHeight = parseInt(computed.getPropertyValue('line-height'), 10);
        const padding = parseInt(computed.getPropertyValue('padding-top'), 10) +
                        parseInt(computed.getPropertyValue('padding-bottom'), 10);
        
        const rows = textarea.value.split('\n').length;
        const clampedRows = Math.min(Math.max(rows, minRows), maxRows);
        
        const height = (clampedRows * lineHeight) + padding;
        textarea.style.height = `${height}px`;
      }
    }, [autoResize, maxRows, minRows, props.value]);

    return (
      <div className={cn("w-full", containerClassName)}>
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={textareaRef}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "mt-1 text-xs text-muted-foreground",
            error && "text-destructive"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

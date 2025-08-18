import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional custom class name for the input container
   */
  containerClassName?: string;
  /**
   * Optional icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  /**
   * Optional icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
  /**
   * Callback when start icon is clicked
   */
  onStartIconClick?: () => void;
  /**
   * Callback when end icon is clicked
   */
  onEndIconClick?: () => void;
  /**
   * Whether the input is in an error state
   */
  error?: boolean;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, containerClassName, startIcon, endIcon, onStartIconClick, onEndIconClick, error, helperText, ...props }, ref) => {
    return (
      <div className={cn("w-full", containerClassName)}>
        <div className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          startIcon && "pl-10",
          endIcon && "pr-10",
          className
        )}>
          {startIcon && (
            <div 
              className={cn(
                "absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground",
                onStartIconClick && "cursor-pointer"
              )}
              onClick={onStartIconClick}
            >
              {startIcon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className="w-full h-full bg-transparent border-0 focus:outline-none focus:ring-0 p-0"
            {...props}
          />
          {endIcon && (
            <div 
              className={cn(
                "absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground",
                onEndIconClick && "cursor-pointer"
              )}
              onClick={onEndIconClick}
            >
              {endIcon}
            </div>
          )}
        </div>
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
Input.displayName = "Input"

export { Input }

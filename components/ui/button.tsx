import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "secondary";
}

const variantClasses = {
  default: "bg-slate-900 text-white hover:bg-slate-700",
  outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
  secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300"
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-medium h-9 px-4 transition",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

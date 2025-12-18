import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 flex-grow-0 flex-shrink-0 basis-auto",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary:
          "bg-primary text-heading text-base",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        currentGhost: "bg-accent text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        linkDefault: "text-foreground underline-offset-4 hover:underline",
        underline: "underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-4xl px-3",
        lg: "h-14 rounded-4xl px-2",
        icon: "h-10 w-10",
      },
      font: {
        regular: "font-regular",
        medium: "font-medium",
        bold: "font-bold",
      },
      uppercase: {
        true: "uppercase",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "regular",
      uppercase: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, font, uppercase, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, font, uppercase, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm gap-[7px] font-medium peer disabled:pointer-events-none disabled:bg-[#BBBFCC]",
  {
    variants: {
      variant: {
        default:
          "bg-primary rounded-lg text-grey-10 border border-black hover:border-[#3E414C] hover:bg-[#3E414C] hover:shadow-sm !hover:opacity-100 active:shadow-sm active:shadow-[#556987] active:border active:border-black disabled:shadow-sm disabled:border disabled:border-[#BBBFCC] disabled:bg-[#BBBFCC]",
        ghost:
          "bg-white rounded-lg text-grey-70 hover:shadow-[4px_4px_0px] hover:shadow-black active:shadow-none disabled:shadow-none",
        plain:
          "bg-[#fff] rounded-lg shadow-sm border border-grey-30 hover:shadow-none text-grey-70 hover:bg-grey-10",
        unstyled: "",
      },
      size: {
        default: "h-12 px-5 py-3",
        plain: "h-auto py-2.5 px-4",
        sm: "h-9 py-2 px-3.5",
        md: "h-10 py-2.5 px-4",
        lg: "h-11 py-2.5 px-[18px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          type="button"
          {...props}
        />
      </>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

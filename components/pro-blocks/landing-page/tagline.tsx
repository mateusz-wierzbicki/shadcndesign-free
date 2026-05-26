import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const taglineVariants = cva(
  "flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background border shadow-xs px-2.5 rounded-md h-7",
        secondary:
          "bg-secondary text-secondary-foreground px-2.5 rounded-md h-7",
        ghost: "bg-transparent text-muted-foreground capitalize",
        white: "text-white",
        link: "bg-card border rounded-full px-3 py-0 h-7 gap-1.5 hover:bg-accent transition-colors [&_svg]:size-4 shadow-xs cursor-pointer",
      },
    },
    defaultVariants: { variant: "ghost" },
  },
);

interface TaglineProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof taglineVariants> {
  asChild?: boolean;
}

function Tagline({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: TaglineProps) {
  const Comp = asChild ? Slot.Root : "div";

  return (
    <Comp className={cn(taglineVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
}

export { Tagline, taglineVariants };

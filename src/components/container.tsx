import { cn } from "@/lib/utils";
import type { JSX, ComponentProps } from "react";

interface ContainerProps<T extends keyof JSX.IntrinsicElements = "div"> {
  variant?: "blue" | "beige";
  as?: T;
  className?: string;
  children?: React.ReactNode;
}

export const Container = <T extends keyof JSX.IntrinsicElements = "div">({
  variant = "blue",
  children,
  className,
  as,
  ...rest
}: ContainerProps<T> & Omit<ComponentProps<T>, "className" | "children">) => {
  const Component = (as || "div") as T;

  return (
    <Component
      {...(rest as any)}
      className={cn("max-w-7xl mx-auto", className, {
        "bg-brand-blue": variant === "blue",
        "bg-brand-yellow-foreground": variant === "beige",
      })}
    >
      {children}
    </Component>
  );
};

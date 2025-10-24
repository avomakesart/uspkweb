import { ComponentProps, useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { cn } from "@/lib/utils";

export function InputStartSelect({
  ariaLabel,
  inputProps,
  options,
  className,
  selectClassName,
  ariaInvalid
}: {
  ariaLabel: string;
  options: { value: string; label: string }[];
  inputProps: ComponentProps<"input">;
  className?: string;
  selectClassName?: string;
  ariaInvalid?: boolean
}) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} className="sr-only">
        {ariaLabel}
      </Label>
      <div className={cn("flex rounded-md shadow-xs", className)}>
        <SelectNative
          aria-invalid={ariaInvalid}
          className={cn(
            "text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none",
            selectClassName
          )}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </SelectNative>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          type="text"
          {...inputProps}
        />
      </div>
    </div>
  );
}

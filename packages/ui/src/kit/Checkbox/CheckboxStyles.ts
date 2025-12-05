import { cva } from "class-variance-authority";

export const CheckboxStyles = {
  base: cva("inline-flex items-center gap-2"),
  box: cva(
    [
      "relative inline-flex items-center justify-center",
      "h-5 w-5 rounded-sm border border-foreground/30",
      "bg-background",
      "data-[checked=true]:bg-(--color) data-[checked=true]:border-(--color)",
    ].join(" ")
  ),
  mark: cva("absolute inset-0 text-white text-xs flex items-center justify-center"),
  label: cva("text-foreground text-sm"),
};


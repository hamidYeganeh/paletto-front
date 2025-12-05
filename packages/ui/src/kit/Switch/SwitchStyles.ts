import { cva } from "class-variance-authority";

export const SwitchStyles = {
  base: cva("inline-flex items-center gap-2"),
  track: cva(
    [
      "relative inline-flex h-6 w-11 items-center rounded-full",
      "bg-foreground/20 peer-checked:bg-(--color)",
    ].join(" ")
  ),
  thumb: cva(
    [
      "inline-block h-5 w-5 rounded-full bg-background shadow",
      "translate-x-[2px] peer-checked:translate-x-[22px] transition-transform",
    ].join(" ")
  ),
  label: cva("text-foreground text-sm"),
};


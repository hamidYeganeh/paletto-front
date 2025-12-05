import { cva } from "class-variance-authority";
import type { DropdownVariant, DropdownColor } from "./DropdownTypes";

export const DropdownStyles = {
  root: cva("relative inline-block"),
  menu: cva(
    [
      "absolute mt-2 min-w-40 z-50 rounded-md",
      "border border-transparent shadow-sm",
      "py-1 opacity-0 pointer-events-none",
      "data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto",
    ].join(" "),
    {
      variants: {
        variant: {
          contained: "bg-(--color) text-(--text-color)",
          outlined: "bg-transparent text-(--color) ring ring-(--color)",
          flat: "bg-(--light-color) text-(--color)",
          ghost: "bg-transparent text-(--color) border-2 border-(--color)",
          light: "bg-transparent text-(--color)",
          faded: "bg-gray-100 text-foreground",
        } as Record<DropdownVariant, string>,
        color: {
          primary:
            "[--color:theme(colors.primary.500)] [--dark-color:theme(colors.primary.600)] [--light-color:theme(colors.primary.50)] [--text-color:theme(colors.primary.50)]",
          secondary:
            "[--color:theme(colors.secondary.500)] [--dark-color:theme(colors.secondary.600)] [--light-color:theme(colors.secondary.50)] [--text-color:theme(colors.secondary.50)]",
          success:
            "[--color:theme(colors.success.500)] [--dark-color:theme(colors.success.600)] [--light-color:theme(colors.success.50)] [--text-color:theme(colors.success.50)]",
          warning:
            "[--color:theme(colors.warning.500)] [--dark-color:theme(colors.warning.600)] [--light-color:theme(colors.warning.50)] [--text-color:theme(colors.warning.50)]",
          danger:
            "[--color:theme(colors.danger.500)] [--dark-color:theme(colors.danger.600)] [--light-color:theme(colors.danger.50)] [--text-color:theme(colors.danger.50)]",
          error:
            "[--color:theme(colors.error.500)] [--dark-color:theme(colors.error.600)] [--light-color:theme(colors.error.50)] [--text-color:theme(colors.error.50)]",
          info:
            "[--color:theme(colors.info.500)] [--dark-color:theme(colors.info.600)] [--light-color:theme(colors.info.50)] [--text-color:theme(colors.info.50)]",
          default:
            "[--color:theme(colors.gray.500)] [--dark-color:theme(colors.gray.600)] [--light-color:theme(colors.gray.50)] [--text-color:theme(colors.gray.50)]",
        } as Record<DropdownColor, string>,
      },
      defaultVariants: { variant: "flat", color: "default" },
    }
  ),
  item: cva(
    [
      "px-3 py-2 text-sm inline-flex items-center gap-2",
      "hover:bg-(--dark-color)/10 cursor-pointer",
    ].join(" "),
  ),
};


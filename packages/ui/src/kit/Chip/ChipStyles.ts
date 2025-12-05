import { cva } from "class-variance-authority";
import type { ChipVariant, ChipColor, ChipSize } from "./ChipTypes";

export const ChipStyles = {
  base: cva("inline-flex items-center rounded-full border border-transparent", {
    variants: {
      variant: {
        contained: "bg-(--color) text-(--text-color)",
        outlined: "ring ring-(--color) text-(--color) bg-transparent",
        flat: "bg-(--light-color) text-(--color)",
        ghost: "border-2 border-(--color) text-(--color)",
        light: "bg-transparent text-(--color)",
        faded: "bg-gray-100 text-foreground",
      } as Record<ChipVariant, string>,
      color: {
        primary:
          "[--color:theme(colors.primary.500)] [--text-color:theme(colors.primary.50)]",
        secondary:
          "[--color:theme(colors.secondary.500)] [--text-color:theme(colors.secondary.50)]",
        success:
          "[--color:theme(colors.success.500)] [--text-color:theme(colors.success.50)]",
        warning:
          "[--color:theme(colors.warning.500)] [--text-color:theme(colors.warning.50)]",
        danger:
          "[--color:theme(colors.danger.500)] [--text-color:theme(colors.danger.50)]",
        error:
          "[--color:theme(colors.error.500)] [--text-color:theme(colors.error.50)]",
        info:
          "[--color:theme(colors.info.500)] [--text-color:theme(colors.info.50)]",
        default:
          "[--color:theme(colors.gray.500)] [--text-color:theme(colors.gray.50)]",
      } as Record<ChipColor, string>,
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      } as Record<ChipSize, string>,
    },
    defaultVariants: { variant: "flat", color: "default", size: "md" },
  }),
};


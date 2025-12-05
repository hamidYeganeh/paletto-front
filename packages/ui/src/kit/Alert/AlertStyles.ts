import { cva } from "class-variance-authority";
import type { AlertVariant, AlertColor } from "./AlertTypes";

export const AlertStyles = {
  base: cva(
    [
      "relative w-full inline-flex items-start gap-2 p-3",
      "rounded-md border border-transparent",
    ].join(" "),
    {
      variants: {
        variant: {
          contained: "bg-(--light-color)",
          outlined: "ring ring-(--color) bg-transparent",
          flat: "bg-(--light-color)",
          ghost: "bg-transparent border-2 border-(--color)",
          light: "bg-transparent",
          faded: "bg-gray-100",
        } as Record<AlertVariant, string>,
        color: {
          primary:
            "[--color:theme(colors.primary.500)] [--dark-color:theme(colors.primary.600)] [--light-color:theme(colors.primary.50)] [--text-color:theme(colors.primary.900)]",
          secondary:
            "[--color:theme(colors.secondary.500)] [--dark-color:theme(colors.secondary.600)] [--light-color:theme(colors.secondary.50)] [--text-color:theme(colors.secondary.900)]",
          success:
            "[--color:theme(colors.success.500)] [--dark-color:theme(colors.success.600)] [--light-color:theme(colors.success.50)] [--text-color:theme(colors.success.900)]",
          warning:
            "[--color:theme(colors.warning.500)] [--dark-color:theme(colors.warning.600)] [--light-color:theme(colors.warning.50)] [--text-color:theme(colors.warning.900)]",
          danger:
            "[--color:theme(colors.danger.500)] [--dark-color:theme(colors.danger.600)] [--light-color:theme(colors.danger.50)] [--text-color:theme(colors.danger.900)]",
          error:
            "[--color:theme(colors.error.500)] [--dark-color:theme(colors.error.600)] [--light-color:theme(colors.error.50)] [--text-color:theme(colors.error.900)]",
          info:
            "[--color:theme(colors.info.500)] [--dark-color:theme(colors.info.600)] [--light-color:theme(colors.info.50)] [--text-color:theme(colors.info.900)]",
          default:
            "[--color:theme(colors.gray.500)] [--dark-color:theme(colors.gray.600)] [--light-color:theme(colors.gray.50)] [--text-color:theme(colors.gray.900)]",
        } as Record<AlertColor, string>,
      },
      defaultVariants: {
        variant: "contained",
        color: "primary",
      },
    }
  ),
  title: cva("font-semibold text-foreground"),
  description: cva("text-foreground/80 text-sm"),
  icon: cva("mt-0.5 inline-flex items-center justify-center"),
};


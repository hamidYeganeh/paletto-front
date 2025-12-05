import { cva } from "class-variance-authority";
import type { AccordionVariant, AccordionColor } from "./AccordionTypes";

export const AccordionStyles = {
  root: cva("w-full inline-flex flex-col gap-2"),
  item: cva("border border-transparent rounded-md overflow-hidden"),
  header: cva(
    [
      "w-full inline-flex items-center justify-between px-3 py-2",
      "font-semibold",
    ].join(" "),
    {
      variants: {
        variant: {
          contained: "bg-(--light-color) text-(--color)",
          outlined: "bg-transparent text-(--color) ring ring-(--color)",
          flat: "bg-(--light-color) text-(--color)",
          ghost: "bg-transparent text-(--color) border-2 border-(--color)",
          light: "bg-transparent text-(--color)",
          faded: "bg-gray-100 text-foreground",
        } as Record<AccordionVariant, string>,
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
        } as Record<AccordionColor, string>,
      },
      defaultVariants: { variant: "light", color: "default" },
    }
  ),
  content: cva("px-3 py-2 text-sm text-foreground"),
};


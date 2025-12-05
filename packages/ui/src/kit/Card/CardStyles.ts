import { cva } from "class-variance-authority";
import type { CardVariant, CardColor, CardRadius } from "./CardTypes";

export const CardStyles = {
  base: cva(
    [
      "relative inline-flex flex-col overflow-hidden",
      "rounded-md border border-transparent shadow-sm",
      "bg-background",
    ].join(" "),
    {
      variants: {
        variant: {
          contained: "bg-(--light-color)",
          outlined: "ring ring-(--color) bg-background",
          flat: "bg-background",
          ghost: "bg-transparent border-2 border-(--color)",
          light: "bg-transparent",
          faded: "bg-gray-100",
        } as Record<CardVariant, string>,
        color: {
          primary:
            "[--color:theme(colors.primary.500)] [--dark-color:theme(colors.primary.600)] [--light-color:theme(colors.primary.50)]",
          secondary:
            "[--color:theme(colors.secondary.500)] [--dark-color:theme(colors.secondary.600)] [--light-color:theme(colors.secondary.50)]",
          success:
            "[--color:theme(colors.success.500)] [--dark-color:theme(colors.success.600)] [--light-color:theme(colors.success.50)]",
          warning:
            "[--color:theme(colors.warning.500)] [--dark-color:theme(colors.warning.600)] [--light-color:theme(colors.warning.50)]",
          danger:
            "[--color:theme(colors.danger.500)] [--dark-color:theme(colors.danger.600)] [--light-color:theme(colors.danger.50)]",
          error:
            "[--color:theme(colors.error.500)] [--dark-color:theme(colors.error.600)] [--light-color:theme(colors.error.50)]",
          info:
            "[--color:theme(colors.info.500)] [--dark-color:theme(colors.info.600)] [--light-color:theme(colors.info.50)]",
          default:
            "[--color:theme(colors.gray.500)] [--dark-color:theme(colors.gray.600)] [--light-color:theme(colors.gray.50)]",
        } as Record<CardColor, string>,
        radius: {
          none: "rounded-none",
          xs: "rounded-xs",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-xl",
          full: "rounded-full",
        } as Record<CardRadius, string>,
      },
      defaultVariants: {
        variant: "flat",
        color: "default",
        radius: "md",
      },
    }
  ),
  header: cva("px-4 py-3 font-semibold text-foreground"),
  body: cva("px-4 py-3 text-foreground"),
  footer: cva("px-4 py-3 text-foreground/80"),
};


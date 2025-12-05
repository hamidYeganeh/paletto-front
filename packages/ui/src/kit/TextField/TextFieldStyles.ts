import { cva } from "class-variance-authority";
import type { FieldVariant, FieldColor, FieldSize, FieldRadius } from "./TextFieldTypes";

export const TextFieldStyles = {
  base: cva("relative inline-flex", {
    variants: {
      fullWidth: { true: "w-full", false: "" },
    },
    defaultVariants: { fullWidth: false },
  }),
  wrapper: cva(
    [
      "relative inline-flex items-center gap-1.5 overflow-hidden",
      "rounded-md border border-transparent",
      "focus-within:ring-2 focus-within:ring-(--light-color)",
    ].join(" "),
    {
      variants: {
        variant: {
          contained: "bg-(--light-color)",
          outlined: "ring ring-(--color) bg-transparent",
          flat: "bg-(--light-color)",
          ghost: "bg-transparent border-2 border-(--color)",
          light: "bg-transparent",
          faded: "ring ring-gray-100 bg-gray-100",
          underlined: "border-b-2 border-(--color) rounded-none",
        } as Record<FieldVariant, string>,
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
        } as Record<FieldColor, string>,
        size: {
          xs: "h-8 px-2 text-xs",
          sm: "h-9 px-3 text-sm",
          md: "h-10 px-4 text-sm",
          lg: "h-11 px-5 text-base",
          xl: "h-12 px-6 text-lg",
        } as Record<FieldSize, string>,
        radius: {
          none: "rounded-none",
          xs: "rounded-xs",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-xl",
          full: "rounded-full",
        } as Record<FieldRadius, string>,
      },
      defaultVariants: {
        variant: "contained",
        color: "primary",
        size: "md",
        radius: "md",
      },
    }
  ),
  label: cva("font-medium text-foreground"),
  input: cva("bg-transparent text-foreground placeholder:text-foreground/60"),
  icon: cva("inline-flex items-center justify-center"),
};


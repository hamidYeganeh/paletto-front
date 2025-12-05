import { cva } from "class-variance-authority";
import type { ModalVariant, ModalColor, ModalSize, ModalRadius } from "./ModalTypes";

export const ModalStyles = {
  backdrop: cva("fixed inset-0 bg-black/50 backdrop-blur-sm"),
  container: cva("fixed inset-0 flex items-center justify-center p-4"),
  panel: cva(
    [
      "relative inline-flex flex-col overflow-hidden",
      "rounded-md border border-transparent",
      "shadow-xl",
      "outline-none",
      "transition-transform transition-opacity",
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
        } as Record<ModalVariant, string>,
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
        } as Record<ModalColor, string>,
        size: {
          sm: "max-w-sm w-full",
          md: "max-w-md w-full",
          lg: "max-w-lg w-full",
          xl: "max-w-2xl w-full",
        } as Record<ModalSize, string>,
        radius: {
          none: "rounded-none",
          xs: "rounded-xs",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-xl",
          full: "rounded-full",
        } as Record<ModalRadius, string>,
      },
      defaultVariants: {
        variant: "contained",
        color: "primary",
        size: "md",
        radius: "md",
      },
    }
  ),
  header: cva("px-4 py-3 font-semibold text-foreground flex items-center justify-between"),
  body: cva("px-4 py-3 text-foreground"),
  footer: cva("px-4 py-3 flex items-center justify-end gap-2"),
  closeButton: cva(
    [
      "absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center",
      "rounded-full bg-background text-foreground/70 hover:text-foreground",
    ].join(" ")
  ),
};


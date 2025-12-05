import { cva } from "class-variance-authority";
import type { TooltipVariant, TooltipColor } from "./TooltipTypes";

export const TooltipStyles = {
  wrapper: cva("relative inline-block"),
  bubble: cva(
    [
      "absolute z-50 px-2.5 py-1.5 text-xs rounded-md",
      "border border-transparent shadow-sm",
      "opacity-0 pointer-events-none",
      "data-[open=true]:opacity-100",
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
        } as Record<TooltipVariant, string>,
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
        } as Record<TooltipColor, string>,
        placement: {
          top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
          right: "left-full top-1/2 -translate-y-1/2 ml-2",
          bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
          left: "right-full top-1/2 -translate-y-1/2 mr-2",
        },
      },
      defaultVariants: {
        variant: "contained",
        color: "default",
        placement: "top",
      },
    }
  ),
  arrow: cva(
    [
      "absolute w-2 h-2 rotate-45",
      "bg-(--color)",
      "data-[variant=outlined]:bg-transparent",
      "data-[variant=outlined]:ring data-[variant=outlined]:ring-(--color)",
      "data-[variant=flat]:bg-(--light-color)",
      "data-[variant=ghost]:bg-transparent",
      "data-[variant=faded]:bg-gray-100",
    ].join(" "),
    {
      variants: {
        placement: {
          top: "-bottom-1 left-1/2 -translate-x-1/2",
          right: "-left-1 top-1/2 -translate-y-1/2",
          bottom: "-top-1 left-1/2 -translate-x-1/2",
          left: "-right-1 top-1/2 -translate-y-1/2",
        },
      },
      defaultVariants: { placement: "top" },
    }
  ),
};


import { cva } from "class-variance-authority";
import type { TabsVariant, TabsColor, TabsSize } from "./TabsTypes";

export const TabsStyles = {
  root: cva("w-full inline-flex flex-col gap-3"),
  list: cva("inline-flex items-center gap-2 border-b border-transparent"),
  tab: cva(
    [
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md",
      "font-semibold border border-transparent",
      "outline-none focus-visible:ring-2 focus-visible:ring-(--light-color)",
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
        } as Record<TabsVariant, string>,
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
        } as Record<TabsColor, string>,
        size: {
          sm: "text-xs",
          md: "text-sm",
          lg: "text-base",
        } as Record<TabsSize, string>,
        selected: {
          true: "bg-(--color) text-(--text-color)",
          false: "",
        },
      },
      defaultVariants: {
        variant: "light",
        color: "default",
        size: "md",
        selected: false,
      },
    }
  ),
  panel: cva("w-full text-sm text-foreground"),
};


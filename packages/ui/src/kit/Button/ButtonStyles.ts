import { cva } from "class-variance-authority";
import type {
  ButtonVariant,
  ButtonColor,
  ButtonSize,
  ButtonRadius,
} from "./ButtonTypes";

export const ButtonStyles = {
  base: cva(
    [
      "relative inline-flex min-w-max items-center justify-center gap-1.5 overflow-hidden",
      "rounded-md font-semibold outline-none whitespace-nowrap select-none subpixel-antialiased box-border",
      "border border-transparent focus-visible:ring-2 focus-visible:ring-(--light-color) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      "disabled:opacity-60 disabled:cursor-not-allowed",
    ].join(" "),
    {
      variants: {
        variant: {
          contained:
            "bg-(--color) text-(--text-color) shadow-sm hover:bg-(--dark-color)",
          solid:
            "bg-(--color) text-(--text-color) shadow-sm hover:bg-(--dark-color)",
          outlined:
            "ring ring-(--color) bg-transparent text-(--color) hover:ring-2 hover:bg-(--light-color)",
          bordered:
            "ring ring-(--color) bg-transparent text-(--color) hover:ring-2 hover:bg-(--light-color)",
          light: "bg-transparent text-(--color) hover:bg-(--light-color)",
          flat: "text-(--color) bg-(--light-color)",
          ghost:
            "bg-transparent border-2 border-(--color) text-(--color) hover:bg-(--color) hover:text-(--text-color)",
          faded:
            "ring ring-gray-100 text-(--color) bg-gray-100 hover:bg-gray-200",
          shadow:
            "bg-(--color) text-(--text-color) shadow-lg shadow-(--light-color) hover:shadow-xl hover:bg-(--dark-color)",
        } as Record<ButtonVariant | "solid" | "bordered", string>,
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
          info: "[--color:theme(colors.info.500)] [--dark-color:theme(colors.info.600)] [--light-color:theme(colors.info.50)] [--text-color:theme(colors.info.50)]",
          default:
            "[--color:theme(colors.gray.500)] [--dark-color:theme(colors.gray.600)] [--light-color:theme(colors.gray.50)] [--text-color:theme(colors.gray.50)]",
        } as Record<ButtonColor, string>,
        size: {
          xs: "h-8 px-2 text-xs",
          sm: "h-9 px-3 text-sm",
          md: "h-10 px-4 text-sm",
          lg: "h-11 px-5 text-base",
          xl: "h-12 px-6 text-lg",
        } as Record<ButtonSize, string>,
        radius: {
          none: "rounded-none",
          xs: "rounded-xs",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-xl",
          full: "rounded-full",
        } as Record<ButtonRadius, string>,
        fullWidth: {
          true: "w-full",
          false: "",
        },
        disabledAnimation: {
          true: "",
          false: "transition-all",
        },
        loading: {
          true: "",
          false: "",
        },
        isIconOnly: {
          true: "",
          false: "",
        },
      },
      defaultVariants: {
        variant: "contained",
        color: "primary",
        size: "md",
        radius: "md",
        fullWidth: false,
        disabledAnimation: false,
        loading: false,
        isIconOnly: false,
      },
    }
  ),
  content: cva("relative inline-flex items-center gap-1.5"),
  icon: cva("inline-flex items-center justify-center", {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      } as Record<ButtonSize, string>,
    },
    defaultVariants: { size: "md" },
  }),
  spinner: cva("inline-block animate-spin", {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-4 h-4",
        lg: "w-5 h-5",
        xl: "w-6 h-6",
      } as Record<ButtonSize, string>,
    },
    defaultVariants: { size: "md" },
  }),
};

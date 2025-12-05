import { cva } from "class-variance-authority";
import type { AvatarVariant, AvatarColor, AvatarSize, AvatarRadius } from "./AvatarTypes";

export const AvatarStyles = {
  base: cva(
    [
      "inline-flex items-center justify-center",
      "border border-transparent",
      "overflow-hidden select-none",
      "font-semibold",
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
        } as Record<AvatarVariant, string>,
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
        } as Record<AvatarColor, string>,
        size: {
          xs: "w-8 h-8 text-xs",
          sm: "w-9 h-9 text-sm",
          md: "w-10 h-10 text-sm",
          lg: "w-12 h-12 text-base",
          xl: "w-14 h-14 text-lg",
        } as Record<AvatarSize, string>,
        radius: {
          none: "rounded-none",
          xs: "rounded-xs",
          sm: "rounded-sm",
          md: "rounded-md",
          lg: "rounded-lg",
          xl: "rounded-xl",
          full: "rounded-full",
        } as Record<AvatarRadius, string>,
        isBordered: {
          true: "ring-2 ring-(--light-color)",
          false: "",
        },
      },
      defaultVariants: {
        variant: "contained",
        color: "default",
        size: "md",
        radius: "full",
        isBordered: false,
      },
    }
  ),
  image: cva("w-full h-full object-cover", {
    variants: {
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      } as Record<AvatarRadius, string>,
    },
    defaultVariants: { radius: "full" },
  }),
  fallback: cva("w-full h-full inline-flex items-center justify-center"),
};


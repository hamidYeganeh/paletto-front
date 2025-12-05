import { cva } from "class-variance-authority";
import type { ComboBoxVariant, ComboBoxColor } from "./ComboBoxTypes";

export const ComboBoxStyles = {
  root: cva("combobox inline-flex w-full flex-col gap-1", {
    variants: {
      invalid: { true: "", false: "" },
      disabled: { true: "opacity-60 cursor-not-allowed", false: "" },
    },
    defaultVariants: { invalid: false, disabled: false },
  }),
  label: cva("text-sm font-medium text-foreground"),
  inputGroup: cva("combobox__input-group relative inline-flex items-center w-full", {
    variants: {
      variant: {
        contained: "rounded-md bg-(--light-color)",
        outlined: "rounded-md ring ring-(--color)",
        flat: "rounded-md bg-(--light-color)",
        ghost: "rounded-md border-2 border-(--color)",
        light: "rounded-md",
        faded: "rounded-md bg-gray-100",
      } as Record<ComboBoxVariant, string>,
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
      } as Record<ComboBoxColor, string>,
      open: { true: "", false: "" },
      invalid: { true: "ring-danger-500", false: "" },
      disabled: { true: "", false: "" },
    },
    defaultVariants: { variant: "light", color: "default", open: false, invalid: false, disabled: false },
  }),
  input: cva("w-full bg-transparent outline-none px-3 py-2 text-sm text-foreground"),
  trigger: cva("combobox__trigger absolute right-2 inline-flex items-center justify-center text-muted", {
    variants: {
      focusVisible: { true: "ring-2 ring-(--light-color)", false: "" },
      disabled: { true: "opacity-60 cursor-not-allowed", false: "" },
      open: { true: "", false: "" },
    },
    defaultVariants: { focusVisible: false, disabled: false, open: false },
  }),
  popover: cva("combobox__popover absolute z-50 mt-2 w-full rounded-md border border-border bg-background p-1 shadow-sm", {
    variants: {
      open: { true: "", false: "opacity-0 pointer-events-none" },
    },
    defaultVariants: { open: false },
  }),
  list: cva("max-h-60 overflow-auto"),
  item: cva("px-3 py-2 text-sm inline-flex w-full items-start gap-2 hover:bg-(--light-color) cursor-pointer", {
    variants: {
      disabled: { true: "opacity-60 cursor-not-allowed", false: "" },
      selected: { true: "bg-(--color) text-(--text-color)", false: "" },
    },
    defaultVariants: { disabled: false, selected: false },
  }),
  itemIndicator: cva("ml-auto text-muted"),
  description: cva("text-foreground/70 text-xs"),
};


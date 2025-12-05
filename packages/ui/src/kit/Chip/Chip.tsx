"use client";

import type { FC } from "react";
import type { ChipProps } from "./ChipTypes";
import { ChipStyles } from "./ChipStyles";
import { cn } from "../../utils/cn";

const Chip: FC<ChipProps> = ({ children, variant = "flat", color = "default", size = "md", className }) => {
  return <span className={cn(ChipStyles.base({ variant, color, size }), className)}>{children}</span>;
};

export default Chip;


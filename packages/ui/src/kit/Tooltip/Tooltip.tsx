"use client";

import { useState } from "react";
import type { FC, ReactElement } from "react";
import type { TooltipProps } from "./TooltipTypes";
import { TooltipStyles } from "./TooltipStyles";
import { cn } from "../../utils/cn";

type Placement = "top" | "right" | "bottom" | "left";

const Tooltip: FC<TooltipProps & { placement?: Placement }> = ({
  content,
  children,
  variant = "contained",
  color = "default",
  className,
  placement = "top",
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span
      className={cn(TooltipStyles.wrapper(), className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {children as ReactElement}
      <span
        aria-hidden
        data-open={open}
        className={TooltipStyles.bubble({ variant, color, placement })}
      >
        {content}
        <span
          data-variant={variant}
          className={TooltipStyles.arrow({ placement })}
        />
      </span>
    </span>
  );
};

export default Tooltip;


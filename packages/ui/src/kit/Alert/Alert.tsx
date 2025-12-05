"use client";

import type { FC } from "react";
import { AlertStyles } from "./AlertStyles";
import type { AlertProps } from "./AlertTypes";
import { cn } from "../../utils/cn";

const Alert: FC<AlertProps> = ({ title, description, variant = "contained", color = "primary", className, startIcon, endIcon }) => {
  return (
    <div className={cn(AlertStyles.base({ variant, color }), className)} role="status">
      {startIcon ? <span className={AlertStyles.icon()}>{startIcon}</span> : null}
      <div className="flex-1 min-w-0">
        {title ? <div className={AlertStyles.title()}>{title}</div> : null}
        {description ? <div className={AlertStyles.description()}>{description}</div> : null}
      </div>
      {endIcon ? <span className={AlertStyles.icon()}>{endIcon}</span> : null}
    </div>
  );
};

export default Alert;


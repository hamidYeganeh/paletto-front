"use client";

import type { FC } from "react";
import type { CardProps } from "./CardTypes";
import { CardStyles } from "./CardStyles";
import { cn } from "../../utils/cn";

const Card: FC<CardProps> = ({ children, header, footer, variant = "flat", color = "default", radius = "md", className }) => {
  return (
    <div className={cn(CardStyles.base({ variant, color, radius }), className)}>
      {header ? <div className={CardStyles.header()}>{header}</div> : null}
      <div className={CardStyles.body()}>{children}</div>
      {footer ? <div className={CardStyles.footer()}>{footer}</div> : null}
    </div>
  );
};

export default Card;


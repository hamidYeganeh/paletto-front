import type { RefObject, MouseEvent } from "react";

export type RippleRef = {
  createRipple: (event: MouseEvent<HTMLElement>) => void;
};

export type RippleProps = {
  parentRef: RefObject<HTMLElement | null>;
};

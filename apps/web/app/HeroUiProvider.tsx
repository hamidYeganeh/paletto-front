"use client";

import { PropsWithChildren } from "react";

export function HeroUiProvider(props: PropsWithChildren) {
  const { children } = props;
  return <>{children}</>;
}

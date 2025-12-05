"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import type { SwitchProps } from "./SwitchTypes";
import { SwitchStyles } from "./SwitchStyles";
import { cn } from "../../utils/cn";

const Switch = ({ label, checked, defaultChecked, onChange, disabled, className }: SwitchProps) => {
  const [internal, setInternal] = useState<boolean>(defaultChecked ?? false);
  const isControlled = typeof checked === "boolean";
  const value = isControlled ? !!checked : internal;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };

  return (
    <label className={cn(SwitchStyles.base(), className)}>
      <input
        type="checkbox"
        role="switch"
        checked={value}
        onChange={handleChange}
        disabled={disabled}
        className="peer sr-only"
      />
      <span className={SwitchStyles.track()}>
        <span className={SwitchStyles.thumb()} />
      </span>
      {label ? <span className={SwitchStyles.label()}>{label}</span> : null}
    </label>
  );
};

export default Switch;


"use client";

import { forwardRef, useId } from "react";
import type { ChangeEvent, FocusEvent } from "react";
import type { TextFieldProps } from "./TextFieldTypes";
import { TextFieldStyles } from "./TextFieldStyles";
import { cn } from "../../utils/cn";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      label,
      description,
      errorMessage,
      isDisabled,
      isReadOnly,
      isRequired,
      variant = "contained",
      color = "primary",
      size = "md",
      radius = "md",
      fullWidth,
      startIcon,
      endIcon,
      className,
      type = "text",
      name,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      autoComplete,
      id,
      invalid,
    },
    ref
  ) {
    const uid = useId();
    const inputId = id ?? uid;
    const helpId = `${inputId}-help`;
    const errId = `${inputId}-err`;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
    };
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    };

    return (
      <div className={cn(TextFieldStyles.base({ fullWidth }), className)}>
        {label ? (
          <label htmlFor={inputId} className={TextFieldStyles.label()}>
            {label}
            {isRequired ? <span aria-hidden>*</span> : null}
          </label>
        ) : null}
        <div
          className={TextFieldStyles.wrapper({ variant, color, size, radius })}
        >
          {startIcon ? (
            <span className={TextFieldStyles.icon()}>{startIcon}</span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            aria-describedby={description ? helpId : undefined}
            aria-errormessage={errorMessage ? errId : undefined}
            aria-invalid={invalid || undefined}
            aria-required={isRequired || undefined}
            disabled={isDisabled}
            readOnly={isReadOnly}
            className={TextFieldStyles.input()}
          />
          {endIcon ? (
            <span className={TextFieldStyles.icon()}>{endIcon}</span>
          ) : null}
        </div>
        {description ? (
          <div id={helpId} className="mt-1 text-foreground/70 text-xs">
            {description}
          </div>
        ) : null}
        {errorMessage ? (
          <div id={errId} role="alert" className="mt-1 text-danger-500 text-xs">
            {errorMessage}
          </div>
        ) : null}
      </div>
    );
  }
);

export default TextField;

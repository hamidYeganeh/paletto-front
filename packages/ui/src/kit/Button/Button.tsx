"use client";

import { useMemo, useRef, useState } from "react";
import type { FC, ElementType, MouseEvent } from "react";
import { ButtonStyles } from "./ButtonStyles";
import type { ButtonProps } from "./ButtonTypes";
import { cn } from "../../utils/cn";
import { Ripple } from "../../shared/Ripple";
import type { RippleRef } from "../../shared/Ripple";

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    onPress,
    variant,
    color,
    size,
    radius,
    disabledRipple = false,
    className,
    fullWidth,
    disabledAnimation,
    disableAnimation,
    loading = false,
    isPending,
    isDisabled,
    spinnerPlacement = "center",
    spinner,
    isIconOnly = false,
    startIcon,
    endIcon,
    as,
    href,
    ...otherProps
  } = props;

  const buttonRef = useRef<HTMLElement>(null);
  const rippleRef = useRef<RippleRef>(null);

  const Component: ElementType = href ? "a" : (as ?? "button");
  const pending = Boolean(loading || isPending);
  const disabledProp =
    "disabled" in otherProps
      ? ((otherProps as { disabled?: boolean }).disabled ?? false)
      : false;
  const computedDisabled = Boolean(isDisabled || disabledProp || pending);

  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (rippleRef.current && !disabledRipple) {
      rippleRef.current.createRipple(e);
    }
    if (onClick) {
      onClick(e as MouseEvent<HTMLButtonElement>);
    }
    if (onPress) {
      onPress(e as MouseEvent<HTMLButtonElement>);
    }
  };

  const spinnerNode = useMemo(() => {
    return (
      spinner ?? <span aria-hidden className={ButtonStyles.spinner({ size })} />
    );
  }, [size, spinner]);

  const content = useMemo(() => {
    const state = {
      isPending: pending,
      isPressed: pressed,
      isHovered: hovered,
      isFocused: focused,
      isFocusVisible: focusVisible,
      isDisabled: computedDisabled,
    };
    return (
      <>
        {pending && spinnerPlacement === "start" ? spinnerNode : null}
        {startIcon ? (
          <span className={ButtonStyles.icon({ size })}>{startIcon}</span>
        ) : null}
        <span className={cn(isIconOnly && "sr-only")}>
          {typeof children === "function" ? children(state) : children}
        </span>
        {endIcon ? (
          <span className={ButtonStyles.icon({ size })}>{endIcon}</span>
        ) : null}
        {pending && spinnerPlacement === "end" ? spinnerNode : null}
      </>
    );
  }, [
    children,
    endIcon,
    isIconOnly,
    pending,
    size,
    spinnerNode,
    spinnerPlacement,
    startIcon,
    pressed,
    hovered,
    focused,
    focusVisible,
    computedDisabled,
  ]);

  const rootClasses = cn(
    className,
    ButtonStyles.base({
      variant,
      color,
      size,
      radius,
      disabledAnimation: disableAnimation ?? disabledAnimation,
      fullWidth,
      loading: pending,
      isIconOnly,
    })
  );

  const buttonAttrs =
    Component === "button" ? { disabled: computedDisabled } : undefined;
  const anchorAttrs = Component === "a" && href ? { href } : undefined;

  return (
    <Component
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={() => {
        setFocused(true);
        setFocusVisible(true);
      }}
      onBlur={() => {
        setFocused(false);
        setFocusVisible(false);
      }}
      className={rootClasses}
      aria-busy={pending}
      data-hovered={hovered || undefined}
      data-pressed={pressed || undefined}
      data-focused={focused || undefined}
      data-focus-visible={focusVisible || undefined}
      data-pending={pending || undefined}
      data-disabled={computedDisabled || undefined}
      {...buttonAttrs}
      {...anchorAttrs}
      {...otherProps}
    >
      <Ripple parentRef={buttonRef} ref={rippleRef} />
      {pending && spinnerPlacement === "center" ? (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          {spinnerNode}
        </span>
      ) : null}
      <span className={ButtonStyles.content()}>{content}</span>
    </Component>
  );
};

Button.displayName = "Button";

export default Button;

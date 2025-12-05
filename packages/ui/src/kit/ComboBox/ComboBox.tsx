"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FC, ChangeEvent, KeyboardEvent } from "react";
import type { ComboBoxProps } from "./ComboBoxTypes";
import { ComboBoxStyles } from "./ComboBoxStyles";
import { cn } from "../../utils/cn";

const ComboBox: FC<ComboBoxProps> = ({
  label,
  description,
  items,
  inputValue,
  defaultInputValue,
  onInputChange,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  isOpen,
  defaultOpen,
  onOpenChange,
  disabledKeys,
  isDisabled,
  isRequired,
  isInvalid,
  name,
  autoComplete,
  allowsCustomValue,
  allowsEmptyCollection,
  defaultFilter,
  variant = "light",
  color = "default",
  className,
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    defaultInputValue ?? ""
  );
  const [internalOpen, setInternalOpen] = useState<boolean>(
    Boolean(defaultOpen)
  );
  const [internalSelected, setInternalSelected] = useState<string | null>(
    defaultSelectedKey ?? null
  );

  const open = isOpen ?? internalOpen;
  const value = inputValue ?? internalValue;
  const selected = selectedKey ?? internalSelected;
  const rootRef = useRef<HTMLDivElement | null>(null);

  const setOpen = useCallback(
    (v: boolean) => {
      setInternalOpen(v);
      onOpenChange?.(v);
    },
    [onOpenChange]
  );

  const setValue = useCallback(
    (v: string) => {
      setInternalValue(v);
      onInputChange?.(v);
    },
    [onInputChange]
  );

  const setSelected = useCallback(
    (k: string | null) => {
      setInternalSelected(k);
      onSelectionChange?.(k);
    },
    [onSelectionChange]
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [open, setOpen]);

  const disabledSet = new Set(disabledKeys ?? []);

  const filtered = useMemo(() => {
    if (!value) return items;
    const f =
      defaultFilter ??
      ((text: string, iv: string) =>
        text.toLowerCase().includes(iv.toLowerCase()));
    return items.filter((i) => {
      const text = typeof i.label === "string" ? i.label : String(i.key);
      return f(text, value);
    });
  }, [items, value, defaultFilter]);

  const showEmpty =
    !allowsEmptyCollection && filtered.length === 0 ? [] : filtered;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!open) setOpen(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (allowsCustomValue) {
        setSelected(value ? value : null);
        setOpen(false);
      }
    }
  };

  const invalid = Boolean(isInvalid);
  const disabled = Boolean(isDisabled);

  return (
    <div
      ref={rootRef}
      className={cn(ComboBoxStyles.root({ invalid, disabled }), className)}
      data-invalid={invalid || undefined}
      data-disabled={disabled || undefined}
    >
      {label ? <label className={ComboBoxStyles.label()}>{label}</label> : null}
      <div
        className={ComboBoxStyles.inputGroup({
          variant,
          color,
          open,
          invalid,
          disabled,
        })}
      >
        <input
          className={ComboBoxStyles.input()}
          name={name}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-required={isRequired || undefined}
          aria-expanded={open || undefined}
        />
        <button
          type="button"
          className={ComboBoxStyles.trigger({ open })}
          onClick={() => setOpen(!open)}
          aria-label="Toggle combobox"
          disabled={disabled}
        >
          <span>▾</span>
        </button>
      </div>
      {description ? (
        <div className={ComboBoxStyles.description()}>{description}</div>
      ) : null}
      <div className={ComboBoxStyles.popover({ open })} role="presentation">
        <div className={ComboBoxStyles.list()} role="listbox">
          {showEmpty.map((i) => {
            const isSel = selected === i.key;
            const isItemDisabled = disabledSet.has(i.key) || i.disabled;
            return (
              <div
                key={i.key}
                role="option"
                aria-selected={isSel}
                className={ComboBoxStyles.item({
                  selected: isSel,
                  disabled: Boolean(isItemDisabled),
                })}
                onClick={() => {
                  if (isItemDisabled) return;
                  setSelected(i.key);
                  setValue(
                    typeof i.label === "string" ? i.label : String(i.key)
                  );
                  setOpen(false);
                }}
              >
                <span>{i.label}</span>
                {i.description ? (
                  <span className={ComboBoxStyles.description()}>
                    {i.description}
                  </span>
                ) : null}
                {isSel ? (
                  <span className={ComboBoxStyles.itemIndicator()}>✓</span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComboBox;

"use client";

import { useState, useMemo } from "react";
import type { FC } from "react";
import type { TabsProps } from "./TabsTypes";
import { TabsStyles } from "./TabsStyles";
import { cn } from "../../utils/cn";

const Tabs: FC<TabsProps> = ({
  items,
  selectedKey,
  defaultKey,
  onSelectionChange,
  variant = "light",
  color = "default",
  size = "md",
  className,
}) => {
  const initial = useMemo(() => {
    if (selectedKey) return selectedKey;
    if (defaultKey) return defaultKey;
    return items[0]?.key;
  }, [selectedKey, defaultKey, items]);
  const [internal, setInternal] = useState<string | undefined>(initial);
  const current = selectedKey ?? internal;

  const onSelect = (key: string) => {
    setInternal(key);
    onSelectionChange?.(key);
  };

  const active = items.find((i) => i.key === current) ?? items[0];

  return (
    <div className={cn(TabsStyles.root(), className)}>
      <div className={TabsStyles.list()} role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={current === item.key}
            className={TabsStyles.tab({ variant, color, size, selected: current === item.key })}
            onClick={() => onSelect(item.key)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" className={TabsStyles.panel()}>
        {active?.content}
      </div>
    </div>
  );
};

export default Tabs;


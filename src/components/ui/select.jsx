import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import React from "react";
import clsx from "clsx";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export function SelectTrigger({ className, children, ...props }) {
  return (
    <SelectPrimitive.Trigger className={clsx("inline-flex h-10 w-full items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 px-3 text-sm", className)} {...props}>
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown className="w-4 h-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}
export function SelectContent({ className, children, ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className={clsx("overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-xl", className)} {...props}>
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
export function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item className={clsx("relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm outline-none hover:bg-neutral-900", className)} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
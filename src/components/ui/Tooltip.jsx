import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export function TooltipContent({ children, ...props }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content sideOffset={6} className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-100 shadow-xl" {...props}>
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import clsx from "clsx";

export const Tabs = TabsPrimitive.Root;
export function TabsList({ className, ...props }) {
  return <TabsPrimitive.List className={clsx("inline-flex gap-2 rounded-xl bg-neutral-900 p-1 border border-neutral-800", className)} {...props} />;
}
export function TabsTrigger({ className, ...props }) {
  return <TabsPrimitive.Trigger className={clsx("data-[state=active]:bg-neutral-800 data-[state=active]:text-white rounded-lg px-3 py-1.5 text-sm text-neutral-300 hover:text-white", className)} {...props} />;
}
export function TabsContent({ className, ...props }) {
  return <TabsPrimitive.Content className={clsx("outline-none", className)} {...props} />;
}

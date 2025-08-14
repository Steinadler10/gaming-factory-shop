import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import clsx from "clsx";

export function Sheet({ open, onOpenChange, children }) {
  return <Dialog.Root open={open} onOpenChange={onOpenChange}>{children}</Dialog.Root>;
}
export const SheetTrigger = Dialog.Trigger;
export function SheetContent({ className, children }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className={clsx("fixed right-0 top-0 h-full w-full sm:max-w-md bg-neutral-950 border-l border-neutral-800 p-4 shadow-2xl focus:outline-none", className)}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
export function SheetHeader({ className, ...props }) { return <div className={clsx("mb-2", className)} {...props} />; }
export function SheetTitle({ className, ...props }) { return <h2 className={clsx("text-lg font-semibold", className)} {...props} />; }

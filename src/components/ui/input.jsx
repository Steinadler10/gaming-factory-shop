import React, { forwardRef } from "react";
import clsx from "clsx";
export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input ref={ref} className={clsx("h-10 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 text-sm outline-none focus:border-neutral-600", className)} {...props} />
  );
});
export default Input;
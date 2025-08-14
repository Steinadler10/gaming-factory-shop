import React, { forwardRef } from "react";
import clsx from "clsx";

const base = "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none ring-offset-neutral-950";
const variants = {
  default: "bg-neutral-800 text-white hover:bg-neutral-700",
  secondary: "bg-neutral-900 text-neutral-100 border border-neutral-700 hover:bg-neutral-800",
  outline: "border border-neutral-700 text-neutral-100 hover:bg-neutral-900",
  ghost: "hover:bg-neutral-900",
};
const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-11 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

export const Button = forwardRef(function Button({ className, variant = "default", size = "default", ...props }, ref) {
  return <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
});
export default Button;
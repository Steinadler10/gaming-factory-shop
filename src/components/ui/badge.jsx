import React from "react";
import clsx from "clsx";
export function Badge({ className, variant = "secondary", ...props }) {
  const styles = variant === "secondary" ? "border border-neutral-700 bg-neutral-900 text-neutral-100" : "bg-neutral-800 text-neutral-100";
  return <span className={clsx("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs", styles, className)} {...props} />;
}
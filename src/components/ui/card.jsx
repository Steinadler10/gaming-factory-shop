import React from "react";
import clsx from "clsx";

export function Card({ className, ...props }) {
  return <div className={clsx("rounded-2xl border border-neutral-800 bg-neutral-950", className)} {...props} />;
}
export function CardHeader({ className, ...props }) { return <div className={clsx("p-4", className)} {...props} />; }
export function CardContent({ className, ...props }) { return <div className={clsx("p-4 pt-0", className)} {...props} />; }
export function CardFooter({ className, ...props }) { return <div className={clsx("p-4 pt-0", className)} {...props} />; }
export function CardTitle({ className, ...props }) { return <h3 className={clsx("text-lg font-semibold", className)} {...props} />; }
export function CardDescription({ className, ...props }) { return <p className={clsx("text-sm text-neutral-400", className)} {...props} />; }

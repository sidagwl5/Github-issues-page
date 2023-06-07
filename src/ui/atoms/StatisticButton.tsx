import { tx } from "@twind/core";
import { HTMLAttributes } from "react";

const StatisticButton = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={tx(
        "py-1 px-2 text-xs text-btn-text gap-0.5 flex items-center font-medium border border-btn-border rounded-md bg-btn-bg",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default StatisticButton;

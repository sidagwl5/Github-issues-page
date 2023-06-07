import { tx } from "@twind/core";
import { HTMLAttributes } from "react";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  stats?: null | string;
}

const StatisticButton = ({
  className,
  children,
  stats,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={tx(
        "text-xs text-btn-text gap-0.5 overflow-hidden flex items-center font-medium border border-btn-border rounded-md bg-btn-bg",
        className
      )}
      {...rest}
    >
      <section className={tx("py-1 px-3 gap-1 flex items-center")}>
        {children}
      </section>
      {stats && (
        <section
          className={tx(
            "py-1 px-3 bg-white h-full border-l border-l-btn-border"
          )}
        >
          {stats}
        </section>
      )}
    </button>
  );
};

export default StatisticButton;

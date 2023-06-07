import { tx } from "@twind/core";

export const Tag = ({
  color,
  name,
  className,
}: {
  color: string;
  name: string;
  className?: string;
}) => {
  return (
    <section
      className={tx(
        `bg-[#${color}] border-[#${color}] border-opacity-30`,
        "w-max px-2 text-xs flex items-center font-medium whitespace-nowrap rounded-2xl border",
        color.toLowerCase() === "b60205" ? "text-white" : "text-black",
        className
      )}
    >
      {name}
    </section>
  );
};

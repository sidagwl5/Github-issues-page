import { tx } from "@twind/core";

const whiteListedColors = ["b60205", "9149d1"];

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
        whiteListedColors.includes(color.toLowerCase())
          ? "text-white"
          : "text-black",
        className
      )}
    >
      {name}
    </section>
  );
};

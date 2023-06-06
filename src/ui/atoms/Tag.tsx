import { tx } from "@twind/core";

export const Tag = ({ color, name }) => {
  return (
    <section
      className={tx(
        `text-[#${color}] bg-[#${color}] border-[#${color}] border-opacity-30`,
        "w-max bg-opacity-20 px-2 text-xs flex items-center font-medium whitespace-nowrap rounded-2xl border"
      )}
    >
      {name}
    </section>
  );
};

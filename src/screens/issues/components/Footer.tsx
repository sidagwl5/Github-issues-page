import { tx } from "@twind/core";
import { AiFillGithub } from "react-icons/ai";

const termsConfig = [
  {
    title: "Terms",
  },
  {
    title: "Privacy",
  },
  {
    title: "Security",
  },
  {
    title: "Status",
  },
  {
    title: "Docs",
  },
  {
    title: "",
  },
];

const othersConfig = [
  {
    title: "Contact Github",
  },
  {
    title: "Pricing",
  },
  {
    title: "API",
  },
  {
    title: "Training",
  },
  {
    title: "Blog",
  },
  {
    title: "About",
  },
];

const Footer = () => {
  return (
    <footer
      className={tx(
        "w-full flex border-t flex-col !lg:flex-row border-t-border-mute py-10 justify-between gap-[10%] gap-y-5 max-w-[1280px] mx-auto items-center"
      )}
    >
      <section
        className={tx(
          "gap-4 sm:gap-6 flex flex-1 justify-between min-w-0 whitespace-nowrap"
        )}
      >
        {termsConfig.map((term) => (
          <a className={tx("text-xs text-accent-fg")} href="">
            {term.title}
          </a>
        ))}
      </section>
      <AiFillGithub className={tx("text-2xl relative text-fg-muted min-w-0")} />
      <section
        className={tx(
          "gap-4 sm:gap-6 flex flex-1 justify-between whitespace-nowrap"
        )}
      >
        {othersConfig.map((term) => (
          <a className={tx("text-xs text-accent-fg")} href="">
            {term.title}
          </a>
        ))}
      </section>
    </footer>
  );
};

export default Footer;

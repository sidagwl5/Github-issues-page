import { Tab } from "@headlessui/react";
import { tx } from "@twind/core";
import { GoLightBulb } from "react-icons/go";
import Footer from "./Footer";
import { ITabsConfig } from "../Issues";

export const Content = ({ tabsConfig }: { tabsConfig: ITabsConfig[] }) => {
  return (
    <Tab.Panels>
      <section className={tx("!pb-0 sm:p-3 md:p-6 flex-1")}>
        {tabsConfig.map((tag) => (
          <Tab.Panel
            className={tx(
              "max-w-[1220px] min-h-[70vh] sm:rounded-md overflow-hidden mx-auto border-border-default border"
            )}
          >
            {tag.content}
          </Tab.Panel>
        ))}
        <section className={tx("flex justify-center w-full my-10 px-3 gap-1")}>
          <GoLightBulb className={tx("top-[2px] relative text-fg-muted")} />
          <p className={tx("text-fg-muted text-sm w-max")}>
            <span className={tx("font-semibold text-fg-default")}>ProTip!</span>{" "}
            What's not been updated in a month:{" "}
            <span className={tx("text-accent-fg")}>updated:2021-08-17.</span>
          </p>
        </section>
        <Footer />
      </section>
    </Tab.Panels>
  );
};

export default Content;
